import type { Metadata } from 'next';
import { ProductsHero } from '@/components/ProductsHero';
import { ProductsCatalog } from '@/components/ProductsCatalog';
import { GlowDivider } from '@/components/GlowDivider';
import { StayUpdated } from '@/components/StayUpdated';

export const metadata: Metadata = {
  title: 'Products | ASCO Innovative Technologies',
  description:
    'Browse ASCO’s comprehensive catalog of 220V continuous LED rope lights, RGB flex strips, architectural aluminium profile channels, commercial batten lights, and precision spotlights.',
};

export default function ProductsPage() {
  return (
    <div className="bg-[#000613] min-h-screen text-ink">
      {/* 1. Products Collection Hero */}
      <ProductsHero />

      {/* Glowing Neon Rope-Light Divider */}
      <GlowDivider />

      {/* 2. Interactive Products Catalog (with 3-per-page Pagination & Category Filters) */}
      <ProductsCatalog />

      {/* Glowing Neon Rope-Light Divider */}
      <GlowDivider />

      {/* 3. Call to Action Banner */}
      <section
        aria-label="Call to Action - Inquire for Wholesale"
        className="relative w-full max-w-[100vw] py-12 sm:py-16 lg:py-20 bg-[#000613] overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(6, 161, 255, 0.22) 0%, transparent 75%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          <StayUpdated variant="cta" />
        </div>
      </section>
    </div>
  );
}
