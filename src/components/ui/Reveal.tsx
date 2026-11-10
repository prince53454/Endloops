import React from 'react';
import { useScrollReveal, UseScrollRevealOptions } from '../../hooks/useScrollReveal';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';
export type RevealDistance = 'sm' | 'md' | 'lg' | 'none';

export interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** HTML tag or component to render as. Defaults to 'div'. */
  as?: React.ElementType;
  className?: string;
  /** Delay in milliseconds. Available: 0, 75, 100, 150, 200, 300, 400, 500, 700, 1000 */
  delay?: 0 | 75 | 100 | 150 | 200 | 300 | 400 | 500 | 700 | 1000 | number;
  /** Transition duration in milliseconds. Defaults to 700. */
  duration?: 300 | 500 | 700 | 1000;
  /** Direction from which the element slides into view. Defaults to 'up'. */
  direction?: RevealDirection;
  /** Distance of travel during slide-in. Defaults to 'md' (translate 16px / translate-y-4). */
  distance?: RevealDistance;
  /** Intersection threshold (0.0 - 1.0). Defaults to 0.15. */
  threshold?: number;
  /** Root margin for intersection trigger offset. Defaults to '0px 0px -40px 0px'. */
  rootMargin?: string;
  /** Whether the animation triggers only once. Defaults to true. */
  triggerOnce?: boolean;
}

const delayClasses: Record<number, string> = {
  0: '',
  75: 'delay-75',
  100: 'delay-100',
  150: 'delay-150',
  200: 'delay-200',
  300: 'delay-300',
  400: 'delay-400',
  500: 'delay-500',
  700: 'delay-700',
  1000: 'delay-1000'
};

const durationClasses: Record<number, string> = {
  300: 'duration-300',
  500: 'duration-500',
  700: 'duration-700',
  1000: 'duration-1000'
};

function getHiddenTransformClass(direction: RevealDirection, distance: RevealDistance): string {
  if (direction === 'none' || distance === 'none') return '';

  const scale = distance === 'sm' ? '2' : distance === 'lg' ? '8' : '4';

  switch (direction) {
    case 'up':
      return `translate-y-${scale}`;
    case 'down':
      return `-translate-y-${scale}`;
    case 'left':
      return `translate-x-${scale}`;
    case 'right':
      return `-translate-x-${scale}`;
    default:
      return `translate-y-4`;
  }
}

/**
 * Reusable wrapper component that uses the `useScrollReveal` hook to apply
 * Tailwind transition and opacity classes to its children when entering the viewport.
 * 
 * Example:
 * ```tsx
 * <Reveal delay={150}>
 *   <Card>Content</Card>
 * </Reveal>
 * ```
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  duration = 700,
  direction = 'up',
  distance = 'md',
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  style,
  ...rest
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold,
    rootMargin,
    triggerOnce
  });

  const hiddenTransform = getHiddenTransformClass(direction, distance);
  const durationClass = durationClasses[duration] || 'duration-700';
  const delayClass = delayClasses[delay] || (delay > 0 ? `delay-[${delay}ms]` : '');

  const stateClasses = isVisible
    ? 'opacity-100 translate-x-0 translate-y-0'
    : `opacity-0 ${hiddenTransform}`;

  return (
    <Component
      ref={ref as any}
      style={style}
      className={`transition-all ${durationClass} ease-out will-change-[opacity,transform] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${stateClasses} ${delayClass} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Reveal;
