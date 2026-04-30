"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import Container from "@/components/ui/Container";

export default function FooterCTA() {
  return (
    <div className="relative border-b border-cream/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="py-14 md:py-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-5 md:mb-6">
                <span className="w-6 h-px bg-gold" />
                <span className="text-[11px] font-bold text-gold uppercase tracking-[0.22em]">
                  Last call
                </span>
              </div>
              <h2
                className="font-display font-extrabold tracking-tight leading-[0.95]"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.75rem)" }}
              >
                Have a project worth
                <br />
                <span className="font-serif italic font-normal text-gold">
                  talking
                </span>{" "}
                about?
              </h2>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-between gap-3 bg-gold hover:bg-gold-soft text-navy rounded-full pl-6 pr-1.5 py-1.5 transition-colors duration-300 w-fit"
              >
                <span className="font-bold text-[15px] py-1">
                  Start a project
                </span>
                <span className="w-10 h-10 rounded-full bg-navy flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-4 h-4 text-gold" strokeWidth={2.5} />
                </span>
              </Link>
              <a
                href="mailto:deep@medclap.com"
                className="group inline-flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-[13.5px]"
              >
                <Mail className="w-3.5 h-3.5" strokeWidth={2.25} />
                <span className="border-b border-transparent group-hover:border-gold transition-colors">
                  or just say hi at deep@medclap.com
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
