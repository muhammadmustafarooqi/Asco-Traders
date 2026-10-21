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

export function WhyChoose() {
  return (
    <section
      id="why-choose"
      aria-labelledby="why-choose-heading"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-bg overflow-hidden"
    >
      {/* 1. Background Image with panoramic rope light (Desktop lg+) */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/asco_separate_images_webp/led_rope_light_no_text.webp"
          alt="ASCO 220V Direct Mains LED Rope Light glowing coil with ambient blue waves"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left"
        />

        {/* Subtle right-side dark gradient to ensure crisp typography while preserving blue wave glows */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, transparent 33%, rgba(0,6,19,0.35) 45%, rgba(0,6,19,0.75) 60%, rgba(0,6,19,0.92) 100%)',
          }}
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

      {/* 2. Content Container */}
      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Mobile & Tablet Rope Light Visual Banner (below lg) */}
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

        {/* Desktop Grid Layout:
            - Cols 1–4 (0% to ~33%): Left area dedicated to the glowing rope light coil (no text overlay)
            - Cols 5–7 (~33% to ~58%): 220V Direct Mains Rope Light callout
            - Cols 8–12 (~58% to 100%): WHY CHOOSE ASCO header, description & 6 features
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center">
          {/* Spacer for coil on desktop (Cols 1–4) */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-4 pointer-events-none" aria-hidden="true" />

          {/* Left Callout: 220V Direct Mains Rope Light (Cols 5–7) */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-center lg:pr-2">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[1.75rem] text-ink leading-[1.2] mb-3 drop-shadow-md">
              220V Direct Mains
              <br />
              Rope Light
            </h3>

            <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mb-6 max-w-xs drop-shadow-sm">
              No driver. No hassle. Just reliable
              <br className="hidden sm:inline" /> and long-lasting performance.
            </p>

            <div>
              <Link
                href="/products#rope-light"
                aria-label="Learn more about 220V Direct Mains Rope Light"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-bg font-semibold text-xs sm:text-sm bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-[0_0_20px_rgba(6,161,255,0.45)] hover:shadow-[0_0_28px_rgba(63,203,248,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Section: Why Choose ASCO (Cols 8–12) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center lg:pl-4 xl:pl-6">
            {/* Eyebrow with horizontal line dividers */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
              <span className="h-[2px] w-6 sm:w-8 bg-primary rounded-full" aria-hidden="true" />
              <span className="text-primary text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                WHY CHOOSE ASCO
              </span>
              <span className="h-[2px] w-6 sm:w-8 bg-primary rounded-full" aria-hidden="true" />
            </div>

            {/* Heading: Built for Performance, Designed for Excellence */}
            <h2
              id="why-choose-heading"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2.25rem] text-ink leading-tight tracking-tight mb-3 sm:mb-4 drop-shadow-md"
            >
              Built for Performance,
              <br />
              Designed for <span className="text-primary">E</span>xcellence
            </h2>

            {/* Paragraph */}
            <p className="text-ink-muted text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-xl mb-6 sm:mb-7">
              At ASCO, we deliver high-quality, innovative LED lighting solutions with unmatched
              durability, energy efficiency, and modern design — trusted by contractors, designers,
              and homeowners across Pakistan.
            </p>

            {/* 6 Feature Bullets in 2 Columns matching mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-3.5 max-w-xl">
              {/* Column 1 */}
              <div className="flex flex-col gap-3.5">
                {col1Features.map((text) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(6,161,255,0.4)]">
                      <Check className="w-3.5 h-3.5 text-bg stroke-[3]" aria-hidden="true" />
                    </span>
                    <span className="text-ink text-xs sm:text-[13px] lg:text-xs xl:text-sm font-medium tracking-wide whitespace-nowrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-3.5">
                {col2Features.map((text) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(6,161,255,0.4)]">
                      <Check className="w-3.5 h-3.5 text-bg stroke-[3]" aria-hidden="true" />
                    </span>
                    <span className="text-ink text-xs sm:text-[13px] lg:text-xs xl:text-sm font-medium tracking-wide whitespace-nowrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

