# Implementation Plan: Web Psicología Colombia

**Branch**: `001-web-psicologia` | **Date**: 2026-06-25 | **Spec**: [specs/001-web-psicologia/spec.md](spec.md)

## Summary

Sitio web estático de psicología para Colombia con 3 servicios: consultas, talleres, seminarios. Mobile-first, SEO optimizado, WhatsApp como canal principal de contacto. HTML + CSS vanilla, sin frameworks, deploy en GitHub Pages.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+

**Primary Dependencies**: Ninguna. Stack vanilla. Tailwind CSS vía CDN (opcional para agilizar), Font Awesome para íconos, Google Fonts.

**Storage**: No aplica (sitio estático). Los formularios usan Formspree.

**Testing**: Pruebas manuales de navegación móvil + Lighthouse + PageSpeed Insights.

**Target Platform**: Browsers modernos (Chrome Android, Safari iOS, Edge, Firefox). IE no soportado.

**Project Type**: Static landing page + blog

**Performance Goals**: Lighthouse >90 en móvil. Carga en <2s en 4G.

**Constraints**: Sin backend. Sin JS frameworks. Presupuesto JS mínimo (<50kb). Todo contenido es markdown/HTML estático.

**Scale/Scope**: 5-7 páginas iniciales. Blog con artículos. Sin autenticación. Sin e-commerce.

## Constitution Check

- Mobile-First ✅ — El diseño se maqueta primero en viewport 375px
- Contenido antes que código ✅ — Las páginas priorizan texto, testimonios, y CTAs
- Simplicidad y velocidad ✅ — Sin frameworks, vanilla HTML/CSS/JS
- SEO y Conversión ✅ — Meta tags, schema, sitemap, CTAs en cada página
- Stack estático ✅ — GitHub Pages

## Project Structure

```
web-psicologia/
├── index.html              # Inicio
├── servicios.html           # Servicios (consultas, talleres, seminarios)
├── sobre-mi.html            # Perfil del psicólogo
├── blog/                    # Artículos del blog
│   ├── index.html           # Lista de artículos
│   └── articulo-ejemplo.html
├── contacto.html            # Formulario + WhatsApp
├── css/
│   └── style.css            # Estilos globales (mobile-first)
├── js/
│   └── main.js              # JS mínimo (menú mobile, scroll, analytics)
├── images/                  # Imágenes optimizadas (.webp)
│   ├── hero-consultorio.webp
│   ├── profile.webp
│   └── blog/
├── sitemap.xml              # Para indexación Google
└── README.md
```

## Páginas y Componentes

| Página | Componentes Clave |
|--------|------------------|
| **index.html** | Hero (título + subtítulo + CTA WhatsApp), tarjetas de 3 servicios, testimonios, contador de pacientes, CTA final |
| **servicios.html** | Hero interno, 3 secciones (Consultas/Talleres/Seminarios), tabla comparativa, FAQ |
| **sobre-mi.html** | Foto profesional, bio, credenciales, enfoque, experiencia, valores |
| **contacto.html** | Formulario (nombre, teléfono, servicio, mensaje), WhatsApp directo, mapa embed |
| **blog/index.html** | Grid de artículos, categorías, paginación |
| **blog/articulo.html** | Contenido completo, autor, fecha, categoría, CTA final |

## Paleta de Colores Propuesta

- **Primario**: #2D6A4F (verde salvia — calma, confianza, profesionalismo)
- **Secundario**: #95D5B2 (verde menta claro)
- **Acento**: #F4A261 (naranja cálido — CTAs, energía)
- **Fondo**: #F8F9FA (blanco sucio)
- **Texto**: #1B1B1B (casi negro)

## Fases de Implementación

| Fase | Qué se hace | Archivos |
|------|-------------|----------|
| **Fase 0** | Estructura base + CSS global | index.html, css/style.css, js/main.js |
| **Fase 1** | Landing page (hero, servicios, testimonios, CTAs) | index.html completo |
| **Fase 2** | Páginas internas | servicios.html, sobre-mi.html, contacto.html |
| **Fase 3** | Blog | blog/index.html, blog plantilla |
| **Fase 4** | SEO + Performance | meta tags, schema, sitemap, optimización imágenes |
| **Fase 5** | Build + Deploy | GitHub Pages |
