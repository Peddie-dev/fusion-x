import Image from "next/image";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "8+", label: "YEARS EXPERIENCE" },
  { value: "20+", label: "PRODUCTS DELIVERED" },
  { value: "9", label: "INDUSTRIES SERVED" },
];

export default function About() {
  return (
    <section id="about" className="mx-5 mt-20 flex flex-col gap-8 md:mx-20 md:mt-32 md:flex-row md:gap-12">
      {/* Left: copy */}
      <div className="w-full shrink-0 pt-0 md:w-[340px] md:pt-5">
        <p className="text-xs font-medium tracking-wide text-[#A5B0C5]">
          ABOUT FUSIONX
        </p>
          <h2 className="mt-4 text-[28px] font-bold leading-tight text-white md:text-[32px]">
          Designing products that matter.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#A5B0C5]">
          FusionX is a product design studio focused on creating intuitive
          digital experiences that solve real problems and drive
          measurable results.
        </p>
        
         <a href="#"
          className="mt-5 flex w-fit items-center gap-2 text-sm text-[#8B6EF6]"
        >
          Learn More About Us
          <ArrowRight size={14} />
        </a>
      </div>

      {/* Right: portrait + floating UI graphic, with overlapping stats bar */}
      <div className="relative flex-1 pb-10">
        <div className="relative h-[360px] w-full overflow-hidden rounded-2xl">
          <Image
            src="/charlo.png"
            alt="FusionX design process illustration"
            fill
            className="object-cover"
          />
        </div>

        {/* Stats bar — overlaps the bottom of the image */}
        <div className="absolute inset-x-3 -bottom-2 flex items-center justify-around rounded-2xl border border-white/10 bg-[#15141c]/95 px-3 py-4 shadow-2xl backdrop-blur md:inset-x-5 md:px-8 md:py-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-bold text-white md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[9px] tracking-wide text-[#A5B0C5] md:text-[11px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}