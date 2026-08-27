import { BarChart3, Palette, PieChart, Type } from "lucide-react";

const FLOATING_CARDS = [
  {
    Icon: BarChart3,
    label: "DIGITAL PRODUCTS",
    position: "left-10 top-16",
  },
  {
    Icon: Type,
    label: null,
    position: "left-16 top-40",
  },
  {
    Icon: Palette,
    label: "UI / UX DESIGN",
    position: "right-10 top-14",
  },
  {
    Icon: PieChart,
    label: "PRODUCT STRATEGY",
    position: "right-4 top-40",
  },
];

export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden pt-16 text-center md:pt-[160px]">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 90%, #4b2a8f 0%, #1a0e33 35%, #08070d 65%)",
        }}
      />

      <div className="relative z-10">
        {FLOATING_CARDS.map((card, i) => (
          <div
            key={i}
            className={`absolute hidden ${card.position} rounded-xl border border-[#8777F3]/30 bg-[#15121f] px-4 py-3 md:block`}
          >
            {card.label ? (
              <div className="flex items-center gap-2">
                <card.Icon size={16} className="text-[#8777F3]" />
                <span className="text-xs font-semibold text-white">
                  {card.label}
                </span>
              </div>
            ) : (
              <card.Icon size={20} className="text-[#8777F3]" />
            )}
          </div>
        ))}

        <div className="mx-auto max-w-[760px] px-5 md:px-10">
          <h2 className="text-[28px] font-bold leading-[120%] tracking-[-0.03em] text-[#F8FAFC] md:text-[64px] md:leading-[1.1] md:tracking-[-1.92px]">
            Designing products that move businesses{" "}
            <span className="text-white md:text-[#8777F3]">forward</span>.
          </h2>
          <p className="mx-auto mt-3 text-[16px] leading-[160%] tracking-[-0.01em] text-white md:mt-8 md:max-w-[760px] md:text-[22px] md:leading-[1.7] md:tracking-[-0.22px] md:text-[#B8B8C7]">
            We help ambitious founders and growing businesses transform
            complex ideas into intuitive digital products.
          </p>
        </div>

        <div className="h-10 md:h-24" />
      </div>
    </section>
  );
}
