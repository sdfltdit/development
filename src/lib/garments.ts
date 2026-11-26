/**
 * Labelled garment drawings for product pages. Each entry is a simple flat sketch with six callouts
 * that name the construction details covered on that product page. Rendered by infographics.ts
 * as /images/infographics/garment-<key>-dark.svg.
 */

export interface Callout {
  label: string;
  tx: number;
  ty: number;
  px: number;
  py: number;
  side: 'left' | 'right';
}

export interface GarmentSketch {
  title: string;
  noun: string;
  outline: string;
  details: string[];
  dashed?: string[];
  callouts: Callout[];
}

export const garments = {
  hoodie: {
    title: 'Parts of a custom hoodie',
    noun: 'hoodie',
    outline:
      'M262 118 Q262 62 320 58 Q378 62 378 118 L428 136 L476 300 L446 312 L412 214 L412 404 L228 404 L228 214 L194 312 L164 300 L212 136 Z',
    details: [
      'M272 120 Q320 152 368 120',
      'M264 330 L376 330 L392 382 L248 382 Z',
      'M228 404 L228 386 L412 386 L412 404',
      'M164 300 L170 286 L200 296 L194 312',
      'M476 300 L470 286 L440 296 L446 312',
    ],
    dashed: ['M306 140 L300 196', 'M334 140 L340 196'],
    callouts: [
      { label: 'Lined hood', tx: 205, ty: 78, px: 290, py: 84, side: 'left' },
      { label: 'Drawcords', tx: 205, ty: 176, px: 302, py: 180, side: 'left' },
      { label: 'Rib cuffs', tx: 150, ty: 340, px: 182, py: 304, side: 'left' },
      { label: 'Fleece body', tx: 486, ty: 230, px: 400, py: 250, side: 'right' },
      { label: 'Kangaroo pocket', tx: 486, ty: 340, px: 376, py: 352, side: 'right' },
      { label: 'Rib hem', tx: 486, ty: 410, px: 404, py: 396, side: 'right' },
    ],
  },
  joggers: {
    title: 'Parts of custom joggers',
    noun: 'joggers',
    outline: 'M236 70 L404 70 L414 120 L426 400 L352 400 L326 170 L314 170 L288 400 L214 400 L226 120 Z',
    details: ['M236 70 L404 70 L406 96 L234 96 Z', 'M214 400 L216 376 L288 376 L288 400', 'M352 400 L352 376 L424 376 L426 400', 'M240 104 Q256 150 248 180', 'M400 104 Q384 150 392 180'],
    dashed: ['M306 96 L300 130', 'M334 96 L340 130'],
    callouts: [
      { label: 'Elastic waistband', tx: 205, ty: 80, px: 240, py: 84, side: 'left' },
      { label: 'Side pockets', tx: 205, ty: 160, px: 246, py: 150, side: 'left' },
      { label: 'Rib ankle cuffs', tx: 205, ty: 392, px: 220, py: 388, side: 'left' },
      { label: 'Drawcord', tx: 470, ty: 118, px: 338, py: 120, side: 'right' },
      { label: 'Tapered leg', tx: 470, ty: 280, px: 408, py: 280, side: 'right' },
      { label: 'Crotch gusset', tx: 470, ty: 200, px: 320, py: 178, side: 'right' },
    ],
  },
  trousers: {
    title: 'Parts of custom trousers',
    noun: 'trousers',
    outline: 'M232 70 L408 70 L418 130 L432 404 L354 404 L328 176 L312 176 L286 404 L208 404 L222 130 Z',
    details: ['M232 70 L408 70 L409 92 L231 92 Z', 'M320 92 L320 170', 'M244 100 Q262 128 256 160', 'M396 100 Q378 128 384 160'],
    dashed: ['M330 98 L330 160', 'M262 70 L262 92', 'M378 70 L378 92'],
    callouts: [
      { label: 'Waistband', tx: 205, ty: 80, px: 236, py: 82, side: 'left' },
      { label: 'Slant pockets', tx: 205, ty: 150, px: 252, py: 140, side: 'left' },
      { label: 'Hem allowance', tx: 205, ty: 398, px: 226, py: 400, side: 'left' },
      { label: 'Belt loops', tx: 470, ty: 62, px: 378, py: 80, side: 'right' },
      { label: 'Zip fly', tx: 470, ty: 140, px: 330, py: 140, side: 'right' },
      { label: 'Straight leg', tx: 470, ty: 300, px: 414, py: 300, side: 'right' },
    ],
  },
  shorts: {
    title: 'Parts of custom shorts',
    noun: 'shorts',
    outline: 'M224 110 L416 110 L432 168 L452 330 L344 342 L324 230 L316 230 L296 342 L188 330 L208 168 Z',
    details: ['M224 110 L416 110 L418 140 L222 140 Z', 'M234 150 Q252 190 242 224', 'M406 150 Q388 190 398 224', 'M188 330 L190 314 L296 326 L296 342', 'M344 342 L344 326 L450 314 L452 330'],
    dashed: ['M306 140 L300 176', 'M334 140 L340 176'],
    callouts: [
      { label: 'Elastic waistband', tx: 205, ty: 102, px: 230, py: 122, side: 'left' },
      { label: 'Side pockets', tx: 180, ty: 200, px: 240, py: 196, side: 'left' },
      { label: 'Hem or split hem', tx: 180, ty: 352, px: 214, py: 326, side: 'left' },
      { label: 'Drawcord', tx: 470, ty: 166, px: 338, py: 166, side: 'right' },
      { label: 'Inseam length', tx: 470, ty: 280, px: 330, py: 280, side: 'right' },
      { label: 'Side seam', tx: 470, ty: 230, px: 440, py: 240, side: 'right' },
    ],
  },
  shirt: {
    title: 'Parts of a custom woven shirt',
    noun: 'shirt',
    outline: 'M276 92 L364 92 L420 112 L474 290 L442 302 L408 196 L408 410 L232 410 L232 196 L198 302 L166 290 L220 112 Z',
    details: ['M276 92 L320 132 L364 92', 'M276 92 L292 120 L320 132', 'M364 92 L348 120 L320 132', 'M320 132 L320 410', 'M352 168 L388 168 L388 210 L352 210 Z', 'M166 290 L172 272 L204 284 L198 302', 'M474 290 L468 272 L436 284 L442 302'],
    dashed: ['M232 150 Q320 166 408 150'],
    callouts: [
      { label: 'Collar and stand', tx: 205, ty: 86, px: 290, py: 104, side: 'left' },
      { label: 'Back yoke', tx: 205, ty: 164, px: 252, py: 156, side: 'left' },
      { label: 'Cuff and placket', tx: 150, ty: 330, px: 186, py: 290, side: 'left' },
      { label: 'Front placket', tx: 486, ty: 300, px: 324, py: 300, side: 'right' },
      { label: 'Chest pocket', tx: 486, ty: 196, px: 386, py: 190, side: 'right' },
      { label: 'Shirt-tail hem', tx: 486, ty: 404, px: 404, py: 404, side: 'right' },
    ],
  },
  jacket: {
    title: 'Parts of a custom bomber jacket',
    noun: 'jacket',
    outline: 'M268 90 L372 90 L428 112 L476 300 L446 312 L412 214 L412 392 L228 392 L228 214 L194 312 L164 300 L212 112 Z',
    details: ['M268 90 Q320 120 372 90', 'M320 116 L320 392', 'M228 368 L412 368', 'M250 300 L284 280', 'M390 300 L356 280', 'M186 196 L210 190 L216 216 L192 222 Z', 'M164 300 L170 284 L200 294 L194 312', 'M476 300 L470 284 L440 294 L446 312'],
    callouts: [
      { label: 'Rib collar', tx: 205, ty: 86, px: 284, py: 100, side: 'left' },
      { label: 'Sleeve pocket', tx: 150, ty: 176, px: 200, py: 206, side: 'left' },
      { label: 'Rib cuffs', tx: 150, ty: 340, px: 182, py: 304, side: 'left' },
      { label: 'Front zip', tx: 486, ty: 196, px: 320, py: 200, side: 'right' },
      { label: 'Welt pockets', tx: 486, ty: 290, px: 370, py: 290, side: 'right' },
      { label: 'Rib hem', tx: 486, ty: 392, px: 404, py: 380, side: 'right' },
    ],
  },
  activewear: {
    title: 'Parts of a custom training top',
    noun: 'training top',
    outline: 'M280 92 Q320 116 360 92 L424 120 L468 196 L436 220 L408 196 L404 404 L236 404 L232 196 L204 220 L172 196 L216 120 Z',
    details: ['M286 96 L240 200', 'M354 96 L400 200', 'M236 232 L262 232 L262 404', 'M404 232 L378 232 L378 404', 'M282 96 Q320 124 358 96'],
    dashed: ['M296 140 L344 140'],
    callouts: [
      { label: 'Bound neckline', tx: 205, ty: 80, px: 300, py: 108, side: 'left' },
      { label: 'Raglan sleeve', tx: 160, ty: 250, px: 254, py: 168, side: 'left' },
      { label: 'Mesh side panel', tx: 205, ty: 320, px: 249, py: 320, side: 'left' },
      { label: 'Reflective logo', tx: 470, ty: 120, px: 344, py: 140, side: 'right' },
      { label: 'Flatlock seams', tx: 480, ty: 236, px: 391, py: 180, side: 'right' },
      { label: 'Stretch knit', tx: 470, ty: 300, px: 340, py: 300, side: 'right' },
    ],
  },
  leggings: {
    title: 'Parts of custom leggings',
    noun: 'leggings',
    outline: 'M248 60 L392 60 L398 120 L404 410 L346 410 L326 190 L314 190 L294 410 L236 410 L242 120 Z',
    details: ['M248 60 L392 60 L394 100 L246 100 Z', 'M312 180 L320 168 L328 180 L320 196 Z', 'M372 150 L398 150 L400 222 L374 222 Z', 'M236 392 L294 392', 'M346 392 L404 392'],
    dashed: ['M320 100 L320 168', 'M314 196 L298 388', 'M326 196 L342 388'],
    callouts: [
      { label: 'High-rise waistband', tx: 205, ty: 84, px: 252, py: 80, side: 'left' },
      { label: 'Gusset', tx: 205, ty: 186, px: 314, py: 182, side: 'left' },
      { label: 'Flatlock inseam', tx: 205, ty: 300, px: 305, py: 300, side: 'left' },
      { label: 'Ankle hem', tx: 205, ty: 400, px: 262, py: 400, side: 'left' },
      { label: 'Phone pocket', tx: 450, ty: 186, px: 398, py: 186, side: 'right' },
      { label: 'Four-way stretch', tx: 450, ty: 320, px: 384, py: 320, side: 'right' },
    ],
  },
  tracksuit: {
    title: 'Parts of a custom track jacket',
    noun: 'track jacket',
    outline: 'M276 80 L364 80 L366 100 L428 116 L476 300 L446 312 L412 214 L412 396 L228 396 L228 214 L194 312 L164 300 L212 116 L274 100 Z',
    details: ['M274 100 L366 100', 'M320 100 L320 396', 'M228 378 L412 378', 'M262 300 L262 350', 'M378 300 L378 350', 'M164 300 L170 284 L200 294 L194 312', 'M476 300 L470 284 L440 294 L446 312'],
    dashed: ['M220 128 L178 290', 'M420 128 L462 290'],
    callouts: [
      { label: 'Stand collar', tx: 205, ty: 76, px: 288, py: 90, side: 'left' },
      { label: 'Sleeve stripes', tx: 150, ty: 210, px: 200, py: 210, side: 'left' },
      { label: 'Elastic cuffs', tx: 150, ty: 340, px: 182, py: 304, side: 'left' },
      { label: 'Full front zip', tx: 486, ty: 196, px: 320, py: 196, side: 'right' },
      { label: 'Zip pockets', tx: 486, ty: 326, px: 378, py: 326, side: 'right' },
      { label: 'Banded hem', tx: 486, ty: 396, px: 404, py: 388, side: 'right' },
    ],
  },
  streetwear: {
    title: 'Parts of an oversized streetwear tee',
    noun: 'oversized tee',
    outline: 'M276 84 Q320 112 364 84 L444 104 L486 236 L440 252 L420 196 L420 410 L220 410 L220 196 L200 252 L154 236 L196 104 Z',
    details: ['M270 86 Q320 122 370 86', 'M200 112 L222 196', 'M440 112 L418 196', 'M220 394 L420 394'],
    dashed: ['M262 150 L378 150 L378 300 L262 300 Z'],
    callouts: [
      { label: 'Heavy rib collar', tx: 205, ty: 76, px: 290, py: 98, side: 'left' },
      { label: 'Dropped shoulder', tx: 180, ty: 150, px: 210, py: 150, side: 'left' },
      { label: 'Wide sleeve', tx: 150, ty: 290, px: 180, py: 240, side: 'left' },
      { label: 'Large print area', tx: 490, ty: 166, px: 378, py: 200, side: 'right' },
      { label: 'Boxy body', tx: 490, ty: 300, px: 418, py: 300, side: 'right' },
      { label: 'Double-needle hem', tx: 205, ty: 400, px: 228, py: 398, side: 'left' },
    ],
  },
  dress: {
    title: 'Parts of a custom dress',
    noun: 'dress',
    outline: 'M284 70 Q320 96 356 70 L398 86 L420 150 L396 160 L382 128 L378 220 L440 410 L200 410 L262 220 L258 128 L244 160 L220 150 L242 86 Z',
    details: ['M284 70 Q320 102 356 70', 'M262 220 L378 220', 'M290 220 L296 170', 'M350 220 L344 170', 'M204 394 L436 394', 'M386 250 Q400 272 394 300'],
    dashed: ['M320 104 L320 220'],
    callouts: [
      { label: 'Neckline facing', tx: 205, ty: 70, px: 300, py: 88, side: 'left' },
      { label: 'Sleeve', tx: 190, ty: 150, px: 232, py: 140, side: 'left' },
      { label: 'Bust darts', tx: 205, ty: 212, px: 293, py: 194, side: 'left' },
      { label: 'Back zip', tx: 470, ty: 150, px: 320, py: 150, side: 'right' },
      { label: 'Waist seam', tx: 470, ty: 222, px: 378, py: 220, side: 'right' },
      { label: 'In-seam pocket', tx: 470, ty: 290, px: 392, py: 276, side: 'right' },
    ],
  },
  skirt: {
    title: 'Parts of a custom skirt',
    noun: 'skirt',
    outline: 'M246 90 L394 90 L398 130 L448 400 L192 400 L242 130 Z',
    details: ['M246 90 L394 90 L396 120 L244 120 Z', 'M290 120 L270 400', 'M350 120 L370 400', 'M196 384 L444 384', 'M384 150 Q398 180 392 212'],
    dashed: ['M398 120 L404 182'],
    callouts: [
      { label: 'Waistband', tx: 205, ty: 100, px: 250, py: 104, side: 'left' },
      { label: 'Pleats', tx: 205, ty: 262, px: 280, py: 262, side: 'left' },
      { label: 'Hem', tx: 180, ty: 396, px: 212, py: 392, side: 'left' },
      { label: 'Side zip', tx: 470, ty: 150, px: 401, py: 150, side: 'right' },
      { label: 'Side pocket', tx: 470, ty: 210, px: 390, py: 196, side: 'right' },
      { label: 'Lining', tx: 470, ty: 320, px: 420, py: 320, side: 'right' },
    ],
  },
  loungewear: {
    title: 'Parts of a custom pyjama top',
    noun: 'pyjama top',
    outline: 'M276 92 L364 92 L420 112 L474 290 L442 302 L408 196 L408 410 L232 410 L232 196 L198 302 L166 290 L220 112 Z',
    details: ['M320 170 L320 410', 'M262 172 L294 172 L294 208 L262 208 Z', 'M166 290 L172 272 L204 284 L198 302', 'M474 290 L468 272 L436 284 L442 302'],
    dashed: ['M276 92 L300 150 L320 170 L340 150 L364 92', 'M172 272 L204 284', 'M262 172 L294 172'],
    callouts: [
      { label: 'Contrast piping', tx: 205, ty: 96, px: 288, py: 122, side: 'left' },
      { label: 'Chest pocket', tx: 195, ty: 200, px: 262, py: 190, side: 'left' },
      { label: 'Piped cuffs', tx: 150, ty: 330, px: 188, py: 278, side: 'left' },
      { label: 'Notch collar', tx: 486, ty: 120, px: 352, py: 120, side: 'right' },
      { label: 'Button front', tx: 486, ty: 260, px: 320, py: 260, side: 'right' },
      { label: 'Relaxed fit', tx: 486, ty: 360, px: 404, py: 360, side: 'right' },
    ],
  },
  kids: {
    title: 'Parts of a custom baby bodysuit',
    noun: 'baby bodysuit',
    outline: 'M286 80 Q320 104 354 80 L404 96 L440 160 L412 176 L392 150 L392 300 Q392 360 352 380 L340 410 L300 410 L288 380 Q248 360 248 300 L248 150 L228 176 L200 160 L236 96 Z',
    details: ['M286 80 L304 112', 'M354 80 L336 112', 'M286 80 Q320 110 354 80', 'M300 398 L340 398', 'M200 160 L206 148 L234 162 L228 176', 'M440 160 L434 148 L406 162 L412 176', 'M308 112 L332 112 L332 126 L308 126 Z'],
    dashed: ['M288 380 Q270 370 256 340', 'M352 380 Q370 370 384 340'],
    callouts: [
      { label: 'Envelope neck', tx: 205, ty: 76, px: 296, py: 96, side: 'left' },
      { label: 'Soft sleeve band', tx: 180, ty: 210, px: 218, py: 168, side: 'left' },
      { label: 'Flat seams', tx: 205, ty: 280, px: 248, py: 260, side: 'left' },
      { label: 'Printed label', tx: 470, ty: 112, px: 332, py: 120, side: 'right' },
      { label: 'Leg binding', tx: 470, ty: 350, px: 380, py: 348, side: 'right' },
      { label: 'Snap closure', tx: 470, ty: 404, px: 340, py: 398, side: 'right' },
    ],
  },
  uniform: {
    title: 'Parts of a custom work shirt',
    noun: 'work shirt',
    outline: 'M276 92 L364 92 L420 112 L452 196 L414 210 L408 190 L408 410 L232 410 L232 190 L226 210 L188 196 L220 112 Z',
    details: ['M276 92 L320 132 L364 92', 'M276 92 L292 120 L320 132', 'M364 92 L348 120 L320 132', 'M320 132 L320 410', 'M250 170 L298 170 L298 226 L250 226 Z', 'M342 170 L390 170 L390 226 L342 226 Z', 'M250 170 L274 188 L298 170', 'M342 170 L366 188 L390 170'],
    dashed: ['M232 300 L408 300', 'M232 312 L408 312'],
    callouts: [
      { label: 'Work collar', tx: 205, ty: 92, px: 290, py: 108, side: 'left' },
      { label: 'Flap pockets', tx: 175, ty: 160, px: 252, py: 196, side: 'left' },
      { label: 'Bartacked corners', tx: 205, ty: 250, px: 250, py: 226, side: 'left' },
      { label: 'Embroidered logo', tx: 470, ty: 150, px: 366, py: 160, side: 'right' },
      { label: 'Reflective tape', tx: 470, ty: 306, px: 404, py: 306, side: 'right' },
      { label: 'Poly-cotton twill', tx: 470, ty: 380, px: 360, py: 380, side: 'right' },
    ],
  },
} satisfies Record<string, GarmentSketch>;

export type GarmentKey = keyof typeof garments;
