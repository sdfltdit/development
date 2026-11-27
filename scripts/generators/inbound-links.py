"""One-off: add contextual links to pages with few in-content inbound links.

Each source gets one or two sentences appended to its closing "first" section
(ProductPage data files) or placed before "## Where SDF Clothing fits" (Markdown guides).
[[slug]] becomes a link whose text is that page's primary keyword.
Skips a source that already links the target, so it is safe to rerun.
"""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
LAND = os.path.join(ROOT, 'src', 'content', 'landing')
DATA = os.path.join(ROOT, 'src', 'data', 'products')

keywords = {}
for base, _, files in os.walk(LAND):
    for name in files:
        if name.endswith('.md'):
            text = open(os.path.join(base, name), encoding='utf-8').read()
            match = re.search(r'^primaryKeyword: (.+)$', text, re.M)
            slug = os.path.relpath(os.path.join(base, name), LAND)[:-3]
            if match:
                keywords[slug] = match.group(1).strip().strip('"')

KEEP_CASE = ('American', 'French', 'Bangladesh', 'EU', 'CPSIA', 'AQL', 'MOQ', 'GSM', 'Incoterms')


def anchor_text(slug):
    kw = keywords[slug]
    return kw if kw.split()[0] in KEEP_CASE else kw[0].lower() + kw[1:]


TS = {
    'sweater-manufacturer': 'Most of our winter knits use cotton, wool or synthetic yarns, and our [[acrylic-clothing-manufacturer]] page covers the last. Patterned knits are explained on our [[jacquard-clothing-manufacturer]] page.',
    'scarf-manufacturer': 'Knitted scarves are often made from acrylic yarn, as our [[acrylic-clothing-manufacturer]] page explains. Woven-in logos and patterns are covered on our [[jacquard-clothing-manufacturer]] page.',
    'shirt-manufacturer': 'Shirt fabrics each have their own page: [[chambray-clothing-manufacturer]], [[seersucker-clothing-manufacturer]], [[flannel-clothing-manufacturer]] and [[voile-clothing-manufacturer]]. Collars and cuffs rely on the right [[garment-interlining]].',
    'denim-manufacturer': 'Want the denim look in a lighter weight for shirts and dresses? See our [[chambray-clothing-manufacturer]] page.',
    'dress-manufacturer': 'Dress fabrics have their own pages too, from [[crepe-clothing-manufacturer]] and [[georgette-clothing-manufacturer]] work to [[ponte-clothing-manufacturer]] and [[scuba-fabric-clothing-manufacturer]] orders.',
    'clothing-manufacturers-for-women': 'Two fabrics come up often in womenswear briefs, and each has its own page: [[crepe-clothing-manufacturer]] and [[velvet-clothing-manufacturer]].',
    'loungewear-manufacturer': 'Textured lounge fabrics are covered on our [[waffle-knit-clothing-manufacturer]] and [[rib-knit-clothing-manufacturer]] pages. Brushed cotton pyjamas are on our [[flannel-clothing-manufacturer]] page.',
    'blazer-manufacturer': 'For cloth, see our [[tweed-clothing-manufacturer]] and [[gabardine-clothing-manufacturer]] pages. Structure comes from [[shoulder-pads]] and [[garment-interlining]], each explained on its own page.',
    'uniform-manufacturer': 'Hard-wearing trousers and jackets are often cut from gabardine, as our [[gabardine-clothing-manufacturer]] page explains. Club and team uniforms include a [[martial-arts-uniform-manufacturer]] range.',
    'modest-fashion-manufacturer': 'Flowing abayas and hijabs are often made from georgette, covered on our [[georgette-clothing-manufacturer]] page.',
    'activewear-manufacturer': 'Performance fabrics have their own pages: [[mesh-clothing-manufacturer]] and [[spandex-clothing-manufacturer]]. Race kit is on our [[running-apparel-manufacturer]] page, and our [[bangladesh-vs-vietnam-clothing-manufacturing]] guide compares sportswear sourcing.',
    'basketball-uniform-manufacturer': 'Breathable side panels use athletic mesh, as our [[mesh-clothing-manufacturer]] page explains. Court and team kits also include a [[volleyball-uniform-manufacturer]] range and a [[baseball-uniform-manufacturer]] range.',
    'pants-trousers-manufacturer': 'Smart stretch trousers are often cut from ponte, covered on our [[ponte-clothing-manufacturer]] page.',
    'skirts-manufacturer': 'Structured skirts with a smooth finish are covered on our [[scuba-fabric-clothing-manufacturer]] page.',
    'shorts-manufacturer': 'Summer shorts in a puckered stripe are covered on our [[seersucker-clothing-manufacturer]] page.',
    'leggings-manufacturer': 'Stretch and recovery come from elastane, as our [[spandex-clothing-manufacturer]] page explains.',
    'evening-dress-manufacturer': 'Two evening fabrics have their own pages: [[taffeta-clothing-manufacturer]] and [[velvet-clothing-manufacturer]].',
    'wedding-dress-manufacturer': 'Full skirts often use taffeta, as our [[taffeta-clothing-manufacturer]] page explains. Bridal lace is covered on our [[lace-trims]] page.',
    'coat-manufacturer': 'Heritage cloth for winter coats is covered on our [[tweed-clothing-manufacturer]] page.',
    'base-layer-manufacturer': 'Textured thermal fabric is covered on our [[waffle-knit-clothing-manufacturer]] page.',
    'kids-baby-clothing-manufacturer': 'Soft baby fabrics have their own pages: [[jersey-knit-clothing-manufacturer]] and [[muslin-clothing-manufacturer]].',
    'bodysuit-manufacturer': 'Most bodysuits use one of two knits, each with its own page: [[jersey-knit-clothing-manufacturer]] and [[rib-knit-clothing-manufacturer]].',
    'baby-bib-manufacturer': 'Double gauze for swaddles and bibs is covered on our [[muslin-clothing-manufacturer]] page.',
    'kurta-manufacturer': 'Light summer kurtas are often made in cotton voile, as our [[voile-clothing-manufacturer]] page explains.',
    'school-uniform-manufacturer': 'School sports kit has its own pages, such as our [[cricket-uniform-manufacturer]], [[netball-dress-manufacturer]] and [[rugby-shirt-manufacturer]] pages. School ties are on our [[tie-manufacturer]] page.',
    'sublimated-clothing-manufacturer': 'Many team kits are sublimated, including those on our [[cricket-uniform-manufacturer]], [[volleyball-uniform-manufacturer]] and [[hockey-jersey-manufacturer]] pages.',
    'tennis-wear-manufacturer': 'Court dresses for team sport are covered on our [[netball-dress-manufacturer]] page. Polo-led golf ranges are on our [[golf-apparel-manufacturer]] page.',
    'football-kit-manufacturer': 'Other field sports have their own pages: [[hockey-jersey-manufacturer]], [[american-football-jersey-manufacturer]] and [[rugby-shirt-manufacturer]].',
    'baseball-uniform-manufacturer': 'For gridiron teams, see our [[american-football-jersey-manufacturer]] page. Ice and field hockey kit is on our [[hockey-jersey-manufacturer]] page.',
    'menswear-manufacturer': 'Golf polos and pullovers for menswear ranges are covered on our [[golf-apparel-manufacturer]] page.',
    'compression-wear-manufacturer': 'Shorts, singlets and race shirts are covered on our [[running-apparel-manufacturer]] page.',
    'fightwear-manufacturer': 'Gis and belts for dojo and club orders are covered on our [[martial-arts-uniform-manufacturer]] page.',
    'silk-pillowcase-manufacturer': 'Full bedding sets are covered on our [[bed-linen-manufacturer]] page.',
    'hotel-uniform-manufacturer': 'Hotels often order room textiles too, covered on our [[bed-linen-manufacturer]] and [[towel-manufacturer]] pages.',
    'bathrobe-manufacturer': 'Matching bath and beach towels are covered on our [[towel-manufacturer]] page.',
    'fleece-clothing-manufacturer': 'Fleece throws are covered on our [[blanket-manufacturer]] page, and fleece dog jackets on our [[pet-clothing-manufacturer]] page.',
    'cushion-cover-manufacturer': 'Matching home textiles are covered on our [[blanket-manufacturer]] and [[bed-linen-manufacturer]] pages.',
    'adaptive-clothing-manufacturer': 'Easy closures for adaptive designs are covered on our [[hook-and-loop-tape]] page.',
    'embroidered-patch-manufacturer': 'Patches that fasten and come off again use the backing on our [[hook-and-loop-tape]] page. Common stitching faults are covered in our [[insights/embroidery-problems-explained]] guide.',
    'suit-manufacturer': 'Suit structure relies on [[shoulder-pads]], and retail-ready suits ship on [[custom-hangers]]. Matching neckwear is on our [[tie-manufacturer]] page.',
    'lingerie-manufacturer': 'Bra parts and trims have their own pages: [[bra-components]] and [[lace-trims]].',
    'sports-bra-manufacturer': 'Hooks, rings, sliders and cups are covered on our [[bra-components]] page.',
    'hoodie-manufacturer': 'Neck tape, binding and piping are covered on our [[garment-tapes]] page.',
    'varsity-jacket-manufacturer': 'Striped trims and binding are covered on our [[garment-tapes]] page.',
    'sustainable-clothing-manufacturer': 'EU rules on textile take-back are explained in our [[eu-epr-explained]] guide.',
    'recycled-clothing-manufacturer': 'Recycled content will need to be recorded in the EU product passport, explained in our [[insights/digital-product-passport-textile]] guide.',
    'embroidery-service': 'Puckering, thread breaks and gaps are explained in our [[insights/embroidery-problems-explained]] guide.',
    'tech-pack-service': 'Starting from an idea or a photo? Our [[garment-development-service]] page explains how we turn it into a sample.',
    'pattern-making-service': 'Pattern work is one step of our [[garment-development-service]], from first idea to approved sample.',
    'scrubs-manufacturer': 'Lab and clinic wear is covered on our [[lab-coat-manufacturer]] page.',
    'chef-uniform-manufacturer': 'White coats for kitchens, labs and clinics are also covered on our [[lab-coat-manufacturer]] page.',
    'bandana-manufacturer': 'Dog bandanas often sit in a range with hoodies and jackets, covered on our [[pet-clothing-manufacturer]] page.',
    'low-moq-clothing-manufacturers': 'Weighing a local workshop against an overseas factory? Our guide to [[overseas-vs-local-clothing-manufacturer]] compares cost, minimums and lead time.',
    'cut-and-sew-service': 'Every seam is only as strong as its thread, as our [[sewing-thread]] page explains.',
}

EXTRA = [
    ('kids-baby-clothing-manufacturer', 'Wearable blankets for nursery ranges are covered on our [[baby-sleep-sack-manufacturer]] page.'),
    ('baby-bib-manufacturer', 'Sleep sacks in matching prints are covered on our [[baby-sleep-sack-manufacturer]] page.'),
    ('leggings-manufacturer', 'Riding tights with silicone grip are covered on our [[equestrian-clothing-manufacturer]] page.'),
    ('base-layer-manufacturer', 'Base layers for riders are covered on our [[equestrian-clothing-manufacturer]] page.'),
    ('activewear-manufacturer', 'Riding brands can see our [[equestrian-clothing-manufacturer]] page, and court brands our [[pickleball-apparel-manufacturer]] page.'),
    ('school-uniform-manufacturer', 'Leavers’ and prize-day gowns are covered on our [[graduation-gown-manufacturer]] page. Lacrosse kit is on our [[lacrosse-uniform-manufacturer]] page.'),
    ('blazer-manufacturer', 'Academic dress for ceremonies is covered on our [[graduation-gown-manufacturer]] page.'),
    ('basketball-uniform-manufacturer', 'Reversible pinnies for field teams are covered on our [[lacrosse-uniform-manufacturer]] page.'),
    ('cycling-jersey-manufacturer', 'Off-road riders are covered on our [[motocross-jersey-manufacturer]] page, and multisport clubs on our [[triathlon-suit-manufacturer]] page.'),
    ('sublimated-clothing-manufacturer', 'Sublimated race kit for off-road teams is on our [[motocross-jersey-manufacturer]] page.'),
    ('underwear-manufacturer', 'Absorbent styles are covered on our [[period-underwear-manufacturer]] page.'),
    ('lingerie-manufacturer', 'Leak-proof briefs to pair with bras are covered on our [[period-underwear-manufacturer]] page.'),
    ('shapewear-manufacturer', 'Intimates brands adding absorbent briefs can see our [[period-underwear-manufacturer]] page.'),
    ('running-apparel-manufacturer', 'Swim, bike and run suits are covered on our [[triathlon-suit-manufacturer]] page.'),
    ('compression-wear-manufacturer', 'Race suits with compression legs are covered on our [[triathlon-suit-manufacturer]] page.'),
    ('kids-baby-clothing-manufacturer', 'Hats, booties and scratch mittens are covered on our [[baby-accessories-manufacturer]] page.'),
    ('baby-bib-manufacturer', 'Matching hats and booties are on our [[baby-accessories-manufacturer]] page.'),
    ('scrubs-manufacturer', 'Printed and tie-back caps are covered on our [[scrub-cap-manufacturer]] page.'),
    ('lab-coat-manufacturer', 'Caps for clinic and lab teams are covered on our [[scrub-cap-manufacturer]] page.'),
    ('neck-gaiter-manufacturer', 'Full face cover for cold days is on our [[balaclava-manufacturer]] page.'),
    ('ski-wear-manufacturer', 'Ski masks and helmet liners are covered on our [[balaclava-manufacturer]] page.'),
    ('cosmetic-pouch-manufacturer', 'Beauty brands can add our [[reusable-makeup-pad-manufacturer]] range, and belt bags from our [[fanny-pack-manufacturer]] page.'),
    ('bamboo-clothing-manufacturer', 'Bamboo velour pads are covered on our [[reusable-makeup-pad-manufacturer]] page.'),
    ('cushion-cover-manufacturer', 'Stockings and tree skirts for the season are on our [[christmas-stocking-manufacturer]] page.'),
    ('table-linen-manufacturer', 'Seasonal ranges can add pieces from our [[christmas-stocking-manufacturer]] page.'),
    ('drawstring-bag-manufacturer', 'Padded daily bags are covered on our [[backpack-manufacturer]] page.'),
    ('school-uniform-manufacturer', 'School bags are covered on our [[backpack-manufacturer]] page.'),
    ('merch-manufacturer', 'Event merch can add printed tape from our [[lanyard-manufacturer]] page.'),
    ('embroidered-patch-manufacturer', 'Staff badges often hang on items from our [[lanyard-manufacturer]] page.'),
    ('tote-bag-manufacturer', 'Hands-free bags are covered on our [[fanny-pack-manufacturer]] page.'),
    ('golf-apparel-manufacturer', 'Golf towels with hooks are covered on our [[sports-towel-manufacturer]] page.'),
    ('hair-accessories-manufacturer', 'Terry bands for sport are covered on our [[sweatband-manufacturer]] page.'),
    ('tennis-wear-manufacturer', 'Wristbands and headbands for court players are on our [[sweatband-manufacturer]] page.'),
]

MD = {
    'insights/stitch-quality-spi-explained': 'Thread size and type matter as much as stitch count. Our page on [[sewing-thread]] explains tex sizes and core-spun thread.',
    'insights/garment-finishing-explained': 'Pieces sold hanging leave the factory on hangers, covered on our [[custom-hangers]] page.',
    'insights/manufacturing-costs': 'Once you know your cost per piece, our guide on [[how-to-price-clothing]] shows how to set wholesale and retail prices.',
    'private-label-clothing-guide': 'Setting your margins starts with our guide on [[how-to-price-clothing]].',
    'insights/knitting-defects-explained': 'Some faults only show in the lab. Our [[insights/garment-testing-guide]] explains shrinkage, pilling and colour fastness tests.',
    'insights/shade-variation-explained': 'Colour fastness is a separate check from shade matching, as our [[insights/garment-testing-guide]] explains.',
    'insights/incoterms-explained': 'For orders made in Bangladesh, our guide on [[insights/how-to-import-clothing-from-bangladesh]] walks through shipping and duty.',
    'freight-forwarder-vs-factory-arranged-shipping-vs-diy': 'Shipping from Bangladesh in particular? Our guide on [[insights/how-to-import-clothing-from-bangladesh]] covers ports, documents and duty.',
    'bangladesh-vs-china-clothing-manufacturing': 'For other comparisons, see our [[bangladesh-vs-pakistan-clothing-manufacturing]] guide.',
    'clothing-manufacturer-bangladesh': 'Our [[bangladesh-vs-pakistan-clothing-manufacturing]] and [[bangladesh-vs-vietnam-clothing-manufacturing]] guides compare Bangladesh with two other sourcing countries.',
    'bangladesh-vs-india-clothing-manufacturing': 'Sportswear buyers often weigh Vietnam too, as our [[bangladesh-vs-vietnam-clothing-manufacturing]] guide explains.',
    'insights/circular-fashion-guide': 'Brands selling in the EU will pay fees under the [[eu-epr-explained]] rules.',
    'insights/eu-clothing-regulations-2026': 'Product data rules are covered in our guide to the [[insights/digital-product-passport-textile]].',
    'digital-3d-sample-vs-physical-sample': 'Every stage from proto to shipment sample is explained in our guide to [[insights/types-of-garment-samples]].',
    'how-to-create-a-tech-pack': 'Each sample your tech pack leads to is explained in our guide to [[insights/types-of-garment-samples]].',
    'how-to-find-clothing-manufacturer': 'Still choosing between a local and an overseas factory? Read our guide to [[overseas-vs-local-clothing-manufacturer]].',
}


def link_html(slug):
    return f'<a href="/{slug}/">{anchor_text(slug)}</a>'


def link_md(slug):
    return f'[{anchor_text(slug)}](/{slug}/)'


def targets(sentence):
    return re.findall(r'\[\[([^\]]+)\]\]', sentence)


added = 0
for source, sentence in TS.items():
    path = os.path.join(DATA, f'{source}.ts')
    text = open(path, encoding='utf-8').read()
    if all(f'href="/{t}/"' in text for t in targets(sentence)):
        continue
    rendered = re.sub(r'\[\[([^\]]+)\]\]', lambda m: link_html(m.group(1)), sentence).replace("'", "\\'")
    start = text.index('  first: {')
    end = text.index('    ],\n  },', start)
    tail = text.rindex("',", start, end)
    text = text[:tail] + ' ' + rendered + text[tail:]
    open(path, 'w', encoding='utf-8').write(text)
    added += 1

for source, sentence in EXTRA:
    path = os.path.join(DATA, f'{source}.ts')
    text = open(path, encoding='utf-8').read()
    if all(f'href="/{t}/"' in text for t in targets(sentence)):
        continue
    rendered = re.sub(r'\[\[([^\]]+)\]\]', lambda m: link_html(m.group(1)), sentence).replace("'", "\\'")
    start = text.index('  first: {')
    end = text.index('    ],\n  },', start)
    tail = text.rindex("',", start, end)
    text = text[:tail] + ' ' + rendered + text[tail:]
    open(path, 'w', encoding='utf-8').write(text)
    added += 1

for source, sentence in MD.items():
    path = os.path.join(LAND, f'{source}.md')
    text = open(path, encoding='utf-8').read()
    if all(f'](/{t}/)' in text for t in targets(sentence)):
        continue
    rendered = re.sub(r'\[\[([^\]]+)\]\]', lambda m: link_md(m.group(1)), sentence)
    marker = '\n## Where SDF Clothing fits'
    if marker in text:
        text = text.replace(marker, f'\n{rendered}\n{marker}', 1)
    else:
        text = text.rstrip('\n') + f'\n\n{rendered}\n'
    open(path, 'w', encoding='utf-8').write(text)
    added += 1

print(f'inbound-links: updated {added} source pages')
