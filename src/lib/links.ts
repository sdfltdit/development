import { getCollection } from 'astro:content';
import { pages } from '../data/pages';
import { fill } from '../data/company';
import { tools } from '../data/tools';

export interface LinkCard {
  title: string;
  href: string;
  summary: string;
}

const staticCards: Record<string, { title: string; summary: string }> = {
  '/pricing/': { title: 'Clothing manufacturing prices', summary: 'Dated per-piece prices at two quantity tiers, and what moves them.' },
  '/work-process/': { title: 'Clothing production process', summary: 'Seven steps from quote to shipment, with timings and the payment schedule.' },
  '/verify-us/': { title: 'Verify SDF Clothing', summary: 'How to check you are dealing with us, and the only account we ask you to pay.' },
  '/certifications/': { title: 'Clothing factory compliance', summary: 'How buyer audits, documents and third-party inspection work with us.' },
  '/get-a-quote/': { title: 'Clothing manufacturing quote', summary: 'Send product, quantity and target price for a written quote.' },
  '/about/': { title: 'About SDF Clothing', summary: 'Who runs the factory, who we make for and what we do not do.' },
  '/booking/': { title: 'Garment factory visit', summary: 'Book a visit to see cutting, sewing, printing and inspection in Dhaka.' },
  '/nda/': { title: 'Clothing manufacturer NDA', summary: 'How we keep your designs private and sign your NDA before you share files.' },
  '/faq/': { title: 'Clothing manufacturer FAQ', summary: 'Answers on minimums, samples, payment, quality and shipping.' },
  '/contact/': { title: 'Contact SDF Clothing', summary: 'Send a message through our form or WhatsApp, and find our factory in Dhaka.' },
  '/products/': { title: 'Custom clothing products', summary: 'Every product we make, with fabric weights and terms.' },
  '/all-services/': { title: 'Clothing manufacturing services', summary: 'Sampling, cut and sew, printing and embroidery in one place.' },
};

export async function linkCards(hrefs: string[]): Promise<LinkCard[]> {
  const entries = await getCollection('landing');
  return hrefs.map((href) => {
    const entry = entries.find((e) => `/${e.id}/` === href);
    if (entry) return { title: entry.data.navLabel, href, summary: fill(entry.data.cardSummary) };
    const tool = tools.find((t) => t.path === href);
    if (tool) return { title: tool.name, href, summary: tool.summary };
    const card = staticCards[href];
    if (card) return { ...card, href };
    const page = pages.find((p) => p.path === href);
    if (page) return { title: page.title, href, summary: page.description };
    throw new Error(`No link card data for ${href}. Add it to the landing collection or staticCards in src/lib/links.ts.`);
  });
}
