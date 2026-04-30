import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "./data";

export default function ProjectCard({ project }: { project: Project }) {
  const { name, category, href, image, cover: Cover, badge, badgeAccent } =
    project;
  const isCreamBadge = badgeAccent === "cream";

  return (
    <a
      href={href}
      className="project-card group relative block aspect-[4/3] rounded-2xl overflow-hidden border border-divider-soft transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-xl"
    >
      {image ? (
        <div className="absolute inset-0 bg-navy">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />
        </div>
      ) : Cover ? (
        <Cover />
      ) : null}

      {badge && (
        <div
          className={`absolute top-6 left-6 inline-flex items-center gap-1.5 backdrop-blur-sm rounded-full px-3 py-1.5 border ${
            isCreamBadge
              ? "bg-cream/15 border-cream/20"
              : "bg-navy/20 border-navy/15"
          }`}
        >
          {isCreamBadge && (
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          )}
          <span
            className={`text-[10px] font-bold uppercase tracking-widest ${
              isCreamBadge ? "text-cream" : "text-navy"
            }`}
          >
            {badge}
          </span>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] z-10">
        <div className="m-3 md:m-4 bg-cream/95 backdrop-blur-md rounded-xl p-4 flex items-center justify-between gap-4 border border-cream shadow-lg">
          <div className="min-w-0">
            <div className="font-display text-base md:text-lg font-extrabold text-navy leading-tight tracking-tight truncate">
              {name}
            </div>
            <div className="text-[11px] font-medium text-ink-soft mt-0.5 truncate">
              {category}
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-[-12deg]">
            <ArrowUpRight className="w-4 h-4 text-gold" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </a>
  );
}
