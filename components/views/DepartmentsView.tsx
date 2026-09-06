"use client";

import Link from "next/link";
import { academicRules, departments, wings } from "@/lib/content";
import { DepartmentCard } from "../Cards";
import { Icon } from "../Icon";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container, SectionHeading } from "../Section";

export function DepartmentsView() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHero
        title={{ bn: "শিক্ষা বিভাগসমূহ", en: "Departments of Study" }}
        arabic="أقسام التعليم"
        subtitle={{
          bn: "মক্তব থেকে কিতাব বিভাগ পর্যন্ত ধারাবাহিক পাঠক্রম — প্রতিটি স্তরে অভিজ্ঞ উস্তাদের নিবিড় তত্ত্বাবধান।",
          en: "A continuous course of study from Maktab to the Kitab department, each stage under the close care of experienced teachers.",
        }}
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "পাঠক্রম", en: "Curriculum" }}
            title={{ bn: "চারটি বিভাগে বিন্যস্ত শিক্ষা কার্যক্রম", en: "Our Programme Across Four Departments" }}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {departments.map((d) => (
              <DepartmentCard key={d.slug} department={d} />
            ))}
          </div>

          <div className="mt-24">
            <SectionHeading
              eyebrow={{ bn: "সহায়ক শাখা", en: "Supporting Wings" }}
              title={{ bn: "পাঠদানের সহায়ক শাখাসমূহ", en: "Wings That Support the Teaching" }}
              arabic="الأقسام المساندة"
            />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {wings.map((w) => (
              <DepartmentCard key={w.slug} department={w} />
            ))}
          </div>
        </Container>
      </section>

      {/* Departmental regulations */}
      <section className="pb-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "নীতিমালা", en: "Regulations" }}
            title={{ bn: "শিক্ষা বিভাগের বিশেষ নীতিমালা", en: "Regulations of the Departments of Study" }}
            arabic="اللائحة الخاصة بقسم التعليم"
          />
          <ul className="mx-auto mt-14 grid max-w-5xl gap-4 lg:grid-cols-2">
            {academicRules.map((rule, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-2xl border border-navy-800/10 bg-white p-6 shadow-soft"
              >
                <Icon
                  name="check"
                  className="mt-1 h-4 w-4 shrink-0 text-gold-600"
                  strokeWidth={2.4}
                />
                <span className="text-sm leading-relaxed text-navy-800/80">{t(rule)}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Daily routine */}
      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "দৈনন্দিন রুটিন", en: "Daily Routine" }}
            title={{ bn: "একজন ছাত্রের দিনলিপি", en: "A Student's Day" }}
            arabic="الجدول اليومي"
            body={{
              bn: "ফজর থেকে এশা পর্যন্ত সুবিন্যস্ত সময়সূচিতে ইলম, ইবাদত, বিশ্রাম ও খেলাধুলার ভারসাম্যপূর্ণ ব্যবস্থা।",
              en: "From Fajr to Isha, a balanced schedule of study, worship, rest and recreation.",
            }}
          />
          <div className="mx-auto mt-14 max-w-3xl">
            <ol className="relative space-y-1 border-s-2 border-dashed border-teal-500/30 ps-8">
              {[
                { time: { bn: "ফজরের পূর্বে", en: "Before Fajr" }, act: { bn: "তাহাজ্জুদ ও ঘুম থেকে জাগরণ", en: "Tahajjud and waking" } },
                { time: { bn: "ফজর", en: "Fajr" }, act: { bn: "জামাতে নামায ও সকালের সবক", en: "Congregational prayer and the morning sabaq" } },
                { time: { bn: "সকাল", en: "Morning" }, act: { bn: "নাস্তা ও শ্রেণিকক্ষে নিয়মিত পাঠদান", en: "Breakfast, then regular classes" } },
                { time: { bn: "যোহর", en: "Zuhr" }, act: { bn: "নামায, দুপুরের খাবার ও বিশ্রাম", en: "Prayer, lunch and rest" } },
                { time: { bn: "আসর", en: "Asr" }, act: { bn: "নামায, খেলাধুলা ও শরীরচর্চা", en: "Prayer, sport and exercise" } },
                { time: { bn: "মাগরিব", en: "Maghrib" }, act: { bn: "নামায ও তিলাওয়াতের হালকা", en: "Prayer and the recitation circle" } },
                { time: { bn: "এশা", en: "Isha" }, act: { bn: "নামায, রাতের খাবার ও আমুখতা", en: "Prayer, dinner and revision" } },
                { time: { bn: "রাত", en: "Night" }, act: { bn: "নির্ধারিত সময়ে বিশ্রাম", en: "Rest at the appointed hour" } },
              ].map((row, i) => (
                <li key={i} className="relative pb-6 last:pb-0">
                  <span className="absolute -start-[2.6rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-teal-500/40 bg-white">
                    <span className="h-2 w-2 rotate-45 bg-gold-500" />
                  </span>
                  <p className="text-sm font-bold caps text-teal-600">
                    {t(row.time)}
                  </p>
                  <p className="mt-0.5 text-base text-navy-800/80">{t(row.act)}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-center text-sm text-navy-800/50">
              {lang === "bn"
                ? "* সময়সূচি ঋতু ও নামাযের ওয়াক্ত অনুযায়ী সামান্য পরিবর্তিত হতে পারে।"
                : "* Timings shift slightly with the seasons and the prayer times."}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="rounded-2xl bg-gradient-to-r from-navy-900 to-teal-600 p-10 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">
            {lang === "bn" ? "কোন বিভাগে ভর্তি হতে চান?" : "Which department is right for your child?"}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            {lang === "bn"
              ? "ভর্তির নিয়মাবলী, প্রয়োজনীয় কাগজপত্র ও প্রক্রিয়া সম্পর্কে বিস্তারিত জানুন।"
              : "Read the full admission rules, required documents and process."}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/admission"
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
            >
              {lang === "bn" ? "ভর্তি তথ্য দেখুন" : "See admission details"}
              <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
            </Link>
            <Link
              href="/results"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm font-bold text-white transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              {lang === "bn" ? "পরীক্ষার ফলাফল" : "Examination results"}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
