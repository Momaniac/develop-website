# Develop · Talent & Technology — Sitio web

Sitio institucional del ecosistema Develop, construido con **Next.js 15 (App Router)**, React 19, TypeScript, Tailwind CSS v4, Framer Motion y Three.js.

## Requisitos

- Node.js 20 o superior

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # entorno de desarrollo (http://localhost:3000)
npm run build    # build de producción
npm run start    # servir el build de producción
```

## Estructura

```
src/
├── app/          # App Router: rutas, metadata SEO, layout, robots.ts, sitemap.ts
├── views/        # Componentes de página (client components)
├── components/   # UI, Layout (Header/Footer), BellaChat, formularios, héroes WebGL
└── lib/          # Utilidades (envío de formularios)
public/logos/     # Logos y favicon
```

## Despliegue (Vercel — recomendado)

1. Subir el repositorio a GitHub.
2. En Vercel: **New Project** → importar el repo. Framework: **Next.js** (autodetectado). No requiere variables de entorno por ahora.
3. Configurar el dominio `www.develop.com.mx` en Vercel y apuntar el DNS.

> Alternativa Onrender: tipo **Web Service**, build `npm install && npm run build`, start `npm run start`.

## Pendiente tras el primer deploy

- **Activar formularios**: el primer envío de cualquier formulario manda un correo de
  confirmación de FormSubmit a `contacto@develop.com.mx`. Hay que abrirlo y confirmar
  una sola vez para que empiecen a llegar los mensajes.
- Integrar la IA de **BellA** (función `fetchBellaReply` en `src/components/BellaChat.tsx`).
- Imagen Open Graph dedicada (1200×630) para vistas previas sociales.
