import type { Metadata } from 'next';
import { GalleryHero } from '@/components/GalleryHero';
import { GalleryGrid } from '@/components/GalleryGrid';
import { GlowDivider } from '@/components/GlowDivider';
import { StayUpdated } from '@/components/StayUpdated';

export const metadata: Metadata = {
  title: 'Project Gallery | ASCO Innovative Technologies',
  description:
    'Discover ASCO’s completed architectural lighting installations across Pakistan — featuring luxury villa facades, contemporary ambient coves, pergolas, and commercial linear systems.',
  openGraph: {
    title: 'Project Gallery | ASCO Innovative Technologies',
    description:
      'Explore completed architectural LED lighting projects by ASCO Innovative Technologies across Pakistan.',
    url: 'https://www.ascotraders.com/gallery',
    images: ['/asco_separate_images_webp/modern_house_blue_glow.webp'],
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-[#000613] min-h-screen text-ink">
      {/* 1. Gallery Hero Section */}
      <GalleryHero />

      {/* Glowing Neon Rope-Light Divider */}
      <GlowDivider />

      {/* 2. Interactive Project Showcase Grid with Lightbox & Filters */}
      <GalleryGrid />

      {/* Glowing Neon Rope-Light Divider */}
      <GlowDivider />

      {/* 3. Call to Action Banner for Custom Architectural Inquiries */}
      <section
        aria-label="Call to Action - Discuss Your Lighting Project"
        className="relative w-full max-w-[100vw] py-12 sm:py-16 lg:py-20 bg-[#000613] overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(6, 161, 255, 0.22) 0%, transparent 75%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-[100vw] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <StayUpdated variant="cta" />
        </div>
      </section>
    </div>
  );
}
