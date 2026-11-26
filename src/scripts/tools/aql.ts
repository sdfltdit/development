/**
 * Single sampling plans for normal inspection, ISO 2859-1 (Tables I and II-A).
 * Covers general inspection levels I, II and III and AQL 0.65 to 6.5.
 */

const LOT_LIMITS = [8, 15, 25, 50, 90, 150, 280, 500, 1200, 3200, 10000, 35000, 150000, 500000, Infinity];
const LETTERS = 'ABCDEFGHJKLMNPQR';
const LEVEL_CODES: Record<'I' | 'II' | 'III', string> = {
  I: 'AABCCDEFGHJKLMN',
  II: 'ABCDEFGHJKLMNPQ',
  III: 'BCDEFGHJKLMNPQR',
};
const SAMPLE_SIZES = [2, 3, 5, 8, 13, 20, 32, 50, 80, 125, 200, 315, 500, 800, 1250, 2000];
export const AQL_LEVELS = ['0.65', '1.0', '1.5', '2.5', '4.0', '6.5'] as const;
const ACCEPT = [0, 1, 2, 3, 5, 7, 10, 14, 21];

type Cell = { ac: number } | 'down' | 'up';

function cell(row: number, aqlIndex: number): Cell {
  const first = 5 - aqlIndex;
  if (row < first) return 'down';
  if (row === first) return { ac: 0 };
  if (row === first + 1) return 'up';
  if (row === first + 2) return 'down';
  const step = row - first - 2;
  if (step < ACCEPT.length) return { ac: ACCEPT[step] };
  return 'up';
}

export interface Plan {
  letter: string;
  sampleSize: number;
  accept: number;
  reject: number;
  fullInspection: boolean;
}

export function samplingPlan(lotSize: number, level: 'I' | 'II' | 'III', aql: (typeof AQL_LEVELS)[number]): Plan {
  const band = LOT_LIMITS.findIndex((limit) => lotSize <= limit);
  const letter = LEVEL_CODES[level][band];
  const aqlIndex = AQL_LEVELS.indexOf(aql);
  let row = LETTERS.indexOf(letter);
  let c = cell(row, aqlIndex);
  while (typeof c === 'string') {
    row += c === 'down' ? 1 : -1;
    c = cell(row, aqlIndex);
  }
  const sampleSize = SAMPLE_SIZES[row];
  return {
    letter,
    sampleSize: Math.min(sampleSize, lotSize),
    accept: c.ac,
    reject: c.ac + 1,
    fullInspection: sampleSize >= lotSize,
  };
}
