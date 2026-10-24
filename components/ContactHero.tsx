'use client';

import { Clock, Headphones, ShieldCheck, Zap } from 'lucide-react';
import { PageHero, type HeroFeature } from '@/components/PageHero';
import heroImage from '@/public/asco_separate_images_webp/about/about-asco-page.webp';

const CONTACT_FEATURES: HeroFeature[] = [
  { icon: Clock, lines: ['Quick', 'Response'] },
  { icon: Headphones, lines: ['Expert', 'Support'] },
  { icon: ShieldCheck, lines: ['Quality', 'Guaranteed'] },
  { icon: Zap, lines: ['Fast', 'Turnaround'] },
];

export function ContactHero() {
  return (
    <PageHero
      id="contact-hero-heading"
      image={heroImage}
      imageAlt="ASCO Innovative Technologies illuminated architectural building at night"
      imagePosition="85% center"
      eyebrow="GET IN TOUCH"
      heading={
        <>
          Let&apos;s Build a <span className="text-accent">Brighter</span>
          <br />
          Future Together
        </>
      }
      subtext={
        <>
          Have a question, project inquiry, or need expert advice?
          <br className="hidden sm:inline" /> Our team at ASCO is here to help. Reach out to us
          through
          <br className="hidden sm:inline" /> any of the channels below &mdash; we&apos;d love to
          hear from you.
        </>
      }
      cta={{ label: 'Send Us a Message', href: '#inquiry-form', icon: 'mail' }}
      features={CONTACT_FEATURES}
    />
  );
}

export default ContactHero;