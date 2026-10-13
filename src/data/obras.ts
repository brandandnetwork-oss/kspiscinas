/**
 * Fotos de obras reales de KS Piscinas (procedentes de la web anterior).
 * [PENDIENTE] municipio, medidas y plazo de cada obra para convertirlas en
 * fichas de la colección de proyectos (Fase 3).
 */
import ledNoche from '@/assets/obras/piscina-iluminacion-led-noche.jpg';
import porcelanicoBeige from '@/assets/obras/piscina-porcelanico-beige.jpg';
import gresiteVerdeGris from '@/assets/obras/piscina-gresite-verde-gris-banco.jpg';
import escaleraAzul from '@/assets/obras/piscina-escalera-obra-gresite-azul.jpg';
import chorros from '@/assets/obras/piscina-chorros-de-pared.jpg';

export type Obra = { image: ImageMetadata; alt: string; caption: string };

export const obrasDestacadas: Obra[] = [
  {
    image: ledNoche,
    alt: 'Piscina de obra con banco interior iluminada de noche con focos LED',
    caption: 'Iluminación LED nocturna',
  },
  {
    image: porcelanicoBeige,
    alt: 'Piscina revestida de porcelánico beige con coronación a juego junto a una vivienda',
    caption: 'Revestimiento porcelánico beige',
  },
  {
    image: gresiteVerdeGris,
    alt: 'Detalle de piscina con gresite gris verdoso y banco de obra sumergido',
    caption: 'Gresite verde y gris con banco de obra',
  },
  {
    image: escaleraAzul,
    alt: 'Escalera de obra de ancho completo revestida de gresite azul dentro de la piscina',
    caption: 'Escalera de obra en gresite azul',
  },
  {
    image: chorros,
    alt: 'Piscina de agua clara con chorros de pared en funcionamiento',
    caption: 'Chorros de pared',
  },
];
