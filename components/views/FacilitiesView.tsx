"use client";

import Image from "next/image";
import { facilities } from "@/lib/content";
import { FeatureCard } from "../Cards";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container, SectionHeading } from "../Section";

export function FacilitiesView() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHero
        title={{ bn: "সুযোগ-সুবিধা", en: "Facilities" }}
        arabic="مرافق الجامعة"
        subtitle={{
          bn: "ছাত্রদের ইলমী অগ্রগতি ও সুস্থ বিকাশ নিশ্চিত করতে জামিয়ার প্রাঙ্গণে যে ব্যবস্থাগুলো রয়েছে।",
          en: "What the Jamia's grounds provide to secure our students' learning and their wholesome growth.",
        }}
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "আমাদের ব্যবস্থাপনা", en: "On Campus" }}
            title={{ bn: "প্রাঙ্গণে যা কিছু রয়েছে", en: "What You Will Find Here" }}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} body={f.body} />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-navy-800/10 bg-sky-100/60 py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mask-arch relative aspect-4/3 overflow-hidden border-4 border-white bg-navy-800 shadow-lift">
            <Image
              src="/banners/campus.jpeg"
              alt={t({ bn: "প্রস্তাবিত মাদরাসা ও মসজিদের নকশা", en: "The proposed madrasah and mosque" })}
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="start"
              eyebrow={{ bn: "আবাসিক ব্যবস্থা", en: "Residential Life" }}
              title={{ bn: "দারুল ইক্বামায় ছাত্রদের জীবন", en: "Life in Darul Iqama" }}
              arabic="دار الإقامة"
            />
            <p className="text-base leading-relaxed text-navy-800/75">
              {lang === "bn"
                ? "আবাসিক ছাত্রদের জন্য রয়েছে পরিচ্ছন্ন ও আলো-বাতাসপূর্ণ কক্ষ, নির্ধারিত সময়সূচি এবং সার্বক্ষণিক তত্ত্বাবধান। নাযিমে দারুল ইক্বামা ও নায়েবে নাযিমের নিবিড় পরিচর্যায় প্রত্যেক ছাত্রের পড়াশোনা, স্বাস্থ্য ও আচরণের প্রতি নিয়মিত খেয়াল রাখা হয়। নিজস্ব মাতবাখ থেকে প্রতিদিন পুষ্টিকর ও স্বাস্থ্যসম্মত খাবার পরিবেশন করা হয়।"
                : "Residential students have clean, airy rooms, a settled daily schedule and constant supervision. Under the close care of the warden and his deputy, each student's study, health and conduct are watched over. Nutritious, hygienic meals are served daily from our own kitchen."}
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                { bn: "সুশৃঙ্খল দৈনন্দিন রুটিন", en: "An ordered daily routine" },
                { bn: "সার্বক্ষণিক তত্ত্বাবধান", en: "Round-the-clock supervision" },
                { bn: "পুষ্টিকর খাবার", en: "Nutritious meals" },
                { bn: "নিয়মিত স্বাস্থ্য পরিচর্যা", en: "Regular health care" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-navy-800/10 bg-white px-4 py-3 text-sm font-medium text-navy-800/80 shadow-soft"
                >
                  {t(item)}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
