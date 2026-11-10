import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showTagline = false
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-[#0B132B]';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Precision Geometric Endloops Emblem */}
      <svg
        className={`${iconSizes[size]} shrink-0 transition-transform duration-200 hover:rotate-3`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="endloops-grad-1" x1="4" y1="8" x2="36" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#006C4A" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
          <linearGradient id="endloops-grad-2" x1="36" y1="8" x2="4" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0D9488" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* Outer continuous looping ribbon - architectural precision */}
        <path
          d="M12 14C8.68629 14 6 16.6863 6 20C6 23.3137 8.68629 26 12 26C15.5 26 18.5 22 20 20C21.5 18 24.5 14 28 14C31.3137 14 34 16.6863 34 20C34 23.3137 31.3137 26 28 26C24.5 26 21.5 22 20 20C18.5 18 15.5 14 12 14Z"
          stroke="url(#endloops-grad-1)"
          strokeWidth="3.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Precision focal nodes representing verifiable data checkpoints */}
        <circle cx="12" cy="20" r="2.25" fill="#006C4A" />
        <circle cx="28" cy="20" r="2.25" fill="#0D9488" />
        <circle cx="20" cy="20" r="1.5" fill={variant === 'light' ? '#FFFFFF' : '#0B132B'} />
      </svg>

      <div className="flex flex-col">
        <span
          className={`font-display font-bold tracking-tight leading-none ${textSizes[size]} ${textColor} selection:bg-transparent`}
        >
          endloops
        </span>
        {showTagline && (
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono mt-0.5">
            Financial Automation
          </span>
        )}
      </div>
    </div>
  );
};
