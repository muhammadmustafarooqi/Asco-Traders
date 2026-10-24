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

const EMBLEM_MASK =
  'radial-gradient(ellipse 62% 66% at 50% 52%, #000 45%, transparent 100%)';
// Soft fade at the top and bottom edge so the banner blends into the page
const BACKDROP_MASK =
  'linear-gradient(180deg, transparent 0%, #000 12%, #000 88%, transparent 100%)';

/*
  Panel positions measured from the background image (2172 x 724):
    top: 27.1%, height: 37.6%  (same for all three frames)
    mission: left 3.78%,  width 23.2%
    vision:  left 52.25%, width 21.8%
    values:  left 76.1%,  width 20.1%
  Below xl: normal stacked cards with their own borders.
  From xl up: borderless text positioned exactly inside the frames of the image.
*/
const cardBase =
  'flex flex-col justify-center rounded-2xl border border-primary/60 bg-[#000d24]/80 backdrop-blur-md p-5 sm:p-6 ' +
  'shadow-[0_0_22px_rgba(6,161,255,0.18)] transition-all ' +
  'max-xl:hover:border-accent max-xl:hover:shadow-[0_0_30px_rgba(63,203,248,0.3)] ' +
  'xl:absolute xl:rounded-none xl:border-0 xl:bg-transparent xl:backdrop-blur-none xl:shadow-none ' +
  'xl:top-[27.1%] xl:h-[37.6%] xl:px-[1.7cqw] xl:py-[1cqw]';

const missionPos = 'xl:left-[3.78%] xl:w-[23.2%]';
const visionPos = 'xl:left-[52.25%] xl:w-[21.8%]';
const valuesPos = 'xl:left-[76.1%] xl:w-[20.1%]';

const labelClass =
  'text-accent text-[11px] xl:text-[length:max(9px,0.62cqw)] font-bold tracking-[0.2em] uppercase block';
const headClass =
  'font-heading font-bold text-lg xl:text-[length:max(14px,1.2cqw)] text-ink leading-tight mt-0.5';
const bodyClass =
  'text-ink text-xs sm:text-[13px] xl:text-[length:max(11px,0.8cqw)] leading-relaxed xl:leading-[1.55]';
const headIcon =
  'w-9 h-9 xl:w-[max(26px,2.4cqw)] xl:h-[max(26px,2.4cqw)] text-accent shrink-0 drop-shadow-[0_0_10px_rgba(63,203,248,0.7)]';
const headRow =
  'flex items-center gap-3.5 xl:gap-[1cqw] mb-3.5 xl:mb-[0.9cqw]';
const listIcon =
  'w-5 h-5 xl:w-[max(14px,1.1cqw)] xl:h-[max(14px,1.1cqw)] text-accent shrink-0 drop-shadow-[0_0_6px_rgba(63,203,248,0.6)]';

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

      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
        {/* ============ ROW 1 (unchanged) ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-[33fr_27fr_auto_28fr] gap-8 lg:gap-8 xl:gap-10 items-center">
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

          <div className={verticalLine} aria-hidden="true" />

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

        {/* ============ ROW 2: text placed inside the frames of the background image ============ */}
        {/* xl+: box ratio = image ratio (2172/724), so nothing is cropped and % positions match the frames. */}
        <div className="relative -mx-4 sm:-mx-6 md:-mx-10 lg:-mx-12 xl:-mx-16 2xl:-mx-20 xl:aspect-[2172/724] xl:[container-type:inline-size]">
          {/* Background image (has the 3 frames + emblem + pedestal baked in) */}
          <div
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 xl:opacity-100"
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

          <div className="relative z-10 px-4 sm:px-6 md:px-10 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 xl:block xl:absolute xl:inset-0 xl:p-0">
            {/* OUR MISSION */}
            <div className={`${cardBase} ${missionPos}`}>
              <div className={headRow}>
                <Target className={headIcon} />
                <div>
                  <span className={labelClass}>OUR MISSION</span>
                  <h3 className={headClass}>Lighting Lives Better</h3>
                </div>
              </div>
              <p className={bodyClass}>
                To deliver innovative, high-quality lighting solutions while building long-term trust with our customers.
              </p>
            </div>

            {/* Emblem: only on mobile/tablet. On xl+ it is already in the background image */}
            <div className="relative w-full h-52 md:h-56 md:col-span-2 xl:hidden">
              <div
                className="absolute inset-0"
                style={{ WebkitMaskImage: EMBLEM_MASK, maskImage: EMBLEM_MASK }}
              >
                <Image
                  src="/asco_separate_images_webp/about/futuristic_neon_background_no_text.webp"
                  alt="ASCO 3D Illuminated Emblem on Neon Pedestal"
                  fill
                  sizes="100vw"
                  className="object-cover object-[24%_center] scale-110"
                />
              </div>
            </div>

            {/* OUR VISION */}
            <div className={`${cardBase} ${visionPos}`}>
              <div className={headRow}>
                <Eye className={headIcon} />
                <div>
                  <span className={labelClass}>OUR VISION</span>
                  <h3 className={headClass}>A Brighter, More Connected Tomorrow</h3>
                </div>
              </div>
              <p className={bodyClass}>
                To become Pakistan&apos;s most trusted LED lighting brand, known for quality, innovation and service.
              </p>
            </div>

            {/* OUR VALUES */}
            <div className={`${cardBase} ${valuesPos} md:col-span-2 xl:col-span-1`}>
              <div className={headRow}>
                <Handshake className={headIcon} />
                <span className={labelClass}>OUR VALUES</span>
              </div>

              <ul className="space-y-2.5 xl:space-y-[0.7cqw] text-xs sm:text-[13px] xl:text-[length:max(11px,0.78cqw)] text-ink">
                <li className="flex items-center gap-3 xl:gap-[0.8cqw]">
                  <Shield className={listIcon} />
                  <span>Quality Without Compromise</span>
                </li>
                <li className="flex items-center gap-3 xl:gap-[0.8cqw]">
                  <Zap className={listIcon} />
                  <span>Innovation Always Forward</span>
                </li>
                <li className="flex items-center gap-3 xl:gap-[0.8cqw]">
                  <Smile className={listIcon} />
                  <span>Customer Satisfaction Our Priority</span>
                </li>
                <li className="flex items-center gap-3 xl:gap-[0.8cqw]">
                  <Heart className={listIcon} />
                  <span>Long-Term Partnership Building</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const OurStory = AboutStory;
export default AboutStory;