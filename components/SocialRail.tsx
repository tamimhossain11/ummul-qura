"use client";

import { site } from "@/lib/site";
import { BrandIcon, type BrandName } from "./BrandIcon";
import { useLang } from "./LanguageProvider";

type Channel = { name: BrandName; href: string; label: { bn: string; en: string } };

/** The madrasah's public channels, in the order they should appear. */
export function socialChannels(): Channel[] {
  const list: Channel[] = [];
  if (site.facebook) {
    list.push({
      name: "facebook",
      href: site.facebook,
      label: { bn: "ফেসবুক পেজ", en: "Facebook page" },
    });
  }
  if (site.whatsapp) {
    list.push({
      name: "whatsapp",
      href: `https://wa.me/${site.whatsapp}`,
      label: { bn: "হোয়াটসঅ্যাপে বার্তা পাঠান", en: "Message on WhatsApp" },
    });
  }
  if (site.youtube) {
    list.push({
      name: "youtube",
      href: site.youtube,
      label: { bn: "ইউটিউব চ্যানেল", en: "YouTube channel" },
    });
  }
  return list;
}

/** A slim rail of brand links pinned to the left edge on wide screens. */
export function SocialRail() {
  const { t } = useLang();
  const channels = socialChannels();
  if (channels.length === 0) return null;

  return (
    <aside
      aria-label={t({ bn: "সামাজিক যোগাযোগ", en: "Social links" })}
      className="fixed start-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 ps-2 lg:flex"
    >
      {channels.map((c) => (
        <a
          key={c.name}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          title={t(c.label)}
          aria-label={t(c.label)}
          className="group flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy-900 shadow-lift ring-1 ring-navy-900/10 transition-all hover:-translate-y-0.5 hover:ring-gold-500"
        >
          <BrandIcon name={c.name} className="h-5 w-5 transition-transform group-hover:scale-110" brandColor />
        </a>
      ))}
    </aside>
  );
}

/** The same channels rendered inline — used in the footer. */
export function SocialLinks({ className = "" }: { className?: string }) {
  const { t } = useLang();
  const channels = socialChannels();
  if (channels.length === 0) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {channels.map((c) => (
        <a
          key={c.name}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t(c.label)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white hover:text-navy-900"
        >
          <BrandIcon name={c.name} className="h-4.5 w-4.5" />
        </a>
      ))}
    </div>
  );
}
