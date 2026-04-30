export default function ContentVisual() {
  return (
    <div className="relative w-full h-full bg-cream-warm overflow-hidden">
      <div className="absolute inset-x-6 top-7 space-y-3">
        <div className="bg-cream border border-divider rounded-xl p-3.5 shadow-md rotate-[-1.5deg] transition-transform duration-700 group-hover:rotate-[-2.5deg] group-hover:translate-x-[-3px]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[9px] font-bold text-gold-deep uppercase tracking-widest">
              ★ Featured
            </span>
            <span className="text-[9px] text-ink-soft">5 min read</span>
          </div>
          <div className="font-display text-[13px] font-bold text-navy leading-tight mb-2">
            How we 3× organic traffic in 90 days.
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-divider rounded-full w-full" />
            <div className="h-1 bg-divider rounded-full w-[85%]" />
            <div className="h-1 bg-divider rounded-full w-[60%]" />
          </div>
        </div>

        <div className="bg-cream border border-divider rounded-xl p-3.5 shadow-sm rotate-[1deg] transition-transform duration-700 group-hover:rotate-[2deg]">
          <div className="text-[9px] font-bold text-ink-soft uppercase tracking-widest mb-1.5">
            Strategy
          </div>
          <div className="font-display text-[12px] font-bold text-navy leading-tight mb-2">
            Topic clusters that compound.
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-divider rounded-full w-full" />
            <div className="h-1 bg-divider rounded-full w-[70%]" />
          </div>
        </div>

        <div className="bg-cream border border-divider rounded-xl p-3 shadow-sm rotate-[-0.5deg] transition-transform duration-700 group-hover:rotate-[-1.5deg]">
          <div className="text-[9px] font-bold text-navy/60 uppercase tracking-widest mb-1">
            Editorial
          </div>
          <div className="font-display text-[11px] font-bold text-navy leading-tight">
            The newsletter playbook.
          </div>
        </div>
      </div>
    </div>
  );
}
