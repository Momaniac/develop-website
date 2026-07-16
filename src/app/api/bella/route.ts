/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  POST /api/bella · Backend de la asistente IA (SOLO SERVIDOR)
 * ─────────────────────────────────────────────────────────────────────────────
 *  Encapsula la clave de OpenAI: se usa aquí, en el servidor, y NUNCA se envía
 *  al navegador. El cliente solo ve las respuestas de texto de BellA.
 *
 *  Defensas incluidas:
 *   - Validación estricta del body y de cada mensaje.
 *   - Solo se aceptan roles "user" / "assistant" del cliente; el system prompt
 *     real lo controla el servidor (el cliente no puede inyectar system).
 *   - Límite de longitud por mensaje y de historial (control de costos).
 *   - Rate limiting por IP: ráfaga (por minuto) + tope diario.
 *   - Verificación de origen (bloquea uso desde otros sitios en el navegador).
 *   - System prompt con reglas anti-inyección y de alcance (ver knowledge.ts).
 *   - Errores saneados: nunca se filtra la clave ni el detalle interno.
 *
 *  Nota: el rate limiting es en memoria (best-effort por instancia serverless).
 *  Para un límite global duradero conviene respaldarlo con un store externo
 *  (Supabase / Upstash Redis) más adelante.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "./knowledge";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ── Configuración ──────────────────────────────────────────────────────────
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = process.env.BELLA_MODEL || "gpt-4o-mini";

const MAX_MESSAGE_CHARS = 1000; // longitud máx. de un mensaje del usuario
const MAX_HISTORY = 12; // nº máx. de mensajes recientes que se envían al modelo
const MAX_TOTAL_INPUT_CHARS = 6000; // suma máx. de todo el historial enviado
const MAX_OUTPUT_TOKENS = 450; // techo de tokens de respuesta (control de costo)
const TEMPERATURE = 0.3;
const OPENAI_TIMEOUT_MS = 20000;

// Rate limiting por IP (en memoria).
const BURST_WINDOW_MS = 60_000; // ventana de ráfaga: 1 minuto
const BURST_MAX = 8; // máx. 8 mensajes por minuto
const DAY_WINDOW_MS = 24 * 60 * 60_000; // 24 horas
const DAY_MAX = 60; // máx. 60 mensajes por IP y día

// Orígenes permitidos (peticiones desde el navegador).
const ALLOWED_ORIGINS = [
  "https://www.develop.com.mx",
  "https://develop.com.mx",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

// Mensaje de reserva cuando algo falla o se supera el límite.
const FALLBACK_HELP =
  "escríbenos a contacto@develop.com.mx o desde la página de Contacto (/contacto).";

// ── Estado de rate limiting (en memoria) ───────────────────────────────────
type Bucket = { count: number; resetAt: number };
const burstByIp = new Map<string, Bucket>();
const dayByIp = new Map<string, Bucket>();

function hit(map: Map<string, Bucket>, ip: string, windowMs: number, max: number): boolean {
  const now = Date.now();
  const b = map.get(ip);
  if (!b || now >= b.resetAt) {
    map.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (b.count >= max) return false;
  b.count += 1;
  return true;
}

// Limpieza perezosa para que los Map no crezcan sin límite.
function sweep(map: Map<string, Bucket>) {
  if (map.size < 5000) return;
  const now = Date.now();
  for (const [k, v] of map) if (now >= v.resetAt) map.delete(k);
}

function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function originAllowed(req: Request): boolean {
  const origin = req.headers.get("origin");
  // Peticiones same-origin del propio sitio pueden no enviar Origin: se permiten.
  if (!origin) return true;
  return ALLOWED_ORIGINS.includes(origin);
}

// ── Validación / saneo del historial ───────────────────────────────────────
type ChatMsg = { role: "user" | "assistant"; content: string };

function sanitizeMessages(input: unknown): ChatMsg[] | null {
  if (!Array.isArray(input)) return null;
  const cleaned: ChatMsg[] = [];
  for (const raw of input) {
    if (!raw || typeof raw !== "object") continue;
    const role = (raw as { role?: unknown }).role;
    const content = (raw as { content?: unknown }).content;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") continue;
    const text = content.trim();
    if (!text) continue;
    cleaned.push({ role, content: text.slice(0, MAX_MESSAGE_CHARS) });
  }
  if (cleaned.length === 0) return null;

  // Solo los últimos N mensajes, y debe terminar en un turno del usuario.
  let recent = cleaned.slice(-MAX_HISTORY);
  while (recent.length && recent[recent.length - 1].role !== "user") recent = recent.slice(0, -1);
  if (recent.length === 0) return null;

  // Tope de longitud total.
  let total = 0;
  for (const m of recent) total += m.content.length;
  if (total > MAX_TOTAL_INPUT_CHARS) {
    while (recent.length > 1 && total > MAX_TOTAL_INPUT_CHARS) {
      total -= recent[0].content.length;
      recent = recent.slice(1);
    }
  }
  return recent;
}

function reply(text: string, status = 200) {
  return NextResponse.json({ reply: text }, { status });
}

// ── Handler ────────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  if (!originAllowed(req)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  if (!process.env.OPENAI_API_KEY) {
    // Config faltante: no exponemos el detalle al usuario.
    return reply(
      `BellA no está disponible en este momento. Mientras tanto, ${FALLBACK_HELP}`,
      503
    );
  }

  const ip = getClientIp(req);
  sweep(burstByIp);
  sweep(dayByIp);
  if (!hit(dayByIp, ip, DAY_WINDOW_MS, DAY_MAX) || !hit(burstByIp, ip, BURST_WINDOW_MS, BURST_MAX)) {
    return reply(
      `Has enviado muchos mensajes en poco tiempo. Espera un momento, por favor. Si necesitas ayuda ahora, ${FALLBACK_HELP}`,
      429
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const messages = sanitizeMessages((body as { messages?: unknown })?.messages);
  if (!messages) {
    return NextResponse.json({ error: "invalid_messages" }, { status: 400 });
  }

  // Llamada a OpenAI (la clave nunca sale del servidor).
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), OPENAI_TIMEOUT_MS);
  try {
    const res = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: TEMPERATURE,
        max_tokens: MAX_OUTPUT_TOKENS,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      // No filtramos el cuerpo del error de OpenAI al cliente.
      console.error("[bella] OpenAI error", res.status);
      return reply(
        `Ahora mismo no puedo responder. Inténtalo de nuevo en un momento o ${FALLBACK_HELP}`,
        502
      );
    }

    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = data.choices?.[0]?.message?.content?.trim();
    if (!text) {
      return reply(
        `No pude generar una respuesta esta vez. Inténtalo de nuevo o ${FALLBACK_HELP}`,
        502
      );
    }
    return reply(text);
  } catch (err) {
    const aborted = err instanceof Error && err.name === "AbortError";
    console.error("[bella]", aborted ? "timeout" : "fetch error");
    return reply(
      `Tardé demasiado en responder. Inténtalo de nuevo o ${FALLBACK_HELP}`,
      504
    );
  } finally {
    clearTimeout(timeout);
  }
}

// Métodos no soportados.
export function GET() {
  return NextResponse.json({ error: "method_not_allowed" }, { status: 405 });
}
