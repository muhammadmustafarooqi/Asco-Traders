'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { StayUpdated } from './StayUpdated';
import Reveal from '@/components/Reveal';

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
      className="relative w-full max-w-full py-10 sm:py-12 lg:py-14 bg-bg overflow-hidden"
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

      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1536px] mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal distance={20} duration={600} className="text-center">
          {/* Eyebrow with horizontal line dividers */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2.5">
            <span className="h-[2px] w-6 sm:w-8 bg-accent rounded-full" aria-hidden="true" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase">
              WHAT OUR CLIENTS SAY
            </span>
            <span className="h-[2px] w-6 sm:w-8 bg-accent rounded-full" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2
            id="testimonials-heading"
            className="text-center font-heading font-bold text-[clamp(1.5rem,1.1rem+2vw,2.5rem)] text-ink leading-[1.18] tracking-[-0.02em] mb-6 sm:mb-8 drop-shadow-md text-balance"
          >
            Trusted by Thousands
          </h2>
        </Reveal>

        {/* Carousel Container */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding Track on lg+ (desktop), active card on mobile and tablet (<lg) to eliminate offscreen DOM overflow */}
          <div
            className="flex transition-transform duration-500 ease-out lg:[--slide-w:33.333333%]"
            style={{
              transform: undefined,
            }}
          >
            <div
              className="hidden lg:flex transition-transform duration-500 ease-out w-full"
              style={{
                transform: `translateX(calc(-${currentIndex} * var(--slide-w)))`,
              }}
            >
              {carouselItems.map((t, idx) => {
                const initials = t.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <div
                    key={`${t.id}-desktop-${idx}`}
                    className="w-[var(--slide-w)] shrink-0 px-2 sm:px-3 pb-2"
                  >
                    <div className="relative h-full rounded-2xl border border-cyan-500/20 bg-[#00102a]/85 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(63,203,248,0.2)] transition-all duration-300 min-h-[220px]">
                      <div>
                        {/* Quotes Icon */}
                        <div className="text-primary mb-3" aria-hidden="true">
                          <svg className="w-6 h-6 fill-accent opacity-85" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>

                        {/* Review Text */}
                        <p className="text-slate-200 text-xs sm:text-sm font-normal leading-[1.65] mb-5">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                      </div>

                      {/* Client Info Row: Avatar + Name/Role + 5-Star Rating fit on one line */}
                      <div className="flex items-center justify-between gap-2 pt-3 border-t border-cyan-500/15">
                        <div className="flex items-center gap-2.5 min-w-0">
                          {t.avatar ? (
                            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-accent/40 shrink-0 shadow-[0_0_10px_rgba(6,161,255,0.2)]">
                              <Image
                                src={t.avatar}
                                alt={t.name}
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div
                              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-heading font-bold text-xs text-bg shrink-0 shadow-[0_0_10px_rgba(6,161,255,0.4)]"
                              aria-hidden="true"
                            >
                              {initials}
                            </div>
                          )}
                          <div className="min-w-0">
                            <h3 className="font-heading font-semibold text-ink text-xs sm:text-sm leading-tight tracking-[-0.01em] truncate">
                              {t.name}
                            </h3>
                            <p className="text-ink-muted text-[10px] sm:text-xs leading-tight mt-0.5 truncate">
                              {t.role}
                            </p>
                          </div>
                        </div>

                        {/* 5 Stars */}
                        <div className="flex items-center gap-0.5 shrink-0" aria-label="5 stars">
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
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile & Tablet View (<1024px): Render active card cleanly to prevent off-screen overflow */}
            <div className="lg:hidden w-full max-w-xl mx-auto px-1 pb-2">
              {(() => {
                const currentTestimonial = siteConfig.testimonials[currentIndex % totalSlides];
                const initials = currentTestimonial.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase();

                return (
                  <div className="relative w-full rounded-2xl border border-cyan-500/20 bg-[#00102a]/85 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.4)] min-h-[200px] transition-opacity duration-300">
                    <div>
                      {/* Quotes Icon */}
                      <div className="text-primary mb-3" aria-hidden="true">
                        <svg className="w-6 h-6 fill-accent opacity-85" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Review Text */}
                      <p className="text-slate-200 text-xs sm:text-sm font-normal leading-[1.65] mb-5">
                        &ldquo;{currentTestimonial.quote}&rdquo;
                      </p>
                    </div>

                    {/* Client Info Row: Avatar, Name & Stars fit on ONE line without overflow */}
                    <div className="flex items-center justify-between gap-2 pt-3 border-t border-cyan-500/15">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {currentTestimonial.avatar ? (
                          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-accent/40 shrink-0 shadow-[0_0_10px_rgba(6,161,255,0.2)]">
                            <Image
                              src={currentTestimonial.avatar}
                              alt={currentTestimonial.name}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-heading font-bold text-xs text-bg shrink-0 shadow-[0_0_10px_rgba(6,161,255,0.4)]"
                            aria-hidden="true"
                          >
                            {initials}
                          </div>
                        )}
                        <div className="min-w-0">
                          <h3 className="font-heading font-semibold text-ink text-xs sm:text-sm leading-tight tracking-[-0.01em] truncate">
                            {currentTestimonial.name}
                          </h3>
                          <p className="text-ink-muted text-[10px] sm:text-xs leading-tight mt-0.5 truncate">
                            {currentTestimonial.role}
                          </p>
                        </div>
                      </div>

                      {/* 5 Stars */}
                      <div className="flex items-center gap-0.5 shrink-0" aria-label="5 stars">
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
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Carousel Navigation Controls: Prev Button, 4 Dots, Next Button (44px tap targets) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 my-6 sm:my-7">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-primary/40 bg-[#00102a]/80 text-primary flex items-center justify-center hover:border-primary hover:bg-primary/20 hover:text-accent hover:scale-105 active:scale-95 transition-all shadow-[0_0_10px_rgba(6,161,255,0.15)] cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center" role="tablist" aria-label="Testimonials pagination">
            {siteConfig.testimonials.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                role="tab"
                aria-selected={currentIndex % totalSlides === dotIndex}
                onClick={() => goToSlide(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className="p-2 sm:p-2.5 min-w-[40px] sm:min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer focus:outline-none"
              >
                <span
                  className={`transition-all duration-300 block ${
                    currentIndex % totalSlides === dotIndex
                      ? 'w-6 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(6,161,255,0.7)]'
                      : 'w-2 h-2 rounded-full bg-line/80 hover:bg-primary/50'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-primary/40 bg-[#00102a]/80 text-primary flex items-center justify-center hover:border-primary hover:bg-primary/20 hover:text-accent hover:scale-105 active:scale-95 transition-all shadow-[0_0_10px_rgba(6,161,255,0.15)] cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* 2. "Stay Updated" Banner Card */}
        <StayUpdated />
      </div>
    </section>
  );
}

export const Testimonials = TestimonialsNewsletter;

