import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const georgette: ProductContent = {
  slug: 'georgette-clothing-manufacturer',
  garment: 'georgette',
  quoteCta: 'Get a georgette clothing quote',
  audience: 'Womenswear, modest and occasion brands working in fluid, lightly sheer fabric',
  glanceHeading: 'Georgette clothing manufacturing at a glance',
  glanceLead: 'Georgette drapes beautifully but slips under the needle. These are the points a georgette clothing manufacturer should confirm first.',
  stylesHeading: 'What we make as a georgette clothing manufacturer',
  stylesLead: 'Custom georgette clothing covers everyday and occasion pieces. These are the pieces brands order most.',
  styles: [
    { title: 'Georgette dresses', text: 'Maxi, tiered and wrap dresses.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Blouses and tunics', text: 'Relaxed blouses and long tunics.' },
    { title: 'Kurtas and abayas', text: 'Modest pieces in double georgette.', href: '/modest-fashion-manufacturer/', cta: 'Modest fashion manufacturer details' },
    { title: 'Scarves and hijabs', text: 'Rolled-hem scarves and hijabs.', href: '/hijab-manufacturer/', cta: 'Hijab manufacturer details' },
    { title: 'Embellished pieces', text: 'Embroidered and beaded occasion wear.', href: '/evening-dress-manufacturer/', cta: 'Evening dress manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['woven'], 'georgette clothing', 'Georgette is a woven fabric. At the minimum we cut from ready georgette. Georgette woven to your own construction starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('georgette clothing', [['Light georgette', '60–80 GSM', 'Scarves, overlays, blouses'], ['Polyester georgette', '70–100 GSM', 'Dresses, blouses, kurtas'], ['Double georgette', '100–140 GSM', 'Abayas, dresses with more coverage']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Polyester georgette',
      heading: 'How we cut and sew polyester georgette',
      lead: 'Georgette shifts while it is cut and puckers if the stitch is wrong. These are the details we set.',
      items: [
        { label: 'Cutting', text: 'laid on paper in low plies so the fabric does not move' },
        { label: 'Seams', text: 'French seams that hide raw edges' },
        { label: 'Hems', text: 'rolled or baby hems on fine needles' },
        { label: 'Stitch', text: 'short stitch and light tension to avoid puckering' },
        { label: 'Backing', text: 'light backing behind embroidery and beading' },
        { label: 'Pressing', text: 'low heat with a cloth so the crepe texture stays' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Georgette clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about georgette clothing.',
      items: [
        { label: 'Seams pucker', text: 'stitch length and tension set on the sample' },
        { label: 'Hems wave', text: 'rolled hems on fine needles' },
        { label: 'Beading pulls fabric', text: 'backing behind heavy work' },
        { label: 'Too sheer in light colours', text: 'double georgette or lining agreed on the sample' },
        { label: 'Prints dull', text: 'sublimation profile tested on the strike-off' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How georgette clothing is priced',
    paragraphs: [
      'Fibre, weight and embellishment move the price most. Silk georgette and hand beading cost far more than plain polyester.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a georgette order runs',
  processLead: 'Six steps from your brief to shipped georgette clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, georgette type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send georgette swatches by fibre and weight.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check drape and coverage, and we correct the sample.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Georgette clothing quality checks',
    lead: 'As a georgette clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'shade, weave and snags checked on arrival' },
      { label: 'Seams', text: 'flat with no puckers' },
      { label: 'Hems', text: 'even width with no waves' },
      { label: 'Embellishment', text: 'secure and placed as approved' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a georgette clothing quote',
    lead: 'This is enough for a georgette clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Georgette fibre and weight',
      'Print artwork or colours',
      'Size range and quantity per style',
      'Any embroidery or beading',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Georgette and related fabrics',
    paragraphs: [
      'For a lighter, sheerer fabric, see our <a href="/chiffon-clothing-manufacturer/">chiffon clothing manufacturer</a> page. For a heavier crepe drape, see our <a href="/crepe-clothing-manufacturer/">crepe clothing manufacturer</a> page.',
      'Our <a href="/modest-fashion-manufacturer/">modest fashion manufacturer</a> page covers abayas and kaftans.',
    ],
  },
  faqHeading: 'Georgette clothing questions',
};
