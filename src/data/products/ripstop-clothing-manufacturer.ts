import type { ProductContent } from './types';
import { fabricMoqBlock } from './fabric-moq';

export const ripstop: ProductContent = {
  slug: 'ripstop-clothing-manufacturer',
  garment: 'ripstop',
  quoteCta: 'Get a ripstop clothing quote',
  audience: 'Outdoor, streetwear and workwear brands that need tough, tear-resistant woven fabric',
  glanceHeading: 'Ripstop clothing manufacturing at a glance',
  glanceLead: 'Ripstop changes a lot with fibre, weight and finish. These are the points a ripstop clothing manufacturer should confirm first.',
  stylesHeading: 'What we make as a ripstop clothing manufacturer',
  stylesLead: 'Ripstop suits garments that take wear. These are the pieces brands order most.',
  styles: [
    { title: 'Ripstop cargo pants', text: 'Bellows pockets, adjustable hems and bar-tacked stress points.', href: '/pants-trousers-manufacturer/', cta: 'Pants manufacturer details' },
    { title: 'Cargo shorts', text: 'Utility shorts in cotton or cotton-nylon ripstop.', href: '/shorts-manufacturer/', cta: 'Shorts manufacturer details' },
    { title: 'Field jackets and overshirts', text: 'Four-pocket jackets and shirt jackets.', href: '/jacket-manufacturer/', cta: 'Jacket manufacturer details' },
    { title: 'Windbreakers', text: 'Light shells in nylon ripstop.' },
    { title: 'Workwear', text: 'Work trousers, coveralls and uniform pieces.', href: '/uniform-manufacturer/', cta: 'Uniform manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(
      ['woven'],
      'ripstop clothing',
      'Ripstop is woven, so the woven colour minimum applies. At the minimum we cut from ready ripstop. Ripstop woven to your own grid, fibre and weight starts at {{customFabricFrom}} pieces per style.',
    ),
    {
      kind: 'table',
      id: 'fabrics',
      eyebrow: 'Ripstop fabric',
      heading: 'Nylon ripstop, cotton ripstop and blends',
      lead: 'Ripstop fabric comes in several fibres. This is how they compare.',
      caption: 'Ripstop fabrics compared',
      columns: ['Fabric', 'How it wears', 'Good for'],
      rows: [
        ['Cotton ripstop', 'Soft, breathable, fades with washing', 'Cargo pants, shorts, overshirts'],
        ['Cotton-nylon ripstop', 'Stronger, still soft', 'Field jackets, workwear'],
        ['Nylon ripstop', 'Light, strong, smooth', 'Windbreakers, shells, bags'],
        ['Polyester ripstop', 'Holds colour, dries fast', 'Outdoor layers, uniform pieces'],
      ],
    },
    {
      kind: 'checklist',
      id: 'construction',
      eyebrow: 'Construction',
      heading: 'How we build ripstop cargo pants and jackets',
      lead: 'Strong fabric needs strong sewing to match. These are the details we set.',
      items: [
        { label: 'Seams', text: 'flat-felled or twin-needle seams on load-bearing lines' },
        { label: 'Bar-tacks', text: 'at pocket corners, belt loops and fly ends' },
        { label: 'Thread', text: 'core-spun thread sized to the fabric weight' },
        { label: 'Pockets', text: 'bellows pockets with flaps, snaps or hook-and-loop' },
        { label: 'Hardware', text: 'zips, snaps and cord locks matched to use' },
        { label: 'Finishes', text: 'garment wash or water-repellent finish as agreed' },
      ],
    },
  ],
  noPrice: {
    heading: 'How ripstop clothing is priced',
    paragraphs: [
      'Fibre and weight move the fabric price, while pockets, hardware and bar-tacks move the sewing cost. A six-pocket cargo pant costs more than a plain trouser.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a ripstop order runs',
  processLead: 'Six steps from your brief to shipped ripstop clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, fabric, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send ripstop swatches by fibre, weight and finish.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check fit, pockets and hardware, and we correct the sample.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Ripstop quality checks',
    lead: 'Every ripstop clothing order passes these checks before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, shade and grid checked on arrival' },
      { label: 'Seams', text: 'strength and straightness checked' },
      { label: 'Bar-tacks', text: 'present at every stress point' },
      { label: 'Hardware', text: 'zips and snaps tested for function' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a ripstop clothing quote',
    lead: 'This is enough to quote and plan a first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Fibre, weight and finish you want',
      'Colours and any logo artwork',
      'Size range and quantity per style',
      'Any tear or water-repellent claims you plan to make',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Ripstop and related fabrics',
    paragraphs: [
      'Nylon ripstop is one of many nylon fabrics on our <a href="/nylon-clothing-manufacturer/">nylon clothing manufacturer</a> page. For fully waterproof pieces with taped seams, see our <a href="/rain-jacket-manufacturer/">rain jacket manufacturer</a> page.',
      'Workwear brands can also see our <a href="/coverall-manufacturer/">coverall manufacturer</a> page.',
    ],
  },
  faqHeading: 'Ripstop clothing questions',
};
