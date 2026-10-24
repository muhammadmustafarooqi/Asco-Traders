import Reveal from '@/components/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  subtext?: string;
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subtext,
  id,
  className = '',
}: SectionHeadingProps) {
  return (
    <Reveal distance={20} duration={600} className={`text-center max-w-3xl mx-auto mb-10 sm:mb-14 ${className}`}>
      {/* Eyebrow with decorative thin lines on both sides */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
        <span
          className="h-px w-6 sm:w-10 bg-accent/40"
          aria-hidden="true"
        />
        <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase">
          {eyebrow}
        </span>
        <span
          className="h-px w-6 sm:w-10 bg-accent/40"
          aria-hidden="true"
        />
      </div>

      {/* Heading */}
      <h2
        id={id}
        className="font-heading font-bold text-[clamp(1.625rem,1.15rem+2.1vw,2.5rem)] text-ink text-center tracking-[-0.02em] leading-[1.18]"
      >
        {heading}
      </h2>

      {/* Optional subtext */}
      {subtext && (
        <p className="text-ink-muted text-base sm:text-[17px] text-center mt-3.5 max-w-2xl mx-auto leading-[1.65]">
          {subtext}
        </p>
      )}
    </Reveal>
  );
}
