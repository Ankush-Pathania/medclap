"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StrategyCard() {
  return (
    <motion.div
      className="bento-card group md:col-span-4 md:row-span-2 bg-cream-warm rounded-3xl p-7 flex flex-col justify-between min-h-[300px] md:min-h-[480px] relative overflow-hidden border border-divider-soft"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative z-10">
        <span className="text-xs font-bold text-ink-soft uppercase tracking-widest">
          01 / Strategy
        </span>
        <h3 className="font-display text-3xl md:text-[34px] text-navy font-bold leading-[1.05] mt-3 tracking-tight">
          Smart strategy.
          <br />
          <span className="font-serif italic font-normal text-gold-deep">
            Sharper
          </span>{" "}
          results.
        </h3>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-24 md:-mr-20 pointer-events-none">
        <div className="w-72 h-72 rounded-full border-[18px] border-gold/25 animate-spin-slow" />
        <div
          className="absolute inset-6 rounded-full border-[10px] border-navy/10 animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "20s" }}
        />
        <div className="absolute inset-16 rounded-full bg-gold/40 backdrop-blur" />
      </div>

      <div className="relative z-10 mt-auto">
        <p className="text-sm text-ink-soft leading-relaxed mb-5 max-w-[85%]">
          A 90-day roadmap built for your business — not a template. Audit,
          plan, build, optimize.
        </p>
        <a
          href="#services"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-navy text-cream text-[13px] font-semibold hover:bg-ink transition-colors group/btn"
        >
          Learn more
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1"
            strokeWidth={2.5}
          />
        </a>
      </div>
    </motion.div>
  );
}
