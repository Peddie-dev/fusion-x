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
      <p className="text-[12px] font-medium capitalize leading-normal text-[#A5B0C5] md:text-[14px]">
        IMPACT
      </p>
      <h2 className="mt-4 max-w-[720px] text-[28px] font-bold leading-tight tracking-[0.96px] text-[#F8FAFC] lg:text-[48px]">
        Designing products that deliver results.
      </h2>
      <p className="mt-6 max-w-[640px] text-[15px] leading-relaxed text-[#A5B0C5] md:text-[18px] md:leading-[32px]">
        Research, strategy, and design working together to improve
        experiences, streamline operations, and create measurable business
        value.
      </p>

      <div className="mt-10 flex flex-col lg:mt-16">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="border-t border-white/[0.08] py-10 lg:py-14"
          >
            <div className="grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-16">
              <div className="min-w-0">
                <div className="mb-8 flex items-center gap-4 lg:mb-10 lg:gap-6">
                  <img
                    src="/figma/impact-title-icon.svg"
                    alt=""
                    width={56}
                    height={56}
                    className="size-11 shrink-0 lg:size-14"
                  />
                  <div className="min-w-0">
                    <h3 className="text-[28px] font-bold tracking-[-1.44px] text-white lg:text-[40px]">
                      {project.name}
                    </h3>
                    <p
                      className="mt-1 text-[15px] font-medium tracking-[-0.6px] lg:text-[18px]"
                      style={{ color: project.categoryColor }}
                    >
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <img
                      src="/figma/impact-challenge.svg"
                      alt=""
                      width={40}
                      height={96}
                      className="h-24 w-9 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-[18px] font-medium tracking-[-0.24px] text-white lg:text-[22px]">
                        Challenge
                      </p>
                      <p className="mt-2 text-[14px] leading-relaxed text-[#A1A7B8] lg:text-[16px]">
                        {project.challenge}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img
                      src="/figma/impact-did.svg"
                      alt=""
                      width={40}
                      height={96}
                      className="h-24 w-9 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-[18px] font-medium tracking-[-0.24px] text-white lg:text-[22px]">
                        What we did
                      </p>
                      <p className="mt-2 text-[14px] leading-relaxed text-[#A1A7B8] lg:text-[16px]">
                        {project.whatWeDid}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img
                      src="/figma/impact-outcome.svg"
                      alt=""
                      width={40}
                      height={96}
                      className="h-24 w-9 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-[18px] font-medium tracking-[-0.24px] text-white lg:text-[22px]">
                        The Outcome
                      </p>
                      <div className="mt-3 flex flex-col gap-2">
                        {project.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-start gap-2">
                            <CheckCircle2
                              size={18}
                              className="mt-0.5 shrink-0 text-[#8777F3]"
                            />
                            <p className="text-[14px] text-[#A1A7B8] lg:text-[16px]">
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
                    className="mt-8 flex items-center gap-3 text-[16px] font-medium text-[#8777F3] lg:text-[18px]"
                  >
                    View Case Study
                    <img
                      src="/figma/arrow-up-right.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  </Link>
                ) : (
                  <span className="mt-8 flex items-center gap-3 text-[16px] font-medium text-white/30">
                    Case Study Coming Soon
                  </span>
                )}
              </div>

              <div
                className="relative aspect-[3/2] w-full min-w-0 overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] lg:aspect-[696/468] lg:max-h-[420px]"
                style={{ backgroundColor: project.imageBg }}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} product screenshot`}
                  fill
                  className="object-contain object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
