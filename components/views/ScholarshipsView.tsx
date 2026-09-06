"use client";

import Link from "next/link";
import { scholarshipIntro, scholarships } from "@/lib/handbook";
import { Icon, type IconName } from "../Icon";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container, SectionHeading } from "../Section";

export function ScholarshipsView() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHero
        title={{ bn: "বৃত্তি ও অনুদান ব্যবস্থা", en: "Scholarships & Student Aid" }}
        arabic="المنح والمساعدات الدراسية"
        subtitle={{
          bn: "মেধা, কৃতিত্ব, আর্থিক অসচ্ছলতা ও বিশেষ প্রয়োজন বিবেচনায় শিক্ষার্থীদের জন্য বিভিন্ন ধরনের বৃত্তি ও সহায়তা।",
          en: "Scholarships and support weighed by ability, achievement, hardship and particular need.",
        }}
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-navy-800/10 bg-white p-8 text-center shadow-soft sm:p-10">
            <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-teal-600 text-white">
              <Icon name="gift" className="h-7 w-7" />
            </span>
            <p className="text-balance text-base leading-relaxed text-navy-800/75 sm:text-lg">
              {t(scholarshipIntro)}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "যেসব সহায়তা রয়েছে", en: "What Is Available" }}
            title={{ bn: "বৃত্তি ও সহায়তার ধরনসমূহ", en: "Forms of Scholarship and Aid" }}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {scholarships.map((s, i) => (
              <article
                key={i}
                className="rounded-2xl border border-navy-800/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-lift"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-teal-600 text-white">
                  <Icon name={s.icon as IconName} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug text-navy-900">{t(s.title)}</h3>
                <span className="rule-gold my-3 block h-px w-16" />
                <p className="text-sm leading-relaxed text-navy-800/70">{t(s.body)}</p>
                {s.extra && (
                  <p className="mt-4 border-s-2 border-gold-400/60 ps-3.5 text-sm leading-relaxed text-navy-800/60">
                    {t(s.extra)}
                  </p>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="rounded-2xl bg-gradient-to-r from-navy-900 to-teal-600 p-10 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {lang === "bn" ? "বৃত্তির জন্য আবেদন করতে চান?" : "Applying for a scholarship?"}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            {lang === "bn"
              ? "নির্ধারিত সময়ের মধ্যে প্রয়োজনীয় কাগজপত্রসহ জামিয়ার অফিসে আবেদন জমা দিন, অথবা যোগাযোগ করুন।"
              : "Submit your application with the necessary papers at the Jamia office within the appointed time, or get in touch."}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
            >
              {lang === "bn" ? "যোগাযোগ করুন" : "Get in touch"}
              <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
            </Link>
            <Link
              href="/donation"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-bold text-white transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              {lang === "bn" ? "অনুদান দিতে চাই" : "I would like to give"}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
