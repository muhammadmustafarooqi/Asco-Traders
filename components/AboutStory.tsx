'use client';

import Image from 'next/image';
import {
  Gem,
  Calendar,
  ShieldCheck,
  Handshake,
  Target,
  Eye,
  Shield,
  Zap,
  Smile,
  Heart,
} from 'lucide-react';

// Soft radial fade so the emblem floats with no rectangular edge
const EMBLEM_MASK =
  'radial-gradient(ellipse 62% 66% at 50% 52%, #000 45%, transparent 100%)';
// Fades the row 2 backdrop into the page at the top and bottom
const BACKDROP_MASK =
  'linear-gradient(180deg, transparent 0%, #000 24%, #000 76%, transparent 100%)';

const cardClass =
  'rounded-2xl border border-primary/60 bg-[#000d24]/80 backdrop-blur-md p-5 sm:p-6 lg:p-6 xl:p-7 shadow-[0_0_22px_rgba(6,161,255,0.18)] hover:border-accent hover:shadow-[0_0_30px_rgba(63,203,248,0.3)] transition-all flex flex-col justify-center';

const statClass =
  'rounded-2xl border border-primary/50 bg-[#00102a]/70 backdrop-blur-sm px-3 py-4 sm:py-5 flex flex-col items-center justify-center text-center shadow-[0_0_16px_rgba(6,161,255,0.12)] hover:border-accent hover:shadow-[0_0_22px_rgba(63,203,248,0.25)] hover:-translate-y-0.5 transition-all duration-300';

const verticalLine =
  'hidden lg:block w-px h-3/5 self-center justify-self-center bg-gradient-to-b from-transparent via-accent/70 to-transparent shadow-[0_0_10px_rgba(63,203,248,0.6)]';

export function AboutStory() {
  return (
    <section
      id="our-story"
      aria-labelledby="our-story-heading"
      className="relative w-full max-w-[100vw] py-10 sm:py-12 lg:py-14 bg-[#000613] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6, 161, 255, 0.45) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 space-y-10 lg:space-y-12">
        {/* ============ ROW 1: image | story text | divider | 2x2 stats ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-[33fr_27fr_auto_28fr] gap-8 lg:gap-8 xl:gap-10 items-center">
          {/* Col 1: coil image (stretches to the height of the text/stats) */}
          <div className="flex lg:self-stretch">
            <div className="relative w-full aspect-[16/9] lg:aspect-auto min-h-[220px] rounded-2xl border-[1.5px] border-primary/70 bg-[#00091d] overflow-hidden shadow-[0_0_30px_rgba(6,161,255,0.28)]">
              <Image
                src="/asco_separate_images_webp/about/led_strip_no_blue_border.webp"
                alt="ASCO Premium LED Strip Light illuminated in golden amber glow coil on production bench"
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(6, 161, 255, 0.12) 0%, transparent 40%, rgba(6, 161, 255, 0.08) 100%)',
                }}
              />
            </div>
          </div>

          {/* Col 2: story text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-3 bg-accent" aria-hidden="true" />
              <span className="text-accent text-xs sm:text-sm font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                OUR STORY
              </span>
              <span className="h-px flex-1 max-w-[14rem] bg-accent/30" aria-hidden="true" />
            </div>

            <h2
              id="our-story-heading"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.2rem] text-ink leading-tight mb-4 tracking-tight"
            >
              Building a Legacy
              <br className="hidden sm:inline" /> of <span className="text-accent">Innovation</span>
            </h2>

            <p className="text-ink text-xs sm:text-sm lg:text-[13.5px] xl:text-sm leading-relaxed mb-3.5">
              ASCO Innovative Technologies was founded with a vision to illuminate a better, brighter future. What started as a passion for advanced lighting solutions has grown into a trusted brand in Pakistan, known for quality, reliability and customer satisfaction.
            </p>

            <p className="text-ink text-xs sm:text-sm lg:text-[13.5px] xl:text-sm leading-relaxed">
              Through continuous innovation and a commitment to excellence, we are proud to light homes, businesses and industries across the country.
            </p>
          </div>

          {/* Vertical glowing divider */}
          <div className={verticalLine} aria-hidden="true" />

          {/* Col 3: 2x2 stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
            <div className={statClass}>
              <Gem className="w-7 h-7 lg:w-8 lg:h-8 text-accent mb-1.5 drop-shadow-[0_0_8px_rgba(63,203,248,0.5)]" />
              <span className="font-heading font-bold text-xl lg:text-2xl text-ink leading-tight">2.9K+</span>
              <span className="text-xs lg:text-[13px] text-ink mt-1 leading-tight lg:whitespace-nowrap">Happy Customers</span>
            </div>

            <div className={statClass}>
              <Calendar className="w-7 h-7 lg:w-8 lg:h-8 text-accent mb-1.5 drop-shadow-[0_0_8px_rgba(63,203,248,0.5)]" />
              <span className="font-heading font-bold text-xl lg:text-2xl text-ink leading-tight">5+</span>
              <span className="text-xs lg:text-[13px] text-ink mt-1 leading-tight lg:whitespace-nowrap">Years of Excellence</span>
            </div>

            <div className={statClass}>
              <ShieldCheck className="w-7 h-7 lg:w-8 lg:h-8 text-accent mb-1.5 drop-shadow-[0_0_8px_rgba(63,203,248,0.5)]" />
              <span className="font-heading font-bold text-xl lg:text-2xl text-ink leading-tight">100%</span>
              <span className="text-xs lg:text-[13px] text-ink mt-1 leading-tight lg:whitespace-nowrap">Quality Assurance</span>
            </div>

            <div className={statClass}>
              <Handshake className="w-7 h-7 lg:w-8 lg:h-8 text-accent mb-1.5 drop-shadow-[0_0_8px_rgba(63,203,248,0.5)]" />
              <span className="font-heading font-semibold text-sm lg:text-[15px] text-ink leading-snug">
                Trusted by
                <br />
                Thousands
              </span>
            </div>
          </div>
        </div>

        {/* ============ ROW 2: mission | emblem | vision | values (no outer box) ============ */}
        {/* Counter the section padding so the wave backdrop bleeds edge to edge */}
        <div className="relative -mx-4 sm:-mx-6 md:-mx-10 lg:-mx-12 xl:-mx-16 2xl:-mx-20">
          <div
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50"
            aria-hidden="true"
            style={{ WebkitMaskImage: BACKDROP_MASK, maskImage: BACKDROP_MASK }}
          >
            <Image
              src="/asco_separate_images_webp/about/futuristic_neon_background_no_text.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-6 lg:py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.15fr_auto_1fr_auto_1.15fr_auto_1.05fr] gap-6 lg:gap-5 xl:gap-7 items-stretch">
              {/* Card 1: OUR MISSION */}
              <div className={cardClass}>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <Target className="w-9 h-9 lg:w-10 lg:h-10 text-accent shrink-0 drop-shadow-[0_0_10px_rgba(63,203,248,0.7)]" />
                  <div>
                    <span className="text-accent text-[11px] font-bold tracking-[0.2em] uppercase block">
                      OUR MISSION
                    </span>
                    <h3 className="font-heading font-bold text-lg lg:text-xl text-ink leading-tight mt-0.5">
                      Lighting Lives Better
                    </h3>
                  </div>
                </div>
                <p className="text-ink text-xs sm:text-[13px] xl:text-sm leading-relaxed">
                  To deliver innovative, high-quality lighting solutions while building long-term trust with our customers.
                </p>
              </div>

              <div className={verticalLine} aria-hidden="true" />

              {/* Center: floating 3D emblem */}
              <div className="relative w-full h-52 md:h-56 lg:h-full lg:min-h-[230px] md:col-span-2 lg:col-span-1">
                <div
                  className="absolute inset-0"
                  style={{ WebkitMaskImage: EMBLEM_MASK, maskImage: EMBLEM_MASK }}
                >
                  <Image
                    src="/asco_separate_images_webp/about/futuristic_neon_background_no_text.webp"
                    alt="ASCO 3D Illuminated Emblem on Neon Pedestal"
                    fill
                    sizes="(max-width: 1024px) 100vw, 22vw"
                    className="object-cover object-[37.5%_center] scale-125"
                  />
                </div>
              </div>

              <div className={verticalLine} aria-hidden="true" />

              {/* Card 2: OUR VISION */}
              <div className={cardClass}>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <Eye className="w-9 h-9 lg:w-10 lg:h-10 text-accent shrink-0 drop-shadow-[0_0_10px_rgba(63,203,248,0.7)]" />
                  <div>
                    <span className="text-accent text-[11px] font-bold tracking-[0.2em] uppercase block">
                      OUR VISION
                    </span>
                    <h3 className="font-heading font-bold text-lg lg:text-xl text-ink leading-tight mt-0.5">
                      A Brighter, More Connected Tomorrow
                    </h3>
                  </div>
                </div>
                <p className="text-ink text-xs sm:text-[13px] xl:text-sm leading-relaxed">
                  To become Pakistan&apos;s most trusted LED lighting brand, known for quality, innovation and service.
                </p>
              </div>

              <div className={verticalLine} aria-hidden="true" />

              {/* Card 3: OUR VALUES */}
              <div className={`${cardClass} md:col-span-2 lg:col-span-1`}>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <Handshake className="w-9 h-9 lg:w-10 lg:h-10 text-accent shrink-0 drop-shadow-[0_0_10px_rgba(63,203,248,0.7)]" />
                  <span className="text-accent text-[11px] font-bold tracking-[0.2em] uppercase">
                    OUR VALUES
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-[13px] xl:text-sm text-ink">
                  <li className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent shrink-0 drop-shadow-[0_0_6px_rgba(63,203,248,0.6)]" />
                    <span>Quality Without Compromise</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-accent shrink-0 drop-shadow-[0_0_6px_rgba(63,203,248,0.6)]" />
                    <span>Innovation Always Forward</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Smile className="w-5 h-5 text-accent shrink-0 drop-shadow-[0_0_6px_rgba(63,203,248,0.6)]" />
                    <span>Customer Satisfaction Our Priority</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-accent shrink-0 drop-shadow-[0_0_6px_rgba(63,203,248,0.6)]" />
                    <span>Long-Term Partnership Building</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const OurStory = AboutStory;
export default AboutStory;