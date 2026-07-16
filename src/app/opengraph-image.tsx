import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

/**
 * Imagen Open Graph dedicada (1200×630) para vistas previas sociales.
 * On-brand: gradiente oscuro del sitio + logo real de Develop. Autocontenida
 * (sin llamadas de red): el logo se lee del disco y se incrusta como data URI.
 * Next.js la aplica automáticamente como og:image a todas las rutas.
 */
export const runtime = "nodejs";
export const alt = "Develop · Talent & Technology — Formación y certificación en IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = readFileSync(join(process.cwd(), "public/logos/logo-develop-bco.png"));
const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          backgroundColor: "#07052e",
          backgroundImage:
            "radial-gradient(1000px 520px at 18% 0%, rgba(41,0,142,0.55), transparent 60%), radial-gradient(900px 500px at 100% 100%, rgba(100,3,84,0.5), transparent 60%), linear-gradient(150deg, #07052e 0%, #0f094f 55%, #12063b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: pill */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              border: "1px solid rgba(255,255,255,0.16)",
              background: "rgba(255,255,255,0.06)",
              borderRadius: 999,
              padding: "12px 24px",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#a78bfa",
                boxShadow: "0 0 16px rgba(167,139,250,0.9)",
              }}
            />
            Ecosistema de talento TI
          </div>
        </div>

        {/* Middle: logo + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
          <img src={logoSrc} width={560} height={167} alt="Develop" style={{ objectFit: "contain" }} />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 56,
              lineHeight: 1.15,
              fontWeight: 700,
              maxWidth: 1000,
            }}
          >
            <span style={{ color: "#ffffff" }}>Formamos a los arquitectos de la&nbsp;</span>
            <span style={{ color: "#a78bfa" }}>era de la inteligencia artificial</span>
          </div>
        </div>

        {/* Bottom: stats + url */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 40, fontWeight: 700, color: "#ffffff" }}>35,000+</span>
              <span style={{ fontSize: 24, color: "rgba(255,255,255,0.6)" }}>Certificados</span>
            </div>
            <div style={{ display: "flex", width: 1, height: 56, background: "rgba(255,255,255,0.14)" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 40, fontWeight: 700, color: "#ffffff" }}>91%</span>
              <span style={{ fontSize: 24, color: "rgba(255,255,255,0.6)" }}>Certificación</span>
            </div>
            <div style={{ display: "flex", width: 1, height: 56, background: "rgba(255,255,255,0.14)" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 40, fontWeight: 700, color: "#ffffff" }}>96%</span>
              <span style={{ fontSize: 24, color: "rgba(255,255,255,0.6)" }}>Inserción laboral</span>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
            www.develop.com.mx
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
