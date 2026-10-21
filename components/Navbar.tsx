'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/lib/site';
import { products } from '@/lib/products';

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Scroll listener for sticky transparent-to-solid transition (>8px)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsProductsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsProductsOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-primary text-ink rounded-md font-semibold focus-visible:ring-2 focus-visible:ring-accent"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg/80 backdrop-blur-md border-b border-line shadow-lg shadow-bg/40'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1"
              aria-label="ASCO Innovative Technologies - Home"
            >
              <Image
                src="/logo.png"
                alt="ASCO Innovative Technologies Logo"
                width={150}
                height={50}
                className="h-10 sm:h-11 w-auto object-contain asco-logo-contrast"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
              {/* Home Link */}
              <Link
                href="/"
                className={`text-[15px] font-medium transition-colors py-1 relative ${
                  pathname === '/'
                    ? 'text-accent after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-accent'
                    : 'text-ink-muted hover:text-ink'
                }`}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>

              {/* Products Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  type="button"
                  id="products-menu-button"
                  onClick={() => setIsProductsOpen((prev) => !prev)}
                  onFocus={() => setIsProductsOpen(true)}
                  aria-expanded={isProductsOpen}
                  aria-haspopup="true"
                  aria-controls="products-menu-dropdown"
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
                    pathname?.startsWith('/products')
                      ? 'text-accent after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-accent'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isProductsOpen ? 'rotate-180 text-accent' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown Menu */}
                {isProductsOpen && (
                  <div
                    id="products-menu-dropdown"
                    role="menu"
                    aria-labelledby="products-menu-button"
                    className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-line bg-surface/95 backdrop-blur-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <div className="py-1">
                      {products.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/products#${item.slug}`}
                          role="menuitem"
                          onClick={() => setIsProductsOpen(false)}
                          className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm text-ink-muted hover:text-ink hover:bg-card/70 transition-colors group"
                        >
                          <span>{item.name}</span>
                          <span
                            className="text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-hidden="true"
                          >
                            &rarr;
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* About Link */}
              <Link
                href="/about"
                className={`text-[15px] font-medium transition-colors py-1 relative ${
                  pathname === '/about'
                    ? 'text-accent after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-accent'
                    : 'text-ink-muted hover:text-ink'
                }`}
                aria-current={pathname === '/about' ? 'page' : undefined}
              >
                About
              </Link>

              {/* Gallery Link */}
              <Link
                href="/gallery"
                className={`text-[15px] font-medium transition-colors py-1 relative ${
                  pathname === '/gallery'
                    ? 'text-accent after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-accent'
                    : 'text-ink-muted hover:text-ink'
                }`}
                aria-current={pathname === '/gallery' ? 'page' : undefined}
              >
                Gallery
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className={`text-[15px] font-medium transition-colors py-1 relative ${
                  pathname === '/contact'
                    ? 'text-accent after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-accent'
                    : 'text-ink-muted hover:text-ink'
                }`}
                aria-current={pathname === '/contact' ? 'page' : undefined}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop "WhatsApp Us" Pill with Accent Glow */}
            <div className="hidden md:flex items-center">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full border border-accent text-ink hover:bg-accent/15 hover:border-accent transition-all duration-200 shadow-[0_0_15px_rgba(63,203,248,0.25)] hover:shadow-[0_0_20px_rgba(63,203,248,0.4)]"
              >
                <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation-menu"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-surface border border-line focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Dropdown */}
        {isOpen && (
          <div
            id="mobile-navigation-menu"
            className="md:hidden border-b border-line bg-surface/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 max-h-[calc(100vh-80px)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block px-3.5 py-2.5 rounded-lg text-base transition-colors ${
                  pathname === '/'
                    ? 'text-accent font-medium bg-card'
                    : 'text-ink-muted hover:text-ink hover:bg-card/50'
                }`}
              >
                Home
              </Link>

              {/* Products Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileProductsOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base text-ink-muted hover:text-ink hover:bg-card/50 transition-colors"
                  aria-expanded={isMobileProductsOpen}
                >
                  <span className={pathname?.startsWith('/products') ? 'text-accent font-medium' : ''}>
                    Products
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isMobileProductsOpen ? 'rotate-180 text-accent' : ''
                    }`}
                  />
                </button>

                {isMobileProductsOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-card/40 rounded-lg mt-1 border-l-2 border-accent/40">
                    {products.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/products#${item.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm text-ink-muted hover:text-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About */}
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`block px-3.5 py-2.5 rounded-lg text-base transition-colors ${
                  pathname === '/about'
                    ? 'text-accent font-medium bg-card'
                    : 'text-ink-muted hover:text-ink hover:bg-card/50'
                }`}
              >
                About
              </Link>

              {/* Gallery */}
              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className={`block px-3.5 py-2.5 rounded-lg text-base transition-colors ${
                  pathname === '/gallery'
                    ? 'text-accent font-medium bg-card'
                    : 'text-ink-muted hover:text-ink hover:bg-card/50'
                }`}
              >
                Gallery
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`block px-3.5 py-2.5 rounded-lg text-base transition-colors ${
                  pathname === '/contact'
                    ? 'text-accent font-medium bg-card'
                    : 'text-ink-muted hover:text-ink hover:bg-card/50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile WhatsApp Button */}
            <div className="pt-3 border-t border-line">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-medium rounded-full border border-accent text-ink hover:bg-accent/15 transition-all shadow-[0_0_15px_rgba(63,203,248,0.25)]"
              >
                <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
