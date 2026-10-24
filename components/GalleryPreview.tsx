'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig, type GalleryItem } from '@/lib/site';
import Reveal from '@/components/Reveal';

export function GalleryPreview() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-preview-heading"
      className="relative w-full max-w-full py-12 sm:py-20 lg:py-24 bg-bg overflow-hidden"
    >
      {/* Background ambient glowing curves */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none opacity-35 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 170 C 350 210, 650 90, 1050 150 C 1250 180, 1380 130, 1440 140"
            stroke="url(#galleryGlow)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="galleryGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06A1FF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3FCBF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0162D1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1536px] mx-auto px-5 sm:px-6 lg:px-8">
        <Reveal distance={20} duration={600} className="text-center">
          {/* Eyebrow with horizontal line dividers */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-3">
            <span className="h-[2px] w-6 sm:w-8 bg-accent rounded-full" aria-hidden="true" />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase">
              OUR GALLERY
            </span>
            <span className="h-[2px] w-6 sm:w-8 bg-accent rounded-full" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2
            id="gallery-preview-heading"
            className="text-center font-heading font-bold text-[clamp(1.5rem,1.1rem+2vw,2.5rem)] text-ink leading-[1.18] tracking-[-0.02em] mb-6 sm:mb-10 drop-shadow-md text-balance"
          >
            Lighting Solutions in Real Spaces
          </h2>
        </Reveal>

        {/* 4 Images: 2-column grid on mobile, 4-column on desktop with consistent aspect ratio */}
        <Reveal
          stagger={75}
          duration={650}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-5 xl:gap-6 w-full"
        >
          {siteConfig.gallery.map((item: GalleryItem) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl border border-cyan-500/20 hover:border-cyan-400/50 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_28px_rgba(63,203,248,0.25)] hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </Reveal>

        {/* Centered Outlined Pill Button */}
        <div className="text-center mt-7 sm:mt-10">
          <Link
            href="/gallery"
            aria-label="View complete ASCO LED lighting gallery and projects"
            className="btn-secondary-glow inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 min-h-[44px] rounded-full text-ink font-semibold text-xs sm:text-sm shadow-[0_0_15px_rgba(6,161,255,0.25)] hover:shadow-[0_0_22px_rgba(63,203,248,0.5)] transition-all duration-300 group max-sm:w-full max-sm:max-w-xs"
          >
            <span>View More Projects</span>
            <ArrowRight
              className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

