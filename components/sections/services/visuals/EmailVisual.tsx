export default function EmailVisual() {
  return (
    <div className="relative w-full h-full bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.25) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="absolute inset-x-5 top-6 bg-cream rounded-xl shadow-2xl overflow-hidden rotate-[-1.5deg] transition-transform duration-700 group-hover:rotate-[-2.5deg] group-hover:translate-y-[-3px]">
        <div className="bg-gold h-2" />
        <div className="p-3.5">
          <div className="flex items-center justify-between mb-2.5">
            <div className="text-[9px] font-bold text-ink-soft uppercase tracking-wider">
              Inbox
            </div>
            <div className="text-[9px] text-ink-soft font-mono">9:41 AM</div>
          </div>
          <div className="font-display text-[13px] font-bold text-navy leading-tight">
            Your weekly growth insight ✦
          </div>
          <div className="text-[10px] text-ink-soft mt-1 leading-tight">
            See the 3 wins your team unlocked this week.
          </div>
          <div className="mt-3 space-y-1">
            <div className="h-1 bg-divider rounded-full w-full" />
            <div className="h-1 bg-divider rounded-full w-[88%]" />
            <div className="h-1 bg-divider rounded-full w-[62%]" />
          </div>
          <div className="mt-3 inline-flex items-center gap-1 bg-navy text-cream rounded-full px-2.5 py-1">
            <span className="text-[9px] font-bold">View report</span>
            <span className="text-[9px]">→</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-11 left-5 bg-gold rounded-2xl px-3 py-2 shadow-xl rotate-[-3deg] transition-transform duration-700 group-hover:rotate-[-5deg]">
        <div className="text-[8px] font-bold text-navy/70 uppercase tracking-wider">
          Open rate
        </div>
        <div className="font-display text-sm font-extrabold text-navy">58.2%</div>
      </div>
    </div>
  );
}
