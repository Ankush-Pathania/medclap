import Image from "next/image";
import type { Owner } from "./types";

export default function PhotoPortrait({ owner }: { owner: Owner }) {
  const isOnNavy = owner.accentBg === "bg-navy";
  return (
    <div className="relative w-full max-w-[320px] aspect-[3/4]">
      <div
        className={`absolute inset-0 rounded-3xl border-2 ${
          isOnNavy ? "border-cream/15" : "border-navy/10"
        }`}
      />

      <div className="absolute inset-3 rounded-2xl overflow-hidden">
        <Image
          src={owner.photo!}
          alt={owner.name}
          fill
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 320px"
          className="object-cover"
          priority
        />

        <div className="absolute bottom-0 left-0 right-0 px-4 pt-12 pb-3 bg-gradient-to-t from-black/75 via-black/40 to-transparent">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/75">
            {owner.role.split("&")[0].trim()}
          </div>
          <div className="font-display font-extrabold text-[15px] mt-0.5 text-cream">
            {owner.name}
          </div>
        </div>
      </div>

      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold flex items-center justify-center text-navy font-display font-extrabold text-[11px] shadow-lg z-10">
        ✦
      </span>
    </div>
  );
}
