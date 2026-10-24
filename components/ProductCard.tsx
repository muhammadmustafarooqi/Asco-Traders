import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isTracklight = product.slug === 'tracklight-spotlight';

  return (
    <Link
      href={`/products#${product.slug}`}
      className="group flex flex-col h-full rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-card/75 via-surface/85 to-bg/95 p-2.5 sm:p-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-cyan-400/50 hover:shadow-[0_8px_30px_rgba(63,203,248,0.22)] hover:-translate-y-1.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`Explore ${product.name}`}
    >
      {/* Product Image in Rounded Container */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#000814] border border-cyan-500/15">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {/* Subtle sheen overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Product Title and Explore Link */}
      <div className="pt-3 pb-1 px-1 flex flex-col items-center justify-between text-center flex-1">
        <h3 className="font-heading font-bold text-ink text-sm sm:text-[15px] xl:text-base tracking-[-0.02em] leading-snug group-hover:text-accent transition-colors min-h-[2.5rem] flex items-center justify-center text-center">
          {isTracklight ? (
            <>
              Tracklight /<br />Spotlight
            </>
          ) : (
            product.name
          )}
        </h3>

        <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold tracking-[0.08em] mt-1.5 group-hover:text-primary-hover group-hover:gap-1.5 transition-all duration-200 uppercase">
          <span>Explore</span>
          <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}
