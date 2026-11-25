import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { pages } from '../data/pages';
import { absolute } from '../lib/schema';

export const GET: APIRoute = async () => {
  const landing = await getCollection('landing');
  const urls = [
    ...pages.filter((p) => !p.noindex).map((p) => ({ loc: absolute(p.path), lastmod: p.updated })),
    ...landing.map((e) => ({ loc: absolute(`/${e.id}/`), lastmod: e.data.updated.toISOString().slice(0, 10) })),
  ].sort((a, b) => a.loc.localeCompare(b.loc));

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
