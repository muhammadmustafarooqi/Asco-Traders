'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getRequestPriceWhatsAppUrl, type Item } from '@/lib/products';

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function ArrowUpRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export interface ProductItemCardProps {
  item: Item;
  categoryName: string;
  categorySlug: string;
  index?: number;
  priority?: boolean;
}

export function ProductItemCard({
  item,
  categoryName,
  categorySlug,
  index,
  priority = false,
}: ProductItemCardProps) {
  const itemUrl = `/products/${categorySlug}/${item.id}`;
  const whatsappUrl = getRequestPriceWhatsAppUrl({
    itemName: item.name,
    categoryName,
    categorySlug,
    itemId: item.id,
  });

  const variants = item.variants || [];
  const maxVariantsShown = 3;
  const visibleVariants = variants.slice(0, maxVariantsShown);
  const remainingVariantsCount = variants.length - maxVariantsShown;

  // Number badge formatted as "01", "02", etc.
  const numberBadge =
    typeof index === 'number'
      ? String(index + 1).padStart(2, '0')
      : item.id.replace(/^[a-z]+-0*/i, '').padStart(2, '0');

  return (
    <div className="group relative h-full rounded-[20px] p-[1px] bg-gradient-to-b from-cyan-400/40 via-cyan-500/10 to-transparent hover:from-cyan-400/70 hover:via-cyan-400/20 hover:to-transparent hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(63,203,248,0.25)] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      {/* Dark glass surface container with 20px radius (inner 19px) */}
      <div className="flex flex-col justify-between h-full rounded-[19px] bg-gradient-to-b from-[#00102a]/95 via-[#000c1e]/90 to-[#000814]/98 p-3.5 sm:p-4 backdrop-blur-md">
        <div>
          {/* ============ IMAGE AREA WITH SOFT CYAN SPOTLIGHT ============ */}
          <div className="relative w-full aspect-square rounded-[16px] overflow-hidden bg-[#00102a] border border-cyan-500/15 p-2 sm:p-2.5 flex items-center justify-center mb-3.5">
            {/* Soft radial cyan spotlight behind product */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(6, 161, 255, 0.28) 0%, rgba(63, 203, 248, 0.12) 42%, transparent 72%)',
              }}
              aria-hidden="true"
            />

            {/* Soft edge-fade mask on the product container */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                WebkitMaskImage: 'radial-gradient(circle at center, #000 68%, transparent 100%)',
                maskImage: 'radial-gradient(circle at center, #000 68%, transparent 100%)',
              }}
            />

            {/* Top-left: small category chip */}
            <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#000814]/85 text-accent border border-cyan-500/30 backdrop-blur-sm">
              {categoryName}
            </span>

            {/* Top-right: subtle item number badge */}
            <span className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold text-slate-300 bg-[#000814]/85 border border-cyan-500/20 backdrop-blur-sm">
              {numberBadge}
            </span>

            {/* Product Image (scales to 1.06 on hover inside overflow-hidden, ~8% padding) */}
            <Link
              href={itemUrl}
              className="relative w-full h-full flex items-center justify-center focus:outline-none"
              aria-label={`View ${item.name} details`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={priority}
                loading={priority ? undefined : 'lazy'}
                className="object-contain p-2 group-hover:scale-[1.06] transition-transform duration-500 ease-out"
              />
            </Link>
          </div>

          {/* ============ BODY ============ */}
          <div className="space-y-2">
            {/* Item Name (Sora, semi-bold) */}
            <Link href={itemUrl} className="block group-hover:text-accent transition-colors">
              <h4 className="font-heading font-semibold text-ink text-sm sm:text-[15px] leading-snug tracking-[-0.01em]">
                {item.name}
              </h4>
            </Link>

            {/* Variants as slim pill badges (max 3 shown, +N for rest) */}
            {variants.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                {visibleVariants.map((variant) => (
                  <span
                    key={variant}
                    className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-accent/15 text-accent border border-accent/30 shadow-[0_0_8px_rgba(63,203,248,0.15)]"
                  >
                    {variant}
                  </span>
                ))}
                {remainingVariantsCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-[#000814] text-slate-300 border border-cyan-500/25">
                    +{remainingVariantsCount}
                  </span>
                )}
              </div>
            )}

            {/* Specs highlights when no variants are present */}
            {variants.length === 0 && item.specs && Object.keys(item.specs).length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                {Object.entries(item.specs).slice(0, 2).map(([k, v]) => (
                  <span
                    key={k}
                    className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#000814] text-slate-300 border border-cyan-500/20"
                  >
                    {v}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ============ FOOTER ACTIONS WITH THIN DIVIDER ============ */}
        <div className="pt-3.5 mt-3 border-t border-cyan-500/15">
          <div className="flex items-center gap-2">
            {/* Primary "Request Price" with WhatsApp icon (full width / flex-1, refined WhatsApp-green gradient) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#1eb653] to-[#25d366] text-[#000814] shadow-[0_0_16px_rgba(37,211,102,0.3)] hover:shadow-[0_0_24px_rgba(37,211,102,0.55)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
              aria-label={`Request price for ${item.name} via WhatsApp`}
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Request Price</span>
            </a>

            {/* Small icon button "View" linking to item page */}
            <Link
              href={itemUrl}
              className="shrink-0 p-2.5 rounded-xl border border-cyan-500/30 bg-[#000814]/80 text-accent hover:text-[#000814] hover:bg-accent hover:border-accent shadow-[0_0_10px_rgba(6,161,255,0.15)] hover:shadow-[0_0_16px_rgba(63,203,248,0.4)] active:scale-[0.96] transition-all group/view flex items-center justify-center"
              aria-label={`View ${item.name} specifications and details`}
              title={`View ${item.name} details`}
            >
              <ArrowUpRightIcon className="w-4 h-4 group-hover/view:translate-x-0.5 group-hover/view:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItemCard;
