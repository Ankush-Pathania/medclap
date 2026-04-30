export default function SEOVisual() {
  return (
    <div className="relative w-full h-full bg-cream-warm overflow-hidden">
      <div className="absolute inset-x-5 top-6 bg-cream rounded-xl shadow-lg overflow-hidden border border-divider transition-transform duration-700 group-hover:translate-y-[-3px]">
        <div className="bg-cream-warm/60 px-3 py-2 flex items-center gap-1.5 border-b border-divider">
          <div className="w-1.5 h-1.5 rounded-full bg-divider" />
          <div className="w-1.5 h-1.5 rounded-full bg-divider" />
          <div className="w-1.5 h-1.5 rounded-full bg-divider" />
          <div className="ml-2 flex-1 h-3 bg-cream rounded text-[7px] flex items-center px-1.5 text-ink-soft font-mono">
            google.com
          </div>
        </div>
        <div className="p-3 space-y-2.5">
          <div className="bg-gold/15 -mx-1 px-1.5 py-1 rounded">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-3 h-3 rounded-full bg-gold flex items-center justify-center">
                <span className="text-[7px] font-bold text-navy">1</span>
              </div>
              <span className="text-[8px] text-ink-soft font-mono">medclap.com</span>
            </div>
            <div className="text-[10px] font-bold text-navy leading-tight">
              MedClap — Marketing Agency
            </div>
            <div className="text-[8px] text-ink-soft mt-0.5 leading-tight">
              Strategy, design & growth for ambitious brands.
            </div>
          </div>
          <div className="opacity-60">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[7px] text-ink-soft">2</span>
              <div className="h-1 bg-divider rounded w-16" />
            </div>
            <div className="h-1.5 bg-divider rounded w-3/4" />
          </div>
          <div className="opacity-40">
            <div className="h-1.5 bg-divider rounded w-2/3" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-5 bg-navy text-cream rounded-2xl px-3 py-2 shadow-xl rotate-[4deg] transition-transform duration-700 group-hover:rotate-[6deg]">
        <div className="text-[8px] font-bold text-gold uppercase tracking-wider">
          Position
        </div>
        <div className="font-display text-base font-extrabold leading-none">
          #<span className="text-gold">1</span> ↑
        </div>
      </div>
    </div>
  );
}
