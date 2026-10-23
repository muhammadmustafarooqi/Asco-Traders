import type { Metadata } from 'next';
import { AboutHero } from '@/components/AboutHero';
import { AboutStory } from '@/components/AboutStory';
import { StayUpdated } from '@/components/StayUpdated';
import { GlowDivider } from '@/components/GlowDivider';

export const metadata: Metadata = {
  title: 'About Us | ASCO Innovative Technologies',
  description:
    'Learn about ASCO Innovative Technologies, Pakistan’s premier manufacturer and distributor of direct mains LED rope lights, neon flex, and modern architectural lighting systems.',
};

export default function AboutPage() {
  return (
    <>
      {/* 1. About Hero with about-asco-page.webp */}
      <AboutHero />

      {/* Decorative glowing rope-light divider */}
      <GlowDivider />

      {/* 2. Our Story, Stats, Mission, Vision & Values with futuristic neon background */}
      <AboutStory />

      {/* Decorative glowing rope-light divider */}
      <GlowDivider />

      {/* 3. Call to Action Banner */}
      <section
        aria-label="Call to Action - Partner with ASCO"
        className="relative w-full w-screen max-w-[100vw] py-12 sm:py-16 lg:py-20 bg-[#000613] overflow-hidden"
      >
        {/* Ambient radial glow behind card */}
        <div
          className="absolute inset-0 pointer-events-none opacity-35"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(6, 161, 255, 0.22) 0%, transparent 75%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <StayUpdated variant="cta" />
        </div>
      </section>
    </>
  );
}
