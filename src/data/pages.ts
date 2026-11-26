/**
 * Registry of every hand-built (non-collection) page.
 * Each page reads its SEO meta from here, and the sitemap, llms.txt and keyword check use the same list.
 * Collection pages (src/content/landing) carry the same fields in their frontmatter.
 */

import { fill } from './company';

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords?: string[];
  updated: string;
  noindex?: boolean;
  inLlms?: boolean;
  llmsLabel?: string;
}

const registry: PageMeta[] = [
  {
    path: '/',
    title: 'Custom Clothing Manufacturer – Low MOQ | SDF Clothing',
    description:
      'Custom clothing manufacturer for fashion brands worldwide. MOQ from {{moq}} pieces, private label clothing manufacturing and samples in {{sampleDays}} days. SDF Clothing.',
    primaryKeyword: 'custom clothing manufacturer',
    secondaryKeywords: [
      'apparel manufacturers',
      'garments manufacturer',
      'fashion manufacturer',
    ],
    updated: '2026-11-26',
    inLlms: true,
    llmsLabel: 'Home',
  },
  {
    path: '/about/',
    title: 'About Us – Garment Factory Since {{founded}} | SDF Clothing',
    description:
      'Who runs SDF Clothing, how our Dhaka factory works, who we make clothing for and what we do not do. Our address and safe ways to reach us in one place.',
    primaryKeyword: 'about SDF Clothing',
    updated: '2026-11-25',
    inLlms: true,
    llmsLabel: 'About',
  },
  {
    path: '/work-process/',
    title: 'Clothing Production Process, Step by Step | SDF Clothing',
    description:
      'From tech pack to shipment in seven steps: quote, fabric, sample, approval, bulk, inspection and FOB shipping. Timelines, payment schedule and your sign-offs.',
    primaryKeyword: 'clothing production process',
    updated: '2026-11-25',
    inLlms: true,
    llmsLabel: 'Production process and payment schedule',
  },
  {
    path: '/pricing/',
    title: 'Clothing Manufacturing Prices – FOB Index | SDF Clothing',
    description:
      'Dated FOB prices per piece for custom clothing made in our Dhaka factory, at {{moq}} and 5,000 pieces. See what moves the price and how to get an exact quote.',
    primaryKeyword: 'SDF Clothing prices',
    updated: '2026-11-25',
    inLlms: true,
    llmsLabel: 'FOB price index',
  },
  {
    path: '/verify-us/',
    title: 'Verify Us – Official Website and Safe Payment | SDF Clothing',
    description:
      'Check that you are dealing with the real SDF Clothing: our official website, our email domain, factory visits and the only way we ever ask you to pay us.',
    primaryKeyword: 'verify SDF Clothing',
    updated: '2026-11-25',
    inLlms: true,
    llmsLabel: 'Official channels and payment safety',
  },
  {
    path: '/certifications/',
    title: 'Clothing Factory Compliance and Buyer Audits | SDF Clothing',
    description:
      'How we handle compliance documents, buyer audits and third-party inspection. Send your own inspector before shipment. Documents are shared during development.',
    primaryKeyword: 'clothing factory compliance and audits',
    updated: '2026-11-25',
    inLlms: true,
    llmsLabel: 'Compliance, audits and inspection',
  },
  {
    path: '/products/',
    title: 'Custom T-Shirts, Hoodies and Apparel We Make | SDF Clothing',
    description:
      'Browse the custom clothing we make for private label brands worldwide, with fabrics, MOQ and sample times for each product. Then get a quote. SDF Clothing.',
    primaryKeyword: 'custom clothing products',
    updated: '2026-11-25',
    inLlms: true,
    llmsLabel: 'Products',
  },
  {
    path: '/all-services/',
    title: 'Clothing Manufacturing Services, One Roof | SDF Clothing',
    description:
      'Cut-and-sew production, sampling, pattern making, printing and embroidery, all under one roof. See what each service includes and how long it takes to finish.',
    primaryKeyword: 'clothing manufacturing services',
    updated: '2026-11-25',
    inLlms: true,
    llmsLabel: 'Services',
  },
  {
    path: '/get-a-quote/',
    title: 'Clothing Manufacturing Quote in {{quoteHours}} Hours | SDF Clothing',
    description:
      'Tell us the product, quantity and target price. You get a written FOB quote with sample cost and lead time within {{quoteHours}} hours, from the factory, not an agent.',
    primaryKeyword: 'clothing manufacturing quote',
    updated: '2026-11-25',
    inLlms: true,
    llmsLabel: 'Request a quote',
  },
  {
    path: '/booking/',
    title: 'Book a Visit to Our Garment Factory in Dhaka | SDF Clothing',
    description:
      "Book a visit to SDF Clothing's garment factory in Baridhara DOHS, Dhaka. See cutting, sewing, printing and inspection, and review samples with your team.",
    primaryKeyword: 'visit a garment factory in Dhaka',
    updated: '2026-11-25',
    inLlms: true,
    llmsLabel: 'Book a factory visit',
  },
  {
    path: '/contact/',
    title: 'Contact Us – Message, WhatsApp or Visit | SDF Clothing',
    description:
      'Send SDF Clothing a message through our contact form or WhatsApp, find our office in Baridhara DOHS, Dhaka, or book a visit to our factory before you order.',
    primaryKeyword: 'contact SDF Clothing',
    updated: '2026-11-25',
    inLlms: true,
    llmsLabel: 'Contact',
  },
  {
    path: '/editorial-policy/',
    title: 'Editorial Policy – How We Write and Check | SDF Clothing',
    description:
      'Who writes the pages on sdfltd.com, where our facts and figures come from, how we use AI tools, how often we review content and how to report an error to us.',
    primaryKeyword: 'SDF Clothing editorial policy',
    updated: '2026-11-25',
    inLlms: true,
    llmsLabel: 'Editorial policy',
  },
  {
    path: '/tools/',
    title: 'Free Clothing Manufacturing Tools for Brands | SDF Clothing',
    description:
      'Free clothing manufacturing tools for brands: convert fabric GSM, find AQL sample sizes, plan lead times, work out landed cost and measure fabric shrinkage.',
    primaryKeyword: 'clothing manufacturing tools',
    updated: '2026-11-26',
    inLlms: true,
    llmsLabel: 'Free tools',
  },
  {
    path: '/tools/gsm-converter/',
    title: 'GSM Converter: GSM to oz and oz to GSM | SDF Clothing',
    description:
      'Free GSM converter for clothing fabric: change GSM to oz per square yard, oz to GSM and oz per linear yard by width, with the formulas and worked examples.',
    primaryKeyword: 'GSM converter',
    secondaryKeywords: ['GSM to oz', 'oz to GSM', 'fabric weight calculator'],
    updated: '2026-11-26',
    inLlms: true,
    llmsLabel: 'GSM converter',
  },
  {
    path: '/tools/aql-calculator/',
    title: 'AQL Calculator for Garment Inspections | SDF Clothing',
    description:
      'Free AQL calculator for clothing orders: enter the lot size and AQL levels to get the sample size and the accept and reject numbers for a garment inspection.',
    primaryKeyword: 'AQL calculator',
    secondaryKeywords: ['AQL sample size', 'accept and reject numbers', 'inspection level II'],
    updated: '2026-11-26',
    inLlms: true,
    llmsLabel: 'AQL calculator',
  },
  {
    path: '/tools/lead-time-calculator/',
    title: 'Lead Time Calculator for Clothing Orders | SDF Clothing',
    description:
      'Free lead time calculator for clothing orders: plan sample, approval, bulk and shipping dates, and find the latest date to order for your launch in store.',
    primaryKeyword: 'lead time calculator',
    secondaryKeywords: ['production timeline', 'order by date', 'launch date planning'],
    updated: '2026-11-26',
    inLlms: true,
    llmsLabel: 'Lead time calculator',
  },
  {
    path: '/tools/garment-cost-calculator/',
    title: 'Garment Cost Calculator for Landed Cost | SDF Clothing',
    description:
      'Free garment cost calculator: add factory price, freight, duty and fees to get landed cost per piece, then see your profit margin at a chosen retail price.',
    primaryKeyword: 'garment cost calculator',
    secondaryKeywords: ['landed cost calculator', 'cost per piece', 'profit margin on clothing'],
    updated: '2026-11-26',
    inLlms: true,
    llmsLabel: 'Garment cost calculator',
  },
  {
    path: '/tools/shrinkage-calculator/',
    title: 'Fabric Shrinkage Calculator for Garments | SDF Clothing',
    description:
      'Free fabric shrinkage calculator: measure length and width shrinkage after washing and find the size to cut a pattern so the garment finishes on spec.',
    primaryKeyword: 'fabric shrinkage calculator',
    secondaryKeywords: ['shrinkage percentage', 'shrinkage allowance', 'wash test'],
    updated: '2026-11-26',
    inLlms: true,
    llmsLabel: 'Fabric shrinkage calculator',
  },
  {
    path: '/privacy/',
    title: 'Privacy Policy – How We Handle Your Data | SDF Clothing',
    description:
      'What we collect when you use sdfltd.com or send a quote request, why we collect it, who processes it, how long we keep it and how to ask us to delete it.',
    primaryKeyword: 'SDF Clothing privacy policy',
    updated: '2026-11-25',
  },
  {
    path: '/terms/',
    title: 'Website Terms of Use – Rules for sdfltd.com | SDF Clothing',
    description:
      'The rules for using sdfltd.com: how to read our prices and lead times, our content and tools, links to other sites, and the law that applies to these terms.',
    primaryKeyword: 'SDF Clothing terms of use',
    updated: '2026-11-25',
  },
  {
    path: '/cookies/',
    title: 'Cookie Policy – No Tracking or Ad Cookies | SDF Clothing',
    description:
      'sdfltd.com sets no advertising or tracking cookies. Here is the short list of what the site stores in your browser, why, and how you can clear it at any time.',
    primaryKeyword: 'SDF Clothing cookie policy',
    updated: '2026-11-25',
  },
  {
    path: '/accessibility/',
    title: 'Accessibility Statement – WCAG 2.1 AA | SDF Clothing',
    description:
      'How we build sdfltd.com to meet WCAG 2.1 AA, the features you can rely on, known limitations, and how to tell us about a barrier so we can fix it quickly.',
    primaryKeyword: 'SDF Clothing accessibility',
    updated: '2026-11-25',
  },
  {
    path: '/thank-you/',
    title: 'Thank You – Your Request Reached Our Team | SDF Clothing',
    description:
      'Your request has reached our merchandising team. Here is what happens next, when to expect our reply and how to recognise genuine messages from SDF Clothing.',
    primaryKeyword: 'quote request received',
    updated: '2026-11-25',
    noindex: true,
  },
];

export const pages: PageMeta[] = registry.map((p) => ({
  ...p,
  title: fill(p.title),
  description: fill(p.description),
}));

export function pageMeta(path: string): PageMeta {
  const meta = pages.find((p) => p.path === path);
  if (!meta) throw new Error(`No page meta registered for ${path} in src/data/pages.ts`);
  return meta;
}
