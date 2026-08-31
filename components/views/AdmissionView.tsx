"use client";

import Link from "next/link";
import { admission, departments } from "@/lib/content";
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

      {/* Open departments + fees */}
      <section className="py-20">
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
                  {departments.map((d) => (
                    <tr key={d.slug} className="transition-colors hover:bg-sky-50">
                      <td className="px-6 py-4 font-semibold text-navy-900">{t(d.name)}</td>
                      <td dir="rtl" className="font-arabic px-6 py-4 text-base text-navy-800/60">
                        {d.nameAr}
                      </td>
                      <td className="px-6 py-4 text-navy-800/40 italic">—</td>
                      <td className="px-6 py-4 text-navy-800/40 italic">—</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-5 text-center text-sm text-navy-800/50">
            {lang === "bn"
              ? "* ভর্তি ফি ও আসন সংখ্যা সংক্রান্ত হালনাগাদ তথ্যের জন্য জামিয়ার অফিসে যোগাযোগ করুন।"
              : "* Please contact the Jamia office for up-to-date fees and seat availability."}
          </p>
        </Container>
      </section>

      {/* Enquiry */}
      <section className="border-t border-navy-800/10 bg-sky-100/60 py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="start"
              eyebrow={{ bn: "ভর্তি অনুসন্ধান", en: "Admission Enquiry" }}
              title={{ bn: "আপনার জিজ্ঞাসা আমাদের জানান", en: "Send Us Your Enquiry" }}
            />
            <p className="text-base leading-relaxed text-navy-800/75">
              {lang === "bn"
                ? "ফরমটি পূরণ করে পাঠালে জামিয়ার পক্ষ থেকে যোগাযোগ করা হবে ইনশাআল্লাহ। অথবা সরাসরি জামিয়ার অফিসে চলে আসুন।"
                : "Fill in the form and the Jamia will get in touch, inshaAllah. You are also welcome to visit the office in person."}
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

          <AdmissionForm />
        </Container>
      </section>
    </>
  );
}

function AdmissionForm() {
  const { t, lang } = useLang();

  const field =
    "w-full rounded-lg border border-navy-800/15 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-800/35 focus:border-teal-500";
  const label = "mb-1.5 block text-xs font-bold caps text-navy-800/60";

  return (
    <form
      className="rounded-2xl border border-navy-800/10 bg-white p-8 shadow-soft"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="a-student">
            {t({ bn: "ছাত্রের নাম", en: "Student's name" })}
          </label>
          <input id="a-student" name="student" className={field} autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="a-guardian">
            {t({ bn: "অভিভাবকের নাম", en: "Guardian's name" })}
          </label>
          <input id="a-guardian" name="guardian" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="a-phone">
            {t({ bn: "মোবাইল নম্বর", en: "Mobile number" })}
          </label>
          <input id="a-phone" name="phone" type="tel" className={field} autoComplete="tel" />
        </div>
        <div>
          <label className={label} htmlFor="a-dept">
            {t({ bn: "কাঙ্ক্ষিত বিভাগ", en: "Preferred department" })}
          </label>
          <select id="a-dept" name="department" className={field} defaultValue="">
            <option value="" disabled>
              {t({ bn: "নির্বাচন করুন", en: "Select…" })}
            </option>
            {departments.map((d) => (
              <option key={d.slug} value={d.slug}>
                {t(d.name)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label className={label} htmlFor="a-note">
          {t({ bn: "আপনার জিজ্ঞাসা", en: "Your enquiry" })}
        </label>
        <textarea id="a-note" name="note" rows={4} className={field} />
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gold-500 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
      >
        {lang === "bn" ? "আবেদন পাঠান" : "Send enquiry"}
      </button>
      <p className="mt-3 text-center text-xs text-navy-800/45">
        {lang === "bn"
          ? "ফরমটি বর্তমানে প্রদর্শনের জন্য; সার্ভার সংযুক্ত হলে সক্রিয় হবে।"
          : "This form is for display; it will be activated once connected to a server."}
      </p>
    </form>
  );
}
