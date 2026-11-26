/**
 * Infographic generator. Each infographic is built from company.ts facts at build time,
 * in the site's black and red palette, and served as /images/infographics/<name>-dark.svg.
 * Changing a fact in company.ts updates the images on the next build.
 */
import { capabilities, shipping as shippingData, terms } from '../data/company';
import { garments, type GarmentKey, type GarmentSketch } from './garments';

export type Theme = 'dark';
type BaseName = 'hero' | 'process' | 'quality' | 'shipping' | 'inhouse' | 'tshirt' | 'gsm';
export type InfographicName = BaseName | `garment-${GarmentKey}`;

interface Palette {
  bg1: string;
  bg2: string;
  card: string;
  line: string;
  text: string;
  muted: string;
  accent: string;
  accentDeep: string;
  accentSoft: string;
  garment: string;
  cream: string;
  slate: string;
  blobA: string;
  blobB: string;
  tape: string;
  tapeTick: string;
  onAccent: string;
  onGarment: string;
  success: string;
}

const palettes: Record<Theme, Palette> = {
  dark: {
    bg1: '#0a0a0a',
    bg2: '#000000',
    card: '#111111',
    line: '#2a2a2a',
    text: '#ffffff',
    muted: '#a3a3a3',
    accent: '#e00000',
    accentDeep: '#990000',
    accentSoft: '#2a0606',
    garment: '#d9d9d9',
    cream: '#bdbdbd',
    slate: '#737373',
    blobA: '#1a0505',
    blobB: '#141414',
    tape: '#8c8c8c',
    tapeTick: '#1a1a1a',
    onAccent: '#ffffff',
    onGarment: '#000000',
    success: '#ff3333',
  },
};

const FONT = "Inter, 'Segoe UI', Roboto, Arial, sans-serif";

const esc = (value: string): string => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function frame(width: number, height: number, title: string, desc: string, p: Palette, body: string): string {
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="t d">`,
    `<title id="t">${esc(title)}</title>`,
    `<desc id="d">${esc(desc)}</desc>`,
    '<defs>',
    `<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p.bg1}"/><stop offset="1" stop-color="${p.bg2}"/></linearGradient>`,
    '</defs>',
    `<rect width="${width}" height="${height}" rx="28" fill="url(#bg)"/>`,
    body,
    '</svg>',
  ].join('');
}

function text(x: number, y: number, content: string, size: number, fill: string, weight = 400, anchor = 'start'): string {
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(content)}</text>`;
}

function hero(p: Palette): string {
  const body = [
    `<circle cx="520" cy="96" r="120" fill="${p.blobA}" opacity="0.7"/>`,
    `<circle cx="96" cy="420" r="90" fill="${p.blobB}" opacity="0.8"/>`,
    '<g transform="translate(70 92) rotate(-8)">',
    `<rect x="0" y="0" width="120" height="150" rx="10" fill="${p.garment}"/>`,
    `<rect x="22" y="0" width="120" height="150" rx="10" fill="${p.accent}"/>`,
    `<rect x="44" y="0" width="120" height="150" rx="10" fill="${p.cream}" stroke="${p.line}" stroke-width="2"/>`,
    `<line x1="64" y1="40" x2="144" y2="40" stroke="${p.line}" stroke-width="2"/>`,
    `<line x1="64" y1="120" x2="144" y2="120" stroke="${p.line}" stroke-width="2"/>`,
    '</g>',
    '<g transform="translate(150 250)">',
    `<path d="M40 0 L80 -18 L120 0 L150 30 L130 52 L118 42 L118 140 L42 140 L42 42 L30 52 L10 30 Z" fill="${p.garment}"/>`,
    `<path d="M62 -10 Q80 14 98 -10" fill="none" stroke="${p.onGarment}" stroke-width="5" stroke-linecap="round"/>`,
    `<rect x="70" y="58" width="20" height="10" rx="2" fill="${p.accent}"/>`,
    '</g>',
    '<g transform="translate(300 70)">',
    `<path d="M70 0 C40 0 20 26 20 58 L20 74 L0 104 L18 118 L32 98 L32 250 L148 250 L148 98 L162 118 L180 104 L160 74 L160 58 C160 26 140 0 110 0 Q90 24 70 0 Z" fill="${p.accent}"/>`,
    `<path d="M70 0 Q90 40 110 0" fill="${p.accentDeep}"/>`,
    `<path d="M52 180 L128 180 L120 228 L60 228 Z" fill="${p.accentDeep}" opacity="0.8"/>`,
    `<line x1="82" y1="40" x2="78" y2="86" stroke="${p.onGarment}" stroke-width="3" stroke-linecap="round"/>`,
    `<line x1="98" y1="40" x2="102" y2="86" stroke="${p.onGarment}" stroke-width="3" stroke-linecap="round"/>`,
    `<rect x="32" y="236" width="116" height="14" fill="${p.accentDeep}"/>`,
    '</g>',
    '<g transform="translate(470 230)">',
    `<rect x="0" y="0" width="70" height="100" rx="8" fill="${p.cream}" stroke="${p.line}" stroke-width="2" transform="rotate(-18 35 50)"/>`,
    `<rect x="18" y="4" width="70" height="100" rx="8" fill="${p.slate}" transform="rotate(-6 53 54)"/>`,
    `<rect x="36" y="8" width="70" height="100" rx="8" fill="${p.garment}" transform="rotate(6 71 58)"/>`,
    `<rect x="54" y="12" width="70" height="100" rx="8" fill="${p.accent}" transform="rotate(18 89 62)"/>`,
    '</g>',
    '<g transform="translate(520 120)">',
    `<rect x="0" y="0" width="56" height="12" rx="4" fill="${p.accentDeep}"/>`,
    `<rect x="6" y="12" width="44" height="64" fill="${p.accent}"/>`,
    `<line x1="6" y1="28" x2="50" y2="28" stroke="${p.accentSoft}" stroke-width="2"/>`,
    `<line x1="6" y1="44" x2="50" y2="44" stroke="${p.accentSoft}" stroke-width="2"/>`,
    `<line x1="6" y1="60" x2="50" y2="60" stroke="${p.accentSoft}" stroke-width="2"/>`,
    `<rect x="0" y="76" width="56" height="12" rx="4" fill="${p.accentDeep}"/>`,
    `<path d="M50 40 C90 60 70 110 30 120" fill="none" stroke="${p.accent}" stroke-width="2"/>`,
    '</g>',
    '<g transform="translate(60 410)">',
    `<path d="M0 0 C140 -30 360 -30 520 0" fill="none" stroke="${p.tape}" stroke-width="18" stroke-linecap="round"/>`,
    `<g stroke="${p.tapeTick}" stroke-width="2">`,
    ...[40, 90, 140, 190, 240, 290, 340, 390, 440, 490].map((x) => {
      const y = -4 - Math.round(24 * Math.sin((Math.PI * x) / 520));
      return `<line x1="${x}" y1="${y - 10}" x2="${x}" y2="${y}"/>`;
    }),
    '</g>',
    '</g>',
    '<g transform="translate(250 30) rotate(4)">',
    `<rect x="0" y="0" width="96" height="40" rx="4" fill="${p.card}" stroke="${p.garment}" stroke-width="2"/>`,
    `<rect x="6" y="6" width="84" height="28" rx="2" fill="${p.garment}"/>`,
    text(48, 26, 'SDF', 15, p.onGarment, 700, 'middle'),
    '</g>',
  ].join('');
  return frame(
    640,
    480,
    'Illustration of custom knitwear production',
    'Folded custom T-shirts in three colours, a hoodie, fabric swatches, a thread spool, a tape measure and a woven SDF label.',
    p,
    body,
  );
}

const processSteps = (): { title: string; time: string }[] => [
  { title: 'Send your tech pack', time: `Quote within ${terms.quoteHours} hours` },
  { title: 'Fabric and lab dip', time: 'You approve the colour' },
  { title: 'Sample development', time: `${terms.sampleDays} days` },
  { title: 'Pre-production sample', time: 'You sign it off' },
  { title: 'Bulk production', time: `${terms.bulkDays} days` },
  { title: 'Final inspection', time: `AQL ${terms.aql}` },
  { title: 'Shipment', time: `${terms.incoterm} ${terms.port}` },
];

function process(p: Palette): string {
  const steps = processSteps();
  const top = 120;
  const gap = 96;
  const rows = steps
    .map((step, i) => {
      const y = top + i * gap;
      const highlight = i === 2 || i === 4;
      return [
        `<circle cx="96" cy="${y}" r="26" fill="${highlight ? p.accent : p.garment}"/>`,
        text(96, y + 9, String(i + 1), 24, highlight ? p.onAccent : p.onGarment, 700, 'middle'),
        `<rect x="150" y="${y - 34}" width="530" height="68" rx="14" fill="${p.card}" stroke="${p.line}" stroke-width="2"/>`,
        text(176, y + 8, step.title, 24, p.text, 600),
        text(656, y + 8, step.time, 22, highlight ? p.accent : p.muted, 600, 'end'),
      ].join('');
    })
    .join('');
  const body = [
    text(56, 64, 'From brief to shipment', 32, p.text, 700),
    `<line x1="96" y1="${top}" x2="96" y2="${top + gap * (steps.length - 1)}" stroke="${p.line}" stroke-width="4"/>`,
    rows,
  ].join('');
  const height = top + gap * (steps.length - 1) + 70;
  return frame(
    720,
    height,
    'Clothing production timeline at SDF Clothing',
    steps.map((s, i) => `${i + 1}. ${s.title}: ${s.time}`).join('. '),
    p,
    body,
  );
}

const qualityChecks = (): string[] => [
  'Lab dip approved before dyeing',
  'Bulk fabric tested before cutting',
  'Pre-production sample signed off',
  'Inline checks during sewing',
  `Final AQL ${terms.aql} inspection`,
  'Your own inspector welcome',
];

function quality(p: Palette): string {
  const checks = qualityChecks();
  const top = 170;
  const gap = 82;
  const rows = checks
    .map((label, i) => {
      const y = top + i * gap;
      const width = 600 - i * 34;
      const x = (720 - width) / 2;
      return [
        `<rect x="${x}" y="${y - 30}" width="${width}" height="60" rx="30" fill="${i === checks.length - 1 ? p.accent : p.card}" stroke="${p.line}" stroke-width="2"/>`,
        `<circle cx="${x + 34}" cy="${y}" r="16" fill="${i === checks.length - 1 ? p.onAccent : p.success}"/>`,
        `<path d="M${x + 26} ${y} l6 6 l11 -12" fill="none" stroke="${i === checks.length - 1 ? p.accent : p.card}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`,
        text(x + 62, y + 8, label, 22, i === checks.length - 1 ? p.onAccent : p.text, 600),
      ].join('');
    })
    .join('');
  const body = [
    text(360, 60, 'Six checks between', 30, p.text, 700, 'middle'),
    text(360, 96, 'your sample and your shipment', 30, p.text, 700, 'middle'),
    rows,
  ].join('');
  return frame(720, top + gap * (checks.length - 1) + 64, 'Quality control checks at SDF Clothing', checks.join('. '), p, body);
}

function shipping(p: Palette): string {
  const dest = shippingData.regions.map((r, i) => ({ name: r.name, x: 520, y: 70 + i * 76 }));
  const routes = dest
    .map((d) => `<path d="M314 230 C400 230 420 ${d.y} 500 ${d.y}" fill="none" stroke="${p.accent}" stroke-width="3" stroke-dasharray="8 8"/>`)
    .join('');
  const pins = dest
    .map((d) =>
      [
        `<circle cx="${d.x}" cy="${d.y}" r="12" fill="${p.accent}"/>`,
        `<rect x="${d.x + 22}" y="${d.y - 24}" width="160" height="48" rx="12" fill="${p.card}" stroke="${p.line}" stroke-width="2"/>`,
        text(d.x + 102, d.y + 7, d.name, 18, p.text, 600, 'middle'),
      ].join(''),
    )
    .join('');
  const body = [
    routes,
    `<line x1="120" y1="230" x2="250" y2="230" stroke="${p.garment}" stroke-width="4"/>`,
    `<rect x="40" y="186" width="96" height="88" rx="14" fill="${p.garment}"/>`,
    `<path d="M56 258 L56 222 L76 208 L76 222 L96 208 L96 222 L116 208 L116 258 Z" fill="${p.onGarment}"/>`,
    text(88, 304, 'Factory, Dhaka', 18, p.text, 600, 'middle'),
    `<circle cx="276" cy="230" r="34" fill="${p.accent}"/>`,
    `<path d="M256 236 L296 236 L288 248 L264 248 Z M270 236 L270 214 L284 222 L270 222" fill="${p.onAccent}"/>`,
    text(276, 300, `${terms.incoterm} ${terms.port}`, 18, p.text, 600, 'middle'),
    pins,
    text(40, 420, 'Your forwarder handles freight and import clearance', 18, p.muted, 400),
  ].join('');
  return frame(
    720,
    450,
    'Shipping route from SDF Clothing to buyers',
    `Goods are made in Dhaka and shipped ${terms.incoterm} ${terms.port} to buyers worldwide: ${shippingData.regions.map((r) => r.name).join(', ')}. Your forwarder handles freight and import clearance.`,
    p,
    body,
  );
}

function wrap(label: string, max: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of label.split(' ')) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

const INHOUSE_COLS = 3;
const INHOUSE_TILE = { w: 200, h: 118, gap: 20, top: 118, left: 30 };

function inhouseHeight(): number {
  const rows = Math.ceil(capabilities.inHouse.length / INHOUSE_COLS);
  return INHOUSE_TILE.top + rows * (INHOUSE_TILE.h + INHOUSE_TILE.gap) + 20;
}

function inhouse(p: Palette): string {
  const t = INHOUSE_TILE;
  const tiles = capabilities.inHouse
    .map((label, i) => {
      const col = i % INHOUSE_COLS;
      const row = Math.floor(i / INHOUSE_COLS);
      const x = t.left + col * (t.w + t.gap);
      const y = t.top + row * (t.h + t.gap);
      const lines = wrap(label, 16);
      const highlight = label.toLowerCase().includes('print') || label.toLowerCase().includes('embroidery');
      return [
        `<rect x="${x}" y="${y}" width="${t.w}" height="${t.h}" rx="16" fill="${p.card}" stroke="${highlight ? p.accent : p.line}" stroke-width="2"/>`,
        `<circle cx="${x + 30}" cy="${y + 32}" r="16" fill="${highlight ? p.accent : p.garment}"/>`,
        text(x + 30, y + 38, String(i + 1), 16, highlight ? p.onAccent : p.onGarment, 700, 'middle'),
        ...lines.map((ln, li) => text(x + 18, y + 76 + li * 24, ln, 19, p.text, 600)),
      ].join('');
    })
    .join('');
  const body = [text(30, 58, 'Made under one roof in Dhaka', 30, p.text, 700), text(30, 92, 'No subcontractors, from pattern to packing', 19, p.muted, 400), tiles].join('');
  return frame(720, inhouseHeight(), 'Production steps done in-house at SDF Clothing', capabilities.inHouse.join(', '), p, body);
}

const TSHIRT_CALLOUTS: { label: string; tx: number; ty: number; px: number; py: number; side: 'left' | 'right' }[] = [
  { label: 'Neck label', tx: 205, ty: 96, px: 300, py: 110, side: 'left' },
  { label: 'Shoulder tape', tx: 205, ty: 160, px: 244, py: 122, side: 'left' },
  { label: 'Double-needle hem', tx: 205, ty: 404, px: 234, py: 400, side: 'left' },
  { label: '1×1 rib collar', tx: 480, ty: 96, px: 360, py: 108, side: 'right' },
  { label: 'Print area', tx: 480, ty: 220, px: 362, py: 215, side: 'right' },
  { label: 'Side seam', tx: 480, ty: 330, px: 408, py: 330, side: 'right' },
];

function tshirt(p: Palette): string {
  const shirt = 'M272 100 Q320 132 368 100 L420 118 L470 180 L442 212 L408 188 L408 410 L232 410 L232 188 L198 212 L170 180 L220 118 Z';
  const callouts = TSHIRT_CALLOUTS.map((c) =>
    [
      `<line x1="${c.side === 'left' ? c.tx + 8 : c.tx - 8}" y1="${c.ty - 6}" x2="${c.px}" y2="${c.py}" stroke="${p.muted}" stroke-width="1.5"/>`,
      `<circle cx="${c.px}" cy="${c.py}" r="5" fill="${p.accent}"/>`,
      text(c.tx, c.ty, c.label, 18, p.text, 600, c.side === 'left' ? 'end' : 'start'),
    ].join(''),
  ).join('');
  const body = [
    text(30, 48, 'Parts of a custom T-shirt', 26, p.text, 700),
    `<path d="${shirt}" fill="${p.card}" stroke="${p.garment}" stroke-width="3" stroke-linejoin="round"/>`,
    `<path d="M272 100 Q320 132 368 100" fill="none" stroke="${p.accent}" stroke-width="8" stroke-linecap="round"/>`,
    `<rect x="300" y="108" width="40" height="14" rx="2" fill="${p.garment}"/>`,
    `<rect x="280" y="168" width="82" height="96" rx="4" fill="none" stroke="${p.accent}" stroke-width="2" stroke-dasharray="7 6"/>`,
    `<line x1="234" y1="394" x2="406" y2="394" stroke="${p.muted}" stroke-width="1.5" stroke-dasharray="5 5"/>`,
    `<line x1="234" y1="400" x2="406" y2="400" stroke="${p.muted}" stroke-width="1.5" stroke-dasharray="5 5"/>`,
    `<line x1="244" y1="122" x2="396" y2="122" stroke="${p.muted}" stroke-width="1.5" stroke-dasharray="3 5"/>`,
    callouts,
  ].join('');
  return frame(640, 470, 'Parts of a custom T-shirt', `Labelled T-shirt showing ${TSHIRT_CALLOUTS.map((c) => c.label.toLowerCase()).join(', ')}.`, p, body);
}

const GSM_BANDS = [
  { name: 'Lightweight', range: '140–160 GSM', use: ['Summer tees,', 'layering'] },
  { name: 'Midweight', range: '160–200 GSM', use: ['Everyday', 'basics, merch'] },
  { name: 'Heavyweight', range: '200–240 GSM', use: ['Structured,', 'premium feel'] },
  { name: 'Extra heavy', range: '240–260 GSM', use: ['Oversized,', 'streetwear'] },
];

function gsm(p: Palette): string {
  const colW = 155;
  const gap = 12;
  const base = 250;
  const cols = GSM_BANDS.map((band, i) => {
    const x = 30 + i * (colW + gap);
    const h = 50 + i * 34;
    const fill = i === GSM_BANDS.length - 1 ? p.accent : i === 2 ? p.accentDeep : i === 1 ? p.slate : p.line;
    return [
      `<rect x="${x}" y="${base - h}" width="${colW}" height="${h}" rx="10" fill="${fill}"/>`,
      text(x, base + 34, band.name, 19, p.text, 700),
      text(x, base + 60, band.range, 17, p.accent === fill ? p.text : p.muted, 600),
      ...band.use.map((line, li) => text(x, base + 88 + li * 22, line, 16, p.muted, 400)),
    ].join('');
  }).join('');
  const body = [text(30, 48, 'T-shirt fabric weight guide', 26, p.text, 700), text(30, 78, 'Heavier fabric feels thicker and holds its shape', 17, p.muted, 400), cols].join('');
  return frame(690, 390, 'T-shirt fabric weight guide in GSM', GSM_BANDS.map((b) => `${b.name} ${b.range} for ${b.use.join(' ').replace(',', '')}`).join('. '), p, body);
}

function garment(g: GarmentSketch, p: Palette): string {
  const callouts = g.callouts
    .map((c) =>
      [
        `<line x1="${c.side === 'left' ? c.tx + 8 : c.tx - 8}" y1="${c.ty - 6}" x2="${c.px}" y2="${c.py}" stroke="${p.muted}" stroke-width="1.5"/>`,
        `<circle cx="${c.px}" cy="${c.py}" r="5" fill="${p.accent}"/>`,
        text(c.tx, c.ty, c.label, 18, p.text, 600, c.side === 'left' ? 'end' : 'start'),
      ].join(''),
    )
    .join('');
  const body = [
    text(30, 40, g.title, 26, p.text, 700),
    `<path d="${g.outline}" fill="${p.card}" stroke="${p.garment}" stroke-width="3" stroke-linejoin="round"/>`,
    ...g.details.map((d) => `<path d="${d}" fill="none" stroke="${p.garment}" stroke-width="2" stroke-linejoin="round"/>`),
    ...(g.dashed ?? []).map((d) => `<path d="${d}" fill="none" stroke="${p.accent}" stroke-width="2" stroke-dasharray="6 5"/>`),
    callouts,
  ].join('');
  return frame(640, 440, g.title, `Labelled ${g.noun} showing ${g.callouts.map((c) => c.label.toLowerCase()).join(', ')}.`, p, body);
}

const garmentKeys = Object.keys(garments) as GarmentKey[];

const builders = {
  hero,
  process,
  quality,
  shipping,
  inhouse,
  tshirt,
  gsm,
  ...Object.fromEntries(garmentKeys.map((key) => [`garment-${key}`, (p: Palette) => garment(garments[key], p)])),
} as Record<InfographicName, (p: Palette) => string>;

export function renderInfographic(name: InfographicName, theme: Theme): string {
  return builders[name](palettes[theme]);
}

const baseMeta: Record<BaseName, { width: number; height: number; alt: () => string }> = {
  hero: {
    width: 640,
    height: 480,
    alt: () => 'Illustration of custom clothing: a T-shirt, a hoodie, fabric swatches, a thread spool and a woven brand label',
  },
  process: {
    width: 720,
    height: 120 + 96 * 6 + 70,
    alt: () =>
      `Order timeline in seven steps, from tech pack and quote to a sample in ${terms.sampleDays} days, bulk in ${terms.bulkDays} days and shipment`,
  },
  quality: {
    width: 720,
    height: 170 + 82 * 5 + 64,
    alt: () => `Six quality checks, from lab dip and fabric testing to inline checks and a final AQL ${terms.aql} inspection`,
  },
  inhouse: {
    width: 720,
    height: inhouseHeight(),
    alt: () => `Production steps done in our own factory, from pattern making and cutting to sewing, printing, embroidery and packing`,
  },
  tshirt: {
    width: 640,
    height: 470,
    alt: () => `T-shirt manufacturing details: ${TSHIRT_CALLOUTS.map((c) => c.label.toLowerCase()).join(', ')}`,
  },
  gsm: {
    width: 690,
    height: 390,
    alt: () => `Fabric weight scale for T-shirts, from ${GSM_BANDS[0].range} lightweight jersey to ${GSM_BANDS[GSM_BANDS.length - 1].range} heavy cotton`,
  },
  shipping: {
    width: 720,
    height: 450,
    alt: () =>
      `Shipping map: goods leave the Dhaka factory ${terms.incoterm} ${terms.port} for ${shippingData.regions.map((r) => r.name).join(', ')}`,
  },
};

export const infographicMeta = {
  ...baseMeta,
  ...Object.fromEntries(
    garmentKeys.map((key) => [
      `garment-${key}`,
      { width: 640, height: 440, alt: () => `Flat sketch of ${({ shirt: 'a woven shirt', hoodie: 'a hoodie', jacket: 'a bomber jacket', 'training top': 'a training top', 'track jacket': 'a track jacket', 'oversized tee': 'an oversized tee', dress: 'a dress', skirt: 'a skirt', 'pyjama top': 'a pyjama top', 'baby bodysuit': 'a baby bodysuit', 'work shirt': 'a work shirt', blouse: 'a blouse', 'graded pattern': 'a graded pattern', abaya: 'an abaya', 'merch tee': 'a merch tee', 'school polo': 'a school polo', 'scrub top': 'a scrub top', 'cotton tee': 'a cotton tee', 'linen shirt': 'a linen shirt', 'bamboo viscose tee': 'a bamboo viscose tee', swimsuit: 'a swimsuit', 'sports bra': 'a sports bra', 'puffer jacket': 'a puffer jacket', blazer: 'a blazer', 'crew sock': 'a crew sock', sweater: 'a sweater', cap: 'a cap', 'underwire bra': 'an underwire bra', 'rain jacket': 'a rain jacket', 'varsity jacket': 'a varsity jacket', 'fleece jacket': 'a fleece jacket', 'softshell jacket': 'a softshell jacket', 'trench coat': 'a trench coat', 'football shirt': 'a football shirt', 'basketball jersey': 'a basketball jersey', 'cycling jersey': 'a cycling jersey', 'rugby shirt': 'a rugby shirt', 'baseball jersey': 'a baseball jersey', 'esports jersey': 'an esports jersey', 'cheer uniform': 'a cheer uniform', leotard: 'a leotard', 'martial arts gi': 'a martial arts gi', 'fight shorts': 'fight shorts', 'golf polo': 'a golf polo', 'tennis dress': 'a tennis dress', 'running singlet': 'a running singlet', 'compression top': 'a compression top', 'base layer top': 'a base layer top', 'ski jacket': 'a ski jacket', 'chef jacket': 'a chef jacket', 'bib apron': 'a bib apron', 'lab coat': 'a lab coat', coverall: 'a coverall', 'hi-vis vest': 'a hi-vis vest', 'security shirt': 'a security shirt', 'housekeeping tunic': 'a housekeeping tunic', jumpsuit: 'a jumpsuit', 'maternity dress': 'a maternity dress', 'silk pillowcase': 'a silk pillowcase', 'sleep mask': 'a sleep mask', 'embroidered patch': 'an embroidered patch', 'dog hoodie': 'a dog hoodie', 'cushion cover': 'a cushion cover', 'dust bag': 'a dust bag', 'tote bag': 'a tote bag', 'cosmetic pouch': 'a cosmetic pouch', 'drawstring backpack': 'a drawstring backpack', scarf: 'two scarves', bandana: 'a bandana', 'neck gaiter': 'a neck gaiter', 'scrunchie and headband': 'a scrunchie and a headband', tie: 'a tie', 'bandana bib': 'a bandana bib', 'tea towel': 'a tea towel', 'napkin and table runner': 'a napkin and a table runner', 'knitted glove': 'a knitted glove', 'pair of shaping shorts': 'a pair of shaping shorts', 'evening dress': 'an evening dress' } as Record<string, string>)[garments[key].noun] ?? garments[key].noun} labelled with ${garments[key].callouts.slice(0, 4).map((c) => c.label.toLowerCase()).join(', ')} and more` },
    ]),
  ),
} as Record<InfographicName, { width: number; height: number; alt: () => string }>;

export const infographicNames = Object.keys(builders) as InfographicName[];
