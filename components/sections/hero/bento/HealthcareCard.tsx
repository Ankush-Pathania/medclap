"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HEALTHCARE_AVATARS = [
  { bg: "#F4B62E", l: "F" },
  { bg: "#D89A14", l: "M" },
  { bg: "#F8CB60", l: "C" },
];

export default function HealthcareCard() {
  return (
    <motion.div
      className="bento-card md:col-span-3 bg-navy rounded-3xl p-6 text-cream min-h-[200px] md:min-h-[230px] flex flex-col justify-between relative overflow-hidden"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-gold/10" />
      <div className="absolute -right-3 -top-3 w-16 h-16 rounded-full bg-gold/20" />
      <div className="absolute right-3 top-3 w-7 h-7 rounded-full bg-gold flex items-center justify-center">
        <Sparkles className="w-3.5 h-3.5 text-navy" strokeWidth={2.5} />
      </div>

      <div className="relative">
        <span className="text-[11px] font-bold text-gold uppercase tracking-widest">
          Specialty
        </span>
        <h3 className="font-display text-xl md:text-[22px] font-bold mt-2 leading-[1.1] tracking-tight">
          Built for B2B
          <br />
          <span className="font-serif italic font-normal text-gold">
            healthcare
          </span>
          <span className="font-display"> & wellness.</span>
        </h3>
      </div>

      <div className="relative">
        <div className="bg-cream/[0.06] backdrop-blur-sm rounded-xl p-2.5 flex items-center justify-between border border-cream/10">
          <div>
            <div className="text-[10px] text-cream/60 font-semibold uppercase tracking-wider">
              Active Engagements
            </div>
            <div className="text-[13px] font-bold text-cream mt-0.5">
              28 healthcare brands
            </div>
          </div>
          <div className="flex -space-x-1.5">
            {HEALTHCARE_AVATARS.map((a, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-navy text-[10px] font-display font-bold flex items-center justify-center"
                style={{ background: a.bg, color: "#1A2A5E" }}
              >
                {a.l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
