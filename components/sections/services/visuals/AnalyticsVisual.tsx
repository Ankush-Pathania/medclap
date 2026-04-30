import { BarChart3 } from "lucide-react";

export default function AnalyticsVisual() {
  return (
    <div className="relative w-full h-full bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.25) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="absolute top-7 left-6 right-6 bg-cream rounded-2xl p-4 shadow-2xl rotate-[-2deg] transition-transform duration-700 group-hover:rotate-[-1deg] group-hover:translate-y-[-4px]">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[9px] font-bold text-ink-soft uppercase tracking-widest">
              Avg ROI · 90 days
            </div>
            <div className="font-display text-2xl font-extrabold text-navy leading-none mt-1">
              +312<span className="text-gold-deep">%</span>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center">
            <BarChart3 className="w-3.5 h-3.5 text-gold-deep" strokeWidth={2.5} />
          </div>
        </div>
        <div className="flex items-end gap-1 h-9">
          {[35, 50, 42, 65, 58, 75, 88, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-gold-deep to-gold rounded-t-sm"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 right-5 bg-gold rounded-xl px-3 py-2 shadow-xl rotate-[3deg] transition-transform duration-700 group-hover:rotate-[5deg]">
        <div className="text-[9px] font-bold text-navy/70 uppercase tracking-wider">
          Conversion
        </div>
        <div className="font-display text-sm font-extrabold text-navy">4.7×</div>
      </div>

      <div className="absolute bottom-12 left-5 bg-cream rounded-xl px-3 py-2 shadow-xl rotate-[-4deg] transition-transform duration-700 group-hover:rotate-[-6deg]">
        <div className="text-[9px] font-bold text-ink-soft uppercase tracking-wider">
          CAC
        </div>
        <div className="font-display text-sm font-extrabold text-navy">−38%</div>
      </div>
    </div>
  );
}
