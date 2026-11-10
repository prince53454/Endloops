import React from 'react';

export interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  align = 'center',
  className = ''
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignClass} ${className}`}>
      {kicker && (
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#006C4A] mb-3">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#0B132B] tracking-tight leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
};
