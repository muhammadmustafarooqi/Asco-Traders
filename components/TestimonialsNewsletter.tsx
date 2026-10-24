'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { StayUpdated } from './StayUpdated';

export function TestimonialsNewsletter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = siteConfig.testimonials.length;

  // Duplicate items array to guarantee continuous, gapless cards across all viewport sizes
  const carouselItems = [...siteConfig.testimonials, ...siteConfig.testimonials];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index % totalSlides);
    },
    [totalSlides]
  );

  // Auto-play interval: rotates every 4.5s when not hovered or active
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile and tablets
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };


  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative w-full w-screen max-w-[100vw] py-10 sm:py-12 lg:py-14 bg-bg overflow-hidden"
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

      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Carousel Container */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding Track with responsive CSS variables */}
          <div
            className="flex transition-transform duration-500 ease-out [--slide-w:100%] sm:[--slide-w:50%] lg:[--slide-w:33.333333%]"
            style={{
              transform: `translateX(calc(-${currentIndex} * var(--slide-w)))`,
            }}
          >
            {carouselItems.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="w-[var(--slide-w)] shrink-0 px-2 sm:px-3 pb-2"
              >
                <div className="relative h-full rounded-2xl border border-primary/40 bg-[#00102a]/85 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between shadow-[0_0_20px_rgba(6,161,255,0.08)] hover:border-primary/80 hover:shadow-[0_0_25px_rgba(6,161,255,0.22)] transition-all duration-300 min-h-[220px]">
                  <div>
                    {/* Header: Quotes Icon + 5-Star Rating */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="text-primary" aria-hidden="true">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-primary" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <div className="flex items-center gap-1" aria-label="5 stars">
                        {[...Array(5)].map((_, starIdx) => (
                          <svg
                            key={starIdx}
                            className="w-3.5 h-3.5 fill-accent text-accent"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-ink text-xs sm:text-sm font-normal leading-relaxed mb-5">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Client Info: Avatar + Name + Title */}
                  <div className="flex items-center gap-3 pt-3 border-t border-line/30">
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-primary/50 shrink-0 shadow-[0_0_10px_rgba(6,161,255,0.25)]">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
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
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Controls: Prev Button, 4 Dots, Next Button */}
        <div className="flex items-center justify-center gap-3.5 my-6 sm:my-7">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="w-8 h-8 rounded-full border border-primary/40 bg-[#00102a]/80 text-primary flex items-center justify-center hover:border-primary hover:bg-primary/20 hover:text-accent hover:scale-105 active:scale-95 transition-all shadow-[0_0_10px_rgba(6,161,255,0.15)]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials pagination">
            {siteConfig.testimonials.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                role="tab"
                aria-selected={currentIndex === dotIndex}
                onClick={() => goToSlide(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={`transition-all duration-300 ${
                  currentIndex === dotIndex
                    ? 'w-7 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(6,161,255,0.7)]'
                    : 'w-2 h-2 rounded-full bg-line/80 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="w-8 h-8 rounded-full border border-primary/40 bg-[#00102a]/80 text-primary flex items-center justify-center hover:border-primary hover:bg-primary/20 hover:text-accent hover:scale-105 active:scale-95 transition-all shadow-[0_0_10px_rgba(6,161,255,0.15)]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2. "Stay Updated" Banner Card */}
        <StayUpdated />
      </div>
    </section>
  );
}

export const Testimonials = TestimonialsNewsletter;

