import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

type Project = {
  name: string;
  category: string;
  categoryColor: string;
  challenge: string;
  whatWeDid: string;
  outcomes: string[];
  image: string;
  imageBg: string;
  caseStudyHref?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Digifarm",
    category: "Agritech Platform",
    categoryColor: "#72C16B",
    challenge:
      "Managing collections across farmers, agents, and buyers created operational complexity and visibility gaps.",
    whatWeDid:
      "Conducted field research, usability testing, and workflow analysis to redesign collection experiences for farmers, agents, and buyers.",
    outcomes: [
      "42+ research sessions conducted",
      "5+ field visits completed",
      "Collection workflows redesigned",
    ],
    image: "/impact/digifarm-devices.png",
    imageBg: "#0d0d12",
    caseStudyHref: "/work",
  },
  {
    name: "EmpireFX",
    category: "Trading Platform",
    categoryColor: "#5F5FFF",
    challenge:
      "Traders needed a faster, more intuitive platform to analyze markets, manage positions, and execute trades with confidence.",
    whatWeDid:
      "Conducted user research, simplified trading workflows, and redesigned the platform experience to improve usability.",
    outcomes: [
      "Improved onboarding completion",
      "Simplified trading workflows",
      "Enhanced trader confidence",
    ],
    image: "/impact/empirefx-devices.png",
    imageBg: "#0d0d12",
  },
  {
    name: "AfroCom",
    category: "Community Platform",
    categoryColor: "#7F69D4",
    challenge:
      "Building a platform that could connect communities, businesses, and creators while making discovery and engagement seamless.",
    whatWeDid:
      "Defined the product strategy, mapped user journeys, and designed a scalable community experience focused on connection and growth.",
    outcomes: [
      "Improved community engagement",
      "Increased content discovery",
      "Enabled scalable growth",
    ],
    image: "/impact/afrocom-devices.png",
    imageBg: "#0d0d12",
  },
];

export default function Impact() {
  return (
    <section className="mx-5 overflow-x-hidden pt-20 md:mx-20 md:pt-40">
      <div className="flex flex-col gap-4">
        <p className="text-[14px] font-medium capitalize leading-[17px] text-[#A5B0C5]">
          IMPACT
        </p>
        <h2 className="max-w-[720px] text-[28px] font-bold leading-[120%] tracking-[0.02em] text-[#F8FAFC] lg:text-[48px] lg:leading-tight lg:tracking-[0.96px]">
          Designing products that deliver results.
        </h2>
        <p className="max-w-[640px] text-[16px] leading-[160%] text-[#A5B0C5] md:text-[18px] md:leading-[32px]">
          Research, strategy, and design working together to improve
          experiences, streamline operations, and create measurable business
          value.
        </p>
      </div>
      <div className="mt-8 h-px w-full bg-white/[0.08] lg:hidden" />

      <div className="mt-10 flex flex-col gap-8 lg:mt-16 lg:gap-0">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="lg:border-t lg:border-white/[0.08] lg:py-14"
          >
            <div className="grid min-w-0 grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-16">
              <div className="flex items-center gap-6">
                <img
                  src="/figma/impact-title-icon.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="size-14 shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-[24px] font-bold leading-8 tracking-[-0.03em] text-white lg:text-[40px] lg:tracking-[-1.44px]">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-[16px] font-medium tracking-[-0.03em] text-[#8777F3] lg:hidden">
                    {project.category}
                  </p>
                  <p
                    className="mt-1 hidden text-[18px] font-medium tracking-[-0.6px] lg:block"
                    style={{ color: project.categoryColor }}
                  >
                    {project.category}
                  </p>
                </div>
              </div>

              <div
                className="relative h-[240px] w-full min-w-0 overflow-hidden rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] lg:col-start-2 lg:row-span-2 lg:h-auto lg:aspect-[696/468] lg:max-h-[420px] lg:rounded-[24px]"
                style={{ backgroundColor: project.imageBg }}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} product screenshot`}
                  fill
                  className="object-contain object-center"
                  sizes="(min-width: 1024px) 50vw, 400px"
                />
              </div>

              <div className="min-w-0">
                <div className="flex flex-col">
                  <div className="flex gap-6">
                    <img
                      src="/figma/impact-challenge.svg"
                      alt=""
                      width={48}
                      height={96}
                      className="h-auto w-12 shrink-0"
                    />
                    <div className="min-w-0 pb-5">
                      <p className="text-[20px] font-medium tracking-[-0.01em] text-white lg:text-[22px]">
                        Challenge
                      </p>
                      <p className="mt-3 text-[16px] leading-[160%] text-[#A1A7B8]">
                        {project.challenge}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <img
                      src="/figma/impact-did.svg"
                      alt=""
                      width={48}
                      height={96}
                      className="h-auto w-12 shrink-0"
                    />
                    <div className="min-w-0 pb-5">
                      <p className="text-[20px] font-medium tracking-[-0.01em] text-white lg:text-[22px]">
                        What we did
                      </p>
                      <p className="mt-3 text-[16px] leading-[160%] text-[#A1A7B8]">
                        {project.whatWeDid}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <img
                      src="/figma/impact-outcome.svg"
                      alt=""
                      width={48}
                      height={96}
                      className="h-auto w-12 shrink-0"
                    />
                    <div className="min-w-0 pb-5">
                      <p className="text-[20px] font-medium tracking-[-0.01em] text-white lg:text-[22px]">
                        The Outcome
                      </p>
                      <div className="mt-3 flex flex-col gap-2">
                        {project.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-center gap-2.5">
                            <CheckCircle2
                              size={20}
                              className="shrink-0 text-[#8777F3]"
                            />
                            <p className="text-[16px] leading-[160%] text-[#A1A7B8]">
                              {outcome}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {project.caseStudyHref ? (
                  <Link
                    href={project.caseStudyHref}
                    className="mt-6 flex items-center gap-4 text-[18px] font-medium text-[#8777F3]"
                  >
                    View Case Study
                    <img
                      src="/figma/arrow-up-right.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="size-6"
                    />
                  </Link>
                ) : (
                  <span className="mt-6 flex items-center gap-4 text-[18px] font-medium text-white/30">
                    Case Study Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
