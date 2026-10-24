'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import type { Category } from '@/lib/products';
import { useInView } from '@/hooks/useInView';

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const cornerBase =
  'absolute w-5 h-5 border-accent/80 pointer-events-none transition-opacity opacity-70 group-hover:opacity-100 z-20';

export interface CategoryFeatureRowProps {
  category: Category;
  number: number;
  isImageOnRight: boolean;
  tagline: string;
  bullets: string[];
  eyebrow?: string;
  priority?: boolean;
}

export function CategoryFeatureRow({
  category,
  number,
  isImageOnRight,
  tagline,
  bullets,
  eyebrow,
  priority = false,
}: CategoryFeatureRowProps) {
  const [ref, visible] = useInView<HTMLElement>();

  const label = eyebrow || category.name.toUpperCase();
  const quoteUrl = `https://wa.me/${siteConfig.whatsapp.primaryNumber}?text=${encodeURIComponent(
    `Hello ASCO, I would like to get a quote for ${category.name}.`
  )}`;

  // LEFT / TEXT CONTENT
  const textContent = (
    <div className="relative flex flex-col justify-center pt-6 pb-2 sm:pt-8 lg:py-6 overflow-visible">
      {/* Huge Faint Watermark Number Behind (01 - 05) */}
      <span
        aria-hidden="true"
        className="absolute top-0 right-0 sm:right-2 font-heading font-extrabold text-7xl sm:text-8xl lg:text-9xl leading-none text-transparent select-none pointer-events-none opacity-30 z-0"
        style={{ WebkitTextStroke: '1px rgba(63, 203, 248, 0.28)' }}
      >
        {String(number).padStart(2, '0')}
      </span>

      <div className="relative z-10">
        {/* Eyebrow with decorative cyan line */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="h-px w-8 bg-accent shadow-[0_0_8px_rgba(63,203,248,0.8)]"
            aria-hidden="true"
          />
          <span className="text-accent text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase">
            {label}
          </span>
        </div>

        {/* Large Heading */}
        <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.6rem] text-ink tracking-[-0.02em] leading-[1.14]">
          {category.name}
        </h2>

        {/* Cyan Tagline */}
        <p className="font-semibold text-base sm:text-lg text-accent mt-2 tracking-[-0.01em]">
          {tagline}
        </p>

        {/* Short Description */}
        <p className="text-slate-300 text-sm sm:text-[15px] lg:text-base mt-3 sm:mt-4 leading-[1.65] max-w-2xl xl:max-w-3xl">
          {category.description}
        </p>

        {/* 2-Column Checklist with real data items */}
        <ul className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-2xl xl:max-w-3xl">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-0.5 w-5 h-5 rounded-full bg-accent/15 border border-accent/70 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(63,203,248,0.45)]"
                aria-hidden="true"
              >
                <Check className="w-3 h-3 text-accent stroke-[3]" />
              </span>
              <span className="text-sm text-ink/95 font-medium leading-snug">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Actions: "View Details" (filled cyan) and "Get a Quote" (outline WhatsApp) */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5">
          <Link
            href={`/products/${category.slug}`}
            className="group/btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-[#000613] text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(6,161,255,0.45)] hover:shadow-[0_0_28px_rgba(63,203,248,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>View Details</span>
            <ArrowRight
              className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Link>

          <a
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-glow inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-ink text-sm font-semibold shadow-[0_0_14px_rgba(6,161,255,0.2)] hover:shadow-[0_0_22px_rgba(63,203,248,0.4)] transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-whatsapp" />
            <span>Get a Quote</span>
          </a>
        </div>
      </div>
    </div>
  );

  // RIGHT / IMAGE CONTENT (Rounded dark frame with cyan corner brackets)
  const imageContent = (
    <div className="group relative">
      {/* Ambient glow behind frame */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-accent/25 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div
        className="relative z-10 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10] xl:aspect-[16/9] max-h-[500px] rounded-3xl border border-cyan-500/25 bg-[#00102a] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.45)] group-hover:border-cyan-400/50 group-hover:shadow-[0_0_42px_rgba(63,203,248,0.35)] transition-all duration-500 flex items-center justify-center p-4 sm:p-6"
        style={{
          WebkitMaskImage: 'radial-gradient(circle at center, #000 68%, transparent 100%)',
          maskImage: 'radial-gradient(circle at center, #000 68%, transparent 100%)',
        }}
      >
        <Image
          src={category.image}
          alt={category.alt || category.name}
          fill
          unoptimized
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority}
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Cyan sheen overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(6, 161, 255, 0.12) 0%, transparent 40%, rgba(63, 203, 248, 0.08) 100%)',
          }}
        />

        {/* Cyan corner brackets */}
        <span aria-hidden="true" className={`${cornerBase} top-3 left-3 border-t-2 border-l-2 rounded-tl-lg`} />
        <span aria-hidden="true" className={`${cornerBase} top-3 right-3 border-t-2 border-r-2 rounded-tr-lg`} />
        <span aria-hidden="true" className={`${cornerBase} bottom-3 left-3 border-b-2 border-l-2 rounded-bl-lg`} />
        <span aria-hidden="true" className={`${cornerBase} bottom-3 right-3 border-b-2 border-r-2 rounded-br-lg`} />
      </div>
    </div>
  );

  return (
    <article
      ref={ref}
      id={category.slug}
      className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-20 items-center transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/*
        Mobile (375px): rows stack with image on top (order-1: image, order-2: text).
        Desktop (lg):
        - If isImageOnRight: text is lg:order-1, image is lg:order-2
        - If !isImageOnRight: image is lg:order-1, text is lg:order-2
      */}
      {isImageOnRight ? (
        <>
          <div className="order-2 lg:order-1">{textContent}</div>
          <div className="order-1 lg:order-2">{imageContent}</div>
        </>
      ) : (
        <>
          <div className="order-1 lg:order-1">{imageContent}</div>
          <div className="order-2 lg:order-2">{textContent}</div>
        </>
      )}
    </article>
  );
}

export default CategoryFeatureRow;
