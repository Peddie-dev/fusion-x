import Image from "next/image";
import { ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav
      className={`
    sticky top-10 z-50 mx-20
    flex h-[88px] items-center justify-between
    rounded-full border border-white/5
    bg-[#1B1A24] px-[34px] py-5
    shadow-[0_8px_24px_rgba(0,0,0,0.22)]
  `}
    >
      <Image
        src="/logo.png"
        alt="FusionX"
        width={106}
        height={35}
        priority
        className="h-8 w-auto"
      />

      <div className="hidden items-center gap-7 md:flex">
        {NAV_LINKS.map((link) => (
            <a
          
            key={link.label}
            href={link.href}
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        className="flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/5"
      >
        Let&apos;s talk
        <ArrowRight size={16} />
      </button>
    </nav>
  );
}