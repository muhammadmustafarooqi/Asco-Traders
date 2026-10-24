'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

export interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Lightweight IntersectionObserver hook for viewport entrance detection.
 * Respects prefers-reduced-motion by reporting inView immediately when active.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // If running in an environment without IntersectionObserver, fallback to true immediately
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, inView];
}
