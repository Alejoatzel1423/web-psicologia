# Feature Specification: Web Psicología Colombia

**Feature Branch**: `001-web-psicologia`

**Created**: 2026-06-25

**Status**: Draft

**Input**: User description: "Web de psicología ofreciendo servicios de consultas, talleres y seminarios para Colombia"

## User Scenarios & Testing

### User Story 1 — Encontrar servicios rápidamente (Priority: P1)

Un usuario colombiano llega al sitio desde Google buscando "psicólogo cerca de mí" o "terapia online Colombia". Quiere ver inmediatamente qué servicios se ofrecen y si se ajustan a su necesidad.

**Why this priority**: Sin esta página de servicios clara, el usuario se va. Es la puerta de entrada.

**Independent Test**: Abrir la web en móvil, ver el hero y los 3 servicios (consultas, talleres, seminarios) en menos de 3 segundos.

**Acceptance Scenarios**:
1. **Given** que un usuario entra al sitio desde un celular, **When** la página carga, **Then** ve un hero con título claro y los 3 servicios visibles sin hacer scroll
2. **Given** que el usuario hace clic en "Consultas", **When** se despliega la sección, **Then** ve descripción, modalidades (presencial/online), duración, y botón "Agendar"
3. **Given** que el usuario está en cualquier página, **When** quiere contactar, **Then** ve un botón flotante de WhatsApp visible siempre

---

### User Story 2 — Agendar una consulta (Priority: P1)

Un usuario decidió tomar terapia. Quiere saber costos, disponibilidad, y agendar sin tener que llamar.

**Why this priority**: La conversión principal es que el usuario agende.

**Independent Test**: Navegar a la página de contacto, ver formulario + WhatsApp, enviar mensaje predefinido.

**Acceptance Scenarios**:
1. **Given** que el usuario está en la página de Consultas, **When** hace clic en "Agendar ahora", **Then** se abre WhatsApp con un mensaje predefinido: "Hola, quiero agendar una consulta psicológica"
2. **Given** que el usuario prefiere el formulario web, **When** completa nombre, teléfono, servicio y mensaje, **Then** recibe confirmación de envío
3. **Given** que la consulta es online, **When** el usuario agenda, **Then** se le informa que recibirá el link de videollamada por WhatsApp

---

### User Story 3 — Empresa contrata seminario (Priority: P2)

Un RH de una empresa colombiana busca un seminario sobre manejo de estrés laboral para su equipo.

**Why this priority**: Los seminarios corporativos son los de mayor ticket.

**Independent Test**: Ir a la página de Seminarios, ver información corporativa, cotizar.

**Acceptance Scenarios**:
1. **Given** que un RH visita la página de Seminarios, **When** lee los temas ofrecidos, **Then** ve: clima laboral, liderazgo, estrés laboral, salud mental organizacional
2. **Given** que el RH quiere contratar, **When** hace clic en "Solicitar cotización", **Then** se abre WhatsApp con mensaje: "Hola, quiero cotizar un seminario para mi empresa"
3. **Given** que el seminario es presencial en Bogotá, **When** se solicita, **Then** se informa que cubrimos desplazamiento a toda Colombia

---

### User Story 4 — Leer contenido de valor (Priority: P3)

Un usuario encuentra el sitio por un artículo de blog. Lee, confía, y explora servicios.

**Why this priority**: El blog atrae tráfico SEO orgánico a largo plazo.

**Independent Test**: Ir a /blog, ver lista de artículos, leer uno, encontrar CTA al final.

**Acceptance Scenarios**:
1. **Given** que un usuario está en Google buscando "cómo controlar la ansiedad", **When** encuentra un artículo del blog, **Then** puede leerlo completo y al final ve "¿Necesitas ayuda? Agenda una consulta"
2. **Given** que el usuario está en el blog, **When** quiere filtrar por tema, **Then** ve categorías (ansiedad, depresión, pareja, autoestima)

### Edge Cases

- ¿Qué pasa si el usuario envía el formulario con datos incompletos? → Mostrar error en el campo específico
- ¿Cómo maneja el sitio la falta de conexión? → El sitio es estático, las páginas cargan offline si ya fueron cacheadas
- ¿Qué pasa si WhatsApp no está instalado? → Mostrar el número de teléfono como alternativa
- ¿Usuarios con discapacidad visual? → El sitio debe ser navegable con screen reader

## Requirements

### Functional Requirements

- **FR-001**: Sitio debe cargar en menos de 3 segundos en conexión 4G
- **FR-002**: Landing page debe mostrar hero con título, subtítulo, y CTA principal
- **FR-003**: Los 3 servicios (consultas, talleres, seminarios) deben tener su propia sección/página con descripción detallada
- **FR-004**: Cada servicio debe tener un botón de CTA que abre WhatsApp con mensaje predefinido según el servicio
- **FR-005**: Botón flotante de WhatsApp visible en todas las páginas
- **FR-006**: Formulario de contacto debe capturar: nombre, teléfono, servicio de interés, mensaje
- **FR-007**: Página "Sobre Mí" debe incluir foto, credenciales, enfoque terapéutico y experiencia
- **FR-008**: Blog debe tener lista de artículos con categorías y paginación
- **FR-009**: Cada artículo de blog debe terminar con un CTA al servicio relacionado
- **FR-010**: Sitio debe ser responsivo (móvil, tablet, desktop)
- **FR-011**: Meta tags de SEO en cada página (title, description, Open Graph)
- **FR-012**: Schema markup de tipo "PsychologicalService" para Google
- **FR-013**: Mapa del sitio (sitemap.xml) para indexación

### Key Entities

- **Servicio**: Tipo de servicio ofrecido (consulta, taller, seminario) con descripción, modalidad, duración, precio referencial
- **Artículo**: Contenido del blog con título, categoría, fecha, cuerpo, autor
- **Lead**: Datos de contacto del usuario interesado (nombre, teléfono, servicio, mensaje)

## Success Criteria

### Measurable Outcomes

- **SC-001**: La página de inicio carga en menos de 2 segundos en móvil 4G
- **SC-002**: El 80% de los visitantes puede identificar los 3 servicios ofrecidos en los primeros 5 segundos
- **SC-003**: El botón de WhatsApp recibe al menos 1 clic por cada 20 visitantes únicos
- **SC-004**: El formulario de contacto tiene una tasa de envío exitoso >95%
- **SC-005**: El sitio obtiene puntuación >90 en Lighthouse Mobile
- **SC-006**: Los artículos del blog aparecen en los primeros 3 resultados de Google Colombia para búsquedas objetivo

## Assumptions

- El tráfico principal será desde celulares en Colombia (Android mayoritario)
- Los usuarios prefieren WhatsApp como canal de contacto principal
- El sitio no necesita autenticación de usuarios ni área privada
- Los formularios se integrarán con un servicio externo (Formspree / o similar)
- No se requiere pasarela de pagos — todo pago se gestiona fuera del sitio
- El contenido inicial será proporcionado por el psicólogo
- Las imágenes serán profesionales (fotos reales del consultorio/psicólogo)
