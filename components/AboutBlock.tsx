'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function AboutBlock() {
  const { eyebrow, heading, paragraph, buttonText, buttonHref, imageAlt } = siteConfig.about;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full w-screen max-w-[100vw] py-16 sm:py-20 lg:py-24 bg-bg overflow-hidden"
    >
      {/* 1. Background Panoramic Banner (Desktop lg+) */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/asco_separate_images_webp/about-asco.webp"
          alt={imageAlt}
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-left"
          loading="lazy"
        />

        {/* Subtle top & bottom blend gradients into adjacent sections */}
        <div
          className="absolute inset-x-0 top-0 h-16"
          style={{
            background: 'linear-gradient(180deg, var(--color-bg) 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16"
          style={{
            background: 'linear-gradient(0deg, var(--color-bg) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* 2. Content Container (100vw) */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Mobile & Tablet Visual Banner (below lg) */}
        <div className="block lg:hidden relative w-full h-56 sm:h-72 mb-10 rounded-2xl overflow-hidden border border-line/40 shadow-[0_0_30px_rgba(6,161,255,0.18)]">
          <Image
            src="/asco_separate_images_webp/about-asco.webp"
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
        </div>

        {/* Desktop 12-column grid:
            Cols 1–4/5: Left content block (inside the dark navy area, strictly left of the glowing cyan arch)
            Cols 5/6–12: Spacer showcasing the building, illuminated logo, and patio
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          <div className="lg:col-span-5 xl:col-span-4 2xl:col-span-4 flex flex-col justify-center max-w-lg xl:max-w-xl">
            {/* Eyebrow with horizontal line dividers */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
              <span className="h-[2px] w-6 sm:w-8 bg-primary rounded-full" aria-hidden="true" />
              <span className="text-primary text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                {eyebrow}
              </span>
              <span className="h-[2px] w-6 sm:w-8 bg-primary rounded-full" aria-hidden="true" />
            </div>

            {/* Heading */}
            <h2
              id="about-heading"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.25rem] text-ink leading-[1.2] tracking-tight mb-4 drop-shadow-md"
            >
              Innovative Technologies
              <br />
              for a Brighter Tomorrow
            </h2>

            {/* Paragraph */}
            <p className="text-ink-muted text-xs sm:text-sm lg:text-[14px] xl:text-[15px] leading-relaxed mb-7 max-w-lg drop-shadow-sm">
              {paragraph}
            </p>

            {/* Button */}
            <div>
              <Link
                href={buttonHref}
                aria-label="Learn more about ASCO Innovative Technologies"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-ink font-semibold text-xs sm:text-sm border border-primary/90 bg-bg/60 hover:bg-primary/10 hover:border-accent hover:text-accent shadow-[0_0_15px_rgba(6,161,255,0.25)] hover:shadow-[0_0_22px_rgba(63,203,248,0.5)] transition-all duration-300 group"
              >
                <span>{buttonText}</span>
                <ArrowRight
                  className="w-4 h-4 text-primary group-hover:text-accent transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Spacer on Desktop for architectural photo & logo (Cols 6/5–12) */}
          <div
            className="hidden lg:block lg:col-span-7 xl:col-span-8 2xl:col-span-8 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

