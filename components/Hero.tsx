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
    <section className="relative mx-20 mt-16 overflow-hidden">
      {/* Animated orb — absolutely positioned per Figma (top:188.6px, left:864px) */}
      <div className="pointer-events-none absolute right-0 top-4 h-[380px] w-[500px]">
  <Image
    src="/orb.png"
    alt=""
    width={500}
    height={380}
    priority
    className="h-full w-full object-contain"
  />
</div>

      {/* Copy block — 754px wide per Figma */}
      <div className="relative z-10 max-w-[754px]">
        <p className="text-xs font-medium tracking-wide text-[#A5B0C5]">
          DIGITAL PRODUCT SYSTEMS
        </p>

        <h1 className="mt-4 text-[44px] font-bold leading-[1.15] text-white">
          Designing Digital Experiences that{" "}
          <span className="text-[#6E7CF6]">Connect</span> and{" "}
          <span className="text-[#8B6EF6]">Convert</span>.
        </h1>

        <p className="mt-5 max-w-[600px] text-base leading-relaxed text-[#A5B0C5]">
          From product strategy to commerce systems, we help ambitious
          brands design experiences that scale with confidence.
        </p>

        <div className="mt-7 flex items-center gap-4">
          <button
            className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#6E7CF6] to-[#8B6EF6] py-3 pl-6 pr-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Start a Project
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#6E7CF6]">
              <ArrowUpRight size={16} />
            </span>
          </button>

          <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5">
            Explore Work
          </button>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 mt-24">
        <p className="text-xs font-medium tracking-wide text-[#A5B0C5]">
          TRUSTED BY FORWARD-THINKING BRANDS
        </p>
        <div className="mt-6 flex w-full max-w-[754px] items-center justify-between">
  {BRAND_LOGOS.map((logo) => (
    <Image
      key={logo.name}
      src={logo.src}
      alt={logo.name}
      width={120}
      height={32}
      style={{ width: "auto", height: "32px" }}
      className="opacity-80"
    />
  ))}
</div>
      </div>
    </section>
  );
}