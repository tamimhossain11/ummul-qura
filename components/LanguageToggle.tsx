"use client";

import { useLang } from "./LanguageProvider";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label={lang === "bn" ? "ভাষা নির্বাচন" : "Select language"}
      className={`inline-flex items-center rounded-full border border-white/25 bg-white/10 p-0.5 backdrop-blur ${
        compact ? "text-[11px]" : "text-xs"
      }`}
    >
      {(["bn", "en"] as const).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1 font-semibold tracking-wide transition-colors ${
              active
                ? "bg-gold-500 text-navy-950 shadow-sm"
                : "text-white/70 hover:text-white"
            }`}
          >
            {code === "bn" ? "বাংলা" : "EN"}
          </button>
        );
      })}
    </div>
  );
}
