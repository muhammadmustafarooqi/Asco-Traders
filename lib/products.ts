import { siteConfig } from '@/lib/site';

export interface Item {
  id: string;
  name: string;
  image: string;
  variants?: string[];
  specs?: {
    [key: string]: string | undefined;
  };
  description?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  badge?: string;
  bullets: string[];
  features?: string[];
  items: Item[];
}

// Type aliases for seamless backwards-compatibility across the app
export type Product = Category;

export const productCategories = [
  'All Products',
  'Rope Light',
  'Connectors',
  'Profile Lights',
  'Accessories',
  'Track Lights',
] as const;

export type ProductCategoryName = (typeof productCategories)[number];

export const categories: Category[] = [
  {
    id: 'cat-01',
    slug: 'rope-light',
    name: 'Rope Light',
    tagline: '220V Direct Mains. Continuous Seamless Glow.',
    description:
      'Engineered for architectural facades, coves, and outdoor illumination with heavy-duty weather resistance.',
    // Category cover image: rope-02
    image: '/products/rope-light/rope-02.webp',
    alt: 'ASCO 220V Direct Mains LED Rope Light coil in warm golden glow',
    badge: 'Popular',
    bullets: [
      '220V Direct Mains Technology — No Bulky Driver Required',
      'Cuttable with Clear Distance Markings',
      'Anti-Yellowing UV-Resistant Silicone Encasement',
      'IP67 Outdoor Waterproof Rating',
    ],
    features: [
      'Connects directly to 220V mains supply for simple, cost-effective runs',
      'High lumen density with uniform dotless linear light',
      'Flexible silicone extrusion withstands extreme temperatures and UV exposure',
      'Ideal for residential rooflines, commercial building perimeters, and cove accents',
    ],
    items: [
      {
        id: 'rope-01',
        name: '2835 - 88D',
        // TODO confirm with client: "D" meaning in Rope Light (diode density per meter / LED count)
        image: '/products/rope-light/rope-01.webp',
        specs: {
          voltage: '220V AC',
          chip: 'SMD 2835',
          density: '88D',
        },
      },
      {
        id: 'rope-02',
        name: '2835 - 120D',
        // TODO confirm with client: "D" meaning in Rope Light (diode density per meter / LED count)
        image: '/products/rope-light/rope-02.webp',
        specs: {
          voltage: '220V AC',
          chip: 'SMD 2835',
          density: '120D',
        },
      },
      {
        id: 'rope-03',
        name: 'Multi - 48D',
        // TODO confirm with client: "D" meaning in Rope Light
        image: '/products/rope-light/rope-03.webp',
        specs: {
          voltage: '220V AC',
          density: '48D',
        },
      },
      {
        id: 'rope-04',
        name: 'RGB - 60D',
        // TODO confirm with client: "D" meaning in Rope Light
        image: '/products/rope-light/rope-04.webp',
        specs: {
          voltage: '220V AC',
          color: 'RGB Multicolor',
          density: '60D',
        },
      },
      {
        id: 'rope-05',
        name: 'COB - 288D',
        // TODO confirm with client: "D" meaning in Rope Light
        image: '/products/rope-light/rope-05.webp',
        specs: {
          voltage: '220V AC',
          chip: 'COB Continuous',
          density: '288D',
        },
      },
      {
        id: 'rope-06',
        name: 'FCOB',
        // TODO confirm with client: FCOB specifications and diode configuration
        image: '/products/rope-light/rope-06.webp',
        specs: {
          voltage: '220V AC',
          chip: 'FCOB Flexible',
        },
      },
    ],
  },
  {
    id: 'cat-02',
    slug: 'connectors',
    name: 'Connectors',
    tagline: 'Reliable Power. Secure Connections.',
    description:
      'Heavy-duty direct power cables, weatherproof jointers, and smart RGB controllers for safe LED installations.',
    // Category cover image: conn-06
    image: '/products/connectors/conn-06.webp',
    alt: 'ASCO LED Power Connector and Remote Controller Unit',
    badge: 'Essential',
    bullets: [
      '2A and 4A Heavy-Duty Current Capacity',
      'Plug-and-Play Quick Connection Pins',
      'RF Remote Control Options for RGB Tuning',
      'Weatherproof Sealed Enclosures for Outdoor Durability',
    ],
    features: [
      'Engineered with reinforced copper wiring for minimal voltage drop',
      'Flame-retardant industrial casing protects against electrical surges',
      'Seamless compatibility with ASCO 220V rope lights and flex strips',
      'Available in standard, heavy-duty, and multi-function RGB configurations',
    ],
    items: [
      {
        id: 'conn-01',
        name: '2A Direct',
        image: '/products/connectors/conn-01.webp',
        specs: {
          amperage: '2A',
          type: 'Direct Mains Plug',
        },
      },
      {
        id: 'conn-02',
        name: '2A',
        image: '/products/connectors/conn-02.webp',
        specs: {
          amperage: '2A',
          type: 'Power Connector',
        },
      },
      {
        id: 'conn-03',
        name: '2A Heavy',
        image: '/products/connectors/conn-03.webp',
        specs: {
          amperage: '2A Heavy Duty',
          type: 'Weatherproof Controller',
        },
      },
      {
        id: 'conn-04',
        name: '4A Heavy',
        image: '/products/connectors/conn-04.webp',
        specs: {
          amperage: '4A Heavy Duty',
          type: 'High-Capacity Power Controller',
        },
      },
      {
        id: 'conn-05',
        name: 'RGB Connector',
        image: '/products/connectors/conn-05.webp',
        specs: {
          type: 'Basic RGB Connector',
        },
      },
      {
        id: 'conn-06',
        name: 'RGB Remote',
        image: '/products/connectors/conn-06.webp',
        specs: {
          control: 'Wireless RF Remote',
          type: 'RGB Controller with Handheld Remote',
        },
      },
      {
        id: 'conn-07',
        name: 'RGB Remote Heavy',
        image: '/products/connectors/conn-07.webp',
        specs: {
          control: 'Heavy RF Remote',
          type: 'High-Power RGB Controller & Amplifier',
        },
      },
      {
        id: 'conn-08',
        name: 'Jointer',
        image: '/products/connectors/conn-08.webp',
        specs: {
          type: 'Inline Waterproof Jointer Connector',
        },
      },
    ],
  },
  {
    id: 'cat-03',
    slug: 'profile-lights',
    name: 'Profile Lights',
    tagline: 'Architectural Aluminium Channels. Flawless Diffusion.',
    description:
      'Precision extruded aluminium profiles for recessed, surface, and corner installations with dotless diffusion.',
    // Category cover image: prof-06
    image: '/products/profile-lights/prof-06.webp',
    alt: 'ASCO Architectural Aluminium LED Profile Light Channels',
    badge: 'Architect Choice',
    bullets: [
      'Aviation-Grade Anodized 6063 Aluminium Heat-Sinking',
      'Frosted Opal Diffuser with >85% Light Transmittance',
      'Collar (Flanged / Trim) & Non-Collar (Trimless) Profiles',
      'Sizes Ranging from Slim 10mm to Architectural 50mm',
    ],
    features: [
      'Provides superior thermal management to maximize LED lifespan',
      'Eliminates visible diode hot spots for uniform continuous light lines',
      'Includes aluminium end-caps and stainless mounting clips',
      'Suitable for drywall ceilings, cabinetry, wardrobes, steps, and feature walls',
    ],
    items: [
      {
        id: 'prof-01',
        name: '10mm Collar',
        // TODO confirm with client: Collar / Non-Collar naming convention
        image: '/products/profile-lights/prof-01.webp',
        specs: {
          width: '10mm',
          style: 'Collar (Flanged)',
        },
      },
      {
        id: 'prof-02',
        name: '10mm Non Collar',
        // TODO confirm with client: Collar / Non-Collar naming convention
        image: '/products/profile-lights/prof-02.webp',
        specs: {
          width: '10mm',
          style: 'Non-Collar (Trimless / Surface)',
        },
      },
      {
        id: 'prof-03',
        name: '16mm Corner',
        image: '/products/profile-lights/prof-03.webp',
        specs: {
          width: '16mm',
          style: 'Corner 90° Angled Profile',
        },
      },
      {
        id: 'prof-04',
        name: '17mm Collar',
        // TODO confirm with client: Collar / Non-Collar naming convention
        image: '/products/profile-lights/prof-04.webp',
        specs: {
          width: '17mm',
          style: 'Collar (Flanged)',
        },
      },
      {
        id: 'prof-05',
        name: '17mm Non Collar',
        // TODO confirm with client: Collar / Non-Collar naming convention
        image: '/products/profile-lights/prof-05.webp',
        specs: {
          width: '17mm',
          style: 'Non-Collar (Trimless / Surface)',
        },
      },
      {
        id: 'prof-06',
        name: '23mm Collar',
        // TODO confirm with client: Collar / Non-Collar naming convention
        image: '/products/profile-lights/prof-06.webp',
        specs: {
          width: '23mm',
          style: 'Collar (Flanged)',
        },
      },
      {
        id: 'prof-07',
        name: '23mm Non Collar',
        // TODO confirm with client: Collar / Non-Collar naming convention
        image: '/products/profile-lights/prof-07.webp',
        specs: {
          width: '23mm',
          style: 'Non-Collar (Trimless / Surface)',
        },
      },
      {
        id: 'prof-08',
        name: '40mm Collar',
        // TODO confirm with client: Collar / Non-Collar naming convention
        image: '/products/profile-lights/prof-08.webp',
        specs: {
          width: '40mm',
          style: 'Collar (Flanged)',
        },
      },
      {
        id: 'prof-09',
        name: '40mm Non Collar',
        // TODO confirm with client: Collar / Non-Collar naming convention
        image: '/products/profile-lights/prof-09.webp',
        specs: {
          width: '40mm',
          style: 'Non-Collar (Trimless / Surface)',
        },
      },
      {
        id: 'prof-10',
        name: '50mm Collar',
        // TODO confirm with client: the 50mm size and Collar / Non-Collar naming convention
        image: '/products/profile-lights/prof-10.webp',
        specs: {
          width: '50mm',
          style: 'Collar (Flanged)',
        },
      },
      {
        id: 'prof-11',
        name: '50mm Non Collar',
        // TODO confirm with client: the 50mm size and Collar / Non-Collar naming convention
        image: '/products/profile-lights/prof-11.webp',
        specs: {
          width: '50mm',
          style: 'Non-Collar (Trimless / Surface)',
        },
      },
    ],
  },
  {
    id: 'cat-04',
    slug: 'accessories',
    name: 'Accessories',
    tagline: 'Track Rails. Jointers. Precision Hardware.',
    description:
      'Essential structural components, corner jointers, track rails, and mounting hardware for professional installs.',
    // Category cover image: acc-01
    image: '/products/accessories/acc-01.webp',
    alt: 'ASCO LED Architectural Hardware and Jointers',
    badge: 'Hardware',
    bullets: [
      'Solid Extruded Magnetic Track Rails',
      'Right-Angle L-Jointers and Straight Conductive Connectors',
      'High-Tension Steel Mounting Spring Clips',
      'Flexible Extension Cables for Complex Geometries',
    ],
    features: [
      'Precision machined connections guarantee continuous electrical conductivity',
      'Clean recessed and surface mounting options for ceilings and walls',
      'Durable matte black and anodized architectural finishes',
      'Ensures rigid structural stability for long linear installations',
    ],
    items: [
      {
        id: 'acc-01',
        name: 'Corner Connector',
        image: '/products/accessories/acc-01.webp',
        specs: {
          type: 'Right-Angle Track Corner Connector',
        },
      },
      {
        id: 'acc-02',
        name: 'Small Track Connector',
        image: '/products/accessories/acc-02.webp',
        specs: {
          type: 'Inline Conductive Track Connector (Compact)',
        },
      },
      {
        id: 'acc-03',
        name: 'Large Track Connector',
        image: '/products/accessories/acc-03.webp',
        specs: {
          type: 'Heavy-Duty Conductive Track Connector',
        },
      },
      {
        id: 'acc-04',
        name: 'Track Rail Spring / Mounting Clip',
        image: '/products/accessories/acc-04.webp',
        specs: {
          material: 'Spring Steel',
          type: 'Recessed Ceiling Retaining Spring Bracket',
        },
      },
      {
        id: 'acc-05',
        name: 'Magnetic Track Rail',
        image: '/products/accessories/acc-05.webp',
        specs: {
          type: 'Low-Voltage Magnetic Track Channel Rail',
        },
      },
      {
        id: 'acc-06',
        name: 'Profile L Jointer',
        image: '/products/accessories/acc-06.webp',
        specs: {
          type: '90-Degree L-Shaped Profile Structural Jointer',
        },
      },
      {
        id: 'acc-07',
        name: 'Profile Connector Wire',
        image: '/products/accessories/acc-07.webp',
        specs: {
          type: 'Flexible Profile Jumper Wire / Cable',
        },
      },
      {
        id: 'acc-08',
        name: 'Profile Jointer',
        image: '/products/accessories/acc-08.webp',
        specs: {
          type: 'Straight Profile Mechanical Jointer Coupler',
        },
      },
    ],
  },
  {
    id: 'cat-05',
    slug: 'track-lights',
    name: 'Track Lights',
    tagline: 'Modern Magnetic Track. Modular Directional Precision.',
    description:
      'Low-voltage magnetic track lighting system featuring linear fixtures, grille spots, cylindrical spotlights, and audio.',
    // Category cover image: track-04
    image: '/products/track-lights/track-04.webp',
    alt: 'ASCO Architectural Low-Voltage Magnetic Tracklight System',
    badge: 'Flagship',
    bullets: [
      'Safe 48V Low-Voltage Magnetic Snap-In Technology',
      'Tool-Free Repositioning Along the Live Rail',
      'High-CRI > 90 True Color Rendering',
      'Wide Variety: Linear Flood, Grille Accent, Cylindrical Spots, and Speakers',
    ],
    features: [
      'Magnetic click-and-lock mechanism allows instant light repositioning at any time',
      'Minimalist dark architectural aesthetic integrates cleanly into luxury interiors',
      'Dedicated high-efficiency external power supplies for whisper-quiet performance',
      'Anti-glare deep reflectors provide visual comfort without light pollution',
    ],
    items: [
      {
        id: 'track-01',
        name: 'Linear Magnetic Track Light',
        // Linear Magnetic Track Light (12W, 24W, 36W share this image)
        image: '/products/track-lights/track-01.webp',
        variants: ['12W', '24W', '36W'],
        specs: {
          wattages: '12W / 24W / 36W',
          type: 'Linear Diffused Magnetic Track Light',
        },
      },
      {
        id: 'track-02',
        name: 'Surface-Mounted Linear Track Light',
        // Surface-Mounted Linear Track Light (12W, 18W, 24W share this image)
        image: '/products/track-lights/track-02.webp',
        variants: ['12W', '18W', '24W'],
        specs: {
          wattages: '12W / 18W / 24W',
          type: 'Surface-Mounted Linear Fixture',
        },
      },
      {
        id: 'track-03',
        name: 'Magnetic Grille Spotlight',
        // Magnetic Grille Spotlight (12W, 18W share this image)
        image: '/products/track-lights/track-03.webp',
        variants: ['12W', '18W'],
        specs: {
          wattages: '12W / 18W',
          type: 'Anti-Glare Grille Darklight Spotlight',
        },
      },
      {
        id: 'track-04',
        name: 'Cylindrical Magnetic Track Spotlight (20W Black)',
        image: '/products/track-lights/track-04.webp',
        variants: ['20W Black'],
        specs: {
          wattage: '20W',
          finish: 'Matte Architectural Black',
          type: 'Cylindrical Directional Spotlight',
        },
      },
      {
        id: 'track-05',
        name: 'Cylindrical Magnetic Track Spotlight (20W White)',
        image: '/products/track-lights/track-05.webp',
        variants: ['20W White'],
        specs: {
          wattage: '20W',
          finish: 'Matte Pure White',
          type: 'Cylindrical Directional Spotlight',
        },
      },
      {
        id: 'track-06',
        name: 'Magnetic Speaker',
        image: '/products/track-lights/track-06.webp',
        specs: {
          type: 'Magnetic Track Integrated Audio Speaker',
        },
      },
      {
        id: 'track-07',
        name: 'Full-Power Track Power Supply',
        // Full-Power Track Power Supply (100W, 200W share this image)
        image: '/products/track-lights/track-07.webp',
        variants: ['100W', '200W'],
        specs: {
          capacities: '100W / 200W',
          voltage: '48V Low-Voltage Output',
          type: 'Industrial Full-Power Track Driver',
        },
      },
    ],
  },
];

export const products = categories;

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const getProductBySlug = getCategoryBySlug;

export function getItemBySlugAndId(categorySlug: string, itemId: string): { category: Category; item: Item } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const item = category.items.find((i) => i.id === itemId);
  if (!item) return undefined;
  return { category, item };
}

export function getAllItems(): { category: Category; item: Item }[] {
  return categories.flatMap((category) =>
    category.items.map((item) => ({
      category,
      item,
    }))
  );
}

export function getRequestPriceWhatsAppUrl(
  itemNameOrOptions:
    | string
    | {
        itemName: string;
        categoryName: string;
        categorySlug?: string;
        itemId?: string;
        variant?: string;
      },
  categoryNameArg?: string,
  categorySlugArg?: string,
  itemIdArg?: string,
  variantArg?: string
): string {
  const number = siteConfig.whatsapp.primaryNumber;

  let itemName = '';
  let categoryName = '';
  let categorySlug = '';
  let itemId = '';
  let variant = '';

  if (typeof itemNameOrOptions === 'object') {
    itemName = itemNameOrOptions.itemName;
    categoryName = itemNameOrOptions.categoryName;
    categorySlug = itemNameOrOptions.categorySlug || '';
    itemId = itemNameOrOptions.itemId || '';
    variant = itemNameOrOptions.variant || '';
  } else {
    itemName = itemNameOrOptions;
    categoryName = categoryNameArg || '';
    categorySlug = categorySlugArg || '';
    itemId = itemIdArg || '';
    variant = variantArg || '';
  }

  // Attempt automatic lookup if slug or id are missing
  if ((!categorySlug || !itemId) && categoryName) {
    const foundCat = categories.find(
      (c) =>
        c.name.toLowerCase() === categoryName.toLowerCase() ||
        c.slug === categoryName.toLowerCase()
    );
    if (foundCat) {
      if (!categorySlug) categorySlug = foundCat.slug;
      if (!itemId) {
        const foundItem = foundCat.items.find(
          (i) => i.name === itemName || i.id === itemName
        );
        if (foundItem) itemId = foundItem.id;
      }
    }
  }

  const absoluteUrl =
    categorySlug && itemId
      ? `${siteConfig.siteUrl}/products/${categorySlug}/${itemId}`
      : categorySlug
      ? `${siteConfig.siteUrl}/products/${categorySlug}`
      : `${siteConfig.siteUrl}/products`;

  const categoryWithVariant = variant
    ? `${categoryName}, ${variant}`
    : categoryName;

  const text = `Hello ASCO Traders, I'm interested in ${itemName} (${categoryWithVariant}). Please share the price and availability.\n${absoluteUrl}`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
