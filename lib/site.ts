import type { T } from "./i18n";

export const site = {
  nameBn: "জামিয়া উম্মুল কুরা আল ইসলামিয়া বাংলাদেশ",
  nameEn: "Jamia Ummul Qura Al Islamia Bangladesh",
  nameAr: "جامعة أم القرى الإسلامية بنغلاديش",
  /** Compact forms for the header lockup, where the full name would truncate. */
  shortBn: "জামিয়া উম্মুল কুরা",
  shortEn: "Jamia Ummul Qura",
  shortAr: "جامعة أم القرى",
  tagline: {
    bn: "কুরআন, সুন্নাহ ও ইলমে দ্বীনের আলোকিত অঙ্গন",
    en: "An illuminated courtyard of the Qur'an, the Sunnah and sacred knowledge",
  } satisfies T,
  established: "2022",
  address: {
    bn: "দাড়িয়াপুর, সদর, ব্রাহ্মণবাড়িয়া।",
    en: "Dariapur, Sadar, Brahmanbaria, Bangladesh",
  } satisfies T,
  /** Shown beneath the Arabic name, on the hero and the footer band. */
  addressAr: "دريافور، صدر، برهمن باريا",

  /** The madrasah's single contact number — also the Principal's. */
  phone: {
    number: "01722139364",
    display: "০১৭২২-১৩৯৩৬৪",
    displayEn: "01722-139364",
    label: {
      bn: "মাদরাসা ও প্রিন্সিপাল",
      en: "Madrasah & Principal",
    } satisfies T,
  },

  emails: [
    {
      address: "jamiaummulqura22@gmail.com",
      label: { bn: "মাদরাসা অফিস", en: "Madrasah Office" } satisfies T,
    },
    {
      address: "muftiobaidullah64@gmail.com",
      label: { bn: "প্রিন্সিপাল", en: "Principal" } satisfies T,
    },
  ],

  /** Google Maps: the pin the madrasah shared, and its embeddable form.
      Coordinates resolved from that shared link. */
  mapLink: "https://maps.app.goo.gl/k65GRYrU255qQYgr9",
  mapEmbed: "https://maps.google.com/maps?q=23.9787921,91.0999891&z=17&output=embed",

  /** The madrasah's QMM Soft portal — online admission and published results. */
  admissionUrl: "https://qmmsoft.com/1177/online_admission",
  donationUrl: "https://qmmsoft.com/1177/donation",
  guardianUrl: "https://qmmsoft.com/1177/login",
  resultUrl: "https://qmmsoft.com/1177/student_result",

  facebook: "https://www.facebook.com/share/1BqehgjH1v/",
  /** WhatsApp uses the same number as the madrasah line. */
  whatsapp: "8801722139364",
  youtube: "https://youtube.com/@jamiaummulquraalislamia",
};

/** Mobile-banking and bank details for donations. */
export const donationChannels = {
  mobile: [
    { name: { bn: "বিকাশ", en: "bKash" } satisfies T, number: "01722139364", display: "০১৭২২-১৩৯৩৬৪", displayEn: "01722-139364" },
    { name: { bn: "নগদ", en: "Nagad" } satisfies T, number: "01722139364", display: "০১৭২২-১৩৯৩৬৪", displayEn: "01722-139364" },
  ],
  bank: {
    name: { bn: "আল-আরাফাহ্ ইসলামী ব্যাংক লিমিটেড", en: "Al-Arafah Islami Bank Limited" } satisfies T,
    accountName: "JAMIA UMMUL QURA AL ISLAMIA",
    accountType: { bn: "মুদারাবা সেভিংস অ্যাকাউন্ট", en: "Mudaraba Savings Account" } satisfies T,
    accountNumber: "0641120156615",
    branch: { bn: "ব্রাহ্মণবাড়িয়া শাখা", en: "Brahmanbaria Branch" } satisfies T,
  },
};

/** Navigation. Groups render as dropdowns on desktop, accordions on mobile. */
export type NavLink = { href: string; label: T };
export type NavItem = NavLink & { children?: NavLink[] };

export const nav: NavItem[] = [
  { href: "/", label: { bn: "হোম", en: "Home" } },
  {
    href: "/about",
    label: { bn: "পরিচিতি", en: "About" },
    children: [
      { href: "/about", label: { bn: "প্রতিষ্ঠান পরিচিতি", en: "Our Institution" } },
      { href: "/about#message", label: { bn: "প্রিন্সিপালের বাণী", en: "Principal's Message" } },
      { href: "/teachers", label: { bn: "শিক্ষক পরিচিতি", en: "Our Faculty" } },
    ],
  },
  {
    href: "/departments",
    label: { bn: "শিক্ষা কার্যক্রম", en: "Academics" },
    children: [
      { href: "/departments", label: { bn: "বিভাগসমূহ", en: "Departments" } },
      { href: "/admission", label: { bn: "ভর্তি তথ্য", en: "Admission" } },
      { href: "/exams", label: { bn: "পরীক্ষা তথ্য", en: "Examinations" } },
      { href: "/results", label: { bn: "পরীক্ষার ফলাফল", en: "Examination Results" } },
      { href: "/facilities", label: { bn: "সুযোগ-সুবিধা", en: "Facilities" } },
      { href: "/research", label: { bn: "গবেষণা বিভাগ", en: "Research" } },
      { href: "/scholarships", label: { bn: "বৃত্তি ও অনুদান", en: "Scholarships" } },
    ],
  },
  {
    href: "/notices",
    label: { bn: "সংবাদ", en: "News" },
    children: [
      { href: "/notices", label: { bn: "নোটিশ বোর্ড", en: "Notice Board" } },
      { href: "/events", label: { bn: "কার্যক্রম ও অনুষ্ঠান", en: "Events" } },
      { href: "/gallery", label: { bn: "ফটো গ্যালারি", en: "Gallery" } },
      { href: "/guardians", label: { bn: "অভিভাবকদের প্রতি", en: "For Guardians" } },
    ],
  },
  { href: "/donation", label: { bn: "অনুদান", en: "Donate" } },
  { href: "/contact", label: { bn: "যোগাযোগ", en: "Contact" } },
];
