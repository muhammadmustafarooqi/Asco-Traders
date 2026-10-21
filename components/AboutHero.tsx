'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gem, ShieldCheck, UserCog, Zap } from 'lucide-react';

const FEATURES = [
  { icon: ShieldCheck, lines: ['Premium', 'Quality'] },
  { icon: Zap, lines: ['Energy', 'Efficient'] },
  { icon: Gem, lines: ['Durable &', 'Reliable'] },
  { icon: UserCog, lines: ['Expert', 'Support'] },
];

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      // Mobile/tablet: height grows with content. Desktop: exactly one screen, and cqw/cqh units work.
      className="relative w-full max-w-[100vw] min-h-[100dvh] lg:h-[100dvh] lg:min-h-[600px] flex items-center pt-28 pb-12 lg:pt-[12cqh] lg:pb-[2cqh] overflow-hidden bg-[#000613] lg:[container-type:size]"
    >
      {/* 1. Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 lg:[mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.5)_24%,#000_46%)] lg:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.5)_24%,#000_46%)]">
          <Image
            src="/asco_separate_images_webp/about/about-asco-page.webp"
            alt="ASCO Innovative Technologies headquarters and architectural LED lighting facility illuminated at night"
            fill
            priority
            sizes="100vw"
            // Higher % = building moves left and more of the right side shows. Lower % = building moves right.
            className="object-cover object-right md:object-[85%_center] lg:object-[85%_center]"
          />
        </div>

        {/* Left dark gradient behind the text column */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 6, 19, 0.97) 0%, rgba(0, 6, 19, 0.92) 28%, rgba(0, 6, 19, 0.72) 42%, rgba(0, 6, 19, 0.3) 54%, transparent 66%)',
          }}
        />

        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#000613] via-[#000613]/70 to-[#000613]/40" />

        <div
          className="absolute inset-x-0 top-0 h-24"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 6, 19, 0.85) 0%, rgba(0, 6, 19, 0.3) 60%, transparent 100%)',
          }}
        />

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
          <nav aria-label="Breadcrumb" className="sr-only">
            <Link href="/">Home</Link> / <span>About Us</span>
          </nav>

          {/* Eyebrow with a line on each side */}
          <p className="relative flex items-center gap-3 lg:gap-[min(1cqh,0.5cqw)] text-accent text-xs sm:text-sm lg:text-[length:min(2cqh,1cqw)] font-semibold tracking-[0.16em] uppercase mb-3 lg:mb-[min(3cqh,1.5cqw)]">
            <span
              aria-hidden="true"
              className="block h-px w-6 bg-accent lg:absolute lg:right-full lg:top-1/2 lg:-translate-y-1/2 lg:mr-[min(1cqh,0.5cqw)] lg:w-[min(2.2cqh,1.1cqw)]"
            />
            <span>ABOUT ASCO</span>
            <span aria-hidden="true" className="block h-px w-6 bg-accent lg:w-[min(2.2cqh,1.1cqw)]" />
          </p>

          {/* Heading */}
          <h1
            id="about-hero-heading"
            style={{
              textShadow: '0 2px 20px rgba(0, 6, 19, 0.95), 0 0 45px rgba(0, 6, 19, 0.9)',
            }}
            className="font-heading font-semibold text-ink tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[length:min(6cqh,3cqw)] leading-[1.1] lg:leading-[1.15] lg:whitespace-nowrap mb-4 sm:mb-5 lg:mb-[min(3.7cqh,1.85cqw)]"
          >
            Innovative Technologies
            <br />
            for a <span className="text-accent">Brighter Tomorrow</span>
          </h1>

          {/* Subtext: same 5-line break as the mockup on desktop */}
          <p className="text-ink/90 text-sm sm:text-base lg:text-[length:min(2.45cqh,1.15cqw)] leading-relaxed lg:leading-[1.5] drop-shadow-md mb-6 sm:mb-8 lg:mb-[min(3.5cqh,1.75cqw)] max-w-md lg:max-w-[42cqw]">
            ASCO Innovative Technologies is a leading manufacturer{' '}
            <br className="hidden lg:block" />
            and supplier of premium LED lighting solutions in Pakistan.{' '}
            <br className="hidden lg:block" />
            We specialize in high-quality 220V rope lights, LED strip lights,{' '}
            <br className="hidden lg:block" />
            profile lights, batten lights, and tracklights — designed to{' '}
            <br className="hidden lg:block" />
            bring innovation, durability and elegance to every space.
          </p>

          {/* CTA */}
          <Link
            href="/products"
            aria-label="Explore Our Products"
            className="inline-flex items-center gap-2 lg:gap-[min(1.2cqh,0.6cqw)] px-6 py-2.5 lg:px-[min(3.6cqh,1.8cqw)] lg:py-[min(1.6cqh,0.8cqw)] rounded-full border-2 border-accent text-accent font-semibold text-sm lg:text-[length:min(2cqh,1cqw)] bg-[#000613]/60 hover:bg-accent/15 shadow-[0_0_18px_rgba(63,203,248,0.35),inset_0_0_12px_rgba(63,203,248,0.12)] transition-colors"
          >
            <span>Explore Our Products</span>
            <ArrowRight className="w-4 h-4 lg:w-[min(2.3cqh,1.15cqw)] lg:h-[min(2.3cqh,1.15cqw)] shrink-0" aria-hidden="true" />
          </Link>

          {/* Feature row */}
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 max-w-md sm:max-w-xl lg:flex lg:gap-0 lg:max-w-none lg:w-[38cqw] lg:-ml-[1.5cqw] lg:mt-[min(8cqh,4cqw)]">
            {FEATURES.map(({ icon: Icon, lines }) => (
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
export default AboutHero;