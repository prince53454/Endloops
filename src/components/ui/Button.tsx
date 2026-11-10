import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'positive' | 'ghost' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer whitespace-nowrap shrink-0 active:scale-[0.99]';

  const sizeStyles = {
    sm: 'h-8 px-3 text-xs gap-1.5 rounded-[4px]',
    md: 'h-10 px-4 text-sm gap-2 rounded-[4px]',
    lg: 'h-12 px-6 text-base gap-2.5 rounded-[4px]'
  };

  const variantStyles = {
    primary:
      'bg-[#0B132B] text-white hover:bg-[#1C2541] focus-visible:ring-[#0B132B] shadow-sm',
    secondary:
      'bg-white text-[#0B132B] border border-[#E2E8F0] hover:bg-[#F8FAFC] hover:border-[#CBD5E1] focus-visible:ring-[#0B132B] shadow-[0_1px_2px_rgba(11,19,43,0.04)]',
    positive:
      'bg-[#006C4A] text-white hover:bg-[#005137] focus-visible:ring-[#006C4A] shadow-sm',
    ghost:
      'bg-transparent text-[#1C2541] hover:bg-[#F1F5F9] focus-visible:ring-[#1C2541]',
    'outline-light':
      'bg-white/10 text-white border border-white/20 hover:bg-white/15 focus-visible:ring-white'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} aria-disabled={disabled}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
