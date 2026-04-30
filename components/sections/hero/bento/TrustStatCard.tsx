"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "lucide-react";

const TRUST_AVATARS = [
  { bg: "#F4B62E", c: "#1A2A5E", l: "R" },
  { bg: "#1A2A5E", c: "#F4B62E", l: "M" },
  { bg: "#D89A14", c: "#FAF6EE", l: "S" },
  { bg: "#2B3D7A", c: "#F4B62E", l: "L" },
];

export default function TrustStatCard() {
  return (
    <motion.div
      className="bento-card md:col-span-3 bg-cream-warm rounded-3xl p-6 border border-divider-soft min-h-[200px] md:min-h-[230px] flex flex-col justify-between relative overflow-hidden"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold text-ink-soft uppercase tracking-widest">
          Trusted by
        </span>
        <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center">
          <Heart
            className="w-3.5 h-3.5 fill-gold-deep text-gold-deep"
            strokeWidth={2}
          />
        </div>
      </div>

      <div>
        <div className="font-display text-5xl md:text-[56px] font-extrabold text-navy leading-none tracking-tight">
          140<span className="text-gold-deep">+</span>
        </div>
        <div className="text-[13px] text-ink-soft mt-2 leading-snug">
          Active brand partners
          <br />
          in 12 countries.
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {TRUST_AVATARS.map((a, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 border-cream-warm flex items-center justify-center text-[11px] font-display font-bold"
              style={{ background: a.bg, color: a.c }}
            >
              {a.l}
            </div>
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-cream-warm bg-navy flex items-center justify-center text-[10px] font-bold text-gold">
            +136
          </div>
        </div>
        <ArrowUpRight className="w-5 h-5 text-navy" strokeWidth={2.5} />
      </div>
    </motion.div>
  );
}
