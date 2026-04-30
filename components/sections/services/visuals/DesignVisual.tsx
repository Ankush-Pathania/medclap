export default function DesignVisual() {
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

      <div
        className="absolute top-4 left-6 font-serif italic font-normal text-cream leading-none transition-transform duration-700 group-hover:translate-y-[-4px]"
        style={{ fontSize: "8rem" }}
      >
        Aa
      </div>

      <div className="absolute bottom-12 left-6 right-6 flex gap-2 transition-transform duration-700 group-hover:translate-x-[3px]">
        <div className="flex-1 h-12 rounded-lg bg-gold flex items-end p-1.5">
          <span className="text-[8px] font-bold text-navy">#F4B62E</span>
        </div>
        <div className="flex-1 h-12 rounded-lg bg-cream flex items-end p-1.5">
          <span className="text-[8px] font-bold text-navy">#FAF6EE</span>
        </div>
        <div className="flex-1 h-12 rounded-lg bg-navy-soft border border-cream/20 flex items-end p-1.5">
          <span className="text-[8px] font-bold text-cream/80">#2B3D7A</span>
        </div>
        <div className="flex-1 h-12 rounded-lg bg-ink flex items-end p-1.5">
          <span className="text-[8px] font-bold text-cream/80">#0F1018</span>
        </div>
      </div>

      <div className="absolute top-7 right-5 bg-gold rounded-full px-2.5 py-1 shadow-xl rotate-[6deg] transition-transform duration-700 group-hover:rotate-[10deg]">
        <span className="text-[9px] font-bold text-navy uppercase tracking-wider">
          ✦ Brand v2.0
        </span>
      </div>
    </div>
  );
}
