import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const acrylic: ProductContent = {
  slug: 'acrylic-clothing-manufacturer',
  garment: 'acrylic',
  quoteCta: 'Get a acrylic clothing quote',
  audience: 'Knitwear, accessories and merch brands making warm pieces at an accessible price',
  glanceHeading: 'Acrylic clothing manufacturing at a glance',
  glanceLead: 'Acrylic knitwear is measured by gauge and yarn count, not GSM alone. These are the points to confirm first.',
  stylesHeading: 'What we make as a acrylic clothing manufacturer',
  stylesLead: 'Acrylic suits warm, easy-care knitwear and accessories. These are the pieces brands order most.',
  styles: [
    { title: 'Acrylic sweaters', text: 'Crew, V-neck and turtleneck styles.', href: '/sweater-manufacturer/', cta: 'Sweater manufacturer details' },
    { title: 'Cardigans and vests', text: 'Button and open cardigans, knitted vests.' },
    { title: 'Acrylic beanies', text: 'Cuffed, slouch and pom-pom beanies.', href: '/hat-manufacturer/', cta: 'Hat manufacturer details' },
    { title: 'Scarves', text: 'Ribbed and jacquard scarves.', href: '/scarf-manufacturer/', cta: 'Scarf manufacturer details' },
    { title: 'Gloves', text: 'Knitted and touchscreen gloves.', href: '/gloves-manufacturer/', cta: 'Gloves manufacturer details' },
  ],
  blocks: [
    fabricMoqBlock(['knit'], 'acrylic clothing', 'Acrylic garments are flat-knitted from yarn. At the minimum we use ready yarn in stock colours or yarn dyed to your shade. Yarn spun or blended to your own spec starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('acrylic clothing', [['Fine gauge (12 to 14)', 'Light, close knit', 'Fine sweaters, layering'], ['Mid gauge (7 to 10)', 'Medium knit', 'Everyday sweaters, beanies'], ['Chunky gauge (3 to 5)', 'Thick, open knit', 'Winter sweaters, scarves']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Acrylic knitwear',
      heading: 'How we knit acrylic knitwear',
      lead: 'Knitwear is shaped on the machine, so gauge and tension decide the result. These are the details we set.',
      items: [
        { label: 'Gauge', text: 'agreed on a knit swatch before sampling' },
        { label: 'Tension', text: 'set so panels keep size across the run' },
        { label: 'Linking', text: 'linked seams on fine gauge for a neat finish' },
        { label: 'Washing', text: 'washed and steamed for a soft hand' },
        { label: 'Pilling', text: 'anti-pill yarn where the garment rubs most' },
        { label: 'Measurements', text: 'checked after washing and steaming' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Acrylic clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about acrylic clothing.',
      items: [
        { label: 'Pilling after wear', text: 'anti-pill yarn and a tighter gauge' },
        { label: 'Sizes vary between pieces', text: 'knitting tension checked across the run' },
        { label: 'Necklines stretch out', text: 'rib tension and linking set on the sample' },
        { label: 'Holes and dropped stitches', text: 'every panel checked before linking' },
        { label: 'Static and shine', text: 'washing and finishing agreed on the sample' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How acrylic clothing is priced',
    paragraphs: [
      'Yarn, gauge and stitch pattern move the price most. A cable sweater takes longer to knit than a plain jersey one.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a acrylic order runs',
  processLead: 'Six steps from your brief to shipped acrylic clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, acrylic type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send knit swatches by yarn, gauge and stitch.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You check hand feel and fit, and we adjust gauge or tension.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Acrylic clothing quality checks',
    lead: 'As a acrylic clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Yarn', text: 'count, colour and blend checked on arrival' },
      { label: 'Panels', text: 'checked for holes and dropped stitches' },
      { label: 'Linking', text: 'seams neat and secure' },
      { label: 'Pilling', text: 'yarn grade checked' },
      { label: 'Measurements', text: 'every point of measure after washing' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a acrylic clothing quote',
    lead: 'This is enough for a acrylic clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Yarn blend and gauge',
      'Colours and stitch pattern',
      'Size range and quantity per style',
      'Label and trim needs',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Acrylic and related yarns',
    paragraphs: [
      'Still weighing acrylic vs wool? Our <a href="/wool-clothing-manufacturer/">wool clothing manufacturer</a> page covers natural fibre knitwear. For knitted accessories, see our <a href="/hat-manufacturer/">hat manufacturer</a> page.',
      'Our <a href="/insights/knitting-defects-explained/">knitted fabric defects guide</a> explains what to check on a knit sample.',
    ],
  },
  faqHeading: 'Acrylic clothing questions',
};
