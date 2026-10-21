'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig, type GalleryItem } from '@/lib/site';

export function GalleryPreview() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-preview-heading"
      className="relative w-full w-screen max-w-[100vw] py-16 sm:py-20 lg:py-24 bg-bg overflow-hidden"
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
            d="M-50 170 C 350 210, 650 90, 1050 150 C 1250 180, 1450 130, 1550 140"
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

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Eyebrow with horizontal line dividers */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-3">
          <span className="h-[2px] w-6 sm:w-8 bg-primary rounded-full" aria-hidden="true" />
          <span className="text-primary text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            OUR GALLERY
          </span>
          <span className="h-[2px] w-6 sm:w-8 bg-primary rounded-full" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2
          id="gallery-preview-heading"
          className="text-center font-heading font-bold text-2xl sm:text-3xl lg:text-[2.25rem] text-ink leading-tight tracking-tight mb-8 sm:mb-10 drop-shadow-md"
        >
          Lighting Solutions in Real Spaces
        </h2>

        {/* 4 Images in Rounded Bordered Frames spanning 100vw */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-5 xl:gap-6 2xl:gap-8 w-full">
          {siteConfig.gallery.map((item: GalleryItem) => (
            <div
              key={item.id}
              className="group relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-2xl border border-primary/50 hover:border-accent shadow-[0_0_20px_rgba(6,161,255,0.18)] hover:shadow-[0_0_28px_rgba(63,203,248,0.4)] transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Centered Outlined Pill Button matching mockup */}
        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/gallery"
            aria-label="View complete ASCO LED lighting gallery and projects"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 rounded-full text-ink font-semibold text-xs sm:text-sm border border-primary/90 bg-bg/70 hover:bg-primary/10 hover:border-accent hover:text-accent shadow-[0_0_15px_rgba(6,161,255,0.25)] hover:shadow-[0_0_22px_rgba(63,203,248,0.5)] transition-all duration-300 group"
          >
            <span>View More Projects</span>
            <ArrowRight
              className="w-4 h-4 text-primary group-hover:text-accent transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

