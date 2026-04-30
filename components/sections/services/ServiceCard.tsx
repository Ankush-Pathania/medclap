import { ArrowUpRight } from "lucide-react";
import type { Service } from "./data";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const Visual = service.visual;

  return (
    <a href="#contact" className="service-card group block">
      <div className="bg-cream-warm border border-divider-soft rounded-2xl p-6 md:p-7 transition-all duration-500 group-hover:border-divider group-hover:bg-cream-warm/80 group-hover:-translate-y-1 group-hover:shadow-lg shadow-sm">
        <div className="flex items-start justify-between mb-5">
          <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-6deg]">
            <Icon className="w-5 h-5 text-gold" strokeWidth={2.25} />
          </div>
          <div className="w-8 h-8 rounded-full border border-divider flex items-center justify-center transition-all duration-500 group-hover:bg-navy group-hover:border-navy">
            <ArrowUpRight
              className="w-3.5 h-3.5 text-navy transition-colors duration-500 group-hover:text-gold"
              strokeWidth={2.5}
            />
          </div>
        </div>

        <h3 className="font-display text-[22px] md:text-2xl font-extrabold text-navy leading-tight tracking-tight">
          {service.title}
        </h3>

        <p className="mt-2.5 text-[13.5px] text-ink-soft leading-relaxed">
          {service.desc}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 bg-cream border border-divider rounded-full pl-2 pr-2.5 py-1 transition-colors duration-300 group-hover:border-divider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-[10.5px] font-bold text-navy uppercase tracking-wider">
                {tag}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 md:mt-4 relative rounded-2xl overflow-hidden h-[260px] md:h-[280px] transition-transform duration-500 group-hover:scale-[1.01]">
        <Visual />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          <span
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              service.bgIsDark ? "bg-gold w-4" : "bg-navy w-4"
            }`}
          />
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              service.bgIsDark ? "bg-cream/40" : "bg-navy/30"
            }`}
          />
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              service.bgIsDark ? "bg-cream/40" : "bg-navy/30"
            }`}
          />
        </div>
      </div>
    </a>
  );
}
