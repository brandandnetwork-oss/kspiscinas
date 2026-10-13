import { getCollection, type CollectionEntry } from 'astro:content';

type Proyecto = CollectionEntry<'proyectos'>;

/** Una obra tiene ficha propia cuando se conoce al menos su municipio. */
export const hasFicha = (p: Proyecto) => Boolean(p.data.municipio);

export async function getProyectos() {
  return (await getCollection('proyectos')).sort((a, b) => a.data.order - b.data.order);
}

/** Obras relacionadas con un servicio (las destacadas primero). */
export async function getProyectosDeServicio(servicio: string, limit = 6) {
  const all = await getProyectos();
  return all
    .filter((p) => (p.data.servicios as string[]).includes(servicio))
    .sort((a, b) => Number(b.data.destacado) - Number(a.data.destacado))
    .slice(0, limit);
}
