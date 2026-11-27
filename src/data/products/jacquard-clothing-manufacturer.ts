import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const jacquard: ProductContent = {
  slug: 'jacquard-clothing-manufacturer',
  garment: 'jacquard',
  quoteCta: 'Get a jacquard clothing quote',
  audience: 'Fashion, occasion, menswear and knitwear brands that want pattern built into the fabric',
  glanceHeading: 'Jacquard clothing manufacturing at a glance',
  glanceLead: 'Jacquard patterns need careful placement and matching. These are the points a jacquard clothing manufacturer should confirm first.',
  stylesHeading: 'What we make as a jacquard clothing manufacturer',
  stylesLead: 'Custom jacquard clothing turns a pattern into a statement piece. These are the pieces brands order most.',
  styles: [
    { title: 'Dobby fabric shirts', text: 'Shirts with small woven textures.', href: '/shirt-manufacturer/', cta: 'Shirt manufacturer details' },
    { title: 'Jacquard dresses and skirts', text: 'Structured dresses and A-line skirts.', href: '/dress-manufacturer/', cta: 'Dress manufacturer details' },
    { title: 'Jackets and waistcoats', text: 'Tailored and cropped jackets.', href: '/blazer-manufacturer/', cta: 'Blazer manufacturer details' },
    { title: 'Jacquard knit sweaters', text: 'Fair Isle-style and logo knits.', href: '/sweater-manufacturer/', cta: 'Sweater manufacturer details' },
    { title: 'Scarves', text: 'Woven and knitted jacquard scarves.', href: '/scarf-manufacturer/', cta: 'Scarf manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['woven', 'knit'], 'jacquard clothing', 'Jacquard comes woven or knitted, with the same minimums for both. At the minimum we use ready jacquard patterns. A pattern woven or knitted to your design starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('jacquard clothing', [['Dobby shirting', '110–160 GSM', 'Shirts, blouses'], ['Woven jacquard', '180–320 GSM', 'Dresses, skirts, jackets'], ['Double knit jacquard', '250–350 GSM', 'Dresses, structured tops'], ['Jacquard knitwear', 'By gauge', 'Sweaters, scarves']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Jacquard fabric',
      heading: 'How we place and match jacquard fabric',
      lead: 'A jacquard motif must sit in the right place on every piece. These are the details we set.',
      items: [
        { label: 'Motif placement', text: 'agreed on the sample and marked on the pattern' },
        { label: 'Matching', text: 'motifs matched at fronts, pockets and key seams' },
        { label: 'Cutting', text: 'single-ply cutting where motifs must line up' },
        { label: 'Floats', text: 'long floats on the back checked so they do not snag' },
        { label: 'Linings', text: 'lined where floats could catch' },
        { label: 'Pressing', text: 'low heat so raised patterns stay crisp' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Jacquard clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about jacquard clothing.',
      items: [
        { label: 'Motifs off-centre', text: 'placement marked on the pattern and checked' },
        { label: 'Patterns do not match at seams', text: 'matching on the marker and sample' },
        { label: 'Floats snag', text: 'lining or a fused backing where needed' },
        { label: 'Shade differs between panels', text: 'panels cut from one roll' },
        { label: 'Raised pattern flattened', text: 'low-heat pressing' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How jacquard clothing is priced',
    paragraphs: [
      'Pattern size, matching and fibre move the price most. A matched, lined jacquard jacket costs far more than a dobby shirt.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a jacquard order runs',
  processLead: 'Six steps from your brief to shipped jacquard clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, jacquard type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send jacquard swatches and pattern repeats.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check motif placement and fit, and we correct the sample.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Jacquard clothing quality checks',
    lead: 'As a jacquard clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'pattern, shade and faults checked on arrival' },
      { label: 'Placement', text: 'motifs placed as approved' },
      { label: 'Matching', text: 'checked at key seams' },
      { label: 'Floats', text: 'secure and not snagging' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a jacquard clothing quote',
    lead: 'This is enough for a jacquard clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Woven or knitted jacquard, and pattern',
      'Colours and motif placement',
      'Size range and quantity per style',
      'Lining needs',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Jacquard and related fabrics',
    paragraphs: [
      'For rich pile fabrics, see our <a href="/velvet-clothing-manufacturer/">velvet clothing manufacturer</a> page. For textured wool weaves, see our <a href="/tweed-clothing-manufacturer/">tweed clothing manufacturer</a> page.',
      'Our <a href="/sweater-manufacturer/">sweater manufacturer</a> page covers jacquard knitwear in detail.',
    ],
  },
  faqHeading: 'Jacquard clothing questions',
};
