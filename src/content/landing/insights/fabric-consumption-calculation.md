---
kind: guide
hub: how-we-work
navLabel: Fabric consumption calculation
cardSummary: How factories work out the fabric needed per garment, from the knit weight formula and woven marker length to marker efficiency and wastage.
title: "Fabric Consumption Calculation for Garments | SDF Clothing"
description: "Fabric consumption calculation for knit and woven garments: the knit weight formula, marker length per piece, marker efficiency and the wastage to add."
h1: Fabric consumption calculation for knit and woven garments
eyebrow: Insight
primaryKeyword: fabric consumption calculation
secondaryKeywords:
  - marker efficiency
  - fabric wastage
  - marker making
  - cuttable width
intent: informational
answer: "Fabric consumption calculation tells you how much fabric one garment needs. Knit fabric is usually worked out by weight, from the garment measurements and the fabric GSM. Woven fabric is worked out by length, from the marker. Both then add wastage for cutting, sewing and shrinkage, usually 5 to 10%."
facts: [moq, sample, bulk]
specsCaption: Fabric consumption calculation at a glance.
specs:
  - label: Knit fabric
    value: Measured in kilograms, from area and GSM
  - label: Woven fabric
    value: Measured in metres or yards, from marker length
  - label: Marker efficiency
    value: Often 85 to 92% for knits and 80 to 88% for wovens
  - label: Wastage
    value: Usually 5 to 10% added for cutting, sewing and shrinkage
  - label: Biggest factors
    value: Fabric width, size ratio, pattern shape, stripes and checks
showPrices: false
serviceType: Guide to fabric consumption calculation
sources:
  - title: "Fabric consumption estimation methods for garments"
    publisher: Zenodo research record
    url: https://zenodo.org/records/8304059
  - title: "Fabric width and marker efficiency study"
    publisher: ProQuest
    url: https://www.proquest.com/docview/2544440222
faq:
  - q: How do I calculate knit fabric consumption?
    a: Add body length and sleeve length plus seam allowances, multiply by the half chest plus allowance, then by 2 and the GSM. Divide by 10,000,000 for kilograms per piece.
  - q: What is marker efficiency?
    a: The share of the marker covered by pattern pieces. If pieces cover 8.5 square metres of a 10 square metre marker, efficiency is 85%.
  - q: How much fabric wastage should I add?
    a: Usually 5 to 10%. Add more for stripes, checks, one-way prints and fabrics that shrink.
  - q: What is marker making?
    a: Laying all pattern pieces for a set of sizes onto the fabric width with as little waste as possible, usually in CAD software.
  - q: What is cuttable width?
    a: The usable width of the fabric after removing the selvedges and any marked edges. Consumption is always worked out on cuttable width.
  - q: Why does consumption change between sample and bulk?
    a: Bulk uses a full marker with mixed sizes, real fabric width and real shrinkage. The sample estimate is only a starting point.
related:
  - /tools/fabric-consumption-calculator/
  - /insights/manufacturing-costs/
  - /insights/fabric-gsm-explained/
  - /cut-and-sew-service/
  - /tools/shrinkage-calculator/
  - /insights/fabric-inspection-4-point-system/
  - /pattern-making-service/
  - /tools/garment-cost-calculator/
published: 2026-11-27
updated: 2026-11-27
---

## Fabric consumption calculation in brief

Fabric is the biggest single cost in most garments. Getting the quantity right decides your price, your fabric order and how much is left over. Fabric consumption calculation is how factories work it out.

There are two ways to do it. A formula gives a quick estimate at quote stage. A marker, the cutting layout, gives the real figure for bulk. This guide covers both, and our free [fabric consumption calculator](/tools/fabric-consumption-calculator/) runs the numbers for you.

## Knit and woven are measured differently

| Fabric | Bought by | Consumption in | Main inputs |
|---|---|---|---|
| Knit | Weight | Kilograms per piece or per dozen | Garment measurements and GSM |
| Woven | Length | Metres or yards per piece | Marker length and pieces in the marker |

Knit mills sell by the kilogram, so knit consumption is a weight. Woven mills sell by the metre or yard, so woven consumption is a length.

## The knit formula

For a simple knit top, such as a T-shirt, the formula is:

**Kilograms per piece = (body length + sleeve length + allowances) × (half chest + allowance) × 2 × GSM ÷ 10,000,000**

All measurements are in centimetres. The 2 covers the front and back. Dividing by 10,000,000 turns square centimetres and grams per square metre into kilograms.

| Input | Example |
|---|---|
| Body length plus hem and shoulder allowance | 72 + 4 = 76 cm |
| Sleeve length plus hem allowance | 20 + 3 = 23 cm |
| Half chest plus side seam allowance | 52 + 2 = 54 cm |
| Fabric weight | 180 GSM |
| Result | (76 + 23) × 54 × 2 × 180 ÷ 10,000,000 = 0.192 kg |

Add wastage on top, such as 8%, and the figure becomes about 0.208 kg per piece, or 2.49 kg per dozen. Rib for necks and cuffs is worked out the same way, then added.

## The woven method: marker length

For woven fabric, the cutting marker gives the answer directly.

**Metres per piece = marker length ÷ number of garments in the marker**

If a marker 6.4 metres long holds 4 shirts, consumption is 1.6 metres per shirt. Add wastage for end losses, splicing and defects, usually 3 to 5% on wovens.

Before a marker exists, factories estimate from the pattern area. Divide the total area of the pieces by the cuttable width, then add an efficiency loss.

## Marker making and marker efficiency

Marker making means arranging every pattern piece for a set of sizes on the fabric width, as tightly as possible. Most factories do it in CAD software, then print the marker to guide the cutters.

**Marker efficiency = area of pattern pieces ÷ area of the marker × 100**

| Fabric | Typical marker efficiency |
|---|---|
| Knit garments | 85 to 92% |
| Woven garments | 80 to 88% |
| Denim | 75 to 85% |

A higher figure means less waste. Mixing sizes in one marker often helps, because small pieces fill the gaps between big ones.

## What raises fabric wastage

Several things push fabric wastage up. Plan for them at quote stage.

- **Cuttable width:** narrow fabric fits fewer pieces across, so more length is needed.
- **Stripes and checks:** pieces must line up, which leaves gaps in the marker.
- **One-way prints and pile:** every piece must face the same way.
- **Shrinkage:** fabric that shrinks needs bigger pattern pieces.
- **Fabric defects:** holes and shading are cut around, as our guide to [4-point fabric inspection](/insights/fabric-inspection-4-point-system/) explains.
- **Small orders:** short markers and end losses waste a bigger share.

## Cuttable width and why it matters

Cuttable width is the fabric width you can actually use. It leaves out the selvedges and any pin holes or printed edges. A fabric sold as 150 cm wide may cut at only 144 cm.

Always ask the mill for cuttable width, not full width. A few centimetres change how many pieces fit across, which changes consumption on every garment.

## From consumption to cost

Once you know consumption, multiply it by the fabric price to get fabric cost per garment. Our guide to [clothing manufacturing costs](/insights/manufacturing-costs/) shows where fabric sits in the full cost breakdown.

## Where SDF Clothing fits

We estimate consumption from your measurements at quote stage, then confirm it from the marker before we order bulk fabric. Our pattern team plans markers in CAD, and fabric is checked on arrival so wastage stays close to plan. The figures on your quote already include the fabric for your order, from {{moq}} {{moqUnit}}.
