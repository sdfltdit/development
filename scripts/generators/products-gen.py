"""Generate trim and packaging pages. Usage: python3 gen.py [--check]"""
import importlib.util, json, sys, re
ROOT = '/home/claude/sdfltd'
s = importlib.util.spec_from_file_location('specs', '/home/claude/sdfltd/scripts/generators/products-specs.py'); m = importlib.util.module_from_spec(s); s.loader.exec_module(m)
CHECK = '--check' in sys.argv

def ts(v): return "'" + v.replace('\\', '\\\\').replace("'", "\\'") + "'"
def yq(v): return '"' + v.replace('\\', '\\\\').replace('"', '\\"') + '"'
def cap(x): return x[0].upper() + x[1:]

def precheck(p):
    sub = lambda x: x.replace('{{moq}}', '300')
    w = []
    if not 50 <= len(p['title']) <= 60: w.append(f"title {len(p['title'])}")
    if not 150 <= len(sub(p['desc'])) <= 160: w.append(f"desc {len(sub(p['desc']))}")
    if len(p['nav']) > 32: w.append('nav too long')
    if not 60 <= len(p['card']) <= 180: w.append(f"card {len(p['card'])}")
    if not 160 <= len(sub(p['answer'])) <= 520: w.append(f"answer {len(p['answer'])}")
    for f in ('desc', 'answer', 'h1', 'title'):
        if p['primary'].lower() not in p[f].lower(): w.append(f'primary missing in {f}')
    heads = ' '.join([q for q, a in p['faqs']] + [t[0] for t in p['styles']] + [p['b1']['heading'], p['b2']['heading']]).lower()
    blob = json.dumps(p).lower()
    for k in p['sec']:
        if k.lower() not in heads: w.append(f'sec "{k}" not in heading')
        if blob.count(k.lower()) < 2: w.append(f'sec "{k}" <2')
    txt = json.dumps(p)
    if ';' in re.sub(r'"(outline|details|dashed)": \[[^\]]*\]', '', txt).replace('&amp;', ''): w.append('semicolon?')
    return w

def block(b):
    if b['kind'] == 'table':
        rows = ',\n'.join('        [' + ', '.join(ts(c) for c in r) + ']' for r in b['rows'])
        more = f"\n      more: {ts(b['more'])}," if b.get('more') else ''
        return f"""    {{
      kind: 'table',
      id: {ts(b['id'])},
      eyebrow: {ts(b['eyebrow'])},
      heading: {ts(b['heading'])},
      lead: {ts(b['lead'])},
      caption: {ts(b['caption'])},
      columns: [{', '.join(ts(c) for c in b['cols'])}],
      rows: [
{rows},
      ],{more}
    }}"""
    items = ',\n'.join(f"        {{ label: {ts(l)}, text: {ts(t)} }}" for l, t in b['items'])
    return f"""    {{
      kind: 'checklist',
      id: {ts(b['id'])},
      eyebrow: {ts(b['eyebrow'])},
      heading: {ts(b['heading'])},
      lead: {ts(b['lead'])},
      items: [
{items},
      ],
    }}"""

def gen(p):
    n, N = p['noun'], cap(p['noun'])
    pl = p['plural']
    risks = dict(kind='checklist', id='risks', eyebrow='Common problems', heading=f"What goes wrong with {pl}, and how we stop it", lead=p['riskLead'], items=p['risks'])
    def style(t):
        if len(t) == 4:
            return f"    {{ title: {ts(t[0])}, text: {ts(t[1])}, href: {ts(t[2])}, cta: {ts(t[3])} }}"
        return f"    {{ title: {ts(t[0])}, text: {ts(t[1])} }}"
    styles = ',\n'.join(style(t) for t in p['styles'])
    steps = [('Send your design', 'Your design, colours, logos and sizes. A quote follows within {{quoteHours}} hours.'), p['step2'], ('Proto sample', f"A {n} in your design, ready in {{{{sampleDays}}}} days."), p['step4'], ('Pre-production sample', 'Made in bulk fabric with your labels, for sign-off.'), ('Bulk and inspection', '{{bulkDays}} days of production, then a final AQL {{aql}} inspection.'), ('Packing and shipment', p['packText'])]
    stepsT = ',\n'.join(f"    {{ title: {ts(t)}, text: {ts(x)} }}" for t, x in steps)
    qual = p['quality5'] + [('Final check', 'AQL {{aql}} inspection on the packed goods')]
    qualT = ',\n'.join(f"      {{ label: {ts(l)}, text: {ts(t)} }}" for l, t in qual)
    quote = p['quote4'] + ['Quantity per style and the date you need stock']
    quoteT = ',\n'.join(f"      {ts(q)}" for q in quote)
    first = ',\n'.join(f"      {ts(x)}" for x in p['firstP'])
    p2 = "Send your design and we send a written quote within {{quoteHours}} hours, {{incoterm}} {{port}}. See <a href=\"/pricing/\">our price list</a> for the products we do publish."
    tsfile = f"""import type {{ ProductContent }} from './types';

export const {p['var']}: ProductContent = {{
  slug: {ts(p['slug'])},
  garment: {ts(p['key'])},
  quoteCta: {ts(f'Get a {n} quote')},
  priceCta: {ts(f'How {pl} are priced')},
  audience: {ts(p['audience'])},
  glanceHeading: {ts(cap(p['primary']) + ' at a glance')},
  glanceLead: {ts(p['glanceLead'])},
  stylesHeading: {ts(p['stylesHeading'])},
  stylesLead: {ts('Every piece is made to your design in our own factory. These are the styles buyers order most.')},
  styles: [
{styles},
  ],
  blocks: [
{block(p['b1'])},
{block(p['b2'])},
{block(risks)},
  ],
  noPrice: {{
    heading: {ts(f'How {pl} are priced')},
    paragraphs: [
      {ts(f"We do not publish one price for {pl}. " + p['priceP'])},
      {ts(p2)},
    ],
  }},
  processHeading: {ts(f'How an order for {pl} works')},
  processLead: {ts('Seven steps from your design to packed cartons.')},
  steps: [
{stepsT},
  ],
  quality: {{
    heading: {ts(N + ' quality checks')},
    lead: {ts(f"As a {p['primary']}, we run these checks on every order.")},
    items: [
{qualT},
    ],
  }},
  quote: {{
    heading: {ts(f'What to send for a {n} quote')},
    lead: {ts('The more of this you send, the closer the first quote is to the final price.')},
    items: [
{quoteT},
    ],
  }},
  first: {{
    heading: {ts(f'Starting your first {n} order')},
    paragraphs: [
{first},
    ],
  }},
  faqHeading: {ts(N + ' questions')},
}};
"""
    specs = [('Minimum order', '{{moq}} {{moqUnit}}. Colours and sizes share the total, from {{perColour}} pieces per colour.')] + p['specs'] + [('Sample time', '{{sampleDays}} days'), ('Bulk production', '{{bulkDays}} days after sample approval'), ('Shipping terms', '{{incoterm}} {{port}}, shipped worldwide')]
    specsY = '\n'.join(f"  - label: {l}\n    value: {yq(v)}" for l, v in specs)
    faqs = [(f"What is the minimum order for {pl}?", f"{cap(pl)} start at {{{{moq}}}} {{{{moqUnit}}}}, with each design counted as a style. Colours and sizes share the total, from {{{{perColour}}}} pieces per colour.")] + p['faqs']
    faqY = '\n'.join(f"  - q: {yq(q)}\n    a: {yq(a)}" for q, a in faqs)
    secY = '\n'.join(f"  - {k}" for k in p['sec'])
    relY = '\n'.join(f"  - {r}" for r in p['related'])
    md = f"""---
kind: product
hub: products
navLabel: {p['nav']}
linkText: {yq(cap(p['primary']) + ' details')}
cardSummary: {yq(p['card'])}
title: {yq(p['title'])}
description: {yq(p['desc'])}
h1: {yq(p['h1'])}
eyebrow: {p['eyebrow']}
primaryKeyword: {p['primary']}
secondaryKeywords:
{secY}
intent: commercial
answer: {yq(p['answer'])}
facts: [moq, sample, bulk, quote]
specsCaption: {yq(cap(pl) + ' facts. Anything outside these ranges is confirmed on your written quote.')}
specs:
{specsY}
showPrices: false
serviceType: {yq(cap(p['primary'].replace(' manufacturer', ' manufacturing')))}
citations: []
faq:
{faqY}
related:
{relY}
published: 2026-11-27
updated: 2026-11-27
---
"""
    astro = f"---\nimport ProductPage from '../components/ProductPage.astro';\nimport {{ {p['var']} }} from '../data/products/{p['slug']}';\n---\n\n<ProductPage content={{{p['var']}}} />\n"
    return tsfile, md, astro

LP = [(150, 140), (150, 250), (150, 360)]
RP = [(486, 140), (486, 250), (486, 360)]
def sketch(p):
    k = p['sk']
    labs = k['labels']
    left = sorted(labs[:3], key=lambda l: l[2]); right = sorted(labs[3:], key=lambda l: l[2])
    co = [f"      {{ label: {ts(l)}, tx: {LP[i][0]}, ty: {LP[i][1]}, px: {x}, py: {y}, side: 'left' }}" for i, (l, x, y) in enumerate(left)]
    co += [f"      {{ label: {ts(l)}, tx: {RP[i][0]}, ty: {RP[i][1]}, px: {x}, py: {y}, side: 'right' }}" for i, (l, x, y) in enumerate(right)]
    det = ',\n'.join(f"      {ts(d)}" for d in k['details'])
    da = ', '.join(ts(d) for d in k['dashed'])
    return f"""  {p['key']}: {{
    title: {ts(k['title'])},
    noun: {ts(k['noun'])},
    outline: {ts(k['outline'])},
    details: [
{det},
    ],
    dashed: [{da}],
    callouts: [
{chr(10).join(c + ',' for c in co)}
    ],
  }},
"""

bad = False
for p in m.P:
    w = precheck(p)
    if w: bad = True; print(p['slug'], w)
if CHECK or bad:
    sys.exit(1 if bad else 0)

g = open(f'{ROOT}/src/lib/garments.ts').read()
for p in m.P:
    t, md, a = gen(p)
    open(f"{ROOT}/src/data/products/{p['slug']}.ts", 'w').write(t)
    open(f"{ROOT}/src/content/landing/{p['slug']}.md", 'w').write(md)
    open(f"{ROOT}/src/pages/{p['slug']}.astro", 'w').write(a)
    g = re.sub(rf"\n  {p['key']}: {{\n.*?\n  }},\n", '\n', g, flags=re.S)
    g = g.replace('  privatelabel: {', sketch(p) + '  privatelabel: {', 1)
open(f'{ROOT}/src/lib/garments.ts', 'w').write(g)

sl = open(f'{ROOT}/src/pages/[...slug].astro').read()
add = [p['slug'] for p in m.P if f"'{p['slug']}'" not in sl]
if add: sl = sl.replace("'garment-export-cartons', ", "'garment-export-cartons', " + ', '.join(f"'{x}'" for x in add) + ', ', 1)
open(f'{ROOT}/src/pages/[...slug].astro', 'w').write(sl)

pa = open(f'{ROOT}/scripts/page-audit.mjs').read()
addS = [f"'/{p['slug']}/'" for p in m.P if f"'/{p['slug']}/'" not in pa]
if addS: pa = pa.replace('const STRICT = new Set([', 'const STRICT = new Set([\n  ' + ', '.join(addS) + ',', 1)
open(f'{ROOT}/scripts/page-audit.mjs', 'w').write(pa)

cat = open(f'{ROOT}/src/data/catalogue.ts').read()
sp = [p['slug'] for p in m.P if p['group'] == 'sports' and f"'{p['slug']}'" not in cat]
hm = [p['slug'] for p in m.P if p['group'] == 'home' and f"'{p['slug']}'" not in cat]
if sp: cat = cat.replace("'esports-jersey-manufacturer', 'fightwear-manufacturer'],", "'esports-jersey-manufacturer', 'fightwear-manufacturer', " + ', '.join(f"'{x}'" for x in sp) + '],', 1)
if hm: cat = cat.replace("'table-linen-manufacturer', 'pet-clothing-manufacturer'],", "'table-linen-manufacturer', 'pet-clothing-manufacturer', " + ', '.join(f"'{x}'" for x in hm) + '],', 1)
open(f'{ROOT}/src/data/catalogue.ts', 'w').write(cat)
print('generated', len(m.P))
