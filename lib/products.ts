export interface Product {
  name: string;
  slug: string;
  image: string;
  alt: string;
}

export const products: Product[] = [
  {
    name: 'Rope Light',
    slug: 'rope-light',
    image: '/asco_separate_images_webp/05_rope_light.webp',
    alt: 'ASCO Premium LED Rope Light coil in warm glow',
  },
  {
    name: 'Strip Light',
    slug: 'strip-light',
    image: '/asco_separate_images_webp/03_led_strip_rgb.webp',
    alt: 'ASCO High-Performance RGB LED Strip Light',
  },
  {
    name: 'Profile Light',
    slug: 'profile-light',
    image: '/asco_separate_images_webp/07_profile_light.webp',
    alt: 'ASCO Architectural Aluminium Profile Light channels',
  },
  {
    name: 'Batten Light',
    slug: 'batten-light',
    image: '/asco_separate_images_webp/04_led_batten_light.webp',
    alt: 'ASCO Linear Commercial LED Batten Light fixtures',
  },
  {
    name: 'Tracklight / Spotlight',
    slug: 'tracklight-spotlight',
    image: '/asco_separate_images_webp/09_tracklight_spotlight_multiple.webp',
    alt: 'ASCO Adjustable Directional Tracklight and Spotlight Fixtures',
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    image: '/asco_separate_images_webp/20_accessories.webp',
    alt: 'ASCO LED Power Drivers, Connectors and Mounting Accessories',
  },
];
