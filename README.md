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

## Despliegue (Render · OnRender)

El sitio se despliega en **Render** como **Web Service** (servidor Node), con el dominio
`www.develop.com.mx` apuntado por DNS.

1. Servicio tipo **Web Service** conectado al repositorio.
2. Build command: `npm install && npm run build`
3. Start command: `npm run start`
4. **Variables de entorno** (Render → *Environment*):
   - `OPENAI_API_KEY` — clave de OpenAI para BellA. **Obligatoria** para que el chat responda.
   - `BELLA_MODEL` — opcional (por defecto `gpt-4o-mini`).

> BellA usa un Route Handler de servidor (`/api/bella`) que requiere el runtime de Node
> (`npm run start`), no un export estático. Sin `OPENAI_API_KEY` configurada en Render, el
> chat responde con un mensaje de "no disponible" (la clave nunca se expone al navegador).

## Pendiente tras el deploy

- **Configurar `OPENAI_API_KEY` en Render** para que BellA funcione en producción.
- **Activar formularios**: el primer envío de cualquier formulario manda un correo de
  confirmación de FormSubmit a `contacto@develop.com.mx`. Hay que abrirlo y confirmar
  una sola vez para que empiecen a llegar los mensajes.
