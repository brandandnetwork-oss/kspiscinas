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

export const collections = { servicios, faq };
