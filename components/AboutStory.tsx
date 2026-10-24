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
import CountUp from '@/components/CountUp';
import Reveal from '@/components/Reveal';

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
  'flex flex-col justify-center rounded-2xl border border-cyan-500/25 bg-[#000d24]/80 backdrop-blur-md p-5 sm:p-6 ' +
  'shadow-[0_4px_22px_rgba(0,0,0,0.4)] transition-all ' +
  'max-xl:hover:border-cyan-400/50 max-xl:hover:shadow-[0_0_30px_rgba(63,203,248,0.25)] ' +
  'xl:absolute xl:rounded-none xl:border-0 xl:bg-transparent xl:backdrop-blur-none xl:shadow-none ' +
  'xl:top-[27.1%] xl:h-[37.6%] xl:px-[1.7cqw] xl:py-[1cqw]';

const missionPos = 'xl:left-[3.78%] xl:w-[23.2%]';
const visionPos = 'xl:left-[52.25%] xl:w-[21.8%]';
const valuesPos = 'xl:left-[76.1%] xl:w-[20.1%]';

const labelClass =
  'text-accent text-[11px] xl:text-[length:max(9px,0.62cqw)] font-semibold tracking-[0.12em] uppercase block';
const headClass =
  'font-heading font-bold text-lg xl:text-[length:max(14px,1.2cqw)] text-ink leading-tight mt-0.5 tracking-[-0.02em]';
const bodyClass =
  'text-slate-300 text-xs sm:text-[13px] xl:text-[length:max(11px,0.8cqw)] leading-[1.65] xl:leading-[1.6]';
const headIcon =
  'w-9 h-9 xl:w-[max(26px,2.4cqw)] xl:h-[max(26px,2.4cqw)] text-accent shrink-0 drop-shadow-[0_0_10px_rgba(63,203,248,0.7)]';
const headRow =
  'flex items-center gap-3.5 xl:gap-[1cqw] mb-3.5 xl:mb-[0.9cqw]';
const listIcon =
  'w-5 h-5 xl:w-[max(14px,1.1cqw)] xl:h-[max(14px,1.1cqw)] text-accent shrink-0 drop-shadow-[0_0_6px_rgba(63,203,248,0.6)]';

const statClass =
  'h-full min-h-[120px] sm:min-h-[135px] rounded-2xl border border-cyan-500/20 bg-[#00102a]/70 backdrop-blur-sm px-2.5 sm:px-3 py-3.5 sm:py-5 flex flex-col items-center justify-center text-center shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:border-cyan-400/50 hover:shadow-[0_0_22px_rgba(63,203,248,0.2)] hover:-translate-y-0.5 transition-all duration-300';

const verticalLine =
  'hidden lg:block w-px h-3/5 self-center justify-self-center bg-gradient-to-b from-transparent via-accent/70 to-transparent shadow-[0_0_10px_rgba(63,203,248,0.6)]';

/* ------------------------------------------------------------------ */
/* MOBILE ONLY (< md): vertical neon image with 3 frames               */
/*                                                                     */
/* Image: mobile_neon_interface (941 x 1672). It is shown 1.2x zoomed  */
/* (object-cover in a 941:2006 box) so the frames are big enough for   */
/* text. Horizontal % below are already converted for that crop:       */
/*   left_c = 50 + (left_img - 50) * 1.2 ,  width_c = width_img * 1.2  */
/* Vertical % are unchanged.                                           */
/* All text is sized in cqw so it scales together with the image.      */
/* If a frame border looks off after you swap the image, only edit     */
/* MOBILE_FRAMES below.                                                */
/* ------------------------------------------------------------------ */
const MOBILE_IMAGE = '/asco_separate_images_webp/about/mobile_neon_interface.webp';

const MOBILE_FRAMES = {
  mission: { left: '6.6%', top: '7.3%', width: '86.8%', height: '19.6%' },
  vision: { left: '4.3%', top: '55.6%', width: '91.3%', height: '17.8%' },
  values: { left: '4.3%', top: '75.4%', width: '91.3%', height: '17.9%' },
} as const;

const mFrame =
  'absolute flex flex-col justify-center overflow-hidden px-[5cqw] py-[2.5cqw]';
const mRow = 'flex items-center gap-[3cqw] mb-[1.8cqw]';
const mIcon =
  'w-[5.2cqw] h-[5.2cqw] min-w-[18px] min-h-[18px] text-accent shrink-0 drop-shadow-[0_0_8px_rgba(63,203,248,0.7)]';
const mLabel =
  'text-accent text-[length:max(9px,2.7cqw)] font-semibold tracking-[0.12em] uppercase block leading-tight';
const mHead =
  'font-heading font-bold text-[length:max(13px,4.2cqw)] text-ink leading-[1.2] mt-[0.4cqw] tracking-[-0.02em]';
const mBody =
  'text-slate-300 text-[length:max(10.5px,3.3cqw)] leading-[1.45]';
const mList =
  'space-y-[1.4cqw] text-[length:max(10.5px,3.2cqw)] leading-[1.4] text-ink';
const mListItem = 'flex items-center gap-[2.4cqw]';
const mListIcon =
  'w-[3.8cqw] h-[3.8cqw] min-w-[13px] min-h-[13px] text-accent shrink-0 drop-shadow-[0_0_6px_rgba(63,203,248,0.6)]';

export function AboutStory() {
  return (
    <section
      id="our-story"
      aria-labelledby="our-story-heading"
      className="relative w-full max-w-full py-10 sm:py-12 lg:py-14 bg-[#000613] overflow-x-clip"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[900px] h-[300px] sm:h-[400px] lg:h-[500px] pointer-events-none opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6, 161, 255, 0.45) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl xl:max-w-[1536px] mx-auto px-5 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
        {/* ============ ROW 1 ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-[33fr_27fr_auto_28fr] gap-6 sm:gap-8 lg:gap-8 xl:gap-10 items-center">
          <div className="flex lg:self-stretch">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto min-h-[200px] sm:min-h-[220px] rounded-2xl border border-cyan-500/25 bg-[#00091d] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
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

          <div className="flex flex-col justify-center pt-1 sm:pt-0">
            <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
              <span className="h-px w-3 bg-accent" aria-hidden="true" />
              <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase whitespace-nowrap">
                OUR STORY
              </span>
              <span className="h-px flex-1 max-w-[14rem] bg-accent/30" aria-hidden="true" />
            </div>

            <h2
              id="our-story-heading"
              className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.2rem] text-ink leading-[1.18] mb-3 sm:mb-4 tracking-[-0.02em]"
            >
              Building a Legacy
              <br className="hidden sm:inline" /> of <span className="text-accent">Innovation</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm lg:text-[13.5px] xl:text-sm leading-[1.65] mb-3 sm:mb-3.5">
              ASCO Innovative Technologies was founded with a vision to illuminate a better, brighter future. What started as a passion for advanced lighting solutions has grown into a trusted brand in Pakistan, known for quality, reliability and customer satisfaction.
            </p>

            <p className="text-slate-300 text-xs sm:text-sm lg:text-[13.5px] xl:text-sm leading-[1.65]">
              Through continuous innovation and a commitment to excellence, we are proud to light homes, businesses and industries across the country.
            </p>
          </div>

          <div className={verticalLine} aria-hidden="true" />

          <Reveal stagger={70} duration={600} className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
            <div className={statClass}>
              <Gem className="w-7 h-7 lg:w-8 lg:h-8 text-accent mb-1.5 drop-shadow-[0_0_8px_rgba(63,203,248,0.5)]" />
              <CountUp end={2.9} decimals={1} suffix="K+" className="font-heading font-bold text-xl lg:text-2xl text-ink leading-tight" />
              <span className="text-[11px] sm:text-xs lg:text-[13px] text-ink/90 mt-1 leading-tight text-center">Happy Customers</span>
            </div>
            <div className={statClass}>
              <Calendar className="w-7 h-7 lg:w-8 lg:h-8 text-accent mb-1.5 drop-shadow-[0_0_8px_rgba(63,203,248,0.5)]" />
              <CountUp end={5} suffix="+" className="font-heading font-bold text-xl lg:text-2xl text-ink leading-tight" />
              <span className="text-[11px] sm:text-xs lg:text-[13px] text-ink/90 mt-1 leading-tight text-center">Years of Excellence</span>
            </div>
            <div className={statClass}>
              <ShieldCheck className="w-7 h-7 lg:w-8 lg:h-8 text-accent mb-1.5 drop-shadow-[0_0_8px_rgba(63,203,248,0.5)]" />
              <CountUp end={100} suffix="%" className="font-heading font-bold text-xl lg:text-2xl text-ink leading-tight" />
              <span className="text-[11px] sm:text-xs lg:text-[13px] text-ink/90 mt-1 leading-tight text-center">Quality Assurance</span>
            </div>
            <div className={statClass}>
              <Handshake className="w-7 h-7 lg:w-8 lg:h-8 text-accent mb-1.5 drop-shadow-[0_0_8px_rgba(63,203,248,0.5)]" />
              <span className="font-heading font-semibold text-xs sm:text-sm lg:text-[15px] text-ink leading-snug text-center">
                Trusted by
                <br />
                Thousands
              </span>
            </div>
          </Reveal>
        </div>

        {/* ============ ROW 2 ============ */}

        {/* ---- MOBILE ONLY (< md): vertical neon image, text inside its 3 frames ---- */}
        <div className="relative mx-auto w-full max-w-[440px] aspect-[941/2006] [container-type:inline-size] md:hidden overflow-hidden rounded-2xl">
          <Image
            src={MOBILE_IMAGE}
            alt="ASCO illuminated emblem on a neon pedestal"
            fill
            unoptimized
            sizes="(max-width: 767px) 100vw, 440px"
            className="object-cover object-center"
          />

          {/* OUR MISSION (top frame) */}
          <div className={mFrame} style={MOBILE_FRAMES.mission}>
            <div className={mRow}>
              <Target className={mIcon} />
              <div>
                <span className={mLabel}>OUR MISSION</span>
                <h3 className={mHead}>Lighting Lives Better</h3>
              </div>
            </div>
            <p className={mBody}>
              To deliver innovative, high-quality lighting solutions while building long-term trust with our customers.
            </p>
          </div>

          {/* OUR VISION (middle frame) */}
          <div className={mFrame} style={MOBILE_FRAMES.vision}>
            <div className={mRow}>
              <Eye className={mIcon} />
              <div>
                <span className={mLabel}>OUR VISION</span>
                <h3 className={mHead}>A Brighter, More Connected Tomorrow</h3>
              </div>
            </div>
            <p className={mBody}>
              To become Pakistan&apos;s most trusted LED lighting brand, known for quality, innovation and service.
            </p>
          </div>

          {/* OUR VALUES (bottom frame) */}
          <div className={mFrame} style={MOBILE_FRAMES.values}>
            <div className={mRow}>
              <Handshake className={mIcon} />
              <span className={mLabel}>OUR VALUES</span>
            </div>
            <ul className={mList}>
              <li className={mListItem}>
                <Shield className={mListIcon} />
                <span>Quality Without Compromise</span>
              </li>
              <li className={mListItem}>
                <Zap className={mListIcon} />
                <span>Innovation Always Forward</span>
              </li>
              <li className={mListItem}>
                <Smile className={mListIcon} />
                <span>Customer Satisfaction Our Priority</span>
              </li>
              <li className={mListItem}>
                <Heart className={mListIcon} />
                <span>Long-Term Partnership Building</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- md and up: text placed inside the frames of the background image (unchanged) ---- */}
        {/* xl+: box ratio = image ratio (2172/724), so nothing is cropped and % positions match the frames. */}
        <div className="relative mx-0 xl:-mx-16 2xl:-mx-20 xl:aspect-[2172/724] xl:[container-type:inline-size]">
          {/* Background image (has the 3 frames + emblem + pedestal baked in) */}
          <div
            className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 xl:opacity-100"
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

          <div className="relative z-10 px-0 sm:px-4 md:px-10 py-6 hidden md:grid md:grid-cols-2 gap-6 xl:block xl:absolute xl:inset-0 xl:p-0">
            {/* Emblem: only on tablet (md to xl). On xl+ it is already in the background image */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] md:col-span-2 xl:hidden rounded-2xl border border-cyan-500/25 bg-[#000d24]/80 backdrop-blur-md overflow-hidden shadow-[0_4px_22px_rgba(0,0,0,0.4)] order-1 xl:order-none">
              <Image
                src="/asco_separate_images_webp/about/futuristic_neon_background_no_text.webp"
                alt="ASCO 3D Illuminated Emblem on Neon Pedestal"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-[40%_center]"
              />
            </div>

            {/* OUR MISSION */}
            <div className={`${cardBase} ${missionPos} order-2 xl:order-none`}>
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

            {/* OUR VISION */}
            <div className={`${cardBase} ${visionPos} order-3 xl:order-none`}>
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
            <div className={`${cardBase} ${valuesPos} md:col-span-2 xl:col-span-1 order-4 xl:order-none`}>
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