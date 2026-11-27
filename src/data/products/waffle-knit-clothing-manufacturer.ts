import type { ProductContent } from './types';
import { fabricMoqBlock, weightBlock } from './fabric-moq';

export const waffleKnit: ProductContent = {
  slug: 'waffle-knit-clothing-manufacturer',
  garment: 'waffleknit',
  quoteCta: 'Get a waffle knit clothing quote',
  audience: 'Loungewear, sleepwear, menswear and outdoor brands using textured knits',
  glanceHeading: 'Waffle knit clothing manufacturing at a glance',
  glanceLead: 'Waffle knit varies in cell size, weight and shrinkage. These are the points a waffle knit clothing manufacturer should confirm first.',
  stylesHeading: 'What we make as a waffle knit clothing manufacturer',
  stylesLead: 'Custom waffle clothing suits relaxed and layering pieces. These are the pieces brands order most.',
  styles: [
    { title: 'Waffle knit lounge sets', text: 'Tops with shorts or pants from one fabric lot.', href: '/loungewear-manufacturer/', cta: 'Loungewear manufacturer details' },
    { title: 'Waffle henley tops', text: 'Button plackets, rib cuffs and relaxed fits.' },
    { title: 'Thermal tops and leggings', text: 'Close-fitting layers for cold weather.', href: '/base-layer-manufacturer/', cta: 'Base layer manufacturer details' },
    { title: 'Robes', text: 'Light waffle robes for home and spa.', href: '/bathrobe-manufacturer/', cta: 'Bathrobe manufacturer details' },
    { title: 'Shorts and pants', text: 'Drawcord shorts and pants for sleep and lounge.' },
  ],
  blocks: [
    fabricMoqBlock(['knit'], 'waffle knit clothing', 'Waffle is a knit. At the minimum we cut from ready waffle fabric. Waffle knitted to your own cell size and weight starts at {{customFabricFrom}} pieces per style.'),
    weightBlock('waffle knit clothing', [['Light waffle', '160–200 GSM', 'Summer tops, layering'], ['Mid waffle', '200–260 GSM', 'Henleys, lounge sets'], ['Heavy waffle', '260–320 GSM', 'Thermals, robes, winter sets']]),
    {
      kind: 'checklist',
      id: 'production',
      eyebrow: 'Waffle texture',
      heading: 'How we keep thermal waffle in shape',
      lead: 'Waffle stretches and shrinks more than flat knits. These are the details we set.',
      items: [
        { label: 'Wash test', text: 'every lot washed and measured before cutting' },
        { label: 'Pattern allowance', text: 'shrinkage built into the pattern' },
        { label: 'Cutting', text: 'cut on grain so the grid runs straight' },
        { label: 'Seams', text: 'overlock and flatlock that do not crush the texture' },
        { label: 'Plackets', text: 'interfaced so buttons sit flat on a henley' },
        { label: 'Pressing', text: 'light steam only, so the cells stay raised' },
      ],
    },
    {
      kind: 'checklist',
      id: 'risks',
      eyebrow: 'Buyer risks',
      heading: 'Waffle knit clothing problems buyers meet, and how we prevent them',
      lead: 'These are the complaints shoppers make most about waffle knit clothing.',
      items: [
        { label: 'Shrinks after washing', text: 'wash test and allowance on every lot' },
        { label: 'Grid runs crooked', text: 'cutting on grain and checking the marker' },
        { label: 'Texture flattens', text: 'light pressing and gentle finishing' },
        { label: 'Plackets pucker', text: 'interfacing and stitch tension set on the sample' },
        { label: 'Set pieces do not match', text: 'one fabric lot for each set' },
        { label: 'Costly sample rounds', text: 'up to {{sampleCorrections}} rounds of corrections are free' },
      ],
    },
  ],
  noPrice: {
    heading: 'How waffle knit clothing is priced',
    paragraphs: [
      'Weight, fibre and trims move the price most. A henley costs more than a crew top because of the placket and buttons.',
      'You get a written quote within {{quoteHours}} hours. See our <a href="/pricing/">clothing manufacturing prices</a> page for prices at {{moq}} and {{bulkQty}} pieces.',
    ],
  },
  processHeading: 'How a waffle order runs',
  processLead: 'Six steps from your brief to shipped waffle knit clothing.',
  steps: [
    { title: 'Brief', text: 'Send the style, waffle type, colours and quantity. A written quote follows within {{quoteHours}} hours.' },
    { title: 'Fabric', text: 'We send waffle swatches by cell size and weight.' },
    { title: 'Proto sample', text: 'Pattern made and sample sewn in {{sampleDays}} days.' },
    { title: 'Your comments', text: 'You wash and wear the sample, then we correct fit and texture.' },
    { title: 'Bulk', text: '{{bulkDays}} days of production after sign-off.' },
    { title: 'Inspection', text: 'AQL {{aql}} final inspection, then packing and shipment.' },
  ],
  quality: {
    heading: 'Waffle knit clothing quality checks',
    lead: 'As a waffle knit clothing manufacturer, we run these checks on every order before it ships.',
    items: [
      { label: 'Fabric', text: 'weight, shade and texture checked on arrival' },
      { label: 'Shrinkage', text: 'wash test on every lot' },
      { label: 'Seams', text: 'flat and stretch tested' },
      { label: 'Plackets', text: 'button spacing and finish checked' },
      { label: 'Measurements', text: 'every point of measure on the sample' },
      { label: 'Final audit', text: 'AQL {{aql}} on packed goods' },
    ],
  },
  quote: {
    heading: 'What to send for a waffle knit clothing quote',
    lead: 'This is enough for a waffle knit clothing manufacturer to quote and plan your first sample.',
    items: [
      'A photo, sketch or tech pack',
      'Cell size and weight, or the feel you want',
      'Colours and trims',
      'Size range and quantity per style',
      'Whether pieces sell as a set',
      'Target price and delivery date',
    ],
  },
  first: {
    heading: 'Waffle and related knits',
    paragraphs: [
      'For fine fitted ribs, see our <a href="/rib-knit-clothing-manufacturer/">rib knit clothing manufacturer</a> page. For close layers, see our <a href="/base-layer-manufacturer/">base layer manufacturer</a> page.',
      'Our <a href="/tools/shrinkage-calculator/">fabric shrinkage calculator</a> checks a wash test in seconds.',
    ],
  },
  faqHeading: 'Waffle knit clothing questions',
};
