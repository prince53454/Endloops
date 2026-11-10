import React from 'react';
import { AlertCircle } from 'lucide-react';

export interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  error,
  required = false,
  hint,
  children,
  className = ''
}) => {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block text-xs font-semibold text-slate-800">
          {label} {required && <span className="text-rose-600">*</span>}
        </label>
        {hint && <span className="text-[11px] text-slate-500 font-mono">{hint}</span>}
      </div>

      <div>{children}</div>

      {error && (
        <p id={`${id}-error`} className="text-xs text-rose-600 flex items-center gap-1 font-medium mt-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};
