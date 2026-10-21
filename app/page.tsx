import { Hero } from '@/components/Hero';
import { ProductRange } from '@/components/ProductRange';
import { AboutBlock } from '@/components/AboutBlock';
import { WhyChoose } from '@/components/WhyChoose';
import { GalleryPreview } from '@/components/GalleryPreview';
import { TestimonialsNewsletter } from '@/components/TestimonialsNewsletter';
import { GlowDivider } from '@/components/GlowDivider';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with integrated Trust Strip */}
      <Hero />

      {/* Decorative glowing rope-light divider */}
      <GlowDivider />

      {/* 2. Products Range (6 items) */}
      <ProductRange />

      {/* Decorative glowing rope-light divider */}
      <GlowDivider />

      {/* 3. Why Choose ASCO / 220V Rope Light Banner */}
      <WhyChoose />

      {/* Decorative glowing rope-light divider */}
      <GlowDivider />

      {/* 4. About ASCO Block */}
      <AboutBlock />

      {/* Decorative glowing rope-light divider */}
      <GlowDivider />

      {/* 5. Gallery Preview */}
      <GalleryPreview />

      {/* Decorative glowing rope-light divider */}
      <GlowDivider />

      {/* 6. Testimonials & Stay Updated Newsletter */}
      <TestimonialsNewsletter />
    </>
  );
}
