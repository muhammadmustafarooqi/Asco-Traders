'use client';

import { useEffect, useState } from 'react';

/**
 * High-performance, zero-layout-shift cyan scroll progress bar.
 * Uses GPU-accelerated scaleX transform with transform-origin: left.
 */
export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = Math.min(Math.max(scrollY / docHeight, 0), 1);
        setProgress(scrolled);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    updateScrollProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none"
    >
      <div
        className="h-full w-full bg-gradient-to-r from-primary via-accent to-[#37C6FC] shadow-[0_0_10px_rgba(63,203,248,0.7)] origin-left will-change-transform"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

export default ScrollProgressBar;
