'use client';

import React, { Children, isValidElement, cloneElement, type ReactNode, type CSSProperties } from 'react';
import { useInView, type UseInViewOptions } from '@/hooks/useInView';

export interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in milliseconds before animation starts */
  delay?: number;
  /** Stagger delay in milliseconds per direct child element */
  stagger?: number;
  /** Animation duration in milliseconds (default 700ms) */
  duration?: number;
  /** Distance to translate along Y axis (default 24px) */
  distance?: number;
  /** Custom IntersectionObserver options */
  observerOptions?: UseInViewOptions;
}

/**
 * Reusable Reveal client component that animates opacity and translateY(24px)
 * on scroll into view once only. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  stagger = 0,
  duration = 700,
  distance = 24,
  observerOptions,
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>(observerOptions);

  // If stagger is applied and there are multiple children, clone and apply indexed delays
  if (stagger > 0 && Children.count(children) > 1) {
    return (
      <div ref={ref} className={className}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return child;

          const childElement = child as React.ReactElement<{ style?: CSSProperties }>;
          const existingStyle = childElement.props?.style || {};
          const childDelay = delay + index * stagger;
          const childStyle: CSSProperties = {
            ...existingStyle,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : `translateY(${distance}px)`,
            transitionProperty: 'opacity, transform',
            transitionDuration: `${duration}ms`,
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: `${childDelay}ms`,
          };

          return cloneElement(childElement, {
            style: childStyle,
          });
        })}
      </div>
    );
  }

  // Single element or group with uniform delay
  const containerStyle: CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : `translateY(${distance}px)`,
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
  };

  return (
    <div ref={ref} className={className} style={containerStyle}>
      {children}
    </div>
  );
}

export default Reveal;
