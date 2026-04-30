import {
  Linkedin,
  Instagram,
  Youtube,
  type LucideIcon,
} from "lucide-react";

export type MenuItem = { num: string; label: string; href: string };

export type SocialLink = {
  Icon: LucideIcon;
  href: string;
  label: string;
};

export const menuItems: MenuItem[] = [
  { num: "01", label: "Services", href: "#services" },
  { num: "02", label: "Work", href: "#work" },
  { num: "03", label: "Reviews", href: "#reviews" },
  { num: "04", label: "FAQ", href: "#faq" },
  { num: "05", label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/medclap",
    label: "LinkedIn",
  },
  { Icon: Youtube, href: "https://www.youtube.com/@MedClap", label: "Youtube" },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/lifeatmedclap",
    label: "Instagram",
  },
];
