import { socialLinks } from "./data";

export default function FooterSocial() {
  return (
    <div>
      <h3 className="text-[10px] font-bold text-cream/40 uppercase tracking-[0.2em] mb-5">
        {"// Social //"}
      </h3>
      <ul className="space-y-3">
        {socialLinks.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-cream hover:text-gold transition-colors text-[14.5px] font-bold"
            >
              <span className="w-7 h-7 rounded-md bg-cream/10 group-hover:bg-gold/20 border border-cream/10 group-hover:border-gold/30 flex items-center justify-center transition-colors flex-shrink-0">
                <Icon
                  className="w-3.5 h-3.5 text-cream group-hover:text-gold transition-colors"
                  strokeWidth={2}
                />
              </span>
              <span className="relative">
                {label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-7 inline-flex items-center gap-2 bg-cream/5 border border-cream/10 rounded-full pl-2 pr-3.5 py-1.5">
        <span className="relative flex w-1.5 h-1.5 ml-0.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
        </span>
        <span className="text-[10px] font-bold text-cream/70 uppercase tracking-[0.15em]">
          Online &middot; IST
        </span>
      </div>
    </div>
  );
}
