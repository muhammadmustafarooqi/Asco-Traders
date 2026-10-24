import type { Metadata } from 'next';
import { ProductsHero } from '@/components/ProductsHero';
import { ProductsCatalog } from '@/components/ProductsCatalog';
import { GlowDivider } from '@/components/GlowDivider';
import { StayUpdated } from '@/components/StayUpdated';

export const metadata: Metadata = {
  title: 'Products | ASCO Innovative Technologies',
  description:
    'Browse ASCO’s comprehensive catalog of 220V continuous LED rope lights, connectors, architectural aluminium profile channels, accessories, and track lights in Pakistan.',
};

export default function ProductsPage() {
  return (
    <div className="bg-[#000613] min-h-screen text-ink">
      {/* 1. Products Collection Hero */}
      <ProductsHero />

      {/* Glowing Neon Rope-Light Divider */}
      <GlowDivider />

      {/* 2. Interactive Products Catalog (5 Category Filters & Request Price) */}
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

        <div className="relative z-10 w-full max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <StayUpdated variant="cta" />
        </div>
      </section>
    </div>
  );
}
