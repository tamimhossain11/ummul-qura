"use client";

import Image from "next/image";
import { about, teachers } from "@/lib/content";
import { site } from "@/lib/site";
import { Icon } from "../Icon";
import { useLang } from "../LanguageProvider";
import { Ornament } from "../Ornament";
import { PageHero } from "../PageHero";
import { Container, SectionHeading } from "../Section";

export function AboutView() {
  const { t, lang, n } = useLang();
  const principal = teachers[0];

  return (
    <>
      <PageHero
        title={{ bn: "প্রতিষ্ঠান পরিচিতি", en: "About Our Institution" }}
        arabic="نبذة عن الجامعة"
        subtitle={{
          bn: "ব্রাহ্মণবাড়িয়ার বুকে কুরআন ও সুন্নাহর আলো ছড়িয়ে দেওয়ার এক নিরলস প্রয়াস।",
          en: "A tireless endeavour to spread the light of Qur'an and Sunnah in the heart of Brahmanbaria.",
        }}
      />

      {/* Introduction */}
      <section className="py-20">
        <Container className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="start"
              eyebrow={{ bn: "আমরা কারা", en: "Who We Are" }}
              title={{ bn: "জামিয়া উম্মুল কুরা আল-ইসলামিয়া", en: "Jamia Ummol Qura Al Islamia" }}
            />
            <div className="space-y-5 text-base leading-relaxed text-navy-800/75">
              <p>{t(about.intro)}</p>
              <p>{t(about.history)}</p>
            </div>

            <dl className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                { icon: "calendar" as const, k: { bn: "প্রতিষ্ঠাকাল", en: "Established" }, v: lang === "bn" ? `${n(site.established)} ঈসায়ী` : site.established },
                { icon: "pin" as const, k: { bn: "অবস্থান", en: "Location" }, v: t(site.address) },
                { icon: "users" as const, k: { bn: "শিক্ষকমণ্ডলী", en: "Faculty" }, v: lang === "bn" ? `${n(teachers.length)} জন` : `${teachers.length} teachers` },
                { icon: "home" as const, k: { bn: "ধরন", en: "Type" }, v: lang === "bn" ? "আবাসিক ও অনাবাসিক" : "Residential & day scholars" },
              ].map((row, i) => (
                <div key={i} className="rounded-xl border border-navy-800/10 bg-white p-4 shadow-soft">
                  <dt className="flex items-center gap-2 text-xs font-bold caps text-teal-600">
                    <Icon name={row.icon} className="h-3.5 w-3.5" strokeWidth={2} />
                    {t(row.k)}
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-navy-900">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-5">
            <div className="mask-arch relative aspect-4/5 overflow-hidden border-4 border-white bg-navy-800 shadow-lift">
              <Image
                src="/cover.jpeg"
                alt={t({ bn: "জামিয়ার প্রাঙ্গণ", en: "The Jamia grounds" })}
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-teal-600 p-7 text-center text-white">
              <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.08]" />
              <p dir="rtl" className="font-arabic relative text-2xl leading-loose text-gold-300">
                خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
              </p>
              <Ornament tone="light" className="relative mx-auto my-3" />
              <p className="relative text-sm text-white/75">
                {lang === "bn"
                  ? "“তোমাদের মধ্যে সর্বোত্তম সেই ব্যক্তি, যে কুরআন শেখে এবং অন্যকে শেখায়।” — সহীহ বুখারী"
                  : "“The best of you are those who learn the Qur'an and teach it.” — Sahih al-Bukhari"}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & vision */}
      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "লক্ষ্য ও উদ্দেশ্য", en: "Mission & Vision" }}
            title={{ bn: "আমরা যে পথে হাঁটছি", en: "The Path We Walk" }}
            arabic="رسالتنا ورؤيتنا"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              { icon: "star" as const, title: { bn: "আমাদের লক্ষ্য", en: "Our Mission" }, body: about.mission },
              { icon: "heart" as const, title: { bn: "আমাদের স্বপ্ন", en: "Our Vision" }, body: about.vision },
            ].map((card, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl border border-navy-800/10 bg-white p-8 shadow-soft">
                <div className="pattern-girih-dark pointer-events-none absolute -end-8 -top-8 h-32 w-32 opacity-[0.07]" />
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-teal-600 text-white">
                  <Icon name={card.icon} className="h-7 w-7" />
                </span>
                <h3 className="text-2xl font-bold text-navy-900">{t(card.title)}</h3>
                <span className="rule-gold my-4 block h-px w-24" />
                <p className="text-base leading-relaxed text-navy-800/75">{t(card.body)}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-navy-800/10 bg-white p-6 text-center shadow-soft">
                <span className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-navy-950">
                  {n(i + 1)}
                </span>
                <h4 className="font-bold text-navy-900">{t(v.title)}</h4>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{t(v.body)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Principal's message */}
      <section
        id="message"
        className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-20 text-white"
      >
        <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.07]" />
        <Container className="relative">
          <SectionHeading
            tone="light"
            eyebrow={{ bn: "প্রিন্সিপালের বাণী", en: "Principal's Message" }}
            title={{ bn: "সম্মানিত প্রতিষ্ঠাতা প্রিন্সিপালের বাণী", en: "A Word from Our Founder & Principal" }}
            arabic="كلمة الرئيس المحترم"
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-12">
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
                <p className="text-lg font-bold">{t(principal.name)}</p>
                <span className="rule-gold mx-auto my-3 block h-px w-24" />
                <p className="text-sm text-cyan-200/80">{t(principal.role)}</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <span className="font-display absolute -top-4 start-6 text-7xl leading-none text-gold-500/40">
                  &ldquo;
                </span>
                <div className="relative space-y-5 text-base leading-relaxed text-white/80">
                  {t(about.message)
                    .split("\n\n")
                    .map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                </div>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-bold text-gold-300">{t(principal.name)}</p>
                  <p className="text-sm text-white/50">{t(principal.role)}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
