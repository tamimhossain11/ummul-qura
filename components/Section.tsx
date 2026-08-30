"use client";

import { useLang } from "./LanguageProvider";
import { Ornament } from "./Ornament";
import type { T } from "@/lib/i18n";

export function SectionHeading({
  eyebrow,
  title,
  arabic,
  body,
  tone = "dark",
  align = "center",
}: {
  eyebrow?: T;
  title: T;
  arabic?: string;
  body?: T;
  tone?: "dark" | "light";
  align?: "center" | "start";
}) {
  const { t } = useLang();
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold caps ${
            tone === "dark" ? "text-teal-600" : "text-gold-400"
          }`}
        >
          {t(eyebrow)}
        </p>
      )}
      {arabic && (
        <p
          dir="rtl"
          className={`font-arabic mb-2 text-2xl ${
            tone === "dark" ? "text-navy-800/45" : "text-white/45"
          }`}
        >
          {arabic}
        </p>
      )}
      <h2
        className={`text-balance text-3xl font-bold leading-tight sm:text-4xl ${
          tone === "dark" ? "text-navy-900" : "text-white"
        }`}
      >
        {t(title)}
      </h2>
      <Ornament
        tone={tone === "dark" ? "gold" : "light"}
        className={centered ? "mx-auto my-5" : "my-5"}
      />
      {body && (
        <p
          className={`text-balance text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-navy-800/75" : "text-white/70"
          }`}
        >
          {t(body)}
        </p>
      )}
    </div>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}
