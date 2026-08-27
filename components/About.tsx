import Image from "next/image";

const STATS = [
  { value: "8+", label: "YEARS EXPERIENCE" },
  { value: "20+", label: "PRODUCTS DELIVERED" },
  { value: "9", label: "INDUSTRIES SERVED" },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-5 flex flex-col gap-8 pt-20 md:mx-20 md:flex-row md:items-start md:gap-10 md:pt-40"
    >
      <div className="w-full shrink-0 md:w-[480px]">
        <p className="text-[12px] font-medium capitalize leading-normal text-[#A5B0C5] md:text-[14px]">
          ABOUT FUSIONX
        </p>
        <h2 className="mt-[17px] text-[28px] font-bold leading-tight tracking-[0.96px] text-[#F8FAFC] md:text-[48px]">
          Designing products that matter.
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-[#A5B0C5] md:mt-10 md:text-[18px] md:leading-[32px]">
          FusionX is a product design studio focused on creating intuitive
          digital experiences that solve real problems and drive measurable
          results.
        </p>

        <a
          href="#about"
          className="mt-10 flex w-fit items-center gap-4 text-[18px] font-medium text-[#8777F3]"
        >
          Learn More About Us
          <img
            src="/figma/arrow-up-right.svg"
            alt=""
            width={24}
            height={24}
            className="size-6"
          />
        </a>
      </div>

      <div className="relative flex-1 pb-16 md:pb-10">
        <div className="relative h-[360px] w-full overflow-hidden rounded-[24px] shadow-[0_0_60px_rgba(127,105,212,0.12)] md:h-[620px]">
          <Image
            src="/charlo.png"
            alt="FusionX design process illustration"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-x-3 bottom-6 flex items-center justify-around rounded-[24px] border border-white/[0.08] bg-[rgba(17,16,24,0.72)] px-3 py-5 shadow-2xl backdrop-blur-[16px] md:inset-x-[30px] md:h-[180px] md:px-8">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center">
                <div className="font-heading text-[28px] font-medium tracking-[-1.92px] text-white md:text-[64px] md:leading-[72px]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[9px] tracking-[1.68px] text-[#7F69D4] md:mt-3 md:text-[14px] md:leading-5">
                  {stat.label}
                </div>
              </div>
              {i < STATS.length - 1 && (
                <div className="mx-2 hidden h-24 w-px bg-white/10 md:mx-5 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
