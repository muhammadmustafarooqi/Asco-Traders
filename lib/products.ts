export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  bullets: string[];
  specs: {
    voltage?: string;
    wattage?: string;
    cct?: string;
    ipRating?: string;
    dimensions?: string;
    warranty?: string;
  };
  features: string[];
  image: string;
  alt: string;
  badge?: string;
  inStock?: boolean;
}

export const productCategories = [
  'All Products',
  'Rope Lights',
  'Strip Lights',
  'Profile Lights',
  'Batten Lights',
  'Tracklights',
  'Accessories',
] as const;

export const products: Product[] = [
  {
    id: 'prod-01',
    name: 'Rope Light',
    slug: 'rope-light',
    category: 'Rope Lights',
    tagline: 'Flexible. Durable. Brilliant.',
    description:
      'Available in 220V direct mains and wireless options, with multiple colors and densities.',
    bullets: [
      '88 LED/m & 120 LED/m',
      '70m & 100m Reels',
      'White, Warm White, Red, Blue, Green, Pink, RGB',
    ],
    specs: {
      voltage: '220V - 240V AC Direct',
      wattage: '9W - 12W / meter',
      cct: 'White, Warm White, RGB, Single Colors',
      ipRating: 'IP67 Waterproof Outdoor',
      dimensions: '70m & 100m Reels',
      warranty: '2 Years Replacement',
    },
    features: [
      'Direct 220V plug-and-play without bulky drivers',
      'Anti-yellowing UV-resistant heavy silicone encasement',
      'Uniform dotless linear illumination',
      'Cuttable every 1 meter with clear markers',
    ],
    image: '/asco_separate_images_webp/05_rope_light.webp',
    alt: 'ASCO Premium LED Rope Light coil in warm glow',
    badge: 'Popular',
    inStock: true,
  },
  {
    id: 'prod-02',
    name: 'LED Strip Light',
    slug: 'strip-light',
    category: 'Strip Lights',
    tagline: 'Smart. Versatile. Powerful.',
    description:
      'Premium LED strip lights with 12V/24V options, 2835 & 5730 chip series, and remote control.',
    bullets: [
      '12V DC / 24V DC',
      '2835 & 5730 Chip Series',
      'Smart Brightness & Remote Control',
    ],
    specs: {
      voltage: '12V DC / 24V DC',
      wattage: '12W - 18W / meter',
      cct: 'Warm White, Cool White, Natural, RGB',
      ipRating: 'IP20 Indoor / IP65 Splashproof',
      dimensions: '5m / 10m Reels',
      warranty: '2 Years Warranty',
    },
    features: [
      'High-density SMD 2835 & 5730 chip series',
      'Smart brightness control with RF remote dimming',
      'High CRI > 90 for natural vibrant color rendering',
      'Heavy-duty 3M thermal backing for effortless installation',
    ],
    image: '/asco_separate_images_webp/03_led_strip_rgb.webp',
    alt: 'ASCO High-Performance RGB LED Strip Light',
    badge: 'Best Seller',
    inStock: true,
  },
  {
    id: 'prod-03',
    name: 'Profile Light',
    slug: 'profile-light',
    category: 'Profile Lights',
    tagline: 'Elegant Design. Seamless Lighting.',
    description:
      'Aluminium profile with 25mm diffuser collar and premium PVC profile options.',
    bullets: [
      'Aluminium Profile',
      'PVC / Plastic Profile',
    ],
    specs: {
      voltage: 'Houses 12V / 24V Strips',
      wattage: 'Up to 24W/m heat dissipation',
      cct: 'Diffused for any strip light CCT',
      ipRating: 'IP20 / IP54 options',
      dimensions: '2m & 3m Standard Lengths',
      warranty: '5 Years Structural',
    },
    features: [
      'Aviation-grade anodized aluminium profile body',
      '25mm collar frosted opal diffuser for dot-free light',
      'Recessed, surface mount, and trimless drywall options',
      'Includes aluminium end-caps and stainless mounting clips',
    ],
    image: '/asco_separate_images_webp/07_profile_light.webp',
    alt: 'ASCO Architectural Aluminium Profile Light channels',
    badge: 'Architect Choice',
    inStock: true,
  },
  {
    id: 'prod-04',
    name: 'LED Batten Light',
    slug: 'batten-light',
    category: 'Batten Lights',
    tagline: 'Bright Coverage. Modern Look.',
    description:
      'Ideal for homes, offices and commercial spaces.',
    bullets: [
      'Multiple Wattage Options',
      'High Lumen Output',
    ],
    specs: {
      voltage: '180V - 265V AC',
      wattage: '18W (2ft) / 36W (4ft) / 54W (5ft)',
      cct: '4000K Natural / 6500K Cool White',
      ipRating: 'IP20 / IP65 Waterproof variants',
      dimensions: '600mm / 1200mm / 1500mm',
      warranty: '2 Years Replacement',
    },
    features: [
      'Instant flicker-free startup with isolated driver',
      'High luminous efficiency > 110 lm/W',
      'Sleek modern profile replacing old fluorescent fixtures',
      'Linkable design for continuous row installations',
    ],
    image: '/asco_separate_images_webp/04_led_batten_light.webp',
    alt: 'ASCO Linear Commercial LED Batten Light fixtures',
    badge: 'Commercial',
    inStock: true,
  },
  {
    id: 'prod-05',
    name: 'Tracklight / Spotlight',
    slug: 'tracklight-spotlight',
    category: 'Tracklights',
    tagline: 'Focus on What Matters.',
    description:
      'Adjustable track lights in 10W, 20W, 30W options.',
    bullets: [
      '10W / 20W / 30W',
      'Adjustable Angle 360°',
    ],
    specs: {
      voltage: '220V - 240V AC',
      wattage: '10W / 20W / 30W COB',
      cct: '3000K Warm / 4000K Neutral / 6000K Cool',
      ipRating: 'IP20 Indoor Accent',
      dimensions: 'Precision Cylindrical Aluminum Body',
      warranty: '2 Years Full Warranty',
    },
    features: [
      'Full 360° horizontal rotation and 90° vertical tilt',
      'Deep anti-glare reflector with honeycomb lens',
      'Compatible with standard 2-wire & 3-wire track rails',
      'High-grade COB LED chip with CRI > 90',
    ],
    image: '/asco_separate_images_webp/09_tracklight_spotlight_multiple.webp',
    alt: 'ASCO Adjustable Directional Tracklight and Spotlight Fixtures',
    badge: 'Featured',
    inStock: true,
  },
  {
    id: 'prod-06',
    name: 'LED Accessories & Drivers',
    slug: 'accessories',
    category: 'Accessories',
    tagline: 'Reliable Power. Complete Control.',
    description:
      'Heavy-duty certified electronic power supplies, RF controllers, and mounting accessories.',
    bullets: [
      '12V & 24V Constant Voltage Drivers',
      'RF Smart Controllers & Dimmers',
      'Connectors, End Caps & Mounting Clips',
    ],
    specs: {
      voltage: 'Input: 180V-260V AC | Output: 12V / 24V DC',
      wattage: '60W to 400W Heavy Duty Options',
      cct: 'Driver / Module',
      ipRating: 'IP20 Rainproof / IP67 Fully Waterproof',
      dimensions: 'Slimline & Standard Industrial Enclosures',
      warranty: '2 Years Replacement',
    },
    features: [
      'Over-voltage, short-circuit, and thermal protection',
      'Silent operation without cooling fan noise',
      '100% burn-in tested for 24/7 commercial duty',
      'High power factor (PF > 0.95)',
    ],
    image: '/asco_separate_images_webp/20_accessories.webp',
    alt: 'ASCO LED Power Drivers, Connectors and Mounting Accessories',
    badge: 'Essential',
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
