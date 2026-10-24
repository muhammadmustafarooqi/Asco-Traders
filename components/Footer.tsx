'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/site';

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Render the heart in red, wherever it appears in the credit line
  const creditParts = siteConfig.creditLine.split('♥');

  return (
    <footer className="relative w-full max-w-[100vw] bg-surface border-t border-line text-ink-muted overflow-hidden">
      {/* Top glowing accent line */}
      <div className="rope-glow-divider" aria-hidden="true" />

      {/* Soft blue glow at the bottom right, as in the mockup */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 45% 70% at 92% 100%, rgba(6,161,255,0.16), transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 lg:pt-9 lg:pb-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.15fr_1.7fr_1.35fr] gap-x-8 gap-y-8 lg:gap-x-6 xl:gap-x-10 items-start">
          {/* Column 1: Brand */}
          <div className="space-y-3">
            <Link
              href="/"
              className="inline-block focus-visible:ring-2 focus-visible:ring-accent rounded-md"
              aria-label="ASCO Innovative Technologies"
            >
              <Image
                src="/logo.png"
                alt="ASCO Innovative Technologies"
                width={180}
                height={60}
                className="h-12 sm:h-14 w-auto object-contain asco-logo-contrast"
              />
            </Link>
            <p className="text-[13px] leading-relaxed text-ink">{siteConfig.tagline}</p>

            {/* Social icons: bare cyan outlines, no boxes */}
            <div className="flex items-center gap-5 pt-1">
              <a
                href="https://www.facebook.com/profile.php?id=100087881238548"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-ink hover:scale-110 transition-all"
                aria-label="Follow ASCO Traders on Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ascoledropelight"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-ink hover:scale-110 transition-all"
                aria-label="Follow ASCO Traders on Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-ink text-sm mb-3 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-[13px]">
              {siteConfig.footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-ink hover:text-accent transition-colors inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div>
            <h3 className="font-heading font-semibold text-ink text-sm mb-3 tracking-wide">
              Our Products
            </h3>
            <ul className="space-y-1.5 text-[13px]">
              {siteConfig.footerLinks.productLinks.map((product) => (
                <li key={product.name}>
                  <Link href={product.href} className="text-ink hover:text-accent transition-colors inline-block">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="font-heading font-semibold text-ink text-sm mb-3 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-[13px]">
              {/* One phone icon, numbers stacked */}
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone.display}
                      href={`tel:${phone.tel}`}
                      className="text-ink hover:text-accent transition-colors"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-ink hover:text-accent transition-colors break-all"
                >
                  <Mail className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-ink">
                <MapPin className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Glowing divider + tagline */}
          <div className="relative md:col-span-2 lg:col-span-1 lg:self-stretch flex items-center lg:pl-10 xl:pl-14 min-h-[72px]">
            {/* Vertical glow line */}
            <span
              className="hidden lg:block absolute left-0 inset-y-0 w-px bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_10px_rgba(63,203,248,0.7)]"
              aria-hidden="true"
            />
            <p className="font-heading font-bold text-ink text-lg xl:text-xl leading-snug">
              Clean. Modern.
              <br />
              Premium.
            </p>
            {/* Curved glow under the tagline */}
            <svg
              className="hidden lg:block absolute left-6 xl:left-10 bottom-0 w-[85%] h-8 pointer-events-none"
              viewBox="0 0 300 40"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="footer-swoosh" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#06a1ff" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#3fcbf8" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#06a1ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 34 Q 130 4 300 22" stroke="url(#footer-swoosh)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom bar: full-width glowing divider */}
      <div className="relative z-10">
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent shadow-[0_0_12px_rgba(63,203,248,0.45)]"
          aria-hidden="true"
        />
        <div className="max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-ink-muted w-full">
          <p>
            © {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
          <p>
            {creditParts.map((part, i) => (
              <Fragment key={i}>
                {i > 0 && <span className="text-red-500">♥</span>}
                {part}
              </Fragment>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}