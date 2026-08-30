export type Lang = "bn" | "en";

/** A bilingual string. Bangla is the default; English is the toggle. */
export type T = { bn: string; en: string };

export const pick = (t: T, lang: Lang) => t[lang];

/** Bangla numerals — used for dates, counts and phone numbers in bn mode. */
const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function localizeDigits(value: string | number, lang: Lang) {
  const s = String(value);
  if (lang === "en") return s;
  return s.replace(/[0-9]/g, (d) => BN_DIGITS[Number(d)]);
}
