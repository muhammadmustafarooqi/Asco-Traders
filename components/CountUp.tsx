'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface CountUpProps {
  end: number;
  duration?: number; // ms
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({
  end,
  duration = 1600,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}: CountUpProps) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.2 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setValue(end);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setValue(easedProgress * end);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, end, duration]);

  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.floor(value).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default CountUp;
