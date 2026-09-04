import { Mail, Phone, MapPin, Clock, Calendar, Star } from "lucide-react";

const CONTACT_ITEMS = [
  { icon: Mail, label: "EMAIL", value: "hello@fusionx.design" },
  { icon: Phone, label: "PHONE", value: "+254 712 345 678" },
  { icon: MapPin, label: "LOCATION", value: "Nairobi, Kenya" },
  { icon: Clock, label: "RESPONSE TIME", value: "Within 24 Hours" },
  {
    icon: Star,
    label: "PROJECTS COMPLETED",
    value: "20+ Products Delivered",
  },
  {
    icon: Calendar,
    label: "AVAILABILITY",
    value: "Available for Select Engagements",
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

      <div className="mx-5 flex flex-col items-start gap-[34px] py-12 md:mx-10 lg:mx-20 lg:flex-row lg:items-center lg:justify-between lg:gap-[80px] lg:py-0 lg:pb-20">
        <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[min(480px,40%)] lg:block">
          <p className="text-[14px] font-medium uppercase leading-5 tracking-[0.08em] text-[#7F69D4]">
            LET&apos;S WORK TOGETHER
          </p>
          <h2 className="text-[28px] font-bold leading-[120%] tracking-[0.02em] text-[#F8FAFC] md:mt-6 md:text-[64px] md:leading-[72px] md:tracking-[-1.28px]">
            Have a project in mind?
          </h2>
          <p className="text-[16px] leading-[160%] text-[#A5B0C5] md:mt-10 md:text-[18px] md:leading-[32px] md:text-[#B6B6C4]">
            I&apos;m always open to discussing new opportunities,
            collaborations, and interesting product challenges. Let&apos;s
            create something impactful together.
          </p>
          <button
            type="button"
            className="mt-6 flex h-[72px] w-[183px] items-center justify-center gap-3 rounded-3xl border border-[rgba(181,159,255,0.25)] px-8 py-5 text-[18px] font-medium text-white shadow-[0_0_24px_rgba(127,105,212,0.2),0_8px_24px_rgba(0,0,0,0.3)] md:mt-10"
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

        <div className="flex w-full min-w-0 flex-col items-center gap-8 rounded-3xl border-[1.5px] border-white/[0.12] bg-white/[0.05] p-5 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-[20px] lg:grid lg:h-[610px] lg:min-w-0 lg:flex-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8 lg:p-8">
          {CONTACT_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`flex w-full max-w-[320px] flex-col gap-4 lg:min-h-[140px] lg:max-w-none ${
                i < CONTACT_ITEMS.length - 1 ? "border-b-[1.5px] border-white/[0.08] pb-4 lg:pb-8" : ""
              } ${i < 4 ? "lg:border-b lg:border-white/[0.08]" : "lg:border-b-0"} ${
                i % 2 === 0 ? "lg:border-r lg:border-white/[0.08] lg:pr-6" : "lg:pl-6"
              }`}
            >
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-[rgba(127,105,212,0.2)] bg-[rgba(127,105,212,0.08)] text-[#A58DFF] shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[10px]">
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-[12px] font-medium tracking-[0.1em] text-[#A58DFF]">
                    {item.label}
                  </p>
                  <p className="mt-2 font-heading text-[18px] font-medium leading-6 tracking-[0.1em] text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
