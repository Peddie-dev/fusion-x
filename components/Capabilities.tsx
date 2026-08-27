import Image from "next/image";

type Capability = {
  title: string;
  description: string;
  tags: string[];
  icon: string;
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
    <section id="services" className="mx-5 pt-20 md:mx-20 md:pt-40">
      <div className="max-w-[680px]">
        <p className="text-[12px] font-medium capitalize leading-normal text-[#A5B0C5] md:text-[14px]">
          CAPABILITIES
        </p>
        <h2 className="mt-[17px] text-[28px] font-bold leading-tight tracking-[0.96px] text-[#F8FAFC] md:text-[48px]">
          Strategic design support for ambitious product teams.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-[#A5B0C5] md:mt-8 md:text-[18px] md:leading-[32px]">
          From UX research and product strategy to interface design and
          design systems, FusionX helps teams create products that are
          clear, usable, and built to scale.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-6">
        {CAPABILITIES.map((cap) => (
          <div
            key={cap.title}
            className="rounded-[24px] border border-white/[0.08] bg-[#1B1A24] p-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          >
            <div className="mb-5 flex h-[180px] w-full items-center justify-center overflow-hidden rounded-[10px] md:h-[201px]">
              <Image
                src={cap.icon}
                alt=""
                width={340}
                height={201}
                className="h-full w-full object-contain"
              />
            </div>

            <h3 className="text-[22px] font-bold leading-[1.2] text-[#F8FAFC] md:text-[28px]">
              {cap.title}
            </h3>
            <p className="mt-3 text-[13px] leading-[1.6] text-[#A5B0C5]/85 md:text-[16px]">
              {cap.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.06] px-3 py-1.5 text-[13px] font-medium leading-[1.4] text-white"
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
