import { Briefcase } from "lucide-react";

export default function WorkHeader() {
  return (
    <div className="work-header grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
      <div className="md:col-span-8">
        <div className="work-eyebrow inline-flex items-center gap-2 bg-navy text-cream rounded-full pl-2 pr-3.5 py-1.5 mb-6">
          <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
            <Briefcase className="w-2.5 h-2.5 text-navy" strokeWidth={2.75} />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
            Work
          </span>
        </div>

        <h2
          className="work-title font-display font-extrabold text-navy tracking-tight leading-[0.95]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Selected{" "}
          <span className="font-serif italic font-normal text-gold-deep">
            work.
          </span>
        </h2>
      </div>

      <p className="work-intro md:col-span-4 text-sm md:text-[15px] text-ink-soft leading-relaxed md:text-right">
        A look at some of the brands we&apos;ve helped — and the outcomes
        we&apos;ve delivered.
      </p>
    </div>
  );
}
