"""Build one 1200x630 Open Graph image per built page.

Run after `npm run build`, then build again so the pages pick the images up:
    python3 scripts/generators/og-gen.py
Reads each page's H1 and first eyebrow from dist/, measures text with Inter Bold so
titles wrap without overflowing, writes SVGs to a temp folder and converts them to
PNG in public/og/ with sharp. Needs the Inter fonts installed (fc-list | grep Inter).
"""
import html
import json
import os
import re
import subprocess
import sys
import tempfile

from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DIST = os.path.join(ROOT, 'dist')
OUT = os.path.join(ROOT, 'public', 'og')
FONT_DIR = '/usr/share/fonts/opentype/inter'

bold = TTFont(os.path.join(FONT_DIR, 'Inter-Bold.otf'))
cmap = bold.getBestCmap()
hmtx = bold['hmtx']
upm = bold['head'].unitsPerEm


def width(text, size):
    total = 0
    for ch in text:
        glyph = cmap.get(ord(ch)) or cmap.get(ord('n'))
        total += hmtx[glyph][0]
    return total * size / upm


def wrap(text, size, max_width):
    lines, line = [], ''
    for word in text.split():
        trial = f'{line} {word}'.strip()
        if width(trial, size) <= max_width or not line:
            line = trial
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def fit(text):
    for size in (72, 64, 56, 50, 44):
        lines = wrap(text, size, 1040)
        if len(lines) <= 3 and all(width(l, size) <= 1040 for l in lines):
            return size, lines
    return 44, wrap(text, 44, 1040)[:3]


def esc(text):
    return text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def clean(fragment):
    return html.unescape(re.sub(r'<[^>]+>', '', fragment)).strip()


src = open(os.path.join(ROOT, 'scripts', 'assets', 'og-default.svg'), encoding='utf-8').read()
logo_start = src.index('<svg x="80"')
logo_end = src.index('<text', logo_start)
logo = src[logo_start:logo_end].strip()
logo = logo.replace('<svg x="80" y="40" width="160" height="160"', '<svg x="80" y="56" width="104" height="104"', 1)


def svg_for(eyebrow, title):
    size, lines = fit(title)
    line_height = round(size * 1.18)
    block = line_height * len(lines)
    top = 250 + max(0, (3 * 80 - block) // 2)
    texts = [
        f'<text x="80" y="{top + line_height * (i + 1) - round(size * 0.22)}" font-family="Inter" '
        f'font-size="{size}" font-weight="700" fill="#ffffff">{esc(line)}</text>'
        for i, line in enumerate(lines)
    ]
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#000000"/>
  <rect x="0" y="560" width="1200" height="70" fill="#cc0000"/>
  {logo}
  <text x="210" y="102" font-family="Inter" font-size="34" font-weight="700" fill="#ffffff">SDF Clothing</text>
  <text x="210" y="142" font-family="Inter" font-size="24" font-weight="400" fill="#d9d9d9">Clothing factory in Dhaka, Bangladesh</text>
  <text x="80" y="238" font-family="Inter" font-size="30" font-weight="600" fill="#ff3333">{esc(eyebrow.upper())}</text>
  {''.join(texts)}
  <text x="80" y="606" font-family="Inter" font-size="30" font-weight="600" fill="#ffffff">sdfltd.com</text>
</svg>
'''


def slug_for(path):
    return path.strip('/').replace('/', '--') or 'home'


jobs = []
tmp = tempfile.mkdtemp(prefix='og-')
for base, _, files in os.walk(DIST):
    if 'index.html' not in files:
        continue
    rel = os.path.relpath(base, DIST)
    path = '/' if rel == '.' else f'/{rel}/'
    page = open(os.path.join(base, 'index.html'), encoding='utf-8').read()
    if 'name="robots" content="noindex' in page:
        continue
    h1 = re.search(r'<h1[^>]*>(.*?)</h1>', page, re.S)
    if not h1:
        continue
    eyebrow_match = re.search(r'class="eyebrow"[^>]*>(.*?)<', page, re.S)
    if eyebrow_match and clean(eyebrow_match.group(1)):
        eyebrow = clean(eyebrow_match.group(1))
        if eyebrow == 'Insight':
            eyebrow = 'Guide'
    elif path.startswith('/tools/'):
        eyebrow = 'Free tool'
    else:
        eyebrow = 'Custom clothing manufacturer'
    slug = slug_for(path)
    svg_path = os.path.join(tmp, f'{slug}.svg')
    with open(svg_path, 'w', encoding='utf-8') as handle:
        handle.write(svg_for(eyebrow, clean(h1.group(1))))
    jobs.append([svg_path, os.path.join(OUT, f'{slug}.png')])

os.makedirs(OUT, exist_ok=True)
wanted = {os.path.basename(out) for _, out in jobs}
for name in os.listdir(OUT):
    if name.endswith('.png') and name not in wanted:
        os.remove(os.path.join(OUT, name))

job_file = os.path.join(tmp, 'jobs.json')
with open(job_file, 'w', encoding='utf-8') as handle:
    json.dump(jobs, handle)
script = (
    "const sharp=require('sharp');const jobs=require(process.argv[1]);"
    "(async()=>{for(const [i,o] of jobs){await sharp(i,{density:72}).png({palette:true,quality:90,compressionLevel:9}).toFile(o);}})()"
    ".catch((e)=>{process.stderr.write(String(e));process.exit(1);});"
)
result = subprocess.run(['node', '-e', script, job_file], cwd=ROOT)
if result.returncode:
    sys.exit(result.returncode)
print(f'og-gen: {len(jobs)} Open Graph images written to public/og/')
