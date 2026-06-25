# Tasks: Web Psicología Colombia

**Input**: Design documents from `/specs/001-web-psicologia/`

**Prerequisites**: plan.md (required), spec.md (required)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Crear estructura base del proyecto

- [ ] T001 Crear estructura de directorios (css/, js/, images/, blog/)
- [ ] T002 [P] Crear css/style.css con reset, variables CSS (paleta), y layout mobile-first
- [ ] T003 [P] Crear js/main.js con menú hamburguesa, scroll suave, y WhatsApp flotante
- [ ] T004 [P] Configurar favicon y viewport meta tags

**Checkpoint**: Estructura base lista

---

## Phase 2: Landing Page — Encontrar servicios (P1 — US1) 🎯 MVP

**Goal**: El usuario llega y en 3 segundos sabe qué se ofrece y cómo contactar

**Independent Test**: Abrir index.html en móvil (375px), ver hero + 3 servicios + WhatsApp flotante

### Implementación

- [ ] T005 [P] [US1] Crear index.html — Hero section con título, subtítulo, botón WhatsApp
- [ ] T006 [P] [US1] Crear index.html — Sección "Nuestros Servicios" con 3 tarjetas (Consultas, Talleres, Seminarios)
- [ ] T007 [US1] Crear index.html — Sección de testimonios (placeholder con datos reales después)
- [ ] T008 [US1] Crear index.html — CTA final con botón WhatsApp "Agenda tu primera consulta"
- [ ] T009 [P] [US1] Agregar botón flotante de WhatsApp en todas las páginas
- [ ] T010 [US1] Estilos responsive de landing page (mobile-first → desktop)

**Checkpoint**: Landing page completa y navegable. El usuario ve servicios y puede contactar.

---

## Phase 3: Páginas Internas (P1 — US1 continua)

**Goal**: Información detallada de cada servicio y agendamiento

- [ ] T011 [P] [US2] Crear servicios.html — Sección Consultas (individual, pareja, familiar, online/presencial)
- [ ] T012 [P] [US2] Crear servicios.html — Sección Talleres (temas, duración, formato)
- [ ] T013 [P] [US2] Crear servicios.html — Sección Seminarios (empresarial, temas, cotización)
- [ ] T014 [US2] Crear contacto.html — Formulario (nombre, teléfono, servicio, mensaje)
- [ ] T015 [US2] Integrar formulario con Formspree
- [ ] T016 [US2] Crear sobre-mi.html — Foto, bio, credenciales, enfoque terapéutico

**Checkpoint**: Sitio completo con todas las páginas de servicio. Usuario puede agendar desde cualquier página.

---

## Phase 4: Blog (P3 — US4)

**Goal**: Atraer tráfico SEO con contenido de valor

- [ ] T017 [P] [US4] Crear blog/index.html — Grid de artículos con categorías
- [ ] T018 [P] [US4] Crear plantilla de artículo (blog/plantilla.html)
- [ ] T019 [US4] Crear artículo ejemplo "Cómo manejar la ansiedad en 5 pasos"
- [ ] T020 [US4] Agregar navegación al blog desde el menú principal

**Checkpoint**: Blog funcional con al menos 1 artículo y navegación.

---

## Phase 5: SEO + Performance (Cross-Cutting)

**Purpose**: Posicionar el sitio en Google Colombia y optimizar velocidad

- [ ] T021 [P] Agregar meta tags (title, description, OG) a todas las páginas
- [ ] T022 [P] Agregar schema.org/PsychologicalService markup a index.html
- [ ] T023 [P] Crear sitemap.xml
- [ ] T024 [P] Optimizar imágenes a formato .webp
- [ ] T025 [P] Agregar Google Analytics o similar
- [ ] T026 Verificar Lighthouse >90 mobile
- [ ] T027 Verificar PageSpeed Insights

**Checkpoint**: SEO listo para indexación.

---

## Phase 6: Deploy (Cross-Cutting)

**Purpose**: Publicar el sitio

- [ ] T028 Configurar GitHub Pages (gh-pages branch o docs/)
- [ ] T029 Probar dominio personalizado (si aplica)
- [ ] T030 Verificar SSL, redirects, y 404

---

## Dependencies & Execution Order

| Fase | Depende de | Bloquea |
|------|------------|---------|
| 1. Setup | Nada | Fases 2-6 |
| 2. Landing (US1) | Fase 1 | Nada (MVP) |
| 3. Internas (US1/US2) | Fase 1 | Nada (en paralelo con Fase 2 si se quiere) |
| 4. Blog (US4) | Fase 1 | Nada (puede ir en paralelo) |
| 5. SEO | Fases 2-4 | Fase 6 |
| 6. Deploy | Fase 5 | Nada |

**Orden recomendado**: Setup → Landing → Internas → Blog → SEO → Deploy
