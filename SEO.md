# SEO — baseline oficial de Develop website

> Estado del SEO técnico en el commit `b11de07`. Sirve de referencia: al añadir rutas o cambiar
> metadata, mantener estas invariantes. Auditado con el estándar `auditor-web` (eje F).

## Fundamentos
- **`metadataBase`**: `https://www.develop.com.mx` (en `src/app/layout.tsx`).
- **Idioma**: `<html lang="es">`. Locale OG `es_MX`.
- **Título**: plantilla `"%s · Develop"`; default `"Develop · Talent & Technology — Formación y certificación en IA"`.
- **Canonical por ruta**: cada `page.tsx` declara `alternates.canonical`; la home vía `layout` (`/`).
- **`robots`** (`src/app/robots.ts`): permite todo (`allow: "/"`) + `sitemap` + `host`. Sitio 100%
  público, sin panel/login que desautorizar.
- **`sitemap.xml`** (`src/app/sitemap.ts`): 17 rutas con `priority`/`changeFrequency`. Refleja solo lo
  publicado. **Al crear/eliminar una ruta pública, actualizar el sitemap.**

## Metadata por ruta
Todas las páginas exportan `metadata` propio (título + descripción + canonical) salvo la home, que
hereda el default del `layout`. Verificado: **0 páginas sin metadata** (la home usa el default por diseño).

## Datos estructurados (JSON-LD)
- **Organization** — en `layout.tsx` (nombre, logo, dirección Roma Norte, teléfono, email). Global.
- **FAQPage** — en `app/faq/page.tsx`, generado desde `views/faqData.ts` (misma fuente que la vista).
- ⚠️ **Pendiente de endurecer (H-13):** ambos usan `JSON.stringify` sin escapar `</`. Hoy sin riesgo
  (datos estáticos del desarrollador, sin CMS). Escapar antes de que cualquier dato editable entre al schema.

## Open Graph / redes
- **Imagen OG dedicada 1200×630** generada por `src/app/opengraph-image.tsx` (Satori), reutilizada por
  `twitter-image.tsx`. Se aplica a todas las rutas como `og:image`/`twitter:image` con dimensiones y `alt`.
  Estática en build (sin coste runtime).
- OG/Twitter con título y descripción por defecto en `layout`; rutas clave añaden los suyos.

## Rendimiento con impacto SEO (ver eje E del informe)
- **CLS**: 0 (home) / 0.045 (empresas) — excelente.
- **LCP**: 3.5–4.2 s móvil — **por encima de 2.5 s** (H-04/H-05: fuente por `@import` + héroe). A corregir.

## Invariantes a mantener
1. Cada ruta pública nueva: `title`/`description` únicos + `canonical` + entrada en `sitemap.ts`.
2. Un solo `<h1>` por página (cumplido).
3. Datos estructurados válidos y **escapados** para contexto `<script>`.
4. `robots` no desautoriza nada hoy; si aparece un panel/login, desautorizarlo (y `noindex`).
5. La imagen OG se mantiene 1200×630 y self-contained.
