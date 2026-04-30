"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp } from "./animations";
import type { Testimonial } from "./types";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group bg-cream-warm border border-divider-soft rounded-3xl p-6 md:p-7 flex flex-col hover:border-divider hover:shadow-md relative transition-[border-color,box-shadow] duration-500"
    >
      <div className="flex items-center gap-1.5 mb-4">
        <span className="font-display text-sm font-extrabold text-navy">
          {t.rating.toFixed(1)}
        </span>
        <Star
          className="w-3.5 h-3.5 fill-gold text-gold"
          strokeWidth={1.5}
        />
        <span className="text-[10.5px] font-bold text-ink-soft uppercase tracking-widest">
          Rating
        </span>
      </div>

      <blockquote className="flex-1">
        <p className="text-[15px] md:text-[15.5px] text-ink leading-relaxed">
          <span className="font-serif italic text-gold-deep text-xl leading-none mr-0.5">
            &ldquo;
          </span>
          {t.quote}
          <span className="font-serif italic text-gold-deep text-xl leading-none ml-0.5">
            &rdquo;
          </span>
        </p>
      </blockquote>

      <div className="mt-6 pt-5 border-t border-divider-soft flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-display font-extrabold text-[13px] flex-shrink-0 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105"
          style={{
            background: t.avatar.bg,
            color: t.avatar.color,
          }}
        >
          {t.avatar.initials}
        </div>
        <div className="min-w-0">
          <div className="font-display text-[15px] font-extrabold text-navy leading-tight tracking-tight truncate">
            {t.name}
          </div>
          <div className="text-[11px] font-medium text-ink-soft mt-0.5 truncate uppercase tracking-wider">
            {t.role}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-7 right-7 h-px bg-gold transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100 origin-left" />
    </motion.div>
  );
}
