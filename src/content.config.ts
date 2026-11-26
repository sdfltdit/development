import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faq = z.object({
  q: z.string().min(10),
  a: z.string().min(40),
});

const specRow = z.object({
  label: z.string().min(2),
  value: z.string().min(2),
});

const landing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/landing' }),
  schema: z.object({
    kind: z.enum(['product', 'service', 'model', 'guide']),
    hub: z.enum(['products', 'services', 'how-we-work']),
    navLabel: z.string().min(3).max(32),
    linkText: z.string().min(10).max(48).optional(),
    cardSummary: z.string().min(60).max(180),
    title: z.string().min(30).max(90),
    description: z.string().min(100).max(220),
    h1: z.string().min(20).max(80),
    eyebrow: z.string().min(3).max(48),
    primaryKeyword: z.string().min(3),
    secondaryKeywords: z.array(z.string()).max(8).default([]),
    intent: z.enum(['commercial', 'informational', 'transactional']),
    answer: z.string().min(160).max(520),
    facts: z.array(z.enum(['moq', 'sample', 'bulk', 'quote', 'aql', 'incoterm'])).min(3).max(4),
    specs: z.array(specRow).default([]),
    specsCaption: z.string().optional(),
    showPrices: z.boolean().default(false),
    serviceType: z.string().min(3),
    citations: z.array(z.url()).default([]),
    sources: z.array(z.object({ title: z.string().min(5), publisher: z.string().min(2), url: z.url() })).default([]),
    faq: z.array(faq).min(4).max(10),
    related: z.array(z.string().regex(/^\/[a-z0-9/-]*\/$/)).min(3).max(8),
    published: z.coerce.date(),
    updated: z.coerce.date(),
  }),
});

export const collections = { landing };
