import type { APIRoute } from 'astro';
import { company, site } from '../data/company';

export const GET: APIRoute = () => {
  const manifest = {
    name: `${company.brandName} – Clothing Manufacturer`,
    short_name: company.brandName,
    description: 'Custom clothing manufacturer for fashion brands worldwide.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: site.themeColor,
    icons: [
      ...[72, 96, 128, 144, 152, 192, 384, 512].map((size) => ({ src: `/icons/icon-${size}x${size}.png`, sizes: `${size}x${size}`, type: 'image/png', purpose: 'any' })),
      { src: '/icons/maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
  return new Response(JSON.stringify(manifest, null, 2), { headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' } });
};
