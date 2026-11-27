import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const tweed: ProductContent = {
  slug: 'tweed-clothing-manufacturer',
  garment: 'tweed',
  quoteCta: 'Get a tweed clothing quote',
  audience: 'Heritage, menswear, outerwear and country brands working in wool weaves',
  glanceHeading: 'Tweed clothing manufacturing at a glance',
  glanceLead: 'Tweed is heavy, textured and often patterned, so construction and matching decide the result. These are the points to confirm first.',
  stylesHeading: 'What we make as a tweed clothing manufacturer',
  stylesLead: 'Custom tweed clothing suits heritage and cold-weather ranges. These are the pieces brands order most.',
  styles: [
    { title: 'Tweed jackets', text: 'Single and double-breasted jackets.', href: '/blazer-manufacturer/', cta: 'Blazer manufacturer details' },
    { title: 'Overcoats', text: 'Long and car coats in heavy tweed.', href: '/coat-manufacturer/', cta: 'Coat manufacturer details' },
    { title: 'Waistcoats', text: 'Lined waistcoats and three-piece suits.', href: '/suit-manufacturer/', cta: 'Suit manufacturer details' },
    { title: 'Flat caps', text: 'Caps and baker boy hats.', href: '/hat-manufacturer/', cta: 'Hat manufacturer details' },
    { title: 'Skirts and trousers', text: 'Lined skirts and trousers.' },
  ],
  blocks: [
    fabricMoqBlock(['woven'], 'tweed clothing', 'Tweed is a woven fabric. At the minimum we cut from ready tweed. Tweed woven to your own colours and weight starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('tweed clothing', [['Light tweed', '280–380 GSM', 'Jackets, waistcoats, caps'], ['Mid tweed', '380–480 GSM', 'Jackets, skirts'], ['Heavy tweed', '480–600 GSM', 'Overcoats'], ['Herringbone wool', '280–450 GSM', 'Jackets, coats, trousers']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Herringbone tweed',
      heading: 'How we tailor herringbone tweed',
      lead: 'Tweed is thick and patterned, so tailoring and matching take care. These are the details we set.',
      items: [
        { label: 'Matching', text: 'checks and herringbone matched at fronts and pockets' },
        { label: 'Fronts', text: 'fused or half-canvas fronts for shape' },
        { label: 'Linings', text: 'full linings so wool does not catch' },
        { label: 'Seams', text: 'pressed open and finished' },
        { label: 'Pressing', text: 'steam with a cloth so the texture stays' },
        { label: 'Pile direction', text: 'all panels cut the same way' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Tweed clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about tweed clothing.',
      items: [
        { label: 'Patterns do not match', text: 'matching on the marker and sample' },
        { label: 'Fronts lose shape', text: 'canvas or fusing set for the weight' },
        { label: 'Shiny pressing marks', text: 'press cloth and set temperature' },
        { label: 'Shade differs between panels', text: 'panels cut from one roll' },
        { label: 'Fabric sheds or pills', text: 'yarn quality checked on arrival' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How tweed clothing is priced',
    paragraphs: [
      'Fibre, weight and construction move the price most. A half-canvas wool tweed jacket costs far more than a blend cap.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a tweed order runs',
  processLead: 'Six steps from your brief to shipped tweed clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, tweed type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send tweed swatches by pattern, fibre and weight.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check fit and matching, and we correct the sample.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Tweed clothing quality checks',
    lead: 'As a tweed clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, shade and pattern checked on arrival' },
      { label: 'Matching', text: 'checked at key seams' },
      { label: 'Fronts', text: 'shape and fusing checked' },
      { label: 'Linings', text: 'smooth with no pull' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a tweed clothing quote',
    lead: 'This is enough for a tweed clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Tweed pattern, fibre and weight',
      'Colours and lining',
      'Size range and quantity per style',
      'Construction (fused or half canvas)',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Tweed and related fabrics',
    paragraphs: [
      'For other wool cloths, see our <a href="/wool-clothing-manufacturer/">wool clothing manufacturer</a> page. For smoother tailoring twills, see our <a href="/gabardine-clothing-manufacturer/">gabardine clothing manufacturer</a> page.',
      'Our <a href="/blazer-manufacturer/">blazer manufacturer</a> page explains fused and canvas construction.',
    ],
  },
  faqHeading: 'Tweed clothing questions',
};
