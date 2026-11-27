/**
 * Content model for product pages rendered by src/components/ProductPage.astro.
 * SEO fields, specs and FAQs live in the page's src/content/landing/<slug>.md frontmatter.
 * Everything else on the page lives in a typed file next to this one.
 * Copy may use {{tokens}} from company.ts. Strings marked html may contain inline links (<a>), <strong> and <em> only.
 */
import type { GarmentKey } from '../../lib/garments';
import type { InfographicName } from '../../lib/infographics';

export interface Card {
  title: string;
  text: string;
  href?: string;
  cta?: string;
}

export interface TableBlock {
  kind: 'table';
  id: string;
  eyebrow: string;
  heading: string;
  lead: string;
  caption: string;
  columns: string[];
  rows: string[][];
  more?: string;
  image?: InfographicName;
}

export interface ChecklistBlock {
  kind: 'checklist';
  id: string;
  eyebrow: string;
  heading: string;
  lead: string;
  items: { label: string; text: string }[];
  note?: string;
}

export interface ProseBlock {
  kind: 'prose';
  id: string;
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

export type Block = TableBlock | ChecklistBlock | ProseBlock;

export interface ProductContent {
  slug: string;
  garment: GarmentKey;
  quoteCta: string;
  priceCta?: string;
  audience: string;
  glanceHeading: string;
  glanceLead: string;
  stylesHeading: string;
  stylesLead: string;
  styles: Card[];
  stylesAside?: Card;
  blocks: Block[];
  prices?: {
    heading: string;
    lead: string;
    rows: string[];
    caption: string;
  };
  noPrice?: {
    heading: string;
    paragraphs: string[];
  };
  processHeading: string;
  processLead: string;
  steps: { title: string; text: string }[];
  quality: {
    heading: string;
    lead: string;
    items: { label: string; text: string }[];
  };
  quote: {
    heading: string;
    lead: string;
    items: string[];
  };
  first: {
    heading: string;
    paragraphs: string[];
  };
  faqHeading: string;
}
