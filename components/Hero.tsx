import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { ArrowRight, BadgeCheck, Zap, ShieldCheck, Headset } from 'lucide-react';
import heroImage from '@/public/asco_separate_images_webp/modern_house_blue_glow.webp';

const trustBadges = [
  { id: 'quality', line1: 'Premium', line2: 'Quality', icon: BadgeCheck },
  { id: 'efficiency', line1: 'Energy', line2: 'Efficient', icon: Zap },
  { id: 'durability', line1: 'Durable &', line2: 'Reliable', icon: ShieldCheck },
  { id: 'support', line1: 'Expert', line2: 'Support', icon: Headset },
];

/**
 * Tuning knob (xl screens and up): how far the villa is pushed to the right,
 * as a % of the stage width. Raise it if the text touches the windows.
 */
const IMAGE_SHIFT = '7%';

export function Hero() {
  const stageVars = {
    '--hero-ar': `${heroImage.width} / ${heroImage.height}`,
    '--hero-shift': IMAGE_SHIFT,
  } as CSSProperties;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative w-full overflow-hidden bg-bg"
    >
      {/*
        STAGE: image + overlays.
        Below xl it sits behind the content (the content decides the height).
        From xl up it is a centred box locked to the image's aspect ratio (max 1680px wide),
        so the picture is never over-scaled or cropped on large or zoomed-out screens.
      */}
      <div
        className="absolute inset-0 overflow-hidden xl:relative xl:inset-auto xl:mx-auto xl:w-full xl:max-w-[1680px] xl:min-h-[640px] xl:max-h-[100svh] xl:[aspect-ratio:var(--hero-ar)]"
        style={stageVars}
      >
        {/* Villa image, shifted right on xl+ with a soft left fade */}
        <div className="absolute inset-0 xl:left-[var(--hero-shift)] xl:[mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.6)_12%,#000_30%)] xl:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.6)_12%,#000_30%)]">
          <Image
            src={heroImage}
            alt="Modern villa at night illuminated with ASCO LED lights and vibrant blue architectural glow"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1680px"
            className="object-cover object-[75%_center] md:object-right xl:object-[left_60%]"
          />
        </div>

        {/* Below xl: strong left-to-right overlay for text readability */}
        <div
          className="pointer-events-none absolute inset-0 z-10 xl:hidden"
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 6, 19, 0.96) 0%, rgba(0, 6, 19, 0.88) 32%, rgba(0, 6, 19, 0.5) 48%, rgba(0, 6, 19, 0.15) 62%, transparent 75%)',
          }}
          aria-hidden="true"
        />
        {/* Below xl: vertical contrast overlay for phones and tablets */}
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-bg/90 via-bg/65 to-bg/30 xl:hidden"
          aria-hidden="true"
        />
        {/* xl and up: light left overlay (the image already has dark sky there) */}
        <div
          className="pointer-events-none absolute inset-0 z-10 hidden xl:block"
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 6, 19, 0.7) 0%, rgba(0, 6, 19, 0.4) 28%, transparent 52%)',
          }}
          aria-hidden="true"
        />

        {/* Side fades so the stage melts into the page on ultra-wide screens */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-bg to-transparent xl:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-bg to-transparent xl:block"
          aria-hidden="true"
        />

        {/* Ambient breathing glow behind the modern villa light */}
        <div
          className="pointer-events-none absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-primary/20 blur-[130px] animate-ambient-pulse z-10"
          aria-hidden="true"
        />

        {/* Top gradient so the transparent navbar stays legible */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28"
          style={{
            background:
              'linear-gradient(180deg, color-mix(in srgb, var(--color-bg) 85%, transparent) 0%, color-mix(in srgb, var(--color-bg) 20%, transparent) 60%, transparent 100%)',
          }}
          aria-hidden="true"
        />
        {/* Bottom gradient blending into the next section */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24"
          style={{
            background:
              'linear-gradient(0deg, var(--color-bg) 0%, color-mix(in srgb, var(--color-bg) 80%, transparent) 50%, transparent 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/*
        CONTENT: same container width as the Navbar, so the text always lines up with the logo.
        Below xl it is in normal flow; from xl up it is laid over the stage and centred vertically.
      */}
      <div className="relative z-20 mx-auto flex min-h-[580px] w-full max-w-7xl flex-col justify-center px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 lg:px-8 xl:absolute xl:inset-0 xl:min-h-0 xl:max-w-[1536px] xl:pb-12 xl:pt-24">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="hero-fade-0 mb-2 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent sm:mb-3 sm:text-sm lg:text-[13px]">
            INNOVATIVE LED SOLUTIONS
          </p>

          <h1
            id="hero-title"
            style={{
              textShadow:
                '0 2px 20px rgba(0, 6, 19, 0.95), 0 0 45px rgba(0, 6, 19, 0.9)',
            }}
            className="hero-fade-1 mb-3 font-heading text-[clamp(2.125rem,1.4rem+3.2vw,4.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-ink drop-shadow-md sm:mb-4"
          >
            <span className="block">Lighting</span>
            <span className="block">
              That <span className="text-accent">Inspires</span>
            </span>
          </h1>

          <p className="hero-fade-2 mb-6 max-w-md text-base sm:text-lg font-normal leading-[1.65] text-slate-200 drop-shadow-md sm:mb-8 lg:text-xl">
            Premium LED lighting solutions for
            <br className="hidden md:block" /> a brighter tomorrow.
          </p>

          <div className="hero-fade-3 flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              href="/products"
              aria-label="Explore Our Products"
              className="btn-primary-glow inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold text-ink sm:text-base"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link
              href="/about"
              aria-label="About ASCO"
              className="btn-secondary-glow inline-flex h-12 items-center justify-center rounded-full px-7 text-sm font-semibold text-ink sm:text-base"
            >
              About ASCO
            </Link>
          </div>
        </div>

        {/* Trust row, grouped under the buttons */}
        <div className="hero-fade-4 mt-8 w-full max-w-xl border-t border-accent/20 pt-6 sm:mt-10 lg:max-w-2xl xl:mt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center justify-center px-2 py-2 text-center sm:px-3 ${index === 0
                      ? 'border-b border-r border-line/60 lg:border-b-0'
                      : index === 1
                        ? 'border-b border-line/60 lg:border-b-0'
                        : index === 2
                          ? 'border-r border-line/60'
                          : ''
                    } lg:border-r lg:border-accent/35 lg:last:border-r-0`}
                >
                  <IconComponent
                    className="mb-2 h-8 w-8 stroke-[1.5] text-accent drop-shadow-[0_0_8px_rgba(63,203,248,0.5)] sm:h-9 sm:w-9"
                    aria-hidden="true"
                  />
                  <div className="font-heading text-xs font-medium leading-tight tracking-wide text-ink drop-shadow-md sm:text-sm">
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

export default Hero;