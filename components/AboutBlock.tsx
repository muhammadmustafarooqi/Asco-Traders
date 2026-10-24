import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import Reveal from '@/components/Reveal';
import aboutImage from '../public/asco_separate_images_webp/about-asco.webp';

/**
 * Where the glowing arch starts, as a % of the image width.
 * On xl screens the text block is kept to the left of this line.
 * If the text touches the arch, lower this number. If there is too much empty space, raise it.
 */
const ARCH_START_PCT = 45;
const TEXT_LEFT_PCT = 4;

export function AboutBlock() {
  const { eyebrow, heading, paragraph, buttonText, buttonHref, imageAlt } = siteConfig.about;

  const stageVars = {
    '--text-left': `${TEXT_LEFT_PCT}%`,
    '--text-w': `${ARCH_START_PCT - TEXT_LEFT_PCT - 3}%`,
  } as React.CSSProperties;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full bg-bg py-8 sm:py-12 lg:py-16 overflow-hidden"
    >
      <div className="max-w-7xl xl:max-w-[1536px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Stage: scales with its own width (container queries), so text and image always stay in proportion */}
        <div
          className="@container relative w-full rounded-2xl lg:rounded-3xl border border-cyan-500/20 overflow-hidden bg-[#000814] shadow-[0_0_35px_rgba(6,161,255,0.12)]"
          style={stageVars}
        >
          {/* Image box: taller crop on mobile (16/10) so it's not a thin strip, with ASCO sign visible */}
          <div
            className="relative w-full overflow-hidden aspect-[16/10] sm:aspect-[2/1] xl:aspect-[2113/744]"
          >
            <Image
              src={aboutImage}
              alt={imageAlt}
              fill
              sizes="(min-width: 1920px) 1920px, 100vw"
              className="object-cover object-[70%_center] sm:object-center"
              priority
            />

            {/* Soft blends into neighbouring sections */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-10 sm:h-12 xl:h-16"
              style={{ background: 'linear-gradient(180deg, var(--color-bg) 0%, transparent 100%)' }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-10 sm:h-12 xl:h-16"
              style={{ background: 'linear-gradient(0deg, var(--color-bg) 0%, transparent 100%)' }}
              aria-hidden="true"
            />
            {/* Side fades (desktop only) so the image melts into the page on ultra-wide screens */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 xl:block"
              style={{ background: 'linear-gradient(90deg, var(--color-bg) 0%, transparent 100%)' }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 xl:block"
              style={{ background: 'linear-gradient(270deg, var(--color-bg) 0%, transparent 100%)' }}
              aria-hidden="true"
            />
            {/* Light left shade behind the text, desktop only */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 hidden bg-gradient-to-r from-bg/60 to-transparent xl:block"
              style={{ width: `${ARCH_START_PCT}%` }}
              aria-hidden="true"
            />
          </div>

          {/* Text: below the image on small screens, over the dark area of the image on xl+ */}
          <Reveal
            distance={20}
            duration={650}
            className="mt-6 sm:mt-8 px-5 py-6 sm:px-8 sm:py-8 xl:p-0 flex flex-col justify-center xl:absolute xl:inset-y-0 xl:left-[var(--text-left)] xl:mt-0 xl:w-[var(--text-w)]"
          >
            <div className="mb-3 flex items-center gap-2.5 sm:gap-3 xl:mb-[1.2cqw]">
              <span className="h-[2px] w-6 rounded-full bg-accent sm:w-8" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent sm:text-sm xl:text-[length:clamp(0.7rem,0.9cqw,0.9rem)]">
                {eyebrow}
              </span>
              <span className="h-[2px] w-6 rounded-full bg-accent sm:w-8" aria-hidden="true" />
            </div>

            <h2
              id="about-heading"
              className="mb-3 sm:mb-4 font-heading text-[clamp(1.5rem,1.15rem+2vw,2.5rem)] font-bold leading-[1.18] tracking-[-0.02em] text-ink text-balance drop-shadow-md xl:mb-[1.4cqw] xl:text-[length:clamp(1.5rem,2.6cqw,2.75rem)]"
            >
              {heading}
            </h2>

            <p className="mb-5 sm:mb-6 max-w-xl text-sm sm:text-base leading-[1.65] text-slate-300 drop-shadow-sm xl:mb-[2cqw] xl:max-w-none xl:text-[length:clamp(0.85rem,1.05cqw,1.0625rem)] xl:leading-[1.65]">
              {paragraph}
            </p>

            <div>
              <Link
                href={buttonHref}
                aria-label="Learn more about ASCO Innovative Technologies"
                className="btn-secondary-glow group inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 min-h-[44px] text-sm font-semibold text-ink shadow-[0_0_15px_rgba(6,161,255,0.25)] hover:shadow-[0_0_22px_rgba(63,203,248,0.5)] max-sm:w-full xl:text-[length:clamp(0.75rem,0.95cqw,0.95rem)]"
              >
                <span>{buttonText}</span>
                <ArrowRight
                  className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}