"use client";

import { SERVICE_OPTIONS } from "./types";

type Props = {
  selected: string[];
  onToggle: (service: string) => void;
};

export default function ServiceChips({ selected, onToggle }: Props) {
  return (
    <div>
      <label className="block text-[11px] font-bold text-cream uppercase tracking-[0.15em] mb-2.5">
        I need help with{" "}
        <span className="text-cream/40 font-medium normal-case tracking-normal">
          · select all that apply
        </span>
      </label>
      <div className="flex flex-wrap gap-1.5">
        {SERVICE_OPTIONS.map((service) => {
          const isActive = selected.includes(service);
          return (
            <button
              key={service}
              type="button"
              aria-pressed={isActive}
              onClick={() => onToggle(service)}
              className={`px-3.5 py-2 rounded-full text-[12px] font-bold transition-all duration-300 border ${
                isActive
                  ? "bg-gold border-gold text-navy"
                  : "bg-cream/[0.04] border-cream/15 text-cream/70 hover:border-cream/30 hover:text-cream"
              }`}
            >
              <span className="inline-flex items-center gap-1.5">
                {isActive && <span className="text-navy">✓</span>}
                {service}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
