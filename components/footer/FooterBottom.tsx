import { Coffee } from "lucide-react";
import Container from "@/components/ui/Container";

export default function FooterBottom() {
  return (
    <div className="relative border-t border-cream/10">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-5 md:py-6 text-[11.5px]">
          <div className="flex items-center gap-3 text-cream/50 flex-wrap">
            <span>© {new Date().getFullYear()} MedClap.</span>
            <span className="hidden md:inline text-cream/20">|</span>
            <span className="italic">Bringing your vision to life.</span>
          </div>

          <div className="flex items-center gap-4 text-cream/50 flex-wrap">
            <span className="inline-flex items-center gap-1.5">
              Made with{" "}
              <Coffee className="w-3 h-3 inline text-gold" strokeWidth={2.5} />{" "}
              in India
            </span>
            <span className="text-cream/20">|</span>
            <span className="font-mono text-[10.5px] uppercase tracking-wider text-cream/40">
              v1.0.0
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}
