import Link from 'next/link';
import { Gem, ShieldCheck, UserCog, Zap } from 'lucide-react';
import { PageHero, type HeroFeature } from '@/components/PageHero';
import heroImage from '@/public/asco_separate_images_webp/about/about-asco-page.webp';

const FEATURES: HeroFeature[] = [
  { icon: ShieldCheck, lines: ['Premium', 'Quality'] },
  { icon: Zap, lines: ['Energy', 'Efficient'] },
  { icon: Gem, lines: ['Durable &', 'Reliable'] },
  { icon: UserCog, lines: ['Expert', 'Support'] },
];

export function AboutHero() {
  return (
    <PageHero
      id="about-hero-heading"
      image={heroImage}
      imageAlt="ASCO Innovative Technologies headquarters and architectural LED lighting facility illuminated at night"
      imagePosition="right center"
      eyebrow="ABOUT ASCO"
      eyebrowStyle="lines"
      srBreadcrumb={
        <>
          <Link href="/">Home</Link> / <span>About Us</span>
        </>
      }
      heading={
        <>
          Innovative Technologies
          <br />
          for a <span className="text-accent">Brighter Tomorrow</span>
        </>
      }
      subtext={
        <>
          ASCO Innovative Technologies is a leading manufacturer and supplier of premium LED
          lighting solutions in Pakistan. We specialize in high-quality 220V rope lights,
          connectors, profile lights, accessories, and track lights &mdash; designed to bring
          innovation, durability and elegance to every space.
        </>
      }
      cta={{ label: 'Explore Our Products', href: '/products', icon: 'arrow-right' }}
      features={FEATURES}
    />
  );
}

export default AboutHero;