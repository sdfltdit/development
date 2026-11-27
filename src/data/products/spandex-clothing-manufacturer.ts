import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const spandex: ProductContent = {
  slug: 'spandex-clothing-manufacturer',
  garment: 'spandex',
  quoteCta: 'Get a spandex clothing quote',
  audience: 'Activewear, swimwear, dancewear and womenswear brands that need stretch and recovery',
  glanceHeading: 'Spandex clothing manufacturing at a glance',
  glanceLead: 'Stretch garments live or die on recovery and opacity. These are the points a spandex clothing manufacturer should confirm first.',
  stylesHeading: 'What we make as a spandex clothing manufacturer',
  stylesLead: 'Custom spandex clothing covers sport, swim and fitted everyday pieces. These are the pieces brands order most.',
  styles: [
    { title: 'Leggings and bike shorts', text: 'High-waist styles with gussets and pockets.', href: '/leggings-manufacturer/', cta: 'Leggings manufacturer details' },
    { title: 'Bodysuits and dancewear', text: 'Leotards, unitards and bodysuits.', href: '/dancewear-manufacturer/', cta: 'Dancewear manufacturer details' },
    { title: 'Swimwear', text: 'Swimsuits and bikinis in four-way stretch.', href: '/swimwear-manufacturer/', cta: 'Swimwear manufacturer details' },
    { title: 'Shapewear', text: 'Firm shaping pieces with power stretch.', href: '/shapewear-manufacturer/', cta: 'Shapewear manufacturer details' },
    { title: 'Cotton spandex basics', text: 'Fitted tees, leggings and kidswear.' },
  ],
  blocks: [
    fabricMoqBlock(['knit'], 'spandex clothing', 'Spandex blends are knits. At the minimum we cut from ready stretch fabric. Fabric knitted to your own blend and stretch starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('spandex clothing', [['Light stretch jersey', '150–190 GSM', 'Fitted tops, linings'], ['Mid nylon or polyester spandex', '190–250 GSM', 'Leggings, bodysuits'], ['Heavy compression knit', '250–320 GSM', 'Shapewear, compression'], ['Cotton spandex', '180–260 GSM', 'Everyday leggings, tees']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Elastane fabric',
      heading: 'How we test elastane fabric and four-way stretch',
      lead: 'Stretch fabric needs stretch seams and checked recovery. These are the details we set.',
      items: [
        { label: 'Stretch test', text: 'width and length stretch measured on the swatch' },
        { label: 'Recovery', text: 'checked after stretching against the mill data' },
        { label: 'Opacity', text: 'leggings tested for see-through when stretched' },
        { label: 'Seams', text: 'flatlock, cover stitch and zigzag with stretch thread' },
        { label: 'Elastic', text: 'waistband and leg elastic matched to the fabric' },
        { label: 'Heat', text: 'low pressing heat so elastane does not weaken' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Spandex clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about spandex clothing.',
      items: [
        { label: 'See-through when stretched', text: 'opacity test on the sample' },
        { label: 'Bagging at knees', text: 'elastane content and recovery checked' },
        { label: 'Seams crack', text: 'stretch stitches and thread' },
        { label: 'Waistband rolls', text: 'band height and elastic set on the sample' },
        { label: 'Logos crack', text: 'stretch-tested transfers' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How spandex clothing is priced',
    paragraphs: [
      'Fibre, elastane content and weight move the fabric price. Moulded or lined pieces cost more to sew than simple leggings.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a spandex order runs',
  processLead: 'Six steps from your brief to shipped spandex clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, spandex type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send stretch swatches with stretch and recovery figures.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You wear-test the sample, then we correct fit and finish.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Spandex clothing quality checks',
    lead: 'As a spandex clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, stretch and shade checked on arrival' },
      { label: 'Recovery', text: 'tested on the sample' },
      { label: 'Opacity', text: 'checked when stretched' },
      { label: 'Seams', text: 'stretch tested without cracking' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a spandex clothing quote',
    lead: 'This is enough for a spandex clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Fibre blend and stretch level',
      'Colours and logo artwork',
      'Size range and quantity per style',
      'Any compression or opacity needs',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Spandex and related fabrics',
    paragraphs: [
      'For the fibre behind most premium leggings, see our <a href="/nylon-clothing-manufacturer/">nylon clothing manufacturer</a> page. For vents and panels, see our <a href="/mesh-clothing-manufacturer/">mesh clothing manufacturer</a> page.',
      'Our <a href="/leggings-manufacturer/">leggings manufacturer</a> page covers fits and squat-proof testing.',
    ],
  },
  faqHeading: 'Spandex clothing questions',
};
