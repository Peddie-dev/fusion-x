import Image from "next/image";

type Capability = {
  title: string;
  description: string;
  tags: string[];
  icon: string; // path to exported illustration
};

const CAPABILITIES: Capability[] = [
  {
    title: "UX Research & Strategy",
    description:
      "Research-driven insights that help teams understand users, identify opportunities, and make informed product decisions.",
    tags: ["Research", "Workshops", "Journey Mapping", "Information Architecture"],
    icon: "/ux-research.png",
  },
  {
    title: "Product Design",
    description:
      "Designing intuitive digital experiences that balance user needs, business goals, and technical feasibility.",
    tags: ["Web Apps", "Mobile Apps", "Dashboards", "Prototyping"],
    icon: "/product-design.png",
  },
  {
    title: "Design Systems",
    description:
      "Building scalable systems that improve consistency, accelerate delivery, and support product growth.",
    tags: ["Components", "Tokens", "Documentation", "Governance"],
    icon: "/design-systems.png",
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="mx-5 mt-20 md:mx-20 md:mt-32">
      {/* Header */}
      <div className="max-w-[700px]">
        <p className="text-xs font-medium tracking-wide text-[#A5B0C5]">
          CAPABILITIES
        </p>
          <h2 className="mt-4 text-[28px] font-bold leading-tight text-white md:text-4xl">
          Strategic design support for ambitious product teams.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-[#A5B0C5]">
          From UX research and product strategy to interface design and
          design systems, FusionX helps teams create products that are
          clear, usable, and built to scale.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {CAPABILITIES.map((cap) => (
          <div
            key={cap.title}
            className="rounded-2xl border border-white/[0.08] bg-[#15141c] p-6"
          >
            {/* Icon illustration — replace src once exported from Figma */}
            <div className="mb-5 flex h-[180px] w-full items-center justify-center overflow-hidden rounded-[10px] md:h-[201px]">
              <Image
                src={cap.icon}
                alt=""
                width={340}
                height={201}
                className="h-full w-full object-contain"
              />
            </div>

            <h3 className="text-lg font-semibold text-white">{cap.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-[#A5B0C5]">
              {cap.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}