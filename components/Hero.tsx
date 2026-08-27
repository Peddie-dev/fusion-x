import Image from "next/image";

const BRAND_LOGOS = [
  { name: "EmpireFX", src: "/logos/empirefx.png", height: 31 },
  { name: "Safaricom", src: "/logos/safaricom.png", height: 40 },
  { name: "Equity", src: "/logos/equity.png", height: 51 },
  { name: "DigiFarm", src: "/logos/digifarm.png", height: 39 },
  { name: "Cellulant", src: "/logos/cellulant.png", height: 45 },
];

function Orb({ className }: { className: string }) {
  return (
    <div className={className} aria-hidden>
      <div
        className="pointer-events-none absolute -right-[10%] -top-[10%] h-[120%] w-[120%] rounded-full opacity-90 blur-[63px] md:blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at 45% 50%, rgba(79,140,255,0.5) 0%, rgba(135,119,243,0.42) 36%, rgba(135,119,243,0) 68%)",
        }}
      />
      <div className="absolute inset-0 mix-blend-screen">
        <Image
          src="/orb.png"
          alt=""
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 440px, 700px"
        />
      </div>
    </div>
  );
}

function StartProjectButton({ gradient }: { gradient: string }) {
  return (
    <a
      href="#contact"
      className="flex h-[50px] w-[181px] shrink-0 items-center gap-[11px] rounded-[34px] pl-[19px] pr-1 text-[15px] font-medium text-[#F8FAFC] shadow-[0_8px_13px_rgba(0,0,0,0.25)]"
      style={{ backgroundImage: gradient }}
    >
      Start a Project
      <span className="flex size-[42px] items-center justify-center rounded-full bg-[#F6F8FC]">
        <img
          src="/figma/arrow-up-right.svg"
          alt=""
          width={20}
          height={20}
          className="size-5"
        />
      </span>
    </a>
  );
}

export default function Hero() {
  return (
    <section className="relative">
      <Orb className="pointer-events-none absolute -top-[120px] right-0 z-0 hidden aspect-square w-[min(620px,42%)] md:block" />

      {/* Mobile copy — Figma 440px */}
      <div className="relative z-10 mx-5 mt-[72px] md:hidden">
        <div className="flex max-w-[754px] flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-[12px] font-medium capitalize leading-[15px] text-[#A5B0C5]">
              DIGITAL PRODUCT SYSTEMS
            </p>
            <h1 className="text-[35px] font-bold leading-[43px] tracking-[0.02em] text-white">
              Designing Digital Experiences that{" "}
              <span className="text-[#4F8CFF]">Connect</span> and{" "}
              <span className="text-[#8777F3]">Convert</span>.
            </h1>
          </div>

          <div className="flex flex-col gap-10">
            <p className="text-[16px] leading-6 text-[#A5B0C5]">
              From product strategy to commerce systems, we help ambitious brands
              design experiences that scale with confidence.
            </p>
            <div className="flex items-center gap-5">
              <StartProjectButton gradient="linear-gradient(270deg, #8777F3 0%, #6E82FF 55%, #4F8CFF 100%)" />
              <a
                href="/work"
                className="flex h-[50px] min-w-0 flex-1 items-center justify-center rounded-[40px] border border-[#4F8CFF] text-[15px] font-medium text-[#F8FAFC] shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              >
                Explore Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop copy — restored pixel layout */}
      <div className="relative z-10 mx-5 mt-10 hidden md:mx-20 md:mt-[108px] md:block">
        <div className="max-w-[754px]">
          <p className="text-[12px] font-medium capitalize leading-normal text-[#A5B0C5]">
            DIGITAL PRODUCT SYSTEMS
          </p>

          <h1 className="mt-6 text-[32px] font-bold leading-normal tracking-[1px] text-white md:text-[50px]">
            Designing Digital Experiences that{" "}
            <span className="text-[#4F8CFF]">Connect</span> and{" "}
            <span className="text-[#8777F3]">Convert</span>.
          </h1>

          <p className="mt-[30px] max-w-[729px] text-[15px] leading-relaxed text-[#A5B0C5] md:text-[18px] md:leading-[32px]">
            From product strategy to commerce systems, we help ambitious brands
            design experiences that scale with confidence.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5">
            <StartProjectButton gradient="linear-gradient(90deg, #4F8CFF 0%, #6E82FF 55%, #8777F3 100%)" />
            <a
              href="/work"
              className="flex h-[50px] w-[180px] shrink-0 items-center justify-center rounded-[40px] border border-[#4F8CFF] text-[15px] font-medium text-[#F8FAFC] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-colors hover:bg-white/5"
            >
              Explore Work
            </a>
          </div>
        </div>
      </div>

      <Orb className="relative z-0 mx-auto mt-0 h-[min(440px,100vw)] w-full max-w-[440px] md:hidden" />

      <div className="relative z-20 mx-5 mt-5 isolate md:hidden">
        <p className="text-[12px] font-medium capitalize leading-[15px] text-[#A5B0C5]">
          TRUSTED BY FORWARD-THINKING BRANDS
        </p>
        <div className="mt-5 overflow-hidden">
          <div className="fx-marquee flex w-max items-center gap-8">
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
              <Image
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={i < BRAND_LOGOS.length ? logo.name : ""}
                width={180}
                height={logo.height}
                className="h-[28px] w-auto max-w-[110px] shrink-0 object-contain opacity-70"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-5 mt-10 isolate hidden md:mx-20 md:mt-16 md:block">
        <p className="text-[12px] font-medium capitalize leading-normal text-[#A5B0C5]">
          TRUSTED BY FORWARD-THINKING BRANDS
        </p>
        <div className="mt-10 flex w-full items-center justify-between gap-4 overflow-x-auto md:gap-6">
          {BRAND_LOGOS.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={180}
              height={logo.height}
              className="h-6 w-auto max-w-[178px] shrink-0 object-contain opacity-80 md:h-8"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
