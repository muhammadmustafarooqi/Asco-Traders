import Image from 'next/image';
import Link from 'next/link';
import type { Category } from '@/lib/products';

interface ProductCardProps {
  product: Category;
  isFeaturedMobile?: boolean;
}

function CornerBrackets() {
  const base =
    'absolute w-3 h-3 border-accent/80 pointer-events-none transition-opacity opacity-40 group-hover:opacity-100';
  return (
    <>
      <span aria-hidden="true" className={`${base} top-2 left-2 border-t-2 border-l-2 rounded-tl-[3px]`} />
      <span aria-hidden="true" className={`${base} top-2 right-2 border-t-2 border-r-2 rounded-tr-[3px]`} />
      <span aria-hidden="true" className={`${base} bottom-2 left-2 border-b-2 border-l-2 rounded-bl-[3px]`} />
      <span aria-hidden="true" className={`${base} bottom-2 right-2 border-b-2 border-r-2 rounded-br-[3px]`} />
    </>
  );
}

export function ProductCard({ product, isFeaturedMobile = false }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group relative flex justify-between h-full rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-card/80 via-surface/85 to-bg/95 p-3.5 sm:p-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-cyan-400/50 hover:shadow-[0_8px_30px_rgba(63,203,248,0.25)] hover:-translate-y-1.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px] ${
        isFeaturedMobile
          ? 'flex-row items-center gap-4 sm:flex-col sm:items-stretch sm:gap-0'
          : 'flex-col'
      }`}
      aria-label={`Explore ${product.name}`}
    >
      <CornerBrackets />

      {/* Product Image in Rounded Container with soft edge-fade */}
      <div
        className={`relative overflow-hidden rounded-xl bg-[#00102a] border border-cyan-500/15 p-2 flex items-center justify-center shrink-0 ${
          isFeaturedMobile
            ? 'w-24 h-24 sm:w-full sm:h-auto sm:aspect-square mb-0 sm:mb-3'
            : 'w-full aspect-square mb-3'
        }`}
        style={{
          WebkitMaskImage: 'radial-gradient(circle at center, #000 68%, transparent 100%)',
          maskImage: 'radial-gradient(circle at center, #000 68%, transparent 100%)',
        }}
      >
        <Image
          src={product.image}
          alt={product.alt || product.name}
          fill
          unoptimized
          sizes={isFeaturedMobile ? '(max-width: 640px) 100px, 20vw' : '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw'}
          className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
      </div>

      {/* Product Title and Explore Link */}
      <div
        className={`flex justify-between flex-1 ${
          isFeaturedMobile
            ? 'flex-col items-start text-left sm:items-center sm:text-center'
            : 'flex-col items-center text-center'
        }`}
      >
        <h3 className="font-heading font-bold text-ink text-sm sm:text-[15px] xl:text-base tracking-[-0.02em] leading-snug group-hover:text-accent transition-colors min-h-[2.25rem] flex items-center">
          {product.name}
        </h3>

        <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold tracking-[0.08em] mt-2 group-hover:text-primary-hover group-hover:gap-1.5 transition-all duration-200 uppercase min-h-[24px]">
          <span>Explore</span>
          <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
