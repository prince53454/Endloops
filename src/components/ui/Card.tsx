import React from 'react';

export interface CardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
  as?: 'div' | 'article' | 'section';
}

export const Card: React.FC<CardProps> = ({
  id,
  children,
  className = '',
  hoverable = false,
  padding = 'lg',
  onClick,
  as: Component = 'div'
}) => {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-5',
    lg: 'p-6 sm:p-7',
    xl: 'p-8 sm:p-10'
  };

  const hoverStyles = hoverable
    ? 'transition-all duration-200 hover:shadow-[0_4px_12px_-2px_rgba(11,19,43,0.08)] hover:border-[#CBD5E1] hover:-translate-y-0.5'
    : '';

  return (
    <Component
      id={id}
      onClick={onClick}
      className={`bg-white border border-[#E2E8F0] rounded-lg shadow-[0_1px_3px_rgba(11,19,43,0.03),0_1px_2px_rgba(11,19,43,0.02)] ${paddingStyles[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </Component>
  );
};
