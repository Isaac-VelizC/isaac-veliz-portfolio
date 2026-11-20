# Isaac Veliz — Professional Portfolio

Portafolio editorial minimalista construido con Next.js App Router, React, TypeScript strict y Tailwind CSS v4.

## Requisitos

- Node.js 20.9+ (recomendado 22 LTS)
- npm

## Desarrollo

```bash
npm install
cp .env.example .env.local
npm run dev
```

En Windows, copia `.env.example` como `.env.local` manualmente si no tienes `cp`.

## Verificación

```bash
npm run lint
npm run typecheck
npm run build
```

## Personalización

- `src/data/profile.ts`: datos personales, enlaces y tecnologías.
- `src/data/projects.ts`: casos de estudio; añadir un objeto con `slug` único crea su ruta.
- `public/images/projects/`: sustituir imágenes SVG provisionales por capturas reales y actualizar las rutas de los proyectos.
- `public/cv/`: agregar el PDF y definir `profile.cv` para mostrar el botón de descarga.
- `.env.local`: establecer `NEXT_PUBLIC_SITE_URL` con el dominio público definitivo, sin barra final.

No hay backend, formulario de contacto ni CMS. Los enlaces no configurados permanecen ocultos.

## Deploy

### Vercel

Importar el repositorio, configurar `NEXT_PUBLIC_SITE_URL` y desplegar con el preset Next.js. Build: `npm run build`.

### Netlify

Importar el repositorio, seleccionar el framework Next.js, configurar `NEXT_PUBLIC_SITE_URL` y usar el runtime oficial de Next.js de Netlify. Build: `npm run build`. No es necesario `output: export`.

## Antes de publicar

1. Confirmar URL canónica y dominio definitivo.
2. Sustituir placeholders de imágenes por capturas reales.
3. Configurar URL de GitHub y archivo CV cuando estén disponibles.
4. Comprobar contenido de cada caso de estudio.
5. Ejecutar lint, typecheck, build y una auditoría Lighthouse en el sitio desplegado.

Los objetivos Lighthouse son aspiracionales y dependen del entorno de prueba. La fuente Google de `next/font` puede necesitar conectividad durante el build.
