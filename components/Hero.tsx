'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Zap, ShieldCheck, Headset } from 'lucide-react';

const trustBadges = [
  {
    id: 'quality',
    line1: 'Premium',
    line2: 'Quality',
    icon: BadgeCheck,
  },
  {
    id: 'efficiency',
    line1: 'Energy',
    line2: 'Efficient',
    icon: Zap,
  },
  {
    id: 'durability',
    line1: 'Durable &',
    line2: 'Reliable',
    icon: ShieldCheck,
  },
  {
    id: 'support',
    line1: 'Expert',
    line2: 'Support',
    icon: Headset,
  },
];

// Fades the image's own left edge into the dark background on desktop
const IMAGE_MASK = 'linear-gradient(90deg,transparent_0%,#000_28%)';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      // Mobile/tablet: full-screen flex column (unchanged).
      // Desktop (lg+): fixed 2:1 banner; 1cqw = 1% of the banner width.
      className="relative w-full max-w-[100vw] h-[100dvh] min-h-[100dvh] lg:h-auto lg:min-h-0 lg:aspect-[2/1] flex flex-col justify-between lg:block pt-20 lg:pt-0 overflow-hidden bg-bg"
      style={{ containerType: 'inline-size' }}
    >
      {/* 1. Background */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Image box: full width on mobile, right 76% on desktop with a faded left edge */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[76%] lg:[mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.5)_14%,#000_32%)] lg:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.5)_14%,#000_32%)]">
          <Image
            src="/asco_separate_images_webp/modern_house_blue_glow.webp"
            alt="Modern villa at night illuminated with ASCO LED lights and vibrant blue architectural glow"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 76vw"
            className="object-cover object-[75%_center] md:object-right"
          />
        </div>

        {/* Left-to-right gradient overlay for text readability */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 6, 19, 0.85) 0%, rgba(0, 6, 19, 0.6) 25%, rgba(0, 6, 19, 0.2) 45%, transparent 65%)',
          }}
          aria-hidden="true"
        />

        {/* Mobile & tablet contrast overlay (hidden on lg+) */}
        <div
          className="lg:hidden absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/60 to-bg/20 pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Top gradient so the transparent navbar stays legible */}
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(180deg, color-mix(in srgb, var(--color-bg) 75%, transparent) 0%, color-mix(in srgb, var(--color-bg) 20%, transparent) 60%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Bottom gradient blending into the next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(0deg, var(--color-bg) 0%, color-mix(in srgb, var(--color-bg) 80%, transparent) 50%, transparent 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* 2. Text block: in flow on mobile, placed at ~6.5% left / 22% top on desktop */}
      <div className="relative z-20 w-full flex-1 flex flex-col justify-center px-4 sm:px-6 pt-2 sm:pt-4 pb-2 lg:absolute lg:flex-none lg:block lg:w-auto lg:p-0 lg:left-[6.5cqw] lg:top-[22%]">
        <div className="max-w-2xl lg:max-w-none hero-animate-fade">
          <p className="inline-block text-accent text-xs sm:text-sm lg:text-[length:1.1cqw] font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-3 lg:mb-[1.2cqw]">
            INNOVATIVE LED SOLUTIONS
          </p>

          <h1
            id="hero-title"
            style={{
              textShadow:
                '0 2px 20px rgba(0, 6, 19, 0.95), 0 0 45px rgba(0, 6, 19, 0.9)',
            }}
            className="font-heading font-bold text-ink tracking-tight text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] lg:text-[length:5.3cqw] lg:leading-[0.98] mb-3 sm:mb-4 lg:mb-[1.2cqw]"
          >
            <span className="block">Lighting</span>
            <span className="block">
              That <span className="text-accent">Inspires</span>
            </span>
          </h1>

          <p className="text-ink text-base sm:text-lg lg:text-[length:1.75cqw] font-normal leading-relaxed lg:leading-[1.5] mb-5 sm:mb-7 lg:mb-[2.6cqw] max-w-[24rem] lg:max-w-[32cqw] drop-shadow-md">
            Premium LED lighting solutions for
            <br className="hidden md:block" /> a brighter tomorrow.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5 lg:gap-[2cqw]">
            <Link
              href="/products"
              aria-label="Explore Our Products"
              className="inline-flex items-center justify-center h-12 px-7 lg:h-[3.7cqw] lg:px-[2.2cqw] rounded-full text-ink font-semibold text-sm sm:text-base lg:text-[length:1.1cqw] btn-primary-glow"
            >
              <span>Explore Our Products</span>
              <ArrowRight
                className="w-4 h-4 ml-2 lg:w-[1.3cqw] lg:h-[1.3cqw] lg:ml-[0.6cqw] shrink-0"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/about"
              aria-label="About ASCO"
              className="inline-flex items-center justify-center h-12 px-7 lg:h-[3.7cqw] lg:px-[2.2cqw] rounded-full text-ink font-semibold text-sm sm:text-base lg:text-[length:1.1cqw] border border-accent bg-[#000613]/50 hover:bg-accent/10 transition-colors"
            >
              About ASCO
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Trust row: in flow on mobile, 4 equal columns spanning ~48% on desktop */}
      <div className="relative z-20 w-full mt-auto lg:mt-0 lg:absolute lg:left-[4.5cqw] lg:top-[78.5%] lg:w-[48cqw]">
        <div className="px-4 sm:px-6 lg:px-0 pb-3 sm:pb-4 lg:pb-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 max-w-xs sm:max-w-sm lg:max-w-none">
            {trustBadges.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center justify-center text-center py-1 sm:py-1.5 px-2 sm:px-3 lg:py-[0.4cqw] lg:px-[1cqw] ${index === 0
                    ? 'border-r border-b border-line/60 lg:border-b-0'
                    : index === 1
                      ? 'border-b border-line/60 lg:border-b-0'
                      : index === 2
                        ? 'border-r border-line/60'
                        : ''
                    } lg:border-r lg:border-accent/35 lg:last:border-r-0`}
                >
                  <IconComponent
                    className="w-8 h-8 sm:w-9 sm:h-9 lg:w-[3.2cqw] lg:h-[3.2cqw] text-accent stroke-[1.5] mb-2 lg:mb-[0.7cqw] drop-shadow-[0_0_8px_rgba(63,203,248,0.5)]"
                    aria-hidden="true"
                  />
                  <div className="font-heading font-medium text-ink text-xs sm:text-sm lg:text-[length:1.1cqw] tracking-wide leading-tight drop-shadow-md">
                    <span className="block">{item.line1}</span>
                    <span className="block">{item.line2}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}