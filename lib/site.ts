export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: 'Facebook' | 'Instagram';
  url: string;
}

export interface TrustItem {
  id: string;
  label: string;
  icon: 'ShieldCheck' | 'Zap' | 'Clock' | 'Headphones';
}

export interface WhyChooseItem {
  id: string;
  title: string;
  icon: 'Zap' | 'Palette' | 'Sparkles' | 'ShieldCheck';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const siteConfig = {
  businessName: 'ASCO Innovative Technologies',
  brandName: 'Asco Traders',
  tagline: 'Lighting That Inspires',
  description:
    'ASCO Traders provides premium LED lighting solutions including Rope Lights, Strip Lights, Profile Lights, Batten Lights, and Tracklights in Pakistan.',
  url: 'https://www.ascotraders.com',
  location: 'Pakistan',
  email: 'ascolightingcompany@gmail.com',
  phones: [
    { display: '0300-4205422', tel: '+923004205422' },
    { display: '0300-4773337', tel: '+923004773337' },
  ],
  whatsapp: {
    primaryNumber: '923004205422',
    secondaryNumber: '923004773337',
    prefilledText: 'Hello ASCO, I would like to enquire about your LED lights.',
  },
  creditLine: 'Designed with ♥ for a Brighter Tomorrow',
  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ] satisfies NavLink[],
  socialLinks: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100087881238548',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ascoledropelight',
    },
  ] satisfies SocialLink[],
  footerLinks: {
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'Products', href: '/products' },
      { name: 'About', href: '/about' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Contact', href: '/contact' },
    ],
    productLinks: [
      { name: 'Rope Light', href: '/products' },
      { name: 'Strip Light', href: '/products' },
      { name: 'Profile Light', href: '/products' },
      { name: 'Batten Light', href: '/products' },
      { name: 'Tracklight / Spotlight', href: '/products' },
      { name: 'Accessories', href: '/products' },
    ],
  },
  trustItems: [
    { id: 'quality', label: 'Premium Quality', icon: 'ShieldCheck' },
    { id: 'efficiency', label: 'Energy Efficient', icon: 'Zap' },
    { id: 'durability', label: 'Durable & Reliable', icon: 'Clock' },
    { id: 'support', label: 'Expert Support', icon: 'Headphones' },
  ] satisfies TrustItem[],
  about: {
    eyebrow: 'ABOUT ASCO',
    heading: 'Innovative Technologies for a Brighter Tomorrow',
    paragraph:
      'ASCO Innovative Technologies is a leading manufacturer and supplier of premium LED lighting solutions in Pakistan. We specialize in high-quality 220V rope lights, LED strip lights, profile lights, batten lights, and tracklights — designed to bring innovation, durability and elegance to every space.',
    buttonText: 'Learn More About Us',
    buttonHref: '/about',
    image: '/asco_separate_images_webp/about-asco.webp',
    imageAlt: 'ASCO Innovative Technologies illuminated building facade with warm architectural LED lighting',
  },
  whyChoose: [
    {
      id: 'mains',
      title: '220V Direct Mains Technology',
      icon: 'Zap',
    },
    {
      id: 'colours',
      title: 'Wide Range of Colours',
      icon: 'Palette',
    },
    {
      id: 'energy',
      title: 'Smart Energy Saving',
      icon: 'Sparkles',
    },
    {
      id: 'quality',
      title: 'Premium Build Quality',
      icon: 'ShieldCheck',
    },
  ] satisfies WhyChooseItem[],
  gallery: [
    {
      id: 'exterior-villa',
      title: 'Exterior Architecture',
      category: 'Exterior Villa',
      image: '/asco_separate_images_webp/gallery_01_exterior_villa.webp',
      alt: 'Modern two-story architectural exterior with linear roofline LED lighting',
    },
    {
      id: 'interior-cove',
      title: 'Interior Ceiling',
      category: 'Living Space',
      image: '/asco_separate_images_webp/gallery_02_interior_cove.webp',
      alt: 'Warm white ambient LED cove lighting in luxury open interior living space',
    },
    {
      id: 'pergola-landscape',
      title: 'Outdoor Landscape',
      category: 'Pergola & Garden',
      image: '/asco_separate_images_webp/gallery_03_pergola_landscape.webp',
      alt: 'Outdoor garden pergola structure with integrated linear LED illumination',
    },
    {
      id: 'linear-corridor',
      title: 'Linear Corridor',
      category: 'Gallery Space',
      image: '/asco_separate_images_webp/gallery_04_linear_corridor.webp',
      alt: 'Modern architectural interior corridor with recessed ceiling linear LED lighting',
    },
  ] satisfies GalleryItem[],
  testimonials: [
    {
      id: 'ahmed-raza',
      name: 'Ahmed Raza',
      role: 'Contractor, Lahore',
      quote: "ASCO's rope lights are outstanding! Premium quality and excellent support.",
      avatar: '/asco_separate_images_webp/avatar_ahmed_raza.webp',
    },
    {
      id: 'sara-khan',
      name: 'Sara Khan',
      role: 'Interior Designer, Karachi',
      quote: 'The best LED lighting solutions in Pakistan. Highly recommended!',
      avatar: '/asco_separate_images_webp/avatar_sara_khan.webp',
    },
    {
      id: 'usman-tariq',
      name: 'Usman Tariq',
      role: 'Business Owner, Islamabad',
      quote: 'Reliable products, great service, and on-time delivery.',
      avatar: '/asco_separate_images_webp/avatar_usman_tariq.webp',
    },
    {
      id: 'hamza-sheikh',
      name: 'Hamza Sheikh',
      role: 'Architect, Rawalpindi',
      quote: 'Exceptional 220V rope lights with zero driver hassle. ASCO is our top recommendation for architectural facades.',
      avatar: '/asco_separate_images_webp/avatar_ahmed_raza.webp',
    },
  ] satisfies TestimonialItem[],
};

export function getWhatsAppUrl(
  phone: string = siteConfig.whatsapp.primaryNumber,
  text: string = siteConfig.whatsapp.prefilledText
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
