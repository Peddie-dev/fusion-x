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
    <section id="services" className="mx-5 pt-20 md:mx-10 md:pt-28 lg:mx-20 lg:pt-40">
      <div className="flex max-w-[680px] flex-col gap-4 md:block">
        <p className="text-[14px] font-medium capitalize leading-[17px] text-[#A5B0C5]">
          CAPABILITIES
        </p>
        <h2 className="text-[28px] font-bold leading-[120%] tracking-[0.02em] text-[#F8FAFC] md:mt-[17px] md:text-[48px] md:leading-tight md:tracking-[0.96px]">
          Strategic design support for ambitious product teams.
        </h2>
        <p className="text-[16px] leading-6 text-[#A5B0C5] md:mt-8 md:text-[18px] md:leading-[32px]">
          From UX research and product strategy to interface design and
          design systems, FusionX helps teams create products that are
          clear, usable, and built to scale.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-6 md:mt-16 lg:grid lg:grid-cols-3">
        {CAPABILITIES.map((cap) => (
          <div
            key={cap.title}
            className="flex flex-col gap-6 rounded-[24px] border-[1.5px] border-white/[0.08] bg-[#1B1A24] p-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:p-6"
          >
            <div className="flex h-[201px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[rgba(135,119,243,0.15)] bg-[linear-gradient(180deg,rgba(255,255,255,0.0016)_0%,rgba(255,255,255,0)_100%)]">
              <Image
                src={cap.icon}
                alt=""
                width={340}
                height={201}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[20px] font-bold leading-[120%] text-[#F8FAFC] md:text-[28px]">
                {cap.title}
              </h3>
              <p className="text-[14px] leading-[160%] text-[rgba(165,176,197,0.85)] md:text-[16px]">
                {cap.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {cap.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-xl border border-[rgba(135,119,243,0.12)] bg-[rgba(135,119,243,0.04)] px-4 py-3 text-[12px] font-medium leading-[140%] text-white md:rounded-full md:border-white/[0.08] md:bg-white/[0.06] md:px-3 md:py-1.5 md:text-[13px]"
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
