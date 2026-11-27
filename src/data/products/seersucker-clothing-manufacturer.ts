import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const seersucker: ProductContent = {
  slug: 'seersucker-clothing-manufacturer',
  garment: 'seersucker',
  quoteCta: 'Get a seersucker clothing quote',
  audience: 'Resort, menswear, kidswear and sleepwear brands making cool summer pieces',
  glanceHeading: 'Seersucker clothing manufacturing at a glance',
  glanceLead: 'Seersucker texture, stripe and shrinkage decide how it looks after washing. These are the points to confirm first.',
  stylesHeading: 'What we make as a seersucker clothing manufacturer',
  stylesLead: 'Custom seersucker clothing suits warm-weather ranges. These are the pieces brands order most.',
  styles: [
    { title: 'Seersucker shirts', text: 'Camp-collar and button-down shirts.', href: '/shirt-manufacturer/', cta: 'Shirt manufacturer details' },
    { title: 'Seersucker shorts', text: 'Drawcord and tailored shorts.', href: '/shorts-manufacturer/', cta: 'Shorts manufacturer details' },
    { title: 'Dresses', text: 'Sun dresses and shirt dresses.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Co-ord sets and pyjamas', text: 'Matching sets for lounge and sleep.', href: '/loungewear-manufacturer/', cta: 'Loungewear manufacturer details' },
    { title: 'Summer suits', text: 'Unlined blazers with trousers or shorts.', href: '/suit-manufacturer/', cta: 'Suit manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['woven'], 'seersucker clothing', 'Seersucker is a woven fabric. At the minimum we cut from ready seersucker in stock stripes. Seersucker woven to your own stripe starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('seersucker clothing', [['Light seersucker', '100–130 GSM', 'Shirts, dresses, pyjamas'], ['Mid seersucker', '130–170 GSM', 'Shorts, co-ord sets'], ['Suiting seersucker', '170–220 GSM', 'Blazers, trousers']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Seersucker fabric',
      heading: 'How we keep seersucker fabric puckered',
      lead: 'Seersucker must never be pressed flat. These are the details we set.',
      items: [
        { label: 'Pressing', text: 'steam only on seams, never on the puckered stripes' },
        { label: 'Stripe matching', text: 'stripes matched at fronts and pockets' },
        { label: 'Shrinkage', text: 'wash test on every lot' },
        { label: 'Seams', text: 'flat-felled or French seams' },
        { label: 'Cutting', text: 'stripes kept straight on the marker' },
        { label: 'Finishing', text: 'garments folded, not pressed, for packing' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Seersucker clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about seersucker clothing.',
      items: [
        { label: 'Pucker flattened', text: 'no pressing on the stripes' },
        { label: 'Stripes do not line up', text: 'matching at the marker and on the sample' },
        { label: 'Shrinks after washing', text: 'wash test and pattern allowance' },
        { label: 'Seams pucker unevenly', text: 'stitch tension set for the texture' },
        { label: 'Colours run', text: 'colour fastness on the mill report' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How seersucker clothing is priced',
    paragraphs: [
      'Fabric weight and stripe matching move the price most. A matched suit costs far more than a pair of drawcord shorts.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a seersucker order runs',
  processLead: 'Six steps from your brief to shipped seersucker clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, seersucker type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send seersucker swatches by stripe and weight.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check texture and fit after washing, and we correct the sample.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Seersucker clothing quality checks',
    lead: 'As a seersucker clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'stripe, shade and pucker checked on arrival' },
      { label: 'Pucker', text: 'checked after the wash test' },
      { label: 'Stripe matching', text: 'checked at key seams' },
      { label: 'Seams', text: 'flat and secure' },
      { label: 'Measurements', text: 'every point of measure after washing' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a seersucker clothing quote',
    lead: 'This is enough for a seersucker clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Seersucker stripe and weight',
      'Colours and buttons',
      'Size range and quantity per style',
      'Whether pieces sell as a set',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Seersucker and related fabrics',
    paragraphs: [
      'For light, sheer summer cotton, see our <a href="/voile-clothing-manufacturer/">voile clothing manufacturer</a> page. For a natural summer fibre, see our <a href="/linen-clothing-manufacturer/">linen clothing manufacturer</a> page.',
      'Our <a href="/shorts-manufacturer/">shorts manufacturer</a> page covers shorts prices.',
    ],
  },
  faqHeading: 'Seersucker clothing questions',
};
