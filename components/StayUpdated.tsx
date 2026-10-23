'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, CheckCircle2 } from 'lucide-react';

export interface StayUpdatedProps {
  className?: string;
  id?: string;
  variant?: 'newsletter' | 'cta';
}

const CARD_BG = '#00091d';

// Fades the image's own left edge into the card
const LANDMARK_MASK =
  'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 25%, #000 55%)';

export function StayUpdated({ className = '', id, variant = 'newsletter' }: StayUpdatedProps) {
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

  // --- CTA Variant (Used on About page as shown in reference image) ---
  if (variant === 'cta') {
    return (
      <div
        id={id}
        className={`relative w-full rounded-2xl border border-primary/60 overflow-hidden backdrop-blur-md shadow-[0_0_30px_rgba(6,161,255,0.28),inset_0_0_35px_rgba(6,161,255,0.12)] min-h-[155px] sm:min-h-[165px] lg:min-h-[185px] xl:min-h-[200px] flex items-center ${className}`}
        style={{
          background:
            'linear-gradient(100deg, rgba(8,38,88,0.72) 0%, rgba(4,22,56,0.82) 55%, rgba(2,12,34,0.9) 100%)',
        }}
      >
        {/* Right side: Landmark image with dual mask identical to newsletter */}
        <div
          className="hidden md:block absolute right-0 bottom-0 h-full w-[46%] lg:w-[42%] xl:w-[38%] pointer-events-none select-none z-0"
          aria-hidden="true"
          style={{
            WebkitMaskImage: LANDMARK_MASK,
            maskImage: LANDMARK_MASK,
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect',
          }}
        >
          <Image
            src="/asco_separate_images_webp/stay_updated_landmark.webp"
            alt="ASCO architectural landmark illuminated at night"
            fill
            priority
            sizes="(max-width: 1024px) 46vw, 38vw"
            className="object-cover object-[75%_85%] brightness-90 saturate-[0.9]"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${CARD_BG} 0%, rgba(0,9,29,0.55) 35%, transparent 70%)`,
            }}
          />
        </div>

        {/* Content: Constrained to left ~65% so the button sits in the center-left adjacent to text */}
        <div className="relative z-10 w-full px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8 xl:px-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 lg:gap-8 xl:gap-12 md:max-w-[62%] lg:max-w-[68%]">
          <div className="flex-1 min-w-0">
            <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-[1.75rem] text-ink leading-tight tracking-tight">
              Let&apos;s Light Up a Better <span className="text-accent">Future Together</span>
            </h2>
            <p className="text-ink-muted text-xs sm:text-sm lg:text-[14px] mt-1.5 font-normal leading-relaxed">
              Partner with ASCO for premium LED lighting solutions.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              aria-label="Contact ASCO for LED lighting solutions"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-primary/90 bg-[#000613]/70 hover:bg-primary/15 hover:border-accent hover:text-accent shadow-[0_0_15px_rgba(6,161,255,0.25)] hover:shadow-[0_0_22px_rgba(63,203,248,0.5)] text-ink font-semibold text-xs sm:text-sm transition-all duration-300 group"
            >
              <span>Contact Us</span>
              <span className="text-accent text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- Default Newsletter Variant ---
  return (
    <div
      id={id}
      className={`relative w-full rounded-2xl border border-primary/60 overflow-hidden backdrop-blur-md shadow-[0_0_30px_rgba(6,161,255,0.28),inset_0_0_35px_rgba(6,161,255,0.12)] min-h-[155px] sm:min-h-[165px] lg:min-h-[185px] xl:min-h-[200px] flex items-center ${className}`}
      style={{
        background:
          'linear-gradient(100deg, rgba(8,38,88,0.72) 0%, rgba(4,22,56,0.82) 55%, rgba(2,12,34,0.9) 100%)',
      }}
    >
      {/* Landmark: sized as a % of card width */}
      <div
        className="hidden md:block absolute right-0 bottom-0 h-full w-[46%] lg:w-[42%] xl:w-[38%] pointer-events-none select-none z-0"
        aria-hidden="true"
        style={{
          WebkitMaskImage: LANDMARK_MASK,
          maskImage: LANDMARK_MASK,
          WebkitMaskComposite: 'source-in',
          maskComposite: 'intersect',
        }}
      >
        <Image
          src="/asco_separate_images_webp/stay_updated_landmark.webp"
          alt="ASCO architectural landmark illuminated at night"
          fill
          priority
          sizes="(max-width: 1024px) 46vw, 38vw"
          className="object-cover object-[75%_85%] brightness-90 saturate-[0.9]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${CARD_BG} 0%, rgba(0,9,29,0.55) 35%, transparent 70%)`,
          }}
        />
      </div>

      {/* Content: kept in the left ~2/3 */}
      <div className="relative z-10 w-full px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8 xl:px-14 flex flex-col lg:flex-row items-center lg:items-center gap-5 lg:gap-10 xl:gap-16 md:max-w-[62%] lg:max-w-[68%]">
        {/* Left: round glowing mail icon + heading & subtext */}
        <div className="flex items-center gap-4 sm:gap-5 w-full lg:w-auto shrink-0">
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#000613]/70 border border-primary/60 flex items-center justify-center shrink-0 shadow-[0_0_22px_rgba(6,161,255,0.4),inset_0_0_12px_rgba(6,161,255,0.15)]"
            aria-hidden="true"
          >
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl xl:text-[1.7rem] text-ink leading-tight">
              Stay Updated
            </h3>
            <p className="text-ink-muted text-xs sm:text-[13px] xl:text-sm mt-1">
              Get the latest updates, products and offers from ASCO.
            </p>
          </div>
        </div>

        {/* Email pill */}
        <div className="w-full lg:flex-1 lg:max-w-[420px] xl:max-w-[500px]">
          {subscribed ? (
            <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary/15 border border-primary/50 text-accent text-xs sm:text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full flex items-center rounded-full border border-primary/60 bg-[#000613]/90 p-1 sm:p-1.5 shadow-[0_0_22px_rgba(6,161,255,0.22)] focus-within:border-accent focus-within:shadow-[0_0_28px_rgba(63,203,248,0.4)] transition-all duration-300"
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
                className="w-full bg-transparent px-4 sm:px-5 py-2.5 text-ink text-xs sm:text-sm placeholder:text-ink-muted/70 focus:outline-none min-w-0"
              />
              <button
                type="submit"
                className="shrink-0 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-bg font-bold text-xs sm:text-sm bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-[0_0_15px_rgba(6,161,255,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export const NewsletterBanner = StayUpdated;
export const Newsletter = StayUpdated;
export default StayUpdated;