"use client";

import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import { departments } from "@/lib/content";
import { Icon } from "./Icon";
import { useLang } from "./LanguageProvider";
import { Ornament } from "./Ornament";
import { SocialLinks } from "./SocialRail";

/** Renders a contact value, or a discreet placeholder while it is unconfirmed. */
function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: "phone" | "mail" | "pin";
  label: string;
  value: string;
  href?: string;
}) {
  const body = value ? (
    href ? (
      <a href={href} className="text-white/80 hover:text-gold-300">
        {value}
      </a>
    ) : (
      <span className="text-white/80">{value}</span>
    )
  ) : (
    <span className="text-white/35 italic">—</span>
  );

  return (
    <li className="flex items-start gap-3">
      <Icon name={icon} className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.8} />
      <span className="text-sm">
        <span className="block text-[11px] caps text-white/40">
          {label}
        </span>
        {body}
      </span>
    </li>
  );
}

export function Footer() {
  const { t, lang, n } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.05]" />

      {/* Arabic calligraphic name band */}
      <div className="relative border-b border-white/10 bg-navy-900/50">
        <div className="mx-auto max-w-6xl px-5 py-8 text-center sm:px-8">
          <p dir="rtl" className="font-arabic text-2xl text-gold-400 sm:text-3xl">
            {site.nameAr}
          </p>
          <p dir="rtl" className="font-arabic mt-1 text-base text-gold-400/70 sm:text-lg">
            {site.addressAr}
          </p>
          <Ornament tone="light" className="mx-auto mt-3" />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-gold-500/60">
              <Image src="/logo.jpeg" alt="" fill sizes="56px" className="object-cover" />
            </span>
            <span>
              <span className="block text-lg font-bold leading-tight">
                {lang === "bn" ? site.nameBn : site.nameEn}
              </span>
              <span className="block text-xs text-cyan-200/70">
                {lang === "bn"
                  ? `প্রতিষ্ঠিত ${n(site.established)} ঈসায়ী`
                  : `Established ${site.established}`}
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/60">{t(site.tagline)}</p>
          <SocialLinks className="mt-6" />
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-4 text-sm font-bold caps text-gold-400">
            {lang === "bn" ? "দ্রুত লিংক" : "Quick Links"}
          </h3>
          <ul className="space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/70 hover:text-gold-300">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-4 text-sm font-bold caps text-gold-400">
            {lang === "bn" ? "শিক্ষা বিভাগ" : "Departments"}
          </h3>
          <ul className="space-y-2.5 text-sm">
            {departments.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/departments#${d.slug}`}
                  className="text-white/70 hover:text-gold-300"
                >
                  {t(d.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-4 text-sm font-bold caps text-gold-400">
            {lang === "bn" ? "যোগাযোগ" : "Get in Touch"}
          </h3>
          <ul className="space-y-4">
            <ContactRow
              icon="pin"
              label={lang === "bn" ? "ঠিকানা" : "Address"}
              value={t(site.address)}
              href={site.mapLink}
            />
            <ContactRow
              icon="phone"
              label={t(site.phone.label)}
              value={lang === "bn" ? site.phone.display : site.phone.displayEn}
              href={`tel:+880${site.phone.number.slice(1)}`}
            />
            {site.emails.map((mail) => (
              <ContactRow
                key={mail.address}
                icon="mail"
                label={t(mail.label)}
                value={mail.address}
                href={`mailto:${mail.address}`}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/45 sm:flex-row sm:px-8">
          <p>
            © {n(year)} {lang === "bn" ? site.nameBn : site.nameEn}.{" "}
            {lang === "bn" ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved."}
          </p>
          <p dir="rtl" className="font-arabic text-sm text-white/40">
            رَبِّ زِدْنِي عِلْمًا
          </p>
        </div>
      </div>
    </footer>
  );
}
