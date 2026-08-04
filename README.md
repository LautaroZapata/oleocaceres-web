# oleocaceres-web

Landing institucional de **OLEOHIDRÁULICA CÁCERES** — importación, fabricación y reparación de componentes hidráulicos, Montevideo, Uruguay.

Página única en React 19 + Vite 7 + Tailwind CSS v4, desplegada en Vercel.

## Setup

```bash
pnpm install
cp .env.example .env   # completar las 3 variables de EmailJS (ver abajo)
pnpm dev
```

| Script | Qué hace |
|---|---|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | `tsc -b && vite build` → `dist/` |
| `pnpm preview` | Sirve el build de producción |
| `pnpm lint` | ESLint |

## Variables de entorno — requeridas

El formulario de contacto usa [EmailJS](https://dashboard.emailjs.com). **Sin estas tres variables el formulario muestra un error y no envía nada.**

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

- **Service ID** — EmailJS → Email Services → el servicio de correo conectado.
- **Template ID** — EmailJS → Email Templates. La plantilla debe usar las variables `{{name}}`, `{{email}}`, `{{servicio}}` y `{{message}}`: coinciden con los atributos `name` de los campos en `src/components/Contacto.tsx`. Cualquier variable de la plantilla que el formulario no envíe llega vacía.
- **Public Key** — EmailJS → Account → General.

El prefijo `VITE_` es obligatorio; sin él Vite no expone la variable al cliente. La Public Key es pública por diseño (viaja en el bundle) — el control de abuso se hace restringiendo el dominio permitido desde el dashboard de EmailJS.

En Vercel hay que cargarlas en **Settings → Environment Variables** (Production, Preview y Development). El `.env` local no se sube.

## Estructura

```
src/
├── App.tsx                 composición de secciones (sin router, navegación por anchors)
├── data/site.ts            fuente única de contenido: contacto, clientes, servicios, stats
├── lib/motion.ts           easing + prefers-reduced-motion
└── components/             Header, Hero, Empresa, Servicios, Clientes, Contacto, Footer
                            + Reveal, Counter, ScrollProgress, Logotipo
```

Los datos de contacto, la lista de clientes y los textos de servicios viven en `src/data/site.ts`. Para cambiar teléfono, email o dirección, editar solo ese archivo.

## Dominio

`SITE_URL` en `src/data/site.ts` documenta el origen canónico. Al conectar un dominio propio hay que actualizarlo también en `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`), `public/robots.txt` y `public/sitemap.xml`.

## Imágenes

Los assets de `public/` están en WebP, redimensionados al tamaño de render (logos ≤300 px, fotos ≤800 px, foto de planta ≤1100 px). Al agregar imágenes nuevas, convertirlas antes de commitear.
