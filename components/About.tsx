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
      className="mx-5 flex flex-col gap-10 pt-20 md:mx-20 md:flex-row md:items-start md:gap-10 md:pt-40"
    >
      <div className="flex w-full shrink-0 flex-col gap-4 md:w-[480px] md:block">
        <p className="text-[14px] font-medium capitalize leading-[17px] text-[#A5B0C5]">
          ABOUT FUSIONX
        </p>
        <h2 className="text-[28px] font-bold leading-[120%] tracking-[0.02em] text-[#F8FAFC] md:mt-[17px] md:text-[48px] md:leading-tight md:tracking-[0.96px]">
          Designing products that matter.
        </h2>
        <p className="text-[16px] leading-[160%] text-[#A5B0C5] md:mt-10 md:text-[18px] md:leading-[32px]">
          FusionX is a product design studio focused on creating intuitive
          digital experiences that solve real problems and drive measurable
          results.
        </p>

        <a
          href="#about"
          className="mt-2 flex w-fit items-center gap-4 text-[18px] font-medium text-[#8777F3] md:mt-10"
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

      <div className="relative flex w-full flex-col gap-4 md:flex-1 md:pb-10">
        <div className="relative h-[326px] w-full overflow-hidden rounded-[24px] shadow-[0_0_60px_rgba(127,105,212,0.12)] md:h-[620px]">
          <Image
            src="/charlo.png"
            alt="FusionX design process illustration"
            fill
            sizes="(min-width: 768px) 700px, 400px"
            className="object-cover"
          />
        </div>

        <div className="flex items-center justify-between rounded-[24px] border border-white/[0.08] bg-[#111018] px-2 py-6 md:absolute md:inset-x-[30px] md:bottom-6 md:h-[180px] md:bg-[rgba(17,16,24,0.72)] md:px-8 md:shadow-2xl md:backdrop-blur-[16px]">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex flex-1 items-center">
              <div className="w-full text-center">
                <div className="font-heading text-[32px] font-medium leading-8 tracking-[-0.03em] text-white md:text-[64px] md:leading-[72px] md:tracking-[-1.92px]">
                  {stat.value}
                </div>
                <div className="mt-3 text-[12px] leading-5 tracking-[0.12em] text-[#7F69D4] md:text-[14px] md:tracking-[1.68px]">
                  {stat.label}
                </div>
              </div>
              {i < STATS.length - 1 && (
                <div className="h-[100px] w-px shrink-0 bg-white/[0.05] md:h-24 md:bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
