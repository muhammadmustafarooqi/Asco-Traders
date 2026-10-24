import { Gem, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { PageHero, type HeroFeature } from '@/components/PageHero';
import heroImage from '@/public/asco_separate_images_webp/modern_house_blue_glow.webp';

const HIGHLIGHTS: HeroFeature[] = [
  { icon: ShieldCheck, lines: ['100+ Projects', 'Completed'] },
  { icon: Zap, lines: ['220V Direct', 'Mains Ready'] },
  { icon: Gem, lines: ['IP67 Outdoor', 'Weatherproof'] },
  { icon: Sparkles, lines: ['Custom Lux', 'Engineering'] },
];

export function GalleryHero() {
  return (
    <PageHero
      id="gallery-hero-heading"
      image={heroImage}
      imageAlt="Modern luxury villa illuminated with ASCO LED linear architectural lighting"
      imagePosition="85% center"
      imageShift="6%"
      eyebrow="PROJECT GALLERY"
      heading={
        <>
          Lighting That <span className="text-accent">Transforms</span>
          <br />
          Every Space
        </>
      }
      subtext="Explore our curated portfolio of completed architectural installations across Pakistan. From luxury residential facades and ambient cove living spaces to commercial corridors and outdoor landscape pergolas."
      cta={{ label: 'View Installations', href: '#gallery-showcase', icon: 'arrow-down' }}
      features={HIGHLIGHTS}
    />
  );
}

export default GalleryHero;