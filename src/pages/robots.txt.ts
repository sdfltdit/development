import type { APIRoute } from 'astro';
import { site } from '../data/company';

export const GET: APIRoute = () => {
  const body = [
    '# robots.txt for sdfltd.com',
    '# Search engines and AI assistants are welcome to read and cite this site.',
    '',
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    '',
    'User-agent: Bytespider',
    'Disallow: /',
    '',
    `Sitemap: ${site.url}/sitemap.xml`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
