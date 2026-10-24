'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  categories,
  productCategories,
  type Category,
  type Item,
  type ProductCategoryName,
} from '@/lib/products';
import { CategoryFeatureRow } from '@/components/CategoryFeatureRow';
import { ProductItemCard } from '@/components/ProductItemCard';

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const noScrollbar = '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden';

// Exact ordered metadata for the 5 categories (reusing requested taglines and real checklist data)
const CATEGORY_ROW_DATA: Record<
  string,
  {
    number: number;
    eyebrow: string;
    tagline: string;
    bullets: string[];
  }
> = {
  'rope-light': {
    number: 1,
    eyebrow: 'ROPE LIGHTS',
    tagline: 'Flexible. Durable. Brilliant.', // Old tagline reused as requested
    bullets: [
      '6 Models Available',
      '2835 (88D & 120D) High Density',
      'COB (288D) & FCOB Continuous',
      'Multi & RGB Color Changing',
    ],
  },
  connectors: {
    number: 2,
    eyebrow: 'CONNECTORS & CONTROLLERS',
    tagline: 'Reliable Power. Secure Connections.',
    bullets: [
      '8 Models Available',
      '2A & 4A Heavy Direct Mains',
      'RGB Remote & Heavy Controllers',
      'Weatherproof Inline Jointers',
    ],
  },
  'profile-lights': {
    number: 3,
    eyebrow: 'PROFILE LIGHTS',
    tagline: 'Elegant Design. Seamless Lighting.', // Old tagline reused as requested
    bullets: [
      '11 Models Available',
      'Collar & Non-Collar Options',
      'Slim 10mm to Architectural 50mm',
      '16mm 90° Corner Profiles',
    ],
  },
  accessories: {
    number: 4,
    eyebrow: 'ACCESSORIES & HARDWARE',
    tagline: 'Precision Hardware. Modular Fit.',
    bullets: [
      '8 Models Available',
      'Magnetic Track Rails & Springs',
      'Corner & Conductive Connectors',
      'L-Jointers & Flexible Connector Wires',
    ],
  },
  'track-lights': {
    number: 5,
    eyebrow: 'TRACK LIGHTS',
    tagline: 'Modern Magnetic. Directional Precision.',
    bullets: [
      '7 Models Available',
      'Linear & Grille Spotlights',
      '20W Cylindrical Spots (Black & White)',
      'Magnetic Speaker & Full-Power Supplies',
    ],
  },
};

export function ProductsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryName>('All Products');
  const [itemsPerPage, setItemsPerPage] = useState<number>(3); // 3 per page by default, 0 = Show all
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalCategories = categories.length; // 5
  const totalAllItems = useMemo(
    () => categories.reduce((acc, cat) => acc + cat.items.length, 0),
    []
  );

  const handleCategoryChange = (catName: ProductCategoryName) => {
    setSelectedCategory(catName);
    setCurrentPage(1);
  };

  // Determine active category if a single category tab is selected
  const activeCategory = useMemo(() => {
    if (selectedCategory === 'All Products') return null;
    return categories.find((c) => c.name === selectedCategory) || null;
  }, [selectedCategory]);

  // Paginated rows for "All Products"
  const isAllTab = selectedCategory === 'All Products';
  const isPaginated = isAllTab && itemsPerPage > 0;
  const totalPages = isPaginated ? Math.ceil(totalCategories / itemsPerPage) : 1;
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);

  const startIndex = isPaginated ? (safeCurrentPage - 1) * itemsPerPage : 0;
  const endIndex = isPaginated
    ? Math.min(startIndex + itemsPerPage, totalCategories)
    : totalCategories;

  const displayedCategories = useMemo(() => {
    if (activeCategory) {
      return [activeCategory];
    }
    return isPaginated ? categories.slice(startIndex, endIndex) : categories;
  }, [activeCategory, isPaginated, startIndex, endIndex]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const catalogEl = document.getElementById('products-list-top');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
          unoptimized
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
        {/* ============ FILTER BAR WITH PILL TABS & DISPLAY TOGGLE ============ */}
        <div className="rounded-2xl border border-primary/40 bg-[#00102a]/60 backdrop-blur-md p-3 sm:p-4 shadow-[0_0_24px_rgba(6,161,255,0.15)] mb-12 sm:mb-16 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category pill tabs: horizontal scroll on mobile, flex wrap on desktop */}
          <div
            role="group"
            aria-label="Filter by category"
            className={`flex items-center gap-2 overflow-x-auto p-1 -m-1 ${noScrollbar}`}
          >
            {productCategories.map((catName) => {
              const count =
                catName === 'All Products'
                  ? totalAllItems
                  : categories.find((c) => c.name === catName)?.items.length || 0;
              const isSelected = selectedCategory === catName;

              return (
                <button
                  key={catName}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleCategoryChange(catName)}
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-primary to-accent text-[#000613] shadow-[0_0_18px_rgba(63,203,248,0.55)]'
                      : 'border border-primary/40 bg-[#000814]/70 text-ink-muted hover:text-ink hover:border-accent/70 hover:bg-[#001438]'
                  }`}
                >
                  <span>{catName}</span>
                  <span
                    className={`min-w-[1.25rem] text-center text-[10px] leading-none px-1.5 py-1 rounded-full font-bold ${
                      isSelected ? 'bg-[#000613]/25 text-[#000613]' : 'bg-primary/20 text-accent'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Display toggle ("Display: 3 / page | Show all (5)") */}
          {isAllTab ? (
            <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
              <span className="text-xs font-semibold text-ink-muted">Display</span>
              <div className="inline-flex rounded-xl border border-primary/40 bg-[#000814]/80 p-1">
                {[
                  { label: '3 / page', value: 3 },
                  { label: `Show all (${totalCategories})`, value: 0 },
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
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                        active
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
          ) : (
            <div className="text-xs text-ink-muted font-medium self-end md:self-auto shrink-0 bg-[#000814] px-3.5 py-1.5 rounded-full border border-cyan-500/20">
              Showing <span className="text-accent font-bold">1</span> category &bull;{' '}
              <span className="text-accent font-bold">{activeCategory?.items.length || 0}</span> items
            </div>
          )}
        </div>

        {/* ============ FEATURE ROWS (ALTERNATING LAYOUT) ============ */}
        <div
          key={`${selectedCategory}-${safeCurrentPage}-${itemsPerPage}`}
          className="flex flex-col gap-14 sm:gap-20 lg:gap-24 animate-tab-switch"
        >
          {displayedCategories.map((category, idx) => {
            const meta = CATEGORY_ROW_DATA[category.slug] || {
              number: idx + 1,
              eyebrow: category.name.toUpperCase(),
              tagline: category.tagline,
              bullets: category.bullets,
            };

            // Maintain alternating pattern based on absolute category order (01 right, 02 left, 03 right, 04 left, 05 right)
            const absoluteOrderIndex = meta.number - 1;
            const isImageOnRight = absoluteOrderIndex % 2 === 0;
            const isLast = idx === displayedCategories.length - 1;

            return (
              <div key={category.slug} className="flex flex-col gap-14 sm:gap-20 lg:gap-24">
                <CategoryFeatureRow
                  category={category}
                  number={meta.number}
                  isImageOnRight={isImageOnRight}
                  tagline={meta.tagline}
                  bullets={meta.bullets}
                  eyebrow={meta.eyebrow}
                  priority={idx === 0 && safeCurrentPage === 1}
                />

                {/* Glowing neon divider between rows */}
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

        {/* ============ PAGINATION FOOTER (ON "ALL PRODUCTS" TAB) ============ */}
        {isPaginated && totalPages > 1 && (
          <nav
            aria-label="Categories Pagination"
            className="mt-14 sm:mt-16 pt-8 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="text-xs sm:text-sm text-ink-muted">
              Showing{' '}
              <span className="text-ink font-semibold">
                {startIndex + 1}&ndash;{endIndex}
              </span>{' '}
              of <span className="text-ink font-semibold">{totalCategories}</span> categories
              &nbsp;&bull;&nbsp; Page <span className="text-accent font-semibold">{safeCurrentPage}</span> of{' '}
              <span className="text-ink font-semibold">{totalPages}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handlePageChange(safeCurrentPage - 1)}
                disabled={safeCurrentPage <= 1}
                aria-label="Go to previous page"
                className={`inline-flex items-center gap-1 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 ${
                  safeCurrentPage <= 1
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
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isActive
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
                className={`inline-flex items-center gap-1 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 ${
                  safeCurrentPage >= totalPages
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

        {/* ============ ITEM GRID (SHOWN ONLY ON SINGLE CATEGORY TAB) ============ */}
        {activeCategory && (
          <div className="mt-16 sm:mt-20 pt-12 border-t border-cyan-500/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
              <div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                  All {activeCategory.name} Models &amp; Hardware
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                  Inspect models in this collection and request instant wholesale or retail pricing via WhatsApp.
                </p>
              </div>
              <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-accent/15 text-accent border border-accent/40 self-start sm:self-auto">
                {activeCategory.items.length} Models
              </span>
            </div>

            {/* 4 columns desktop, 2 tablet, 1 mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {activeCategory.items.map((item, idx) => (
                <ProductItemCard
                  key={item.id}
                  item={item}
                  categoryName={activeCategory.name}
                  categorySlug={activeCategory.slug}
                  index={idx}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductsCatalog;