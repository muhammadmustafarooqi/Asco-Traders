import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { ArrowDown, ArrowRight, Mail, type LucideIcon } from 'lucide-react';

export type HeroFeature = { icon: LucideIcon; lines: [string, string] };

type PageHeroProps = {
    /** id of the h1, used for aria-labelledby */
    id: string;
    image: StaticImageData;
    imageAlt: string;
    /** CSS object-position of the picture (e.g. '85% center', 'right bottom') */
    imagePosition?: string;
    /** xl and up: push the picture to the right by this much (e.g. '6%'). Raise it if text touches the subject. */
    imageShift?: string;
    eyebrow: string;
    eyebrowStyle?: 'bar' | 'lines';
    heading: ReactNode;
    subtext: ReactNode;
    cta: { label: string; href: string; icon?: 'arrow-right' | 'arrow-down' | 'mail' };
    features: HeroFeature[];
    /** Screen-reader-only breadcrumb */
    srBreadcrumb?: ReactNode;
};

export function PageHero({
    id,
    image,
    imageAlt,
    imagePosition = '85% center',
    imageShift = '0%',
    eyebrow,
    eyebrowStyle = 'bar',
    heading,
    subtext,
    cta,
    features,
    srBreadcrumb,
}: PageHeroProps) {
    const stageVars = {
        '--hero-ar': `${image.width} / ${image.height}`,
        '--hero-shift': imageShift,
    } as CSSProperties;

    const LeadIcon = cta.icon === 'mail' ? Mail : null;
    const TrailIcon = cta.icon === 'arrow-down' ? ArrowDown : ArrowRight;
    const trailMove =
        cta.icon === 'arrow-down' ? 'group-hover:translate-y-1' : 'group-hover:translate-x-1';

    return (
        <section aria-labelledby={id} className="relative w-full overflow-x-clip bg-bg">
            {/*
        STAGE. Below xl its height comes from the content. From xl up it is a centred box locked to
        the image's own aspect ratio (max 1680px wide), so the picture is never over-scaled, and it
        becomes a size container so all text scales with the stage width (cqw).
      */}
            <div
                className="relative xl:mx-auto xl:max-h-[100svh] xl:min-h-[640px] xl:w-full xl:max-w-[1680px] xl:[aspect-ratio:var(--hero-ar)] xl:[container-type:inline-size]"
                style={stageVars}
            >
                {/* Picture and overlays */}
                <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
                    <div className="absolute inset-0 xl:left-[var(--hero-shift)] xl:[mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.5)_24%,#000_46%)] xl:[-webkit-mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.5)_24%,#000_46%)]">
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            priority
                            sizes="(max-width: 1280px) 100vw, 1680px"
                            className="object-cover"
                            style={{ objectPosition: imagePosition }}
                        />
                    </div>

                    {/* Below xl: strong left overlay for text readability */}
                    <div
                        className="absolute inset-0 xl:hidden"
                        style={{
                            background:
                                'linear-gradient(90deg, rgba(0, 6, 19, 0.97) 0%, rgba(0, 6, 19, 0.92) 28%, rgba(0, 6, 19, 0.72) 42%, rgba(0, 6, 19, 0.3) 54%, transparent 66%)',
                        }}
                    />
                    {/* Below xl: vertical overlay for phones and tablets */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/40 xl:hidden" />
                    {/* xl and up: lighter left overlay (the picture is already masked on the left) */}
                    <div
                        className="absolute inset-0 hidden xl:block"
                        style={{
                            background:
                                'linear-gradient(90deg, rgba(0, 6, 19, 0.6) 0%, rgba(0, 6, 19, 0.3) 30%, transparent 55%)',
                        }}
                    />
                    {/* Side fades so the stage melts into the page on ultra-wide screens */}
                    <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-bg to-transparent xl:block" />
                    <div className="absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-bg to-transparent xl:block" />
                    {/* Top gradient so the transparent navbar stays legible */}
                    <div
                        className="absolute inset-x-0 top-0 h-24"
                        style={{
                            background:
                                'linear-gradient(180deg, rgba(0, 6, 19, 0.85) 0%, rgba(0, 6, 19, 0.3) 60%, transparent 100%)',
                        }}
                    />
                    {/* Bottom blend into the next section */}
                    <div
                        className="absolute inset-x-0 bottom-0 h-20"
                        style={{
                            background:
                                'linear-gradient(0deg, #000613 0%, rgba(0, 6, 19, 0.6) 40%, transparent 100%)',
                        }}
                    />
                </div>

                {/* Content. Same container width as the Navbar, so the text lines up with the logo. */}
                <div className="relative z-10 mx-auto flex min-h-[580px] w-full max-w-7xl items-center px-5 pb-12 pt-28 sm:px-6 sm:pt-32 lg:px-8 xl:absolute xl:inset-0 xl:min-h-0 xl:max-w-[1536px] xl:pb-[2cqw] xl:pt-20">
                    <div className="hero-animate-fade w-full max-w-xl xl:max-w-[46cqw]">
                        {srBreadcrumb && (
                            <nav aria-label="Breadcrumb" className="sr-only">
                                {srBreadcrumb}
                            </nav>
                        )}

                        {/* Eyebrow */}
                        {eyebrowStyle === 'lines' ? (
                            <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent sm:text-sm xl:mb-[1.2cqw] xl:gap-[0.9cqw] xl:text-[length:clamp(0.7rem,1cqw,0.95rem)]">
                                <span aria-hidden="true" className="block h-px w-6 bg-accent xl:w-[1.8cqw]" />
                                <span>{eyebrow}</span>
                                <span aria-hidden="true" className="block h-px w-6 bg-accent xl:w-[1.8cqw]" />
                            </p>
                        ) : (
                            <div className="mb-3 xl:mb-[1.2cqw]">
                                <span
                                    className="mb-2 block h-[2px] w-7 rounded-full bg-accent shadow-[0_0_8px_rgba(63,203,248,0.7)] sm:w-8 xl:mb-[0.5cqw] xl:w-[1.5cqw]"
                                    aria-hidden="true"
                                />
                                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent sm:text-sm xl:text-[length:clamp(0.7rem,1cqw,0.95rem)]">
                                    {eyebrow}
                                </p>
                            </div>
                        )}

                        {/* Heading */}
                        <h1
                            id={id}
                            style={{
                                textShadow: '0 2px 20px rgba(0, 6, 19, 0.95), 0 0 45px rgba(0, 6, 19, 0.9)',
                            }}
                            className="mb-3 font-heading text-[clamp(1.85rem,1.4rem+2.6vw,3.25rem)] font-bold leading-[1.12] tracking-[-0.02em] text-ink drop-shadow-md sm:mb-4 xl:mb-[1.6cqw] xl:text-[length:clamp(2rem,3cqw,3.5rem)]"
                        >
                            {heading}
                        </h1>

                        {/* Subtext */}
                        <p className="mb-5 max-w-md text-sm leading-[1.65] text-slate-300 drop-shadow-sm sm:mb-6 sm:text-base xl:mb-[1.9cqw] xl:max-w-[42cqw] xl:text-[length:clamp(0.85rem,1.15cqw,1.15rem)] xl:leading-[1.65]">
                            {subtext}
                        </p>

                        {/* CTA */}
                        <div className="w-full sm:w-auto">
                            <Link
                                href={cta.href}
                                aria-label={cta.label}
                                className="group inline-flex w-full sm:w-auto justify-center items-center gap-2.5 rounded-full border border-primary/90 bg-bg/70 px-6 py-2.5 text-xs font-semibold text-ink shadow-[0_0_18px_rgba(6,161,255,0.35)] transition-all duration-300 hover:border-accent hover:bg-primary/20 hover:text-accent hover:shadow-[0_0_26px_rgba(63,203,248,0.6)] min-h-[44px] sm:px-7 sm:py-3 sm:text-sm xl:gap-[0.6cqw] xl:px-[1.8cqw] xl:py-[0.8cqw] xl:text-[length:clamp(0.75rem,1cqw,1rem)]"
                            >
                                {LeadIcon && (
                                    <LeadIcon
                                        className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:scale-110 xl:h-[1.1cqw] xl:w-[1.1cqw]"
                                        aria-hidden="true"
                                    />
                                )}
                                <span>{cta.label}</span>
                                <TrailIcon
                                    className={`h-4 w-4 shrink-0 text-accent transition-transform ${trailMove} xl:h-[1.1cqw] xl:w-[1.1cqw]`}
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>

                        {/* Feature row */}
                        <ul className="mt-8 grid w-full grid-cols-2 gap-3 sm:gap-4 sm:max-w-xl sm:grid-cols-4 xl:-ml-[1.5cqw] xl:mt-[3.5cqw] xl:flex xl:w-[38cqw] xl:max-w-none xl:gap-0">
                            {features.map(({ icon: Icon, lines }) => (
                                <li
                                    key={lines[0]}
                                    className="flex h-full flex-col items-center justify-center gap-2 rounded-xl border border-line/40 bg-[#00102a]/60 p-3 text-center sm:border-0 sm:bg-transparent sm:p-0 xl:flex-1 xl:gap-[0.55cqw] xl:border-l xl:border-accent/25 xl:first:border-l-0 xl:rounded-none"
                                >
                                    <Icon
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                        className="h-7 w-7 shrink-0 text-accent drop-shadow-[0_0_6px_rgba(63,203,248,0.5)] xl:h-[clamp(1.75rem,2.45cqw,2.75rem)] xl:w-[clamp(1.75rem,2.45cqw,2.75rem)]"
                                    />
                                    <span className="text-xs sm:text-sm leading-snug text-ink/90 xl:text-[length:clamp(0.75rem,1.1cqw,1.1rem)]">
                                        {lines[0]}
                                        <br />
                                        {lines[1]}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageHero;