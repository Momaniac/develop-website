"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, Bot } from "lucide-react";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  BellA · Asistente IA de Develop
 * ─────────────────────────────────────────────────────────────────────────────
 *  Widget de chat con la UI FINAL lista para producción. La lógica de IA aún
 *  NO está conectada: todo el flujo (estado, historial, indicador de escritura,
 *  scroll, accesibilidad) ya está construido y el ÚNICO punto a integrar es la
 *  función `fetchBellaReply` más abajo.
 *
 *  INTEGRACIÓN DE IA (pendiente):
 *  - BellA debe responder con IA usando TODA la información del sitio,
 *    incluyendo actualizaciones de contenido en tiempo real (RAG sobre el CMS
 *    / contenido del sitio + recuperación en vivo).
 *  - Reemplazar el cuerpo de `fetchBellaReply` por una llamada al backend/LLM
 *    (p. ej. POST /api/bella con { messages }) y devolver el texto del asistente.
 *  - El modelo de mensajes (`ChatMessage`) y el historial ya están listos para
 *    enviarse como contexto de conversación.
 * ─────────────────────────────────────────────────────────────────────────────
 */

type ChatRole = "user" | "assistant";

interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "¡Hola! Soy BellA, la asistente con IA de Develop. Puedo orientarte sobre programas, certificaciones, talento y más. ¿En qué te ayudo hoy?",
};

const SUGGESTIONS = [
  "¿Qué es Lead Orchestrator?",
  "Quiero certificar a mi equipo",
  "Busco talento para mi empresa",
];

/**
 * PUNTO ÚNICO DE INTEGRACIÓN DE IA.
 * Llama al backend seguro `/api/bella` (Route Handler de servidor). La clave de
 * OpenAI vive solo en el servidor; aquí solo enviamos el historial (rol+texto) y
 * recibimos el texto de respuesta de BellA.
 */
async function fetchBellaReply(history: ChatMessage[]): Promise<string> {
  const res = await fetch("/api/bella", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      // Enviamos solo lo necesario: rol y contenido (sin ids internos).
      messages: history.map((m) => ({ role: m.role, content: m.content })),
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (data && typeof data.reply === "string" && data.reply.trim()) {
    return data.reply;
  }
  // Errores controlados del backend (429/4xx/5xx sin reply) → mensaje seguro.
  return "Ahora mismo no puedo responder. Inténtalo de nuevo en un momento o escríbenos a contacto@develop.com.mx.";
}

function genId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export default function BellaChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, typing, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    const userMsg: ChatMessage = { id: genId(), role: "user", content: trimmed };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setTyping(true);

    try {
      const reply = await fetchBellaReply(history);
      setMessages((prev) => [...prev, { id: genId(), role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: genId(),
          role: "assistant",
          content:
            "Ups, tuve un problema para responder. Inténtalo de nuevo o escríbenos a contacto@develop.com.mx.",
        },
      ]);
    } finally {
      setTyping(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <>
      {/* ───── Launcher ───── */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar chat de BellA" : "Abrir chat de BellA"}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_12px_40px_rgba(41,0,142,0.5)] sm:bottom-6 sm:right-6"
        style={{ background: "linear-gradient(135deg, #a78bfa 0%, #29008e 55%, #640354 100%)" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Bot size={26} />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-pink opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-accent-pink" />
          </span>
        )}
      </motion.button>

      {/* ───── Panel ───── */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Chat con BellA, asistente IA de Develop"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="fixed bottom-24 right-4 z-[95] flex h-[68vh] max-h-[560px] w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-[24px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:right-6"
            style={{
              background:
                "radial-gradient(ellipse 70% 40% at 20% 0%, rgba(41,0,142,0.5), transparent 70%), linear-gradient(160deg, #07052e 0%, #0f094f 60%, #12063b 100%)",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                style={{ background: "linear-gradient(135deg, #a78bfa, #640354)" }}
              >
                <Sparkles size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  BellA
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/60">
                    IA
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                  En línea · Asistente de Develop
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar chat"
                className="text-white/40 transition hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mensajes */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[80%] rounded-2xl rounded-br-md bg-white px-4 py-2.5 text-sm leading-6 text-hero-base"
                        : "max-w-[85%] rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.07] px-4 py-2.5 text-sm leading-6 text-white/85 backdrop-blur-sm"
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {/* Indicador de escritura */}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.07] px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-accent-glow"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Sugerencias (solo al inicio) */}
              {messages.length === 1 && !typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-xs text-white/70 transition hover:border-accent-glow/40 hover:bg-white/[0.1] hover:text-white"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-white/10 p-3">
              <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 focus-within:border-accent-glow/40">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  placeholder="Escribe tu mensaje…"
                  className="max-h-24 flex-1 resize-none bg-transparent py-1 text-sm text-white placeholder-white/35 outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  aria-label="Enviar mensaje"
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white transition disabled:opacity-40"
                  style={{ background: "linear-gradient(135deg, #a78bfa, #29008e)" }}
                >
                  <Send size={15} />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-white/30">
                BellA es una asistente con IA. Puede cometer errores; verifica información importante.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
