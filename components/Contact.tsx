import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Star,
  ArrowRight,
} from "lucide-react";

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
    <section id="contact" className="relative mt-20 overflow-hidden md:mt-32">
      {/* Background nebula image */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(ellipse at 60% 100%, #4b2a8f 0%, #1a0e33 40%, #0d0d12 75%)",
          }}
        />
      </div>

      <div className="mx-5 flex flex-col items-start gap-10 py-12 md:mx-20 md:flex-row md:justify-between md:py-20">
        {/* Left: copy */}
        <div className="w-full shrink-0 pt-0 md:w-[340px] md:pt-5">
          <p className="text-xs font-semibold tracking-wide text-[#8B6EF6]">
            LET&apos;S WORK TOGETHER
          </p>
          <h2 className="mt-4 text-[28px] font-bold leading-tight text-white md:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#A5B0C5]">
            I&apos;m always open to discussing new opportunities,
            collaborations, and interesting product challenges. Let&apos;s
            create something impactful together.
          </p>
          <button className="mt-6 flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white transition-colors hover:bg-white/5">
            Let&apos;s Talk
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Right: contact info card */}
        <div className="grid w-full shrink-0 grid-cols-1 gap-x-10 gap-y-7 rounded-[20px] border border-white/10 bg-[#14121e]/70 p-6 backdrop-blur-md sm:grid-cols-2 md:w-[460px] md:p-8">
          {CONTACT_ITEMS.map((item) => (
            <div key={item.label}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#8B6EF6]/15 text-[#8B6EF6]">
                <item.icon size={18} />
              </div>
              <p className="text-[11px] tracking-wide text-[#8B6EF6]">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}