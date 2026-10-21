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
    <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-14 ${className}`}>
      {/* Eyebrow with decorative thin lines on both sides */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
        <span
          className="h-px w-6 sm:w-10 bg-accent/40"
          aria-hidden="true"
        />
        <span className="text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase">
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
        className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-ink text-center tracking-tight leading-snug"
      >
        {heading}
      </h2>

      {/* Optional subtext */}
      {subtext && (
        <p className="text-ink-muted text-sm sm:text-base text-center mt-3 max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
}
