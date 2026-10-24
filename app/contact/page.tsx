import type { Metadata } from 'next';
import { ContactHero } from '@/components/ContactHero';
import { ContactSection } from '@/components/ContactSection';
import { LocationHoursSection } from '@/components/LocationHoursSection';
import { GlowDivider } from '@/components/GlowDivider';
import { StayUpdated } from '@/components/StayUpdated';

export const metadata: Metadata = {
  title: 'Contact Us | ASCO Innovative Technologies',
  description:
    'Get in touch with ASCO Innovative Technologies for premium 220V LED rope lights, connectors, profile channels, accessories, and track lights in Pakistan.',
};

export default function ContactPage() {
  return (
    <div className="bg-bg min-h-screen text-ink">
      {/* 1. Contact Hero Section with about-asco-page.webp */}
      <ContactHero />

      {/* Glowing Rope-Light Divider */}
      <GlowDivider />

      {/* 2. Main Contact Section (4 Cards | Vertical Divider | How Can We Help You? Form - 75vh max) */}
      <ContactSection />

      {/* Glowing Rope-Light Divider */}
      <GlowDivider />

      {/* 3. Location Map & Business Hours Section (over glue-bg.webp) */}
      <LocationHoursSection />

      {/* Glowing Rope-Light Divider */}
      <GlowDivider />
    </div>
  );
}
