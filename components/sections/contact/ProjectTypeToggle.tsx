"use client";

import { motion } from "framer-motion";
import { PROJECT_TYPES, type ProjectType } from "./types";

type Props = {
  value: ProjectType;
  onChange: (v: ProjectType) => void;
};

export default function ProjectTypeToggle({ value, onChange }: Props) {
  return (
    <div>
      <label className="block text-[11px] font-bold text-cream uppercase tracking-[0.15em] mb-2.5">
        Project type{" "}
        <span className="text-cream/40 font-medium normal-case tracking-normal">
          · pick one
        </span>
      </label>
      <div className="grid grid-cols-3 gap-1.5 bg-navy-deep/60 rounded-xl p-1 border border-cream/10">
        {PROJECT_TYPES.map((t) => {
          const isActive = value === t.value;
          return (
            <button
              key={t.value}
              type="button"
              onClick={() => onChange(t.value)}
              className={`relative py-2.5 px-2 rounded-lg text-[12.5px] font-bold transition-colors duration-300 ${
                isActive ? "text-navy" : "text-cream/70 hover:text-cream"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="active-project-pill"
                  className="absolute inset-0 bg-gold rounded-lg"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
