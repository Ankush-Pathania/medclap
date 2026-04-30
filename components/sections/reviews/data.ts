import type { Avatar, Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    rating: 4.9,
    quote:
      "MedClap rebuilt our funnel from the ground up — better landing pages, tighter ad copy, and SEO that actually ranks. Our qualified leads jumped within the first quarter and cost-per-acquisition kept dropping. They get the ESA space.",
    name: "Tracy Deslaurier",
    role: "CO-FOUNDER · Fast ESA Letter",
    avatar: { bg: "#F4B62E", color: "#1A2A5E", initials: "TD" },
  },
  {
    rating: 5.0,
    quote:
      "Operating across 17 states means 17 different SEO battles. MedClap mapped out state-level strategies that stuck — organic traffic is up double digits YoY and our top states are converting better than ever. Reporting is sharp and the team just executes.",
    name: "Dr. Marcus Riley",
    role: "Chief Medical Officer · My MMJ Doctor",
    avatar: { bg: "#1A2A5E", color: "#F4B62E", initials: "MR" },
  },
  {
    rating: 4.9,
    quote:
      "We're a B2B equipment business — not exactly glamorous SEO territory. MedClap dug into our product catalog, fixed years of technical debt on the site, and built a content engine that actually pulls in buyers. Inbound inquiries have never been this consistent.",
    name: "Shaun",
    role: "FOUNDER · SRB EQUIPMENT",
    avatar: { bg: "#D89A14", color: "#FAF6EE", initials: "SH" },
  },
  {
    rating: 4.9,
    quote:
      "Booking inquiries used to be seasonal and unpredictable. MedClap turned our paid search and local SEO into a steady pipeline — we're now ranking for the routes that matter and our quote requests have more than doubled. They treated our business like their own.",
    name: "Navpreet Singh",
    role: "FOUNDER · GO COACH CHARTERS",
    avatar: { bg: "#2B3D7A", color: "#F4B62E", initials: "NS" },
  },
];

export const stackAvatars: Avatar[] = [
  { bg: "#F4B62E", color: "#1A2A5E", initials: "SC" },
  { bg: "#1A2A5E", color: "#F4B62E", initials: "MC" },
  { bg: "#D89A14", color: "#FAF6EE", initials: "JL" },
  { bg: "#2B3D7A", color: "#F4B62E", initials: "BD" },
];
