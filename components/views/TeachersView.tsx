"use client";

import { teachers } from "@/lib/content";
import { TeacherCard } from "../Cards";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container, SectionHeading } from "../Section";

export function TeachersView() {
  const { lang, n } = useLang();
  const [principal, ...rest] = teachers;

  return (
    <>
      <PageHero
        title={{ bn: "শিক্ষক পরিচিতি", en: "Our Faculty" }}
        arabic="هيئة التدريس"
        subtitle={{
          bn: "দেশের স্বনামধন্য প্রতিষ্ঠান থেকে সনদপ্রাপ্ত অভিজ্ঞ মুফতী, মাওলানা ও হাফেজ সাহেবানের সমন্বয়ে গঠিত আমাদের শিক্ষকমণ্ডলী।",
          en: "Our faculty brings together experienced Muftis, Maulanas and Huffaz certified by the country's most respected institutions.",
        }}
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "প্রতিষ্ঠাতা", en: "Founder" }}
            title={{ bn: "সম্মানিত প্রতিষ্ঠাতা প্রিন্সিপাল", en: "Founder & Principal" }}
          />
          <div className="mx-auto mt-12 max-w-xs">
            <TeacherCard teacher={principal} featured />
          </div>
        </Container>
      </section>

      <section className="border-t border-navy-800/10 bg-sky-100/60 py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "উস্তাদমণ্ডলী", en: "Teaching Staff" }}
            title={{ bn: "সম্মানিত শিক্ষকবৃন্দ", en: "Our Honoured Teachers" }}
            body={{
              bn: `বর্তমানে জামিয়ায় মোট ${n(teachers.length)} জন সম্মানিত উস্তাদ শিক্ষাদান ও প্রশাসনিক দায়িত্বে নিয়োজিত আছেন।`,
              en: `The Jamia currently has ${teachers.length} honoured teachers serving in both teaching and administrative roles.`,
            }}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((teacher) => (
              <TeacherCard key={teacher.slug} teacher={teacher} />
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-navy-800/50">
            {lang === "bn"
              ? "কিছু শিক্ষকের ছবি এখনো সংযোজন করা হয়নি; শীঘ্রই হালনাগাদ করা হবে ইনশাআল্লাহ।"
              : "Portraits for a few teachers are yet to be added and will be updated soon, inshaAllah."}
          </p>
        </Container>
      </section>
    </>
  );
}
