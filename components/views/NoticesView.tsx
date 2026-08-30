"use client";

import Link from "next/link";
import { notices } from "@/lib/content";
import { Icon } from "../Icon";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container } from "../Section";

export function NoticesView() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHero
        title={{ bn: "নোটিশ বোর্ড", en: "Notice Board" }}
        arabic="لوحة الإعلانات"
        subtitle={{
          bn: "ভর্তি, পরীক্ষা, ছুটি ও জামিয়ার সকল আনুষ্ঠানিক ঘোষণা এখানে প্রকাশিত হয়।",
          en: "Admissions, examinations, holidays and every official announcement of the Jamia appear here.",
        }}
      />

      <section className="py-20">
        <Container>
          {notices.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-navy-800/20 bg-white p-14 text-center shadow-soft">
              <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-teal-600">
                <Icon name="bell" className="h-8 w-8" />
              </span>
              <h2 className="text-xl font-bold text-navy-900">
                {lang === "bn" ? "এই মুহূর্তে কোনো নোটিশ নেই" : "No notices at the moment"}
              </h2>
              <span className="rule-gold mx-auto my-4 block h-px w-24" />
              <p className="text-sm leading-relaxed text-navy-800/65">
                {lang === "bn"
                  ? "নতুন কোনো ঘোষণা প্রকাশিত হলে তা এখানে দেখানো হবে। ইতিমধ্যে জামিয়ার সাম্প্রতিক আয়োজনগুলো দেখে নিতে পারেন।"
                  : "New announcements will appear here as they are published. In the meantime, do look through the Jamia's recent programmes."}
              </p>
              <Link
                href="/events"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-600"
              >
                {lang === "bn" ? "কার্যক্রম দেখুন" : "View events"}
                <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2.2} />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {notices.map((notice) => (
                <article
                  key={notice.slug}
                  className="group flex gap-5 rounded-2xl border border-navy-800/10 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-teal-600">
                    <Icon name="bell" className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <p className="flex flex-wrap items-center gap-3 text-xs font-bold caps text-teal-600">
                      <span>{t(notice.category)}</span>
                      <span className="text-navy-800/40">{t(notice.date)}</span>
                      {notice.pinned && (
                        <span className="rounded-full bg-gold-500 px-2.5 py-0.5 text-navy-950">
                          {lang === "bn" ? "গুরুত্বপূর্ণ" : "Pinned"}
                        </span>
                      )}
                    </p>
                    <h2 className="mt-2 text-lg font-bold text-navy-900">{t(notice.title)}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
                      {t(notice.body)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
