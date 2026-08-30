"use client";

import Link from "next/link";
import type { T } from "@/lib/i18n";
import { Icon } from "./Icon";
import { useLang } from "./LanguageProvider";
import { Ornament } from "./Ornament";

export function PageHero({
  title,
  arabic,
  subtitle,
}: {
  title: T;
  arabic?: string;
  subtitle?: T;
}) {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-teal-600">
      <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 sm:py-20">
        {arabic && (
          <p dir="rtl" className="font-arabic mb-3 text-2xl text-gold-400 sm:text-3xl">
            {arabic}
          </p>
        )}
        <h1 className="text-balance text-3xl font-bold leading-tight text-white sm:text-5xl">
          {t(title)}
        </h1>
        <Ornament tone="light" className="mx-auto my-5" />
        {subtitle && (
          <p className="mx-auto max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
            {t(subtitle)}
          </p>
        )}
        <nav
          aria-label="Breadcrumb"
          className="mt-7 flex items-center justify-center gap-2 text-sm text-white/50"
        >
          <Link href="/" className="hover:text-gold-300">
            {t({ bn: "হোম", en: "Home" })}
          </Link>
          <Icon name="arrow" className="h-3.5 w-3.5 rtl:rotate-180" strokeWidth={2} />
          <span className="text-gold-300">{t(title)}</span>
        </nav>
      </div>
      <div className="rule-gold h-0.5 w-full" />
    </section>
  );
}
