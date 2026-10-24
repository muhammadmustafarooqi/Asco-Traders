import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Check, ShieldCheck, Zap } from 'lucide-react';
import { products, getProductBySlug } from '@/lib/products';
import { siteConfig } from '@/lib/site';
import { GlowDivider } from '@/components/GlowDivider';
import { StayUpdated } from '@/components/StayUpdated';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | ASCO Innovative Technologies',
    };
  }

  return {
    title: `${product.name} | ASCO Innovative Technologies`,
    description: product.description,
  };
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.primaryNumber}?text=${encodeURIComponent(
    `Hello ASCO, I would like to enquire about ${product.name} (${product.category}). Please provide the technical datasheet and wholesale price.`
  )}`;

  // Related products from other categories
  const relatedProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3);

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
          <span>{product.category}</span>
          <span className="text-line">/</span>
          <span className="text-ink truncate">{product.name}</span>
        </div>

        {/* ============ MAIN 2-COLUMN PRODUCT DETAIL ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.25fr] gap-8 lg:gap-12 xl:gap-14 items-start">
          {/* LEFT: Image Gallery Card */}
          <div className="relative rounded-3xl border border-primary/60 bg-[#000d24]/90 backdrop-blur-md overflow-hidden p-4 sm:p-6 shadow-[0_0_30px_rgba(6,161,255,0.2)]">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#000814] border border-line/40">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              {/* Corner Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent text-[#000613] shadow-[0_0_15px_rgba(63,203,248,0.7)]">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Trust Badges Bar under image */}
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-ink-muted">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#000814]/80 border border-line/30">
                <Zap className="w-4 h-4 text-accent shrink-0" />
                <span>Original ASCO Grade</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#000814]/80 border border-line/30">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                <span>Replacement Warranty</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Product Information & Specs */}
          <div className="flex flex-col">
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-accent text-xs font-bold uppercase tracking-wider w-fit mb-3">
              <span>{product.category}</span>
            </div>

            {/* Title & Tagline */}
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
              {product.name}
            </h1>
            <p className="text-accent text-sm sm:text-base font-medium mt-2 leading-relaxed">
              {product.tagline}
            </p>

            {/* Full Description */}
            <p className="text-ink-muted text-sm sm:text-base mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Table */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl border border-primary/40 bg-[#000d24]/70">
              <h3 className="font-heading font-bold text-sm text-ink uppercase tracking-wider mb-3">
                Technical Specifications
              </h3>
              <div className="divide-y divide-primary/20 text-xs sm:text-sm">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="py-2.5 flex items-center justify-between gap-4">
                    <span className="text-ink-muted capitalize font-medium">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-ink font-semibold text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mt-6">
              <h3 className="font-heading font-bold text-sm text-ink uppercase tracking-wider mb-3">
                Key Highlights
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-ink-muted">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-ink/90">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-primary/25 flex flex-col sm:flex-row items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-[#000613] font-bold text-sm tracking-wide shadow-[0_0_22px_rgba(6,161,255,0.45)] hover:shadow-[0_0_30px_rgba(63,203,248,0.7)] transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#000613]" />
                <span>Inquire on WhatsApp</span>
              </a>

              <Link
                href="/contact#inquiry-form"
                className="w-full sm:w-auto inline-flex items-center justify-center py-3 px-6 rounded-full border border-primary/70 bg-[#000d24] hover:bg-primary/20 hover:border-accent text-ink text-sm font-semibold transition-all duration-200"
              >
                <span>Request Quotation Form &rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ============ RELATED PRODUCTS ============ */}
        <div className="mt-20 pt-12 border-t border-primary/25">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink">
              More Products from <span className="text-accent">ASCO</span>
            </h2>
            <Link
              href="/products"
              className="text-xs sm:text-sm text-accent hover:underline font-semibold"
            >
              View Full Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/products/${rel.slug}`}
                className="group p-3.5 rounded-2xl border border-primary/40 bg-[#000d24]/60 hover:border-accent hover:bg-[#00102a] transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#000814] mb-3">
                  <Image
                    src={rel.image}
                    alt={rel.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-accent text-[11px] font-semibold">{rel.category}</span>
                <h4 className="font-heading font-bold text-ink text-sm mt-0.5 group-hover:text-accent transition-colors">
                  {rel.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <GlowDivider />
        <section className="py-12 w-full max-w-[100vw] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <StayUpdated variant="cta" />
        </section>
      </div>
    </div>
  );
}
