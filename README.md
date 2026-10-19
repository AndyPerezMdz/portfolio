# Portafolio — Andrés Pérez

Sitio personal en Next.js (App Router), estilo "plano técnico" en tema oscuro.

## Correr en local (Windows / PowerShell)

```powershell
npm install
npm run dev
```

Abre http://localhost:3000

## Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| Correo, GitHub, LinkedIn, WhatsApp, dominio | `lib/site.ts` |
| Proyectos (textos, módulos, decisiones, estado) | `lib/proyectos.ts` |
| Diagramas de arquitectura | `components/Diagramas.tsx` |
| Página de perfil (formación, stack, pasos) | `app/perfil/page.tsx` |
| Colores y estilos | `app/globals.css` (variables en `:root`) |

## Pendientes antes de publicar

- [x] Datos de contacto en `lib/site.ts`
- [x] Años de estudio en `app/perfil/page.tsx` (instituciones opcionales)
- [ ] Opcional: dominio propio (sin él, se usa la URL de Vercel)

## Publicar en Vercel

1. Sube el repo a GitHub.
2. En Vercel: *Add New → Project*, importa el repo. Detecta Next.js solo; no hace falta configurar nada.
3. Opcional: conecta tu dominio en *Settings → Domains*.
