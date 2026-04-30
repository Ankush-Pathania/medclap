"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import HeaderBar from "./header/HeaderBar";
import MenuOverlay from "./header/MenuOverlay";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  /* Lock body scroll & stop Lenis when menu is open */
  useEffect(() => {
    if (!lenis) return;
    if (isOpen) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis.start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, lenis]);

  /* Track scroll to toggle header background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Esc key closes menu */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Smooth scroll via Lenis when nav clicked */
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href) as HTMLElement | null;
      if (target && lenis) {
        lenis.scrollTo(target, { offset: -80 });
      } else if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 600); // wait for menu close animation
  };

  /* Logo click scrolls to top */
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 600);
  };

  return (
    <>
      <HeaderBar
        isOpen={isOpen}
        scrolled={scrolled}
        onToggle={() => setIsOpen(!isOpen)}
        onLogoClick={handleLogoClick}
      />
      <MenuOverlay isOpen={isOpen} onNavClick={handleNavClick} />
    </>
  );
}
