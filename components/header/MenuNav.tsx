"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { menuItems } from "./data";

export default function MenuNav({
  onNavClick,
}: {
  onNavClick: (href: string) => void;
}) {
  return (
    <nav className="lg:col-span-7 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-6 lg:mb-8 flex items-center gap-2"
      >
        <span className="w-6 h-px bg-gold" />
        Navigate
      </motion.div>

      <ul className="flex flex-col">
        {menuItems.map((item, i) => (
          <motion.li
            key={item.label}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4 + i * 0.08,
              duration: 0.7,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          >
            <button
              onClick={() => onNavClick(item.href)}
              className="group relative w-full flex items-center gap-3 md:gap-6 border-b border-cream/15 hover:border-gold py-3 md:py-4 lg:py-5 text-left transition-colors duration-300"
            >
              <span className="font-sans text-[11px] md:text-xs font-bold text-gold uppercase tracking-widest leading-none flex-shrink-0">
                {item.num}
              </span>

              <span
                className="flex-1 relative inline-block overflow-hidden"
                style={{ lineHeight: 1 }}
              >
                <span
                  className="block font-display font-extrabold uppercase tracking-tight transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:-translate-y-full"
                  style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)" }}
                >
                  {item.label}
                </span>
                <span
                  className="absolute inset-0 block font-serif italic font-normal text-gold translate-y-full transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0"
                  style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)" }}
                >
                  {item.label}
                </span>
              </span>

              <span className="flex-shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-1">
                <ArrowUpRight
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-cream group-hover:text-gold transition-colors duration-300"
                  strokeWidth={2}
                />
              </span>
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
