"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Compass,
  Layers,
  Palette,
  Quote,
  CheckCircle2 as CheckIcon,
  X,
  Check as CheckMark,
  ArrowRight as ArrowRightIcon,
  Send as SendIcon,
  Heart,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  OVERVIEW_POINTS,
  OVERVIEW_STATS,
  CHALLENGE_INTRO,
  CHALLENGE_LIST,
  CHALLENGE_CARDS,
  RESEARCH_INTRO,
  RESEARCH_STATS,
  RESEARCH_PHOTOS,
  RESEARCH_METHODS,
  RESEARCH_INTERVIEWEES,
  RESEARCH_INSIGHTS,
  RESEARCH_TAKEAWAY,
  SOLUTION_INTRO,
  SOLUTION_TABS,
  DESIGN_STRATEGY_INTRO,
  DESIGN_PRINCIPLES,
  DESIGN_APPROACH_INTRO,
  DESIGN_APPROACH_STEPS,
  DESIGN_GOALS_INTRO,
  DESIGN_GOALS,
  STRATEGY_TAKEAWAY,
  IMPACT_INTRO,
  IMPACT_OUTCOME_STATS,
  UX_IMPROVEMENTS,
  BEFORE_AFTER,
  VALIDATION_ITEMS,
  IMPACT_TAKEAWAY,
  REFLECTION_QUOTE,
  REFLECTION_TAKEAWAY,
  REFLECTION_PRINCIPLES,
  THANKS_FOR_VIEWING,
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
  const [readingComplete, setReadingComplete] = useState(false);
  const [activeSolutionTab, setActiveSolutionTab] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = contentRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const nextProgress = total > 0 ? Math.round((scrolled / total) * 100) : 0;
      setProgress(nextProgress);
      setReadingComplete((prev) => {
        if (nextProgress >= 97) return true;
        if (nextProgress < 88) return false;
        return prev;
      });

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

  const ctaCard = (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="font-heading text-sm font-semibold text-white">
        Interested in working together?
      </p>
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
  );

  return (
    <div className="min-h-screen bg-[#0d0d12]">
      <Navbar />

      <div
        className={`fixed inset-x-0 top-[80px] z-30 transition-all duration-500 ease-in-out md:top-[128px] lg:hidden ${
          readingComplete
            ? "pointer-events-none -translate-y-1 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
        aria-hidden={readingComplete}
      >
        <div className="h-0.5 w-full bg-white/10">
          <div
            className="h-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: BRAND }}
          />
        </div>
      </div>

      <div className="mx-5 mt-8 flex lg:mx-20 lg:mt-16 lg:gap-16">
        {/* Sidebar */}
        <aside className="sticky top-32 hidden w-[220px] shrink-0 lg:block">
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              readingComplete
                ? "mb-0 max-h-0 opacity-0"
                : "mb-8 max-h-[52vh] overflow-y-auto opacity-100"
            }`}
          >
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
          </div>

          {ctaCard}
        </aside>

        {/* Main content */}
        <div ref={contentRef} className="min-w-0 flex-1 pb-24 lg:pb-32">
          <Link href="/" className="flex items-center gap-2 text-sm" style={{ color: BRAND }}>
            <ArrowLeft size={14} />
            Back to Projects
          </Link>

          <div className="mt-8 flex flex-col items-start gap-8 lg:flex-row lg:justify-between lg:gap-10">
            <div className="max-w-[420px]">
              <span
                className="inline-block rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide"
                style={{ borderColor: BRAND, color: BRAND }}
              >
                CASE STUDY
              </span>

              <h1 className="mt-5 text-[32px] font-bold leading-tight text-white md:text-[44px]">
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

            <div className="relative h-[280px] w-full shrink-0 lg:h-[466px] lg:w-[571px]">
              <Image
                src="/work/digifarm-hero.png"
                alt="Digifarm devices mockup"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Meta bar */}
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-white/[0.08] bg-[#15141c] p-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-6 lg:p-6">
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
                  <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
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
                            <p className="font-heading font-semibold text-white">{point.title}</p>
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
                          <p className="font-heading mt-3 text-2xl font-bold text-white">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-sm text-white">{stat.label}</p>
                          <p className="text-xs text-[#A5B0C5]">{stat.sublabel}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.id === "challenge" && (
                  <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
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
                              <p className="font-heading font-semibold text-white">{item.title}</p>
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
                              className="font-heading inline-block border-b-2 pb-0.5 font-semibold text-white"
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

                {section.id === "research" && (
                  <div className="mt-6">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{RESEARCH_INTRO.title}</h3>
                        {RESEARCH_INTRO.paragraphs.map((p, idx) => (
                          <p key={idx} className="mt-3 text-sm leading-relaxed text-[#A5B0C5]">
                            {p}
                          </p>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {RESEARCH_STATS.map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-xl border border-white/[0.08] bg-[#15141c] p-4"
                          >
                            <stat.icon size={18} style={{ color: ACCENT }} />
                            <p className="font-heading mt-3 text-2xl font-bold text-white">
                              {stat.value}
                            </p>
                            <p className="mt-1 text-sm font-medium text-white">{stat.label}</p>
                            <p className="mt-1 text-xs text-[#A5B0C5]">{stat.sublabel}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Photo collage — 5 tiles, explicit grid placement */}
                    <div className="mt-10 grid h-auto grid-cols-1 gap-3 sm:h-[420px] sm:grid-cols-3 sm:grid-rows-2">
                      <div
                        className="relative min-h-[200px] overflow-hidden sm:col-start-1 sm:row-span-2 sm:min-h-0"
                        style={{
                          clipPath: "polygon(0 0, 100% 2%, 96% 100%, 0 100%)",
                        }}
                      >
                        <Image
                          src={RESEARCH_PHOTOS[0].src}
                          alt={RESEARCH_PHOTOS[0].caption}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute bottom-4 left-4 rounded-md bg-black/60 px-2.5 py-1 text-xs text-white">
                          {RESEARCH_PHOTOS[0].caption}
                        </span>
                      </div>

                      <div
                        className="relative min-h-[200px] overflow-hidden sm:col-start-2 sm:row-start-1 sm:min-h-0"
                        style={{
                          clipPath: "polygon(2% 0, 100% 0, 100% 100%, 0 94%)",
                        }}
                      >
                        <Image
                          src={RESEARCH_PHOTOS[1].src}
                          alt={RESEARCH_PHOTOS[1].caption}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute top-4 left-1/2 -translate-x-1/2 rounded-md bg-black/60 px-2.5 py-1 text-xs text-white">
                          {RESEARCH_PHOTOS[1].caption}
                        </span>
                      </div>

                      <div
                        className="relative min-h-[200px] overflow-hidden sm:col-start-3 sm:row-start-1 sm:min-h-0"
                        style={{
                          clipPath: "polygon(0 4%, 100% 0, 100% 100%, 4% 100%)",
                        }}
                      >
                        <Image
                          src={RESEARCH_PHOTOS[2].src}
                          alt={RESEARCH_PHOTOS[2].caption}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute top-4 right-4 rounded-md bg-black/60 px-2.5 py-1 text-xs text-white">
                          {RESEARCH_PHOTOS[2].caption}
                        </span>
                      </div>

                      <div
                        className="relative min-h-[200px] overflow-hidden sm:col-start-2 sm:row-start-2 sm:min-h-0"
                        style={{
                          clipPath: "polygon(4% 0, 100% 4%, 100% 100%, 0 100%)",
                        }}
                      >
                        <Image
                          src={RESEARCH_PHOTOS[3].src}
                          alt={RESEARCH_PHOTOS[3].caption}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute bottom-4 left-4 rounded-md bg-black/60 px-2.5 py-1 text-xs text-white">
                          {RESEARCH_PHOTOS[3].caption}
                        </span>
                      </div>

                      <div
                        className="relative min-h-[200px] overflow-hidden sm:col-start-3 sm:row-start-2 sm:min-h-0"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 96% 96%, 4% 100%)",
                        }}
                      >
                        <Image
                          src={RESEARCH_PHOTOS[4].src}
                          alt={RESEARCH_PHOTOS[4].caption}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute bottom-4 right-4 rounded-md bg-black/60 px-2.5 py-1 text-xs text-white">
                          {RESEARCH_PHOTOS[4].caption}
                        </span>
                      </div>
                    </div>

                    {/* Methods / Interviewees / Insights */}
                    <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
                      <div>
                        <h4 className="mb-5 text-lg font-bold text-white">Our Research Methods</h4>
                        <div className="flex flex-col gap-4">
                          {RESEARCH_METHODS.map((method) => (
                            <div key={method.number} className="flex gap-3">
                              <div
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                                style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                              >
                                {method.number}
                              </div>
                              <div>
                                <p className="font-heading text-sm font-semibold text-white">
                                  {method.title}
                                </p>
                                <p className="mt-0.5 text-xs leading-relaxed text-[#A5B0C5]">
                                  {method.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-5 text-lg font-bold text-white">Who We Spoke To</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {RESEARCH_INTERVIEWEES.map((person) => (
                            <div
                              key={person.name}
                              className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#15141c]"
                            >
                              <div className="relative h-24 w-full">
                                <Image
                                  src={person.image}
                                  alt={person.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="p-3">
                                <p className="font-heading text-sm font-semibold text-white">
                                  {person.name}
                                </p>
                                <p className="mt-1 text-xs leading-relaxed text-[#A5B0C5]">
                                  {person.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-5 text-lg font-bold text-white">Key Insights</h4>
                        <div className="flex flex-col gap-3">
                          {RESEARCH_INSIGHTS.map((insight) => (
                            <div
                              key={insight.title}
                              className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-[#15141c] p-4"
                            >
                              <div
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                                style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                              >
                                <Quote size={14} />
                              </div>
                              <div>
                                <p className="font-heading text-sm font-semibold text-white">
                                  {insight.title}
                                </p>
                                <p className="mt-0.5 text-xs leading-relaxed text-[#A5B0C5]">
                                  {insight.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Takeaway banner */}
                    <div className="mt-10 flex items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-[#15141c] p-8">
                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                          style={{ borderColor: BRAND, color: BRAND }}
                        >
                          <Quote size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-wide" style={{ color: BRAND }}>
                            RESEARCH TAKEAWAY
                          </p>
                          <p className="mt-2 max-w-[500px] text-sm leading-relaxed text-white">
                            {RESEARCH_TAKEAWAY}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {section.id === "solution" && (
                  <div className="mt-6">
                    <p className="max-w-[700px] text-sm leading-relaxed text-[#A5B0C5]">
                      {SOLUTION_INTRO}
                    </p>

                    {/* Tab bar */}
                    <div className="mt-6 flex gap-2 overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#15141c] p-2">
                      {SOLUTION_TABS.map((tab, i) => (
                        <button
                          key={tab.label}
                          onClick={() => setActiveSolutionTab(i)}
                          className={`flex flex-1 flex-col items-center gap-2 rounded-xl px-4 py-4 text-sm transition-colors ${
                            i === activeSolutionTab ? "border" : "text-white/50 hover:text-white/80"
                          }`}
                          style={
                            i === activeSolutionTab
                              ? { borderColor: ACCENT, color: ACCENT, backgroundColor: `${ACCENT}11` }
                              : undefined
                          }
                        >
                          <tab.icon size={20} />
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {activeSolutionTab === 0 ? (
                      <div className="mt-10">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold" style={{ color: ACCENT }}>4.1</span>
                          <h3 className="text-lg font-bold text-white">Design Strategy</h3>
                        </div>
                        <p className="mt-2 text-sm text-[#A5B0C5]">{DESIGN_STRATEGY_INTRO}</p>

                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {DESIGN_PRINCIPLES.map((p) => (
                            <div
                              key={p.number}
                              className="rounded-2xl border border-white/[0.08] bg-[#15141c] p-5"
                            >
                              <p.icon size={28} style={{ color: ACCENT }} />
                              <p className="mt-4 text-xs font-bold" style={{ color: ACCENT }}>
                                {p.number}
                              </p>
                              <p className="font-heading mt-1 text-sm font-semibold text-white">
                                {p.title}
                              </p>
                              <p className="mt-1 text-xs leading-relaxed text-[#A5B0C5]">
                                {p.description}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#15141c] p-8">
                          <h4 className="text-lg font-bold text-white">
                            {DESIGN_APPROACH_INTRO.title}
                          </h4>
                          <p className="mt-2 max-w-[600px] text-sm leading-relaxed text-[#A5B0C5]">
                            {DESIGN_APPROACH_INTRO.description}
                          </p>

                          <div className="mt-8 flex flex-wrap justify-between gap-6">
                            {DESIGN_APPROACH_STEPS.map((step) => (
                              <div
                                key={step.title}
                                className="flex w-[110px] flex-col items-center text-center"
                              >
                                <div
                                  className="flex h-10 w-10 items-center justify-center rounded-full"
                                  style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                                >
                                  <step.icon size={16} />
                                </div>
                                <p className="font-heading mt-3 text-sm font-semibold text-white">
                                  {step.title}
                                </p>
                                <p className="mt-1 text-[11px] leading-relaxed text-[#A5B0C5]">
                                  {step.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#15141c] p-8">
                          <h4 className="text-lg font-bold text-white">{DESIGN_GOALS_INTRO.title}</h4>
                          <p className="mt-2 max-w-[600px] text-sm leading-relaxed text-[#A5B0C5]">
                            {DESIGN_GOALS_INTRO.description}
                          </p>

                          <div className="mt-6 grid grid-cols-2 gap-3">
                            {DESIGN_GOALS.map((goal) => (
                              <div
                                key={goal}
                                className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3"
                              >
                                <div
                                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                                  style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                                >
                                  <CheckIcon size={12} />
                                </div>
                                <p className="text-sm text-white">{goal}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#15141c] p-8">
                          <div className="flex items-start gap-4">
                            <div
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                              style={{ borderColor: BRAND, color: BRAND }}
                            >
                              <Quote size={16} />
                            </div>
                            <div>
                              <p className="text-xs font-semibold tracking-wide" style={{ color: BRAND }}>
                                {STRATEGY_TAKEAWAY.label}
                              </p>
                              <p className="mt-2 max-w-[600px] text-sm leading-relaxed text-white">
                                {STRATEGY_TAKEAWAY.quote}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="mt-8 text-sm italic text-[#A5B0C5]">
                        {SOLUTION_TABS[activeSolutionTab].label} content not yet added — waiting on
                        case study copy.
                      </p>
                    )}
                  </div>
                )}

                {section.id === "impact" && (
                  <div className="mt-6">
                    <p className="max-w-[700px] text-sm leading-relaxed text-[#A5B0C5]">
                      {IMPACT_INTRO}
                    </p>

                    <p className="mt-8 text-xs font-bold tracking-wide" style={{ color: ACCENT }}>
                      01 PROJECT OUTCOME
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {IMPACT_OUTCOME_STATS.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl border border-white/[0.08] bg-[#15141c] p-4"
                        >
                          <div
                            className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
                            style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                          >
                            <stat.icon size={16} />
                          </div>
                          <p className="font-heading text-2xl font-bold text-white">{stat.value}</p>
                          <p className="mt-1 text-sm font-medium text-white">{stat.label}</p>
                          <p className="mt-1 text-xs leading-relaxed text-[#A5B0C5]">
                            {stat.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-8 text-xs font-bold tracking-wide" style={{ color: ACCENT }}>
                      02 UX IMPROVEMENTS
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {UX_IMPROVEMENTS.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-xl border border-white/[0.08] bg-[#15141c] p-4"
                        >
                          <div
                            className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
                            style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                          >
                            <item.icon size={16} />
                          </div>
                          <p className="font-heading text-sm font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-[#A5B0C5]">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-8 text-xs font-bold tracking-wide" style={{ color: ACCENT }}>
                      03 BEFORE &amp; AFTER
                    </p>
                    <div className="mt-4 rounded-2xl border border-white/[0.08] bg-[#15141c] p-6">
                      <div className="mb-4 flex justify-between px-1">
                        <span className="text-xs font-bold text-red-400">BEFORE</span>
                        <span className="text-xs font-bold" style={{ color: ACCENT }}>AFTER</span>
                      </div>
                      <div className="flex flex-col gap-3">
                        {BEFORE_AFTER.map((row) => (
                          <div key={row.before} className="flex flex-col gap-3 md:flex-row md:items-center">
                            <div className="flex flex-1 items-center gap-2 rounded-lg bg-white/[0.03] px-4 py-3">
                              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                                <X size={11} />
                              </div>
                              <p className="text-sm text-white">{row.before}</p>
                            </div>
                            <ArrowRightIcon size={16} style={{ color: ACCENT }} />
                            <div className="flex flex-1 items-center gap-2 rounded-lg bg-white/[0.03] px-4 py-3">
                              <div
                                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                              >
                                <CheckMark size={11} />
                              </div>
                              <p className="text-sm text-white">{row.after}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="mt-8 text-xs font-bold tracking-wide" style={{ color: ACCENT }}>
                      04 VALIDATION
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                      {VALIDATION_ITEMS.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-xl border border-white/[0.08] bg-[#15141c] p-5"
                        >
                          <div
                            className="mb-3 flex h-10 w-10 items-center justify-center rounded-full"
                            style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                          >
                            <item.icon size={18} />
                          </div>
                          <p className="font-heading text-sm font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-[#A5B0C5]">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#15141c] p-8">
                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                          style={{ borderColor: ACCENT, color: ACCENT }}
                        >
                          <Quote size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-wide" style={{ color: ACCENT }}>
                            {IMPACT_TAKEAWAY.label}
                          </p>
                          <p className="mt-2 max-w-[600px] text-sm leading-relaxed text-white">
                            {IMPACT_TAKEAWAY.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {section.id === "reflection" && (
                  <div className="mt-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="flex items-start gap-3">
                        <span className="text-4xl font-bold leading-none" style={{ color: ACCENT }}>
                          &ldquo;
                        </span>
                        <p className="mt-2 text-base leading-relaxed text-white">
                          {REFLECTION_QUOTE}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/[0.08] bg-[#15141c] p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                            style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                          >
                            <SendIcon size={16} />
                          </div>
                          <div>
                            <p className="text-xs font-semibold tracking-wide" style={{ color: ACCENT }}>
                              {REFLECTION_TAKEAWAY.label}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-[#A5B0C5]">
                              {REFLECTION_TAKEAWAY.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                      {REFLECTION_PRINCIPLES.map((p) => (
                        <div
                          key={p.title}
                          className="rounded-2xl border border-white/[0.08] bg-[#15141c] p-6"
                        >
                          <div
                            className="mb-4 flex h-11 w-11 items-center justify-center rounded-full"
                            style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                          >
                            <p.icon size={18} />
                          </div>
                          <p className="font-heading font-semibold text-white">{p.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-[#A5B0C5]">
                            {p.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#15141c] p-10 text-center">
                      <div className="flex items-center justify-center gap-4">
                        <div className="h-px flex-1" style={{ backgroundColor: `${ACCENT}55` }} />
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${ACCENT}22`, color: ACCENT }}
                        >
                          <Heart size={20} />
                        </div>
                        <div className="h-px flex-1" style={{ backgroundColor: `${ACCENT}55` }} />
                      </div>
                      <p className="font-heading mt-4 text-lg font-bold text-white">
                        {THANKS_FOR_VIEWING.title}
                      </p>
                      <p className="mt-1 text-sm text-[#A5B0C5]">{THANKS_FOR_VIEWING.subtitle}</p>
                    </div>
                  </div>
                )}

                {section.id !== "overview" &&
                  section.id !== "challenge" &&
                  section.id !== "research" &&
                  section.id !== "solution" &&
                  section.id !== "impact" &&
                  section.id !== "reflection" && (
                    <p className="mt-4 max-w-[700px] text-sm italic text-[#A5B0C5]">
                      Content for &quot;{section.label}&quot; not yet added — waiting on case study
                      copy.
                    </p>
                  )}
              </div>
            ))}
          </div>

          <div className="mt-16 lg:hidden">{ctaCard}</div>
        </div>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}