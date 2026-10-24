import { CheckCircle2, Gem, ShieldCheck, Zap } from 'lucide-react';
import { PageHero, type HeroFeature } from '@/components/PageHero';
import heroImage from '@/public/asco_separate_images_webp/futuristic_blue_ring_background.webp';

const FEATURES: HeroFeature[] = [
  { icon: ShieldCheck, lines: ['Direct 220V', 'Mains Ready'] },
  { icon: Zap, lines: ['High Lumen', 'Energy Saving'] },
  { icon: Gem, lines: ['IP67 Outdoor', 'Waterproof'] },
  { icon: CheckCircle2, lines: ['2 Years Full', 'Warranty'] },
];

export function ProductsHero() {
  return (
    <PageHero
      id="products-hero-heading"
      image={heroImage}
      imageAlt="ASCO futuristic architectural neon blue ring platform"
      imagePosition="right bottom"
      eyebrow="OUR COMPLETE PRODUCT RANGE"
      heading={
        <>
          Complete Range of <span className="text-accent">LED</span>
          <br />
          Lighting Solutions
        </>
      }
      subtext="Engineered for durability, optical clarity, and energy efficiency. Explore our premium 220V continuous rope lights, flexible RGB strips, architectural profile channels, commercial battens, and precision spotlights."
      cta={{ label: 'Explore Products', href: '#products-list-top', icon: 'arrow-down' }}
      features={FEATURES}
    />
  );
}

export default ProductsHero;