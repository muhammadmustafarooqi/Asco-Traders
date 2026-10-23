'use client';

import Image from 'next/image';
import { ArrowDown, CheckCircle2, Gem, ShieldCheck, Zap } from 'lucide-react';

const FEATURES = [
  { icon: ShieldCheck, lines: ['Direct 220V', 'Mains Ready'] },
  { icon: Zap, lines: ['High Lumen', 'Energy Saving'] },
  { icon: Gem, lines: ['IP67 Outdoor', 'Waterproof'] },
  { icon: CheckCircle2, lines: ['2 Years Full', 'Warranty'] },
];

export function ProductsHero() {
  return (
    <section
      aria-labelledby="products-hero-heading"
      // Strictly 100vh max on desktop screens so no scrolling is required and features never get cut off
      className="relative w-full max-w-[100vw] min-h-[560px] lg:h-[100dvh] lg:max-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#000613] pt-24 pb-6 sm:pt-26 sm:pb-8 lg:pt-[76px] lg:pb-[2.5dvh]"
    >
      {/* 1. Background Image correctly anchored at bottom-right so the ring is fully fitted */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Image
          src="/asco_separate_images_webp/futuristic_blue_ring_background.webp"
          alt="ASCO Futuristic architectural neon blue ring platform"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-bottom md:object-[right_bottom] lg:object-[right_bottom]"
        />

        {/* Left dark gradient behind text for crisp contrast while letting the ring shine */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 6, 19, 0.98) 0%, rgba(0, 6, 19, 0.92) 28%, rgba(0, 6, 19, 0.65) 44%, rgba(0, 6, 19, 0.15) 58%, transparent 72%)',
          }}
        />

        {/* Mobile & tablet darkness overlay */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#000613] via-[#000613]/75 to-[#000613]/40" />

        {/* Top gradient for transparent navbar readability */}
        <div
          className="absolute inset-x-0 top-0 h-24"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 6, 19, 0.88) 0%, rgba(0, 6, 19, 0.4) 60%, transparent 100%)',
          }}
        />

        {/* Bottom blend gradient into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
          style={{
            background:
              'linear-gradient(0deg, #000613 0%, rgba(0, 6, 19, 0.5) 40%, transparent 100%)',
          }}
        />
      </div>

      {/* 2. Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow with decorative top bar */}
          <div className="mb-2 lg:mb-[1.2dvh]">
            <span
              className="block h-[2px] w-7 sm:w-8 bg-accent rounded-full mb-2 shadow-[0_0_8px_rgba(63,203,248,0.7)]"
              aria-hidden="true"
            />
            <p className="text-accent text-[11px] sm:text-xs lg:text-[clamp(11px,1.4dvh,13px)] font-bold tracking-[0.2em] uppercase">
              OUR COMPLETE PRODUCT RANGE
            </p>
          </div>

          {/* Main Heading */}
          <h1
            id="products-hero-heading"
            style={{
              textShadow: '0 2px 20px rgba(0, 6, 19, 0.95), 0 0 45px rgba(0, 6, 19, 0.9)',
            }}
            className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[clamp(1.85rem,4.2dvh,2.85rem)] text-ink leading-[1.12] tracking-tight mb-2 sm:mb-3 lg:mb-[1.8dvh] drop-shadow-md"
          >
            Complete Range of <span className="text-accent">LED</span>
            <br />
            Lighting Solutions
          </h1>

          {/* Subtext */}
          <p className="text-ink-muted text-xs sm:text-sm lg:text-[clamp(11.5px,1.55dvh,14px)] leading-relaxed max-w-lg mb-4 sm:mb-5 lg:mb-[2.5dvh] drop-shadow-sm">
            Engineered for durability, optical clarity, and energy efficiency. Explore our
            industry-leading 220V rope lights, flexible RGB strips, architectural profile
            channels, commercial battens, and precision spotlights.
          </p>

          {/* CTA Button */}
          <div className="mb-5 sm:mb-6 lg:mb-[3dvh]">
            <a
              href="#products-list-top"
              aria-label="Scroll down to browse products catalog"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-2 sm:py-2.5 rounded-full border border-primary/90 bg-[#000613]/70 hover:bg-primary/20 hover:border-accent hover:text-accent shadow-[0_0_18px_rgba(6,161,255,0.35)] hover:shadow-[0_0_26px_rgba(63,203,248,0.6)] text-ink font-semibold text-xs sm:text-sm transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowDown
                className="w-4 h-4 text-accent shrink-0 group-hover:translate-y-1 transition-transform"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Feature Strip - Compact & Proportional */}
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-3.5 sm:pt-4 lg:pt-[2dvh] border-t border-primary/25 max-w-lg lg:max-w-xl">
            {FEATURES.map(({ icon: Icon, lines }) => (
              <li
                key={lines[0]}
                className="flex items-center gap-2.5 sm:flex-col sm:items-start lg:items-start text-left"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#000d24] border border-primary/40 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(6,161,255,0.25)]">
                  <Icon
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent drop-shadow-[0_0_6px_rgba(63,203,248,0.5)]"
                  />
                </div>
                <span className="text-ink/90 text-[11px] sm:text-xs lg:text-[clamp(11px,1.4dvh,12.5px)] font-medium leading-tight">
                  {lines[0]}
                  <br className="hidden sm:inline" /> {lines[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductsHero;
