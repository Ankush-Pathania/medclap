import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { FooterLink } from "./data";

export default function FooterColumn({
  label,
  links,
}: {
  label: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3 className="text-[10px] font-bold text-cream/40 uppercase tracking-[0.2em] mb-5">
        {label}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLinkItem link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLinkItem({ link }: { link: FooterLink }) {
  const isHash = link.href.startsWith("#");
  const linkClassName =
    "group inline-flex items-center gap-1.5 text-cream hover:text-gold transition-colors text-[14.5px] font-bold";

  const inner = (
    <>
      <span className="relative">
        {link.label}
        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </span>
      <ArrowUpRight
        className="w-3.5 h-3.5 text-cream/0 group-hover:text-gold -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
        strokeWidth={2.5}
      />
    </>
  );

  if (isHash) {
    return (
      <a href={link.href} className={linkClassName}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={link.href} className={linkClassName}>
      {inner}
    </Link>
  );
}
