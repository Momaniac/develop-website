// Content-Security-Policy. 'unsafe-inline' en script/style es necesario porque el
// sitio es SSG (scripts de arranque de Next inline) y usa estilos inline de
// framer-motion/Tailwind; añadir nonces obligaría a render dinámico y rompería el
// SSG. El riesgo de XSS por inline está acotado: no hay CMS ni HTML de usuario, y el
// JSON-LD se serializa escapado (ver src/lib/jsonLd.ts). connect/form-action permiten
// FormSubmit (los formularios). Arranca en report-only; se endurece a enforce tras
// verificar 0 violaciones en el navegador.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self' https://formsubmit.co",
  "form-action 'self' https://formsubmit.co",
].join("; ");

// "Content-Security-Policy" = enforce (bloquea). "...-Report-Only" = solo reporta.
const CSP_HEADER = "Content-Security-Policy";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: CSP_HEADER, value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
