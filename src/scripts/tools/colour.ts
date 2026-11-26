/**
 * Colour maths for the colour converter and delta E calculator.
 * sRGB (D65) to CIELAB, and colour differences ΔE*ab (1976), CIEDE2000 and CMC (l:c).
 */

export interface Rgb { r: number; g: number; b: number }
export interface Lab { L: number; a: number; b: number }

export function hexToRgb(hex: string): Rgb | null {
  const m = hex.trim().replace(/^#/, '');
  const full = /^[0-9a-f]{3}$/i.test(m) ? m.split('').map((c) => c + c).join('') : m;
  if (!/^[0-9a-f]{6}$/i.test(full)) return null;
  return { r: parseInt(full.slice(0, 2), 16), g: parseInt(full.slice(2, 4), 16), b: parseInt(full.slice(4, 6), 16) };
}

export function rgbToHex({ r, g, b }: Rgb): string {
  return `#${[r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase()}`;
}

export function rgbToCmyk({ r, g, b }: Rgb): [number, number, number, number] {
  const [rr, gg, bb] = [r / 255, g / 255, b / 255];
  const k = 1 - Math.max(rr, gg, bb);
  if (k >= 1) return [0, 0, 0, 100];
  return [(1 - rr - k) / (1 - k), (1 - gg - k) / (1 - k), (1 - bb - k) / (1 - k), k].map((v) => v * 100) as [number, number, number, number];
}

export function rgbToHsl({ r, g, b }: Rgb): [number, number, number] {
  const [rr, gg, bb] = [r / 255, g / 255, b / 255];
  const max = Math.max(rr, gg, bb);
  const min = Math.min(rr, gg, bb);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l * 100];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = max === rr ? (gg - bb) / d + (gg < bb ? 6 : 0) : max === gg ? (bb - rr) / d + 2 : (rr - gg) / d + 4;
  h *= 60;
  return [h, s * 100, l * 100];
}

const toLinear = (c: number): number => {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};

export function rgbToLab({ r, g, b }: Rgb): Lab {
  const [R, G, B] = [toLinear(r), toLinear(g), toLinear(b)];
  const X = (0.4124564 * R + 0.3575761 * G + 0.1804375 * B) / 0.95047;
  const Y = 0.2126729 * R + 0.7151522 * G + 0.072175 * B;
  const Z = (0.0193339 * R + 0.119192 * G + 0.9503041 * B) / 1.08883;
  const f = (t: number): number => (t > 216 / 24389 ? Math.cbrt(t) : (24389 / 27 * t + 16) / 116);
  const [fx, fy, fz] = [f(X), f(Y), f(Z)];
  return { L: 116 * fy - 16, a: 500 * (fx - fy), b: 200 * (fy - fz) };
}

const rad = (deg: number): number => (deg * Math.PI) / 180;
const deg = (r: number): number => (r * 180) / Math.PI;

export function deltaE76(p: Lab, q: Lab): number {
  return Math.hypot(p.L - q.L, p.a - q.a, p.b - q.b);
}

export function deltaE2000(p: Lab, q: Lab): number {
  const C1 = Math.hypot(p.a, p.b);
  const C2 = Math.hypot(q.a, q.b);
  const Cbar = (C1 + C2) / 2;
  const G = 0.5 * (1 - Math.sqrt(Cbar ** 7 / (Cbar ** 7 + 25 ** 7)));
  const a1 = (1 + G) * p.a;
  const a2 = (1 + G) * q.a;
  const C1p = Math.hypot(a1, p.b);
  const C2p = Math.hypot(a2, q.b);
  const hue = (b: number, a: number): number => {
    if (a === 0 && b === 0) return 0;
    const h = deg(Math.atan2(b, a));
    return h >= 0 ? h : h + 360;
  };
  const h1 = hue(p.b, a1);
  const h2 = hue(q.b, a2);
  const dL = q.L - p.L;
  const dC = C2p - C1p;
  let dh = 0;
  if (C1p * C2p !== 0) {
    dh = h2 - h1;
    if (dh > 180) dh -= 360;
    else if (dh < -180) dh += 360;
  }
  const dH = 2 * Math.sqrt(C1p * C2p) * Math.sin(rad(dh / 2));
  const Lbar = (p.L + q.L) / 2;
  const Cbarp = (C1p + C2p) / 2;
  let hbar = h1 + h2;
  if (C1p * C2p !== 0) {
    if (Math.abs(h1 - h2) <= 180) hbar = (h1 + h2) / 2;
    else hbar = h1 + h2 < 360 ? (h1 + h2 + 360) / 2 : (h1 + h2 - 360) / 2;
  }
  const T = 1 - 0.17 * Math.cos(rad(hbar - 30)) + 0.24 * Math.cos(rad(2 * hbar)) + 0.32 * Math.cos(rad(3 * hbar + 6)) - 0.2 * Math.cos(rad(4 * hbar - 63));
  const dTheta = 30 * Math.exp(-(((hbar - 275) / 25) ** 2));
  const Rc = 2 * Math.sqrt(Cbarp ** 7 / (Cbarp ** 7 + 25 ** 7));
  const Sl = 1 + (0.015 * (Lbar - 50) ** 2) / Math.sqrt(20 + (Lbar - 50) ** 2);
  const Sc = 1 + 0.045 * Cbarp;
  const Sh = 1 + 0.015 * Cbarp * T;
  const Rt = -Math.sin(rad(2 * dTheta)) * Rc;
  return Math.sqrt((dL / Sl) ** 2 + (dC / Sc) ** 2 + (dH / Sh) ** 2 + Rt * (dC / Sc) * (dH / Sh));
}

export function deltaECMC(standard: Lab, sample: Lab, l = 2, c = 1): number {
  const C1 = Math.hypot(standard.a, standard.b);
  const C2 = Math.hypot(sample.a, sample.b);
  const dL = standard.L - sample.L;
  const dC = C1 - C2;
  const da = standard.a - sample.a;
  const db = standard.b - sample.b;
  const dH2 = Math.max(0, da * da + db * db - dC * dC);
  let H = deg(Math.atan2(standard.b, standard.a));
  if (H < 0) H += 360;
  const F = Math.sqrt(C1 ** 4 / (C1 ** 4 + 1900));
  const T = H >= 164 && H <= 345 ? 0.56 + Math.abs(0.2 * Math.cos(rad(H + 168))) : 0.36 + Math.abs(0.4 * Math.cos(rad(H + 35)));
  const Sl = standard.L < 16 ? 0.511 : (0.040975 * standard.L) / (1 + 0.01765 * standard.L);
  const Sc = (0.0638 * C1) / (1 + 0.0131 * C1) + 0.638;
  const Sh = Sc * (F * T + 1 - F);
  return Math.sqrt((dL / (l * Sl)) ** 2 + (dC / (c * Sc)) ** 2 + dH2 / (Sh * Sh));
}
