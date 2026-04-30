"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";

type Props = {
  isOpen: boolean;
  scrolled: boolean;
  onToggle: () => void;
  onLogoClick: (e: React.MouseEvent) => void;
};

export default function HeaderBar({
  isOpen,
  scrolled,
  onToggle,
  onLogoClick,
}: Props) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled && !isOpen
          ? "bg-cream/85 backdrop-blur-md border-b border-divider-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-5 md:py-6">
          <Link
            href="/"
            onClick={onLogoClick}
            className={`flex items-center gap-2.5 transition-colors duration-500 ${
              isOpen ? "text-cream" : "text-navy"
            }`}
            aria-label="MedClap home"
          >
            <img
              width={56}
              height={56}
              src="./images/main-logo.png"
              alt=""
            />
          </Link>

          <button
            type="button"
            onClick={onToggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className={`group inline-flex items-center gap-2 rounded-full pl-4 pr-1.5 py-1.5 transition-colors duration-300 ${
              isOpen
                ? "bg-cream text-navy hover:bg-gold"
                : "bg-navy text-cream hover:bg-ink"
            }`}
          >
            <span className="text-[13px] font-semibold">
              {isOpen ? "Close" : "Menu"}
            </span>
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ${
                isOpen
                  ? "bg-navy rotate-[135deg]"
                  : "bg-gold group-hover:rotate-90"
              }`}
            >
              <Plus
                className={`w-3.5 h-3.5 transition-colors duration-300 ${
                  isOpen ? "text-cream" : "text-navy"
                }`}
                strokeWidth={3}
              />
            </span>
          </button>
        </div>
      </Container>
    </header>
  );
}
