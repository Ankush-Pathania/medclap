import type { Owner } from "./types";

export default function MonogramPortrait({ owner }: { owner: Owner }) {
  const isOnNavy = owner.accentBg === "bg-navy";
  return (
    <div className="relative w-full max-w-[320px] aspect-[3/4]">
      <div
        className={`absolute inset-0 rounded-3xl border-2 ${
          isOnNavy ? "border-cream/15" : "border-navy/10"
        }`}
      />

      <div
        className={`absolute inset-3 rounded-2xl flex items-center justify-center overflow-hidden ${
          isOnNavy ? "bg-navy-deep/60" : "bg-cream"
        }`}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: isOnNavy
              ? "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.15) 1px, transparent 0)"
              : "radial-gradient(circle at 1px 1px, rgba(26,42,94,0.1) 1px, transparent 0)",
            backgroundSize: "14px 14px",
          }}
        />

        <span
          className="relative font-display font-extrabold leading-none tracking-tighter text-gold"
          style={{ fontSize: "clamp(7rem, 16vw, 12rem)" }}
        >
          {owner.initials}
        </span>

        <div
          className={`absolute bottom-0 left-0 right-0 px-4 py-3 ${
            isOnNavy ? "bg-cream/5" : "bg-navy/5"
          } backdrop-blur-sm border-t ${
            isOnNavy ? "border-cream/10" : "border-navy/10"
          }`}
        >
          <div
            className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
              isOnNavy ? "text-cream/60" : "text-ink-soft"
            }`}
          >
            Portrait Pending
          </div>
          <div
            className={`font-display font-extrabold text-[15px] mt-0.5 ${
              isOnNavy ? "text-cream" : "text-navy"
            }`}
          >
            {owner.name}
          </div>
        </div>
      </div>

      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold flex items-center justify-center text-navy font-display font-extrabold text-[11px] shadow-lg">
        ✦
      </span>
    </div>
  );
}
