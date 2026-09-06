"use client";

import Image from "next/image";
import Link from "next/link";
import type { Department, EventItem, Teacher } from "@/lib/content";
import { Icon, type IconName } from "./Icon";
import { useLang } from "./LanguageProvider";

/** Initials fallback for faculty whose portrait has not been supplied yet. */
function PortraitFallback({ name }: { name: string }) {
  const initial = Array.from(name.trim())[0] ?? "؟";
  return (
    <div className="pattern-girih flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-800 to-teal-600">
      <span className="text-5xl font-bold text-white/80">{initial}</span>
    </div>
  );
}

export function TeacherCard({ teacher, featured = false }: { teacher: Teacher; featured?: boolean }) {
  const { t } = useLang();
  const name = t(teacher.name);

  return (
    <article
      className={`group overflow-hidden rounded-2xl border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
        featured ? "border-gold-400/70" : "border-navy-800/10"
      }`}
    >
      <div className="relative bg-sky-100 p-4 pb-0">
        <div className="mask-arch relative aspect-4/5 overflow-hidden bg-navy-800 ring-1 ring-navy-800/10">
          {teacher.photo ? (
            <Image
              src={teacher.photo}
              alt={name}
              fill
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <PortraitFallback name={name} />
          )}
        </div>
        {featured && (
          <span className="absolute end-6 top-6 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-bold text-navy-950 shadow-sm">
            {t({ bn: "প্রিন্সিপাল", en: "Principal" })}
          </span>
        )}
      </div>
      <div className="p-5 text-center">
        <h3 className="text-base font-bold leading-snug text-navy-900">{name}</h3>
        <span className="rule-gold mx-auto my-3 block h-px w-16" />
        <p className="text-sm leading-relaxed text-teal-600">{t(teacher.role)}</p>
      </div>
    </article>
  );
}

export function DepartmentCard({ department }: { department: Department }) {
  const { t } = useLang();

  return (
    <article
      id={department.slug}
      className="group relative overflow-hidden rounded-2xl border border-navy-800/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-lift"
    >
      <div className="pattern-girih-dark pointer-events-none absolute -end-6 -top-6 h-28 w-28 opacity-[0.07]" />
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-teal-600 text-white shadow-sm">
          <Icon name={department.icon as IconName} className="h-7 w-7" />
        </span>
        <span dir="rtl" className="font-arabic max-w-[9.5rem] text-end text-base leading-snug text-navy-800/40">
          {department.nameAr}
        </span>
      </div>
      <h3 className="text-xl font-bold leading-snug text-navy-900">{t(department.name)}</h3>
      <span className="rule-gold my-3 block h-px w-20" />
      <p className="text-sm leading-relaxed text-navy-800/70">{t(department.summary)}</p>
      <ul className="mt-5 space-y-2">
        {department.points.map((p, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-navy-800/80">
            <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-600" strokeWidth={2.4} />
            {t(p)}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: { bn: string; en: string };
  body: { bn: string; en: string };
}) {
  const { t } = useLang();
  return (
    <article className="group rounded-2xl border border-navy-800/10 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-teal-600 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
        <Icon name={icon as IconName} className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-bold text-navy-900">{t(title)}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{t(body)}</p>
    </article>
  );
}

export function EventCard({ event }: { event: EventItem }) {
  const { t } = useLang();

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-navy-800/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Link href={`/events#${event.slug}`} className="relative block aspect-video overflow-hidden bg-navy-900">
        <Image
          src={event.image}
          alt={t(event.title)}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-2 text-xs font-semibold caps text-teal-600">
          <Icon name="calendar" className="h-3.5 w-3.5" strokeWidth={2} />
          {t(event.date)}
        </p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-navy-900">{t(event.title)}</h3>
        {event.titleAr && (
          <p dir="rtl" className="font-arabic mt-1 text-left text-base text-navy-800/40">
            {event.titleAr}
          </p>
        )}
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-navy-800/70">
          {t(event.body)}
        </p>
        <Link
          href={`/events#${event.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-teal-600 hover:text-gold-600"
        >
          {t({ bn: "বিস্তারিত", en: "Read more" })}
          <Icon name="arrow" className="h-4 w-4 rtl:rotate-180" strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}
