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
    caseStudyHref: "/work/empirefx",
  },
];

function CircleArrow({
  size = 40,
  accent,
}: {
  size?: number;
  accent?: string;
}) {
  const icon = size >= 48 ? 18 : size <= 32 ? 12 : 15;
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
    >
      <span
        className="absolute inset-[1px] rounded-full border"
        style={{ borderColor: accent ?? "rgba(255,255,255,0.2)" }}
      />
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
    <section id="work" className="mx-5 scroll-mt-24 pt-20 md:mx-20 md:scroll-mt-32 md:pt-40">
      <div className="flex flex-col gap-4 md:block">
        <p className="text-[14px] font-medium capitalize leading-[17px] text-[#A5B0C5]">
          SELECTED WORK
        </p>
        <h2 className="max-w-[924px] text-[24px] font-bold leading-8 tracking-[0.02em] text-[#F8FAFC] md:mt-[17px] md:text-[48px] md:leading-tight md:tracking-[0.96px]">
          Designing products that solve real-world business challenges.
        </h2>
        <p className="max-w-[680px] text-[16px] leading-6 text-[#A5B0C5] md:hidden">
          A selection of projects showcasing how research, design, and
          systems thinking come together to solve real business challenges.
        </p>
      </div>

      <div className="mt-[38px] hidden items-end justify-between md:flex">
        <p className="max-w-[680px] text-[18px] leading-[32px] text-[#A5B0C5]">
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

      <div className="mt-10 flex flex-col gap-6 md:mt-[88px] md:gap-[35px]">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className="flex flex-col gap-6 rounded-[24px] bg-[#1B1A24] p-5 lg:h-[536px] lg:flex-row-reverse lg:gap-0 lg:overflow-hidden lg:border lg:border-white/[0.08] lg:p-0 lg:shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          >
            <div
              className="relative h-[222px] w-full overflow-hidden rounded-lg lg:m-10 lg:ml-0 lg:h-auto lg:min-h-0 lg:flex-1 lg:rounded-[20px]"
              style={{ backgroundColor: project.screenshotBg }}
            >
              <Image
                src={project.screenshot}
                alt={`${project.name} product screenshot`}
                fill
                sizes="(min-width: 1024px) 50vw, 360px"
                className="object-cover object-top"
              />
            </div>

            <div className="flex w-full min-w-0 shrink-0 flex-col lg:w-[400px] lg:px-10 lg:py-10">
              <span
                className="mb-3 flex size-8 items-center justify-center rounded-full border lg:mb-4 lg:size-9 lg:border-white/20"
                style={{ borderColor: project.accent }}
              >
                <img
                  src="/figma/arrow-up-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-4"
                />
              </span>

              <div
                className="mb-3 flex items-center gap-3 text-[12px] leading-[150%] opacity-85"
                style={{ color: project.accent }}
              >
                <span
                  className="size-1 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                {project.category}
              </div>

              <h3 className="text-[20px] font-bold leading-[110%] text-[#F8FAFC] lg:text-[40px] lg:leading-[1.1]">
                {project.name}
              </h3>

              <p className="mt-3 text-[14px] leading-[160%] text-[rgba(165,176,197,0.85)] lg:mt-4 lg:max-w-[320px] lg:text-[16px] lg:leading-[1.5]">
                {project.description}
              </p>

              <div className="mt-6 border-t border-white/[0.08] pt-6">
                <p className="text-[12px] font-medium tracking-[0.04em] text-[#7A8197]">
                  INDUSTRY
                </p>
                <p
                  className="mt-2 text-[14px] leading-[150%]"
                  style={{ color: project.accent }}
                >
                  {project.industry}
                </p>
              </div>

              <div className="mt-3">
                <p className="text-[12px] font-medium tracking-[0.04em] text-[#7A8197]">
                  SERVICES
                </p>
                <p className="mt-2 text-[14px] leading-[150%] text-white lg:text-[15px]">
                  {project.services}
                </p>
              </div>

              {project.caseStudyHref ? (
                <Link
                  href={project.caseStudyHref}
                  className="mt-3 flex items-center gap-4 pt-3 text-[14px] font-medium text-[#F8FAFC] lg:mt-auto lg:pt-6 lg:text-[16px]"
                >
                  Read Case Study
                  <CircleArrow size={32} accent={project.accent} />
                </Link>
              ) : (
                <span className="mt-3 flex items-center gap-4 pt-3 text-[14px] font-medium text-[#F8FAFC] lg:mt-auto lg:pt-6 lg:text-[16px]">
                  Read Case Study
                  <CircleArrow size={32} accent={project.accent} />
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
