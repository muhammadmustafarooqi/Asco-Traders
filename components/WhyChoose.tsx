'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const col1Features = [
  '220V Direct Mains Technology',
  'Wide Range of Colours',
  'Long Lifespan',
];

const col2Features = [
  'Smart Control Options',
  'Premium Build Quality',
  'Nationwide Delivery',
];

const BANNER_BG = '#000613';

// Soft fade on the outer edges so the image never shows a hard line on ultrawide screens
const EDGE_FADE_MASK =
  'linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%)';

export function WhyChoose() {
  return (
    <section
      id="why-choose"
      aria-labelledby="why-choose-heading"
      className="relative w-full max-w-[100vw] py-8 sm:py-12 lg:py-0 bg-[#000613] overflow-hidden"
    >
      {/*
        Full-bleed banner. Capped at the image's native width (2113px) and centered,
        so on ultrawide screens it never stretches past its resolution.
        container-type lets every desktop size below use `cqw` (1cqw = 1% of banner width),
        so text, spacing and image all scale together as one unit.
      */}
      <div
        className="relative w-full max-w-[2113px] mx-auto lg:aspect-[2113/744] flex flex-col justify-center overflow-hidden"
        style={{ containerType: 'inline-size' }}
      >
        {/* 1. Background image (desktop only) */}
        <div
          className="hidden lg:block absolute inset-0 z-0 pointer-events-none"
          aria-hidden="true"
          style={{
            WebkitMaskImage: EDGE_FADE_MASK,
            maskImage: EDGE_FADE_MASK,
          }}
        >
          <Image
            src="/asco_separate_images_webp/led_rope_light_no_text.webp"
            alt="ASCO 220V Direct Mains LED Rope Light glowing coil with ambient blue waves"
            fill
            priority
            sizes="(max-width: 2113px) 100vw, 2113px"
            className="object-cover object-center"
          />

          {/* Right-side dark gradient for crisp typography */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, transparent 33%, rgba(0,6,19,0.3) 45%, rgba(0,6,19,0.68) 62%, rgba(0,6,19,0.92) 100%)',
            }}
          />

          {/* Top & bottom blend */}
          <div
            className="absolute inset-x-0 top-0 h-12"
            style={{ background: `linear-gradient(180deg, ${BANNER_BG} 0%, transparent 100%)` }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-12"
            style={{ background: `linear-gradient(0deg, ${BANNER_BG} 0%, transparent 100%)` }}
          />
        </div>

        {/* 2. Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-0 py-8 lg:py-0">
          {/* Mobile & Tablet rope light banner (below lg) */}
          <div className="block lg:hidden relative w-full h-56 sm:h-72 mb-10 rounded-2xl overflow-hidden border border-line/40 shadow-[0_0_30px_rgba(6,161,255,0.18)]">
            <Image
              src="/asco_separate_images_webp/led_rope_light_no_text.webp"
              alt="ASCO 220V Direct Mains LED Rope Light in glowing coil"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
          </div>

          <div className="flex flex-col lg:flex-row items-center w-full">
            {/* Spacer: the coil lives in the first ~30% of the banner */}
            <div className="hidden lg:block lg:w-[30.5cqw] shrink-0 pointer-events-none" aria-hidden="true" />

            <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-start gap-8 lg:gap-[5.5cqw]">
              {/* Left callout: 220V Direct Mains Rope Light */}
              <div className="shrink-0 w-full max-w-xs lg:w-[22cqw] lg:max-w-none ">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[length:2.25cqw] text-ink leading-[1.2] mb-2.5 sm:mb-3 lg:mb-[0.8cqw] drop-shadow-md ml-4">
                  220V Direct Mains
                  <br />
                  Rope Light
                </h3>

                <p className="text-ink-muted text-xs sm:text-[13px] lg:text-[length:1.07cqw] leading-relaxed mb-5 sm:mb-6 lg:mb-[1.6cqw] max-w-[260px] lg:max-w-[20cqw] drop-shadow-sm ml-4">
                  No driver. No hassle. Just reliable
                  <br className="hidden sm:inline" /> and long-lasting performance.
                </p>

                <div>
                  <Link
                    href="/products#rope-light"
                    aria-label="Learn more about 220V Direct Mains Rope Light"
                    className="inline-flex items-center gap-2 lg:gap-[0.6cqw] px-5 sm:px-6 lg:px-[1.8cqw] py-2.5 lg:py-[0.8cqw] rounded-full text-bg font-semibold text-xs sm:text-sm lg:text-[length:1.06cqw] bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-[0_0_20px_rgba(6,161,255,0.45)] hover:shadow-[0_0_28px_rgba(63,203,248,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      className="w-4 h-4 lg:w-[1.2cqw] lg:h-[1.2cqw] transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>

              {/* Right section: Why Choose ASCO */}
              <div className="flex flex-col justify-center">
                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-[0.9cqw] mb-2.5 sm:mb-3 lg:mb-[0.9cqw]">
                  <span className="h-[2px] w-6 sm:w-8 lg:w-[2.4cqw] bg-primary rounded-full" aria-hidden="true" />
                  <span className="text-primary text-xs sm:text-sm lg:text-[length:1.06cqw] font-bold tracking-[0.2em] uppercase">
                    WHY CHOOSE ASCO
                  </span>
                  <span className="h-[2px] w-6 sm:w-8 lg:w-[2.4cqw] bg-primary rounded-full" aria-hidden="true" />
                </div>

                {/* Heading */}
                <h2
                  id="why-choose-heading"
                  className="font-heading font-bold text-2xl sm:text-3xl lg:text-[length:3.1cqw] text-ink leading-tight tracking-tight mb-2.5 sm:mb-3.5 lg:mb-[1cqw] drop-shadow-md"
                >
                  Built for Performance,
                  <br />
                  Designed for <span className="text-primary">E</span>xcellence
                </h2>

                {/* Paragraph */}
                <p className="text-ink-muted text-xs sm:text-sm lg:text-[length:1.1cqw] leading-relaxed max-w-lg lg:max-w-[38.9cqw] mb-5 sm:mb-6 lg:mb-[1.6cqw]">
                  At ASCO, we deliver high-quality, innovative LED lighting solutions with unmatched
                  durability, energy efficiency, and modern design — trusted by contractors, designers,
                  and homeowners across Pakistan.
                </p>

                {/* Feature bullets (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_auto] lg:w-max gap-x-4 lg:gap-x-[1.8cqw] gap-y-3 lg:gap-y-0 max-w-lg lg:max-w-none">
                  {/* Column 1 */}
                  <div className="flex flex-col gap-3 lg:gap-[1cqw]">
                    {col1Features.map((text) => (
                      <div key={text} className="flex items-center gap-2.5 lg:gap-[0.8cqw]">
                        <span className="w-5 h-5 lg:w-[1.52cqw] lg:h-[1.52cqw] rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(6,161,255,0.4)]">
                          <Check className="w-3.5 h-3.5 lg:w-[1.06cqw] lg:h-[1.06cqw] text-bg stroke-[3]" aria-hidden="true" />
                        </span>
                        <span className="text-ink text-xs sm:text-[13px] lg:text-[length:1.06cqw] font-medium tracking-wide whitespace-nowrap">
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col gap-3 lg:gap-[1cqw]">
                    {col2Features.map((text) => (
                      <div key={text} className="flex items-center gap-2.5 lg:gap-[0.8cqw]">
                        <span className="w-5 h-5 lg:w-[1.52cqw] lg:h-[1.52cqw] rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(6,161,255,0.4)]">
                          <Check className="w-3.5 h-3.5 lg:w-[1.06cqw] lg:h-[1.06cqw] text-bg stroke-[3]" aria-hidden="true" />
                        </span>
                        <span className="text-ink text-xs sm:text-[13px] lg:text-[length:1.06cqw] font-medium tracking-wide whitespace-nowrap">
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
