import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, ShieldCheck, Zap } from 'lucide-react';
import {
  categories,
  getCategoryBySlug,
  getRequestPriceWhatsAppUrl,
  type Category,
  type Item,
} from '@/lib/products';
import { siteConfig } from '@/lib/site';
import { ProductItemCard } from '@/components/ProductItemCard';
import { GlowDivider } from '@/components/GlowDivider';
import { StayUpdated } from '@/components/StayUpdated';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found | ASCO Innovative Technologies',
    };
  }

  return {
    title: `${category.name} | ASCO Innovative Technologies`,
    description: `${category.description} Explore all ${category.items.length} items and specifications in ${category.name}.`,
    openGraph: {
      title: `${category.name} | ASCO Innovative Technologies`,
      description: category.description,
      images: [category.image],
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

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <div className="bg-[#000613] min-h-screen text-ink pt-24 pb-16 sm:pt-28 lg:pt-32">
      <div className="w-full max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link & Breadcrumb */}
        <div className="flex items-center gap-3 mb-8 text-xs sm:text-sm text-ink-muted">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-accent hover:text-ink transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Products</span>
          </Link>
          <span className="text-line">/</span>
          <span className="text-ink font-semibold">{category.name}</span>
        </div>

        {/* ============ CATEGORY HERO HERO CARD ============ */}
        <div className="relative rounded-3xl border border-cyan-500/25 bg-gradient-to-b from-card/80 via-surface/90 to-bg/95 p-6 sm:p-10 lg:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.5)] overflow-hidden mb-14 lg:mb-18">
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-px w-6 bg-accent" aria-hidden="true" />
                <span className="text-accent text-xs font-semibold tracking-[0.12em] uppercase">
                  CATEGORY SHOWCASE &bull; {category.items.length} MODELS
                </span>
              </div>

              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-[-0.02em] leading-tight">
                {category.name}
              </h1>

              <p className="text-accent font-semibold text-base sm:text-lg mt-2">
                {category.tagline}
              </p>

              <p className="text-slate-300 text-sm sm:text-base mt-4 leading-[1.65] max-w-2xl">
                {category.description}
              </p>

              {/* Bullets */}
              <ul className="mt-6 space-y-2.5">
                {category.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/90">
                    <span className="w-4 h-4 rounded-full bg-accent/20 border border-accent/60 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-accent stroke-[3]" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category Cover Image with soft edge-fade */}
            <div className="flex justify-center">
              <div
                className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-[#00102a] border border-cyan-500/25 p-6 flex items-center justify-center shadow-[0_0_35px_rgba(6,161,255,0.18)]"
                style={{
                  WebkitMaskImage: 'radial-gradient(circle at center, #000 68%, transparent 100%)',
                  maskImage: 'radial-gradient(circle at center, #000 68%, transparent 100%)',
                }}
              >
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ============ ALL ITEMS IN THIS CATEGORY ============ */}
        <section aria-label={`All items in ${category.name}`} className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-cyan-500/20">
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-ink">
                All Models &amp; Specifications
              </h2>
              <p className="text-xs sm:text-sm text-ink-muted mt-1">
                Browse every item available in the {category.name} collection. Click &ldquo;Request Price&rdquo; to connect instantly on WhatsApp.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {category.items.map((item, idx) => (
              <ProductItemCard
                key={item.id}
                item={item}
                categoryName={category.name}
                categorySlug={category.slug}
                index={idx}
                priority={idx < 4}
              />
            ))}
          </div>
        </section>

        {/* Glowing Divider */}
        <GlowDivider />

        {/* ============ EXPLORE OTHER CATEGORIES ============ */}
        <section aria-label="Other Product Categories" className="my-14 sm:my-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink">
              Explore Other Categories
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-1">
              Complete your architectural lighting setup with ASCO&apos;s modular lighting ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {otherCategories.map((other) => (
              <Link
                key={other.slug}
                href={`/products/${other.slug}`}
                className="group rounded-2xl border border-cyan-500/20 bg-[#00102a]/70 p-3.5 flex flex-col justify-between hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(63,203,248,0.2)] hover:-translate-y-1 transition-all"
              >
                <div
                  className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#00102a] border border-cyan-500/15 p-2 flex items-center justify-center mb-2.5"
                  style={{
                    WebkitMaskImage: 'radial-gradient(circle at center, #000 68%, transparent 100%)',
                    maskImage: 'radial-gradient(circle at center, #000 68%, transparent 100%)',
                  }}
                >
                  <Image
                    src={other.image}
                    alt={other.name}
                    fill
                    unoptimized
                    sizes="200px"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-heading font-bold text-ink text-sm group-hover:text-accent transition-colors">
                    {other.name}
                  </h3>
                  <span className="text-[11px] text-accent font-semibold mt-1 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    <span>View Models</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA section */}
        <StayUpdated variant="cta" />
      </div>
    </div>
  );
}
