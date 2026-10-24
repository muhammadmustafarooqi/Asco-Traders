import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// 5 categories with their exact item mappings
const CATEGORIES = [
  {
    slug: 'rope-light',
    items: [
      { id: 'rope-01', file: 'rope-01.webp' },
      { id: 'rope-02', file: 'rope-02.webp' },
      { id: 'rope-03', file: 'rope-03.webp' },
      { id: 'rope-04', file: 'rope-04.webp' },
      { id: 'rope-05', file: 'rope-05.webp' },
      { id: 'rope-06', file: 'rope-06.webp' },
    ],
  },
  {
    slug: 'connectors',
    items: [
      { id: 'conn-01', file: 'conn-01.webp' },
      { id: 'conn-02', file: 'conn-02.webp' },
      { id: 'conn-03', file: 'conn-03.webp' },
      { id: 'conn-04', file: 'conn-04.webp' },
      { id: 'conn-05', file: 'conn-05.webp' },
      { id: 'conn-06', file: 'conn-06.webp' },
      { id: 'conn-07', file: 'conn-07.webp' },
      { id: 'conn-08', file: 'conn-08.webp' },
    ],
  },
  {
    slug: 'profile-lights',
    items: [
      { id: 'prof-01', file: 'prof-01.webp' },
      { id: 'prof-02', file: 'prof-02.webp' },
      { id: 'prof-03', file: 'prof-03.webp' },
      { id: 'prof-04', file: 'prof-04.webp' },
      { id: 'prof-05', file: 'prof-05.webp' },
      { id: 'prof-06', file: 'prof-06.webp' },
      { id: 'prof-07', file: 'prof-07.webp' },
      { id: 'prof-08', file: 'prof-08.webp' },
      { id: 'prof-09', file: 'prof-09.webp' },
      { id: 'prof-10', file: 'prof-10.webp' },
      { id: 'prof-11', file: 'prof-11.webp' },
    ],
  },
  {
    slug: 'accessories',
    items: [
      { id: 'acc-01', file: 'acc-01.webp' },
      { id: 'acc-02', file: 'acc-02.webp' },
      { id: 'acc-03', file: 'acc-03.webp' },
      { id: 'acc-04', file: 'acc-04.webp' },
      { id: 'acc-05', file: 'acc-05.webp' },
      { id: 'acc-06', file: 'acc-06.webp' },
      { id: 'acc-07', file: 'acc-07.webp' },
      { id: 'acc-08', file: 'acc-08.webp' },
    ],
  },
  {
    slug: 'track-lights',
    items: [
      { id: 'track-01', file: 'track-01.webp' },
      { id: 'track-02', file: 'track-02.webp' },
      { id: 'track-03', file: 'track-03.webp' },
      { id: 'track-04', file: 'track-04.webp' },
      { id: 'track-05', file: 'track-05.webp' },
      { id: 'track-06', file: 'track-06.webp' },
      { id: 'track-07', file: 'track-07.webp' },
    ],
  },
];

const OUTPUT_DIR = path.resolve('public', 'og');
const PRODUCTS_DIR = path.resolve('public', 'products');

const WIDTH = 1200;
const HEIGHT = 630;
const PRODUCT_CONTAIN_SIZE = 480; // centered in the 1200x630 canvas

// SVG template with navy #001A3D background and soft cyan radial glow
const BACKGROUND_SVG = Buffer.from(`
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cyanSpotlight" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#06A1FF" stop-opacity="0.35" />
      <stop offset="40%" stop-color="#3FCBF8" stop-opacity="0.18" />
      <stop offset="70%" stop-color="#001A3D" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#001A3D" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="cornerBorder" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3FCBF8" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#06A1FF" stop-opacity="0.1" />
    </linearGradient>
  </defs>
  <!-- Navy Canvas -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#001A3D" />
  <!-- Cyan Glow Circle -->
  <circle cx="${WIDTH / 2}" cy="${HEIGHT / 2}" r="380" fill="url(#cyanSpotlight)" />
  <!-- Outer subtle border frame -->
  <rect x="24" y="24" width="${WIDTH - 48}" height="${HEIGHT - 48}" rx="24" fill="none" stroke="url(#cornerBorder)" stroke-width="1.5" />
</svg>
`);

async function generateOGImages() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let count = 0;

  for (const cat of CATEGORIES) {
    for (const item of cat.items) {
      const srcPath = path.join(PRODUCTS_DIR, cat.slug, item.file);
      const outPath = path.join(OUTPUT_DIR, `${cat.slug}-${item.id}.jpg`);

      if (!fs.existsSync(srcPath)) {
        console.warn(`[WARN] Source image not found: ${srcPath}`);
        continue;
      }

      // Resize product image contained with transparent padding
      const resizedProduct = await sharp(srcPath)
        .resize(PRODUCT_CONTAIN_SIZE, PRODUCT_CONTAIN_SIZE, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer();

      // Center in canvas
      const left = Math.round((WIDTH - PRODUCT_CONTAIN_SIZE) / 2);
      const top = Math.round((HEIGHT - PRODUCT_CONTAIN_SIZE) / 2);

      // Composite onto background and save as JPEG quality 85
      await sharp(BACKGROUND_SVG)
        .composite([
          {
            input: resizedProduct,
            top,
            left,
          },
        ])
        .jpeg({ quality: 85 })
        .toFile(outPath);

      count++;
      console.log(`[OK] Generated: ${outPath}`);
    }
  }

  console.log(`\nSuccessfully generated ${count} OG images in ${OUTPUT_DIR}`);
}

generateOGImages().catch((err) => {
  console.error('[ERROR] Failed to generate OG images:', err);
  process.exit(1);
});
