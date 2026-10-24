import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import {
  categories,
  getItemBySlugAndId,
  getRequestPriceWhatsAppUrl,
  type Category,
  type Item,
} from '@/lib/products';
import { siteConfig } from '@/lib/site';
import { ProductItemCard } from '@/components/ProductItemCard';
import { GlowDivider } from '@/components/GlowDivider';
import { StayUpdated } from '@/components/StayUpdated';

interface ItemPageProps {
  params: Promise<{
    slug: string;
    item: string;
  }>;
}

export async function generateStaticParams() {
  return categories.flatMap((cat) =>
    cat.items.map((item) => ({
      slug: cat.slug,
      item: item.id,
    }))
  );
}

export async function generateMetadata({ params }: ItemPageProps): Promise<Metadata> {
  const { slug, item: itemId } = await params;
  const result = getItemBySlugAndId(slug, itemId);

  if (!result) {
    return {
      title: 'Item Not Found | ASCO Traders',
    };
  }

  const { category, item } = result;

  // Short description: category plus variants only, no invented specs
  const variantsText =
    item.variants && item.variants.length > 0
      ? ` Available variants: ${item.variants.join(', ')}.`
      : '';
  const description = `${item.name} in ASCO Traders' ${category.name} collection.${variantsText} Contact us on WhatsApp for current price and availability.`;

  const ogImageUrl = `${siteConfig.siteUrl}/og/${category.slug}-${item.id}.jpg`;
  const itemUrl = `${siteConfig.siteUrl}/products/${category.slug}/${item.id}`;

  return {
    title: `${item.name} | ASCO Traders`,
    description,
    openGraph: {
      title: `${item.name} | ASCO Traders`,
      description,
      url: itemUrl,
      siteName: 'ASCO Traders',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${item.name} - ASCO Traders`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.name} | ASCO Traders`,
      description,
      images: [ogImageUrl],
    },
  };
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default async function ProductItemDetailPage({ params }: ItemPageProps) {
  const { slug, item: itemId } = await params;
  const result = getItemBySlugAndId(slug, itemId);

  if (!result) {
    notFound();
  }

  const { category, item } = result;

  // Main item WhatsApp URL (no variant)
  const mainWhatsAppUrl = getRequestPriceWhatsAppUrl({
    itemName: item.name,
    categoryName: category.name,
    categorySlug: category.slug,
    itemId: item.id,
  });

  // Related items from the same category (excluding current item)
  const relatedItems = category.items.filter((i) => i.id !== item.id);

  return (
    <div className="bg-[#000613] min-h-screen text-ink pt-24 pb-16 sm:pt-28 lg:pt-32">
      <div className="w-full max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ BREADCRUMB: Products > Category > Item ============ */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 sm:gap-2.5 mb-8 text-xs sm:text-sm text-ink-muted flex-wrap"
        >
          <Link
            href="/products"
            className="text-accent hover:text-ink transition-colors font-semibold"
          >
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-cyan-500/40 shrink-0" aria-hidden="true" />
          <Link
            href={`/products/${category.slug}`}
            className="text-accent hover:text-ink transition-colors font-semibold"
          >
            {category.name}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-cyan-500/40 shrink-0" aria-hidden="true" />
          <span className="text-ink font-semibold truncate max-w-[220px] sm:max-w-none">
            {item.name}
          </span>
        </nav>

        {/* ============ MAIN ITEM SHOWCASE CARD ============ */}
        <div className="relative rounded-3xl border border-cyan-500/25 bg-gradient-to-b from-[#00102a]/95 via-surface/85 to-[#000814]/98 p-6 sm:p-8 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.55)] mb-14 lg:mb-18 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr] gap-8 lg:gap-14 items-center">
            {/* ============ LARGE PRODUCT IMAGE IN NAVY FRAME ============ */}
            <div className="flex justify-center w-full">
              <div
                className="relative w-full aspect-square max-w-[460px] rounded-2xl overflow-hidden bg-[#00102a] border border-cyan-500/25 p-6 sm:p-8 flex items-center justify-center shadow-[0_0_40px_rgba(6,161,255,0.22)]"
              >
                {/* Soft radial cyan spotlight behind product */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(6, 161, 255, 0.3) 0%, rgba(63, 203, 248, 0.12) 42%, transparent 72%)',
                  }}
                  aria-hidden="true"
                />

                {/* Soft edge-fade mask so no sharp bounding box edges appear */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    WebkitMaskImage: 'radial-gradient(circle at center, #000 68%, transparent 100%)',
                    maskImage: 'radial-gradient(circle at center, #000 68%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain p-4 hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            {/* ============ ITEM DETAILS COLUMN ============ */}
            <div className="flex flex-col justify-center">
              {/* Category chip & item number badge */}
              <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                <Link
                  href={`/products/${category.slug}`}
                  className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#000814] text-accent border border-cyan-500/30 hover:border-cyan-400 hover:text-ink transition-colors"
                >
                  {category.name}
                </Link>
                <span className="text-xs font-mono font-semibold text-slate-400 px-2.5 py-1 rounded-full bg-[#000814]/70 border border-cyan-500/20">
                  Model {item.id.toUpperCase()}
                </span>
              </div>

              {/* Item Name (Sora, semi-bold / bold) */}
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight leading-[1.15]">
                {item.name}
              </h1>

              {/* Category Tagline */}
              <p className="text-accent font-semibold text-sm sm:text-base mt-2">
                {category.tagline}
              </p>

              {/* Short category description */}
              <p className="text-slate-300 text-sm sm:text-[15px] mt-4 leading-[1.65] max-w-xl">
                {category.description}
              </p>

              {/* Main "Request Price" button */}
              <div className="mt-7">
                <a
                  href={mainWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold bg-gradient-to-r from-[#1eb653] to-[#25d366] text-[#000814] shadow-[0_0_20px_rgba(37,211,102,0.35)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto"
                  aria-label={`Request price for ${item.name} via WhatsApp`}
                >
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <span>Request Price on WhatsApp</span>
                </a>
              </div>

              {/* ============ VARIANTS LIST (EACH WITH ITS OWN "REQUEST PRICE" BUTTON) ============ */}
              {item.variants && item.variants.length > 0 && (
                <div className="mt-8 pt-6 border-t border-cyan-500/15">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-heading font-semibold text-xs uppercase tracking-wider text-accent">
                      Select Variant &amp; Inquire
                    </h2>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {item.variants.length} options available
                    </span>
                  </div>

                  <div className="divide-y divide-cyan-500/15 rounded-2xl border border-cyan-500/20 bg-[#000d24]/85 overflow-hidden">
                    {item.variants.map((variant) => {
                      const variantWhatsAppUrl = getRequestPriceWhatsAppUrl({
                        itemName: item.name,
                        categoryName: category.name,
                        categorySlug: category.slug,
                        itemId: item.id,
                        variant,
                      });

                      return (
                        <div
                          key={variant}
                          className="flex items-center justify-between p-3.5 sm:p-4 gap-3 hover:bg-cyan-500/5 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                            <span className="font-semibold text-sm text-ink">{variant}</span>
                          </div>

                          <a
                            href={variantWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#1eb653] to-[#25d366] text-[#000814] shadow-[0_0_12px_rgba(37,211,102,0.25)] hover:shadow-[0_0_18px_rgba(37,211,102,0.5)] hover:brightness-110 transition-all cursor-pointer shrink-0"
                            aria-label={`Request price for ${item.name} (${variant}) via WhatsApp`}
                          >
                            <WhatsAppIcon className="w-3.5 h-3.5" />
                            <span>Request Price</span>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Specifications if defined in item data (no invented specs) */}
              {item.specs && Object.keys(item.specs).length > 0 && (
                <div className="mt-8 pt-6 border-t border-cyan-500/15">
                  <h2 className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-400 mb-3">
                    Item Specifications
                  </h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    {Object.entries(item.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#000814]/70 border border-cyan-500/15"
                      >
                        <dt className="text-slate-400 capitalize">{key}:</dt>
                        <dd className="font-semibold text-ink">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* ============ BACK TO {CATEGORY} ============ */}
              <div className="mt-8 pt-6 border-t border-cyan-500/15">
                <Link
                  href={`/products/${category.slug}`}
                  className="inline-flex items-center gap-2 text-accent hover:text-ink font-semibold text-sm transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to {category.name}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ============ "MORE FROM THIS CATEGORY" ROW ============ */}
        {relatedItems.length > 0 && (
          <section
            aria-label={`More products from ${category.name}`}
            className="mt-16 sm:mt-20 pt-12 border-t border-cyan-500/20"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
              <div>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                  More from {category.name}
                </h2>
                <p className="text-xs sm:text-sm text-ink-muted mt-1">
                  Explore other models and hardware in the {category.name} collection.
                </p>
              </div>

              <Link
                href={`/products/${category.slug}`}
                className="text-accent hover:text-ink text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto group"
              >
                <span>View All {category.items.length}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 4 columns desktop, 2 tablet, 1 mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {relatedItems.slice(0, 4).map((relItem, idx) => (
                <ProductItemCard
                  key={relItem.id}
                  item={relItem}
                  categoryName={category.name}
                  categorySlug={category.slug}
                  index={idx}
                />
              ))}
            </div>
          </section>
        )}

        {/* Glowing Divider */}
        <div className="my-14 sm:my-16">
          <GlowDivider />
        </div>

        {/* Stay Updated / Contact Banner */}
        <StayUpdated variant="cta" />
      </div>
    </div>
  );
}
