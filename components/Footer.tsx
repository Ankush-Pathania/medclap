import FooterCTA from "./footer/FooterCTA";
import FooterMain from "./footer/FooterMain";
import FooterWordmark from "./footer/FooterWordmark";
import FooterBottom from "./footer/FooterBottom";

export default function Footer() {
  return (
    <footer className="relative bg-navy text-cream overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(244,182,46,0.18) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <FooterCTA />
      <FooterMain />
      <FooterWordmark />
      <FooterBottom />
    </footer>
  );
}
