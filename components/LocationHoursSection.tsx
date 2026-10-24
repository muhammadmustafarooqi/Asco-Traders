'use client';

import Image from 'next/image';
import { Clock } from 'lucide-react';

export function LocationHoursSection() {
  return (
    <section
      aria-label="Location and Business Hours"
      className="relative w-full max-w-[100vw] py-8 sm:py-10 lg:py-12 bg-[#000613] overflow-hidden"
    >
      {/* Background panoramic glue-bg with ambient cyan curves */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/asco_separate_images_webp/glue-bg.webp"
          alt="Ambient neon glow background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        {/* Subtle top & bottom blending */}
        <div
          className="absolute inset-x-0 top-0 h-10"
          style={{ background: 'linear-gradient(180deg, #000613 0%, transparent 100%)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-10"
          style={{ background: 'linear-gradient(0deg, #000613 0%, transparent 100%)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.35fr] gap-5 sm:gap-6 lg:gap-6 xl:gap-8 items-stretch w-full">
          {/* ============ CARD 1 (LEFT): Real Interactive Google Map Card ============ */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto lg:h-[225px] xl:h-[245px] rounded-2xl border border-primary/60 overflow-hidden shadow-[0_0_24px_rgba(6,161,255,0.2)] bg-[#000814] group">
            {/* Interactive Real Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.320285811651!2d67.005014!3d24.852908300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fde20baeaef%3A0xdca57ce9ef126522!2sAsco%20Traders!5e0!3m2!1sen!2s!4v1792807774729!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Asco Traders Google Maps Location"
              className="w-full h-full min-h-[200px] border-0 filter invert-[90%] hue-rotate-180 contrast-[95%] opacity-90 hover:opacity-100 transition-opacity"
            />

            {/* View on Google Maps Button at bottom right */}
            <a
              href="https://www.google.com/maps?cid=15899222459424728354"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Asco Traders on Google Maps in a new tab"
              className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-primary/70 bg-[#000d24]/90 hover:bg-primary/25 hover:border-accent text-ink text-xs font-semibold shadow-[0_0_15px_rgba(6,161,255,0.35)] hover:shadow-[0_0_22px_rgba(63,203,248,0.55)] transition-all pointer-events-auto backdrop-blur-md group/btn"
            >
              <span>View on Google Maps</span>
              <span aria-hidden="true" className="text-accent group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                &nearr;
              </span>
            </a>
          </div>

          {/* ============ CARD 2 (RIGHT): Business Hours Card ============ */}
          <div className="relative lg:h-[225px] xl:h-[245px] rounded-2xl border border-primary/60 bg-[#000d24]/90 backdrop-blur-md overflow-hidden shadow-[0_0_24px_rgba(6,161,255,0.2)] flex flex-col md:flex-row items-stretch">
            {/* Left Sub-column: Business Hours Information */}
            <div className="flex-1 p-5 sm:p-6 lg:p-5 xl:p-6 flex flex-col justify-center z-10">
              <div className="flex items-center gap-3 mb-2.5">
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-accent/70 bg-accent/15 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(63,203,248,0.5)]"
                  aria-hidden="true"
                >
                  <Clock className="w-5 h-5 text-accent stroke-[2]" />
                </div>
                <h2 className="font-heading font-bold text-lg sm:text-xl lg:text-[21px] text-accent leading-tight">
                  Our Business Hours
                </h2>
              </div>

              <p className="text-ink font-semibold text-xs sm:text-sm mt-1.5 tracking-wide">
                Monday &ndash; Saturday
              </p>
              <p className="font-heading font-bold text-xl sm:text-2xl lg:text-[1.75rem] text-ink leading-tight mt-1 tracking-tight">
                9:00 AM &ndash; 7:00 PM
              </p>
              <p className="text-ink-muted text-[11px] sm:text-xs mt-1.5 font-normal leading-relaxed">
                We are available to assist you during these hours.
              </p>
            </div>

            {/* Vertical Glowing Cyan Divider between text & landmark (Desktop md+) */}
            <div className="hidden md:flex items-center justify-center self-stretch py-4 z-10" aria-hidden="true">
              <div className="w-[1.5px] h-[82%] bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_10px_rgba(63,203,248,0.7)]" />
            </div>

            {/* Right Sub-column: Illuminated Landmark Landscape */}
            <div className="relative md:w-[48%] lg:w-[48%] xl:w-[50%] min-h-[140px] md:min-h-0 pointer-events-none overflow-hidden">
              <Image
                src="/asco_separate_images_webp/stay_updated_landmark.webp"
                alt="Illuminated architectural landmark at night"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover object-[75%_center] brightness-95"
              />
              {/* Soft blend mask on left edge */}
              <div
                className="hidden md:block absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, #000d24 0%, rgba(0, 13, 36, 0.4) 15%, transparent 35%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationHoursSection;
