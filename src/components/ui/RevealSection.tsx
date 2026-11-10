import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'article' | 'header';
  delay?: 0 | 100 | 150 | 200 | 300 | 400 | 500;
  threshold?: number;
  rootMargin?: string;
  style?: React.CSSProperties;
}

export const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  className = '',
  id,
  as: Component = 'section',
  delay = 0,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  style
}) => {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  const delayClasses: Record<number, string> = {
    0: '',
    100: 'delay-100',
    150: 'delay-150',
    200: 'delay-200',
    300: 'delay-300',
    400: 'delay-400',
    500: 'delay-500'
  };

  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-8';

  return (
    <Component
      id={id}
      ref={ref as any}
      style={style}
      className={`transition-all duration-700 ease-out will-change-[opacity,transform] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${animationClasses} ${delayClasses[delay] || ''} ${className}`}
    >
      {children}
    </Component>
  );
};
