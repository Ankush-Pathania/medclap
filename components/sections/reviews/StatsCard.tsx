"use client";

import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { fadeRight } from "./animations";
import { stackAvatars } from "./data";

export default function StatsCard() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeRight}
      className="lg:col-span-4 bg-navy rounded-3xl p-7 md:p-8 text-cream relative overflow-hidden flex flex-col justify-between min-h-[460px] lg:min-h-0"
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.25) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="font-display text-5xl md:text-[58px] font-extrabold text-cream leading-none tracking-tight">
            4.9<span className="text-gold-deep">/5</span>
          </div>
          <p className="text-[11px] text-cream/60 leading-relaxed text-right max-w-[170px]">
            We&apos;ve delivered{" "}
            <span className="text-gold font-bold">140+ projects</span> that
            drive real revenue.
          </p>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-gold text-gold"
              strokeWidth={1.5}
            />
          ))}
        </div>
      </div>

      <div className="relative mt-8">
        <motion.div className="flex -space-x-3 mb-4" whileHover="spread">
          {stackAvatars.map((a, i) => (
            <motion.div
              key={i}
              variants={{ spread: { x: i * 4 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center text-[12px] font-display font-extrabold"
              style={{ background: a.bg, color: a.color }}
            >
              {a.initials}
            </motion.div>
          ))}
          <motion.div
            variants={{ spread: { x: 16 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-10 h-10 rounded-full border-2 border-navy bg-cream/10 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold text-gold"
          >
            +136
          </motion.div>
        </motion.div>

        <div className="font-display text-lg font-extrabold text-cream tracking-tight leading-tight mb-1.5">
          Trusted by 140+ brands.
        </div>
        <div className="text-[11px] font-bold text-gold uppercase tracking-[0.18em] mb-6">
          ✦ They hit their targets — you&apos;re next.
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center justify-between gap-3 w-full bg-cream text-navy rounded-full pl-5 pr-3 py-3 hover:bg-gold transition-colors duration-300"
        >
          <span className="font-bold text-[14px]">Get a FREE Audit</span>
          <span className="w-8 h-8 rounded-full bg-navy flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-12deg]">
            <ArrowUpRight className="w-3.5 h-3.5 text-gold" strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </motion.div>
  );
}
