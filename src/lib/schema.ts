import { site } from '@/config/site';

/** Identificador estable de la entidad negocio para enlazar nodos JSON-LD. */
export const BUSINESS_ID = `${site.url}/#negocio`;
export const WEBSITE_ID = `${site.url}/#web`;

export function businessSchema(logoUrl: string, imageUrl: string) {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: site.name,
    description: site.description,
    url: `${site.url}/`,
    logo: logoUrl,
    image: imageUrl,
    telephone: site.phone.e164,
    email: site.email,
    // Negocio de área de servicio: sin calle pública, solo localidad.
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.area.locality,
      addressRegion: site.area.region,
      addressCountry: site.area.country,
    },
    areaServed: { '@type': 'City', name: site.area.locality },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: site.hours.days,
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    sameAs: [site.social.instagram],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${site.url}/`,
    name: site.name,
    inLanguage: 'es-ES',
    publisher: { '@id': BUSINESS_ID },
  };
}

export type Crumb = { name: string; href: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.href, site.url).href,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}

/** Envuelve nodos en un único @graph. */
export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
