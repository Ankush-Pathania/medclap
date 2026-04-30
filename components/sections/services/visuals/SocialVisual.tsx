import { Heart, MessageCircle, Star } from "lucide-react";

export default function SocialVisual() {
  return (
    <div className="relative w-full h-full bg-cream-warm overflow-hidden">
      <div className="absolute inset-x-5 top-6 grid grid-cols-2 gap-2 transition-transform duration-700 group-hover:translate-y-[-3px]">
        <div className="bg-gold rounded-xl p-2.5 aspect-square flex flex-col justify-between rotate-[-2deg] shadow-md">
          <div className="text-[8px] font-bold text-navy/70 uppercase tracking-wider">
            @medclap
          </div>
          <div className="font-display text-[14px] font-extrabold text-navy leading-[1] italic">
            Grow.
          </div>
          <div className="flex items-center gap-2 text-navy">
            <div className="flex items-center gap-0.5">
              <Heart className="w-2.5 h-2.5 fill-navy" />
              <span className="text-[8px] font-bold">2.4k</span>
            </div>
            <div className="flex items-center gap-0.5">
              <MessageCircle className="w-2.5 h-2.5" strokeWidth={2.5} />
              <span className="text-[8px] font-bold">38</span>
            </div>
          </div>
        </div>

        <div className="bg-navy rounded-xl p-2.5 aspect-square flex flex-col justify-between rotate-[2deg] shadow-md">
          <div className="text-[8px] font-bold text-gold uppercase tracking-wider">
            ✦ Tip
          </div>
          <div className="font-display text-[10px] font-bold text-cream leading-tight">
            Less data.
            <br />
            More signal.
          </div>
          <div className="flex items-center gap-2 text-cream">
            <div className="flex items-center gap-0.5">
              <Heart className="w-2.5 h-2.5 fill-gold text-gold" />
              <span className="text-[8px] font-bold">1.1k</span>
            </div>
          </div>
        </div>

        <div className="col-span-2 bg-cream border border-divider rounded-xl p-2.5 flex items-center gap-2.5 rotate-[-0.5deg] shadow-sm">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center font-display font-extrabold text-navy text-[10px]">
            M
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] font-bold text-navy">MedClap · 2h</div>
            <div className="text-[9px] text-ink-soft truncate">
              Just shipped a campaign that hit 4.7× ROAS in week one ✦
            </div>
          </div>
          <Star className="w-3 h-3 fill-gold text-gold flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}
