interface GlowWavesProps {
  className?: string;
}

export function GlowWaves({ className = '' }: GlowWavesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none overflow-hidden ${className}`}
    >
      <svg
        viewBox="0 0 1440 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          {/* Wave-to-accent gradient using CSS theme tokens */}
          <linearGradient id="waveToAccentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-wave)" stopOpacity="0.1" />
            <stop offset="20%" stopColor="var(--color-wave)" stopOpacity="0.8" />
            <stop offset="60%" stopColor="var(--color-accent)" stopOpacity="0.9" />
            <stop offset="90%" stopColor="var(--color-wave)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--color-wave)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveSecondaryGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
            <stop offset="30%" stopColor="var(--color-accent)" stopOpacity="0.8" />
            <stop offset="70%" stopColor="var(--color-wave)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--color-wave)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* --- Path 1 --- */}
        {/* Wider path (10px) at ~15% opacity as a soft glow */}
        <path
          d="M-100 140 C 250 40, 500 240, 850 120 C 1150 20, 1350 200, 1550 110"
          stroke="url(#waveToAccentGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          className="opacity-20 animate-wave-current"
        />
        {/* Core sharp line (2.5px) at ~60% opacity with electrical flowing current */}
        <path
          d="M-100 140 C 250 40, 500 240, 850 120 C 1150 20, 1350 200, 1550 110"
          stroke="url(#waveToAccentGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="opacity-60 animate-wave-current"
        />

        {/* --- Path 2 --- */}
        {/* Wider path (10px) at ~15% opacity for secondary wave */}
        <path
          d="M-50 180 C 300 240, 600 60, 950 180 C 1200 270, 1400 80, 1550 170"
          stroke="url(#waveSecondaryGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          className="opacity-20 animate-wave-current-reverse"
        />
        {/* Core sharp line (2px) at ~55% opacity with counter-current flow */}
        <path
          d="M-50 180 C 300 240, 600 60, 950 180 C 1200 270, 1400 80, 1550 170"
          stroke="url(#waveSecondaryGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-55 animate-wave-current-reverse"
        />
      </svg>
    </div>
  );
}
