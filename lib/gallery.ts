export interface GalleryProject {
  id: string;
  title: string;
  category:
    | 'Exterior Architecture'
    | 'Interior Spaces'
    | 'Outdoor & Landscapes'
    | 'Commercial & Corridors';
  location: string;
  image: string;
  alt: string;
  description: string;
  productUsed: string;
}

export const galleryCategories = [
  'All Projects',
  'Exterior Architecture',
  'Interior Spaces',
  'Outdoor & Landscapes',
  'Commercial & Corridors',
] as const;

export const galleryProjects: GalleryProject[] = [
  {
    id: 'proj-01',
    title: 'Modern Luxury Villa Facade',
    category: 'Exterior Architecture',
    location: 'DHA Phase 6, Lahore',
    image: '/asco_separate_images_webp/gallery_01_exterior_villa.webp',
    alt: 'Modern two-story architectural exterior with continuous linear roofline LED lighting',
    description:
      'High-efficiency 220V continuous rope light tracing crisp roofline contours with zero driver voltage drop.',
    productUsed: '220V Direct Mains Rope Light (Warm White)',
  },
  {
    id: 'proj-02',
    title: 'High-Ceiling Ambient Living Cove',
    category: 'Interior Spaces',
    location: 'Gulberg Greens, Islamabad',
    image: '/asco_separate_images_webp/gallery_02_interior_cove.webp',
    alt: 'Warm white ambient LED cove lighting in luxury open interior living space',
    description:
      'Seamless diffused cove illumination providing uniform, glare-free ambient brightness across double-height ceilings.',
    productUsed: 'High-Density 2835 LED Strip Light + 25mm Profile',
  },
  {
    id: 'proj-03',
    title: 'Architectural Pergola & Patio',
    category: 'Outdoor & Landscapes',
    location: 'Clifton, Karachi',
    image: '/asco_separate_images_webp/gallery_03_pergola_landscape.webp',
    alt: 'Outdoor garden pergola structure with integrated linear LED illumination',
    description:
      'IP67 waterproof silicone linear lighting integrated into timber pergola beams for all-weather outdoor elegance.',
    productUsed: 'IP67 Silicone Neon Flex & Rope Lights',
  },
  {
    id: 'proj-04',
    title: 'Minimalist Gallery Linear Corridor',
    category: 'Commercial & Corridors',
    location: 'F-7 Markaz, Islamabad',
    image: '/asco_separate_images_webp/gallery_04_linear_corridor.webp',
    alt: 'Modern architectural interior corridor with recessed ceiling linear LED lighting',
    description:
      'Continuous recessed aluminium profile channels delivering dotless architectural lines along gallery pathways.',
    productUsed: 'Recessed Aluminium Profile Channels + LED Strips',
  },
  {
    id: 'proj-05',
    title: 'Contemporary Residence Blue Horizon',
    category: 'Exterior Architecture',
    location: 'Bahria Town, Rawalpindi',
    image: '/asco_separate_images_webp/modern_house_blue_glow.webp',
    alt: 'Contemporary residence illuminated with vibrant blue accent lighting and warm interior glow',
    description:
      'Striking accentuation of structural elevations with vibrant blue LED architectural lighting and warm cove backlighting.',
    productUsed: '220V Rope Light (Blue & Warm White)',
  },
  {
    id: 'proj-06',
    title: 'Commercial HQ Night Facade',
    category: 'Commercial & Corridors',
    location: 'Industrial Area, Lahore',
    image: '/asco_separate_images_webp/about/about-asco-page.webp',
    alt: 'ASCO headquarters illuminated architectural facility at night with golden internal glow',
    description:
      'Heavy-duty commercial illumination highlighting corporate curtain walls and entrance portals with optical clarity.',
    productUsed: 'Linear Commercial Battens & Tracklight Spotlights',
  },
  {
    id: 'proj-07',
    title: 'Luxury Villa Garden Walkway',
    category: 'Outdoor & Landscapes',
    location: 'DHA Phase 5, Karachi',
    image: '/asco_separate_images_webp/19_exterior_landscape_lighting.webp',
    alt: 'Landscaped garden walkway illuminated with subtle low-glare LED accent lighting',
    description:
      'Low-glare pathway markers and low-voltage landscape lighting integrated into lush foliage and stone curbs.',
    productUsed: 'Outdoor Weatherproof LED Strip & Spotlights',
  },
  {
    id: 'proj-08',
    title: 'Executive Conference & Linear Ceiling',
    category: 'Interior Spaces',
    location: 'Blue Area, Islamabad',
    image: '/asco_separate_images_webp/17_interior_led_lighting.webp',
    alt: 'Executive corporate interior with custom geometric recessed profile light channels',
    description:
      'Geometric suspended profile fixtures designed to optimize working lux levels while preserving clean modern aesthetics.',
    productUsed: 'Custom Suspended Aluminium Profile Fixtures',
  },
];
