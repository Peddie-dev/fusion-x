import { Mail, Phone, MapPin, Clock, Calendar, Star } from "lucide-react";

const CONTACT_ITEMS = [
  { icon: Mail, label: "EMAIL", value: "hello@fusionx.design" },
  { icon: Phone, label: "PHONE", value: "+254 712 345 678" },
  { icon: MapPin, label: "LOCATION", value: "Nairobi, Kenya" },
  { icon: Clock, label: "RESPONSE TIME", value: "Within 24 Hours" },
  {
    icon: Calendar,
    label: "AVAILABILITY",
    value: "Available for Select Engagements",
  },
  {
    icon: Star,
    label: "PROJECTS COMPLETED",
    value: "20+ Products Delivered",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mt-20 overflow-hidden md:mt-0 md:pt-40">
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(ellipse at 60% 100%, #4b2a8f 0%, #1a0e33 40%, #0d0d12 75%)",
          }}
        />
      </div>

      <div className="mx-5 flex flex-col items-start gap-10 py-12 md:mx-20 md:flex-row md:items-center md:justify-between md:gap-[80px] md:py-0 md:pb-20">
        <div className="w-full shrink-0 md:w-[480px]">
          <p className="text-[12px] font-medium uppercase tracking-[1.12px] text-[#7F69D4] md:text-[14px] md:leading-5">
            LET&apos;S WORK TOGETHER
          </p>
          <h2 className="mt-5 text-[28px] font-bold leading-tight tracking-[-1.28px] text-[#F8FAFC] md:mt-6 md:text-[64px] md:leading-[72px]">
            Have a project in mind?
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[#B6B6C4] md:mt-10 md:text-[18px] md:leading-[32px]">
            I&apos;m always open to discussing new opportunities,
            collaborations, and interesting product challenges. Let&apos;s
            create something impactful together.
          </p>
          <button
            type="button"
            className="mt-10 flex h-[56px] items-center gap-3 rounded-[20px] border border-[rgba(181,159,255,0.25)] px-8 py-5 text-[18px] font-medium text-white shadow-[0_0_24px_rgba(127,105,212,0.2),0_8px_24px_rgba(0,0,0,0.3)] md:h-[72px] md:w-[183px] md:justify-center md:px-8"
            style={{
              backgroundImage:
                "linear-gradient(270deg, rgba(157,133,255,0.08) 0%, rgba(107,78,255,0.08) 100%)",
            }}
          >
            Let&apos;s Talk
            <img
              src="/figma/arrow-up-right.svg"
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
          </button>
        </div>

        <div className="grid w-full shrink-0 grid-cols-1 gap-x-8 gap-y-8 rounded-[28px] border border-white/[0.12] bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-[20px] sm:grid-cols-2 md:h-[610px] md:w-[620px] md:p-8">
          {CONTACT_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`min-h-[140px] ${i < 4 ? "border-b border-white/[0.08] pb-8" : ""} ${i % 2 === 0 ? "sm:border-r sm:border-white/[0.08] sm:pr-6" : "sm:pl-6"}`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(127,105,212,0.2)] bg-[rgba(127,105,212,0.08)] text-[#A58DFF] shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[10px]">
                <item.icon size={22} />
              </div>
              <p className="text-[12px] font-medium tracking-[1.2px] text-[#A58DFF]">
                {item.label}
              </p>
              <p className="mt-2 font-heading text-[16px] font-medium tracking-[1.8px] text-white md:text-[18px]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
