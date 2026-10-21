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

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full min-h-[100svh] min-h-[600px] max-h-[900px] flex flex-col justify-between pt-20 overflow-x-clip bg-bg"
    >
      {/* 1. Full-Bleed Background Image with translated wrapper & left fade mask */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative w-full h-full translate-x-0 md:translate-x-[5%] lg:translate-x-[10%] xl:translate-x-[20%] 2xl:translate-x-[22%]"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
          }}
        >
          <Image
            src="/asco_separate_images_webp/modern_house_blue_glow.webp"
            alt="Modern villa at night illuminated with ASCO LED lights and vibrant blue architectural glow"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-[left_center] xl:object-[right_center]"
          />
        </div>

        {/* Left-to-right gradient overlay: bg at ~70% at far left, fading to transparent by ~40% of width (no overlay over house) */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(90deg, color-mix(in srgb, var(--color-bg) 70%, transparent) 0%, color-mix(in srgb, var(--color-bg) 35%, transparent) 20%, transparent 40%)',
          }}
          aria-hidden="true"
        />

        {/* Mobile & tablet contrast overlay behind text (hidden on lg+ so house stays overlay-free) */}
        <div
          className="lg:hidden absolute inset-0 bg-gradient-to-b from-bg/90 via-bg/60 to-bg/20 pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* Short top gradient so transparent navbar stays legible */}
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(180deg, color-mix(in srgb, var(--color-bg) 75%, transparent) 0%, color-mix(in srgb, var(--color-bg) 20%, transparent) 60%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Short bottom gradient (80-100px) blending into next section while keeping foreground blue ribbon visible */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(0deg, var(--color-bg) 0%, color-mix(in srgb, var(--color-bg) 80%, transparent) 50%, transparent 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* 2. Vertically Spaced Content Area (rhythm tuned to design percentages) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center pt-2 sm:pt-4 lg:pt-6 pb-2">
        <div className="max-w-2xl hero-animate-fade">
          {/* Eyebrow: ~23% of hero height */}
          <p className="inline-block text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-3">
            INNOVATIVE LED SOLUTIONS
          </p>

          {/* H1 Heading on exactly two lines on md and up: ~32% (line 1), ~41% (line 2) */}
          <h1
            id="hero-title"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.05,
              textShadow:
                '0 2px 20px rgba(0, 6, 19, 0.95), 0 0 45px rgba(0, 6, 19, 0.9)',
            }}
            className="font-heading font-bold text-ink tracking-tight mb-3 sm:mb-4 lg:mb-5"
          >
            <span className="block">Lighting</span>
            <span className="block">
              That <span className="text-accent">Inspires</span>
            </span>
          </h1>

          {/* Subtext: exactly two lines on md+, max-w-[24rem]: ~51-56% of hero height */}
          <p className="text-ink text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-5 sm:mb-7 lg:mb-8 max-w-[24rem] drop-shadow-md">
            Premium LED lighting solutions for
            <br className="hidden md:block" /> a brighter tomorrow.
          </p>

          {/* Buttons: ~66% of hero height */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              href="/products"
              aria-label="Explore Our Products"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full text-ink font-semibold text-sm sm:text-base btn-primary-glow"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4 ml-2 shrink-0" aria-hidden="true" />
            </Link>
            <Link
              href="/about"
              aria-label="About ASCO"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full text-ink font-semibold text-sm sm:text-base border border-accent hover:bg-accent/10 transition-colors"
            >
              About ASCO
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Trust Row (compact on desktop under text column, matching design): ~80-88% of hero height */}
      <div className="relative z-20 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 sm:pb-4 lg:pb-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 max-w-xs sm:max-w-sm lg:max-w-[480px] xl:max-w-[520px]">
            {trustBadges.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center justify-center text-center py-1 sm:py-1.5 px-2 sm:px-3 ${
                    index === 0
                      ? 'border-r border-b border-line/60 lg:border-b-0'
                      : index === 1
                      ? 'border-b border-line/60 lg:border-b-0'
                      : index === 2
                      ? 'border-r border-line/60'
                      : ''
                  } lg:border-r lg:border-line/60`}
                >
                  {/* 36-40px line icon in accent */}
                  <IconComponent
                    className="w-8 h-8 sm:w-9 sm:h-9 text-accent stroke-[1.5] mb-2 drop-shadow-[0_0_8px_rgba(63,203,248,0.5)]"
                    aria-hidden="true"
                  />
                  {/* Two-line label */}
                  <div className="font-heading font-medium text-ink text-xs sm:text-sm tracking-wide leading-tight drop-shadow-md">
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
