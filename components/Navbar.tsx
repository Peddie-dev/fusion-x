"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

function FusionMark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-[1.4px] ${className}`}>
      <span className="font-heading text-[22px] font-bold leading-none text-[#F8FAFC] md:text-[25.66px]">
        Fusion
      </span>
      <img
        src="/figma/nav-x.svg"
        alt="X"
        width={26}
        height={28}
        className="h-[24px] w-[23px] md:h-[28px] md:w-[26px]"
      />
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`
          sticky top-4 z-50 mx-4
          flex h-16 items-center justify-between
          rounded-full border border-white/5
          bg-[#1B1A24] px-5
          shadow-[0_8px_12px_rgba(0,0,0,0.22)]
          md:top-10 md:mx-20 md:h-[88px] md:px-[34px] md:py-5
        `}
      >
        <Link href="/" aria-label="FusionX home">
          <FusionMark />
        </Link>

        <div className="hidden items-center gap-[26px] md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative pb-1 text-[15px] font-medium leading-[1.5] transition-colors ${
                  isActive ? "text-[#F8FAFC]" : "text-[#A5B0C5] hover:text-[#F8FAFC]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#4F8CFF]" />
                )}
              </Link>
            );
          })}
        </div>

        <Link
          href="/#contact"
          className="hidden h-[50px] items-center gap-[13px] rounded-[40px] border border-[#4F8CFF] px-5 py-2.5 text-[15px] font-semibold text-[#F8FAFC] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-colors hover:bg-white/5 md:flex"
        >
          Let&apos;s Talk
          <ArrowRight size={16} />
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <span className="flex flex-col gap-1.5">
              <span className="h-px w-5 bg-white" />
              <span className="h-px w-5 bg-white" />
            </span>
          )}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[45] bg-[#0d0d12]/95 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-8 pt-28 pb-10">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-[#F8FAFC]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button className="mt-auto flex h-[50px] w-full items-center justify-center gap-3 rounded-[40px] border border-[#4F8CFF] text-[15px] font-semibold text-[#F8FAFC]">
            Let&apos;s Talk
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
