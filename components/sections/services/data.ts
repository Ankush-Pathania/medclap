import {
  BarChart3,
  FileText,
  Palette,
  Search,
  Mail,
  Share2,
} from "lucide-react";
import type { ComponentType } from "react";
import AnalyticsVisual from "./visuals/AnalyticsVisual";
import ContentVisual from "./visuals/ContentVisual";
import DesignVisual from "./visuals/DesignVisual";
import SEOVisual from "./visuals/SEOVisual";
import EmailVisual from "./visuals/EmailVisual";
import SocialVisual from "./visuals/SocialVisual";

export type Service = {
  icon: typeof BarChart3;
  title: string;
  desc: string;
  tags: string[];
  visual: ComponentType;
  bgIsDark: boolean;
};

export const services: Service[] = [
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Turn raw data into decisions. We track what matters and ignore vanity metrics.",
    tags: ["Attribution", "Dashboards", "A/B Testing", "Funnel Audits"],
    visual: AnalyticsVisual,
    bgIsDark: true,
  },
  {
    icon: FileText,
    title: "Content Strategy",
    desc: "Editorial systems that make your brand the obvious answer when people search.",
    tags: ["Editorial Calendar", "Brand Voice", "Long-form", "Topic Clusters"],
    visual: ContentVisual,
    bgIsDark: false,
  },
  {
    icon: Palette,
    title: "Design",
    desc: "Brand systems and digital experiences with a real point of view. Never generic.",
    tags: ["Brand Identity", "Web Design", "UI/UX", "Design Systems"],
    visual: DesignVisual,
    bgIsDark: true,
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Organic traffic that compounds. Pages that rank, links that hold, content engines that scale.",
    tags: ["Technical SEO", "Link Building", "Local SEO", "On-page"],
    visual: SEOVisual,
    bgIsDark: false,
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Lifecycle flows and campaigns that earn the open and drive measurable revenue.",
    tags: ["Lifecycle Flows", "Newsletters", "Segmentation", "Deliverability"],
    visual: EmailVisual,
    bgIsDark: true,
  },
  {
    icon: Share2,
    title: "Social Media",
    desc: "Content systems that turn followers into customers. Voice, cadence, creative — all aligned.",
    tags: ["Content Production", "Community", "Paid Social", "Influencer"],
    visual: SocialVisual,
    bgIsDark: false,
  },
];
