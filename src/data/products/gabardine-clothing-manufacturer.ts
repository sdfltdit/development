import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const gabardine: ProductContent = {
  slug: 'gabardine-clothing-manufacturer',
  garment: 'gabardine',
  quoteCta: 'Get a gabardine clothing quote',
  audience: 'Tailoring, outerwear and uniform brands that want a crisp, durable twill',
  glanceHeading: 'Gabardine clothing manufacturing at a glance',
  glanceLead: 'Gabardine is dense and crisp, so fibre, finish and pressing decide the look. These are the points to confirm first.',
  stylesHeading: 'What we make as a gabardine clothing manufacturer',
  stylesLead: 'Gabardine suits tailored and uniform pieces. These are the pieces brands order most.',
  styles: [
    { title: 'Gabardine trousers', text: 'Tailored, pleated and straight-leg fits.', href: '/pants-trousers-manufacturer/', cta: 'Pants manufacturer details' },
    { title: 'Trench coats', text: 'Belted coats with storm flaps.', href: '/coat-manufacturer/', cta: 'Coat manufacturer details' },
    { title: 'Skirts', text: 'Pencil and A-line skirts.' },
    { title: 'Gabardine uniforms', text: 'Corporate, school and security pieces.', href: '/uniform-manufacturer/', cta: 'Uniform manufacturer details' },
    { title: 'Blazers and suits', text: 'Tailored jackets with matching trousers.', href: '/suit-manufacturer/', cta: 'Suit manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['woven'], 'gabardine clothing', 'Gabardine is a woven fabric. At the minimum we cut from ready gabardine. Gabardine woven to your own fibre and weight starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('gabardine clothing', [['Light gabardine', '180–220 GSM', 'Skirts, summer trousers'], ['Mid gabardine', '220–280 GSM', 'Trousers, uniforms'], ['Heavy gabardine', '280–340 GSM', 'Trench coats, jackets'], ['Wool gabardine', '220–300 GSM', 'Premium trousers and suits']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Gabardine fabric',
      heading: 'How we tailor gabardine fabric',
      lead: 'Gabardine shows every pressing mark and needs firm construction. These are the details we set.',
      items: [
        { label: 'Pressing', text: 'creases set with steam and a press cloth' },
        { label: 'Interlining', text: 'fused waistbands and fronts for a crisp line' },
        { label: 'Seams', text: 'pressed open and finished' },
        { label: 'Shine', text: 'low-shine pressing so the twill does not glaze' },
        { label: 'Coats', text: 'storm flaps, belts and taped seams where needed' },
        { label: 'Shrinkage', text: 'relaxation tested on each lot' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Gabardine clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about gabardine clothing.',
      items: [
        { label: 'Shiny pressing marks', text: 'press cloth and set temperature' },
        { label: 'Creases drop out', text: 'fibre and pressing chosen for crease hold' },
        { label: 'Seams pucker', text: 'stitch tension set for a dense weave' },
        { label: 'Shade differs between pieces', text: 'panels cut from one roll' },
        { label: 'Uniform sizes drift', text: 'graded patterns and measured samples' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How gabardine clothing is priced',
    paragraphs: [
      'Fibre and weight move the fabric price, and linings and interlining add sewing time. A lined wool gabardine coat costs far more than a cotton skirt.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a gabardine order runs',
  processLead: 'Six steps from your brief to shipped gabardine clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, gabardine type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send gabardine swatches by fibre, weight and finish.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check fit and pressing, and we correct the sample.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Gabardine clothing quality checks',
    lead: 'As a gabardine clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, shade and twill checked on arrival' },
      { label: 'Pressing', text: 'creases sharp with no shine' },
      { label: 'Seams', text: 'flat with no puckers' },
      { label: 'Interlining', text: 'no bubbling after pressing' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a gabardine clothing quote',
    lead: 'This is enough for a gabardine clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Gabardine fibre and weight',
      'Colours and finish',
      'Size range and quantity per style',
      'Lining and interlining needs',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Gabardine and related fabrics',
    paragraphs: [
      'For wool gabardine in detail, see our <a href="/wool-clothing-manufacturer/">wool clothing manufacturer</a> page. For tougher utility fabric, see our <a href="/ripstop-clothing-manufacturer/">ripstop clothing manufacturer</a> page.',
      'Our <a href="/uniform-manufacturer/">uniform manufacturer</a> page covers uniform programmes.',
    ],
  },
  faqHeading: 'Gabardine clothing questions',
};
