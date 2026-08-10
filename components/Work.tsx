import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Project = {
  name: string;
  category: string;
  description: string;
  industry: string;
  services: string;
  accent: string; // tailwind-safe hex used for icon ring, dot, industry text
  screenshot: string;
  screenshotBg: string;
};

const PROJECTS: Project[] = [
  {
    name: "Digifarm",
    category: "AGRITECH PLATFORM",
    description:
      "Connecting farmers, buyers, and field agents through digital collection and trading experiences.",
    industry: "Agritech",
    services: "Product Design, UX Research, UI Design",
    accent: "#3BAE6E",
    screenshot: "/digifarm.png",
    screenshotBg: "#ffffff",
  },
  {
    name: "AfroCom",
    category: "COMMUNITY PLATFORM",
    description:
      "Connecting the global Afro-community through a platform for collaboration, opportunity, and collective growth.",
    industry: "Community Technology",
    services: "Product Design, UX Strategy, Design System",
    accent: "#8B6EF6",
    screenshot: "/afrocom.png",
    screenshotBg: "#fdf6e3",
  },
  {
    name: "EmpireFX",
    category: "FINTECH PLATFORM",
    description:
      "Helping traders and investors manage global markets through a secure and intuitive trading experience.",
    industry: "Fintech Technology",
    services: "Product Design, Design System",
    accent: "#6E7CF6",
    screenshot: "/empirefx.png",
    screenshotBg: "#1a1a3d",
  },
];

export default function Work() {
  return (
    <section className="mx-20 mt-32">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div className="max-w-[560px]">
          <p className="text-xs font-medium tracking-wide text-[#A5B0C5]">
            SELECTED WORK
          </p>
          <h2 className="mt-4 text-[32px] font-bold leading-tight text-white">
            Designing products that solve real-world business challenges.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#A5B0C5]">
            A selection of projects showcasing how research, design, and
            systems thinking come together to solve real business
            challenges.
          </p>
        </div>

        
        <a  href="#"
          className="flex shrink-0 items-center gap-2 text-sm text-white"
        >
          View More
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
            <ArrowRight size={14} />
          </span>
        </a>
      </div>

      {/* Case study cards */}
      <div className="mt-10 flex flex-col gap-5">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="flex items-center gap-8 rounded-2xl border border-white/[0.08] bg-[#15141c] p-8"
          >
            {/* Left: text panel */}
            <div className="w-[280px] shrink-0">
              <div
                className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border"
                style={{ borderColor: project.accent, color: project.accent }}
              >
                <ArrowRight size={16} />
              </div>

              <div
                className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold tracking-wide"
                style={{ color: project.accent }}
              >
                <span
                  className="h-1 w-1 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                {project.category}
              </div>

              <h3 className="mb-2.5 text-2xl font-bold text-white">
                {project.name}
              </h3>

              <p className="mb-4 text-[13px] leading-relaxed text-[#A5B0C5]">
                {project.description}
              </p>

              <div className="border-t border-white/[0.08] pt-3.5">
                <p className="text-[11px] tracking-wide text-[#A5B0C5]">
                  INDUSTRY
                </p>
                <p
                  className="mt-1 text-[13px]"
                  style={{ color: project.accent }}
                >
                  {project.industry}
                </p>
              </div>

              <div className="mt-3 mb-4">
                <p className="text-[11px] tracking-wide text-[#A5B0C5]">
                  SERVICES
                </p>
                <p className="mt-1 text-[13px] text-white">
                  {project.services}
                </p>
              </div>

              
              <a  href="#"
                className="flex items-center gap-2 text-[13px] text-white"
              >
                view Case Study
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20">
                  <ArrowRight size={11} />
                </span>
              </a>
            </div>

            {/* Right: screenshot */}
           <div
  className="relative min-h-[320px] flex-1 overflow-hidden rounded-[10px]"
  style={{ backgroundColor: project.screenshotBg }}
>
  <Image
    src={project.screenshot}
    alt={`${project.name} product screenshot`}
    fill
    className="object-cover object-top"
  />
</div>
          </div>
        ))}
      </div>
    </section>
  );
}