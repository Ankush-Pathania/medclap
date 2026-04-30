import type { ComponentType } from "react";

export type Project = {
  name: string;
  category: string;
  description: string;
  href: string;
  image?: string;
  cover?: ComponentType;
  badge?: string;
  badgeAccent?: "navy" | "cream";
};

export const projects: Project[] = [
  {
    name: "Fast ESA Letter",
    category: "Healthtech · 2025",
    description:
      "Streamlined the application funnel and rebuilt paid acquisition.",
    href: "#fast-esa",
    image: "/images/fast-esa.jpeg",
    badge: "Fast ESA Letter ✓",
    badgeAccent: "cream",
  },
  {
    name: "My MMJ Doctor",
    category: "Telehealth · 2024",
    description: "Brand refresh + multi-channel patient acquisition.",
    href: "#mmj-doctor",
    image: "/images/mymmj.jpg",
    badge: "Telehealth",
    badgeAccent: "cream",
  },
  {
    name: "Myesatherapist",
    category: "Telehealth",
    description: "Positioning, web rebuild, and content engine for Telehealth.",
    href: "#stackwise",
    image: "/images/my-esa.jpg",
    badge: "Telehealth",
    badgeAccent: "cream",
  },
  {
    name: "Ongo Weight Loss",
    category: "Healthcare · Wellness",
    description:
      "Conversion-focused website and patient acquisition funnel for a medical weight loss brand, including landing pages, CRM integration, and paid growth strategy.",
    href: "#ongo-weight-loss",
    image: "/images/ongo.png",
    badge: "Healthcare",
    badgeAccent: "navy",
  },
  {
    name: "SRB Truck & Trailer Repair Edmonton",
    category: "Automotive · 2024",
    description:
      "Website design and local SEO for a truck and trailer repair service in Edmonton, focused on roadside assistance and heavy-duty vehicle support.",
    href: "#edmonton-repair",
    image: "/images/srb-100.jpg",
    badge: "Automotive",
    badgeAccent: "cream",
  },
];
