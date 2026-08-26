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
    <section className="relative isolate overflow-hidden pt-16 text-center">
      {/* Background glow — z-0, NOT negative, so it stays inside this section's stacking context */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 90%, #4b2a8f 0%, #1a0e33 35%, #08070d 65%)",
        }}
      />

      {/* Foreground content */}
      <div className="relative z-10">
        {FLOATING_CARDS.map((card, i) => (
          <div
            key={i}
            className={`absolute hidden ${card.position} rounded-xl border border-[#8B6EF6]/30 bg-[#15121f] px-4 py-3 md:block`}
          >
            {card.label ? (
              <div className="flex items-center gap-2">
                <card.Icon size={16} className="text-[#8B6EF6]" />
                <span className="text-xs font-semibold text-white">
                  {card.label}
                </span>
              </div>
            ) : (
              <card.Icon size={20} className="text-[#8B6EF6]" />
            )}
          </div>
        ))}

        <div className="mx-auto max-w-[640px] px-5 md:px-10">
          <h2 className="text-[28px] font-bold leading-tight text-white md:text-[38px]">
            Designing products that move businesses{" "}
            <span className="text-[#8B6EF6]">forward</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] text-[#A5B0C5]">
            We help ambitious founders and growing businesses transform
            complex ideas into intuitive digital products.
          </p>
        </div>

        <div className="h-16" />
      </div>
    </section>
  );
}