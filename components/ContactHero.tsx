'use client';

import Image from 'next/image';
import { Mail } from 'lucide-react';

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative w-full max-w-[100vw] min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] xl:min-h-[660px] flex items-center pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-28 lg:pb-16 overflow-hidden bg-[#000613]"
    >
      {/* 1. Background Image with Ambient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Image
          src="/asco_separate_images_webp/about/about-asco-page.webp"
          alt="ASCO Innovative Technologies illuminated architectural building at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-[85%_center] lg:object-[88%_center]"
        />

        {/* Left dark gradient behind text for high legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 6, 19, 0.96) 0%, rgba(0, 6, 19, 0.90) 30%, rgba(0, 6, 19, 0.65) 48%, rgba(0, 6, 19, 0.25) 62%, transparent 78%)',
          }}
        />

        {/* Mobile & tablet darkness overlay */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#000613] via-[#000613]/75 to-[#000613]/50" />

        {/* Top gradient for transparent navbar readability */}
        <div
          className="absolute inset-x-0 top-0 h-28"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 6, 19, 0.88) 0%, rgba(0, 6, 19, 0.4) 60%, transparent 100%)',
          }}
        />

        {/* Bottom blend gradient into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-20"
          style={{
            background: 'linear-gradient(0deg, #000613 0%, rgba(0, 6, 19, 0.65) 40%, transparent 100%)',
          }}
        />
      </div>

      {/* 2. Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow with decorative top bar matching reference image */}
          <div className="mb-3">
            <span className="block h-[2px] w-7 sm:w-8 bg-accent rounded-full mb-2.5 shadow-[0_0_8px_rgba(63,203,248,0.7)]" aria-hidden="true" />
            <p className="text-accent text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase">
              GET IN TOUCH
            </p>
          </div>

          {/* Heading */}
          <h1
            id="contact-hero-heading"
            style={{
              textShadow: '0 2px 20px rgba(0, 6, 19, 0.95), 0 0 45px rgba(0, 6, 19, 0.9)',
            }}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.35rem] text-ink leading-[1.12] tracking-tight mb-4 drop-shadow-md"
          >
            Let&apos;s Build a <span className="text-accent">Brighter</span>
            <br />
            Future Together
          </h1>

          {/* Subtext */}
          <p className="text-ink-muted text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-lg mb-7 sm:mb-8 drop-shadow-sm">
            Have a question, project inquiry, or need expert advice?
            <br className="hidden sm:inline" /> Our team at ASCO is here to help. Reach out to us through
            <br className="hidden sm:inline" /> any of the channels below &mdash; we&apos;d love to hear from you.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#inquiry-form"
              aria-label="Send us a message through the contact form"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-primary/90 bg-[#000613]/70 hover:bg-primary/20 hover:border-accent hover:text-accent shadow-[0_0_18px_rgba(6,161,255,0.35)] hover:shadow-[0_0_26px_rgba(63,203,248,0.6)] text-ink font-semibold text-xs sm:text-sm transition-all duration-300 group cursor-pointer"
            >
              <Mail className="w-4 h-4 text-accent shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>Send Us a Message</span>
              <span className="text-accent text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
