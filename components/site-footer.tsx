import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTiktok, FaInstagram, FaYoutube, FaLocationDot, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa6";
import { getSiteSettings, getFooterSection } from "@/lib/db/queries";
import { richTextToPlainText } from "@/lib/cms/rich-text";

export async function SiteFooter() {
  const siteConfig = await getSiteSettings();
  const footerSection = await getFooterSection();

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return <FaFacebookF className="size-4" />;
      case "tiktok":
        return <FaTiktok className="size-4" />;
      case "instagram":
        return <FaInstagram className="size-4" />;
      case "youtube":
        return <FaYoutube className="size-4" />;
      default:
        return null;
    }
  };

  const plainBrandText = typeof footerSection.brandText === "string"
    ? footerSection.brandText
    : richTextToPlainText(footerSection.brandText);

  const plainSocialIntro = typeof footerSection.socialIntro === "string"
    ? footerSection.socialIntro
    : richTextToPlainText(footerSection.socialIntro);

  const rawWa = siteConfig.whatsapp || "";
  const waHref = rawWa.startsWith("http")
    ? rawWa
    : (() => {
        const cleaned = rawWa.replace(/\D/g, "");
        return cleaned.startsWith("62")
          ? `https://wa.me/${cleaned}`
          : cleaned.startsWith("0")
          ? `https://wa.me/62${cleaned.substring(1)}`
          : `https://wa.me/${cleaned}`;
      })();

  return (
    <>
      <footer id="kontak" className="bg-[#1e3a5f] text-white">
        {/* Highlighted top banner */}
        <div className="w-full bg-primary px-4 py-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/80">Pondok Pesantren</p>
          <h2 className="font-heading text-xl sm:text-2xl font-extrabold uppercase tracking-widest text-white leading-tight mt-0.5">
            Salfakinah Barokah Qur&apos;an
          </h2>
          <p className="text-[11px] text-primary-foreground/70 mt-1 italic">Qur&apos;an · Akhlak · Ilmu</p>
        </div>

      <div className="site-shell grid gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Brand */}
        <div className="space-y-4">
          <div>
            <h3 className="text-base font-bold text-white leading-tight font-heading uppercase tracking-wide">{siteConfig.shortName}</h3>
            <p className="text-xs text-accent-gold mt-0.5">{siteConfig.tagline}</p>
          </div>
          <p className="text-xs text-white/80 leading-relaxed pt-2">
            {plainBrandText}
          </p>
        </div>

        {/* Column 2: Tautan Cepat */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-accent-gold after:mt-2">
            Tautan Cepat
          </h3>
          <nav className="flex flex-col gap-3 text-sm text-white/80">
            {footerSection.quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-accent-gold">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Hubungi Kami */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-accent-gold after:mt-2">
            Hubungi Kami
          </h3>
          <div className="space-y-4 text-sm text-white/80">
            <div className="flex items-start gap-3">
              <FaLocationDot className="size-4 text-accent-gold shrink-0 mt-1" />
              <span>{siteConfig.address}</span>
            </div>
            <div className="flex items-center gap-3 font-mono">
              <FaPhone className="size-4 text-accent-gold shrink-0" />
              <span>{siteConfig.whatsapp}</span>
            </div>
            <div className="flex items-center gap-3 font-mono">
              <FaEnvelope className="size-4 text-accent-gold shrink-0" />
              <span>{siteConfig.email}</span>
            </div>
          </div>
        </div>

        {/* Column 4: Sosial Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-accent-gold after:mt-2">
            Sosial Media
          </h3>
          <p className="text-xs text-white/70 leading-relaxed">
            {plainSocialIntro}
          </p>
          <div className="flex items-center gap-3 pt-1">
            {footerSection.socialLinks.map((link, index) => {
              const icon = getSocialIcon(link.platform);
              if (!icon) return null;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60 bg-[#0f2236]">
        {footerSection.copyrightText}
      </div>
    </footer>
    {/* Floating WhatsApp Button */}
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Hubungi kami di WhatsApp"
    >
      <FaWhatsapp className="size-8" />
    </a>
  </>
);
}
