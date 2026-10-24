import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { GlowWaves } from '@/components/GlowWaves';

export function ProductRange() {
  return (
    <section
      id="products"
      aria-labelledby="products-range-heading"
      className="w-full w-screen max-w-[100vw] py-14 sm:py-20 lg:py-24 bg-bg relative overflow-hidden"
    >
      {/* Subtle radial glow in the background */}
      <div
        className="absolute top-0 inset-x-0 h-96 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 50% 20%, rgba(6, 161, 255, 0.09) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative GlowWaves behind products */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
        <GlowWaves className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with decorative lines matching design */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-3">
            <span
              className="h-0.5 w-6 sm:w-10 bg-accent rounded-full"
              aria-hidden="true"
            />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              OUR PRODUCTS
            </span>
            <span
              className="h-0.5 w-6 sm:w-10 bg-accent rounded-full"
              aria-hidden="true"
            />
          </div>

          <h2
            id="products-range-heading"
            className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-ink text-center tracking-tight leading-snug"
          >
            Complete Range of <span className="text-accent">LED</span> Lighting Solutions
          </h2>
        </div>

        {/* 6 Product Cards Grid: 2 cols on mobile, 3 cols on tablet, 6 cols in a single row on desktop taking 100vw */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-4 xl:gap-5 2xl:gap-6 items-stretch w-full">
          {products.map((product) => (
            <div key={product.slug} className="h-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
