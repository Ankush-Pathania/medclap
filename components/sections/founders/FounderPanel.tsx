"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import type { Owner } from "./types";
import PhotoPortrait from "./PhotoPortrait";
import MonogramPortrait from "./MonogramPortrait";

export default function FounderPanel({
  owner,
  index,
}: {
  owner: Owner;
  index: number;
}) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]"
    >
      {/* LEFT TEXT */}
      <div className="lg:col-span-7 p-7 md:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center gap-2 mb-6 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft"
        >
          <span className="text-gold-deep font-display text-base">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="w-6 h-px bg-divider" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-display font-extrabold text-navy tracking-tight leading-[0.95] mb-3"
          style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
        >
          {owner.firstName}{" "}
          <span className="font-serif italic font-normal text-gold-deep">
            {owner.lastName}
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5 }}
          className="text-base md:text-lg text-ink-soft mb-7 md:mb-8"
        >
          {owner.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[14.5px] md:text-[15px] text-ink leading-relaxed max-w-xl mb-8"
        >
          {owner.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.5 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href={`mailto:${owner.email}`}
            className="group inline-flex items-center justify-between gap-3 bg-navy text-cream rounded-full pl-5 pr-1.5 py-1.5 hover:bg-ink transition-colors"
          >
            <span className="font-semibold text-[14px] py-1">{owner.email}</span>
            <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-12deg]">
              <Mail className="w-3.5 h-3.5 text-navy" strokeWidth={2.5} />
            </span>
          </a>
          <a
            href={owner.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-2 border-navy text-navy rounded-full pl-4 pr-1.5 py-1.5 hover:bg-navy hover:text-cream transition-colors"
          >
            <span className="font-semibold text-[14px] py-1">LinkedIn</span>
            <span className="w-8 h-8 rounded-full bg-navy group-hover:bg-gold flex items-center justify-center transition-all duration-300">
              <Linkedin
                className="w-3.5 h-3.5 text-gold group-hover:text-navy transition-colors"
                strokeWidth={2.25}
              />
            </span>
          </a>
        </motion.div>
      </div>

      {/* RIGHT PORTRAIT */}
      <div className="lg:col-span-5 relative order-1 lg:order-2 min-h-[320px] lg:min-h-[520px] overflow-hidden">
        <div
          className={`absolute inset-0 ${owner.accentBg} transition-colors duration-500`}
        >
          {owner.accentBg === "bg-navy" ? (
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.3) 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />
          ) : (
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(26,42,94,0.15) 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />
          )}

          <div
            className={`absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-3xl ${
              owner.accentBg === "bg-navy" ? "bg-gold/15" : "bg-navy/10"
            }`}
          />

          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
            {owner.photo ? (
              <PhotoPortrait owner={owner} />
            ) : (
              <MonogramPortrait owner={owner} />
            )}
          </div>

          <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 bg-cream/15 backdrop-blur-sm rounded-full px-2.5 py-1 border border-cream/15 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span
              className={`text-[10px] font-bold uppercase tracking-widest ${
                owner.accentBg === "bg-navy" ? "text-cream" : "text-navy"
              }`}
            >
              Founder
            </span>
          </div>

          <div
            className={`absolute -bottom-8 -right-4 font-serif italic font-normal leading-none select-none pointer-events-none ${
              owner.accentBg === "bg-navy" ? "text-gold/15" : "text-navy/10"
            }`}
            style={{ fontSize: "clamp(14rem, 22vw, 22rem)" }}
          >
            {owner.firstName.charAt(0).toLowerCase()}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
