import { Folder } from "lucide-react";

export default function ServicesHeader() {
  return (
    <div className="services-header grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
      <div className="md:col-span-8">
        <div className="services-eyebrow inline-flex items-center gap-2 bg-navy text-cream rounded-full pl-2 pr-3.5 py-1.5 mb-6">
          <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
            <Folder
              className="w-2.5 h-2.5 text-navy"
              strokeWidth={2.75}
              fill="currentColor"
            />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
            Services
          </span>
        </div>

        <h2
          className="services-title font-display font-extrabold text-navy tracking-tight leading-[0.95]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          What{" "}
          <span className="font-serif italic font-normal text-gold-deep">
            we
          </span>{" "}
          do.
        </h2>
      </div>

      <p className="services-intro md:col-span-4 text-sm md:text-[15px] text-ink-soft leading-relaxed md:text-right">
        We combine strategy, design, and data to deliver measurable revenue —
        not vanity metrics. Every engagement, every time.
      </p>
    </div>
  );
}
