import type { T } from "./i18n";

export const site = {
  nameBn: "জামিয়া উম্মুল কুরা আল-ইসলামিয়া",
  nameEn: "Jamia Ummol Qura Al Islamia",
  nameAr: "جامعة أم القرى الإسلامية براهمن باريا بنغلاديش",
  shortAr: "جامعة أم القرى الإسلامية",
  tagline: {
    bn: "কুরআন, সুন্নাহ ও ইলমে দ্বীনের আলোকিত অঙ্গন",
    en: "An illuminated courtyard of the Qur'an, the Sunnah and sacred knowledge",
  } satisfies T,
  established: "2022",
  address: {
    bn: "ফুলবাড়িয়া, সদর, ব্রাহ্মণবাড়িয়া, বাংলাদেশ",
    en: "Phulbaria, Sadar, Brahmanbaria, Bangladesh",
  } satisfies T,
  // Contact details are intentionally left blank until confirmed by the madrasah.
  phone: "",
  phoneAlt: "",
  email: "",
  facebook: "",
  youtube: "",
  mapEmbed: "",
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
      { href: "/facilities", label: { bn: "সুযোগ-সুবিধা", en: "Facilities" } },
    ],
  },
  {
    href: "/notices",
    label: { bn: "সংবাদ", en: "News" },
    children: [
      { href: "/notices", label: { bn: "নোটিশ বোর্ড", en: "Notice Board" } },
      { href: "/events", label: { bn: "কার্যক্রম ও অনুষ্ঠান", en: "Events" } },
      { href: "/gallery", label: { bn: "ফটো গ্যালারি", en: "Gallery" } },
    ],
  },
  { href: "/donation", label: { bn: "অনুদান", en: "Donate" } },
  { href: "/contact", label: { bn: "যোগাযোগ", en: "Contact" } },
];
