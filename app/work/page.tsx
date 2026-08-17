"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Users, Compass, Layers, Palette } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  OVERVIEW_POINTS,
  OVERVIEW_STATS,
  CHALLENGE_INTRO,
  CHALLENGE_LIST,
  CHALLENGE_CARDS,
} from "@/lib/digifarm-content";

const BRAND = "#8B6EF6";
const ACCENT = "#3BAE6E";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Research" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
  { id: "next-project", label: "Next Project" },
];

const TAGS = ["UX Research", "Product Strategy", "Interaction Design", "Design System"];
const TAG_ICONS = [Users, Compass, Layers, Palette];

export default function WorkPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = contentRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? Math.round((scrolled / total) * 100) : 0);

      const offsets = SECTIONS.map((s) => {
        const node = document.getElementById(s.id);
        if (!node) return Infinity;
        return Math.abs(node.getBoundingClientRect().top - 120);
      });
      const closest = offsets.indexOf(Math.min(...offsets));
      if (closest !== -1) setActiveSection(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0d0d12]">
      <Navbar />

      <div className="mx-20 mt-16 flex gap-16">
        {/* Sidebar */}
        <aside className="sticky top-32 h-fit w-[220px] shrink-0">
          <p className="text-[11px] tracking-wide text-[#A5B0C5]">READING PROGRESS</p>
          <p className="mt-2 text-sm text-white">
            Section {activeSection + 1} of {SECTIONS.length}
          </p>
          <p className="mt-1 text-3xl font-bold" style={{ color: BRAND }}>
            {progress}%
          </p>
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full transition-all"
              style={{ width: `${progress}%`, backgroundColor: BRAND }}
            />
          </div>

          <p className="mt-8 text-[11px] tracking-wide text-[#A5B0C5]">ON THIS PAGE</p>
          <div className="mt-3 flex flex-col gap-1">
            {SECTIONS.map((section, i) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  i === activeSection ? "text-white" : "text-white/50 hover:text-white/80"
                }`}
                style={i === activeSection ? { backgroundColor: `${BRAND}22`, color: BRAND } : undefined}
              >
                <span className="text-xs">{String(i + 1).padStart(2, "0")}</span>
                {section.label}
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm font-semibold text-white">Interested in working together?</p>
            <p className="mt-2 text-xs leading-relaxed text-[#A5B0C5]">
              Helping startups and businesses design better digital products.
            </p>
            <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#6E7CF6] to-[#8B6EF6] py-2.5 text-sm font-medium text-white">
              Let&apos;s Talk
            </button>
            <div className="mt-4 flex gap-3 text-white/60">
              <FaFacebookF size={13} />
              <FaInstagram size={13} />
              <FaTiktok size={13} />
            </div>
            <p className="mt-3 text-[11px] text-white/40">
              © 2026 FusionX Studios.
              <br />
              Designed in Nairobi. Built for the world.
            </p>
          </div>
        </aside>

        {/* Main content */}
        <div ref={contentRef} className="flex-1 pb-32">
          <Link href="/" className="flex items-center gap-2 text-sm" style={{ color: BRAND }}>
            <ArrowLeft size={14} />
            Back to Projects
          </Link>

          <div className="mt-8 flex items-start justify-between gap-10">
            <div style={{ maxWidth: 420 }}>
              <span
                className="inline-block rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide"
                style={{ borderColor: BRAND, color: BRAND }}
              >
                CASE STUDY
              </span>

              <h1 className="mt-5 text-[44px] font-bold leading-tight text-white">
                Digifarm Ecosystem
              </h1>

              <p className="mt-4 text-[15px] leading-relaxed text-[#A5B0C5]">
                Designing an end-to-end agricultural platform that digitized produce
                collection, payments, financing, and supply chain operations across Kenya.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2">
                {TAGS.map((tag, i) => {
                  const Icon = TAG_ICONS[i];
                  return (
                    <span
                      key={tag}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white"
                    >
                      <Icon size={13} />
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="relative h-[466px] w-[571px] shrink-0">
              <Image
                src="/work/digifarm-hero.png"
                alt="Digifarm devices mockup"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Meta bar */}
          <div className="mt-10 grid grid-cols-5 gap-6 rounded-2xl border border-white/[0.08] bg-[#15141c] p-6">
            <div>
              <p className="text-[11px] tracking-wide" style={{ color: BRAND }}>COMPANY</p>
              <p className="mt-2 text-sm font-medium text-white">Safaricom</p>
            </div>
            <div>
              <p className="text-[11px] tracking-wide" style={{ color: BRAND }}>TIMELINE</p>
              <p className="mt-2 text-sm text-white">2023 — 2025</p>
            </div>
            <div>
              <p className="text-[11px] tracking-wide" style={{ color: BRAND }}>ROLE</p>
              <p className="mt-2 text-sm text-white">Snr Product Designer</p>
            </div>
            <div>
              <p className="text-[11px] tracking-wide" style={{ color: BRAND }}>INDUSTRY</p>
              <p className="mt-2 text-sm text-white">Agritech</p>
            </div>
            <div>
              <p className="text-[11px] tracking-wide" style={{ color: BRAND }}>PLATFORM</p>
              <p className="mt-2 text-sm text-white">Web • iOS • Android</p>
            </div>
          </div>

          {/* Sections */}
          <div className="mt-16 flex flex-col gap-24">
            {SECTIONS.slice(0, -1).map((section, i) => (
              <div key={section.id} id={section.id}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold" style={{ color: ACCENT }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-bold uppercase tracking-wide text-white">
                    {section.label}
                  </h2>
                </div>

                {section.id === "overview" && (
                  <div className="mt-6 grid grid-cols-2 gap-10">
                    <div className="flex flex-col">
                      {OVERVIEW_POINTS.map((point, idx) => (
                        <div
                          key={point.title}
                          className={`flex gap-4 py-6 first:pt-0 last:pb-0 ${
                            idx !== OVERVIEW_POINTS.length - 1
                              ? "border-b border-white/[0.06]"
                              : ""
                          }`}
                        >
                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                            style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                          >
                            <point.icon size={16} />
                          </div>
                          <div>
                            <p className="font-semibold text-white">{point.title}</p>
                            <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-[#A5B0C5]">
                              {point.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {OVERVIEW_STATS.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl border border-white/[0.08] bg-[#15141c] p-4"
                        >
                          <stat.icon size={18} style={{ color: ACCENT }} />
                          <p className="mt-3 text-2xl font-bold text-white">{stat.value}</p>
                          <p className="mt-1 text-sm text-white">{stat.label}</p>
                          <p className="text-xs text-[#A5B0C5]">{stat.sublabel}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.id === "challenge" && (
                  <div className="mt-6 grid grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-xl font-bold text-white">{CHALLENGE_INTRO.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#A5B0C5]">
                        {CHALLENGE_INTRO.description}
                      </p>

                      <div className="mt-6 flex flex-col">
                        {CHALLENGE_LIST.map((item, idx) => (
                          <div
                            key={item.title}
                            className={`flex gap-4 py-5 first:pt-0 last:pb-0 ${
                              idx !== CHALLENGE_LIST.length - 1
                                ? "border-b border-white/[0.06]"
                                : ""
                            }`}
                          >
                            <div
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                              style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                            >
                              <item.icon size={16} />
                            </div>
                            <div>
                              <p className="font-semibold text-white">{item.title}</p>
                              <p className="mt-1 text-sm leading-relaxed text-[#A5B0C5]">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      {CHALLENGE_CARDS.map((card) => (
                        <div
                          key={card.title}
                          className="flex gap-4 rounded-2xl border border-white/[0.08] bg-[#15141c] p-5"
                        >
                          <div
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                            style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                          >
                            <card.icon size={18} />
                          </div>
                          <div>
                            <p
                              className="inline-block border-b-2 pb-0.5 font-semibold text-white"
                              style={{ borderColor: ACCENT }}
                            >
                              {card.title}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-[#A5B0C5]">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.id !== "overview" && section.id !== "challenge" && (
                  <p className="mt-4 max-w-[700px] text-sm italic text-[#A5B0C5]">
                    Content for &quot;{section.label}&quot; coming soon.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}