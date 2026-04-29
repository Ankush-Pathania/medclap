"use client";

import type { HTMLAttributes } from "react";

type FieldProps = {
  label: string;
  required?: boolean;
  hint?: string;
  type?: "text" | "email" | "tel" | "url";
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
};

export default function Field({
  label,
  required,
  hint,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
  inputMode,
  maxLength,
}: FieldProps) {
  return (
    <div>
      <label className="block text-[11px] font-bold text-cream uppercase tracking-[0.15em] mb-2">
        {label} {required && <span className="text-gold">*</span>}
        {hint && (
          <span className="text-cream/40 font-medium normal-case tracking-normal ml-1">
            · {hint}
          </span>
        )}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        aria-invalid={!!error}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-navy-deep/60 border rounded-xl px-4 py-3 text-cream placeholder:text-cream/30 text-[14px] focus:outline-none focus:bg-navy-deep transition-colors ${
          error
            ? "border-gold/60 focus:border-gold"
            : "border-cream/10 focus:border-gold/60"
        }`}
      />
      {error && (
        <p className="text-[11px] text-gold/90 mt-1.5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
