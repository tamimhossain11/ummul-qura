"use client";

import Image from "next/image";
import { events } from "@/lib/content";
import { Icon } from "../Icon";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container } from "../Section";

export function EventsView() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        title={{ bn: "কার্যক্রম ও অনুষ্ঠান", en: "Events & Programmes" }}
        arabic="أنشطة الجامعة"
        subtitle={{
          bn: "ইলমী মুযাকারা, প্রতিযোগিতা ও সাংস্কৃতিক আয়োজনের মাধ্যমে ছাত্রদের প্রতিভা বিকাশের ধারাবাহিক প্রয়াস।",
          en: "Scholarly gatherings, competitions and cultural programmes that draw out the talents of our students.",
        }}
      />

      <section className="py-20">
        <Container className="space-y-16">
          {events.map((event, index) => (
            <article
              key={event.slug}
              id={event.slug}
              className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-video overflow-hidden rounded-2xl border-4 border-white bg-navy-800 shadow-lift">
                  <Image
                    src={event.image}
                    alt={t(event.title)}
                    fill
                    sizes="(min-width: 1024px) 560px, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                {event.titleAr && (
                  <p dir="rtl" className="font-arabic mb-2 text-left text-2xl text-navy-800/40">
                    {event.titleAr}
                  </p>
                )}
                <h2 className="text-balance text-2xl font-bold leading-tight text-navy-900 sm:text-3xl">
                  {t(event.title)}
                </h2>
                <span className="rule-gold my-5 block h-px w-32" />

                <dl className="mb-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <div className="flex items-center gap-2 text-teal-600">
                    <Icon name="calendar" className="h-4 w-4" strokeWidth={2} />
                    <dd className="font-semibold">{t(event.date)}</dd>
                  </div>
                  {event.time && (
                    <div className="flex items-center gap-2 text-teal-600">
                      <Icon name="clock" className="h-4 w-4" strokeWidth={2} />
                      <dd className="font-semibold">{t(event.time)}</dd>
                    </div>
                  )}
                  {event.venue && (
                    <div className="flex items-center gap-2 text-teal-600">
                      <Icon name="pin" className="h-4 w-4" strokeWidth={2} />
                      <dd className="font-semibold">{t(event.venue)}</dd>
                    </div>
                  )}
                </dl>

                <p className="text-base leading-relaxed text-navy-800/75">{t(event.body)}</p>

                {event.highlights && (
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {event.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 rounded-lg bg-white p-3 text-sm text-navy-800/80 shadow-soft"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold-600"
                          strokeWidth={2.4}
                        />
                        {t(h)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
