'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function TestimonialsNewsletter() {
  const [activeDot, setActiveDot] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative w-full py-10 sm:py-12 lg:py-14 bg-bg overflow-hidden"
    >
      {/* 1. Panoramic Background with blue wave glows (glue-bg.webp) */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/asco_separate_images_webp/glue-bg.webp"
          alt="Ambient neon lighting curves background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Subtle top blend gradient into gallery section */}
        <div
          className="absolute inset-x-0 top-0 h-12"
          style={{
            background: 'linear-gradient(180deg, var(--color-bg) 0%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Eyebrow with horizontal line dividers */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2.5">
          <span className="h-[2px] w-6 sm:w-8 bg-primary rounded-full" aria-hidden="true" />
          <span className="text-primary text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            WHAT OUR CLIENTS SAY
          </span>
          <span className="h-[2px] w-6 sm:w-8 bg-primary rounded-full" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2
          id="testimonials-heading"
          className="text-center font-heading font-bold text-2xl sm:text-3xl lg:text-[2.25rem] text-ink leading-tight tracking-tight mb-6 sm:mb-8 drop-shadow-md"
        >
          Trusted by Thousands
        </h2>

        {/* 3 Testimonials Cards Grid matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 mb-4 sm:mb-5">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="relative rounded-2xl border border-primary/40 bg-[#00102a]/80 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between shadow-[0_0_20px_rgba(6,161,255,0.08)] hover:border-primary/80 hover:shadow-[0_0_25px_rgba(6,161,255,0.2)] transition-all duration-300"
            >
              <div>
                {/* Cyan Double Quotes Icon */}
                <div className="mb-3 text-primary" aria-hidden="true">
                  <svg className="w-7 h-7 fill-primary" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Review Text */}
                <p className="text-ink text-xs sm:text-sm font-normal leading-relaxed mb-5">
                  {t.quote}
                </p>
              </div>

              {/* Client Info: Avatar + Name + Title */}
              <div className="flex items-center gap-3 pt-2.5 border-t border-line/30">
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-primary/50 shrink-0 shadow-[0_0_10px_rgba(6,161,255,0.25)]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    priority
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-ink text-xs sm:text-sm leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-ink-muted text-[11px] sm:text-xs leading-tight mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pagination Dots matching mockup */}
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8" aria-hidden="true">
          {[0, 1, 2, 3].map((dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setActiveDot(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`transition-all duration-300 ${
                activeDot === dotIndex
                  ? 'w-5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(6,161,255,0.6)]'
                  : 'w-1.5 h-1.5 rounded-full bg-line/80 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* 2. "Stay Updated" Banner Card matching mockup */}
        <div className="relative w-full rounded-2xl border-[1.5px] border-primary/70 bg-[#00091d] overflow-hidden shadow-[0_0_35px_rgba(6,161,255,0.25)]">
          {/* Panoramic Landmark Scene on the right half - matches mockup Pic 2 */}
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-3/5 lg:w-1/2 pointer-events-none z-0 overflow-hidden">
            <Image
              src="/asco_separate_images_webp/stay_updated_scene.webp"
              alt="ASCO illuminated landmark at night"
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 50vw"
              className="object-cover object-right"
            />
            {/* Smooth left fade to blend the scene into the card's dark navy background */}
            <div
              className="absolute inset-y-0 left-0 w-36 lg:w-48 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, #00091d 0%, rgba(0,9,29,0.7) 40%, transparent 100%)',
              }}
            />
          </div>

          {/* Card Content Container */}
          <div className="relative z-10 px-6 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-7 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
            {/* Left: Glowing Mail Icon + Heading & Subtext */}
            <div className="flex items-center gap-4 sm:gap-5 w-full lg:w-auto">
              <div
                className="w-13 h-13 sm:w-14 sm:h-14 p-3 rounded-2xl bg-primary/10 border border-primary/70 flex items-center justify-center shrink-0 shadow-[0_0_18px_rgba(6,161,255,0.35)]"
                aria-hidden="true"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-ink leading-tight">
                  Stay Updated
                </h3>
                <p className="text-ink-muted text-xs sm:text-[13px] mt-1">
                  Get the latest updates, products and offers from ASCO.
                </p>
              </div>
            </div>

            {/* Middle: Email Input Pill Form matching mockup */}
            <div className="w-full lg:max-w-md xl:max-w-lg z-10">
              {subscribed ? (
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/50 text-accent text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Thank you for subscribing to ASCO updates!</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex items-center rounded-full border border-primary/60 bg-[#000613]/95 p-1 sm:p-1.5 shadow-[0_0_20px_rgba(6,161,255,0.18)] focus-within:border-accent focus-within:shadow-[0_0_25px_rgba(63,203,248,0.35)] transition-all duration-300"
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="w-full bg-transparent px-4 py-2 text-ink text-xs sm:text-sm placeholder:text-ink-muted/70 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-6 sm:px-7 py-2.5 rounded-full text-bg font-bold text-xs sm:text-sm bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-[0_0_15px_rgba(6,161,255,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Right: Spacer on wide screens to leave landmark unobstructed */}
            <div className="hidden xl:block w-40 pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
