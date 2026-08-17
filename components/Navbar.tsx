"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className={`
        sticky top-10 z-50 mx-20
        flex h-[88px] items-center justify-between
        rounded-full border border-white/5
        bg-[#1B1A24] px-9 py-5
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

      <div className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`relative pb-1 text-sm transition-colors ${
                isActive ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#6E7CF6]" />
              )}
            </Link>
          );
        })}
      </div>

      <div className="rounded-full bg-gradient-to-r from-[#6E7CF6] to-[#8B6EF6] p-[1px]">
        <button className="flex items-center gap-1.5 rounded-full bg-[#1B1A24] px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/5">
          Let&apos;s talk
          <ArrowRight size={16} />
        </button>
      </div>
    </nav>
  );
}