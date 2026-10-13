import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Colecciones de contenido. Para añadir una página basta con crear un fichero
 * Markdown en la carpeta correspondiente de src/content/ (ver README).
 */

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: ({ image }) =>
    z.object({
      /** H1 de la página. */
      title: z.string(),
      /** Etiqueta corta para menús y tarjetas. */
      navLabel: z.string(),
      /** <title> SEO (≤ 60 caracteres). */
      seoTitle: z.string().max(65),
      /** Meta description (≤ 160 caracteres). */
      description: z.string().max(170),
      /** Resumen para la tarjeta de la home. */
      summary: z.string(),
      image: image(),
      imageAlt: z.string(),
      order: z.number(),
      /** Puntos clave que se muestran como lista en tarjetas. */
      highlights: z.array(z.string()).default([]),
    }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    /** Respuesta en texto plano (se usa también en el JSON-LD FAQPage). */
    answer: z.string(),
    /** Páginas donde se muestra: 'home', 'construccion-de-piscinas'… */
    showOn: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

/** Obras. La ficha individual solo se publica si la obra tiene municipio. */
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      imageAlt: z.string(),
      /** Fotos adicionales (proceso de obra, detalles, antes/después). */
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      /** Antes/después para reformas: activa el comparador deslizante. */
      antes: z.object({ src: image(), alt: z.string() }).optional(),
      /** Tipo de obra. [PENDIENTE] confirmar en las obras importadas de la web anterior. */
      tipo: z.enum(['Obra nueva', 'Reforma']).optional(),
      /** Servicios relacionados (slugs) para el enlazado interno. */
      servicios: z
        .array(z.enum(['construccion-de-piscinas', 'reforma-de-piscinas', 'equipamiento-e-iluminacion', 'exteriores-y-jardin']))
        .default([]),
      revestimiento: z.enum(['Gresite', 'Porcelánico']).optional(),
      elementos: z.array(z.string()).default([]),
      /** [PENDIENTE] datos que KS debe aportar para publicar la ficha. */
      municipio: z.string().optional(),
      medidas: z.string().optional(),
      plazo: z.string().optional(),
      fecha: z.coerce.date().optional(),
      destacado: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string().max(65),
      description: z.string().max(170),
      image: image(),
      imageAlt: z.string(),
      datePublished: z.coerce.date(),
      dateModified: z.coerce.date().optional(),
      /** Servicios relacionados para el enlazado interno. */
      servicios: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { servicios, faq, proyectos, blog };
