# Sistema de diseño: KS Piscinas

Los tokens están definidos en `src/styles/global.css` (bloque `@theme` de Tailwind 4). Cualquier cambio de color, fuente o radio se hace ahí.

## Color

La paleta deriva del logo (mosaico de gresite: marino, azul y cielo), con un neutro cálido "arena" y un único color de acción.

| Token | Hex | Uso | Contraste |
|---|---|---|---|
| `noche` | #13184A | Fondos oscuros (pie de página, CTA, degradado del hero) | Blanco sobre noche: 16,7:1 |
| `marino` | #1F2B78 | Titulares, botón primario, sección de valores | Sobre blanco: 12,5:1 |
| `azul` | #009CE0 | Acento decorativo, foco y anillos. **No se usa para texto pequeño sobre blanco** (3,1:1) | Sobre noche: 5,4:1 |
| `azul-texto` | #00679A | Enlaces y textos de acento sobre blanco | Sobre blanco: 6,2:1; sobre arena: 4,7:1 |
| `cielo` | #84CCF2 | Iconos y eyebrows sobre fondos oscuros | Sobre noche: 9,5:1 |
| `espuma` | #EAF6FD | Fondos suaves y hover | — |
| `arena` | #F6F2EC | Neutro cálido (sección de obras) | — |
| `tinta` | #131B33 | Texto principal | Sobre arena: 15,3:1 |
| `piedra` | #5A6273 | Texto secundario | Sobre blanco: 6,1:1; sobre arena: 5,5:1 |
| `coral` | #C2410C | **Solo el CTA de presupuesto**, con texto blanco | 5,2:1 |

Todos los pares de texto cumplen WCAG 2.2 AA (≥ 4,5:1 en texto normal).

## Tipografía

Hay dos familias, autoalojadas en `public/fonts/` (woff2 variable, subconjunto latino). Llevan `font-display: swap`, se precargan en el `<head>` y tienen fallbacks con métricas ajustadas para evitar CLS.

- **Sora** (`font-display`): titulares, botones y navegación. Es una geométrica que conecta con las letras cuadradas del logo.
- **Inter** (`font-sans`): texto corrido e interfaz.

Escala: el H1 del hero mide 2,3 rem en móvil y 4,25 rem en escritorio. Los H2 de sección van de 1,875 a 2,75 rem. El cuerpo es de 17 px con interlineado 1,65.

## Componentes base

- `.btn` + `.btn-cta` (coral), `.btn-primario` (marino), `.btn-claro` (sobre foto u oscuro) y `.btn-borde`. Altura mínima de 48 px, que cumple el tamaño táctil.
- `.eyebrow` / `.eyebrow-claro`: antetítulo en mayúsculas, acompañado de `.teselas`.
- `.teselas`: motivo de marca de cuatro teselas de gresite. El tamaño se ajusta con `--t`.
- `.container-ks`: ancho máximo de 80 rem, con márgenes laterales de 20 px en móvil y 32 px desde `sm`.
- Tarjetas: radio `--radius-card` (1,25 rem), `shadow-card` y `shadow-lift` al pasar el ratón.

## Movimiento

- `[data-reveal]`: el elemento sube y aparece al entrar en pantalla, animando solo `transform` y `opacity`. El retardo escalonado se controla con `--reveal-delay`.
- El contenido es visible si no hay JS (el estado oculto solo se aplica con la clase `.js` en `<html>`).
- Todo el movimiento se desactiva con `prefers-reduced-motion: reduce`.

## Accesibilidad

- Foco visible: contorno azul de 3 px con separación.
- Enlace "Saltar al contenido" al principio de la página.
- Menú móvil con `aria-expanded` / `aria-controls`; se cierra con Escape y devuelve el foco al botón.
- FAQ con `<details>/<summary>` nativos.
- Los iconos son decorativos (`aria-hidden`). Los enlaces que abren ventana nueva lo indican con texto `sr-only`.
