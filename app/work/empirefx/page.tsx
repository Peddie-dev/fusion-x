"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Navigation,
  Layers,
  Wrench,
  ArrowRight as ArrowRightIcon,
  Heart,
  X,
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
  DISCOVERY_INTRO,
  DISCOVERY_METHODS,
  KEY_INSIGHTS,
  INITIATIVES_INTRO,
  INITIATIVE_TABS,
  DASHBOARD_INITIATIVE,
  IMPACT_INTRO,
  IMPACT_CARDS,
  REFLECTION_INTRO,
  REFLECTION_CARDS,
  REFLECTION_QUOTE,
  REFLECTION_MORE,
  KEY_TAKEAWAYS_INTRO,
  KEY_TAKEAWAYS,
  THANKS_FOR_VIEWING,
  DASHBOARD_ICONS,
} from "@/lib/empirefx-content";

const FX = "#5F5FFF";
const FX_SOFT = "rgba(95, 95, 255, 0.12)";
const FX_GLOW = "rgba(95, 95, 255, 0.08)";
const FX_GRADIENT = "linear-gradient(180deg, #5F5FFF 0%, #393999 100%)";
const PURPLE = "#8777F3";
const HEADER = "#F5F5F7";
const BODY = "#B8BCC8";
const BODY_LG = "#C8CBD8";
const CARD = "#1C1B24";
const ELEVATED = "#21202D";
const CARD_BORDER = "rgba(255, 255, 255, 0.06)";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "discovery", label: "Discovery & Insights" },
  { id: "initiatives", label: "Product Initiatives" },
  { id: "impact", label: "Impact" },
  { id: "reflections", label: "Reflections" },
  { id: "next-project", label: "Next Project" },
];

const TAGS = [
  { label: "UX Research", Icon: Users },
  { label: "Product Strategy", Icon: Navigation },
  { label: "Interaction Design", Icon: Layers },
  { label: "Design System", Icon: Wrench },
];

const SOCIALS = [
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaDribbble, label: "Dribbble" },
];

function QuoteMarks({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 20 16" fill="none" aria-hidden>
      <path
        d="M20 0V6.8C20 9.6 19.3 11.8 17.9 13.4C16.5 15 14.5 15.8 11.9 16V12.5C13.5 12.3 14.6 11.7 15.3 10.6C16 9.5 16.3 8.2 16.3 6.8H11.9V0H20Z"
        fill={FX}
      />
      <path
        d="M8.1 0V6.8C8.1 9.6 7.4 11.8 6 13.4C4.6 15 2.6 15.8 0 16V12.5C1.6 12.3 2.7 11.7 3.4 10.6C4.1 9.5 4.4 8.2 4.4 6.8H0V0H8.1Z"
        fill={FX}
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
          style={{ color: FX }}
        >
          {number}
        </span>
        <span className="h-0.5 w-10" style={{ backgroundColor: FX }} />
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

export default function EmpireFxWorkPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [readingComplete, setReadingComplete] = useState(false);
  const [activeInitiative, setActiveInitiative] = useState(0);
  const [galleryTab, setGalleryTab] = useState<"web" | "mobile">("web");
  const [tocOpen, setTocOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const fitRef = useRef<HTMLDivElement>(null);

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
              style={{ width: `${progress}%`, background: FX_GRADIENT }}
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
                  style={{ backgroundImage: "linear-gradient(180deg, #7B61FF 0%, #FF6FD8 100%)" }}
                >
                  Reading Progress
                </p>
                <p className="mt-2 text-[14px] capitalize leading-[17px] tracking-[0.02em] text-[#F8FAFC]">
                  Section {activeSection + 1} of {SECTIONS.length}
                </p>
                <p
                  className="mt-3 bg-clip-text text-[32px] font-bold capitalize leading-[39px] tracking-[0.02em] text-transparent"
                  style={{ backgroundImage: FX_GRADIENT }}
                >
                  {progress}%
                </p>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/12">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${progress}%`, background: FX_GRADIENT }}
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
                  ON THIS PAGE
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
              <div className="relative md:min-h-[720px]">
                <div className="relative z-10 min-w-0 md:w-[493px]">
                  <Link
                    href="/#work"
                    className="font-heading hidden items-center gap-2 text-[14px] font-medium leading-[19px] md:flex"
                    style={{ color: FX }}
                  >
                    <ArrowLeft size={16} />
                    Back to Work
                  </Link>

                  <span
                    className="inline-flex h-[35px] items-center rounded-lg border px-2.5 text-[12px] font-medium capitalize leading-[15px] md:mt-8"
                    style={{ borderColor: "rgba(255, 255, 255, 0.05)", color: FX }}
                  >
                    Case Study
                  </span>

                  <h1
                    className="font-heading mt-3 text-[35px] font-bold leading-[43px] md:mt-8 md:text-[50px] md:leading-[68px]"
                    style={{ color: HEADER }}
                  >
                    Improving a Live Forex Trading Platform
                  </h1>

                  <p className="mt-5 max-w-[400px] text-[16px] leading-6 md:mt-[30px] md:text-[18px] md:leading-8" style={{ color: BODY_LG }}>
                    Empire FX is a regulated forex trading platform that enables users to trade
                    global financial markets across web and mobile.
                  </p>

                  <div className="mt-8 flex w-full min-w-0 flex-row flex-wrap gap-3 md:mt-[30px] md:max-w-[315px] md:gap-[10px]">
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

                <div className="relative z-0 mx-auto mt-8 h-[294px] w-full max-w-[360px] overflow-hidden md:absolute md:-right-10 md:top-[88px] md:mx-0 md:mt-0 md:h-[469px] md:max-w-none md:w-[685px]">
                  <div
                    className="pointer-events-none absolute right-8 top-[140px] h-[280px] w-[380px] rounded-full blur-[80px]"
                    style={{ background: "rgba(95, 95, 255, 0.24)" }}
                  />
                  <Image
                    src="/work/efx/hero.png"
                    alt="EmpireFX trading platform on web and mobile"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <div
                  className="relative mt-10 hidden min-h-[136px] rounded-[18px] border px-8 py-6 backdrop-blur-[12px] md:mt-[48px] md:grid md:grid-cols-5 md:items-center md:gap-0"
                  style={{ backgroundColor: ELEVATED, borderColor: CARD_BORDER }}
                >
                  {[
                    {
                      label: "COMPANY",
                      node: (
                        <img
                          src="/work/efx/logo-empirefx.svg"
                          alt="EmpireFX"
                          className="h-[23px] w-[122px] object-contain"
                        />
                      ),
                    },
                    { label: "TIMELINE", node: "2025 — Present" },
                    { label: "ROLE", node: "Snr Product Designer" },
                    { label: "INDUSTRY", node: "Fintech/Trading" },
                    { label: "PLATFORM", node: "Web • iOS • Android" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex min-w-0 flex-col items-center gap-2 px-2 text-center md:border-r md:last:border-r-0"
                      style={{ borderColor: CARD_BORDER }}
                    >
                      <p
                        className="text-[13px] font-medium leading-4 tracking-[0.12em]"
                        style={{ color: FX }}
                      >
                        {item.label}
                      </p>
                      {typeof item.node === "string" ? (
                        <p
                          className="font-heading text-[16px] font-medium tracking-[-0.03em]"
                          style={{ color: HEADER }}
                        >
                          {item.label === "PLATFORM" ? (
                            <>
                              Web <span style={{ color: FX }}>•</span> iOS{" "}
                              <span style={{ color: FX }}>•</span> Android
                            </>
                          ) : (
                            item.node
                          )}
                        </p>
                      ) : (
                        item.node
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 h-px w-full" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

              <div className="mt-12 flex flex-col gap-[120px]">
                <section id="overview">
                  <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-8">
                    <div className="flex min-w-0 flex-col gap-8 md:w-[499px] md:shrink-0 md:gap-[50px]">
                      <SectionHeading number="01" title="Overview" />
                      <div className="flex flex-col">
                        {OVERVIEW_POINTS.map((point, idx) => (
                          <div
                            key={point.title}
                            className={`flex gap-5 py-8 first:pt-0 last:pb-0 ${
                              idx !== OVERVIEW_POINTS.length - 1 ? "border-b" : ""
                            }`}
                            style={{ borderColor: "rgba(95, 95, 255, 0.06)" }}
                          >
                            <div
                              className="flex size-16 shrink-0 items-center justify-center rounded-full"
                              style={{ backgroundColor: FX_SOFT, color: FX }}
                            >
                              <point.icon className="size-8" />
                            </div>
                            <div className="min-w-0">
                              <p
                                className="font-heading text-[20px] font-medium capitalize leading-[27px]"
                                style={{ color: HEADER }}
                              >
                                {point.title}
                              </p>
                              <p className="mt-3 text-[16px] leading-8" style={{ color: BODY }}>
                                {point.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid min-w-0 grid-cols-2 gap-[15px] md:w-[465px] md:shrink-0">
                      {OVERVIEW_STATS.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex min-h-[240px] flex-col justify-center rounded-[20px] border px-6 backdrop-blur-xl md:h-[286px]"
                          style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                        >
                          <div
                            className="flex size-16 items-center justify-center rounded-[20px]"
                            style={{ backgroundColor: FX_SOFT, color: FX }}
                          >
                            <stat.icon size={32} />
                          </div>
                          <p
                            className="font-heading mt-6 text-[40px] font-medium leading-[54px] tracking-[-0.03em]"
                            style={{ color: HEADER }}
                          >
                            {stat.value}
                          </p>
                          <p
                            className="font-heading mt-2.5 max-w-[176px] text-[16px] font-medium leading-[22px]"
                            style={{ color: HEADER }}
                          >
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="challenge">
                  <div className="flex flex-col gap-10 md:flex-row md:gap-8">
                    <div className="flex min-w-0 flex-col gap-8 md:w-[499px] md:shrink-0 md:gap-[50px]">
                      <SectionHeading number="02" title="Challenge" />
                      <div>
                        <h3
                          className="font-heading text-[20px] font-medium capitalize leading-[27px] md:text-[24px] md:leading-8"
                          style={{ color: FX }}
                        >
                          {CHALLENGE_INTRO.title}
                        </h3>
                        <p className="mt-3 text-[16px] leading-8" style={{ color: BODY }}>
                          {CHALLENGE_INTRO.description}
                        </p>
                        <div className="mt-8 flex flex-col">
                          {CHALLENGE_LIST.map((item, idx) => (
                            <div
                              key={item.title}
                              className={`flex gap-5 py-8 first:pt-0 last:pb-0 ${
                                idx !== CHALLENGE_LIST.length - 1 ? "border-b" : ""
                              }`}
                              style={{ borderColor: CARD_BORDER }}
                            >
                              <div
                                className="flex size-16 shrink-0 items-center justify-center rounded-full"
                                style={{ backgroundColor: FX_SOFT, color: FX }}
                              >
                                <item.icon className="size-8" />
                              </div>
                              <div>
                                <p
                                  className="font-heading text-[20px] font-medium capitalize leading-[27px]"
                                  style={{ color: HEADER }}
                                >
                                  {item.title}
                                </p>
                                <p className="mt-3 text-[16px] leading-8" style={{ color: BODY }}>
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative flex min-w-0 flex-col gap-[15px] md:w-[430px] md:shrink-0">
                      <p
                        className="font-heading text-[20px] font-medium capitalize leading-[27px]"
                        style={{ color: FX }}
                      >
                        Key Challenges
                      </p>
                      <div
                        className="pointer-events-none absolute inset-x-0 top-12 h-[840px] blur-[60px]"
                        style={{ background: FX_GLOW }}
                      />
                      {CHALLENGE_CARDS.map((card) => (
                        <div
                          key={card.title}
                          className="relative flex min-h-[180px] items-center gap-6 rounded-[20px] border px-8 backdrop-blur-xl"
                          style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                        >
                          <div
                            className="flex size-16 shrink-0 items-center justify-center rounded-[18px]"
                            style={{ backgroundColor: FX_SOFT, color: FX }}
                          >
                            <card.icon size={32} />
                          </div>
                          <div>
                            <p
                              className="font-heading text-[20px] font-medium leading-[27px]"
                              style={{ color: HEADER }}
                            >
                              {card.title}
                            </p>
                            <div className="my-2.5 h-px w-6" style={{ backgroundColor: FX }} />
                            <p
                              className="text-[14px] leading-[17px] tracking-[0.01em]"
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

                <section id="discovery" className="flex flex-col gap-8">
                  <div>
                    <SectionHeading number="03" title="Discovery & Insights" />
                    <h3
                      className="font-heading mt-10 text-[24px] font-medium capitalize leading-8"
                      style={{ color: FX }}
                    >
                      {DISCOVERY_INTRO.title}
                    </h3>
                    <p className="mt-3 max-w-[710px] text-[16px] leading-8" style={{ color: BODY }}>
                      {DISCOVERY_INTRO.description}
                    </p>
                  </div>

                  <div
                    className="relative overflow-hidden rounded-[20px] border p-8"
                    style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                  >
                    <div
                      className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[355px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[85px]"
                      style={{ background: "rgba(95, 95, 255, 0.24)" }}
                    />
                    <div className="relative mx-auto aspect-[930/598] w-full max-w-[930px]">
                      <Image
                        src="/work/efx/dashboard.png"
                        alt="EmpireFX discovery and insights visual"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex fx-h-scroll gap-[25px] md:grid md:grid-cols-4 md:overflow-visible">
                    {DISCOVERY_METHODS.map((method) => (
                      <div
                        key={method.title}
                        className="flex h-[250px] w-[230px] shrink-0 flex-col justify-center rounded-[20px] border px-6 backdrop-blur-xl md:w-auto"
                        style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                      >
                        <div
                          className="flex size-16 items-center justify-center rounded-full"
                          style={{ backgroundColor: FX_SOFT, color: FX }}
                        >
                          <method.icon size={32} />
                        </div>
                        <p
                          className="font-heading mt-2.5 text-[16px] font-medium leading-[22px]"
                          style={{ color: HEADER }}
                        >
                          {method.title}
                        </p>
                        <p className="mt-2.5 text-[14px] leading-[140%]" style={{ color: BODY }}>
                          {method.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-5">
                    <p
                      className="font-heading text-[16px] font-medium capitalize leading-[22px]"
                      style={{ color: FX }}
                    >
                      Key Insights
                    </p>
                    <div className="grid gap-5 md:grid-cols-3">
                      {KEY_INSIGHTS.map((insight) => (
                        <div
                          key={insight.title}
                          className="flex min-h-[188px] flex-col gap-5 rounded-[20px] border p-5"
                          style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                        >
                          <div
                            className="flex size-14 items-center justify-center rounded-full"
                            style={{ backgroundColor: FX_SOFT, color: FX }}
                          >
                            <insight.icon size={21} />
                          </div>
                          <div>
                            <p
                              className="font-heading text-[16px] font-medium capitalize leading-[22px] tracking-[0.02em]"
                              style={{ color: HEADER }}
                            >
                              {insight.title}
                            </p>
                            <p className="mt-2.5 text-[14px] leading-[140%]" style={{ color: BODY }}>
                              {insight.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="initiatives" className="flex flex-col gap-8">
                  <div>
                    <SectionHeading number="04" title="Product Initiatives" />
                    <p className="mt-8 max-w-[686px] text-[16px] leading-8" style={{ color: BODY }}>
                      {INITIATIVES_INTRO}
                    </p>
                  </div>

                  <div
                    className="relative flex fx-h-scroll rounded-[20px] md:overflow-hidden"
                    style={{ backgroundColor: CARD }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 blur-[60px]"
                      style={{ background: FX_GLOW }}
                    />
                    {INITIATIVE_TABS.map((tab, i) => {
                      const active = i === activeInitiative;
                      return (
                        <button
                          key={tab.label}
                          onClick={() => setActiveInitiative(i)}
                          className="relative flex h-[95px] w-[166px] shrink-0 flex-col items-center justify-center gap-4 md:h-[118px] md:flex-1 md:px-1"
                        >
                          {active && (
                            <>
                              <span
                                className="absolute inset-0 hidden rounded-[20px_0_20px_20px] md:block"
                                style={{ backgroundColor: FX }}
                              />
                              <span
                                className="absolute inset-px hidden rounded-[20px_0_20px_20px] md:block"
                                style={{ backgroundColor: ELEVATED }}
                              />
                            </>
                          )}
                          {i < INITIATIVE_TABS.length - 1 && (
                            <span
                              className="absolute right-0 top-1/2 h-20 w-px -translate-y-1/2"
                              style={{ backgroundColor: CARD_BORDER }}
                            />
                          )}
                          <tab.icon
                            className="relative size-8"
                            style={{ color: active ? FX : BODY }}
                          />
                          <span
                            className="font-heading relative text-[16px] capitalize leading-[22px]"
                            style={{
                              color: active ? FX : BODY,
                              fontWeight: active ? 700 : 500,
                            }}
                          >
                            {tab.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {activeInitiative === 0 ? (
                    <div
                      className="flex flex-col gap-6 rounded-[20px] border p-6 backdrop-blur-xl md:p-6"
                      style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                    >
                      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div className="flex items-center gap-[22px]">
                          <div
                            className="flex size-[70px] shrink-0 items-center justify-center rounded-xl"
                            style={{ background: FX_GRADIENT, color: HEADER }}
                          >
                            <DASHBOARD_ICONS.header size={24} />
                          </div>
                          <div className="max-w-[569px]">
                            <p
                              className="font-heading text-[24px] font-medium leading-8"
                              style={{ color: HEADER }}
                            >
                              {DASHBOARD_INITIATIVE.title}
                            </p>
                            <p
                              className="mt-2.5 text-[16px] leading-[19px] tracking-[0.01em]"
                              style={{ color: BODY }}
                            >
                              {DASHBOARD_INITIATIVE.description}
                            </p>
                          </div>
                        </div>
                        <span
                          className="font-heading inline-flex h-11 items-center rounded-xl border px-5 text-[16px] font-medium tracking-[-0.03em]"
                          style={{ borderColor: CARD_BORDER, color: HEADER }}
                        >
                          {DASHBOARD_INITIATIVE.platforms}
                        </span>
                      </div>

                      <div
                        className="flex flex-col gap-6 rounded-[20px] border p-6 md:flex-row md:items-center md:justify-between md:px-6 md:py-8"
                        style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                      >
                        {[
                          {
                            label: "THE PROBLEM",
                            text: DASHBOARD_INITIATIVE.problem,
                            Icon: DASHBOARD_ICONS.problem,
                          },
                          {
                            label: "GOAL",
                            text: DASHBOARD_INITIATIVE.goal,
                            Icon: DASHBOARD_ICONS.goal,
                          },
                        ].map((item) => (
                          <div key={item.label} className="flex items-start gap-6">
                            <div
                              className="flex size-16 shrink-0 items-center justify-center rounded-full"
                              style={{ backgroundColor: FX_SOFT, color: FX }}
                            >
                              <item.Icon size={32} />
                            </div>
                            <div className="max-w-[361px]">
                              <p
                                className="font-heading text-[16px] font-medium leading-[22px]"
                                style={{ color: FX }}
                              >
                                {item.label}
                              </p>
                              <div className="my-2.5 h-px w-6" style={{ backgroundColor: FX }} />
                              <p
                                className="text-[14px] leading-[17px] tracking-[0.01em]"
                                style={{ color: BODY }}
                              >
                                {item.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="relative mx-auto aspect-[866/578] w-full max-w-[867px]">
                        <Image
                          src="/work/efx/dashboard.png"
                          alt="EmpireFX dashboard experience"
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <div
                          className="rounded-[20px] border p-6"
                          style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                        >
                          <div className="flex items-start gap-6">
                            <div
                              className="flex size-16 shrink-0 items-center justify-center rounded-full"
                              style={{ background: FX_GRADIENT, color: BODY_LG }}
                            >
                              <DASHBOARD_ICONS.contributions size={32} />
                            </div>
                            <div>
                              <p
                                className="font-heading text-[18px] font-bold leading-6"
                                style={{ color: HEADER }}
                              >
                                My Contributions
                              </p>
                              <div className="my-2.5 h-px w-6" style={{ backgroundColor: FX }} />
                              <p className="text-[14px] leading-[17px]" style={{ color: BODY }}>
                                What i did to solve the problem
                              </p>
                            </div>
                          </div>
                          <div className="mt-8 flex flex-col">
                            {DASHBOARD_INITIATIVE.contributions.map((item) => (
                              <div
                                key={item.title}
                                className="flex gap-6 border-t py-6"
                                style={{ borderColor: CARD_BORDER }}
                              >
                                <div
                                  className="flex size-14 shrink-0 items-center justify-center rounded-xl"
                                  style={{ backgroundColor: FX_SOFT, color: FX }}
                                >
                                  <item.icon size={24} />
                                </div>
                                <div>
                                  <p
                                    className="font-heading text-[16px] font-medium leading-[22px]"
                                    style={{ color: HEADER }}
                                  >
                                    {item.title}
                                  </p>
                                  <p
                                    className="mt-2.5 text-[14px] leading-[17px] tracking-[0.01em]"
                                    style={{ color: BODY }}
                                  >
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div
                          className="rounded-[20px] border p-6"
                          style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                        >
                          <div className="flex items-start gap-6">
                            <div
                              className="flex size-16 shrink-0 items-center justify-center rounded-full"
                              style={{ background: FX_GRADIENT, color: BODY_LG }}
                            >
                              <DASHBOARD_ICONS.impact size={32} />
                            </div>
                            <div>
                              <p
                                className="font-heading text-[18px] font-bold leading-6"
                                style={{ color: HEADER }}
                              >
                                Impact
                              </p>
                              <div className="my-2.5 h-px w-6" style={{ backgroundColor: FX }} />
                              <p className="text-[14px] leading-[17px]" style={{ color: BODY }}>
                                The outcome and value delivered
                              </p>
                            </div>
                          </div>
                          <div className="mt-8 flex flex-col">
                            {DASHBOARD_INITIATIVE.impacts.map((item) => (
                              <div
                                key={item.label}
                                className="flex items-center gap-5 border-t py-6"
                                style={{ borderColor: CARD_BORDER }}
                              >
                                <div className="flex w-[167px] shrink-0 items-start gap-4">
                                  <div
                                    className="flex size-14 shrink-0 items-center justify-center rounded-xl"
                                    style={{ backgroundColor: FX_SOFT, color: FX }}
                                  >
                                    <item.icon size={24} />
                                  </div>
                                  <div>
                                    <p
                                      className="font-heading text-[16px] font-medium leading-[22px]"
                                      style={{ color: FX }}
                                    >
                                      {item.value}
                                    </p>
                                    <p
                                      className="mt-2.5 text-[14px] leading-[17px] tracking-[0.01em]"
                                      style={{ color: BODY }}
                                    >
                                      {item.label}
                                    </p>
                                  </div>
                                </div>
                                <span
                                  className="hidden h-10 w-px shrink-0 md:block"
                                  style={{ backgroundColor: CARD_BORDER }}
                                />
                                <p
                                  className="text-[14px] leading-[17px] tracking-[0.01em]"
                                  style={{ color: BODY }}
                                >
                                  {item.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="flex flex-col gap-8 rounded-[20px] border p-6 md:flex-row md:items-center md:justify-between md:px-8"
                        style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="flex size-[70px] shrink-0 items-center justify-center rounded-full"
                            style={{ background: FX_GRADIENT, color: HEADER }}
                          >
                            <DASHBOARD_ICONS.takeaway size={24} />
                          </div>
                          <div className="max-w-[425px]">
                            <p
                              className="text-[16px] font-semibold uppercase leading-[19px] tracking-[0.03em]"
                              style={{ color: HEADER }}
                            >
                              Key Takeaway
                            </p>
                            <p className="mt-3 text-[16px] leading-[19px]" style={{ color: BODY }}>
                              {DASHBOARD_INITIATIVE.takeaway}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            className="text-[14px] font-semibold uppercase leading-[17px] tracking-[0.03em]"
                            style={{ color: FX }}
                          >
                            Project Scope
                          </p>
                          <div className="mt-[15px] flex gap-6">
                            {["Web", "IOS", "Android"].map((label) => (
                              <div
                                key={label}
                                className="flex size-[70px] flex-col items-center justify-center gap-[5px] rounded-xl"
                                style={{ backgroundColor: FX_SOFT, color: FX }}
                              >
                                <DASHBOARD_ICONS.globe size={24} />
                                <span
                                  className="text-[12px] font-medium capitalize leading-[15px]"
                                  style={{ color: HEADER }}
                                >
                                  {label}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-[518px]">
                          <p
                            className="font-heading text-[24px] font-medium leading-8"
                            style={{ color: HEADER }}
                          >
                            Experience Gallery
                          </p>
                          <p
                            className="mt-2.5 text-[16px] leading-[19px] tracking-[0.01em]"
                            style={{ color: BODY }}
                          >
                            {DASHBOARD_INITIATIVE.galleryIntro}
                          </p>
                        </div>
                        <div
                          className="flex items-start gap-5 rounded-[20px] border p-4"
                          style={{ backgroundColor: ELEVATED, borderColor: CARD_BORDER }}
                        >
                          <div
                            className="flex size-12 shrink-0 items-center justify-center rounded-xl"
                            style={{ backgroundColor: FX_SOFT, color: FX }}
                          >
                            <DASHBOARD_INITIATIVE.galleryHighlight.icon size={20} />
                          </div>
                          <div>
                            <p
                              className="font-heading text-[16px] font-medium leading-[22px]"
                              style={{ color: HEADER }}
                            >
                              {DASHBOARD_INITIATIVE.galleryHighlight.title}
                            </p>
                            <p
                              className="mt-2 text-[14px] leading-[17px] tracking-[0.01em]"
                              style={{ color: BODY }}
                            >
                              {DASHBOARD_INITIATIVE.galleryHighlight.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex border-b" style={{ borderColor: CARD_BORDER }}>
                          {(
                            [
                              { id: "web" as const, label: "Web" },
                              { id: "mobile" as const, label: "Mobile" },
                            ]
                          ).map((tab) => {
                            const active = galleryTab === tab.id;
                            return (
                              <button
                                key={tab.id}
                                onClick={() => setGalleryTab(tab.id)}
                                className="flex h-16 w-[120px] items-center justify-center gap-3 rounded-t-[20px] border text-[16px] font-bold capitalize"
                                style={{
                                  backgroundColor: active ? ELEVATED : CARD,
                                  borderColor: CARD_BORDER,
                                  color: active ? HEADER : "#5B6472",
                                }}
                              >
                                {tab.label}
                              </button>
                            );
                          })}
                        </div>
                        <div className="relative mt-4 aspect-[948/595] w-full overflow-hidden rounded-b-[20px]">
                          <Image
                            src={
                              galleryTab === "web"
                                ? "/work/empirefx.png"
                                : "/impact/empirefx-devices.png"
                            }
                            alt={`EmpireFX ${galleryTab} gallery`}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-[16px] italic" style={{ color: BODY }}>
                      {INITIATIVE_TABS[activeInitiative].label} content not yet added — waiting on
                      case study copy.
                    </p>
                  )}
                </section>

                <section id="impact" className="flex flex-col gap-8">
                  <div>
                    <SectionHeading number="05" title="Impact" />
                    <p className="mt-8 max-w-[686px] text-[16px] leading-8" style={{ color: BODY }}>
                      {IMPACT_INTRO}
                    </p>
                  </div>

                  <div className="relative flex fx-h-scroll gap-3.5 md:grid md:grid-cols-4 md:overflow-visible">
                    <div
                      className="pointer-events-none absolute inset-x-0 top-16 h-[168px] rounded-full blur-[60px]"
                      style={{ background: FX_GLOW }}
                    />
                    {IMPACT_CARDS.map((card) => (
                      <div
                        key={card.pill}
                        className="relative flex h-[232px] w-[230px] shrink-0 flex-col justify-center rounded-[20px] border px-5 backdrop-blur-xl md:w-auto"
                        style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                      >
                        <span
                          className="absolute right-3 top-3 inline-flex h-6 items-center gap-1 rounded-full border px-2 text-[9px] font-medium"
                          style={{
                            backgroundColor: FX_SOFT,
                            borderColor: FX,
                            color: FX,
                          }}
                        >
                          ↑ {card.pill}
                        </span>
                        <div
                          className="flex size-16 items-center justify-center rounded-xl"
                          style={{ backgroundColor: FX_SOFT, color: FX }}
                        >
                          <card.icon size={32} />
                        </div>
                        <p
                          className="font-heading mt-2.5 text-[16px] font-medium leading-[22px]"
                          style={{ color: HEADER }}
                        >
                          {card.title}
                        </p>
                        <p className="mt-2.5 text-[14px] leading-[140%]" style={{ color: BODY }}>
                          {card.description}
                        </p>
                        <span className="mt-2.5 h-0.5 w-[50px]" style={{ backgroundColor: FX }} />
                      </div>
                    ))}
                  </div>

                  <div
                    className="relative overflow-hidden rounded-[20px] border"
                    style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                  >
                    <div className="relative aspect-[994/617] w-full">
                      <Image
                        src="/impact/empirefx-devices.png"
                        alt="EmpireFX product impact across devices"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </section>

                <section id="reflections" className="flex flex-col gap-8">
                  <div className="flex flex-col gap-8 md:flex-row md:gap-3">
                    <div className="min-w-0 md:w-[327px] md:shrink-0">
                      <SectionHeading number="06" title="Reflections" />
                      <p className="mt-8 text-[16px] leading-8" style={{ color: BODY }}>
                        {REFLECTION_INTRO}
                      </p>
                    </div>
                    <div className="grid flex-1 gap-4 md:grid-cols-2">
                      {REFLECTION_CARDS.map((card) => (
                        <div
                          key={card.title}
                          className="flex min-h-[250px] flex-col justify-center rounded-[20px] border px-8"
                          style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                        >
                          <div
                            className="flex size-16 items-center justify-center rounded-xl"
                            style={{ backgroundColor: FX_SOFT, color: FX }}
                          >
                            <card.icon size={32} />
                          </div>
                          <p
                            className="font-heading mt-5 text-[16px] font-medium capitalize leading-[22px] tracking-[0.02em]"
                            style={{ color: HEADER }}
                          >
                            {card.title}
                          </p>
                          <p className="mt-2.5 text-[14px] leading-6" style={{ color: BODY }}>
                            {card.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-[18px] md:grid-cols-3">
                    <div
                      className="flex min-h-[250px] flex-col justify-center rounded-[20px] border px-8"
                      style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                    >
                      <QuoteMarks size={32} />
                      <p
                        className="font-heading mt-5 text-[16px] font-medium capitalize leading-8"
                        style={{ color: HEADER }}
                      >
                        {REFLECTION_QUOTE}
                      </p>
                    </div>
                    {REFLECTION_MORE.map((card) => (
                      <div
                        key={card.title}
                        className="flex min-h-[250px] flex-col justify-center rounded-[20px] border px-8"
                        style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                      >
                        <div
                          className="flex size-16 items-center justify-center rounded-xl"
                          style={{ backgroundColor: FX_SOFT, color: FX }}
                        >
                          <card.icon size={32} />
                        </div>
                        <p
                          className="font-heading mt-5 text-[16px] font-medium capitalize leading-[22px] tracking-[0.02em]"
                          style={{ color: HEADER }}
                        >
                          {card.title}
                        </p>
                        <p className="mt-2.5 text-[14px] leading-6" style={{ color: BODY }}>
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="rounded-[20px] border p-6 md:p-8"
                    style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex size-14 items-center justify-center rounded-full"
                        style={{ background: FX_GRADIENT, color: BODY }}
                      >
                        <DASHBOARD_ICONS.lightbulb size={24} />
                      </div>
                      <p
                        className="font-heading text-[20px] font-medium capitalize leading-[27px] tracking-[0.02em]"
                        style={{ color: HEADER }}
                      >
                        Key Takeways
                      </p>
                    </div>
                    <p className="mt-4 max-w-[434px] text-[16px] leading-6" style={{ color: BODY }}>
                      {KEY_TAKEAWAYS_INTRO}
                    </p>
                    <div className="mt-8 grid gap-5 md:grid-cols-4">
                      {KEY_TAKEAWAYS.map((item) => (
                        <div
                          key={item.title}
                          className="flex min-h-[218px] flex-col rounded-[19px] border p-4 backdrop-blur-xl"
                          style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                        >
                          <div
                            className="flex size-14 items-center justify-center rounded-[11px]"
                            style={{ backgroundColor: FX_SOFT, color: FX }}
                          >
                            <item.icon size={24} />
                          </div>
                          <p
                            className="font-heading mt-2.5 text-[16px] font-medium capitalize leading-[22px] tracking-[0.02em]"
                            style={{ color: HEADER }}
                          >
                            {item.title}
                          </p>
                          <p
                            className="mt-2.5 text-[14px] leading-[17px] tracking-[0.01em]"
                            style={{ color: BODY }}
                          >
                            {item.description}
                          </p>
                          <span className="mt-auto h-0.5 w-12" style={{ backgroundColor: FX }} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    id="next-project"
                    className="relative overflow-hidden rounded-[20px] border py-10"
                    style={{ backgroundColor: CARD, borderColor: CARD_BORDER }}
                  >
                    <div
                      className="pointer-events-none absolute left-1/2 top-1/2 h-[102px] w-[678px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]"
                      style={{ background: FX_GLOW }}
                    />
                    <div className="relative flex flex-col items-center gap-5">
                      <div className="flex w-full max-w-[950px] items-center gap-5 px-6">
                        <div className="h-px flex-1" style={{ backgroundColor: FX }} />
                        <div
                          className="flex size-[72px] shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: FX_SOFT, color: FX }}
                        >
                          <Heart size={32} />
                        </div>
                        <div className="h-px flex-1" style={{ backgroundColor: FX }} />
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
                    className="text-[14px] font-medium capitalize leading-[22px]"
                    style={{ color: i === activeSection ? PURPLE : BODY }}
                  >
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
