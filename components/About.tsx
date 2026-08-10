import Image from "next/image";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "8+", label: "YEARS EXPERIENCE" },
  { value: "20+", label: "PRODUCTS DELIVERED" },
  { value: "9", label: "INDUSTRIES SERVED" },
];

export default function About() {
  return (
    <section className="mx-20 mt-32 flex gap-12">
      {/* Left: copy */}
      <div className="w-[340px] shrink-0 pt-5">
        <p className="text-xs font-medium tracking-wide text-[#A5B0C5]">
          ABOUT FUSIONX
        </p>
        <h2 className="mt-4 text-[32px] font-bold leading-tight text-white">
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
        <div className="absolute inset-x-5 -bottom-2 flex items-center justify-around rounded-2xl border border-white/10 bg-[#15141c]/95 px-8 py-6 shadow-2xl backdrop-blur">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] tracking-wide text-[#A5B0C5]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}