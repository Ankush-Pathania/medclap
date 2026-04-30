"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Sparkles,
  MousePointer2,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export default function HeroHeadline() {
  return (
    <div className="text-center max-w-6xl mx-auto">
      {/* Eyebrow badge */}
      <div className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-warm border border-divider-soft text-xs font-semibold text-navy tracking-wider uppercase mb-7">
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
        </span>
        Trusted by 140+ brands worldwide
      </div>

      {/* Massive headline */}
      <h1 className="font-display font-extrabold uppercase tracking-tight leading-[0.92] text-navy">
        <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5 gap-y-2 text-[clamp(2rem,8vw,6.5rem)]">
          <span className="overflow-hidden inline-block">
            <span className="hero-word inline-block">We Build</span>
          </span>

          <span className="inline-flex items-center -space-x-3 md:-space-x-4 mx-1 md:mx-2">
            <span className="hero-icon w-[0.85em] h-[0.85em] rounded-full bg-cream-warm border border-divider flex items-center justify-center shadow-sm relative z-10">
              <TrendingUp
                className="w-[42%] h-[42%] text-gold-deep"
                strokeWidth={2.5}
              />
            </span>
            <span className="hero-icon w-[0.85em] h-[0.85em] rounded-full bg-navy flex items-center justify-center shadow-md relative z-20">
              <Sparkles className="w-[42%] h-[42%] text-gold" strokeWidth={2.5} />
            </span>
            <span className="hero-icon w-[0.85em] h-[0.85em] rounded-full bg-gold flex items-center justify-center shadow-sm relative z-10">
              <MousePointer2
                className="w-[42%] h-[42%] text-navy"
                strokeWidth={2.5}
              />
            </span>
          </span>

          <span className="overflow-hidden inline-block">
            <span className="hero-word inline-block">Brands</span>
          </span>
        </div>

        <div className="mt-1 md:mt-2 flex flex-wrap items-baseline justify-center gap-x-4 md:gap-x-6 text-[clamp(2rem,8vw,6.5rem)]">
          <span className="overflow-hidden inline-block">
            <span className="hero-word inline-block">That</span>
          </span>
          <span className=" inline-block">
            <span className="hero-word inline-block font-serif italic font-normal text-gold-deep lowercase tracking-normal">
              actually
            </span>
          </span>
          <span className="overflow-hidden inline-block">
            <span className="hero-word inline-block">Grow.</span>
          </span>
        </div>
      </h1>

      <p className="hero-sub mt-7 md:mt-9 text-base md:text-lg text-ink-soft max-w-xl mx-auto leading-relaxed">
        Strategy, design, and campaigns engineered for measurable revenue —
        not vanity metrics. We&apos;ve helped 140+ brands turn ideas into
        impact.
      </p>

      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
        <motion.a
          href="#contact"
          className="hero-cta group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-navy text-cream font-semibold text-[15px] hover:bg-ink transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          Get a free quote
          <ArrowRight
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </motion.a>
        <motion.a
          href="#work"
          className="hero-cta group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-navy text-navy font-semibold text-[15px] hover:bg-navy hover:text-cream transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          See our work
          <ArrowUpRight
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.5}
          />
        </motion.a>
      </div>
    </div>
  );
}
