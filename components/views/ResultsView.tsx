"use client";

import Image from "next/image";
import { resultBoards, resultSheets, resultSummary } from "@/lib/content";
import { site } from "@/lib/site";
import { Icon } from "../Icon";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container, SectionHeading } from "../Section";

export function ResultsView() {
  const { t, lang, n } = useLang();

  return (
    <>
      <PageHero
        title={{ bn: "বেফাক ও এদারা পরীক্ষার সফলতা", en: "Befaq & Edara Examination Results" }}
        arabic="نتائج الامتحانات"
        subtitle={{
          bn: "প্রতিষ্ঠার তৃতীয় বর্ষেই কেন্দ্রীয় বোর্ড পরীক্ষায় জামিয়ার ছাত্রদের ঐতিহাসিক সাফল্য।",
          en: "In only its third year, the Jamia's students achieved a historic result in the central board examinations.",
        }}
      />

      {/* Headline figures */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-teal-600 py-16 text-white">
        <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.08]" />
        <Container className="relative">
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resultSummary.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur"
              >
                <dd className="text-5xl font-bold text-gold-400">{n(stat.value)}</dd>
                <dt className="mt-2 font-bold text-white">{t(stat.label)}</dt>
                {stat.note && (
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{t(stat.note)}</p>
                )}
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Check your own result */}
      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-gold-400/50 bg-gold-200/25 p-8 text-center sm:p-10">
            <div className="pattern-girih-dark pointer-events-none absolute inset-0 opacity-[0.05]" />
            <div className="relative">
              <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-teal-600 text-white">
                <Icon name="scroll" className="h-7 w-7" />
              </span>
              <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
                {lang === "bn" ? "নিজের ফলাফল দেখুন" : "Check Your Result"}
              </h2>
              <span className="rule-gold mx-auto my-4 block h-px w-32" />
              <p className="mx-auto max-w-xl text-balance leading-relaxed text-navy-800/75">
                {lang === "bn"
                  ? "জামিয়ার অনলাইন পোর্টালে ছাত্ররা নিজেদের শ্রেণি পরীক্ষার ফলাফল দেখতে পারবে। নিচের বোতামে ক্লিক করে পোর্টালে যান।"
                  : "Students can view their class examination results on the Jamia's online portal. Use the button below to open it."}
              </p>
              <a
                href={site.resultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-teal-600"
              >
                {lang === "bn" ? "ফলাফল দেখুন" : "View results"}
                <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
              </a>
              <p className="mt-3 text-xs text-navy-800/45">qmmsoft.com</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Merit lists */}
      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "মেধাতালিকা", en: "Merit Lists" }}
            title={{ bn: "বোর্ড পরীক্ষায় স্থান অর্জনকারী ছাত্রবৃন্দ", en: "Students Placed in the Board Examinations" }}
          />
          <div className="mt-14 space-y-10">
            {resultBoards.map((board) => (
              <article
                key={board.slug}
                className="overflow-hidden rounded-2xl border border-navy-800/10 bg-white shadow-soft"
              >
                <header className="border-b border-navy-800/10 bg-navy-900 px-7 py-5 text-white">
                  <h3 className="text-lg font-bold">{t(board.title)}</h3>
                  <p className="mt-1 text-sm text-cyan-200/75">{t(board.exam)}</p>
                </header>
                <div className="grid gap-8 p-7 lg:grid-cols-3">
                  <div className="space-y-7 lg:col-span-2">
                    {board.groups.map((group, gi) => (
                      <div key={gi}>
                        <h4 className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-sm font-bold text-teal-600">
                          <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
                          {t(group.name)}
                        </h4>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {group.rows.map((row, ri) => (
                            <li
                              key={ri}
                              className="flex items-center justify-between gap-3 rounded-lg border border-navy-800/10 px-4 py-2.5 text-sm"
                            >
                              <span className="text-navy-800/85">{t(row.name)}</span>
                              <span className="shrink-0 font-bold text-gold-600">
                                {t(row.position)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <a
                    href={board.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-3/4 overflow-hidden rounded-xl border-4 border-white bg-navy-800 shadow-soft"
                  >
                    <Image
                      src={board.image}
                      alt={t(board.title)}
                      fill
                      sizes="(min-width: 1024px) 300px, 90vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Published sheets */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "প্রকাশিত ফলাফল", en: "Published Sheets" }}
            title={{ bn: "ফলাফলের মূল প্রকাশনাসমূহ", en: "The Original Result Sheets" }}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {resultSheets.map((sheet, i) => (
              <a
                key={i}
                href={sheet.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-3/4 overflow-hidden rounded-2xl border-4 border-white bg-navy-800 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <Image
                  src={sheet.src}
                  alt={t(sheet.caption)}
                  fill
                  sizes="(min-width: 1024px) 280px, 45vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-xs font-semibold leading-snug text-white">
                  {t(sheet.caption)}
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
