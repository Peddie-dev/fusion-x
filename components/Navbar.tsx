"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
          shadow-[0_8px_24px_rgba(0,0,0,0.22)]
          md:top-10 md:mx-20 md:h-[88px] md:px-9 md:py-5
        `}
      >
        <Link href="/" aria-label="FusionX home">
          <Image
            src="/logo.png"
            alt="FusionX"
            width={106}
            height={35}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

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

        <div className="hidden rounded-full bg-gradient-to-r from-[#6E7CF6] to-[#8B6EF6] p-[1px] md:block">
          <button className="flex items-center gap-1.5 rounded-full bg-[#1B1A24] px-5 py-2.5 text-sm text-white transition-colors hover:bg-white/5">
            Let&apos;s talk
            <ArrowRight size={16} />
          </button>
        </div>

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
                className="text-2xl font-semibold text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6E7CF6] to-[#8B6EF6] py-3.5 text-sm font-medium text-white">
            Let&apos;s talk
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
