import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Target, Wrench, TrendingUp, CheckCircle2 } from "lucide-react";

const BRAND = "#8B6EF6";

type Project = {
  name: string;
  category: string;
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
    imageBg: "#ffffff",
    caseStudyHref: "/work",
  },
  {
    name: "AfroCom",
    category: "Community Platform",
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
    imageBg: "#1a1a2e",
  },
  {
    name: "EmpireFX",
    category: "Trading Platform",
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
    imageBg: "#1a1a3d",
  },
];

export default function Impact() {
  return (
    <section className="mx-5 mt-20 md:mx-20 md:mt-32">
      <p className="text-xs font-medium tracking-wide text-[#A5B0C5]">IMPACT</p>
      <h2 className="mt-4 max-w-[600px] text-[28px] font-bold leading-tight text-white md:text-[32px]">
        Designing products that deliver results.
      </h2>
      <p className="mt-4 max-w-[500px] text-sm leading-relaxed text-[#A5B0C5]">
        Research, strategy, and design working together to improve
        experiences, streamline operations, and create measurable business
        value.
      </p>

      <div className="mt-10 flex flex-col">
        {PROJECTS.map((project, idx) => (
          <div key={project.name}>
            <div className="border-t border-white/[0.08]" />
            <div className="flex flex-col gap-8 py-10 md:flex-row md:gap-12 md:py-14">
              {/* Left: text panel */}
              <div className="w-full shrink-0 md:w-[320px]">
                <div
                  className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border"
                  style={{ borderColor: BRAND, color: BRAND }}
                >
                  <ArrowUpRight size={16} />
                </div>

                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                <p className="mb-5 text-sm" style={{ color: BRAND }}>
                  {project.category}
                </p>

                <div className="flex flex-col">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
                        style={{ borderColor: BRAND, color: BRAND }}
                      >
                        <Target size={14} />
                      </div>
                      <div
                        className="w-px flex-1"
                        style={{ backgroundColor: `${BRAND}4D` }}
                      />
                    </div>
                    <div className="pb-5">
                      <p className="font-semibold text-white">Challenge</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#A5B0C5]">
                        {project.challenge}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
                        style={{ borderColor: BRAND, color: BRAND }}
                      >
                        <Wrench size={14} />
                      </div>
                      <div
                        className="w-px flex-1"
                        style={{ backgroundColor: `${BRAND}4D` }}
                      />
                    </div>
                    <div className="pb-5">
                      <p className="font-semibold text-white">What we did</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#A5B0C5]">
                        {project.whatWeDid}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
                      style={{ borderColor: BRAND, color: BRAND }}
                    >
                      <TrendingUp size={14} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">The Outcome</p>
                      <div className="mt-2 flex flex-col gap-1.5">
                        {project.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-center gap-2">
                            <CheckCircle2 size={14} style={{ color: BRAND }} />
                            <p className="text-sm text-[#A5B0C5]">{outcome}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {project.caseStudyHref ? (
                  <Link
                    href={project.caseStudyHref}
                    className="mt-5 flex items-center gap-2 text-sm"
                    style={{ color: BRAND }}
                  >
                    View Case Study
                    <ArrowUpRight size={14} />
                  </Link>
                ) : (
                  <span className="mt-5 flex items-center gap-2 text-sm text-white/30">
                    Case Study Coming Soon
                  </span>
                )}
              </div>

              {/* Right: device screenshot */}
              <div
                className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl md:min-h-[280px]"
                style={{ backgroundColor: project.imageBg }}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} product screenshot`}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            {idx === PROJECTS.length - 1 && (
              <div className="border-t border-white/[0.08]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}