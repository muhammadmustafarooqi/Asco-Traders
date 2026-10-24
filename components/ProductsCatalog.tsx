'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Check, ArrowRight } from 'lucide-react';
import { products, productCategories, type Product } from '@/lib/products';

/* ---------- reveal-on-scroll (fade + rise), respects reduced motion ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

const noScrollbar = '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden';

export function ProductsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3); // 0 = show all

  const filteredProducts =
    selectedCategory === 'All Products'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const totalItems = filteredProducts.length;
  const isPaginated = itemsPerPage > 0 && totalItems > itemsPerPage;
  const totalPages = isPaginated ? Math.ceil(totalItems / itemsPerPage) : 1;

  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = isPaginated ? (safeCurrentPage - 1) * itemsPerPage : 0;
  const endIndex = isPaginated ? Math.min(startIndex + itemsPerPage, totalItems) : totalItems;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById('products-list-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="products-list-top"
      aria-label="ASCO Products Showcase"
      className="relative w-full max-w-[100vw] py-10 sm:py-14 lg:py-20 bg-[#000613] overflow-hidden scroll-mt-20"
    >
      {/* Background energy streaks + soft vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40" aria-hidden="true">
        <Image
          src="/asco_separate_images_webp/glue-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0, 6, 19, 0.6) 0%, rgba(0, 6, 19, 0.95) 100%)',
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 h-24 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #000613 0%, transparent 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(0deg, #000613 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ FILTER BAR ============ */}
        <div className="rounded-2xl border border-primary/40 bg-[#00102a]/60 backdrop-blur-md p-3 sm:p-4 shadow-[0_0_24px_rgba(6,161,255,0.15)] mb-10 sm:mb-14 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6">
          {/* Category pills: horizontal scroll on mobile, wrap on desktop */}
          <div
            role="group"
            aria-label="Filter by category"
            className={`flex md:flex-wrap items-center gap-2 overflow-x-auto md:overflow-visible p-1 -m-1 ${noScrollbar}`}
          >
            {productCategories.map((cat) => {
              const count =
                cat === 'All Products'
                  ? products.length
                  : products.filter((p) => p.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleCategoryChange(cat)}
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${isSelected
                    ? 'bg-gradient-to-r from-primary to-accent text-[#000613] shadow-[0_0_18px_rgba(63,203,248,0.55)]'
                    : 'border border-primary/40 bg-[#000814]/70 text-ink-muted hover:text-ink hover:border-accent/70 hover:bg-[#001438]'
                    }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`min-w-[1.25rem] text-center text-[10px] leading-none px-1.5 py-1 rounded-full font-bold ${isSelected ? 'bg-[#000613]/25 text-[#000613]' : 'bg-primary/20 text-accent'
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Display toggle (segmented control) */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-semibold text-ink-muted">Display</span>
            <div className="inline-flex rounded-xl border border-primary/40 bg-[#000814]/80 p-1">
              {[
                { label: '3 / page', value: 3 },
                { label: `Show all (${totalItems})`, value: 0 },
              ].map((opt) => {
                const active = itemsPerPage === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setItemsPerPage(opt.value);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${active
                      ? 'bg-accent/15 text-accent shadow-[0_0_12px_rgba(63,203,248,0.35)]'
                      : 'text-ink-muted hover:text-ink'
                      }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============ PRODUCT ROWS ============ */}
        {displayedProducts.length === 0 ? (
          <p className="text-center text-ink-muted py-16">No products found in this category.</p>
        ) : (
          <div
            key={`${selectedCategory}-${currentPage}`}
            className="flex flex-col gap-12 sm:gap-16 lg:gap-20 animate-tab-switch"
          >
            {displayedProducts.map((product, idx) => {
              const absoluteIndex = isPaginated ? startIndex + idx : idx;
              const isLast = idx === displayedProducts.length - 1;

              return (
                <div key={product.id} className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
                  <ProductRow
                    product={product}
                    number={absoluteIndex + 1}
                    isImageOnRight={absoluteIndex % 2 === 0}
                    priority={safeCurrentPage === 1 && idx === 0}
                  />
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_10px_rgba(6,161,255,0.4)]"
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ============ PAGINATION ============ */}
        {isPaginated && totalPages > 1 && (
          <nav
            aria-label="Products Pagination"
            className="mt-14 sm:mt-16 pt-8 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="text-xs sm:text-sm text-ink-muted">
              Showing{' '}
              <span className="text-ink font-semibold">
                {startIndex + 1}&ndash;{endIndex}
              </span>{' '}
              of <span className="text-ink font-semibold">{totalItems}</span> products
              &nbsp;&bull;&nbsp; Page <span className="text-accent font-semibold">{safeCurrentPage}</span> of{' '}
              <span className="text-ink font-semibold">{totalPages}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handlePageChange(safeCurrentPage - 1)}
                disabled={safeCurrentPage <= 1}
                aria-label="Go to previous page"
                className={`inline-flex items-center gap-1 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 ${safeCurrentPage <= 1
                  ? 'border-primary/20 bg-transparent text-ink-muted/30 cursor-not-allowed'
                  : 'border-primary/60 bg-[#000d24] text-ink hover:border-accent hover:bg-primary/20 hover:text-accent cursor-pointer'
                  }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = pageNum === safeCurrentPage;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    aria-label={`Go to page ${pageNum}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition-all duration-300 cursor-pointer ${isActive
                      ? 'border border-accent bg-gradient-to-br from-primary to-accent text-[#000613] shadow-[0_0_18px_rgba(63,203,248,0.6)]'
                      : 'border border-primary/40 bg-[#000d24] text-ink-muted hover:text-ink hover:border-primary/80 hover:bg-[#001438]'
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => handlePageChange(safeCurrentPage + 1)}
                disabled={safeCurrentPage >= totalPages}
                aria-label="Go to next page"
                className={`inline-flex items-center gap-1 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 ${safeCurrentPage >= totalPages
                  ? 'border-primary/20 bg-transparent text-ink-muted/30 cursor-not-allowed'
                  : 'border-primary/60 bg-[#000d24] text-ink hover:border-accent hover:bg-primary/20 hover:text-accent cursor-pointer'
                  }`}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
}

/* ---------- Product row ---------- */
interface ProductRowProps {
  product: Product;
  number: number;
  isImageOnRight: boolean;
  priority?: boolean;
}

const cornerBase =
  'absolute w-5 h-5 border-accent/80 pointer-events-none transition-opacity opacity-70 group-hover:opacity-100';

function ProductRow({ product, number, isImageOnRight, priority = false }: ProductRowProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  const textContent = (
    <div className="relative flex flex-col justify-center py-2 lg:py-4">
      {/* Ghost number */}
      <span
        aria-hidden="true"
        className="absolute -top-4 right-0 font-heading font-extrabold text-7xl lg:text-8xl leading-none text-transparent select-none pointer-events-none"
        style={{ WebkitTextStroke: '1px rgba(63, 203, 248, 0.22)' }}
      >
        {String(number).padStart(2, '0')}
      </span>

      <div className="relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-accent shadow-[0_0_8px_rgba(63,203,248,0.8)]" aria-hidden="true" />
          <span className="text-accent text-[11px] sm:text-xs font-semibold tracking-[0.12em] uppercase">
            {product.category}
          </span>
        </div>

        <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.6rem] text-ink tracking-[-0.02em] leading-[1.12]">
          {product.name}
        </h2>

        <p className="font-semibold text-base sm:text-lg text-accent mt-2 tracking-[-0.01em]">
          {product.tagline}
        </p>

        <p className="text-slate-300 text-sm sm:text-[15px] lg:text-base mt-3 sm:mt-4 leading-[1.65] max-w-2xl xl:max-w-3xl">
          {product.description}
        </p>

        {/* Features */}
        <ul className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-2xl xl:max-w-3xl">
          {product.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-0.5 w-5 h-5 rounded-full bg-accent/15 border border-accent/70 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(63,203,248,0.45)]"
                aria-hidden="true"
              >
                <Check className="w-3 h-3 text-accent stroke-[3]" />
              </span>
              <span className="text-sm text-ink/95 font-medium leading-snug">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={`/products/${product.slug}`}
            className="group/btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-[#000613] text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(6,161,255,0.45)] hover:shadow-[0_0_28px_rgba(63,203,248,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>

          <Link
            href="/contact#inquiry-form"
            className="btn-secondary-glow inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-ink text-sm font-semibold shadow-[0_0_14px_rgba(6,161,255,0.2)] hover:shadow-[0_0_22px_rgba(63,203,248,0.4)] transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );

  const imageContent = (
    <div className="group relative">
      {/* Glow behind the frame */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-accent/25 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative z-10 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/10] xl:aspect-[16/9] max-h-[520px] rounded-3xl border border-cyan-500/25 bg-[#000d24] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.4)] group-hover:border-cyan-400/50 group-hover:shadow-[0_0_42px_rgba(63,203,248,0.35)] transition-all duration-500">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority}
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Edge shading + cyan sheen */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#000814]/60 via-transparent to-[#000814]/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(6, 161, 255, 0.14) 0%, transparent 40%, rgba(63, 203, 248, 0.08) 100%)',
          }}
        />

        {/* Corner brackets */}
        <span aria-hidden="true" className={`${cornerBase} top-3 left-3 border-t-2 border-l-2 rounded-tl-lg`} />
        <span aria-hidden="true" className={`${cornerBase} top-3 right-3 border-t-2 border-r-2 rounded-tr-lg`} />
        <span aria-hidden="true" className={`${cornerBase} bottom-3 left-3 border-b-2 border-l-2 rounded-bl-lg`} />
        <span aria-hidden="true" className={`${cornerBase} bottom-3 right-3 border-b-2 border-r-2 rounded-br-lg`} />
      </div>
    </div>
  );

  return (
    <article
      ref={ref}
      id={product.slug}
      className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-20 items-center transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
    >
      {isImageOnRight ? (
        <>
          <div className="order-2 lg:order-1">{textContent}</div>
          <div className="order-1 lg:order-2">{imageContent}</div>
        </>
      ) : (
        <>
          <div className="order-1">{imageContent}</div>
          <div className="order-2">{textContent}</div>
        </>
      )}
    </article>
  );
}

export default ProductsCatalog;