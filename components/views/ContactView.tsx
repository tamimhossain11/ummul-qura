"use client";

import { site } from "@/lib/site";
import { Icon } from "../Icon";
import { useLang } from "../LanguageProvider";
import { PageHero } from "../PageHero";
import { Container, SectionHeading } from "../Section";

function InfoCard({
  icon,
  title,
  value,
  href,
  note,
  placeholder,
}: {
  icon: "pin" | "phone" | "mail" | "clock";
  title: string;
  value: string;
  href?: string;
  note?: string;
  placeholder: string;
}) {
  return (
    <div className="rounded-2xl border border-navy-800/10 bg-white p-6 text-center shadow-soft">
      <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-teal-600 text-white">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="font-bold text-navy-900">{title}</h3>
      <span className="rule-gold mx-auto my-3 block h-px w-16" />
      {value ? (
        href ? (
          <a href={href} className="text-sm font-medium text-teal-600 hover:text-gold-600">
            {value}
          </a>
        ) : (
          <p className="text-sm leading-relaxed text-navy-800/75">{value}</p>
        )
      ) : (
        <p className="text-sm italic text-navy-800/35">{placeholder}</p>
      )}
      {value && note && (
        <p className="mt-1.5 text-xs text-navy-800/45">{note}</p>
      )}
    </div>
  );
}

export function ContactView() {
  const { t, lang } = useLang();
  const blank = lang === "bn" ? "শীঘ্রই সংযোজন করা হবে" : "To be added shortly";

  const field =
    "w-full rounded-lg border border-navy-800/15 bg-white px-4 py-2.5 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-800/35 focus:border-teal-500";
  const label = "mb-1.5 block text-xs font-bold caps text-navy-800/60";

  return (
    <>
      <PageHero
        title={{ bn: "যোগাযোগ", en: "Contact Us" }}
        arabic="اتصل بنا"
        subtitle={{
          bn: "জামিয়া সম্পর্কিত যে কোনো জিজ্ঞাসা, পরামর্শ বা ভর্তি সংক্রান্ত তথ্যের জন্য আমাদের সঙ্গে যোগাযোগ করুন।",
          en: "For any question, suggestion or admission enquiry regarding the Jamia, please get in touch.",
        }}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              icon="pin"
              title={lang === "bn" ? "ঠিকানা" : "Address"}
              value={t(site.address)}
              placeholder={blank}
            />
            <InfoCard
              icon="phone"
              title={lang === "bn" ? "মোবাইল" : "Phone"}
              value={lang === "bn" ? site.phone.display : site.phone.displayEn}
              href={`tel:+880${site.phone.number.slice(1)}`}
              note={t(site.phone.label)}
              placeholder={blank}
            />
            <InfoCard
              icon="mail"
              title={lang === "bn" ? "মাদরাসা অফিস" : "Madrasah Office"}
              value={site.emails[0].address}
              href={`mailto:${site.emails[0].address}`}
              placeholder={blank}
            />
            <InfoCard
              icon="mail"
              title={lang === "bn" ? "প্রিন্সিপাল" : "Principal"}
              value={site.emails[1].address}
              href={`mailto:${site.emails[1].address}`}
              placeholder={blank}
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-navy-800/10 bg-sky-100/60 py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="start"
              eyebrow={{ bn: "বার্তা পাঠান", en: "Send a Message" }}
              title={{ bn: "আপনার বার্তা আমাদের লিখুন", en: "Write to Us" }}
              arabic="راسلنا"
            />
            <p className="text-base leading-relaxed text-navy-800/75">
              {lang === "bn"
                ? "নিচের ফরমটি পূরণ করে আপনার বার্তা পাঠান। আমরা যথাসম্ভব দ্রুত উত্তর দেওয়ার চেষ্টা করব ইনশাআল্লাহ।"
                : "Fill in the form below to send your message. We will reply as soon as we are able, inshaAllah."}
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-navy-800/10 bg-white shadow-soft">
              <iframe
                src={site.mapEmbed}
                title={lang === "bn" ? "জামিয়ার অবস্থান" : "Location of the Jamia"}
                loading="lazy"
                className="h-64 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-t border-navy-800/10 bg-sky-50 py-3.5 text-sm font-bold text-teal-600 transition-colors hover:bg-sky-100 hover:text-gold-600"
              >
                <Icon name="pin" className="h-4 w-4" strokeWidth={2} />
                {lang === "bn" ? "গুগল ম্যাপে দিকনির্দেশ দেখুন" : "Get directions on Google Maps"}
              </a>
            </div>
          </div>

          <form
            className="rounded-2xl border border-navy-800/10 bg-white p-8 shadow-soft"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="c-name">
                  {t({ bn: "আপনার নাম", en: "Your name" })}
                </label>
                <input id="c-name" name="name" className={field} autoComplete="name" />
              </div>
              <div>
                <label className={label} htmlFor="c-phone">
                  {t({ bn: "মোবাইল নম্বর", en: "Mobile number" })}
                </label>
                <input id="c-phone" name="phone" type="tel" className={field} autoComplete="tel" />
              </div>
            </div>
            <div className="mt-5">
              <label className={label} htmlFor="c-email">
                {t({ bn: "ই-মেইল", en: "Email" })}
              </label>
              <input id="c-email" name="email" type="email" className={field} autoComplete="email" />
            </div>
            <div className="mt-5">
              <label className={label} htmlFor="c-subject">
                {t({ bn: "বিষয়", en: "Subject" })}
              </label>
              <input id="c-subject" name="subject" className={field} />
            </div>
            <div className="mt-5">
              <label className={label} htmlFor="c-message">
                {t({ bn: "আপনার বার্তা", en: "Your message" })}
              </label>
              <textarea id="c-message" name="message" rows={5} className={field} />
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-gold-500 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-gold-400"
            >
              {lang === "bn" ? "বার্তা পাঠান" : "Send message"}
            </button>
            <p className="mt-3 text-center text-xs text-navy-800/45">
              {lang === "bn"
                ? "ফরমটি বর্তমানে প্রদর্শনের জন্য; সার্ভার সংযুক্ত হলে সক্রিয় হবে।"
                : "This form is for display; it will be activated once connected to a server."}
            </p>
          </form>
        </Container>
      </section>
    </>
  );
}
