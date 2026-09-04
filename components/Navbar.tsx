"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

function FusionMark() {
  return (
    <span className="flex items-center gap-[0.93px] md:gap-[1.4px]">
      <span className="font-heading text-[17.42px] font-bold leading-6 text-[#F8FAFC] md:text-[25.66px] md:leading-none">
        Fusion
      </span>
      <img
        src="/figma/nav-x.svg"
        alt="X"
        width={26}
        height={28}
        className="h-[18.84px] w-[17.94px] md:h-[28px] md:w-[26px]"
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

  const handleHashClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const hash = href.includes("#") ? href.slice(href.indexOf("#") + 1) : "";
    if (!hash || pathname !== "/") return;

    event.preventDefault();
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${hash}`);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`
        sticky top-5 z-50 mx-5
        flex flex-col
        border border-white/5
        bg-[rgba(27,26,36,0.9)] px-5
        shadow-[0_8px_24px_rgba(0,0,0,0.22)] backdrop-blur-[8.7px]
        md:top-10 md:mx-20 md:h-[88px] md:flex-row md:items-center md:justify-between
        md:gap-0 md:rounded-full md:px-[34px] md:py-5
        ${menuOpen ? "gap-10 rounded-[32px] py-5" : "h-[72px] justify-center rounded-full"}
      `}
    >
      <div className="flex h-8 w-full items-center justify-between md:h-auto md:w-auto">
        <Link href="/" aria-label="FusionX home">
          <FusionMark />
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-8 items-center justify-center text-white md:hidden"
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <span className="flex flex-col gap-[7px]">
              <span className="h-px w-5 bg-white" />
              <span className="h-px w-5 bg-white" />
              <span className="h-px w-5 bg-white" />
            </span>
          )}
        </button>
      </div>

      <div className="hidden items-center gap-[26px] md:flex">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={(event) => handleHashClick(event, link.href)}
              className={`relative pb-1 text-[15px] font-medium leading-[1.5] transition-colors ${
                isActive ? "text-[#F8FAFC]" : "text-[#A5B0C5] hover:text-[#F8FAFC]"
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#8777F3]" />
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

      {menuOpen && (
        <div className="flex flex-col gap-6 md:hidden">
          {NAV_LINKS.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={(event) => handleHashClick(event, link.href)}
                  className="flex items-center justify-between text-[20px] font-medium leading-[150%] text-[#A5B0C5]"
                >
                  <span className={isActive ? "text-white" : ""}>{link.label}</span>
                  {isActive && <span className="size-2 rounded-full bg-[#8777F3]" />}
                </Link>
                {i < NAV_LINKS.length - 1 && (
                  <div className="mt-4 h-px w-full bg-white/[0.06]" />
                )}
              </div>
            );
          })}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="flex h-[50px] w-full items-center justify-center gap-[13px] rounded-[40px] border border-[#4F8CFF] text-[14px] font-semibold text-[#F8FAFC] shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          >
            Let&apos;s Talk
            <ArrowRight size={20} />
          </Link>
        </div>
      )}
    </nav>
  );
}
