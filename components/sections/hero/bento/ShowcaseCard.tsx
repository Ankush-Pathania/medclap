"use client";

import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

export default function ShowcaseCard() {
  return (
    <motion.div
      className="bento-card md:col-span-5 md:row-span-2 bg-navy rounded-3xl p-7 relative overflow-hidden min-h-[420px] md:min-h-[480px]"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.25) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-transparent to-navy-deep/60" />

      <div className="absolute -bottom-24 -right-10 font-serif text-[22rem] md:text-[28rem] leading-none italic text-gold/15 font-normal pointer-events-none select-none">
        M
      </div>

      <motion.div
        className="absolute top-6 left-6 bg-cream rounded-full px-3 py-1.5 flex items-center gap-2 shadow-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-[11px] font-bold text-navy tracking-wide">
          Live · 23 active campaigns
        </span>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-6 bg-cream rounded-2xl p-2.5 shadow-xl flex items-center gap-2.5 border border-divider-soft"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-navy font-display font-extrabold text-base">
          G
        </div>
        <div>
          <div className="text-[11px] font-bold text-navy">
            Google Premier Partner
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-gold text-gold" />
            ))}
            <span className="text-[10px] text-ink-soft ml-1 font-medium">
              4.9 · 318 reviews
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 right-6 bg-gold rounded-full px-3.5 py-2 shadow-xl flex items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Heart
          className="w-3.5 h-3.5 fill-navy text-navy"
          strokeWidth={2}
        />
        <span className="text-[11px] font-bold text-navy">
          8.2M leads delivered
        </span>
      </motion.div>

      <div className="relative h-full flex items-center justify-center min-h-[380px] md:min-h-[420px]">
        <div className="text-center px-4">
          <div className="text-gold/70 text-[10px] font-bold tracking-[0.25em] uppercase mb-4">
            ✦ The MedClap Method ✦
          </div>
          <div className="font-display text-cream font-extrabold leading-[0.95] text-[clamp(2.5rem,6vw,4.5rem)]">
            Built for
            <br />
            <span className="font-serif italic font-normal text-gold">
              measurable
            </span>
            <br />
            impact.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
