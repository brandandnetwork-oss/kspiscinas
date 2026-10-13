/**
 * Datos de negocio (NAP) — fuente única. Cualquier cambio de teléfono, email u
 * horario se hace aquí y se propaga a cabecera, pie, formularios y JSON-LD.
 *
 * [PENDIENTE] razón social, CIF/NIF y domicilio del titular (aviso legal).
 * [PENDIENTE] ficha de Google Business Profile (añadir su URL a `sameAs`).
 */
export const site = {
  name: 'KS Piscinas',
  legalName: '[PENDIENTE]',
  url: 'https://kspiscinas.es',
  description:
    'Construcción y reforma de piscinas de obra en Madrid: hormigón gunitado, gresite y porcelánico, equipamiento a medida y espacios exteriores.',

  phone: {
    display: '641 45 28 29',
    e164: '+34641452829',
  },
  whatsapp: {
    number: '34641452829',
    message: '¡Hola! Me gustaría pedir información sobre una piscina.',
  },
  email: 'sanchezkevin427@gmail.com',

  /** Horario: lunes a sábado, 9:00–20:00. */
  hours: {
    display: 'Lunes a sábado, 9:00 – 20:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '20:00',
  },

  /** Sin dirección pública: negocio de área de servicio. */
  area: {
    locality: 'Madrid',
    region: 'Comunidad de Madrid',
    country: 'ES',
  },

  social: {
    instagram: 'https://www.instagram.com/ks.piscinas/',
    instagramHandle: '@ks.piscinas',
  },
} as const;

export const telHref = `tel:${site.phone.e164}`;
export const mailHref = `mailto:${site.email}`;
export const whatsappHref = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Proyectos', href: '/proyectos/' },
  { label: 'Cómo trabajamos', href: '/como-trabajamos/' },
  { label: 'Nosotros', href: '/sobre-nosotros/' },
  { label: 'Guías', href: '/blog/' },
  { label: 'Contacto', href: '/contacto/' },
];

export const legalNav: NavItem[] = [
  { label: 'Aviso legal', href: '/aviso-legal/' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad/' },
  { label: 'Política de cookies', href: '/politica-de-cookies/' },
];
