"use client";

import { guardianClosing, guardianDuties, guardianIntro, guardianPointers } from "@/lib/handbook";
import { Icon } from "../Icon";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container, SectionHeading } from "../Section";

export function GuardiansView() {
  const { t, n } = useLang();

  return (
    <>
      <PageHero
        title={{ bn: "অভিভাবকদের প্রতি", en: "For Our Guardians" }}
        arabic="إلى أولياء الأمور"
        subtitle={guardianIntro}
      />

      {/* The duties */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "প্রথমত", en: "First" }}
            title={{ bn: "সম্মানিত অভিভাবকের পালনীয় নিয়মাবলি", en: "What Is Asked of a Guardian" }}
          />
          <ol className="mx-auto mt-14 grid max-w-5xl gap-4 lg:grid-cols-2">
            {guardianDuties.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-navy-800/10 bg-white p-6 shadow-soft"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-gold-400">
                  {n(i + 1)}
                </span>
                <p className="text-sm leading-relaxed text-navy-800/80">{t(d)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* The checklist */}
      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "দ্বিতীয়ত", en: "Second" }}
            title={{ bn: "অভিভাবকদের জন্য বিশেষ কিছু নির্দেশনা", en: "A Short Checklist" }}
            body={{
              bn: "সন্তানকে একজন আদর্শ তালেবে ইলম হিসেবে গড়ে তুলতে নিম্নোক্ত বিষয়গুলোর প্রতি বিশেষভাবে লক্ষ্য রাখা প্রয়োজন।",
              en: "In raising a true seeker of knowledge, these deserve particular attention.",
            }}
          />
          <ul className="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-2">
            {guardianPointers.map((p, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-xl border border-navy-800/10 bg-white px-5 py-4 shadow-soft"
              >
                <Icon name="check" className="h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.4} />
                <span className="text-sm font-medium text-navy-800/85">{t(p)}</span>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold-400/50 bg-gold-200/25 p-8 text-center">
            <Icon name="heart" className="mx-auto h-8 w-8 text-gold-600" />
            <p className="mt-4 text-balance text-base leading-relaxed text-navy-900 sm:text-lg">
              {t(guardianClosing)}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
