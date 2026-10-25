import { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  optionalLabel?: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}

export default function FormField({
  id,
  label,
  required = false,
  optionalLabel = 'Optional',
  hint,
  error,
  children,
}: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-2">
        <label
          htmlFor={id}
          className="block text-sm font-semibold text-charcoal tracking-wide"
        >
          {label}{' '}
          {required && (
            <span className="text-bronze font-mono" aria-hidden="true">
              *
            </span>
          )}
        </label>
        {!required && (
          <span className="text-xs font-mono text-stone uppercase tracking-wider">
            {optionalLabel}
          </span>
        )}
      </div>

      {hint && (
        <p id={hintId} className="text-xs text-stone leading-relaxed">
          {hint}
        </p>
      )}

      {children}

      {error && (
        <p
          id={errorId}
          role="alert"
          className="flex items-start gap-2 text-xs font-medium text-[#9E2A2B] bg-[#FDF2F2] border border-[#F5C6C6] px-3 py-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
