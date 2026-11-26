---
kind: guide
hub: how-we-work
navLabel: AQL inspection explained
cardSummary: What AQL inspection means for clothing, how sample size is chosen, what counts as critical, major and minor defects, and how to read a pass or fail.
title: "AQL Inspection Explained for Clothing Orders | SDF Clothing"
description: "AQL inspection explained for clothing buyers: how the AQL sampling table sets sample size, AQL 2.5 versus 4.0, defect types and how to read the result."
h1: AQL inspection explained for clothing buyers
eyebrow: Insight
primaryKeyword: AQL inspection
secondaryKeywords:
  - AQL sampling table
  - AQL 2.5
  - acceptance quality limit
  - critical major minor defects
intent: informational
answer: "AQL inspection checks a random sample of finished garments instead of every piece. The order size sets how many pieces are pulled, and the acceptance quality limit sets how many defects are allowed before the lot fails. Clothing buyers usually allow zero critical defects, AQL 2.5 for major defects and AQL 4.0 for minor ones."
facts: [moq, bulk, aql]
specsCaption: AQL inspection at a glance.
specs:
  - label: Standard
    value: ISO 2859-1, sampling by attributes indexed by AQL. The current edition was published in 2026.
  - label: Inspection level
    value: General inspection level II is the usual choice for clothing
  - label: Critical defects
    value: Usually zero allowed. Anything unsafe or illegal
  - label: Major defects
    value: Usually AQL 2.5. Faults a shopper would return the garment for
  - label: Minor defects
    value: Usually AQL 4.0. Small faults that do not stop sale
  - label: When
    value: When at least 80% of the order is packed, before the cartons are sealed
showPrices: false
serviceType: Guide to AQL inspection
sources:
  - title: "ISO 2859-1:2026 Sampling procedures for inspection by attributes, Part 1"
    publisher: ISO
    url: https://www.iso.org/standard/85464.html
faq:
  - q: What does AQL stand for?
    a: AQL stands for acceptance quality limit. It is the worst average defect rate a buyer will accept across a series of lots, used to set how many defects are allowed in a sample.
  - q: What does AQL 2.5 mean in practice?
    a: AQL 2.5 means the sampling plan accepts a lot when defects in the sample stay within the limit set for 2.5. For a lot of 1,201 to 3,200 garments, that is up to 7 major defects in a sample of 125.
  - q: Is AQL 1.0 better than AQL 2.5?
    a: AQL 1.0 is stricter, so fewer defects pass. It suits high-value or safety-sensitive goods. For most fashion and basics, AQL 2.5 for major defects is the common standard.
  - q: Who chooses the AQL level?
    a: The buyer chooses, and it should be written on the order. If nothing is agreed, ask the factory which levels it uses before production starts.
  - q: What happens when an AQL inspection fails?
    a: The factory sorts the whole lot, repairs or replaces faulty pieces, and the lot is inspected again. Shipping waits until it passes or the buyer agrees otherwise.
  - q: Does a pass mean every garment is perfect?
    a: No. A pass means the sample stayed within the agreed limits, so the lot is likely to meet the standard. A few faulty pieces can still be in the lot.
related:
  - /quality-inspection-service/
  - /lab-dip-service/
  - /fabric-sourcing/
  - /insights/fabric-gsm-explained/
  - /how-to-find-clothing-manufacturer/
  - /work-process/
  - /insights/stitch-quality-spi-explained/
  - /in-house-qc-vs-third-party-inspection-vs-no-inspection/
published: 2026-11-26
updated: 2026-11-26
---

## What AQL inspection is

Checking every garment in a large order takes too long and costs too much. AQL inspection checks a random sample instead, and uses statistics to judge the whole lot from it.

Two numbers drive the result:

- **Sample size.** How many garments are pulled at random. It depends on the size of the order.
- **Acceptance quality limit.** How many defects are allowed in that sample before the lot fails.

The method comes from ISO 2859-1. Its third edition was published in January 2026 and replaced the 1999 edition. It adds skip-lot sampling and updated guidance, and the familiar single sampling tables are still how most clothing inspections are planned. Check the current edition for any changes that matter to your contract.

## How the AQL sampling table works

Reading an AQL sampling table takes three steps.

1. **Find the lot size.** Count the garments in the order or shipment.
2. **Find the code letter.** At general inspection level II, each lot size range has a letter.
3. **Read the sample size and limits.** The letter gives the sample size. The AQL column gives the accept and reject numbers.

### Sample sizes and limits at inspection level II

This table covers the lot sizes most clothing orders fall into. Ac means the most defects that still pass. Re means the number that fails the lot.

| Lot size (garments) | Code | Sample size | AQL 1.0 Ac / Re | AQL 2.5 Ac / Re | AQL 4.0 Ac / Re |
| --- | --- | --- | --- | --- | --- |
| 151 to 280 | G | 32 | 1 / 2 | 2 / 3 | 3 / 4 |
| 281 to 500 | H | 50 | 1 / 2 | 3 / 4 | 5 / 6 |
| 501 to 1,200 | J | 80 | 2 / 3 | 5 / 6 | 7 / 8 |
| 1,201 to 3,200 | K | 125 | 3 / 4 | 7 / 8 | 10 / 11 |
| 3,201 to 10,000 | L | 200 | 5 / 6 | 10 / 11 | 14 / 15 |
| 10,001 to 35,000 | M | 315 | 7 / 8 | 14 / 15 | 21 / 22 |

Values follow the single sampling plans for normal inspection in ISO 2859-1. Your inspection company may use slightly different plans, so agree them in writing.

### A worked example

A buyer orders 2,000 hoodies. That lot falls in 1,201 to 3,200, code K, so the inspector pulls 125 hoodies at random.

- At AQL 2.5 for major defects, up to 7 major defects pass. 8 or more fail the lot.
- At AQL 4.0 for minor defects, up to 10 minor defects pass. 11 or more fail.
- Any critical defect fails the lot.

Major and minor defects are counted separately. Passing on minor defects does not save a lot that fails on major ones.

## Critical, major and minor defects

Every defect found in an AQL inspection is sorted into one of three classes. Agree the list with your factory before production.

| Class | Meaning | Clothing examples | Usual limit |
| --- | --- | --- | --- |
| Critical | Unsafe, illegal or breaks a legal rule | Broken needle in a garment, loose small parts on kidswear, missing care label where the law requires one | Zero |
| Major | A shopper would likely return it | Open seam, hole, wrong size label, stain that will not wash out, measurement out of tolerance | AQL 2.5 |
| Minor | Visible but does not stop sale | Loose thread end, small uneven stitch, slight crease from packing | AQL 4.0 |

Write down where the line sits between major and minor for your product. A slightly crooked logo might be minor on a tee and major on a tailored shirt.

## AQL 2.5 versus other levels

AQL 2.5 is the most common level for major defects on fashion and basics. It balances cost and risk for goods sold in normal retail.

- **AQL 1.0** is stricter. It suits expensive pieces, safety items and brands with low tolerance for returns.
- **AQL 2.5** is the everyday standard for major defects in clothing.
- **AQL 4.0** is common for minor defects, and sometimes used for major defects on low-cost promotional goods.

A lower number is stricter. Moving from 2.5 to 1.0 cuts the defects allowed in the same sample by more than half.

## When the AQL inspection happens

The final AQL inspection usually happens when at least 80% of the order is finished and packed. Inspecting earlier misses faults in the last pieces. Inspecting after cartons are sealed makes repairs slow.

Good factories also check during production, so the final inspection is a confirmation, not the first time anyone looks. Inline checks catch problems while they are cheap to fix.

## What the inspector checks

A full AQL inspection on clothing usually covers:

- **Quantity and packing.** Carton count, carton marks, bags, folding and barcodes.
- **Workmanship.** Seams, stitching, holes, stains and shade, sorted into the defect classes.
- **Measurements.** A few pieces per size measured against the size chart and tolerance.
- **Labels and trims.** Brand, size and care labels, zips, buttons and tags.
- **Function.** Zips run, snaps close, buttons hold.
- **Colour.** Garments compared with the approved standard.

## How to read the result

The report ends with a pass or fail for each defect class.

- **Pass.** All classes stayed within their limits. The lot can ship.
- **Fail.** At least one class went over its limit. The factory sorts the full lot, fixes faults and asks for a re-inspection.
- **Pending.** Something needs the buyer's decision, such as a shade question or a missing document.

Read the photos and the defect list, not just the result. A pass with the same major defect repeated many times still points to a problem worth fixing on the next order.


To decide who should run these checks, read our guide to [in-house QC vs third-party inspection](/in-house-qc-vs-third-party-inspection-vs-no-inspection/).

## Where SDF Clothing fits

Every order we produce gets a final random AQL inspection at {{aql}} by our own quality team, plus fabric checks and inline inspection. Our [garment quality inspection](/quality-inspection-service/) page shows each stage. You are also welcome to send your own inspector before shipment. Orders start at {{moq}} {{moqUnit}}, and bulk takes {{bulkDays}} days after sample approval.
