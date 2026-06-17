# ArmaFácil — Tutoriales para armar muebles

Sitio educativo bilingüe (Español / Inglés) donde las personas aprenden a armar sus
muebles con **videos paso a paso**, **documentos técnicos (PDF)** y una **sección de
preguntas frecuentes**.

> El nombre de marca **ArmaFácil** y el contenido son de ejemplo. Reemplázalos por los
> de tu empresa.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS 3
- Sin base de datos: todo el contenido vive en `src/lib/content.ts`

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Estructura

```
src/
  app/
    page.tsx                  # Inicio
    tutoriales/page.tsx       # Catálogo (búsqueda + filtro por categoría)
    tutoriales/[slug]/page.tsx# Detalle: videos + documentos + preguntas
    preguntas/page.tsx        # Centro de preguntas frecuentes
  components/                 # UI (tarjetas, reproductor, acordeón, etc.)
  lib/
    content.ts                # 👈 DATOS: muebles, videos, PDFs, FAQs
    i18n.tsx                  # Idiomas (ES/EN) y textos de interfaz
    site.ts                   # Marca, WhatsApp, email
public/docs/                  # PDFs técnicos
scripts/gen-pdfs.mjs          # Regenera los PDFs de ejemplo
```

## Cómo personalizar

- **Marca / contacto:** `src/lib/site.ts` (nombre, WhatsApp, email).
- **Muebles y tutoriales:** edita `FURNITURE` en `src/lib/content.ts`.
  - `videos[].id` = ID de YouTube real (hoy usa un video de ejemplo).
  - `docs[].href` = ruta a tu PDF dentro de `public/docs/`.
- **Preguntas generales:** `GENERAL_FAQS` en el mismo archivo.
- **Textos de interfaz / traducciones:** `UI` en `src/lib/i18n.tsx`.

## Idiomas

El conmutador ES/EN está en la cabecera y el pie. La preferencia se guarda en el
navegador. Todo el contenido de `content.ts` usa el formato `{ es, en }`.
