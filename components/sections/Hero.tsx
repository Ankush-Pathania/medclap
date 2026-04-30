"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import HeroHeadline from "./hero/HeroHeadline";
import BentoGrid from "./hero/BentoGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-eyebrow", {
        y: 16,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-word",
          {
            yPercent: 110,
            opacity: 0,
            duration: 1.1,
            stagger: 0.07,
          },
          "-=0.3"
        )
        .from(
          ".hero-icon",
          {
            scale: 0,
            opacity: 0,
            rotate: -90,
            duration: 0.7,
            stagger: 0.08,
            ease: "back.out(1.8)",
          },
          "-=0.7"
        )
        .from(".hero-sub", { y: 16, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(
          ".hero-cta",
          { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3"
        );

      gsap.from(".bento-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.to(".hero-icon", {
        y: -30,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen pt-28 md:pt-32 overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(244,182,46,0.2),transparent_65%),radial-gradient(circle_at_85%_40%,rgba(244,182,46,0.12),transparent_50%),linear-gradient(to_bottom,#FAF6EE,#FAF6EE)]"
    >
      <Container>
        <HeroHeadline />
        <BentoGrid />
      </Container>
    </section>
  );
}
