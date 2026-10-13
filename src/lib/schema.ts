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

export function serviceSchema(opts: { name: string; description: string; path: string; image: string }) {
  return {
    '@type': 'Service',
    '@id': `${new URL(opts.path, site.url).href}#servicio`,
    name: opts.name,
    description: opts.description,
    url: new URL(opts.path, site.url).href,
    image: opts.image,
    serviceType: opts.name,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: site.area.locality },
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: Date;
  dateModified?: Date;
}) {
  const url = new URL(opts.path, site.url).href;
  return {
    '@type': 'Article',
    '@id': `${url}#articulo`,
    headline: opts.headline,
    description: opts.description,
    image: opts.image,
    datePublished: opts.datePublished.toISOString(),
    dateModified: (opts.dateModified ?? opts.datePublished).toISOString(),
    inLanguage: 'es-ES',
    mainEntityOfPage: url,
    author: { '@id': BUSINESS_ID },
    publisher: { '@id': BUSINESS_ID },
  };
}

export function imageObjectSchema(opts: { contentUrl: string; caption: string; width?: number; height?: number }) {
  return {
    '@type': 'ImageObject',
    contentUrl: opts.contentUrl,
    caption: opts.caption,
    width: opts.width,
    height: opts.height,
    creditText: site.name,
    copyrightHolder: { '@id': BUSINESS_ID },
    creator: { '@id': BUSINESS_ID },
  };
}
