import type { T } from "./i18n";

/* ── Teachers ─────────────────────────────────────────────────────────── */

export type Teacher = {
  slug: string;
  name: T;
  role: T;
  photo: string | null;
  lead?: boolean;
};

export const teachers: Teacher[] = [
  {
    slug: "obaidullah-madani",
    name: { bn: "মুফতী উবায়দুল্লাহ মাদানী (হাফি.)", en: "Mufti Obaidullah Madani (Hafi.)" },
    role: { bn: "সম্মানিত প্রতিষ্ঠাতা প্রিন্সিপাল", en: "Founder & Principal" },
    photo: "/teachers/obaidullah.jpg",
    lead: true,
  },
  {
    slug: "imam-tawhid",
    name: { bn: "মুফতি ইমাম তাওহীদ (হাফি.)", en: "Mufti Imam Tawhid (Hafi.)" },
    role: { bn: "সম্মানিত নাযিমে দারুল ইক্বামা", en: "Director of the Residential Hall" },
    photo: "/teachers/tawhid.jpg",
  },
  {
    slug: "noman-ahmad-qasemi",
    name: { bn: "মুফতি নোমান আহমাদ কাসেমী (হাফি.)", en: "Mufti Noman Ahmad Qasemi (Hafi.)" },
    role: { bn: "সম্মানিত নাযিমে তা'লিমাত", en: "Director of Academic Affairs" },
    photo: "/teachers/noman.jpg",
  },
  {
    slug: "saiful-islam",
    name: { bn: "মুফতি সাইফুল ইসলাম (হাফি.)", en: "Mufti Saiful Islam (Hafi.)" },
    role: { bn: "সম্মানিত নায়েবে নাযিমে দারুল ইক্বামা", en: "Deputy Director of the Residential Hall" },
    photo: "/teachers/saiful.jpeg",
  },
  {
    slug: "abdus-subhan",
    name: { bn: "মুফতি আব্দুস সুবহান (হাফি.)", en: "Mufti Abdus Subhan (Hafi.)" },
    role: { bn: "সম্মানিত শিক্ষক ও হিসাব রক্ষক", en: "Teacher & Accountant" },
    photo: "/teachers/sobhan.jpeg",
  },
  {
    slug: "oliullah",
    name: { bn: "মুফতি অলিউল্লাহ (হাফি.)", en: "Mufti Oliullah (Hafi.)" },
    role: { bn: "সম্মানিত শিক্ষক ও নাযিমে মাতবাখ", en: "Teacher & Director of the Kitchen" },
    photo: "/teachers/oli.jpeg",
  },
  {
    slug: "shaikhul-islam",
    name: { bn: "মুফতি শায়খুল ইসলাম (হাফি.)", en: "Mufti Shaikhul Islam (Hafi.)" },
    role: { bn: "সম্মানিত শিক্ষক", en: "Teacher" },
    photo: "/teachers/shaikhul.jpeg",
  },
  {
    slug: "arman-hossain",
    name: { bn: "মাওলানা আরমান হোসাইন (হাফি.)", en: "Maulana Arman Hossain (Hafi.)" },
    role: { bn: "সম্মানিত শিক্ষক", en: "Teacher" },
    photo: null,
  },
  {
    slug: "yusuf-arshi",
    name: { bn: "মুফতী ইউসুফ আরশী (হাফি.)", en: "Mufti Yusuf Arshi (Hafi.)" },
    role: { bn: "সম্মানিত শিক্ষক", en: "Teacher" },
    photo: "/teachers/arshi.jpg",
  },
  {
    slug: "asifur-rahman",
    name: { bn: "হাফেজ আসিফুর রহমান (হাফি.)", en: "Hafez Asifur Rahman (Hafi.)" },
    role: { bn: "সম্মানিত শিক্ষক", en: "Teacher" },
    photo: "/teachers/asif.jpg",
  },
  {
    slug: "mubarakullah",
    name: { bn: "হাফেজ মাও: মুবারকুল্লাহ (হাফি.)", en: "Hafez Maulana Mubarakullah (Hafi.)" },
    role: { bn: "সম্মানিত শিক্ষক", en: "Teacher" },
    photo: "/teachers/mobarok.jpg",
  },
  {
    slug: "hasnain-ahmad",
    name: { bn: "হাফেজ হাসনাইন আহমদ (হাফি.)", en: "Hafez Hasnain Ahmad (Hafi.)" },
    role: { bn: "সম্মানিত শিক্ষক", en: "Teacher" },
    photo: "/teachers/hasnain.jpg",
  },
];

/* ── Departments ──────────────────────────────────────────────────────── */

export type Department = {
  slug: string;
  icon: string;
  name: T;
  nameAr: string;
  summary: T;
  points: T[];
};

export const departments: Department[] = [
  {
    slug: "maktab",
    icon: "book-open",
    name: { bn: "মক্তব বিভাগ", en: "Maktab (Foundation)" },
    nameAr: "قسم المكتب",
    summary: {
      bn: "শিশুদের জন্য কুরআন শিক্ষার প্রাথমিক স্তর — সহীহ শুদ্ধ উচ্চারণে কায়দা, আমপারা ও প্রয়োজনীয় মাসআলা-মাসায়েল।",
      en: "The first step of Qur'anic learning for children — Qaida, Ampara and essential daily rulings taught with correct pronunciation.",
    },
    points: [
      { bn: "সহীহ শুদ্ধ কায়দা ও আমপারা", en: "Qaida and Ampara with correct tajweed" },
      { bn: "দৈনন্দিন দোয়া-মাসায়েল", en: "Daily supplications and rulings" },
      { bn: "আদব-আখলাক গঠন", en: "Formation of character and manners" },
    ],
  },
  {
    slug: "nazera",
    icon: "quran",
    name: { bn: "নাযেরা বিভাগ", en: "Nazera (Qur'an Recitation)" },
    nameAr: "قسم الناظرة",
    summary: {
      bn: "তাজবীদসহ পূর্ণ কুরআন মাজীদ শুদ্ধভাবে তিলাওয়াতের প্রশিক্ষণ, অভিজ্ঞ ক্বারী সাহেবানের তত্ত্বাবধানে।",
      en: "Training in the correct recitation of the entire Qur'an with tajweed, under experienced Qaris.",
    },
    points: [
      { bn: "তাজবীদের মৌলিক নিয়মাবলী", en: "Foundational rules of tajweed" },
      { bn: "নিয়মিত তিলাওয়াত অনুশীলন", en: "Daily supervised recitation" },
      { bn: "মাখরাজ ও সিফাত শুদ্ধিকরণ", en: "Correction of makhraj and sifat" },
    ],
  },
  {
    slug: "hifz",
    icon: "star",
    name: { bn: "হিফজুল কুরআন বিভাগ", en: "Hifzul Qur'an (Memorisation)" },
    nameAr: "قسم حفظ القرآن",
    summary: {
      bn: "সম্পূর্ণ ত্রিশ পারা কুরআনুল কারীম মুখস্থকরণের সুশৃঙ্খল ব্যবস্থা — নিয়মিত সবক, সবকি ও আমুখতা।",
      en: "A disciplined programme for memorising all thirty juz of the Qur'an, with daily sabaq, sabqi and manzil.",
    },
    points: [
      { bn: "দৈনিক সবক, সবকি ও আমুখতা", en: "Daily sabaq, sabqi and manzil" },
      { bn: "সাপ্তাহিক ও মাসিক পরীক্ষা", en: "Weekly and monthly assessments" },
      { bn: "জেলাব্যাপী প্রতিযোগিতায় অংশগ্রহণ", en: "Participation in district-wide competitions" },
    ],
  },
  {
    slug: "kitab",
    icon: "scroll",
    name: { bn: "কিতাব বিভাগ", en: "Kitab (Islamic Sciences)" },
    nameAr: "قسم الكتب",
    summary: {
      bn: "নাহু, সরফ, বালাগাত, ফিকহ, উসূল, হাদীস ও তাফসীরসহ দরসে নিজামীর ধারাবাহিক পাঠদান।",
      en: "The graded Dars-e-Nizami curriculum: grammar, morphology, rhetoric, fiqh, usul, hadith and tafsir.",
    },
    points: [
      { bn: "দরসে নিজামীর পূর্ণাঙ্গ সিলেবাস", en: "The complete Dars-e-Nizami syllabus" },
      { bn: "আরবি ভাষায় দক্ষতা অর্জন", en: "Command of the Arabic language" },
      { bn: "গবেষণামূলক পাঠচক্র", en: "Research-oriented study circles" },
    ],
  },
  {
    slug: "arabic",
    icon: "pen",
    name: { bn: "নিদাউল আরাবিয়্যাহ — আরবি ভাষা কেন্দ্র", en: "Nida'ul Arabiyyah — Arabic Language Centre" },
    nameAr: "نداء العربية",
    summary: {
      bn: "কথোপকথন, রচনা ও খুতবায় আরবি ভাষার ব্যবহারিক প্রশিক্ষণ; নিয়মিত 'বারনামাজ আরাবী সাক্বাফী' আয়োজন।",
      en: "Practical Arabic in conversation, composition and oratory, with the regular Barnamaj Arabi Thaqafi programme.",
    },
    points: [
      { bn: "মুহাদাসা ও মুবাহাসা অনুশীলন", en: "Conversation and debate practice" },
      { bn: "খুতবা ও প্রবন্ধ প্রতিযোগিতা", en: "Oratory and essay competitions" },
      { bn: "আন্তর্জাতিক আরবি ভাষা দিবস উদযাপন", en: "World Arabic Language Day observance" },
    ],
  },
  {
    slug: "darul-iqama",
    icon: "home",
    name: { bn: "দারুল ইক্বামা — আবাসিক বিভাগ", en: "Darul Iqama — Residential Hall" },
    nameAr: "دار الإقامة",
    summary: {
      bn: "ছাত্রদের জন্য সুশৃঙ্খল ও তত্ত্বাবধানকৃত আবাসন, সুষম খাদ্য এবং চব্বিশ ঘণ্টার নিরাপত্তা ব্যবস্থা।",
      en: "Supervised, well-ordered accommodation for students, with balanced meals and round-the-clock security.",
    },
    points: [
      { bn: "অভিজ্ঞ নাযিমের তত্ত্বাবধান", en: "Supervision by experienced wardens" },
      { bn: "নিজস্ব মাতবাখ ও সুষম খাদ্য", en: "In-house kitchen with balanced meals" },
      { bn: "নিয়মতান্ত্রিক দৈনন্দিন রুটিন", en: "A structured daily routine" },
    ],
  },
];

/* ── Why choose us ────────────────────────────────────────────────────── */

export const features: { icon: string; title: T; body: T }[] = [
  {
    icon: "users",
    title: { bn: "অভিজ্ঞ উলামায়ে কেরাম", en: "Experienced Scholars" },
    body: {
      bn: "দেশবরেণ্য প্রতিষ্ঠান থেকে সনদপ্রাপ্ত মুফতী ও হাফেজ সাহেবানের সরাসরি তত্ত্বাবধানে পাঠদান।",
      en: "Instruction directly supervised by Muftis and Huffaz certified by the country's leading institutions.",
    },
  },
  {
    icon: "shield",
    title: { bn: "নিরাপদ ও মনোরম পরিবেশ", en: "A Safe, Serene Campus" },
    body: {
      bn: "কোলাহলমুক্ত সবুজ প্রাঙ্গণে নিজস্ব মসজিদ ও শ্রেণিকক্ষ, চব্বিশ ঘণ্টা তত্ত্বাবধান।",
      en: "Our own mosque and classrooms set in quiet green grounds, with round-the-clock supervision.",
    },
  },
  {
    icon: "home",
    title: { bn: "সুশৃঙ্খল আবাসিক ব্যবস্থা", en: "Well-ordered Boarding" },
    body: {
      bn: "দারুল ইক্বামায় নাযিম ও নায়েবে নাযিমের নিয়মিত তত্ত্বাবধানে ছাত্রদের সার্বিক পরিচর্যা।",
      en: "Students are cared for in Darul Iqama under the constant watch of the warden and his deputy.",
    },
  },
  {
    icon: "utensils",
    title: { bn: "সুষম খাদ্য ব্যবস্থা", en: "Balanced, Wholesome Meals" },
    body: {
      bn: "নিজস্ব মাতবাখে পরিচ্ছন্ন রান্নাঘর ও পুষ্টিসমৃদ্ধ খাবারের নিয়মিত ব্যবস্থা।",
      en: "A clean in-house kitchen serving nutritious food on a regular schedule.",
    },
  },
  {
    icon: "chart",
    title: { bn: "নিয়মিত পরীক্ষা ও মূল্যায়ন", en: "Continuous Assessment" },
    body: {
      bn: "সাপ্তাহিক, মাসিক ও ষাণ্মাসিক পরীক্ষার মাধ্যমে প্রত্যেক ছাত্রের অগ্রগতি পর্যবেক্ষণ।",
      en: "Weekly, monthly and half-yearly examinations track every student's progress.",
    },
  },
  {
    icon: "heart",
    title: { bn: "আদর্শ চরিত্র গঠন", en: "Building Noble Character" },
    body: {
      bn: "ইলমের পাশাপাশি আখলাক, আদব ও ইসলামী মূল্যবোধে গড়ে ওঠা প্রজন্ম তৈরির অঙ্গীকার।",
      en: "Alongside knowledge, a commitment to raising a generation shaped by manners and Islamic values.",
    },
  },
];

/* ── Events ───────────────────────────────────────────────────────────── */

export type EventItem = {
  slug: string;
  title: T;
  titleAr?: string;
  date: T;
  time?: T;
  venue?: T;
  image: string;
  body: T;
  highlights?: T[];
};

export const events: EventItem[] = [
  {
    slug: "hifzul-quran-competition",
    title: { bn: "জেলাব্যাপী হিফজুল কুরআন প্রতিযোগিতা", en: "District-wide Hifzul Qur'an Competition" },
    date: { bn: "১৫ জানুয়ারি", en: "15 January" },
    time: { bn: "বৃহস্পতিবার, সকাল ৮টা", en: "Thursday, 8:00 AM" },
    venue: { bn: "মাদরাসা প্রাঙ্গণ, ফুলবাড়িয়া, ব্রাহ্মণবাড়িয়া", en: "Madrasah grounds, Phulbaria, Brahmanbaria" },
    image: "/banners/hifz-competition.jpeg",
    body: {
      bn: "ব্রাহ্মণবাড়িয়া জেলার হিফজ বিভাগের ছাত্রদের নিয়ে আয়োজিত ৩০ পারা গ্রুপের প্রতিযোগিতা। অংশগ্রহণকারীর বয়স অনূর্ধ্ব ১৮ বছর। প্রথম পুরস্কার উমরাহ প্যাকেজ, দ্বিতীয় পুরস্কার ফ্রিজ, তৃতীয় পুরস্কার ওয়াশিং মেশিন এবং চতুর্থ থেকে ত্রিশতম স্থান পর্যন্ত পর্যায়ক্রমে আকর্ষণীয় গিফট হ্যাম্পার।",
      en: "A 30-juz competition for Hifz students across Brahmanbaria district, open to participants under 18. First prize is an Umrah package, second a refrigerator, third a washing machine, with gift hampers for fourth through thirtieth place.",
    },
    highlights: [
      { bn: "প্রত্যেক ছাত্রকে ব্রাহ্মণবাড়িয়া জেলার কোনো হিফজ বিভাগের হতে হবে", en: "Entrants must belong to a Hifz department within Brahmanbaria district" },
      { bn: "১০ জানুয়ারির মধ্যে ফরম জমা দিতে হবে", en: "Forms must be submitted by 10 January" },
      { bn: "ফরমের শুভেচ্ছা মূল্য ১০০ টাকা", en: "Form fee: 100 Taka" },
      { bn: "অংশগ্রহণকারী সকলের জন্য সম্মানজনক পুরস্কার", en: "An honorarium prize for every participant" },
    ],
  },
  {
    slug: "world-arabic-language-day",
    title: { bn: "আন্তর্জাতিক আরবি ভাষা দিবস", en: "World Arabic Language Day" },
    titleAr: "اليوم العالمي للغة العربية",
    date: { bn: "১৮ ডিসেম্বর", en: "18 December" },
    time: { bn: "বৃহস্পতিবার, দুপুর ১২টা", en: "Thursday, 12:00 noon" },
    venue: { bn: "জামিআ মিলনায়তন", en: "Jamia Auditorium" },
    image: "/banners/arabic-language-day.jpeg",
    body: {
      bn: "আন্তর্জাতিক আরবি ভাষা দিবস উপলক্ষে ইসলামী মনোজ্ঞ অনুষ্ঠান। সার্বিক তত্ত্বাবধানে মুফতি উবায়দুল্লাহ মাদানী (হাফি.), প্রতিষ্ঠাতা-পরিচালক, অত্র জামিয়া।",
      en: "A cultural gathering marking World Arabic Language Day, held under the overall supervision of Mufti Obaidullah Madani (Hafi.), founder and director of the Jamia.",
    },
  },
  {
    slug: "barnamaj-arabi-thaqafi",
    title: { bn: "বারনামাজ আরাবী সাক্বাফী — আরবি সাংস্কৃতিক অনুষ্ঠান", en: "Barnamaj Arabi Thaqafi — Arabic Cultural Programme" },
    titleAr: "برنامج عربي ثقافي",
    date: { bn: "বার্ষিক আয়োজন", en: "Annual programme" },
    venue: { bn: "জামিআ মিলনায়তন", en: "Jamia Auditorium" },
    image: "/banners/arabi-thaqafi.jpeg",
    body: {
      bn: "অত্র জামিয়ার 'নিদাউল আরাবিয়্যা' বিভাগের তত্ত্বাবধানে অনুষ্ঠিত আরবি ভাষার সাংস্কৃতিক আয়োজন। সভাপতিত্ব করেন সম্মানিত রঈস হাফিজ মুফতি উবায়দুল্লাহ মাদানী (আতালাল্লাহু বাক্বাআহু)।",
      en: "An Arabic cultural programme run by the Jamia's Nida'ul Arabiyyah department, presided over by the honoured Ra'is, Hafiz Mufti Obaidullah Madani.",
    },
  },
  {
    slug: "chatro-protiva-bikash",
    title: { bn: "ছাত্র প্রতিভা বিকাশের মঞ্চ", en: "Student Talent Development Platform" },
    titleAr: "منصة تنمية المواهب الطلابية",
    date: { bn: "নিয়মিত আয়োজন", en: "Held regularly" },
    venue: { bn: "জামিআ মিলনায়তন", en: "Jamia Auditorium" },
    image: "/banners/protiva-bikash.jpeg",
    body: {
      bn: "ছাত্রদের সুপ্ত প্রতিভা বিকাশের লক্ষ্যে আয়োজিত নিয়মিত মঞ্চ। আয়োজন ও বাস্তবায়নে উম্মুল কুরা ছাত্র সংসদ (اتحاد طلاب أم القرى)।",
      en: "A recurring platform for drawing out the latent talents of our students, organised and run by the Ummul Qura Students' Council.",
    },
  },
  {
    slug: "eid-ul-azha-programme",
    title: { bn: "ঈদুল আযহা উপলক্ষে ইসলামী মনোজ্ঞ অনুষ্ঠান", en: "Eid-ul-Azha Cultural Gathering" },
    date: { bn: "ঈদুল আযহা উপলক্ষে", en: "On the occasion of Eid-ul-Azha" },
    venue: { bn: "ফুলবাড়িয়া, ব্রাহ্মণবাড়িয়া", en: "Phulbaria, Brahmanbaria" },
    image: "/banners/eid-programme.jpeg",
    body: {
      bn: "ঈদুল আযহা উপলক্ষে উম্মুল কুরা ছাত্র সংসদ আয়োজিত ইসলামী মনোজ্ঞ অনুষ্ঠান। সভাপতি: মুফতি উবায়দুল্লাহ মাদানী (হাফি.), প্রতিষ্ঠাতা-পরিচালক, অত্র জামিয়া।",
      en: "An Islamic cultural gathering for Eid-ul-Azha, arranged by the Ummul Qura Students' Council and presided over by Mufti Obaidullah Madani (Hafi.).",
    },
    highlights: [
      { bn: "ফিকহী মুনাজারা", en: "Fiqh debate (Munazara)" },
      { bn: "শের কাটাকাটি প্রতিযোগিতা", en: "Poetry duel (Sher Katakati)" },
      { bn: "ইসলামী কৌতুক পরিবেশনা", en: "Islamic humour performance" },
      { bn: "ইসলামী সঙ্গীত প্রতিযোগিতা", en: "Islamic nasheed competition" },
      { bn: "বক্তৃতা অনুষ্ঠান", en: "Oratory session" },
    ],
  },
];

/* ── Notices ──────────────────────────────────────────────────────────── */
/* Left empty until the madrasah supplies its notices; the page renders an
   empty state and picks up entries as soon as they are added here. */

export type Notice = {
  slug: string;
  title: T;
  date: T;
  category: T;
  body: T;
  pinned?: boolean;
};

export const notices: Notice[] = [];

/* ── Gallery ──────────────────────────────────────────────────────────── */

export const gallery: { src: string; caption: T }[] = [
  { src: "/cover.jpeg", caption: { bn: "জামিয়ার সম্মুখ চিত্র ও মসজিদুল মিসবাহ", en: "The Jamia frontage and Masjidul Misbah" } },
  { src: "/banners/hifz-competition.jpeg", caption: { bn: "জেলাব্যাপী হিফজুল কুরআন প্রতিযোগিতা", en: "District-wide Hifzul Qur'an Competition" } },
  { src: "/banners/arabic-language-day.jpeg", caption: { bn: "আন্তর্জাতিক আরবি ভাষা দিবস", en: "World Arabic Language Day" } },
  { src: "/banners/protiva-bikash.jpeg", caption: { bn: "ছাত্র প্রতিভা বিকাশের মঞ্চ", en: "Student Talent Development Platform" } },
  { src: "/banners/eid-programme.jpeg", caption: { bn: "ঈদুল আযহার ইসলামী মনোজ্ঞ অনুষ্ঠান", en: "Eid-ul-Azha cultural gathering" } },
  { src: "/banners/arabi-thaqafi.jpeg", caption: { bn: "বারনামাজ আরাবী সাক্বাফী", en: "Barnamaj Arabi Thaqafi" } },
  { src: "/banners/prospectus.jpeg", caption: { bn: "জামিয়ার বার্ষিক প্রসপেক্টাস", en: "The Jamia's annual prospectus" } },
];

/* ── About ────────────────────────────────────────────────────────────── */

export const about = {
  intro: {
    bn: "জামিয়া উম্মুল কুরা আল-ইসলামিয়া ২০২২ ঈসায়ী সনে ব্রাহ্মণবাড়িয়া সদরের ফুলবাড়িয়ায় প্রতিষ্ঠিত একটি স্বতন্ত্র দ্বীনি শিক্ষাপ্রতিষ্ঠান। মক্কা মুকাররমার পবিত্র নাম 'উম্মুল কুরা'-এর নিসবতে প্রতিষ্ঠিত এই জামিয়ার লক্ষ্য — কুরআন ও সুন্নাহর নির্ভুল ইলম, সালাফে সালেহীনের আদর্শ এবং যুগোপযোগী যোগ্যতায় সমৃদ্ধ একটি প্রজন্ম গড়ে তোলা।",
    en: "Jamia Ummol Qura Al Islamia is an independent institution of Islamic learning founded in 2022 at Phulbaria, Brahmanbaria Sadar. Named in relation to Umm al-Qura, the blessed name of Makkah, the Jamia exists to raise a generation grounded in the sound knowledge of Qur'an and Sunnah, shaped by the way of the pious predecessors, and equipped for its own age.",
  } satisfies T,
  history: {
    bn: "প্রতিষ্ঠার সূচনালগ্ন থেকেই জামিয়া ছাত্রদের জন্য একটি নিরাপদ, সুশৃঙ্খল ও ইলমী পরিবেশ নিশ্চিত করে আসছে। নিজস্ব প্রাঙ্গণে রয়েছে শ্রেণিকক্ষ, দারুল ইক্বামা এবং 'মাসজিদুল মিসবাহ'। অল্প সময়ের ব্যবধানে মক্তব থেকে শুরু করে হিফজ ও কিতাব বিভাগ পর্যন্ত ধারাবাহিক শিক্ষাক্রম চালু হয়েছে এবং জেলাব্যাপী হিফজুল কুরআন প্রতিযোগিতা, আন্তর্জাতিক আরবি ভাষা দিবসসহ নানা আয়োজনে জামিয়া ব্রাহ্মণবাড়িয়ার দ্বীনি অঙ্গনে স্বতন্ত্র পরিচিতি লাভ করেছে।",
    en: "From its earliest days the Jamia has kept a safe, orderly and scholarly environment for its students. Its own grounds hold the classrooms, the residential hall and Masjidul Misbah. In a short span it has opened a continuous course of study from Maktab through Hifz to the Kitab department, and through district-wide Hifz competitions and observances such as World Arabic Language Day it has earned a distinct place in the religious life of Brahmanbaria.",
  } satisfies T,
  mission: {
    bn: "কুরআন-সুন্নাহভিত্তিক নির্ভুল ইলম বিতরণ, আখলাক ও আদবের পরিচর্যা এবং সমাজের প্রতি দায়বদ্ধ যোগ্য আলেম তৈরি করা।",
    en: "To transmit sound knowledge rooted in Qur'an and Sunnah, to cultivate character and manners, and to produce capable scholars answerable to their society.",
  } satisfies T,
  vision: {
    bn: "এমন একটি প্রজন্ম গড়ে তোলা, যারা ইলমে দ্বীনে গভীর, আমলে অগ্রগামী এবং উম্মাহর কল্যাণে নিবেদিত।",
    en: "To raise a generation deep in sacred knowledge, foremost in practice, and devoted to the good of the Ummah.",
  } satisfies T,
  values: [
    {
      title: { bn: "ইখলাস", en: "Sincerity" },
      body: { bn: "প্রতিটি কাজের ভিত্তি একমাত্র আল্লাহর সন্তুষ্টি।", en: "Every act rests on seeking Allah's pleasure alone." },
    },
    {
      title: { bn: "ইলম ও আমল", en: "Knowledge & Practice" },
      body: { bn: "অর্জিত ইলমকে বাস্তব জীবনে প্রতিফলিত করা।", en: "Knowledge acquired must be lived, not merely learned." },
    },
    {
      title: { bn: "আদব ও আখলাক", en: "Manners & Character" },
      body: { bn: "উস্তাদ, অভিভাবক ও সমাজের প্রতি সুন্দর আচরণ।", en: "Beautiful conduct towards teachers, guardians and society." },
    },
    {
      title: { bn: "শৃঙ্খলা", en: "Discipline" },
      body: { bn: "সময়ানুবর্তিতা ও নিয়মানুবর্তিতাই সাফল্যের সোপান।", en: "Punctuality and order are the ladder to success." },
    },
  ],
  message: {
    bn: "বিসমিল্লাহির রাহমানির রাহীম। সমস্ত প্রশংসা আল্লাহ তাআলার, দরুদ ও সালাম নাযিল হোক প্রিয় নবী মুহাম্মাদ ﷺ-এর প্রতি।\n\nপ্রিয় অভিভাবক ও শুভানুধ্যায়ীবৃন্দ, জামিয়া উম্মুল কুরা আল-ইসলামিয়া কেবল একটি শিক্ষাপ্রতিষ্ঠান নয় — এটি একটি আমানত। আপনারা আমাদের হাতে যে সন্তানদের তুলে দেন, তাদেরকে কুরআনের হাফেজ, হাদীসের ধারক এবং উত্তম চরিত্রের অধিকারী মানুষ হিসেবে গড়ে তোলাই আমাদের একমাত্র লক্ষ্য।\n\nআমরা বিশ্বাস করি, ইলম ও আদব একে অপরের পরিপূরক। তাই পাঠদানের পাশাপাশি প্রতিটি ছাত্রের চরিত্র, স্বাস্থ্য ও মানসিক বিকাশের প্রতি আমরা সমান যত্নশীল। আল্লাহ তাআলা আমাদের এই খিদমতকে কবুল করুন এবং এই জামিয়াকে উম্মাহর জন্য কল্যাণের ঝর্ণাধারা বানিয়ে দিন। আমীন।",
    en: "In the name of Allah, the Most Merciful. All praise belongs to Allah, and peace and blessings upon the beloved Prophet Muhammad ﷺ.\n\nRespected guardians and well-wishers, Jamia Ummol Qura Al Islamia is not merely a school — it is a trust. The children you place in our hands we aim to return to you as memorisers of the Qur'an, bearers of the Sunnah, and people of excellent character. That is our single purpose.\n\nWe hold that knowledge and manners complete one another. So alongside instruction we give equal care to each student's character, health and inner growth. May Allah accept this service from us and make this Jamia a spring of good for the Ummah. Ameen.",
  } satisfies T,
};

/* ── Admission ────────────────────────────────────────────────────────── */

export const admission = {
  intro: {
    bn: "প্রতি শিক্ষাবর্ষের শুরুতে মক্তব, নাযেরা, হিফজ ও কিতাব বিভাগে ছাত্র ভর্তি করা হয়। আসন সংখ্যা সীমিত এবং মৌখিক পরীক্ষার ভিত্তিতে ভর্তি চূড়ান্ত হয়।",
    en: "Students are admitted to the Maktab, Nazera, Hifz and Kitab departments at the start of each academic year. Seats are limited and admission is confirmed on the basis of an oral assessment.",
  } satisfies T,
  steps: [
    {
      title: { bn: "ফরম সংগ্রহ", en: "Collect the Form" },
      body: { bn: "জামিয়ার অফিস থেকে নির্ধারিত ভর্তি ফরম সংগ্রহ করুন।", en: "Obtain the prescribed admission form from the Jamia office." },
    },
    {
      title: { bn: "ফরম পূরণ ও জমা", en: "Complete & Submit" },
      body: { bn: "প্রয়োজনীয় কাগজপত্রসহ পূরণকৃত ফরম নির্ধারিত তারিখের মধ্যে জমা দিন।", en: "Submit the completed form with the required documents before the closing date." },
    },
    {
      title: { bn: "মৌখিক পরীক্ষা", en: "Oral Assessment" },
      body: { bn: "সংশ্লিষ্ট বিভাগের উস্তাদগণ কর্তৃক মৌখিক পরীক্ষা গ্রহণ করা হয়।", en: "An oral assessment is conducted by the teachers of the relevant department." },
    },
    {
      title: { bn: "ভর্তি নিশ্চিতকরণ", en: "Confirmation" },
      body: { bn: "উত্তীর্ণ ছাত্রদের নির্ধারিত ফি জমা দিয়ে ভর্তি নিশ্চিত করতে হয়।", en: "Successful applicants confirm their place by paying the prescribed fee." },
    },
  ],
  documents: [
    { bn: "জন্ম নিবন্ধন সনদের ফটোকপি", en: "Photocopy of the birth registration certificate" },
    { bn: "পূর্ববর্তী প্রতিষ্ঠানের ছাড়পত্র ও প্রশংসাপত্র", en: "Transfer and testimonial certificates from the previous institution" },
    { bn: "ছাত্রের সদ্য তোলা ২ কপি পাসপোর্ট সাইজ ছবি", en: "Two recent passport-size photographs of the student" },
    { bn: "অভিভাবকের জাতীয় পরিচয়পত্রের ফটোকপি", en: "Photocopy of the guardian's National ID card" },
    { bn: "অভিভাবকের ১ কপি পাসপোর্ট সাইজ ছবি", en: "One passport-size photograph of the guardian" },
  ],
  rules: [
    { bn: "ভর্তির সময় ছাত্রকে অভিভাবকসহ উপস্থিত থাকতে হবে।", en: "The student must attend the admission in person with a guardian." },
    { bn: "আবাসিক ছাত্রদের জামিয়ার নিয়মকানুন মেনে চলা আবশ্যক।", en: "Residential students are required to abide by the Jamia's regulations." },
    { bn: "জমাকৃত ফরম ও ফি কোনো অবস্থাতেই ফেরতযোগ্য নয়।", en: "Submitted forms and fees are not refundable under any circumstance." },
    { bn: "তথ্য গোপন করলে যে কোনো সময় ভর্তি বাতিল বলে গণ্য হবে।", en: "Concealing information renders the admission void at any time." },
  ],
};

/* ── Facilities ───────────────────────────────────────────────────────── */

export const facilities: { icon: string; title: T; body: T }[] = [
  {
    icon: "mosque",
    title: { bn: "মাসজিদুল মিসবাহ", en: "Masjidul Misbah" },
    body: { bn: "জামিয়ার নিজস্ব প্রশস্ত মসজিদ, যেখানে পাঁচ ওয়াক্ত জামাত ও তারবিয়াতী মজলিস অনুষ্ঠিত হয়।", en: "The Jamia's own spacious mosque, host to the five daily congregations and to spiritual gatherings." },
  },
  {
    icon: "home",
    title: { bn: "দারুল ইক্বামা", en: "Residential Hall" },
    body: { bn: "পরিচ্ছন্ন ও আলো-বাতাসপূর্ণ আবাসিক কক্ষ, নাযিম ও নায়েবে নাযিমের সার্বক্ষণিক তত্ত্বাবধান।", en: "Clean, airy residential rooms under the constant supervision of the warden and his deputy." },
  },
  {
    icon: "utensils",
    title: { bn: "মাতবাখ", en: "The Kitchen" },
    body: { bn: "নিজস্ব রান্নাঘরে পুষ্টিকর ও স্বাস্থ্যসম্মত খাবার, নাযিমে মাতবাখের তত্ত্বাবধানে।", en: "Nutritious, hygienic meals from our own kitchen, overseen by the kitchen director." },
  },
  {
    icon: "book-open",
    title: { bn: "কুতুবখানা", en: "Library" },
    body: { bn: "তাফসীর, হাদীস, ফিকহ ও আরবি সাহিত্যের নির্বাচিত কিতাবসমূহের সংগ্রহ।", en: "A selected collection of works in tafsir, hadith, fiqh and Arabic literature." },
  },
  {
    icon: "shield",
    title: { bn: "নিরাপত্তা ব্যবস্থা", en: "Security" },
    body: { bn: "সীমানা প্রাচীরে ঘেরা প্রাঙ্গণ এবং চব্বিশ ঘণ্টার তত্ত্বাবধান।", en: "Walled grounds with round-the-clock supervision." },
  },
  {
    icon: "users",
    title: { bn: "অভিভাবক সমাবেশ", en: "Guardians' Assembly" },
    body: { bn: "ছাত্রের অগ্রগতি নিয়ে অভিভাবকদের সঙ্গে নিয়মিত মতবিনিময়।", en: "Regular meetings with guardians on each student's progress." },
  },
];

/* ── Donation ─────────────────────────────────────────────────────────── */

export const donationCauses: { title: T; body: T }[] = [
  {
    title: { bn: "লিল্লাহ বোর্ডিং", en: "Lillah Boarding" },
    body: { bn: "দরিদ্র ও এতিম ছাত্রদের খাবার ও আবাসনের ব্যয় বহন।", en: "Meeting the food and lodging costs of poor and orphaned students." },
  },
  {
    title: { bn: "নির্মাণ ও উন্নয়ন", en: "Construction & Development" },
    body: { bn: "শ্রেণিকক্ষ, দারুল ইক্বামা ও মসজিদের নির্মাণকাজে অংশগ্রহণ।", en: "A share in building the classrooms, residential hall and mosque." },
  },
  {
    title: { bn: "যাকাত ও সাদাকা", en: "Zakat & Sadaqah" },
    body: { bn: "যাকাত, ফিতরা ও সাধারণ সাদাকা গ্রহণ ও যথাযথ খাতে ব্যয়।", en: "Zakat, fitrah and general sadaqah, received and spent in their rightful channels." },
  },
  {
    title: { bn: "কুরবানির চামড়া", en: "Qurbani Hides" },
    body: { bn: "কুরবানির পশুর চামড়া দান করে ছাত্রদের খিদমতে শরিক হোন।", en: "Donate Qurbani hides and take part in the service of our students." },
  },
];
