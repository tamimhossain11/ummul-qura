"use client";

import Image from "next/image";
import Link from "next/link";
import { about, departments, events, features, gallery, land, resultSummary, teachers } from "@/lib/content";
import { site } from "@/lib/site";
import { DepartmentCard, EventCard, FeatureCard, TeacherCard } from "../Cards";
import { Icon } from "../Icon";
import { useLang } from "../LanguageProvider";
import { Ornament } from "../Ornament";
import { Container, SectionHeading } from "../Section";

export function HomeView() {
  const { t, lang, n } = useLang();
  const principal = teachers[0];

  const stats = [
    { value: site.established, label: { bn: "প্রতিষ্ঠাকাল", en: "Established" } },
    { value: `${teachers.length}`, label: { bn: "শিক্ষকমণ্ডলী", en: "Faculty Members" }, suffix: { bn: " জন", en: "" } },
    { value: `${departments.length}`, label: { bn: "শিক্ষা বিভাগ", en: "Departments" }, suffix: { bn: " টি", en: "" } },
    { value: "24/7", label: { bn: "আবাসিক তত্ত্বাবধান", en: "Residential Care" } },
  ];

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-teal-600">
        <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.08]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -start-32 top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
        />
        <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-rise text-center lg:text-start">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-300">
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-400" />
              {lang === "bn"
                ? `প্রতিষ্ঠিত ${n(site.established)} ঈসায়ী · ব্রাহ্মণবাড়িয়া`
                : `Established ${site.established} · Brahmanbaria`}
            </p>

            {/* The Jamia's Arabic calligraphic name, as it appears on the banners */}
            <p
              dir="rtl"
              className="font-arabic text-balance text-center text-3xl leading-[1.7] text-gold-400 drop-shadow-sm sm:text-4xl lg:text-left lg:text-5xl"
            >
              {site.nameAr}
            </p>

            <h1 className="mt-4 text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
              {lang === "bn" ? site.nameBn : site.nameEn}
            </h1>

            <Ornament tone="light" className="mx-auto my-6 lg:mx-0" />

            <p className="text-balance text-lg leading-relaxed text-white/75">
              {t(site.tagline)}
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/admission"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3 text-base font-bold text-navy-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-400"
              >
                {lang === "bn" ? "ভর্তি তথ্য" : "Admissions"}
                <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-base font-semibold text-white transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                {lang === "bn" ? "আমাদের পরিচিতি" : "About Us"}
              </Link>
            </div>
          </div>

          {/* Campus artwork in a mihrab arch */}
          <div className="animate-rise relative [animation-delay:150ms]">
            <div className="mask-arch-tall relative aspect-4/5 overflow-hidden border-4 border-gold-500/50 bg-navy-800 shadow-2xl sm:aspect-square lg:aspect-4/5">
              <Image
                src="/cover.jpeg"
                alt={t({
                  bn: "জামিয়া উম্মুল কুরা আল-ইসলামিয়ার প্রাঙ্গণ ও মাসজিদুল মিসবাহ",
                  en: "The grounds of Jamia Ummul Qura Al Islamia and Masjidul Misbah",
                })}
                fill
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 start-1/2 -translate-x-1/2 rounded-full border border-gold-500/40 bg-navy-950/90 px-6 py-2.5 text-center backdrop-blur rtl:translate-x-1/2">
              <p className="whitespace-nowrap text-sm font-semibold text-gold-300">
                {lang === "bn" ? "মাসজিদুল মিসবাহ" : "Masjidul Misbah"}
              </p>
            </div>
          </div>
        </Container>
        <div className="rule-gold h-0.5 w-full" />
      </section>

      {/* ── Stats ──────────────────────────────────────────────────────── */}
      <section className="border-b border-navy-800/10 bg-white">
        <Container>
          <dl className="grid grid-cols-2 divide-navy-800/10 sm:divide-x lg:grid-cols-4 rtl:sm:divide-x-reverse">
            {stats.map((s, i) => (
              <div key={i} className="px-4 py-8 text-center">
                <dt className="order-2 mt-1 text-sm font-medium text-navy-800/60">
                  {t(s.label)}
                </dt>
                <dd className="text-3xl font-bold text-teal-600 sm:text-4xl">
                  {n(s.value)}
                  {s.suffix && (
                    <span className="text-xl text-navy-800/50">{t(s.suffix)}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── About ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20">
        <div className="pattern-girih-dark pointer-events-none absolute inset-0 opacity-[0.04]" />
        <Container className="relative grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="mask-arch relative aspect-4/3 overflow-hidden border-4 border-white bg-navy-800 shadow-lift">
              <Image
                src="/banners/campus.jpeg"
                alt={t({ bn: "জামিয়ার প্রাঙ্গণ", en: "The Jamia grounds" })}
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -end-4 hidden rounded-2xl bg-gradient-to-br from-navy-900 to-teal-600 p-6 text-center text-white shadow-lift sm:block">
              <p className="text-4xl font-bold text-gold-400">{n(site.established)}</p>
              <p className="mt-1 text-xs caps text-white/70">
                {lang === "bn" ? "সন থেকে খিদমতে" : "Serving since"}
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              align="start"
              eyebrow={{ bn: "আমাদের পরিচিতি", en: "About Us" }}
              title={{ bn: "ইলম ও আদবের এক আলোকিত অঙ্গন", en: "A Courtyard Lit by Knowledge and Manners" }}
              arabic="نبذة عن الجامعة"
            />
            <p className="text-base leading-relaxed text-navy-800/75">{t(about.intro)}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-navy-800/10 bg-white p-5 shadow-soft">
                <h3 className="flex items-center gap-2 font-bold text-navy-900">
                  <Icon name="star" className="h-4 w-4 text-gold-500" strokeWidth={2} />
                  {lang === "bn" ? "আমাদের লক্ষ্য" : "Our Mission"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
                  {t(about.mission)}
                </p>
              </div>
              <div className="rounded-xl border border-navy-800/10 bg-white p-5 shadow-soft">
                <h3 className="flex items-center gap-2 font-bold text-navy-900">
                  <Icon name="heart" className="h-4 w-4 text-gold-500" strokeWidth={2} />
                  {lang === "bn" ? "আমাদের স্বপ্ন" : "Our Vision"}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
                  {t(about.vision)}
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-600"
            >
              {lang === "bn" ? "বিস্তারিত জানুন" : "Learn more"}
              <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Departments ────────────────────────────────────────────────── */}
      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "শিক্ষা কার্যক্রম", en: "Academics" }}
            title={{ bn: "আমাদের শিক্ষা বিভাগসমূহ", en: "Our Departments of Study" }}
            arabic="أقسام الجامعة"
            body={{
              bn: "মক্তব থেকে কিতাব বিভাগ পর্যন্ত ধারাবাহিক ও সুবিন্যস্ত পাঠক্রম, প্রতিটি স্তরে অভিজ্ঞ উস্তাদের তত্ত্বাবধান।",
              en: "A continuous, carefully graded curriculum from Maktab to the Kitab department, each stage guided by experienced teachers.",
            }}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <DepartmentCard key={d.slug} department={d} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Results ────────────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "আমাদের সাফল্য", en: "Our Results" }}
            title={{ bn: "বেফাক ও এদারা পরীক্ষার সফলতা", en: "Success in the Befaq & Edara Examinations" }}
            arabic="نتائج الامتحانات"
            body={{
              bn: "প্রতিষ্ঠার তৃতীয় বর্ষেই কেন্দ্রীয় বোর্ড পরীক্ষায় জামিয়ার ছাত্রদের ঐতিহাসিক ফলাফল।",
              en: "In only its third year, the Jamia's students achieved a historic result in the central board examinations.",
            }}
          />
          <dl className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resultSummary.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-navy-800/10 bg-white p-6 text-center shadow-soft"
              >
                <dd className="text-5xl font-bold text-teal-600">{n(stat.value)}</dd>
                <dt className="mt-2 font-bold text-navy-900">{t(stat.label)}</dt>
                {stat.note && (
                  <p className="mt-1 text-xs leading-relaxed text-navy-800/55">{t(stat.note)}</p>
                )}
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-600"
            >
              {lang === "bn" ? "সম্পূর্ণ মেধাতালিকা" : "Full merit lists"}
              <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
            </Link>
            <a
              href={site.resultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-navy-800/20 px-7 py-3 text-sm font-bold text-navy-900 transition-colors hover:border-gold-500 hover:text-gold-600"
            >
              {lang === "bn" ? "নিজের ফলাফল দেখুন" : "Check your result"}
            </a>
          </div>
        </Container>
      </section>

      {/* ── Permanent land ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border-4 border-white bg-navy-800 shadow-lift">
              <Image
                src={land.images[0].src}
                alt={t(land.images[0].caption)}
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -end-4 hidden rounded-2xl bg-gradient-to-br from-navy-900 to-teal-600 px-7 py-5 text-center text-white shadow-lift sm:block">
              <p className="text-4xl font-bold text-gold-400">{n(land.area)}</p>
              <p className="mt-1 text-xs caps text-white/70">{t(land.areaUnit)}</p>
            </div>
          </div>
          <div>
            <SectionHeading
              align="start"
              eyebrow={{ bn: "স্থায়ী জায়গা", en: "Permanent Site" }}
              title={land.title}
              arabic="الأرض الدائمة"
            />
            <p className="text-base leading-relaxed text-navy-800/75">{t(land.body)}</p>
            <Link
              href="/about#land"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-600"
            >
              {lang === "bn" ? "বিস্তারিত দেখুন" : "Learn more"}
              <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Principal's message ────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-20 text-white">
        <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.07]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mask-arch relative mx-auto aspect-4/5 max-w-xs overflow-hidden border-4 border-gold-500/50 bg-navy-800 shadow-2xl">
              <Image
                src={principal.photo ?? "/logo.jpeg"}
                alt={t(principal.name)}
                fill
                sizes="320px"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-bold text-white">{t(principal.name)}</p>
              <span className="rule-gold mx-auto my-3 block h-px w-24" />
              <p className="text-sm text-cyan-200/80">{t(principal.role)}</p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <SectionHeading
              align="start"
              tone="light"
              eyebrow={{ bn: "প্রিন্সিপালের বাণী", en: "Principal's Message" }}
              title={{ bn: "সন্তান আমাদের হাতে এক আমানত", en: "Your Child Is a Trust in Our Hands" }}
              arabic="كلمة الرئيس"
            />
            <div className="space-y-4 text-base leading-relaxed text-white/75">
              {t(about.message)
                .split("\n\n")
                .slice(0, 2)
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>
            <Link
              href="/about#message"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold-500/50 px-6 py-3 text-sm font-bold text-gold-300 transition-colors hover:bg-gold-500 hover:text-navy-950"
            >
              {lang === "bn" ? "সম্পূর্ণ বাণী পড়ুন" : "Read the full message"}
              <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Features ───────────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "কেন আমাদের জামিয়া", en: "Why Choose Us" }}
            title={{ bn: "যে বৈশিষ্ট্যগুলো আমাদের স্বতন্ত্র করে", en: "What Sets Our Jamia Apart" }}
            arabic="مميزاتنا"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} body={f.body} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Faculty preview ────────────────────────────────────────────── */}
      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "শিক্ষক পরিচিতি", en: "Our Faculty" }}
            title={{ bn: "সম্মানিত উস্তাদমণ্ডলী", en: "Our Honoured Teachers" }}
            arabic="هيئة التدريس"
            body={{
              bn: "দেশের স্বনামধন্য প্রতিষ্ঠান থেকে সনদপ্রাপ্ত অভিজ্ঞ মুফতী ও হাফেজ সাহেবানের তত্ত্বাবধানে পরিচালিত আমাদের শিক্ষা কার্যক্রম।",
              en: "Our teaching is led by experienced Muftis and Huffaz certified by the country's most respected institutions.",
            }}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.slice(0, 4).map((teacher, i) => (
              <TeacherCard key={teacher.slug} teacher={teacher} featured={i === 0} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/teachers"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-600"
            >
              {lang === "bn" ? "সকল শিক্ষকমণ্ডলী দেখুন" : "Meet all our teachers"}
              <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Events ─────────────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "কার্যক্রম ও অনুষ্ঠান", en: "Events" }}
            title={{ bn: "জামিয়ার সাম্প্রতিক আয়োজন", en: "Recent Programmes at the Jamia" }}
            arabic="أنشطتنا"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.slice(0, 3).map((e) => (
              <EventCard key={e.slug} event={e} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-600"
            >
              {lang === "bn" ? "সকল আয়োজন দেখুন" : "View all events"}
              <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Gallery strip ──────────────────────────────────────────────── */}
      <section className="border-t border-navy-800/10 bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "ফটো গ্যালারি", en: "Gallery" }}
            title={{ bn: "জামিয়ার এক ঝলক", en: "A Glimpse of the Jamia" }}
            arabic="معرض الصور"
          />
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {gallery.slice(0, 4).map((g, i) => (
              <Link
                key={i}
                href="/gallery"
                className="group relative aspect-4/3 overflow-hidden rounded-xl bg-navy-800 shadow-soft"
              >
                <Image
                  src={g.src}
                  alt={t(g.caption)}
                  fill
                  sizes="(min-width: 1024px) 280px, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-3 text-xs font-semibold leading-snug text-white">
                  {t(g.caption)}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Donation CTA ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 via-navy-800 to-navy-950 py-16 text-white">
        <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.08]" />
        <Container className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-start rtl:lg:text-end">
          <div className="max-w-2xl">
            <p dir="rtl" className="font-arabic mb-2 text-center text-xl text-gold-300 lg:text-left">
              مَنْ دَلَّ عَلَىٰ خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ
            </p>
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              {lang === "bn"
                ? "ইলমের এই খিদমতে আপনিও শরিক হোন"
                : "Take Your Share in This Service of Knowledge"}
            </h2>
            <p className="mt-4 text-balance leading-relaxed text-white/75">
              {lang === "bn"
                ? "আপনার যাকাত, সাদাকা ও অনুদান একজন এতিম ছাত্রের কুরআন শেখার পথ খুলে দিতে পারে। সদকায়ে জারিয়ার এই সুযোগ গ্রহণ করুন।"
                : "Your zakat, sadaqah and donations can open the path of Qur'anic learning for an orphaned student. Take this opportunity for a lasting charity."}
            </p>
          </div>
          <Link
            href="/donation"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-navy-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-400"
          >
            <Icon name="gift" className="h-5 w-5" strokeWidth={2} />
            {lang === "bn" ? "অনুদান দিন" : "Donate Now"}
          </Link>
        </Container>
      </section>
    </>
  );
}
