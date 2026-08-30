"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Lang, T } from "@/lib/i18n";
import { localizeDigits } from "@/lib/i18n";

const STORAGE_KEY = "juq-lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Resolve a bilingual string. */
  t: (value: T) => string;
  /** Localise numerals — Bangla digits in bn, Western in en. */
  n: (value: string | number) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Bangla is the default; English is opt-in via the header toggle.
  const [lang, setLangState] = useState<Lang>("bn");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "bn") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the choice simply won't persist.
    }
  }, []);

  const toggle = useCallback(
    () => setLang(lang === "bn" ? "en" : "bn"),
    [lang, setLang],
  );

  const t = useCallback((value: T) => value[lang], [lang]);
  const n = useCallback((value: string | number) => localizeDigits(value, lang), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, n }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
