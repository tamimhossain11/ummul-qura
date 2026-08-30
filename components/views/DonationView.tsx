"use client";

import { donationCauses } from "@/lib/content";
import { Icon } from "../Icon";
import { useLang } from "../LanguageProvider";
import { Ornament } from "../Ornament";
import { PageHero } from "../PageHero";
import { Container, SectionHeading } from "../Section";

/** Payment channels — details are left blank until the madrasah confirms them. */
const channels = [
  { icon: "phone" as const, name: { bn: "বিকাশ", en: "bKash" }, value: "" },
  { icon: "phone" as const, name: { bn: "নগদ", en: "Nagad" }, value: "" },
  { icon: "phone" as const, name: { bn: "রকেট", en: "Rocket" }, value: "" },
  { icon: "scroll" as const, name: { bn: "ব্যাংক হিসাব", en: "Bank Account" }, value: "" },
];

export function DonationView() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHero
        title={{ bn: "অনুদান ও সহযোগিতা", en: "Donations & Support" }}
        arabic="التبرعات"
        subtitle={{
          bn: "আপনার যাকাত, সাদাকা ও অনুদান একজন ছাত্রের কুরআন শেখার পথ খুলে দিতে পারে।",
          en: "Your zakat, sadaqah and donations can open the path of Qur'anic learning for a student.",
        }}
      />

      {/* Qur'anic encouragement */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 to-teal-600 py-16 text-center text-white">
        <div className="pattern-girih pointer-events-none absolute inset-0 opacity-[0.08]" />
        <Container className="relative">
          <p dir="rtl" className="font-arabic text-balance text-2xl leading-loose text-gold-300 sm:text-3xl">
            مَثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ
          </p>
          <Ornament tone="light" className="mx-auto my-5" />
          <p className="mx-auto max-w-2xl text-balance leading-relaxed text-white/75">
            {lang === "bn"
              ? "“যারা আল্লাহর পথে নিজেদের সম্পদ ব্যয় করে, তাদের উপমা একটি বীজের মতো, যা সাতটি শীষ উৎপন্ন করে।” — সূরা আল-বাকারা, আয়াত ২৬১"
              : "“The example of those who spend their wealth in the way of Allah is like a seed which grows seven ears.” — Surah al-Baqarah, 261"}
          </p>
        </Container>
      </section>

      {/* Causes */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "অনুদানের খাতসমূহ", en: "Where Your Gift Goes" }}
            title={{ bn: "যেসব খাতে আপনি শরিক হতে পারেন", en: "Ways You Can Take Part" }}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {donationCauses.map((cause, i) => (
              <article
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-navy-800/10 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-lift"
              >
                <div className="pattern-girih-dark pointer-events-none absolute -end-6 -top-6 h-24 w-24 opacity-[0.07]" />
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-navy-800 to-teal-600 text-white">
                  <Icon name="gift" className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-navy-900">{t(cause.title)}</h3>
                <span className="rule-gold my-3 block h-px w-16" />
                <p className="text-sm leading-relaxed text-navy-800/70">{t(cause.body)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Payment channels */}
      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container>
          <SectionHeading
            eyebrow={{ bn: "অনুদান পাঠানোর মাধ্যম", en: "How to Give" }}
            title={{ bn: "যেভাবে অনুদান পাঠাবেন", en: "Ways to Send Your Donation" }}
            body={{
              bn: "নিচের মাধ্যমগুলোতে অনুদান পাঠানো যাবে। হিসাব নম্বরসমূহ শীঘ্রই সংযোজন করা হবে ইনশাআল্লাহ।",
              en: "Donations may be sent through the channels below. The account details will be added shortly, inshaAllah.",
            }}
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-navy-800/10 bg-white p-6 text-center shadow-soft"
              >
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-teal-600">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-bold text-navy-900">{t(c.name)}</h3>
                <p className="mt-2 text-sm">
                  {c.value ? (
                    <span className="font-semibold text-teal-600">{c.value}</span>
                  ) : (
                    <span className="italic text-navy-800/35">
                      {lang === "bn" ? "শীঘ্রই সংযোজন হবে" : "To be added"}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-gold-400/50 bg-gold-200/25 p-6 text-center">
            <h3 className="flex items-center justify-center gap-2 font-bold text-navy-900">
              <Icon name="heart" className="h-5 w-5 text-gold-600" strokeWidth={2} />
              {lang === "bn" ? "সরাসরি জামিয়ায় আসুন" : "Visit the Jamia in person"}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-800/70">
              {lang === "bn"
                ? "অনুদান, যাকাত বা কুরবানির চামড়া সরাসরি জামিয়ার অফিসে জমা দেওয়া যাবে। প্রতিটি অনুদানের যথাযথ রসিদ প্রদান করা হয়।"
                : "Donations, zakat or Qurbani hides may be handed in directly at the Jamia office. A proper receipt is issued for every gift."}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
