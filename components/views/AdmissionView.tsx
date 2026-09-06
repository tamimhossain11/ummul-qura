"use client";

import Link from "next/link";
import { admission, departments } from "@/lib/content";

/** Nida'ul Arabiyyah and Darul Iqama take no direct enrolment. */
const directEntryDepartments = departments.filter((d) => d.directAdmission !== false);
import { site } from "@/lib/site";
import { Icon } from "../Icon";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container, SectionHeading } from "../Section";

export function AdmissionView() {
  const { t, lang, n } = useLang();

  return (
    <>
      <PageHero
        title={{ bn: "ভর্তি তথ্য", en: "Admissions" }}
        arabic="القبول والتسجيل"
        subtitle={admission.intro}
      />

      {/* Apply online — put first, so it is the first thing offered */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 py-12">
        <div className="pattern-girih-dark pointer-events-none absolute inset-0 opacity-[0.10]" />
        <Container className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-start">
          <div>
            <h2 className="text-balance text-2xl font-bold text-navy-950 sm:text-3xl">
              {lang === "bn" ? "অনলাইনেই আবেদন করুন" : "Apply Online"}
            </h2>
            <p className="mt-2 text-balance text-sm leading-relaxed text-navy-950/70">
              {lang === "bn"
                ? "জামিয়ার অনলাইন পোর্টালে ভর্তির আবেদন ফরম পূরণ করুন।"
                : "Complete the admission form on the Jamia's online portal."}
            </p>
          </div>
          <a
            href={site.admissionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-950 px-8 py-4 text-base font-bold text-gold-300 shadow-xl transition-all hover:-translate-y-0.5 hover:bg-navy-900"
          >
            <Icon name="pen" className="h-5 w-5" strokeWidth={2} />
            {lang === "bn" ? "অনলাইন ভর্তি আবেদন" : "Apply online"}
          </a>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "ভর্তি প্রক্রিয়া", en: "The Process" }}
            title={{ bn: "চারটি ধাপে ভর্তি সম্পন্ন হয়", en: "Admission in Four Steps" }}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {admission.steps.map((step, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl border border-navy-800/10 bg-white p-6 shadow-soft"
              >
                <span className="font-display absolute -end-1 -top-3 text-7xl font-bold leading-none text-sky-100">
                  {n(i + 1)}
                </span>
                <span className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-teal-600 text-sm font-bold text-white">
                  {n(i + 1)}
                </span>
                <h3 className="relative text-lg font-bold text-navy-900">{t(step.title)}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-navy-800/70">
                  {t(step.body)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Documents & rules */}
      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy-800/10 bg-white p-8 shadow-soft">
            <h3 className="flex items-center gap-3 text-xl font-bold text-navy-900">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-teal-600">
                <Icon name="scroll" className="h-6 w-6" />
              </span>
              {lang === "bn" ? "প্রয়োজনীয় কাগজপত্র" : "Required Documents"}
            </h3>
            <span className="rule-gold my-5 block h-px w-full" />
            <ul className="space-y-3.5">
              {admission.documents.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-navy-800/80">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.4} />
                  {t(d)}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-s-2 border-gold-400/60 ps-3.5 text-sm leading-relaxed text-navy-800/60">
              {t(admission.documentsNote)}
            </p>
          </div>

          <div className="rounded-2xl border border-navy-800/10 bg-white p-8 shadow-soft">
            <h3 className="flex items-center gap-3 text-xl font-bold text-navy-900">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-teal-600">
                <Icon name="shield" className="h-6 w-6" />
              </span>
              {lang === "bn" ? "ভর্তির নিয়মাবলী" : "Admission Rules"}
            </h3>
            <span className="rule-gold my-5 block h-px w-full" />
            <ul className="space-y-3.5">
              {admission.rules.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-navy-800/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500" />
                  {t(r)}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Eligibility */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "যোগ্যতা", en: "Eligibility" }}
            title={{ bn: "ভর্তি যোগ্যতা", en: "Who May Apply" }}
            arabic="شروط القبول"
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-navy-800/10 bg-white p-8 shadow-soft">
              <h3 className="flex items-center gap-3 text-xl font-bold text-navy-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-teal-600">
                  <Icon name="scroll" className="h-6 w-6" />
                </span>
                {lang === "bn" ? "কিতাব বিভাগে ভর্তির জন্য" : "For the Kitab department"}
              </h3>
              <span className="rule-gold my-5 block h-px w-full" />
              <ul className="space-y-3.5">
                {admission.eligibility.map((e, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-navy-800/80">
                    <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.4} />
                    {t(e)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-navy-800/10 bg-white p-8 shadow-soft">
              <h3 className="flex items-center gap-3 text-xl font-bold text-navy-900">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-teal-600">
                  <Icon name="book-open" className="h-6 w-6" />
                </span>
                {lang === "bn" ? "জামাতভিত্তিক পূর্বপাঠ্য যোগ্যতা" : "Prior reading, by jamaat"}
              </h3>
              <span className="rule-gold my-5 block h-px w-full" />
              <dl className="divide-y divide-navy-800/10">
                {admission.jamaatPrerequisites.map((j, i) => (
                  <div key={i} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3 first:pt-0 last:pb-0">
                    <dt className="text-sm font-bold text-navy-900">{t(j.jamaat)}</dt>
                    <dd className="text-sm text-navy-800/70">{t(j.requires)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl rounded-xl border border-gold-400/50 bg-gold-200/25 px-6 py-4 text-center text-sm leading-relaxed text-navy-900">
            {t(admission.eligibilityNote)}
          </p>
        </Container>
      </section>

      {/* Admission test */}
      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "মূল্যায়ন", en: "Assessment" }}
            title={{ bn: "ভর্তি পরীক্ষার নিয়ম", en: "The Admission Test" }}
            arabic="اختبار القبول"
          />
          <ol className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-3">
            {admission.testRules.map((r, i) => (
              <li key={i} className="rounded-2xl border border-navy-800/10 bg-white p-7 shadow-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-gold-400">
                  {n(i + 1)}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-navy-800/75">{t(r)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Fees */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "ব্যয়", en: "Costs" }}
            title={{ bn: "ভর্তি ও মাসিক ফি বিবরণ", en: "Admission and Monthly Fees" }}
            arabic="الرسوم الدراسية"
          />
          <div className="mx-auto mt-14 max-w-4xl">
            <div className="rounded-2xl border border-gold-400/50 bg-gold-200/25 p-8 text-center">
              <p className="text-sm font-bold caps text-teal-600">
                {t(admission.fees.admission.label)}
              </p>
              <p className="mt-3 text-4xl font-bold text-navy-900">
                {t(admission.fees.admission.amount)}
              </p>
              <p className="mt-3 text-sm text-navy-800/70">{t(admission.fees.admission.note)}</p>
            </div>

            <h3 className="mt-12 text-center text-xl font-bold text-navy-900">
              {lang === "bn" ? "মাসিক বেতন ও আবাসিক খরচ" : "Monthly and residential charges"}
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {admission.fees.monthly.map((m, i) => (
                <article
                  key={i}
                  className="rounded-2xl border border-navy-800/10 bg-white p-7 text-center shadow-soft"
                >
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-teal-600 text-white">
                    <Icon name="home" className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-base font-bold leading-snug text-navy-900">
                    {t(m.label)}
                  </h4>
                  <p className="mt-3 text-2xl font-bold text-teal-600">{t(m.amount)}</p>
                  <p className="mt-2 text-sm text-navy-800/60">{t(m.note)}</p>
                </article>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {admission.fees.notes.map((note, i) => (
                <li
                  key={i}
                  className="border-s-2 border-gold-400/60 ps-4 text-sm leading-relaxed text-navy-800/70"
                >
                  {t(note)}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Open departments + fees */}
      <section className="pb-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "ভর্তি চলছে", en: "Now Open" }}
            title={{ bn: "যে বিভাগগুলোতে ভর্তি নেওয়া হচ্ছে", en: "Departments Accepting Students" }}
          />
          <div className="mt-12 overflow-hidden rounded-2xl border border-navy-800/10 bg-white shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] text-start text-sm">
                <thead>
                  <tr className="bg-navy-900 text-white">
                    <th className="px-6 py-4 text-start font-semibold">
                      {lang === "bn" ? "বিভাগ" : "Department"}
                    </th>
                    <th className="px-6 py-4 text-start font-semibold">
                      {lang === "bn" ? "আরবি নাম" : "Arabic Name"}
                    </th>
                    <th className="px-6 py-4 text-start font-semibold">
                      {lang === "bn" ? "ভর্তি ফি" : "Admission Fee"}
                    </th>
                    <th className="px-6 py-4 text-start font-semibold">
                      {lang === "bn" ? "আসন" : "Seats"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-800/10">
                  {directEntryDepartments.map((d) => (
                    <tr key={d.slug} className="transition-colors hover:bg-sky-50">
                      <td className="px-6 py-4 font-semibold text-navy-900">{t(d.name)}</td>
                      <td dir="rtl" className="font-arabic px-6 py-4 text-base text-navy-800/60">
                        {d.nameAr}
                      </td>
                      <td className="px-6 py-4 text-navy-800/80">
                        {t(admission.fees.admission.amount)}
                      </td>
                      <td className="px-6 py-4 text-navy-800/40 italic">—</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-navy-800/50">
            {lang === "bn"
              ? "* আসন সংখ্যা ও হালনাগাদ তথ্যের জন্য জামিয়ার অফিসে যোগাযোগ করুন।"
              : "* Please contact the Jamia office for seat availability and up-to-date information."}
          </p>
        </Container>
      </section>

      {/* Enquiry */}
      <section className="border-t border-navy-800/10 bg-sky-100/60 py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="start"
              eyebrow={{ bn: "অনলাইন আবেদন", en: "Apply Online" }}
              title={{ bn: "অনলাইনেই ভর্তির আবেদন করুন", en: "Apply for Admission Online" }}
            />
            <p className="text-base leading-relaxed text-navy-800/75">
              {lang === "bn"
                ? "জামিয়ার অনলাইন পোর্টাল থেকে সরাসরি ভর্তির আবেদন করা যাবে। আবেদন সম্পন্ন হলে জামিয়ার পক্ষ থেকে যোগাযোগ করা হবে ইনশাআল্লাহ। প্রয়োজনে সরাসরি জামিয়ার অফিসেও আসতে পারেন।"
                : "You can apply for admission directly through the Jamia's online portal. Once your application is in, the Jamia will be in touch, inshaAllah. You are also welcome to visit the office in person."}
            </p>
            <div className="mt-7 space-y-4">
              <p className="flex items-start gap-3 text-sm text-navy-800/80">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={1.8} />
                {t(site.address)}
              </p>
              <a
                href={`tel:+880${site.phone.number.slice(1)}`}
                className="flex items-start gap-3 text-sm text-navy-800/80 hover:text-teal-600"
              >
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={1.8} />
                <span>
                  {lang === "bn" ? site.phone.display : site.phone.displayEn}
                  <span className="ms-2 text-navy-800/45">({t(site.phone.label)})</span>
                </span>
              </a>
              <a
                href={`mailto:${site.emails[0].address}`}
                className="flex items-start gap-3 text-sm text-navy-800/80 hover:text-teal-600"
              >
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={1.8} />
                {site.emails[0].address}
              </a>
            </div>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-600"
            >
              {lang === "bn" ? "যোগাযোগের পাতা" : "Contact page"}
              <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-gold-400/50 bg-gold-200/25 p-8 text-center sm:p-10">
            <div className="pattern-girih-dark pointer-events-none absolute inset-0 opacity-[0.05]" />
            <div className="relative">
              <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-teal-600 text-white">
                <Icon name="pen" className="h-8 w-8" />
              </span>
              <h3 className="text-2xl font-bold text-navy-900">
                {lang === "bn" ? "অনলাইন ভর্তি আবেদন" : "Online Admission Application"}
              </h3>
              <span className="rule-gold mx-auto my-4 block h-px w-32" />
              <p className="mx-auto max-w-sm text-balance text-sm leading-relaxed text-navy-800/75">
                {lang === "bn"
                  ? "নিচের বোতামে ক্লিক করে জামিয়ার অনলাইন পোর্টালে গিয়ে ভর্তির আবেদন ফরম পূরণ করুন।"
                  : "Use the button below to open the Jamia's online portal and complete the admission form there."}
              </p>
              <a
                href={site.admissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-navy-950 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-400"
              >
                {lang === "bn" ? "অনলাইন ভর্তি আবেদন" : "Apply online"}
                <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
              </a>
              <p className="mt-3 text-xs text-navy-800/45">qmmsoft.com</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
