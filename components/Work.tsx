import Image from "next/image";
import Link from "next/link";

type Project = {
  name: string;
  category: string;
  description: string;
  industry: string;
  services: string;
  accent: string;
  screenshot: string;
  screenshotBg: string;
  caseStudyHref?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Digifarm",
    category: "AGRITECH PLATFORM",
    description:
      "Connecting farmers, buyers, and field agents through digital collection and trading experiences.",
    industry: "Agritech",
    services: "Product Design, UX Research, UI Design",
    accent: "#72C16B",
    screenshot: "/work/digifarm.png",
    screenshotBg: "#ffffff",
    caseStudyHref: "/work",
  },
  {
    name: "AfroCom",
    category: "COMMUNITY PLATFORM",
    description:
      "Connecting the global Afro-community through a platform for collaboration, opportunity, and collective growth.",
    industry: "Community Technology",
    services: "Product Design, UX Strategy, Design System",
    accent: "#7F69D4",
    screenshot: "/work/afrocom.png",
    screenshotBg: "#fdf6e3",
  },
  {
    name: "EmpireFX",
    category: "FINTECH PLATFORM",
    description:
      "Helping traders and investors manage global markets through a secure and intuitive digital trading experience.",
    industry: "Fintech Technology",
    services: "Product Design, Design System",
    accent: "#5F5FFF",
    screenshot: "/work/empirefx.png",
    screenshotBg: "#1a1a3d",
  },
];

function CircleArrow({ size = 40 }: { size?: number }) {
  const icon = size >= 48 ? 18 : 15;
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
    >
      <span className="absolute inset-[1px] rounded-full border border-white/20" />
      <img
        src="/figma/arrow-up-right.svg"
        alt=""
        width={icon}
        height={icon}
        className="relative"
        style={{ width: icon, height: icon }}
      />
    </span>
  );
}

export default function Work() {
  return (
    <section className="mx-5 pt-20 md:mx-20 md:pt-40">
      <p className="text-[12px] font-medium capitalize leading-normal text-[#A5B0C5] md:text-[14px]">
        SELECTED WORK
      </p>
      <h2 className="mt-[17px] max-w-[924px] text-[28px] font-bold leading-tight tracking-[0.96px] text-[#F8FAFC] md:text-[48px]">
        Designing products that solve real-world business challenges.
      </h2>

      <div className="mt-8 flex flex-col gap-6 md:mt-[38px] md:flex-row md:items-end md:justify-between">
        <p className="max-w-[680px] text-[15px] leading-relaxed text-[#A5B0C5] md:text-[18px] md:leading-[32px]">
          A selection of projects showcasing how research, design, and
          systems thinking come together to solve real business challenges.
        </p>

        <Link
          href="/work"
          className="flex shrink-0 items-center gap-4 text-[16px] font-medium text-[#F8FAFC]"
        >
          View More
          <CircleArrow size={50} />
        </Link>
      </div>

      <div className="mt-10 flex flex-col gap-[35px] md:mt-[88px]">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className="flex min-h-0 min-w-0 flex-col-reverse overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#1B1A24] shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:h-[536px] lg:flex-row"
          >
            <div className="flex w-full min-w-0 shrink-0 flex-col px-5 py-6 lg:w-[400px] lg:px-10 lg:py-10">
              <span className="mb-4 flex size-9 items-center justify-center rounded-full border border-white/20">
                <img
                  src="/figma/arrow-up-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-4"
                />
              </span>

              <div
                className="mb-2 flex items-center gap-3 text-[12px] leading-[1.5] opacity-85"
                style={{ color: project.accent }}
              >
                <span
                  className="size-1 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                {project.category}
              </div>

              <h3 className="text-[32px] font-bold leading-[1.1] text-[#F8FAFC] md:text-[40px]">
                {project.name}
              </h3>

              <p className="mt-4 max-w-[320px] text-[16px] leading-[1.5] text-[#A5B0C5]/85">
                {project.description}
              </p>

              <div className="mt-6 border-t border-white/[0.08] pt-6">
                <p className="text-[12px] font-medium tracking-[0.48px] text-[#7A8197]">
                  INDUSTRY
                </p>
                <p
                  className="mt-1.5 text-[15px] leading-[1.5]"
                  style={{ color: project.accent }}
                >
                  {project.industry}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-[12px] font-medium tracking-[0.48px] text-[#7A8197]">
                  SERVICES
                </p>
                <p className="mt-1.5 text-[15px] leading-[1.5] text-white">
                  {project.services}
                </p>
              </div>

              {project.caseStudyHref ? (
                <Link
                  href={project.caseStudyHref}
                  className="mt-auto flex items-center gap-4 pt-6 text-[16px] font-medium text-[#F8FAFC]"
                >
                  Read Case Study
                  <CircleArrow size={40} />
                </Link>
              ) : (
                <span className="mt-auto flex items-center gap-4 pt-6 text-[16px] font-medium text-white/30">
                  Read Case Study
                  <CircleArrow size={40} />
                </span>
              )}
            </div>

            <div
              className="relative min-h-[220px] min-w-0 flex-1 overflow-hidden lg:m-10 lg:ml-0 lg:min-h-0 lg:rounded-[20px]"
              style={{ backgroundColor: project.screenshotBg }}
            >
              <Image
                src={project.screenshot}
                alt={`${project.name} product screenshot`}
                fill
                className="object-cover object-top"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
