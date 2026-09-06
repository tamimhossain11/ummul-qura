"use client";

import Link from "next/link";
import { researchAreas, researchIntro } from "@/lib/handbook";
import { site } from "@/lib/site";
import { Icon, type IconName } from "../Icon";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container, SectionHeading } from "../Section";

export function ResearchView() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHero
        title={{ bn: "গবেষণা বিভাগ", en: "Research Department" }}
        arabic="قسم البحث العلمي"
        subtitle={{
          bn: "ইসলামী জ্ঞানচর্চা, প্রামাণ্য গবেষণা ও সমকালীন বিষয়াবলির ইসলামী সমাধান অনুসন্ধানের একটি প্ল্যাটফর্ম।",
          en: "A platform for Islamic scholarship, documented research and Islamic answers to the questions of our time.",
        }}
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-navy-800/10 bg-white p-8 text-center shadow-soft sm:p-10">
            <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-teal-600 text-white">
              <Icon name="scroll" className="h-7 w-7" />
            </span>
            <p className="text-balance text-base leading-relaxed text-navy-800/75 sm:text-lg">
              {t(researchIntro)}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "কার্যপরিধি", en: "Scope" }}
            title={{ bn: "গবেষণা বিভাগের শাখাসমূহ", en: "The Work of the Department" }}
            arabic="مجالات البحث"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area, i) => (
              <article
                key={i}
                className="rounded-2xl border border-navy-800/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-lift"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-teal-600 text-white">
                  <Icon name={area.icon as IconName} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug text-navy-900">
                  {t(area.title)}
                </h3>
                <span className="rule-gold my-3 block h-px w-16" />
                <ul className="space-y-2">
                  {area.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-navy-800/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="rounded-2xl bg-gradient-to-r from-navy-900 to-teal-600 p-10 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {lang === "bn" ? "গবেষণায় অংশ নিতে চান?" : "Would you like to take part?"}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            {lang === "bn"
              ? "প্রবন্ধ জমা দেওয়া, সেমিনারে অংশগ্রহণ কিংবা গবেষণা সংক্রান্ত যে কোনো বিষয়ে জামিয়ার সঙ্গে যোগাযোগ করুন।"
              : "Write to the Jamia about submitting a paper, joining a seminar, or any other research matter."}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
            >
              {lang === "bn" ? "যোগাযোগ করুন" : "Get in touch"}
              <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
            </Link>
            <a
              href={`mailto:${site.emails[0].address}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-bold text-white transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              {site.emails[0].address}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
