"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { socials } from "./data";

export default function MenuInfo() {
  return (
    <aside className="lg:col-span-5 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/15 rounded-full pl-2 pr-3.5 py-1.5">
          <span className="relative flex w-2 h-2 ml-0.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[11px] font-bold text-cream uppercase tracking-[0.15em]">
            Available for new projects
          </span>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gold uppercase tracking-[0.22em] mb-4 flex items-center gap-2">
            <span className="w-5 h-px bg-gold" />
            Get in touch
          </h3>
          <div className="space-y-3">
            <a
              href="mailto:deep@medclap.com"
              className="group flex items-center gap-3 hover:text-gold transition-colors"
            >
              <span className="w-9 h-9 rounded-lg bg-cream/10 group-hover:bg-gold/20 border border-cream/10 flex items-center justify-center transition-colors flex-shrink-0">
                <Mail className="w-4 h-4 text-gold" strokeWidth={2.25} />
              </span>
              <span className="font-display text-base md:text-lg font-extrabold tracking-tight">
                deep@medclap.com
              </span>
            </a>
            <a
              href="tel:+919996619432"
              className="group flex items-center gap-3 hover:text-gold transition-colors"
            >
              <span className="w-9 h-9 rounded-lg bg-cream/10 group-hover:bg-gold/20 border border-cream/10 flex items-center justify-center transition-colors flex-shrink-0">
                <Phone className="w-4 h-4 text-gold" strokeWidth={2.25} />
              </span>
              <span className="font-display text-base md:text-lg font-extrabold tracking-tight">
                +1 (201) 632-5548
              </span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gold uppercase tracking-[0.22em] mb-4 flex items-center gap-2">
            <span className="w-5 h-px bg-gold" />
            Follow us
          </h3>
          <div className="flex gap-2">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group w-10 h-10 rounded-lg bg-cream/10 hover:bg-gold border border-cream/10 hover:border-gold flex items-center justify-center transition-colors"
              >
                <Icon
                  className="w-4 h-4 text-cream group-hover:text-navy transition-colors"
                  strokeWidth={2}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10">
          <div className="text-[11px] text-cream/50 leading-relaxed">
            © {new Date().getFullYear()} MedClap.
          </div>
          <div className="text-[11px] text-cream/40 italic mt-1">
            Bringing your vision to life.
          </div>
        </div>
      </motion.div>
    </aside>
  );
}
