import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const BRAND_LOGOS = [
  { name: "EmpireFX", src: "/logos/empirefx.png" },
  { name: "Safaricom", src: "/logos/safaricom.png" },
  { name: "Equity", src: "/logos/equity.png" },
  { name: "DigiFarm", src: "/logos/digifarm.png" },
  { name: "Cellulant", src: "/logos/cellulant.png" },
];

export default function Hero() {
  return (
    <section className="relative mx-5 mt-10 overflow-x-hidden md:mx-20 md:mt-24">
      {/* Glow behind the orb — desktop, top-right */}
      <div
        className="pointer-events-none absolute -right-16 -top-20 hidden h-[400px] w-[400px] rounded-full blur-3xl md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(139,110,246,0.55) 0%, rgba(110,124,246,0.35) 45%, transparent 75%)",
        }}
      />

      {/* Orb asset — desktop */}
      <div className="pointer-events-none absolute -right-10 -top-16 hidden h-[380px] w-[380px] md:block">
        <Image
          src="/orb.png"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Copy block */}
      <div className="relative z-10 max-w-[560px]">
        <p className="text-xs font-medium tracking-wide text-[#A5B0C5]">
          DIGITAL PRODUCT SYSTEMS
        </p>

        <h1 className="mt-4 text-[32px] font-bold leading-[1.15] text-white md:text-[44px]">
          Designing Digital Experiences
          <br />
          that <span className="text-[#6E7CF6]">Connect</span> and{" "}
          <span className="text-[#8B6EF6]">Convert</span>.
        </h1>

        <p className="mt-5 max-w-[500px] text-[15px] leading-relaxed text-[#A5B0C5] md:text-base">
          From product strategy to commerce systems, we help ambitious
          brands design experiences that scale with confidence.
        </p>

        <div className="mt-7 flex items-center gap-3">
          <button className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#6E7CF6] to-[#8B6EF6] py-3 pl-5 pr-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90 md:pl-6">
            Start a Project
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#6E7CF6]">
              <ArrowUpRight size={16} />
            </span>
          </button>

          <button className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 md:px-6">
            Explore Work
          </button>
        </div>
      </div>

      {/* Orb — mobile, overlapping the copy so logos have a full-width row */}
      <div className="relative z-0 mx-auto -mt-10 h-[260px] w-[260px] md:hidden">
        <div
          className="pointer-events-none absolute inset-0 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139,110,246,0.55) 0%, rgba(110,124,246,0.35) 45%, transparent 75%)",
          }}
        />
        <Image
          src="/orb.png"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Trust bar */}
      <div className="relative z-10 mt-4 md:mt-24">
        <p className="text-xs font-medium tracking-wide text-[#A5B0C5]">
          TRUSTED BY FORWARD-THINKING BRANDS
        </p>
        <div className="mt-5 grid w-full grid-cols-5 items-center gap-3 md:mt-6 md:gap-6">
          {BRAND_LOGOS.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={120}
              height={32}
              className="h-6 w-auto max-w-full justify-self-center object-contain opacity-70 md:h-7"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
