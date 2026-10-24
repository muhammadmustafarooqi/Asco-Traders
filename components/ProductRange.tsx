import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { GlowWaves } from '@/components/GlowWaves';
import Reveal from '@/components/Reveal';

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
        <Reveal distance={20} duration={600} className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-3">
            <span
              className="h-0.5 w-6 sm:w-10 bg-accent rounded-full"
              aria-hidden="true"
            />
            <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase">
              OUR PRODUCTS
            </span>
            <span
              className="h-0.5 w-6 sm:w-10 bg-accent rounded-full"
              aria-hidden="true"
            />
          </div>

          <h2
            id="products-range-heading"
            className="font-heading font-bold text-[clamp(1.625rem,1.15rem+2.1vw,2.5rem)] text-ink text-center tracking-[-0.02em] leading-[1.18]"
          >
            Complete Range of <span className="text-accent">LED</span> Lighting Solutions
          </h2>
        </Reveal>

        {/* 5 Category Cards Grid with 70ms stagger */}
        <Reveal
          stagger={70}
          duration={650}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4 xl:gap-5 items-stretch w-full"
        >
          {products.map((product) => (
            <div key={product.slug} className="h-full">
              <ProductCard product={product} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
