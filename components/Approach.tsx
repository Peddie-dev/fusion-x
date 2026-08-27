"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STAGES = [
  {
    name: "Research",
    description:
      "Understand users, behaviors, and opportunities through interviews, field studies, and usability testing.",
    image: "/approach/research-overview.png",
  },
  {
    name: "Strategy",
    description:
      "Translate research insights into product direction, priorities, and measurable outcomes.",
    image: "/approach/strategy-overview.png",
  },
  {
    name: "Design",
    description:
      "Transform your ideas into intuitive interfaces, prototypes, and scalable design systems.",
    image: "/approach/design-overview.png",
  },
  {
    name: "Scale",
    description:
      "Measure impact, refine user experiences, and drive sustainable growth through continuous optimization and iteration.",
    image: "/approach/scale-overview.png",
  },
];

export default function Approach() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = STAGES[activeIndex];

  const goPrev = () =>
    setActiveIndex((i) => (i === 0 ? STAGES.length - 1 : i - 1));
  const goNext = () =>
    setActiveIndex((i) => (i === STAGES.length - 1 ? 0 : i + 1));

  return (
    <section
      id="process"
      className="mx-5 flex flex-col gap-8 overflow-x-hidden pt-20 md:mx-20 lg:flex-row lg:gap-12 lg:pt-40 xl:gap-16"
    >
      <div className="w-full min-w-0 lg:max-w-[380px] lg:shrink-0 xl:max-w-[424px]">
        <p className="text-[12px] font-medium capitalize leading-normal text-[#A5B0C5] md:text-[14px]">
          OUR APPROACH
        </p>
        <h2 className="mt-[17px] text-[28px] font-bold leading-none tracking-[-2.16px] text-[#F8FAFC] lg:text-[56px] xl:text-[72px]">
          How great products come to life.
        </h2>

        <div className="mt-10 flex flex-col">
          {STAGES.map((stage, i) => (
            <div
              key={stage.name}
              className="border-t border-white/[0.08] last:border-b"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`w-full py-4 text-left text-[22px] font-medium leading-[1.1] transition-colors ${
                  i === activeIndex
                    ? "text-white"
                    : "text-[#6E7384] hover:text-white/70"
                }`}
              >
                {stage.name}
              </button>
              {i === activeIndex && (
                <p className="pb-4 text-[16px] font-medium leading-[1.4] text-[#B1B4C5]">
                  {stage.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-[#8777F3]/30 bg-[#0d0c14] p-4 pb-16">
        <Image
          key={active.image}
          src={active.image}
          alt={`${active.name} overview`}
          width={640}
          height={420}
          className="h-auto w-full object-contain"
        />

        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous stage"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#15121f] text-white hover:bg-white/10"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next stage"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#15121f] text-white hover:bg-white/10"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
