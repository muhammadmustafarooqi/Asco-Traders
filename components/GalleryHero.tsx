'use client';

import Image from 'next/image';
import { ArrowDown, Gem, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: ShieldCheck, lines: ['100+ Projects', 'Completed'] },
  { icon: Zap, lines: ['220V Direct', 'Mains Ready'] },
  { icon: Gem, lines: ['IP67 Outdoor', 'Weatherproof'] },
  { icon: Sparkles, lines: ['Custom Lux', 'Engineering'] },
];

export function GalleryHero() {
  return (
    <section
      aria-labelledby="gallery-hero-heading"
      // Mobile/tablet: height grows with content. Desktop: exactly one screen (100dvh) with fluid cqw/cqh container units.
      className="relative w-full max-w-[100vw] min-h-[100dvh] lg:h-[100dvh] lg:min-h-[600px] flex items-center pt-28 pb-12 lg:pt-[12cqh] lg:pb-[2cqh] overflow-hidden bg-[#000613] lg:[container-type:size]"
    >
      {/* 1. Background Image with Ambient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 lg:[mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.5)_24%,#000_46%)] lg:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.5)_24%,#000_46%)]">
          <Image
            src="/asco_separate_images_webp/modern_house_blue_glow.webp"
            alt="Modern luxury villa illuminated with ASCO LED linear architectural lighting"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-[82%_center] lg:object-[85%_center]"
          />
        </div>

        {/* Left dark gradient behind text for high legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 6, 19, 0.97) 0%, rgba(0, 6, 19, 0.92) 28%, rgba(0, 6, 19, 0.72) 42%, rgba(0, 6, 19, 0.3) 54%, transparent 66%)',
          }}
        />

        {/* Mobile & tablet darkness overlay */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#000613] via-[#000613]/70 to-[#000613]/40" />

        {/* Top gradient for transparent navbar readability */}
        <div
          className="absolute inset-x-0 top-0 h-24"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 6, 19, 0.85) 0%, rgba(0, 6, 19, 0.3) 60%, transparent 100%)',
          }}
        />

        {/* Bottom blend gradient into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-20"
          style={{
            background: 'linear-gradient(0deg, #000613 0%, rgba(0, 6, 19, 0.6) 40%, transparent 100%)',
          }}
        />
      </div>

      {/* 2. Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-0 lg:pl-[6.5cqw]">
        <div className="max-w-xl lg:max-w-[46cqw]">
          {/* Eyebrow with decorative accent bar */}
          <div className="mb-3 lg:mb-[min(2.5cqh,1.25cqw)]">
            <span
              className="block h-[2px] w-7 sm:w-8 lg:w-[min(3cqh,1.5cqw)] bg-accent rounded-full mb-2 lg:mb-[min(1cqh,0.5cqw)] shadow-[0_0_8px_rgba(63,203,248,0.7)]"
              aria-hidden="true"
            />
            <p className="text-accent text-xs sm:text-sm lg:text-[length:min(2cqh,1cqw)] font-bold tracking-[0.2em] uppercase">
              PROJECT GALLERY
            </p>
          </div>

          {/* Heading */}
          <h1
            id="gallery-hero-heading"
            style={{
              textShadow: '0 2px 20px rgba(0, 6, 19, 0.95), 0 0 45px rgba(0, 6, 19, 0.9)',
            }}
            className="font-heading font-bold text-ink tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[length:min(6cqh,3cqw)] leading-[1.12] lg:leading-[1.12] mb-3 sm:mb-4 lg:mb-[min(3.2cqh,1.6cqw)] drop-shadow-md"
          >
            Lighting That <span className="text-accent">Transforms</span>
            <br />
            Every Space
          </h1>

          {/* Subtext */}
          <p className="text-ink-muted text-sm sm:text-base lg:text-[length:min(2.35cqh,1.15cqw)] leading-relaxed lg:leading-[1.5] drop-shadow-sm mb-5 sm:mb-6 lg:mb-[min(3.8cqh,1.9cqw)] max-w-md lg:max-w-[42cqw]">
            Explore our curated portfolio of completed architectural installations across Pakistan.
            From luxury residential facades and ambient cove living spaces to commercial corridors
            and outdoor landscape pergolas.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#gallery-showcase"
              aria-label="Scroll down to browse projects gallery"
              className="inline-flex items-center gap-2.5 lg:gap-[min(1.2cqh,0.6cqw)] px-6 sm:px-7 py-2.5 sm:py-3 lg:px-[min(3.6cqh,1.8cqw)] lg:py-[min(1.6cqh,0.8cqw)] rounded-full border border-primary/90 bg-[#000613]/70 hover:bg-primary/20 hover:border-accent hover:text-accent shadow-[0_0_18px_rgba(6,161,255,0.35)] hover:shadow-[0_0_26px_rgba(63,203,248,0.6)] text-ink font-semibold text-xs sm:text-sm lg:text-[length:min(2cqh,1cqw)] transition-all duration-300 group cursor-pointer"
            >
              <span>View Installations</span>
              <ArrowDown
                className="w-4 h-4 lg:w-[min(2.2cqh,1.1cqw)] lg:h-[min(2.2cqh,1.1cqw)] text-accent shrink-0 group-hover:translate-y-1 transition-transform"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Feature row */}
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 max-w-md sm:max-w-xl lg:flex lg:gap-0 lg:max-w-none lg:w-[38cqw] lg:-ml-[1.5cqw] lg:mt-[min(7cqh,3.5cqw)]">
            {HIGHLIGHTS.map(({ icon: Icon, lines }) => (
              <li
                key={lines[0]}
                className="flex flex-col items-center text-center gap-2 lg:gap-[min(1.1cqh,0.55cqw)] lg:flex-1 lg:border-l lg:border-accent/25 lg:first:border-l-0"
              >
                <Icon
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="w-7 h-7 lg:w-[min(5cqh,2.45cqw)] lg:h-[min(5cqh,2.45cqw)] text-accent shrink-0 drop-shadow-[0_0_6px_rgba(63,203,248,0.5)]"
                />
                <span className="text-ink/90 text-sm lg:text-[length:min(2.2cqh,1.1cqw)] leading-snug">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GalleryHero;
