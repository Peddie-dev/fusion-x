import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const NAV_LINKS = ["Work", "Services", "About", "Process", "Blog", "Contact"];

const SOCIALS = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaTiktok, label: "TikTok" },
  { Icon: FaWhatsapp, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0d0c14] px-10 py-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-bold text-white">
            Fusion<span className="text-[#8B6EF6]">X</span>
          </div>
          <div className="text-[10px] tracking-[0.2em] text-[#8B6EF6]">
            STUDIOS
          </div>
        </div>

        <nav className="flex gap-7 text-sm text-white/80">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="hover:text-white">
              {link}
            </a>
          ))}
        </nav>

        <button className="rounded-full border border-[#8B6EF6]/30 bg-[#8B6EF6]/15 px-5 py-2.5 text-[13px] text-white hover:bg-[#8B6EF6]/25">
          Let&apos;s Talk ↗
        </button>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
        <p className="text-xs leading-relaxed text-white/50">
          © 2026 FusionX Studios.
          <br />
          Built in Nairobi. Designed for the world.
        </p>

        <div className="flex gap-3">
          {SOCIALS.map((social) => (
            
            <a  key={social.label}
              href="#"
              aria-label={social.label}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-white hover:bg-white/10"
            >
              <social.Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}