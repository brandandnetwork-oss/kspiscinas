# KS Piscinas: Fase 1, análisis y plan

Fecha: 13-10-2026. Estado: **aprobado** (13-10-2026), con las decisiones que siguen.

## Decisiones tomadas tras la revisión

| Tema | Decisión |
|---|---|
| Dirección | **No se publica.** Negocio de área de servicio; en el JSON-LD solo figura la localidad (Madrid) |
| Titular legal | Pendiente. Los textos legales llevarán `[PENDIENTE]` hasta que se aporten razón social, NIF y domicilio |
| Email público | `sanchezkevin427@gmail.com` |
| Horario | Lunes a sábado, 9:00 – 20:00 |
| Zonas | **Solo Madrid** por ahora. No se crean páginas locales por municipio hasta tener obras reales; la colección queda preparada |
| Servicios | Los de la web original: construcción, reforma/rehabilitación, equipamiento e iluminación (piscinas a medida) y exteriores. **No** hay páginas de mantenimiento, climatización ni cubiertas |
| Fotos | Se usan las fotos de obra propias de la web actual, optimizadas. Se descartan las de stock |
| Tipografía | Sora + Inter (en lugar de Fraunces): encaja mejor con el logo geométrico de mosaico |
| Paleta | Ajustada a los colores reales del logo. Detalle en `docs/sistema-de-diseno.md` |

> Las secciones 4, 5 y 9 de este documento reflejan la propuesta inicial. Con las decisiones anteriores, el sitemap de servicios queda así: `/servicios/construccion-de-piscinas/`, `/servicios/reforma-de-piscinas/`, `/servicios/equipamiento-e-iluminacion/` y `/servicios/exteriores-y-jardin/`. `/zonas/` queda aplazado.

---

## 1. Análisis de la web actual (kspiscinas.es)

### 1.1 Situación técnica
| Aspecto | Hallazgo |
|---|---|
| Plataforma | WordPress + Hello Elementor + Elementor Pro, alojado en **SiteGround** (DNS y correo también en SiteGround) |
| Dominio canónico | `https://kspiscinas.es/` (sin www). Desde `http://www` hay una cadena de 2 redirecciones |
| Sitemap | `/wp-sitemap.xml` nativo de WordPress, 8 páginas + 1 archivo de autor. No hay blog |
| SEO on-page | **Ninguna página tiene H1 ni meta description.** Los titles no llevan palabras clave ("KS PISCINAS", "QUÉ HACEMOS – KS PISCINAS") |
| Imágenes | 62 en la biblioteca y **ninguna tiene alt**. El hero es una foto de stock de 1,98 MB y hay originales de hasta 7451 px. Varias imágenes de stock (una de un hotel de Tailandia) aparecen como si fueran trabajos propios |
| Contenido oculto | Bloques con `display:none`: texto "Lorem ipsum", secciones duplicadas y testimonios con nombres genéricos ("Juan Pérez") |
| Datos estructurados, Open Graph, analítica | No hay ninguno |
| Legal | **No hay aviso legal** (da 404). La política de privacidad es una plantilla de otra empresa ("ASESORIA CRUCEIRO S.L", "CIF (00000)", "(COLOCAR DIRECCIÓN)") y declara herramientas que la web no usa |
| Privacidad | El archivo de autor `/author/donairecarlos2gmail-com/` está en el sitemap y **expone un email personal** |
| NAP | **No figura ninguna dirección.** El horario no coincide (L-S en la home y L-V en el resto). El email de la cabecera es de Gmail y el de los textos legales es info@. No hay footer |
| Zona | La web **no menciona Madrid ni ningún municipio** |

### 1.2 Inventario de URLs
| URL actual | Title actual | Contenido |
|---|---|---|
| `/` (slug interno "incio") | KS PISCINAS | Hero, 4 servicios, carrusel de 6 fotos, formulario |
| `/que-hacemos/` | QUÉ HACEMOS – KS PISCINAS | Construcción, rehabilitación, piscinas a medida, espacios exteriores |
| `/galeria/` | NUESTRAS PISCINAS – KS PISCINAS | 19 fotos sin ningún texto |
| `/contactanos/` | CONTÁCTANOS – KS PISCINAS | Formulario + 6 reseñas |
| `/gracias/` | Gracias – KS PISCINAS | Agradecimiento del formulario |
| `/pagina-en-mantencion/` | PAGINA EN MANTENCIÓN | Página vacía e indexable |
| `/politica-de-privacidad/` | Política de Privacidad | Plantilla sin rellenar |
| `/politica-de-cookies-ue/` | Política de cookies (UE) | Generada por Complianz |
| `/author/donairecarlos2gmail-com/` | (email) | Archivo de autor vacío |
| `/feed/`, `/comments/feed/` | — | Vacíos |

### 1.3 Contenido real que se conserva y amplía
- **Construcción:** "Somos especialistas en construcción de piscinas de hormigón proyectado/gunitado con perfecta estanqueidad, revestidas con gresite o porcelánico." Incluye el sistema de depuración.
- **Rehabilitación:** reforma integral; reparaciones estéticas y estructurales; cambio de bordillo; revestimientos; lechadas y rejuntado; limpieza en profundidad; rediseño del vaso; **gresite en piscinas de poliéster** (servicio diferencial).
- **Piscinas a medida:** chorros, cascadas, spas y jacuzzis, iluminación LED, desinfección y filtración, cubiertas, bombas de velocidad variable, rocas y paisajismo, mantenimiento químico.
- **Exteriores:** diseño de jardín, muros, alicatado y pavimentos, césped artificial.
- **Frase de valor:** "no desaparecemos al terminar la obra".
- **Fotos de obra propia:** 19 de la galería. La calidad es media; varias son de 640×480.

### 1.4 Presencia externa
- **Google Business Profile: no hemos encontrado ficha.** Es la carencia más grave para el SEO local.
- **Cronoshare** ("Ks Piscinas", Madrid): 21 contrataciones y 7 opiniones (media de unos 8,7/10). Tiene fotos con ubicación: Villaviciosa de Odón, y Otero (Toledo).
- **Instagram @ks.piscinas:** verificado, unos 1.550 seguidores y activo hasta septiembre de 2026. Tiene obras reales, desbordantes, porcelánico y procesos de obra. **Es la mejor fuente de material visual.**
- **Habitissimo:** hay un perfil "Constructora De Piscinas Kevin" (Getafe, 28 opiniones, 3,8/5). **Sin confirmar** que sea la misma empresa.
- **Reseñas de la web:** los nombres que se atribuyen a Cronoshare no coinciden con las opiniones reales de ese perfil. **No se migrarán sin verificación.**

---

## 2. Análisis de las webs de referencia

| | Piscinas CI | Piscinas Iguazú | Aquazzaro |
|---|---|---|---|
| Lo mejor | Formulario cualificado con extras; nota de Google visible; WhatsApp | Vídeo en el hero; paleta sobria petróleo + crema; proyectos con nombre y narrativa (render → obra → resultado); FAQ en los servicios; blog activo | Configurador de presupuesto como página propia; **proyectos por municipio** (SEO local); fichas con medidas, materiales y plazo; serif elegante |
| Lo peor | Hero dedicado a una promoción; páginas sin H1; formulario de contacto roto; 68 scripts | Sin teléfono clicable ni WhatsApp; formulario en Typeform externo; contacto vacío; lazy load en el hero | Hero móvil sin CTA; H1 vacío en presupuesto; "precio" sin precio; 12 pesos de fuente; reCAPTCHA visible |
| Stack | WordPress + Elementor (unos 3 MB) | WordPress + Elementor (HTML de 300 KB) | WordPress + Elementor (2,4 MB) |

**Lo que ninguna de las tres tiene y será nuestra ventaja:**
- Slider antes/después en reformas.
- Garantías explicadas.
- Horquilla de precio orientativa en el configurador.
- Datos estructurados completos.
- Páginas locales con contenido real.
- Rendimiento de web estática.

**Competidores en Google:** los portales (Habitissimo y Cronoshare) dominan las búsquedas genéricas y las de "piscinas + municipio". El competidor SEO más completo es **Piscinas Verdecon**: precios publicados, configurador, 18 páginas locales y blog. Es el modelo que hay que superar.

---

## 3. Enfoque técnico

| Opción | Pros | Contras |
|---|---|---|
| **A. Astro estático + colecciones Markdown (recomendada)** | HTML completo sin JS, Lighthouse de 95-100 alcanzable, no hay nada que actualizar ni hackear, hosting barato | Para editar contenido hay que tocar ficheros `.md` o añadir un CMS |
| B. Astro + CMS basado en Git (Keystatic o Decap) | Igual que A, más un panel visual para que KS edite proyectos y blog | Unas horas más de configuración; el panel necesita login (GitHub) |
| C. WordPress con tema ligero | Panel conocido | Muy difícil sostener 95+ en móvil y requiere mantenimiento de plugins |

**Recomendación:** A, preparado para añadir B si KS va a publicar proyectos por su cuenta (ver pregunta P10).

**Stack:**
- Astro 5 (salida estática) + TypeScript + Tailwind CSS 4 con tokens definidos.
- Islas en **TypeScript vanilla o Preact**, solo en el configurador, la galería, el slider y el formulario.
- `astro:assets` para AVIF/WebP con srcset.
- `@astrojs/sitemap`.
- Fuentes autoalojadas en woff2 con subset latino.

**Hostinger:**
- Despliegue del `dist/` por Git/SSH o FTP con GitHub Actions.
- `.htaccess` para las 301, HTTPS canónico, compresión y caché.
- **Endpoint PHP propio** para el formulario: envío por SMTP, honeypot, control de tiempo y límite de envíos. Sin servicios externos ni CAPTCHA.

---

## 4. Sitemap propuesto

URLs en minúsculas, en español y **con barra final**, igual que las actuales.

```
/                                         Inicio
/servicios/                               Hub de servicios
  /servicios/construccion-de-piscinas/    Obra nueva (hormigón gunitado, gresite, porcelánico)
  /servicios/reforma-de-piscinas/         Rehabilitación, impermeabilización, bordillo, gresite sobre poliéster
  /servicios/mantenimiento-de-piscinas/   [PENDIENTE confirmar alcance]
  /servicios/climatizacion-de-piscinas/   [PENDIENTE confirmar alcance]
  /servicios/cubiertas-para-piscinas/     [PENDIENTE confirmar alcance]
  /servicios/equipamiento-e-iluminacion/  Depuración, salina, LED, bombas, cascadas, spas
  /servicios/exteriores-y-jardin/         [PENDIENTE confirmar] muros, pavimentos, césped
/proyectos/                               Galería filtrable
  /proyectos/{tipo}-{municipio}/          Ficha, p. ej. /proyectos/piscina-gresite-azul-villaviciosa-de-odon/
/zonas/                                   Mapa y listado de municipios
  /zonas/{municipio}/                     "Construcción de piscinas en {Municipio}" (8-10 iniciales)
/como-trabajamos/                         Proceso: fases, plazos, garantías
/sobre-nosotros/
/blog/                                    Guías
  /blog/{slug}/
/preguntas-frecuentes/
/presupuesto/                             Configurador y formulario por pasos
/contacto/                                NAP, mapa bajo demanda, formulario corto
/gracias/                                 noindex
/aviso-legal/  /politica-de-privacidad/  /politica-de-cookies/
404
```

**Enlazado interno planificado:**
- Cada servicio enlaza a 3-6 proyectos de ese tipo, a las zonas donde se ha hecho y a 2-3 guías.
- Cada proyecto enlaza a su servicio, a su municipio y a proyectos similares.
- Cada página local enlaza a los proyectos de ese municipio, a los servicios y a la guía de licencias.
- Cada artículo del blog enlaza a 1-2 servicios y al presupuesto.
- Migas de pan en todas las páginas salvo la home.
- El footer lleva servicios, zonas y legales, para que no quede ninguna página huérfana.

---

## 5. Mapa de palabras clave por página

Las prioridades son estimaciones, porque no hemos tenido acceso a herramientas de volumen. Se validarán con Search Console y Keyword Planner tras el lanzamiento.

| Página | Keyword principal | Secundarias | Title propuesto (≤ 60 car.) |
|---|---|---|---|
| Inicio | construcción de piscinas en Madrid | empresa de piscinas Madrid, constructora de piscinas | Construcción y reforma de piscinas en Madrid · KS Piscinas |
| Construcción | piscinas de obra Madrid | hormigón gunitado, piscina a medida, presupuesto piscina de obra | Piscinas de obra en Madrid: hormigón gunitado · KS Piscinas |
| Reforma | reforma de piscinas Madrid | rehabilitación, impermeabilizar piscina, cambiar gresite, gresite sobre poliéster | Reforma y rehabilitación de piscinas en Madrid · KS Piscinas |
| Mantenimiento | mantenimiento de piscinas Madrid | puesta a punto, invernaje | Mantenimiento de piscinas en Madrid · KS Piscinas |
| Climatización | climatizar piscina Madrid | bomba de calor piscina | Climatización de piscinas con bomba de calor · KS Piscinas |
| Cubiertas | cubiertas para piscinas Madrid | cubierta telescópica, lona | Cubiertas para piscinas en Madrid · KS Piscinas |
| Equipamiento | equipamiento de piscinas | clorador salino, iluminación LED, depuradora | Equipamiento e iluminación para piscinas · KS Piscinas |
| Proyectos | piscinas construidas en Madrid | fotos de piscinas de obra | Proyectos de piscinas en Madrid · KS Piscinas |
| Ficha de proyecto | piscina {tipo} en {municipio} | revestimiento, medidas | Piscina de gresite azul en Villaviciosa de Odón · KS |
| Zona | construcción de piscinas en {municipio} | piscinas {municipio}, reforma piscinas {municipio} | Construcción de piscinas en Pozuelo de Alarcón · KS |
| Cómo trabajamos | cuánto se tarda en construir una piscina | fases de obra, garantía | Cómo construimos tu piscina: fases y plazos · KS Piscinas |
| FAQ | preguntas frecuentes piscinas de obra | — | Preguntas frecuentes sobre piscinas de obra · KS Piscinas |
| Presupuesto | presupuesto piscina Madrid | calcular precio piscina | Pide presupuesto para tu piscina en Madrid · KS Piscinas |

**Municipios candidatos para las páginas locales.** Solo se crearán los que KS confirme con obras reales (P4):
- Pozuelo de Alarcón
- Las Rozas
- Majadahonda
- Boadilla del Monte
- Villaviciosa de Odón (confirmado en Cronoshare)
- Torrelodones
- Alcobendas (con sección sobre La Moraleja)
- San Sebastián de los Reyes
- Galapagar
- Collado Villalba
- El Escorial (aparece en una reseña)
- Getafe (si se confirma)

Cada página local tendrá contenido único:
- obras reales en la zona;
- el trámite municipal concreto (declaración responsable o licencia), con enlace oficial;
- características del terreno y la urbanización;
- FAQ local.

**Blog inicial (guías):**
1. Cuánto cuesta una piscina de obra en Madrid (precios por tamaño). *Necesita datos de KS.*
2. Licencia o declaración responsable para una piscina en la Comunidad de Madrid.
3. Piscina de obra o prefabricada.
4. Gresite, porcelánico o liner.
5. Cuánto se tarda en construir una piscina y cuál es la mejor época.
6. Mi piscina pierde agua: causas y reparación.
7. Reformar una piscina antigua.
8. Piscina salina o de cloro.

La normativa se citará solo con fuente oficial: RD 742/2013 (BOE), Decreto 99/2024 de la Comunidad de Madrid y la ordenanza de cada municipio. Lo que no podamos verificar no se publica.

---

## 6. Dirección visual

**Concepto: "agua y piedra".** Una estética de estudio de arquitectura, pero cercana. La fotografía de las obras reales es la protagonista y se enseña el proceso como prueba de oficio.

### Paleta (borrador)
| Token | Hex | Uso |
|---|---|---|
| `abismo` | #0E3A4A | Primario oscuro: cabecera sobre foto, footer, titulares |
| `agua` | #1F8FA8 | Acento: iconos, detalles, fondos de sección |
| `agua-texto` | #156B7E | Enlaces y texto sobre blanco (AA) |
| `gresite` | #DCEFF2 | Fondos suaves |
| `arena` | #F5F1EA | Neutro cálido de fondo (coronación y piedra) |
| `piedra` | #5B6670 | Texto secundario |
| `tinta` | #13212B | Texto principal |
| `coral` | #B9532C | **Solo CTA** (presupuesto), con texto blanco |

Todos los pares texto/fondo se comprueban a **AA o más** en la Fase 2 antes de cerrar los tokens.

### Tipografía (2 familias, autoalojadas, `font-display: swap`, preload de la de titulares)
- **Titulares: Fraunces** (serif variable; aporta el aire premium de las referencias).
- **Texto e interfaz: Inter** (variable, muy legible en móvil).
- Alternativa más "constructora": Manrope para todo (una sola familia). La decidimos en la Fase 2 con una maqueta.

### Fotografía
- Obras reales de KS. Planos cenitales o desde dron, luz de atardecer y detalles de textura (gresite, porcelánico, coronación).
- **Secuencias de obra:** excavación → gunitado → revestimiento → llenado.
- Sin bancos de imágenes con modelos.
- **Hero:** vídeo corto en bucle, sin sonido, de 6-10 s y menos de 2,5 MB (AV1/H.264), con póster AVIF como imagen LCP. En móvil o con ahorro de datos solo se carga el póster.

### Movimiento
- Revelados al hacer scroll con `transform` y `opacity`.
- Cabecera que se compacta al bajar.
- Todo se desactiva con `prefers-reduced-motion`.

---

## 7. Componentes interactivos

| Componente | Implementación | Sin JS (lo que lee Google) |
|---|---|---|
| **Configurador** (forma, medidas, revestimiento, sistema, extras) | Isla TS por pasos. Muestra un resumen y, si KS aporta tarifas, una **horquilla orientativa**. Rellena el formulario de presupuesto | Formulario HTML completo con todos los campos |
| **Antes/después** | `input[type=range]` + `clip-path`, accesible con teclado | Las dos imágenes, una junto a otra, con su pie |
| **Galería de proyectos** | Filtros por tipo, tamaño y municipio (estado en la URL), lightbox con `<dialog>` | Todas las tarjetas enlazadas a su ficha |
| **Línea de tiempo del proceso** | `<ol>` semántica, con progreso al hacer scroll | Lista completa de fases |
| **Mapa de zonas** | **Mapa SVG propio de la Comunidad de Madrid** con municipios clicables. Mapa real (Leaflet/OSM) solo al pulsar "Ver mapa" | Lista de enlaces a cada zona |
| **FAQ** | `<details>/<summary>` nativo + schema FAQPage | Todo el texto en el HTML |
| **Formulario por pasos** | Validación en cliente y servidor; honeypot, control de tiempo y límite por IP en PHP; casilla de privacidad sin premarcar e información básica de protección de datos | Envío HTML normal que redirige a `/gracias/` |
| **Contacto fijo** | Cabecera fija con CTA; en móvil, barra inferior "Llamar · WhatsApp · Presupuesto" | Enlaces `tel:` y `wa.me` |
| **Banner de cookies** | Propio y ligero: Aceptar / Rechazar / Configurar al mismo nivel. GA4 con Consent Mode v2 (por defecto, denegado) | — |

---

## 8. Datos estructurados

| Página | Datos estructurados |
|---|---|
| Global | `HomeAndConstructionBusiness` con NAP, `openingHoursSpecification`, `areaServed` (municipios), `geo`, `sameAs` (Instagram, Cronoshare) y `WebSite` |
| Servicios | `Service` |
| Todas las páginas | `BreadcrumbList` |
| FAQ y servicios | `FAQPage` |
| Blog | `Article` |
| Proyectos | `ImageObject` (y `CreativeWork`) |

**No se usará `AggregateRating`** con reseñas propias: Google no las admite para LocalBusiness autodeclarado y además no tenemos reseñas verificadas.

---

## 9. Redirecciones 301

| URL antigua | Destino | Tipo |
|---|---|---|
| `http://kspiscinas.es/*`, `http(s)://www.kspiscinas.es/*` | `https://kspiscinas.es/*` | 301 (un solo salto) |
| `/incio/` | `/` | 301 |
| `/que-hacemos/` | `/servicios/` | 301 |
| `/galeria/` | `/proyectos/` | 301 |
| `/contactanos/` | `/presupuesto/` | 301 |
| `/gracias/` | `/gracias/` (se mantiene, con noindex) | — |
| `/pagina-en-mantencion/` | `/` | 301 |
| `/politica-de-privacidad/` | Se mantiene | — |
| `/politica-de-cookies-ue/` | `/politica-de-cookies/` | 301 |
| `/author/*`, `/?author=*` | — | **410** (elimina el email expuesto) |
| `/feed/` | `/blog/` | 301 |
| `/comments/feed/` | — | 410 |
| `/wp-sitemap.xml`, `/sitemap.xml`, `/wp-sitemap-*.xml` | `/sitemap-index.xml` | 301 |
| `/wp-content/uploads/…` (imágenes) | `/proyectos/` | 301 |
| `/wp-admin/*`, `/wp-login.php`, `/xmlrpc.php` | — | 410 |

**Antes del lanzamiento:** exportar las URLs con impresiones desde Search Console (si hay acceso) para confirmar que ninguna se queda fuera.

---

## 10. Arreglos inmediatos en la web actual (opcionales, no esperan a la nueva)

1. Quitar del sitemap el archivo de autor que expone `donairecarlos2@gmail.com`.
2. Crear y verificar la **ficha de Google Business Profile** (las reseñas tardan meses en acumularse).
