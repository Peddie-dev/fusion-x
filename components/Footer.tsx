import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Blog", href: "/#" },
  { label: "Contact", href: "/#contact" },
];

const SOCIALS = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaTiktok, label: "TikTok" },
  { Icon: FaWhatsapp, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f19] px-5 pb-6 md:px-[30px] md:pb-8">
      <div className="flex flex-col items-center gap-5 rounded-[24px] border-[1.5px] border-white/[0.08] bg-[#16141F] p-5 md:block md:bg-[#17151f]/97 md:px-10 md:py-10 md:backdrop-blur-[12px]">
        <div className="flex w-full flex-col items-center gap-6 md:hidden">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-[1.38px]">
              <span className="font-heading text-[25.75px] font-bold leading-[35px] text-[#F8FAFC]">
                Fusion
              </span>
              <img
                src="/figma/nav-x.svg"
                alt="X"
                width={26}
                height={28}
                className="h-[28px] w-[26px]"
              />
            </div>
            <div className="mt-2 font-heading text-[14px] font-medium tracking-[0.4em] text-[#8777F3]">
              STUDIOS
            </div>
          </div>
          <p className="max-w-[295px] text-center text-[16px] leading-[140%] tracking-[-0.01em] text-white">
            Lets make digital products that make an impact
          </p>
          <div className="flex gap-5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-xl border-[1.5px] border-[rgba(127,105,212,0.4)] text-white/80"
              >
                <social.Icon size={20} />
              </a>
            ))}
          </div>
          <nav className="grid w-[300px] grid-cols-3 gap-y-[12px] text-center text-[18px] font-medium tracking-[-0.01em] text-[#ECECF1]">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href="/#contact"
            className="flex h-[52px] w-[152px] items-center justify-center gap-3 rounded-xl border border-[rgba(127,105,212,0.4)] bg-[rgba(127,105,212,0.08)] text-[18px] font-medium tracking-[-0.01em] text-[#F8FAFC] shadow-[0_0_4px_rgba(0,0,0,0.25)]"
          >
            Lets Talk
            <img
              src="/figma/arrow-up-right.svg"
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
          </a>
          <div className="h-px w-[200px] bg-white/10" />
          <p className="w-full text-center text-[15px] leading-6 text-white/55">
            © 2026 FusionX Studios. Built in Nairobi. Designed for the world.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-[1.4px]">
                <span className="font-heading text-[25.75px] font-bold text-[#F8FAFC]">
                  Fusion
                </span>
                <img
                  src="/figma/nav-x.svg"
                  alt="X"
                  width={26}
                  height={28}
                  className="h-[28px] w-[26px]"
                />
              </div>
              <div className="mt-2 font-heading text-[14px] font-medium tracking-[5.6px] text-[#8777F3]">
                STUDIOS
              </div>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[18px] font-medium tracking-[-0.18px] text-[#ECECF1]">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>

            <a
              href="/#contact"
              className="flex items-center gap-3 rounded-[12px] border border-[rgba(127,105,212,0.4)] bg-[rgba(127,105,212,0.08)] px-5 py-2.5 text-[18px] font-medium tracking-[-0.18px] text-[#F8FAFC] shadow-[0_0_4px_rgba(0,0,0,0.25)]"
            >
              Lets Talk
              <img
                src="/figma/arrow-up-right.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-white/[0.08] pt-8">
            <p className="text-[15px] leading-6 text-white/55">
              © 2026 FusionX Studios.
              <br />
              Built in Nairobi. Designed for the world.
            </p>

            <div className="flex gap-5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
                >
                  <social.Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
