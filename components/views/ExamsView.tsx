"use client";

import { examHallRules, examPreparation, examSchedule } from "@/lib/handbook";
import { Icon } from "../Icon";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container, SectionHeading } from "../Section";

export function ExamsView() {
  const { t, n } = useLang();

  return (
    <>
      <PageHero
        title={{ bn: "জামিয়ার পরীক্ষা তথ্য", en: "Examinations" }}
        arabic="نظام الامتحانات"
        subtitle={{
          bn: "পূর্ণ শিক্ষাবর্ষে অনুষ্ঠিত চারটি পরীক্ষা, প্রস্তুতির অনুসৃত নিয়মাবলি এবং পরীক্ষার হলে পালনীয় নির্দেশনা।",
          en: "The four examinations of the academic year, the discipline of preparation, and the rules of the examination hall.",
        }}
      />

      {/* The year's four examinations */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "প্রথমত", en: "First" }}
            title={{ bn: "বছরের চারটি পরীক্ষা", en: "Four Examinations a Year" }}
            body={{
              bn: "আমাদের জামিয়ায় পূর্ণ শিক্ষাবর্ষে মোট চারটি পরীক্ষা অনুষ্ঠিত হয়।",
              en: "Four examinations are held over the course of a full academic year.",
            }}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {examSchedule.map((e, i) => (
              <article
                key={i}
                className="relative overflow-hidden rounded-2xl border border-navy-800/10 bg-white p-7 shadow-soft"
              >
                <span className="pointer-events-none absolute -end-2 -top-4 text-7xl font-bold text-sky-100">
                  {n(i + 1)}
                </span>
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-teal-600 text-white">
                  <Icon name="calendar" className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 text-lg font-bold leading-snug text-navy-900">
                  {t(e.name)}
                </h3>
                <span className="rule-gold my-3 block h-px w-16" />
                <p className="relative text-sm leading-relaxed text-navy-800/70">{t(e.when)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Preparation */}
      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "দ্বিতীয়ত", en: "Second" }}
            title={{ bn: "পরীক্ষার অনুসৃত নিয়মাবলি", en: "How We Prepare" }}
            arabic="آداب الاستعداد للامتحان"
          />
          <ol className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-2">
            {examPreparation.map((r, i) => (
              <li
                key={i}
                className="rounded-2xl border border-navy-800/10 bg-white p-7 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-gold-400">
                    {n(i + 1)}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-navy-900">{t(r.title)}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-navy-800/70">{t(r.body)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* In the hall */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "তৃতীয়ত", en: "Third" }}
            title={{ bn: "পরীক্ষার সময় পালনীয় নিয়মাবলি", en: "Rules of the Examination Hall" }}
            body={{
              bn: "পরীক্ষার সময় নিম্নোক্ত নিয়মাবলি যথাযথভাবে মেনে চলতে হবে।",
              en: "The following are to be observed carefully during the examination.",
            }}
          />
          <ul className="mx-auto mt-14 grid max-w-5xl gap-4 lg:grid-cols-2">
            {examHallRules.map((r, i) => (
              <li
                key={i}
                className="flex items-start gap-3.5 rounded-2xl border border-navy-800/10 bg-white p-6 shadow-soft"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-teal-600">
                  {n(i + 1)}
                </span>
                <div>
                  <h3 className="text-sm font-bold leading-snug text-navy-900">{t(r.title)}</h3>
                  {r.body && (
                    <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{t(r.body)}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
