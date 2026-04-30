import {
  Linkedin,
  Instagram,
  YoutubeIcon,
  type LucideIcon,
} from "lucide-react";

export type FooterLink = { label: string; href: string };

export type SocialLink = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

export const navLinks: FooterLink[] = [
  { label: "Services", href: "#services" },
  { label: "Selected Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/medclap",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@MedClap",
    Icon: YoutubeIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lifeatmedclap",
    Icon: Instagram,
  },
];
