"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/lib/content";
import { Icon } from "../Icon";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container } from "../Section";

export function GalleryView() {
  const { t, lang, n } = useLang();
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (delta: number) =>
      setActive((i) => (i === null ? i : (i + delta + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <>
      <PageHero
        title={{ bn: "ফটো গ্যালারি", en: "Photo Gallery" }}
        arabic="معرض الصور"
        subtitle={{
          bn: "জামিয়ার প্রাঙ্গণ, আয়োজন ও কার্যক্রমের কিছু নির্বাচিত মুহূর্ত।",
          en: "Selected moments from the Jamia's grounds, gatherings and programmes.",
        }}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className="group relative aspect-4/3 overflow-hidden rounded-2xl border-4 border-white bg-navy-800 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <Image
                  src={item.src}
                  alt={t(item.caption)}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-start text-sm font-semibold leading-snug text-white">
                  {t(item.caption)}
                </span>
              </button>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-navy-800/50">
            {lang === "bn"
              ? "আরও ছবি পর্যায়ক্রমে সংযোজন করা হবে ইনশাআল্লাহ।"
              : "More photographs will be added in due course, inshaAllah."}
          </p>
        </Container>
      </section>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(gallery[active].caption)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label={lang === "bn" ? "বন্ধ করুন" : "Close"}
            className="absolute end-5 top-5 rounded-full border border-white/25 p-2.5 text-white transition-colors hover:bg-white/10"
          >
            <Icon name="close" className="h-5 w-5" strokeWidth={2} />
          </button>

          {(["prev", "next"] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(dir === "next" ? 1 : -1);
              }}
              aria-label={
                dir === "next"
                  ? lang === "bn" ? "পরবর্তী" : "Next"
                  : lang === "bn" ? "পূর্ববর্তী" : "Previous"
              }
              className={`absolute top-1/2 hidden -translate-y-1/2 rounded-full border border-white/25 p-3 text-white transition-colors hover:bg-white/10 sm:block ${
                dir === "next" ? "end-5" : "start-5"
              }`}
            >
              <Icon
                name="arrow"
                className={`h-5 w-5 ${dir === "prev" ? "rotate-180" : ""}`}
                strokeWidth={2}
              />
            </button>
          ))}

          <figure
            className="max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-navy-900">
              <Image
                src={gallery[active].src}
                alt={t(gallery[active].caption)}
                fill
                sizes="(min-width: 1024px) 896px, 95vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-white/75">
              {t(gallery[active].caption)}
              <span className="ms-3 text-white/40">
                {n(active + 1)} / {n(gallery.length)}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
