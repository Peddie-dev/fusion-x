"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Compass,
  Layers,
  Wrench,
  Check as CheckMark,
  X,
  ArrowRight as ArrowRightIcon,
  Heart,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaDribbble, FaTwitter } from "react-icons/fa";
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

const GREEN = "#67D96C";
const GREEN_SOFT = "rgba(103, 217, 108, 0.12)";
const PURPLE = "#8777F3";
const BADGE = "#8B6BFF";
const HEADER = "#F5F5F7";
const BODY = "#B8BCC8";
const BODY_LG = "#C8CBD8";
const CARD = "#1C1B24";
const ELEVATED = "#21202D";
const CARD_BORDER = "rgba(255, 255, 255, 0.06)";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "research", label: "Research" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
  { id: "next-project", label: "Next Project" },
];

const TAGS = [
  { label: "UX Research", Icon: Users },
  { label: "Product Strategy", Icon: Compass },
  { label: "Interaction Design", Icon: Layers },
  { label: "Design System", Icon: Wrench },
];

const OVERVIEW_STAT_PAIRS = [
  [OVERVIEW_STATS[0], OVERVIEW_STATS[1]],
  [OVERVIEW_STATS[2], OVERVIEW_STATS[3]],
  [OVERVIEW_STATS[4], OVERVIEW_STATS[5]],
] as const;

const SOCIALS = [
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaDribbble, label: "Dribbble" },
];

function QuoteMarks({ size = 20, flipped = false }: { size?: number; flipped?: boolean }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 20 16"
      fill="none"
      style={{ transform: flipped ? "rotate(180deg)" : undefined }}
      aria-hidden
    >
      <path
        d="M0 16V9.2C0 6.4.7 4.2 2.1 2.6C3.5 1 5.5.2 8.1 0V3.5C6.5 3.7 5.4 4.3 4.7 5.4C4 6.5 3.7 7.8 3.7 9.2H8.1V16H0Z"
        fill={GREEN}
      />
      <path
        d="M11.9 16V9.2C11.9 6.4 12.6 4.2 14 2.6C15.4 1 17.4.2 20 0V3.5C18.4 3.7 17.3 4.3 16.6 5.4C15.9 6.5 15.6 7.8 15.6 9.2H20V16H11.9Z"
        fill={GREEN}
      />
    </svg>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <div className="flex w-[47px] flex-col items-center gap-2 md:gap-3">
        <span
          className="text-[28px] font-medium leading-8 tracking-[0.12em] md:text-[32px] md:leading-[39px]"
          style={{ color: GREEN }}
        >
          {number}
        </span>
        <span className="h-0.5 w-10" style={{ backgroundColor: "#72C16B" }} />
      </div>
      <h2
        className="font-heading text-[28px] font-bold uppercase leading-[38px] tracking-[-0.03em] md:text-[32px] md:leading-[43px]"
        style={{ color: HEADER }}
      >
        {title}
      </h2>
    </div>
  );
}

function SubHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="text-[20px] font-medium leading-6 tracking-[0.12em] md:text-[24px] md:leading-[29px]"
        style={{ color: GREEN }}
      >
        {number}
      </span>
      <h3
        className="font-heading text-[20px] font-bold uppercase leading-[27px] md:text-[24px] md:leading-8"
        style={{ color: HEADER }}
      >
        {title}
      </h3>
    </div>
  );
}

function TakeawayBanner({
  label,
  quote,
  green = false,
}: {
  label: string;
  quote: string;
  green?: boolean;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border px-5 py-6 md:rounded-[20px] md:px-[30px] md:py-8"
      style={{ backgroundColor: CARD, borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div
        className="pointer-events-none absolute -right-8 top-1/2 h-[130px] w-[280px] -translate-y-1/2 rounded-full blur-[60px]"
        style={{ background: "rgba(114, 193, 107, 0.08)" }}
      />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:gap-4">
        <div
          className="flex size-[60px] shrink-0 items-center justify-center rounded-full md:size-[76px]"
          style={{
            backgroundColor: green ? GREEN_SOFT : ELEVATED,
            border: green ? `1px solid ${GREEN}` : undefined,
          }}
        >
          <QuoteMarks size={18} flipped />
        </div>
        <div className="max-w-[553px]">
          <p
            className="text-[14px] font-medium uppercase leading-[19px] tracking-[0.03em] md:leading-[17px]"
            style={{ color: HEADER }}
          >
            {label}
          </p>
          <p className="mt-3 text-[14px] leading-5 md:text-[16px] md:leading-[19px]" style={{ color: BODY }}>
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrollDots({ count, active }: { count: number; active: number }) {
  return (
    <div className="flex items-center justify-center gap-2 md:hidden">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={i === active ? "h-2 w-6 rounded-full" : "size-2 rounded-full"}
          style={{ backgroundColor: i === active ? GREEN : "rgba(103, 217, 108, 0.2)" }}
        />
      ))}
    </div>
  );
}

function CheckPill({ text, error = false }: { text: string; error?: boolean }) {
  return (
    <div
      className="flex h-14 min-w-0 flex-1 items-center gap-3 rounded-xl px-4"
      style={{ backgroundColor: ELEVATED }}
    >
      <div
        className="flex size-8 shrink-0 items-center justify-center rounded-full border"
        style={{
          backgroundColor: error ? "rgba(239, 68, 68, 0.08)" : GREEN_SOFT,
          borderColor: CARD_BORDER,
          color: error ? "#EF4444" : GREEN,
        }}
      >
        {error ? <X size={12} /> : <CheckMark size={12} strokeWidth={2.5} />}
      </div>
      <p className="min-w-0 text-[12px] font-medium leading-[15px] md:text-[14px] md:leading-[17px]" style={{ color: BODY }}>
        {text}
      </p>
    </div>
  );
}

export default function WorkPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [readingComplete, setReadingComplete] = useState(false);
  const [activeSolutionTab, setActiveSolutionTab] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const [principleIndex, setPrincipleIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const fitRef = useRef<HTMLDivElement>(null);
  const principleRef = useRef<HTMLDivElement>(null);

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

  useLayoutEffect(() => {
    const el = fitRef.current;
    if (!el) return;

    const apply = () => {
      const width = document.documentElement.clientWidth;
      el.style.removeProperty("transform");
      el.style.removeProperty("transform-origin");
      el.style.removeProperty("margin-bottom");

      if (width < 768) {
        el.style.removeProperty("--cs-zoom");
        return;
      }

      const scale = Math.min(1, width / 1440);
      el.style.setProperty("--cs-zoom", String(scale));

      const supportsZoom =
        typeof CSS !== "undefined" && CSS.supports && CSS.supports("zoom", "1");
      if (!supportsZoom) {
        el.style.removeProperty("zoom");
        el.style.transformOrigin = "top center";
        el.style.transform = `scale(${scale})`;
        el.style.marginBottom = `${-(1 - scale) * el.offsetHeight}px`;
      }
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const ctaBlock = (
    <div className="flex flex-col items-center gap-[29px]">
      <div
        className="w-full rounded-xl border p-5"
        style={{ backgroundColor: "rgba(27, 26, 36, 0.96)", borderColor: CARD_BORDER }}
      >
        <p className="text-[16px] font-semibold leading-[19px]" style={{ color: HEADER }}>
          Interested in working together?
        </p>
        <p className="mt-2 text-[14px] leading-5" style={{ color: BODY_LG }}>
          Helping startups and businesses design better digital products.
        </p>
        <Link
          href="/#contact"
          className="mt-6 flex h-11 w-full items-center justify-center gap-3 rounded-lg border text-[14px] font-medium text-white shadow-[0_0_24px_rgba(127,105,212,0.2),0_8px_24px_rgba(0,0,0,0.3)]"
          style={{
            background: "linear-gradient(270deg, #9D85FF 0%, #6B4EFF 100%)",
            borderColor: "rgba(181, 159, 255, 0.25)",
          }}
        >
          Let&apos;s Talk
          <ArrowRightIcon size={16} />
        </Link>
      </div>

      <div className="h-px w-full" style={{ backgroundColor: CARD_BORDER }} />

      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-6">
          {SOCIALS.map(({ Icon, label }) => (
            <a key={label} href="#" aria-label={label} style={{ color: BODY }}>
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-center text-[13px] capitalize leading-[22px]" style={{ color: BODY }}>
          © 2026 FusionX Studios.
          <br />
          Designed in Nairobi. Built for the world.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#151419]">
      <div ref={fitRef} className="cs-fit">
        <Navbar />

        <div
          className={`fixed inset-x-0 top-[80px] z-30 transition-all duration-500 ease-in-out md:hidden ${
          readingComplete
            ? "pointer-events-none -translate-y-1 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
        aria-hidden={readingComplete}
      >
        <div className="h-0.5 w-full bg-white/10">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(214.89deg, #7B61FF -0.01%, #9F6BFF 39.97%, #6CFACD 99.95%)",
            }}
          />
        </div>
      </div>

      <div className="mx-auto w-full px-5 pt-[72px] md:px-20 md:pt-10">
        <div className="flex min-w-0 md:gap-6">
          <aside className="cs-sidebar sticky hidden h-fit w-[260px] shrink-0 flex-col gap-6 md:flex">
            <div
              className="flex h-[160px] flex-col justify-center rounded-[20px] border px-6 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(25, 24, 34, 0.96)", borderColor: CARD_BORDER }}
            >
              <p
                className="bg-clip-text text-[12px] font-medium capitalize leading-[15px] tracking-[0.08em] text-transparent"
                style={{
                  backgroundImage: "linear-gradient(180deg, #7B61FF 0%, #FF6FD8 100%)",
                }}
              >
                Reading Progress
              </p>
              <p className="mt-2 text-[14px] capitalize leading-[17px] tracking-[0.02em] text-[#F8FAFC]">
                Section {activeSection + 1} of {SECTIONS.length}
              </p>
              <p
                className="mt-3 bg-clip-text text-[32px] font-bold capitalize leading-[39px] tracking-[0.02em] text-transparent"
                style={{
                  backgroundImage: "linear-gradient(180deg, #3B82F6 0%, #A99CFF 50%, #8777F3 100%)",
                }}
              >
                {progress}%
              </p>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/12">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${progress}%`,
                    background:
                      "linear-gradient(214.89deg, #7B61FF -0.01%, #9F6BFF 39.97%, #6CFACD 99.95%)",
                  }}
                />
              </div>
            </div>

            <div
              className="rounded-[20px] border p-6 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(25, 24, 34, 0.96)", borderColor: CARD_BORDER }}
            >
              <p
                className="text-[12px] font-medium capitalize leading-[15px] tracking-[0.08em]"
                style={{ color: "rgba(143, 149, 178, 0.5)" }}
              >
                On this page
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                {SECTIONS.map((section, i) => {
                  const active = i === activeSection;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollTo(section.id)}
                      className="flex h-12 items-center gap-[13px] rounded-lg px-[13px] text-left transition-colors"
                      style={
                        active
                          ? {
                              backgroundColor: "#201E2B",
                              border: "1px solid rgba(127, 105, 212, 0.1)",
                            }
                          : undefined
                      }
                    >
                      <span
                        className="w-6 text-[14px] font-medium capitalize leading-[17px]"
                        style={{ color: active ? "#F8FAFC" : BODY }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="text-[15px] font-medium capitalize leading-[22px]"
                        style={{ color: active ? PURPLE : BODY }}
                      >
                        {section.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8">{ctaBlock}</div>
            </div>
          </aside>

          <div ref={contentRef} className="min-w-0 w-full pb-24 md:w-[996px] md:shrink-0 md:pb-32">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-6">
              <div className="min-w-0 pt-0 md:w-[400px] md:shrink-0 md:pt-[10px]">
                <Link
                  href="/"
                  className="font-heading hidden items-center gap-2 text-[14px] font-medium leading-[19px] md:flex"
                  style={{ color: PURPLE }}
                >
                  <ArrowLeft size={16} />
                  Back to Work
                </Link>

                <span
                  className="inline-flex h-[35px] items-center rounded-lg border px-2.5 text-[12px] font-medium capitalize leading-[15px] md:mt-4"
                  style={{ borderColor: "rgba(255, 255, 255, 0.05)", color: BADGE }}
                >
                  Case Study
                </span>

                <h1
                  className="font-heading mt-3 text-[35px] font-bold leading-[43px] tracking-[0.02em] text-white md:mt-8 md:text-[64px] md:leading-[72px] md:tracking-normal"
                  style={{ color: HEADER }}
                >
                  Digifarm Ecosystem
                </h1>

                <p className="mt-5 max-w-full break-words text-[16px] leading-6 text-[#A5B0C5] md:text-[18px] md:leading-8 md:text-[#C8CBD8]">
                  Designing an end-to-end agricultural platform that digitized produce
                  collection, payments, financing, and supply chain operations across Kenya.
                </p>

                <div className="mt-8 flex w-full min-w-0 flex-row flex-wrap gap-3 md:max-w-[315px]">
                  {TAGS.map(({ label, Icon }) => (
                    <span
                      key={label}
                      className="font-heading flex h-[34px] max-w-full items-center gap-2 rounded-lg border px-2.5 text-[12px] font-medium whitespace-nowrap shadow-[0_0_24px_rgba(127,105,212,0.2),0_8px_24px_rgba(0,0,0,0.3)] md:h-11 md:gap-2.5 md:px-5 md:text-[14px]"
                      style={{
                        backgroundColor: ELEVATED,
                        borderColor: CARD_BORDER,
                        color: HEADER,
                      }}
                    >
                      <Icon size={16} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto h-[294px] w-full max-w-[360px] min-w-0 overflow-hidden md:mx-0 md:mt-[46px] md:h-[466px] md:w-[571px] md:max-w-none md:shrink-0">
                <div
                  className="pointer-events-none absolute -right-8 -top-24 size-[492px] rounded-full blur-[130px]"
                  style={{ background: "rgba(94, 219, 83, 0.08)" }}
                />
                <Image
                  src="/work/digifarm-hero.png"
                  alt="Digifarm devices mockup"
                  fill
                  className="object-contain drop-shadow-[0_0_53px_rgba(127,105,212,0.12)]"
                />
              </div>
            </div>

            <div
              className="relative mt-10 hidden min-h-[136px] grid-cols-1 gap-6 rounded-[18px] border px-6 py-6 backdrop-blur-[12px] sm:grid-cols-2 md:mt-8 md:grid md:grid-cols-5 md:items-center md:gap-0 md:px-8"
              style={{ backgroundColor: ELEVATED, borderColor: CARD_BORDER }}
            >
              {[
                {
                  label: "COMPANY",
                  node: (
                    <img
                      src="/figma/logo-safaricom.svg"
                      alt="Safaricom"
                      className="h-[27px] w-auto max-w-full object-contain"
                    />
                  ),
                },
                { label: "TIMELINE", node: "2023 — 2025" },
                { label: "ROLE", node: "Snr Product Designer" },
                { label: "INDUSTRY", node: "Agritech" },
                { label: "PLATFORM", node: "Web • iOS • Android" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex min-w-0 flex-col items-center gap-2 px-2 text-center md:border-r md:px-3 md:last:border-r-0"
                  style={{ borderColor: CARD_BORDER }}
                >
                  <p
                    className="text-[13px] font-medium leading-4 tracking-[0.12em]"
                    style={{ color: PURPLE }}
                  >
                    {item.label}
                  </p>
                  {typeof item.node === "string" ? (
                    <p
                      className="font-heading text-[15px] font-medium tracking-[-0.03em] md:text-[16px]"
                      style={{ color: HEADER }}
                    >
                      {item.node}
                    </p>
                  ) : (
                    item.node
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

            <div className="mt-12 flex flex-col gap-10 md:gap-[50px]">
              <section id="overview">
                <div className="flex flex-col gap-8 md:flex-row md:gap-[65px]">
                  <div className="flex min-w-0 flex-col gap-8 md:w-[499px] md:shrink-0 md:gap-[50px]">
                    <SectionHeading number="01" title="Overview" />
                    <div className="flex flex-col">
                      {OVERVIEW_POINTS.map((point, idx) => (
                        <div
                          key={point.title}
                          className={`flex gap-5 py-5 first:pt-0 last:pb-0 md:py-8 ${
                            idx !== OVERVIEW_POINTS.length - 1 ? "border-b" : ""
                          }`}
                          style={{ borderColor: "#2A2B38" }}
                        >
                          <div
                            className="flex size-12 shrink-0 items-center justify-center rounded-[6.4px] md:size-[60px] md:rounded-lg"
                            style={{ backgroundColor: GREEN_SOFT, color: GREEN }}
                          >
                            <point.icon className="size-[26px] md:size-8" />
                          </div>
                          <div className="min-w-0">
                            <p
                              className="font-heading text-[18px] font-medium capitalize leading-6 md:text-[20px] md:leading-[27px]"
                              style={{ color: HEADER }}
                            >
                              {point.title}
                            </p>
                            <p
                              className="mt-3 whitespace-pre-line text-[16px] leading-[160%] md:leading-8"
                              style={{ color: idx < 2 ? "#A1A7B8" : BODY }}
                            >
                              {point.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative flex min-w-0 flex-col gap-3 overflow-hidden md:w-[432px] md:shrink-0 md:gap-2">
                    <div
                      className="pointer-events-none absolute right-0 top-8 h-[378px] w-full max-w-[432px] blur-[60px]"
                      style={{ background: "rgba(114, 193, 107, 0.08)" }}
                    />
                    {OVERVIEW_STAT_PAIRS.map((pair) => (
                      <div
                        key={pair[0].label}
                        className="relative flex h-[185px] items-center rounded-[18.5px] border backdrop-blur-xl md:h-[200px] md:rounded-[20px]"
                        style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                      >
                        {pair.map((stat, i) => (
                          <div key={stat.label} className="flex flex-1 items-center">
                            {i === 1 && (
                              <div
                                className="h-[89px] w-px shrink-0 md:h-24"
                                style={{ backgroundColor: CARD_BORDER }}
                              />
                            )}
                            <div className="flex flex-1 flex-col items-center gap-[7px] px-2 text-center md:gap-2">
                              <stat.icon className="size-7 md:size-8" style={{ color: GREEN }} />
                              <p
                                className="font-heading text-[32px] font-medium leading-[43px] tracking-[-0.03em] md:text-[40px] md:leading-[54px]"
                                style={{ color: HEADER }}
                              >
                                {stat.value}
                              </p>
                              <p
                                className="font-heading text-[14px] font-medium leading-[19px] md:text-[16px] md:leading-[22px]"
                                style={{ color: HEADER }}
                              >
                                {stat.label}
                              </p>
                              <span className="h-px w-[22px] md:w-6" style={{ backgroundColor: GREEN }} />
                              <p
                                className="text-[12px] leading-[15px] tracking-[0.01em] md:text-[14px] md:leading-[17px]"
                                style={{ color: BODY }}
                              >
                                {stat.sublabel}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

              <section id="challenge">
                <div className="flex flex-col gap-10 md:flex-row md:gap-[65px]">
                  <div className="flex min-w-0 flex-col gap-8 md:w-[499px] md:shrink-0 md:gap-[50px]">
                    <SectionHeading number="02" title="Challenge" />
                    <div>
                      <h3
                        className="font-heading text-[20px] font-bold capitalize leading-[27px] md:text-[24px] md:font-medium md:leading-8"
                        style={{ color: HEADER }}
                      >
                        {CHALLENGE_INTRO.title}
                      </h3>
                      <p className="mt-3 text-[16px] leading-[160%] md:leading-8" style={{ color: BODY }}>
                        {CHALLENGE_INTRO.description}
                      </p>
                      <div className="mt-8 flex flex-col">
                        {CHALLENGE_LIST.map((item, idx) => (
                          <div
                            key={item.title}
                            className={`flex gap-5 py-5 first:pt-0 last:pb-0 md:py-8 ${
                              idx !== CHALLENGE_LIST.length - 1 ? "border-b" : ""
                            }`}
                            style={{ borderColor: "#2A2B38" }}
                          >
                            <div
                              className="flex size-12 shrink-0 items-center justify-center rounded-[6.4px] md:size-[60px] md:rounded-lg"
                              style={{ backgroundColor: GREEN_SOFT, color: GREEN }}
                            >
                              <item.icon className="size-[26px] md:size-8" />
                            </div>
                            <div>
                              <p
                                className="font-heading text-[18px] font-medium capitalize leading-6 md:text-[20px] md:leading-[27px]"
                                style={{ color: HEADER }}
                              >
                                {item.title}
                              </p>
                              <p className="mt-3 text-[16px] leading-[160%] md:leading-8" style={{ color: idx < 2 ? "#A1A7B8" : BODY }}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative flex min-w-0 flex-col gap-3 overflow-hidden md:w-[432px] md:shrink-0">
                    <div
                      className="pointer-events-none absolute inset-0 blur-[60px]"
                      style={{ background: "rgba(114, 193, 107, 0.08)" }}
                    />
                    {CHALLENGE_CARDS.map((card) => (
                      <div
                        key={card.title}
                        className="relative flex items-start gap-5 rounded-[18.5px] border p-5 backdrop-blur-xl md:min-h-[200px] md:items-center md:gap-6 md:rounded-[20px] md:px-8 md:py-0"
                        style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                      >
                        <div
                          className="flex size-[60px] shrink-0 items-center justify-center rounded-full md:size-20"
                          style={{ backgroundColor: GREEN_SOFT, color: GREEN }}
                        >
                          <card.icon className="size-6 md:size-8" />
                        </div>
                        <div>
                          <p
                            className="font-heading text-[18px] font-medium leading-6 md:text-[20px] md:leading-[27px]"
                            style={{ color: HEADER }}
                          >
                            {card.title}
                          </p>
                          <div className="my-2.5 h-px w-[22px] md:w-6" style={{ backgroundColor: GREEN }} />
                          <p
                            className="text-[14px] leading-[140%] tracking-[0.01em] md:leading-[17px]"
                            style={{ color: BODY }}
                          >
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <div className="h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

              <section id="research" className="flex flex-col gap-8">
                <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-[65px]">
                  <div className="min-w-0 md:w-[499px] md:shrink-0">
                    <SectionHeading number="03" title="Research" />
                    <h3
                      className="font-heading mt-5 text-[20px] font-bold capitalize leading-[27px] md:mt-10 md:text-[24px] md:font-medium md:leading-8 md:text-white"
                      style={{ color: HEADER }}
                    >
                      {RESEARCH_INTRO.title}
                    </h3>
                    <div className="mt-3 space-y-0">
                      {RESEARCH_INTRO.paragraphs.map((p) => (
                        <p key={p} className="text-[16px] leading-[160%] md:leading-8" style={{ color: BODY }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="relative grid min-w-0 grid-cols-2 gap-3 md:w-[432px] md:shrink-0 md:gap-4">
                    <div
                      className="pointer-events-none absolute inset-0 blur-[60px]"
                      style={{ background: "rgba(114, 193, 107, 0.08)" }}
                    />
                    {RESEARCH_STATS.map((stat) => (
                      <div
                        key={stat.label}
                        className="relative flex h-[240px] flex-col justify-center rounded-[20px] border px-4 py-5 backdrop-blur-xl md:h-[250px] md:px-6"
                        style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                      >
                        <stat.icon className="size-8" style={{ color: GREEN }} />
                        <p
                          className="font-heading mt-2.5 text-[32px] font-medium leading-[43px] tracking-[-0.03em]"
                          style={{ color: HEADER }}
                        >
                          {stat.value}
                        </p>
                        <p
                          className="font-heading mt-2.5 text-[16px] font-medium leading-[22px]"
                          style={{ color: HEADER }}
                        >
                          {stat.label}
                        </p>
                        <p
                          className="mt-2.5 text-[14px] leading-[17px] tracking-[0.01em]"
                          style={{ color: BODY }}
                        >
                          {stat.sublabel}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative hidden aspect-[996/453] w-full overflow-hidden md:block">
                  {[
                    {
                      photo: RESEARCH_PHOTOS[0],
                      style: { left: "0%", top: "0%", width: "35.54%", height: "100%" },
                      label: "bottom-[13px] left-[14px]",
                    },
                    {
                      photo: RESEARCH_PHOTOS[1],
                      style: { left: "29.52%", top: "0%", width: "39.36%", height: "49.23%" },
                      label: "left-4 top-[13px]",
                    },
                    {
                      photo: RESEARCH_PHOTOS[2],
                      style: { left: "62.95%", top: "0%", width: "37.05%", height: "49.23%" },
                      label: "right-[13px] top-[13px]",
                    },
                    {
                      photo: RESEARCH_PHOTOS[3],
                      style: { left: "22.29%", top: "50.77%", width: "39.36%", height: "49.23%" },
                      label: "bottom-[13px] left-4",
                    },
                    {
                      photo: RESEARCH_PHOTOS[4],
                      style: { left: "55.62%", top: "50.77%", width: "44.38%", height: "49.23%" },
                      label: "bottom-[13px] right-[12px]",
                    },
                  ].map((tile) => (
                    <div
                      key={tile.photo.caption}
                      className="absolute overflow-hidden rounded-[20px]"
                      style={tile.style}
                    >
                      <Image
                        src={tile.photo.src}
                        alt={tile.photo.caption}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[#151419]/40" />
                      <span
                        className={`absolute z-10 rounded-full px-4 py-2.5 text-[12px] font-medium leading-[15px] tracking-[0.01em] ${tile.label}`}
                        style={{ backgroundColor: "rgba(21, 20, 25, 0.6)", color: HEADER }}
                      >
                        {tile.photo.caption}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 md:hidden">
                  <div className="grid grid-cols-2 gap-3">
                    {RESEARCH_PHOTOS.slice(0, 4).map((photo) => (
                      <div key={photo.caption} className="relative h-[180px] overflow-hidden rounded-xl">
                        <Image src={photo.src} alt={photo.caption} fill className="object-cover" />
                        <div className="absolute inset-0 bg-[#151419]/40" />
                        <span
                          className="absolute bottom-2 left-2 rounded-full px-2 py-2 text-[10px] font-medium leading-3 tracking-[0.01em]"
                          style={{ backgroundColor: "rgba(21, 20, 25, 0.6)", color: HEADER }}
                        >
                          {photo.caption}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="relative h-[180px] overflow-hidden rounded-xl">
                    <Image
                      src={RESEARCH_PHOTOS[4].src}
                      alt={RESEARCH_PHOTOS[4].caption}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#151419]/40" />
                    <span
                      className="absolute bottom-2 left-2 rounded-full px-2 py-2 text-[10px] font-medium leading-3 tracking-[0.01em]"
                      style={{ backgroundColor: "rgba(21, 20, 25, 0.6)", color: HEADER }}
                    >
                      {RESEARCH_PHOTOS[4].caption}
                    </span>
                  </div>
                </div>

                <div className="relative flex flex-col gap-8 overflow-hidden md:flex-row md:gap-[15px]">
                  <div
                    className="pointer-events-none absolute right-0 top-0 hidden h-[590px] w-[70%] blur-[60px] md:block"
                    style={{ background: "rgba(114, 193, 107, 0.08)" }}
                  />
                  <div className="relative min-w-0 md:w-[28%] md:shrink-0">
                    <h4
                      className="text-[20px] font-medium capitalize leading-6"
                      style={{ color: HEADER }}
                    >
                      Our Research methods
                    </h4>
                    <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-8 md:flex md:flex-col md:gap-5">
                      {RESEARCH_METHODS.map((method) => (
                        <div key={method.number} className="flex flex-col gap-5 md:flex-row md:gap-3">
                          <div
                            className="flex size-[50px] shrink-0 items-center justify-center rounded-lg text-[16px] font-medium leading-8"
                            style={{ backgroundColor: GREEN_SOFT, color: GREEN }}
                          >
                            {method.number}
                          </div>
                          <div>
                            <p
                              className="font-heading text-[16px] font-medium capitalize leading-[22px]"
                              style={{ color: HEADER }}
                            >
                              {method.title}
                            </p>
                            <p className="mt-3 text-[14px] leading-[160%] md:leading-[17px]" style={{ color: BODY }}>
                              {method.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative min-w-0 md:w-[40%] md:shrink-0">
                    <h4
                      className="text-[20px] font-medium capitalize leading-6"
                      style={{ color: HEADER }}
                    >
                      Who we spoke to
                    </h4>
                    <div className="mt-5 grid grid-cols-2 gap-2.5">
                      {RESEARCH_INTERVIEWEES.map((person) => (
                        <div
                          key={person.name}
                          className="overflow-hidden rounded-[16px] border"
                          style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                        >
                          <div className="relative h-[146px] w-full">
                            <Image
                              src={person.image}
                              alt={person.name}
                              fill
                              className="rounded-t-[10px] object-cover"
                            />
                          </div>
                          <div className="px-4 py-4 md:px-5">
                            <p
                              className="font-heading text-[14px] font-medium capitalize leading-[19px] md:text-[16px] md:leading-[22px]"
                              style={{ color: HEADER }}
                            >
                              {person.name}
                            </p>
                            <p className="mt-2 text-[12px] leading-[140%] md:text-[14px] md:leading-[17px]" style={{ color: BODY }}>
                              {person.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative min-w-0 md:w-[30%] md:shrink-0">
                    <h4
                      className="text-[20px] font-medium capitalize leading-6"
                      style={{ color: HEADER }}
                    >
                      Key Insights
                    </h4>
                    <div className="mt-5 flex fx-h-scroll gap-4 md:flex-col md:overflow-visible md:gap-5">
                      {[0, 1].map((col) => (
                        <div
                          key={col}
                          className="flex w-[300px] shrink-0 flex-col gap-4 md:hidden"
                        >
                          {RESEARCH_INSIGHTS.slice(col * 2, col * 2 + 2).map((insight) => (
                            <div
                              key={insight.title}
                              className="flex min-h-[189px] flex-col gap-5 rounded-2xl border p-5"
                              style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                            >
                              <div
                                className="flex size-12 shrink-0 items-center justify-center rounded-full"
                                style={{ backgroundColor: "#302F3F" }}
                              >
                                <QuoteMarks size={19} />
                              </div>
                              <div>
                                <p
                                  className="font-heading text-[16px] font-medium capitalize leading-[22px] tracking-[0.02em]"
                                  style={{ color: HEADER }}
                                >
                                  {insight.title}
                                </p>
                                <div className="my-2.5 h-px w-[22px]" style={{ backgroundColor: GREEN }} />
                                <p className="text-[14px] leading-[140%] tracking-[0.01em]" style={{ color: BODY }}>
                                  {insight.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                      {RESEARCH_INSIGHTS.map((insight) => (
                        <div
                          key={insight.title}
                          className="hidden min-h-[120px] items-center gap-2.5 rounded-[20px] border px-4 md:flex"
                          style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                        >
                          <div
                            className="flex size-[50px] shrink-0 items-center justify-center rounded-full"
                            style={{ backgroundColor: "#302F3F" }}
                          >
                            <QuoteMarks size={20} />
                          </div>
                          <div>
                            <p
                              className="font-heading text-[16px] font-medium capitalize leading-[22px] tracking-[0.02em]"
                              style={{ color: HEADER }}
                            >
                              {insight.title}
                            </p>
                            <p className="mt-2.5 text-[14px] leading-[17px]" style={{ color: BODY }}>
                              {insight.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <TakeawayBanner label="Research Takeaway" quote={RESEARCH_TAKEAWAY} />
              </section>

              <div className="h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

              <section id="solution" className="flex flex-col gap-8">
                <div>
                  <SectionHeading number="04" title="Solution" />
                  <p className="mt-8 max-w-[686px] text-[16px] leading-8" style={{ color: BODY }}>
                    {SOLUTION_INTRO}
                  </p>
                </div>

                <div
                  className="flex fx-h-scroll rounded-2xl md:overflow-hidden md:rounded-[20px]"
                  style={{ backgroundColor: CARD }}
                >
                  {SOLUTION_TABS.map((tab, i) => {
                    const active = i === activeSolutionTab;
                    return (
                      <button
                        key={tab.label}
                        onClick={() => setActiveSolutionTab(i)}
                        className="relative flex h-[95px] shrink-0 flex-col items-center justify-center gap-3 px-[30px] md:h-[118px] md:min-w-0 md:flex-1 md:gap-4 md:px-1"
                      >
                        {active && (
                          <>
                            <span
                              className="absolute inset-0 hidden rounded-[20px_0_20px_20px] md:block"
                              style={{ backgroundColor: GREEN }}
                            />
                            <span
                              className="absolute inset-px hidden rounded-[20px_0_20px_20px] md:block"
                              style={{ backgroundColor: ELEVATED }}
                            />
                            <span
                              className="absolute inset-0 rounded-[16px_0_16px_16px] md:hidden"
                              style={{
                                backgroundColor: ELEVATED,
                                borderBottom: `2px solid ${GREEN}`,
                              }}
                            />
                          </>
                        )}
                        {i < SOLUTION_TABS.length - 1 && (
                          <span
                            className="absolute right-0 top-0 h-full w-px md:top-1/2 md:h-20 md:-translate-y-1/2"
                            style={{ backgroundColor: CARD_BORDER }}
                          />
                        )}
                        <tab.icon
                          className="relative size-6 md:size-8"
                          style={{ color: active ? GREEN : BODY }}
                        />
                        <span
                          className="font-heading relative text-[14px] capitalize leading-[19px] md:text-[16px] md:leading-[22px]"
                          style={{
                            color: active ? GREEN : BODY,
                            fontWeight: active ? 700 : 500,
                          }}
                        >
                          {tab.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {activeSolutionTab === 0 ? (
                  <div className="flex flex-col gap-6">
                    <div>
                      <SubHeading number="4.1" title="Design Strategy" />
                      <p className="mt-3 text-[16px] leading-8" style={{ color: BODY }}>
                        {DESIGN_STRATEGY_INTRO}
                      </p>
                    </div>

                    <div className="relative">
                      <div
                        className="pointer-events-none absolute inset-0 blur-[60px]"
                        style={{ background: "rgba(114, 193, 107, 0.08)" }}
                      />
                      <div
                        ref={principleRef}
                        className="relative flex fx-h-scroll snap-x snap-mandatory gap-3 md:grid md:grid-cols-5 md:overflow-visible md:gap-3"
                        onScroll={(e) => {
                          const el = e.currentTarget;
                          setPrincipleIndex(Math.round(el.scrollLeft / 206));
                        }}
                      >
                        {DESIGN_PRINCIPLES.map((p) => (
                          <div
                            key={p.number}
                            className="relative flex h-[196px] w-[194px] shrink-0 snap-start flex-col justify-center rounded-2xl border px-5 backdrop-blur-xl md:h-auto md:min-h-[278px] md:w-auto md:rounded-[20px] md:px-6"
                            style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                          >
                            <p.icon className="size-12 md:size-16" style={{ color: GREEN }} />
                            <p
                              className="mt-2.5 text-[12px] font-medium leading-[15px] tracking-[-0.03em] md:mt-3 md:text-[16px] md:leading-[19px]"
                              style={{ color: GREEN }}
                            >
                              {p.number}
                            </p>
                            <p
                              className="font-heading mt-2.5 text-[16px] font-medium leading-[22px] md:mt-3 md:text-[20px] md:leading-[27px]"
                              style={{ color: HEADER }}
                            >
                              {p.title}
                            </p>
                            <p
                              className="mt-2.5 text-[12px] leading-[140%] tracking-[0.01em] md:mt-3 md:text-[14px] md:leading-[17px]"
                              style={{ color: BODY }}
                            >
                              {p.description}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <ScrollDots count={DESIGN_PRINCIPLES.length} active={principleIndex} />
                      </div>
                    </div>

                    <div
                      className="relative overflow-hidden rounded-2xl border p-5 backdrop-blur-xl md:rounded-[20px] md:p-8"
                      style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                    >
                      <h4
                        className="font-heading text-[20px] font-medium leading-[27px] md:text-[24px] md:leading-8"
                        style={{ color: HEADER }}
                      >
                        {DESIGN_APPROACH_INTRO.title}
                      </h4>
                      <p
                        className="mt-2.5 max-w-[515px] text-[16px] leading-[160%] tracking-[0.01em] md:leading-[19px]"
                        style={{ color: BODY }}
                      >
                        {DESIGN_APPROACH_INTRO.description}
                      </p>
                      <div
                        className="pointer-events-none absolute bottom-8 left-8 right-8 h-[140px] blur-[60px]"
                        style={{ background: "rgba(114, 193, 107, 0.08)" }}
                      />
                      <div className="relative mt-10 flex fx-h-scroll gap-[18px] md:flex-wrap md:justify-between md:overflow-visible md:gap-4">
                        {DESIGN_APPROACH_STEPS.map((step, i) => (
                          <div key={step.title} className="flex w-[120px] shrink-0 flex-col gap-3 md:min-w-[88px] md:max-w-[120px] md:flex-1">
                            <div className="relative flex items-center">
                              <div
                                className="flex size-12 items-center justify-center rounded-full"
                                style={{ backgroundColor: GREEN_SOFT, color: GREEN }}
                              >
                                <step.icon size={20} />
                              </div>
                              {i < DESIGN_APPROACH_STEPS.length - 1 && (
                                <div
                                  className="absolute left-12 top-6 h-px w-[70px] border-t-2 border-dashed"
                                  style={{ borderColor: GREEN_SOFT }}
                                />
                              )}
                            </div>
                            <p
                              className="font-heading text-[16px] font-medium leading-[22px]"
                              style={{ color: HEADER }}
                            >
                              {step.title}
                            </p>
                            <p className="text-[12px] leading-[15px]" style={{ color: BODY }}>
                              {step.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className="rounded-2xl border p-5 backdrop-blur-xl md:rounded-[24px] md:p-8"
                      style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                    >
                      <h4
                        className="font-heading text-[20px] font-medium leading-[27px] md:text-[24px] md:leading-8"
                        style={{ color: HEADER }}
                      >
                        {DESIGN_GOALS_INTRO.title}
                      </h4>
                      <p
                        className="mt-2.5 max-w-[515px] text-[14px] leading-[140%] tracking-[0.01em] md:text-[16px] md:leading-[19px]"
                        style={{ color: BODY }}
                      >
                        {DESIGN_GOALS_INTRO.description}
                      </p>
                      <div className="mt-6 flex flex-col gap-3 md:mt-10 md:grid md:grid-cols-2 md:gap-5">
                        {DESIGN_GOALS.map((goal) => (
                          <CheckPill key={goal} text={goal} />
                        ))}
                      </div>
                    </div>

                    <TakeawayBanner
                      label={STRATEGY_TAKEAWAY.label}
                      quote={STRATEGY_TAKEAWAY.quote}
                    />
                  </div>
                ) : (
                  <p className="text-[16px] italic" style={{ color: BODY }}>
                    {SOLUTION_TABS[activeSolutionTab].label} content not yet added — waiting on
                    case study copy.
                  </p>
                )}
              </section>

              <div className="h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

              <section id="impact" className="flex flex-col gap-8">
                <div>
                  <SectionHeading number="05" title="Impact" />
                  <p className="mt-8 max-w-[686px] text-[16px] leading-8" style={{ color: BODY }}>
                    {IMPACT_INTRO}
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <SubHeading number="01" title="Project Outcome" />
                  <div className="relative flex fx-h-scroll gap-3.5 md:grid md:grid-cols-4 md:overflow-visible">
                    <div
                      className="pointer-events-none absolute inset-x-0 top-16 h-[168px] rounded-full blur-[60px]"
                      style={{ background: "rgba(114, 193, 107, 0.08)" }}
                    />
                    {IMPACT_OUTCOME_STATS.map((stat) => (
                      <div
                        key={stat.label}
                        className="relative flex h-[232px] w-[230px] shrink-0 flex-col justify-center rounded-[20px] border px-4 backdrop-blur-xl md:h-auto md:min-h-[230px] md:w-auto"
                        style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                      >
                        <div className="flex items-start gap-2.5">
                          <div
                            className="flex size-14 shrink-0 items-center justify-center rounded-full md:size-16"
                            style={{ backgroundColor: "rgba(103, 217, 108, 0.08)", color: GREEN }}
                          >
                            <stat.icon size={21} />
                          </div>
                          <div>
                            <p
                              className="font-heading text-[32px] font-bold capitalize leading-[43px] tracking-[0.02em]"
                              style={{ color: HEADER }}
                            >
                              {stat.value}
                            </p>
                            <p
                              className="font-heading text-[16px] font-medium leading-[22px]"
                              style={{ color: HEADER }}
                            >
                              {stat.label}
                            </p>
                          </div>
                        </div>
                        <p
                          className="mt-4 text-[14px] leading-[140%] tracking-[0.01em] md:leading-[17px]"
                          style={{ color: BODY }}
                        >
                          {stat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <SubHeading number="02" title="UX Improvements" />
                  <div className="flex fx-h-scroll gap-4 md:grid md:grid-cols-4 md:overflow-visible md:gap-6">
                    {UX_IMPROVEMENTS.map((item) => (
                      <div
                        key={item.title}
                        className="flex h-[250px] w-[230px] shrink-0 flex-col justify-center rounded-[20px] border px-5 backdrop-blur-xl md:w-auto md:px-6"
                        style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                      >
                        <div
                          className="flex size-14 items-center justify-center rounded-full md:size-16"
                          style={{ backgroundColor: "rgba(103, 217, 108, 0.08)", color: GREEN }}
                        >
                          <item.icon size={21} />
                        </div>
                        <p
                          className="font-heading mt-3 text-[16px] font-medium leading-[22px]"
                          style={{ color: HEADER }}
                        >
                          {item.title}
                        </p>
                        <p
                          className="mt-3 text-[14px] leading-[140%] tracking-[0.01em] md:leading-[17px]"
                          style={{ color: BODY }}
                        >
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <SubHeading number="03" title="Before & After" />
                  <div
                    className="relative overflow-hidden rounded-2xl border py-10 backdrop-blur-xl md:rounded-[24px] md:px-10 md:py-8"
                    style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                  >
                    <div
                      className="pointer-events-none absolute left-4 top-1/2 h-[74px] w-[80%] -translate-y-1/2 blur-[60px]"
                      style={{ background: "rgba(114, 193, 107, 0.08)" }}
                    />
                    <div className="relative mb-6 hidden px-2 md:flex">
                      <span
                        className="font-heading flex-1 text-center text-[16px] font-medium uppercase leading-[22px]"
                        style={{ color: "#EF4444" }}
                      >
                        Before
                      </span>
                      <span className="w-6 shrink-0" />
                      <span
                        className="font-heading flex-1 text-center text-[16px] font-medium uppercase leading-[22px]"
                        style={{ color: "#22C55E" }}
                      >
                        After
                      </span>
                    </div>
                    <div className="relative flex fx-h-scroll gap-5 px-5 md:flex-col md:overflow-visible md:gap-[15px] md:px-0">
                      {BEFORE_AFTER.map((row) => (
                        <div
                          key={row.before}
                          className="flex w-[297px] shrink-0 flex-col items-center gap-2 md:w-full md:flex-row md:gap-[17px]"
                        >
                          <span
                            className="font-heading text-[16px] font-medium uppercase leading-[22px] md:hidden"
                            style={{ color: "#EF4444" }}
                          >
                            Before
                          </span>
                          <CheckPill text={row.before} error />
                          <ArrowRightIcon
                            size={24}
                            style={{ color: GREEN }}
                            className="shrink-0 rotate-90 md:rotate-0"
                          />
                          <span
                            className="font-heading text-[16px] font-medium uppercase leading-[22px] md:hidden"
                            style={{ color: "#22C55E" }}
                          >
                            After
                          </span>
                          <CheckPill text={row.after} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <SubHeading number="04" title="Validation" />
                  <div className="flex fx-h-scroll gap-4 md:grid md:grid-cols-3 md:overflow-visible md:gap-[18px]">
                    {VALIDATION_ITEMS.map((item) => (
                      <div
                        key={item.title}
                        className="flex h-[150px] w-[320px] shrink-0 items-center gap-2.5 rounded-[20px] border px-6 md:h-auto md:min-h-[150px] md:w-auto"
                        style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                      >
                        <div
                          className="flex size-16 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: "rgba(103, 217, 108, 0.08)", color: GREEN }}
                        >
                          <item.icon size={24} />
                        </div>
                        <div>
                          <p
                            className="font-heading text-[16px] font-medium capitalize leading-[22px] tracking-[0.02em]"
                            style={{ color: HEADER }}
                          >
                            {item.title}
                          </p>
                          <p className="mt-2.5 text-[14px] leading-5" style={{ color: BODY }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <TakeawayBanner
                  label={IMPACT_TAKEAWAY.label}
                  quote={IMPACT_TAKEAWAY.quote}
                  green
                />
              </section>

              <div className="h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />

              <section id="reflection" className="flex flex-col gap-8">
                <div className="flex flex-col gap-10 md:flex-row md:gap-[67px]">
                  <div className="min-w-0 md:w-[366px] md:shrink-0">
                    <SectionHeading number="06" title="Reflection" />
                    <div className="mt-4 flex items-start gap-5 md:mt-8">
                      <QuoteMarks size={32} flipped />
                      <p
                        className="text-[16px] leading-[160%] md:font-medium md:leading-8"
                        style={{ color: BODY }}
                      >
                        {REFLECTION_QUOTE}
                      </p>
                    </div>
                  </div>

                  <div
                    className="relative min-h-[220px] flex-1 overflow-hidden rounded-[20px] border px-5 py-8 md:px-7"
                    style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                  >
                    <div
                      className="pointer-events-none absolute inset-8 blur-[60px]"
                      style={{ background: "rgba(114, 193, 107, 0.08)" }}
                    />
                    <div className="relative flex flex-col gap-3 md:flex-row">
                      <div
                        className="flex size-14 shrink-0 items-center justify-center rounded-full md:size-[72px]"
                        style={{ backgroundColor: GREEN_SOFT, color: GREEN }}
                      >
                        <Compass className="size-6 md:size-8" />
                      </div>
                      <div>
                        <p
                          className="font-heading text-[16px] font-medium capitalize leading-[22px] tracking-[0.02em] md:text-[20px] md:leading-[27px]"
                          style={{ color: GREEN }}
                        >
                          {REFLECTION_TAKEAWAY.label}
                        </p>
                        <p className="mt-2.5 text-[16px] leading-[160%] md:leading-[26px]" style={{ color: BODY }}>
                          {REFLECTION_TAKEAWAY.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-[18px]">
                  {REFLECTION_PRINCIPLES.map((p) => (
                    <div
                      key={p.title}
                      className="flex min-h-[188px] flex-col justify-center rounded-[20px] border p-5 md:min-h-[250px] md:px-8"
                      style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                    >
                      <div
                        className="flex size-14 items-center justify-center rounded-full md:size-16"
                        style={{ backgroundColor: GREEN_SOFT, color: GREEN }}
                      >
                        <p.icon size={21} />
                      </div>
                      <p
                        className="font-heading mt-5 text-[16px] font-medium capitalize leading-[22px] tracking-[0.02em]"
                        style={{ color: HEADER }}
                      >
                        {p.title}
                      </p>
                      <p className="mt-2.5 text-[14px] leading-[140%] md:leading-6" style={{ color: BODY }}>
                        {p.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  id="next-project"
                  className="relative overflow-hidden rounded-[20px] border py-10"
                  style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                >
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[102px] w-[678px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]"
                    style={{ background: "rgba(114, 193, 107, 0.08)" }}
                  />
                  <div className="relative flex flex-col items-center gap-5">
                    <div className="flex w-full max-w-[950px] items-center gap-5 px-6">
                      <div className="h-px flex-1" style={{ backgroundColor: GREEN }} />
                      <div
                        className="flex size-[72px] shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: GREEN_SOFT, color: GREEN }}
                      >
                        <Heart size={32} />
                      </div>
                      <div className="h-px flex-1" style={{ backgroundColor: GREEN }} />
                    </div>
                    <p
                      className="text-center text-[20px] font-medium leading-6 tracking-[0.03em]"
                      style={{ color: HEADER }}
                    >
                      {THANKS_FOR_VIEWING.title}
                    </p>
                    <p className="text-center text-[16px] leading-[19px]" style={{ color: BODY }}>
                      {THANKS_FOR_VIEWING.subtitle}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-16 hidden">{ctaBlock}</div>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
      </div>

      <button
        type="button"
        aria-label={tocOpen ? "Close page menu" : "Open page menu"}
        aria-expanded={tocOpen}
        onClick={() => setTocOpen((open) => !open)}
        className="fixed bottom-6 left-5 z-40 flex size-[68px] items-center justify-center rounded-full bg-[#1B1A24] shadow-[0_8px_24px_rgba(0,0,0,0.22)] md:hidden"
      >
        {tocOpen ? (
          <X size={22} className="text-white" />
        ) : (
          <img src="/figma/nav-x.svg" alt="" width={26} height={28} className="h-[28px] w-[26px]" />
        )}
      </button>

      {tocOpen && (
        <div
          className="fixed inset-x-5 top-[100px] z-40 flex max-h-[calc(100svh-180px)] overflow-hidden rounded-2xl border p-5 backdrop-blur-[8.5px] md:hidden"
          style={{
            backgroundColor: "rgba(27, 26, 36, 0.8)",
            borderColor: "rgba(255,255,255,0.05)",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.22)",
          }}
        >
          <div className="flex min-w-0 flex-1 flex-col gap-5">
            <p
              className="text-[12px] font-medium capitalize leading-[15px] tracking-[0.08em]"
              style={{ color: "rgba(143, 149, 178, 0.5)" }}
            >
              On this page
            </p>
            <div className="flex flex-col gap-2.5 overflow-y-auto">
              {SECTIONS.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    scrollTo(s.id);
                    setTocOpen(false);
                  }}
                  className="flex items-center gap-[13px] rounded-lg px-[13px] text-left"
                  style={{
                    height: i === activeSection ? 50 : 38,
                    backgroundColor: i === activeSection ? "#201E2B" : "transparent",
                    border: i === activeSection ? "1px solid rgba(127, 105, 212, 0.1)" : "none",
                  }}
                >
                  <span
                    className="w-6 text-[14px] font-medium capitalize"
                    style={{ color: i === activeSection ? "#F8FAFC" : BODY }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[14px] font-medium capitalize leading-[22px] md:text-[15px]"
                    style={{ color: i === activeSection ? PURPLE : BODY }}
                  >
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div
            className="ml-3 w-[170px] shrink-0 overflow-y-auto rounded-xl border px-1 py-4"
            style={{ backgroundColor: "rgba(27, 26, 36, 0.96)", borderColor: CARD_BORDER }}
          >
            {ctaBlock}
          </div>
        </div>
      )}
    </div>
  );
}
