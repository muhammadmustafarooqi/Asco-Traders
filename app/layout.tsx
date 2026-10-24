import type { Metadata } from 'next';
import { Sora, Manrope } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';
import '../styles/globals.css';

import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { siteConfig } from '@/lib/site';

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: 'ASCO Traders | Premium LED Rope, Profile & Track Lights in Pakistan',
  description:
    'ASCO Traders delivers premium LED lighting solutions in Pakistan. Explore high-efficiency rope lights, connectors, aluminium profile channels, accessories, and track lights.',
  // TODO: REMOVE BEFORE LAUNCH - Temporary testing deployment directive
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'ASCO Traders | Premium LED Rope, Strip & Profile Lights in Pakistan',
    description:
      'Premium LED lighting solutions for modern homes, commercial spaces, and architectural applications across Pakistan.',
    url: 'https://www.ascotraders.com',
    siteName: 'ASCO Traders',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/asco_separate_images_webp/01_modern_house_hero.webp',
        width: 1200,
        height: 630,
        alt: 'ASCO Traders Premium LED Architectural Lighting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASCO Traders | Premium LED Rope, Strip & Profile Lights in Pakistan',
    description:
      'Premium LED lighting solutions for modern homes, commercial spaces, and architectural applications across Pakistan.',
    images: ['/asco_separate_images_webp/01_modern_house_hero.webp'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ASCO Innovative Technologies',
  alternateName: 'Asco Traders',
  url: 'https://www.ascotraders.com',
  logo: 'https://www.ascotraders.com/logo.png',
  email: 'info@ascotraders.com',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: siteConfig.phones[0].tel,
      contactType: 'customer service',
      areaServed: 'PK',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'Pakistan',
  },
  sameAs: siteConfig.socialLinks.map((s) => s.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-bg text-ink font-sans antialiased selection:bg-accent/30 selection:text-ink"
        suppressHydrationWarning
      >
        <ScrollProgressBar />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
