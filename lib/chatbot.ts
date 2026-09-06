import type { T } from "./i18n";
import { admission } from "./content";
import { departments } from "./content";
import { site } from "./site";

/** One answer the assistant can give, and the words that reach it. */
export type ChatTopic = {
  id: string;
  /** Shown as a quick-reply chip when `chip` is true. */
  question: T;
  chip?: boolean;
  keywords: string[];
  answer: () => T;
  link?: { href: string; label: T; external?: boolean };
};

const departmentList = (lang: "bn" | "en") =>
  departments.map((d) => d.name[lang]).join(lang === "bn" ? ", " : ", ");

export const chatTopics: ChatTopic[] = [
  {
    id: "admission",
    question: { bn: "ভর্তি কীভাবে করব?", en: "How do I apply for admission?" },
    chip: true,
    keywords: [
      "ভর্তি", "ভর্তির", "আবেদন", "ফরম", "এডমিশন",
      "admission", "apply", "enrol", "enroll", "form", "join",
    ],
    answer: () => ({
      bn: "ভর্তি প্রক্রিয়া চারটি ধাপে: ফরম সংগ্রহ, কাগজপত্রসহ ফরম জমা, মৌখিক পরীক্ষা এবং ফি জমা দিয়ে ভর্তি নিশ্চিতকরণ। অনলাইনেও আবেদন করা যায়। কিতাব বিভাগে ভর্তির জন্য পূর্বপাঠ্য ও ভর্তি পরীক্ষার শর্ত রয়েছে।",
      en: "Admission runs in four steps: collect the form, submit it with the documents, sit the oral assessment, then confirm your place by paying the fee. You may also apply online. The Kitab department has its own prior-reading and entrance-test conditions.",
    }),
    link: { href: "/admission", label: { bn: "ভর্তি তথ্যের পাতা", en: "Admission page" } },
  },
  {
    id: "fees",
    question: { bn: "ভর্তি ও মাসিক ফি কত?", en: "What are the fees?" },
    chip: true,
    keywords: [
      "ফি", "টাকা", "খরচ", "বেতন", "মাসিক", "আবাসিক খরচ", "চার্জ",
      "fee", "fees", "cost", "charge", "monthly", "taka", "tuition", "price",
    ],
    answer: () => ({
      bn: `সকল বিভাগের ভর্তি ফি ${admission.fees.admission.amount.bn} (আইডি কার্ডের খরচসহ)। মাসিক আবাসিক খরচ — কিতাব বিভাগ ${admission.fees.monthly[0].amount.bn} (কারেন্ট বিলসহ), নূরানী/নাযেরা/হিফজুল কুরআন বিভাগ ${admission.fees.monthly[1].amount.bn}। কোনো ছাত্র খাবারের পূর্ণ টাকা দিলে আলাদা আবাসিক ফি দিতে হয় না।`,
      en: `The admission fee is ${admission.fees.admission.amount.en} for every department, ID card included. Monthly residential charges are ${admission.fees.monthly[0].amount.en} for the Kitab department (electricity included) and ${admission.fees.monthly[1].amount.en} for Nurani, Nazera and Hifz. A student who pays the full cost of meals is not charged a separate residential fee.`,
    }),
    link: { href: "/admission", label: { bn: "ফি সংক্রান্ত বিস্তারিত", en: "See the fee details" } },
  },
  {
    id: "departments",
    question: { bn: "কী কী বিভাগ আছে?", en: "Which departments are there?" },
    chip: true,
    keywords: [
      "বিভাগ", "মক্তব", "নাযেরা", "নাজেরা", "হিফজ", "কিতাব", "জামাত", "ক্লাস",
      "department", "class", "maktab", "nazera", "hifz", "kitab", "course", "subject",
    ],
    answer: () => ({
      bn: `জামিয়ায় চারটি শিক্ষা বিভাগ রয়েছে — ${departmentList("bn")}। এর সঙ্গে রয়েছে নিদাউল আরাবিয়্যাহ (আরবি ভাষা কেন্দ্র) ও দারুল ইক্বামা (আবাসিক বিভাগ)। কিতাব বিভাগে হুফফাজ থেকে মিসকাত জামাত পর্যন্ত পড়ানো হয়।`,
      en: `There are four departments of study — ${departmentList("en")} — together with Nida'ul Arabiyyah, the Arabic language centre, and Darul Iqama, the residential hall. The Kitab department runs from the Huffaz class up to Mishkat.`,
    }),
    link: { href: "/departments", label: { bn: "বিভাগসমূহ দেখুন", en: "See the departments" } },
  },
  {
    id: "exams",
    question: { bn: "পরীক্ষা কখন হয়?", en: "When are the examinations?" },
    chip: true,
    keywords: [
      "পরীক্ষা", "সাময়িক", "বার্ষিক", "বোর্ড", "ফলাফল", "রেজাল্ট", "নম্বর",
      "exam", "examination", "test", "result", "board", "annual", "terminal",
    ],
    answer: () => ({
      bn: "প্রতি শিক্ষাবর্ষে চারটি পরীক্ষা হয় — কুরবানির আগে মাসিক মূল্যায়ন, সফর মাসের প্রথম সপ্তাহে ১ম সাময়িক, জুমাদাল উলার শুরুতে ২য় সাময়িক এবং শাবানের প্রথম সপ্তাহে বার্ষিক/বোর্ড পরীক্ষা।",
      en: "Four examinations are held each year: the monthly assessment before Qurbani, the first terminal in the first week of Safar, the second terminal early in Jumada al-Ula, and the annual or board examination in the first week of Sha'ban.",
    }),
    link: { href: "/exams", label: { bn: "পরীক্ষা তথ্য", en: "Examination information" } },
  },
  {
    id: "routine",
    question: { bn: "ক্লাসের সময়সূচি কী?", en: "What is the class routine?" },
    chip: true,
    keywords: [
      "রুটিন", "সময়", "সময়সূচি", "ঘন্টা", "ছুটি", "ইউনিফর্ম", "নিয়ম",
      "routine", "timing", "time", "schedule", "leave", "holiday", "uniform", "rule",
    ],
    answer: () => ({
      bn: "ক্লাস সকাল ৭:৩০ থেকে ১২:৩০ পর্যন্ত — প্রতি ঘন্টা ৪০ মিনিট করে মোট সাতটি ঘন্টা, দ্বিতীয় ঘন্টার পর ৩০ মিনিট নাস্তার বিরতি। সোমবার তরবিয়তি মজলিস ও বুধবার বাদ এশা সাপ্তাহিক সেমিনারে উপস্থিতি বাধ্যতামূলক। দরসে সাদা পাঞ্জাবি-সেলোয়ার ইউনিফর্ম আবশ্যক।",
      en: "Classes run from 7:30 am to 12:30 pm — seven periods of forty minutes, with a thirty-minute breakfast break after the second. Attendance is compulsory at the Monday tarbiyati majlis and the Wednesday seminar after Isha. The white panjabi and salwar uniform is required in the dars.",
    }),
    link: { href: "/departments", label: { bn: "নীতিমালা ও দিনলিপি", en: "Regulations and daily routine" } },
  },
  {
    id: "scholarship",
    question: { bn: "বৃত্তি বা সহায়তা পাওয়া যায়?", en: "Is there any scholarship?" },
    chip: true,
    keywords: [
      "বৃত্তি", "সহায়তা", "যাকাত", "এতিম", "গরিব", "দরিদ্র", "অসচ্ছল", "ফান্ড",
      "scholarship", "aid", "zakat", "orphan", "poor", "support", "fund", "help",
    ],
    answer: () => ({
      bn: "মেধাবৃত্তি, দরিদ্র ও মেধাবী শিক্ষার্থী বৃত্তি, হিফজ বৃত্তি, এতিম শিক্ষার্থী সহায়তা (গোরাবা ফান্ড), যাকাতভিত্তিক শিক্ষা সহায়তা ও আবাসিক শিক্ষার্থী সহায়তার ব্যবস্থা রয়েছে। নির্ধারিত সময়ে প্রয়োজনীয় কাগজপত্রসহ আবেদন করতে হয়।",
      en: "There are merit scholarships, awards for able students in hardship, a Hifz scholarship, support for orphaned students from the Ghuraba fund, zakat-based educational support and help for residential students. Apply within the appointed time with the necessary papers.",
    }),
    link: { href: "/scholarships", label: { bn: "বৃত্তি ও অনুদান", en: "Scholarships and aid" } },
  },
  {
    id: "address",
    question: { bn: "মাদরাসা কোথায়?", en: "Where is the madrasah?" },
    chip: true,
    keywords: [
      "ঠিকানা", "কোথায়", "অবস্থান", "লোকেশন", "ম্যাপ", "যাব", "আসব",
      "address", "where", "location", "map", "direction", "find",
    ],
    answer: () => ({
      bn: `জামিয়ার ঠিকানা: ${site.address.bn} গুগল ম্যাপে পিন করা অবস্থান থেকেও সহজে আসা যায়।`,
      en: `The Jamia is at ${site.address.en}. The pinned location on Google Maps will bring you straight here.`,
    }),
    link: {
      href: site.mapLink,
      label: { bn: "গুগল ম্যাপে দেখুন", en: "Open in Google Maps" },
      external: true,
    },
  },
  {
    id: "contact",
    question: { bn: "যোগাযোগ করব কীভাবে?", en: "How do I contact you?" },
    chip: true,
    keywords: [
      "যোগাযোগ", "ফোন", "নম্বর", "মোবাইল", "ইমেইল", "কল", "হোয়াটসঅ্যাপ", "কথা",
      "contact", "phone", "number", "call", "email", "mail", "whatsapp", "reach",
    ],
    answer: () => ({
      bn: `ফোন ও হোয়াটসঅ্যাপ: ${site.phone.display} (${site.phone.label.bn})। ইমেইল: ${site.emails[0].address}। সরাসরি জামিয়ার অফিসেও আসতে পারেন।`,
      en: `Phone and WhatsApp: ${site.phone.displayEn} (${site.phone.label.en}). Email: ${site.emails[0].address}. You are also welcome at the Jamia office.`,
    }),
    link: { href: "/contact", label: { bn: "যোগাযোগের পাতা", en: "Contact page" } },
  },
  {
    id: "donation",
    question: { bn: "অনুদান পাঠাব কীভাবে?", en: "How can I donate?" },
    chip: true,
    keywords: [
      "অনুদান", "দান", "সাদাকা", "সদকা", "বিকাশ", "নগদ", "রকেট", "ব্যাংক", "চাঁদা",
      "donate", "donation", "sadaqah", "charity", "bkash", "nagad", "bank", "give",
    ],
    answer: () => ({
      bn: `বিকাশ/নগদ ও ব্যাংকের মাধ্যমে অনুদান পাঠানো যায়; নম্বর ${site.phone.display}। অনলাইন পোর্টাল থেকেও অনুদান দেওয়া যায়। যাকাতের অর্থ দেওয়ার আগে দায়িত্বশীল কর্তৃপক্ষের সঙ্গে কথা বলে নেওয়ার অনুরোধ।`,
      en: `Donations may be sent by bKash or Nagad and by bank transfer; the number is ${site.phone.displayEn}. You may also give through the online portal. For zakat, please speak with the responsible authorities first.`,
    }),
    link: { href: "/donation", label: { bn: "অনুদানের পাতা", en: "Donation page" } },
  },
  {
    id: "documents",
    question: { bn: "ভর্তিতে কী কী কাগজ লাগে?", en: "Which documents are needed?" },
    keywords: [
      "কাগজ", "কাগজপত্র", "সনদ", "জন্ম", "ছবি", "এনআইডি", "ডকুমেন্ট",
      "document", "certificate", "birth", "photo", "nid", "paper",
    ],
    answer: () => ({
      bn: "জন্ম নিবন্ধনের ফটোকপি, পূর্ববর্তী প্রতিষ্ঠানের ছাড়পত্র ও প্রশংসাপত্র, ছাত্রের ২ কপি ও অভিভাবকের ১ কপি পাসপোর্ট সাইজ ছবি, অভিভাবকের এনআইডির ফটোকপি এবং প্রযোজ্য ক্ষেত্রে হিফজ বা পূর্বপাঠ্য সংক্রান্ত সনদ।",
      en: "A photocopy of the birth registration, transfer and testimonial certificates from the previous institution, two passport photographs of the student and one of the guardian, a photocopy of the guardian's NID, and where applicable a certificate of Hifz or prior study.",
    }),
    link: { href: "/admission", label: { bn: "কাগজপত্রের তালিকা", en: "The full list" } },
  },
  {
    id: "residential",
    question: { bn: "আবাসিক ব্যবস্থা আছে?", en: "Is there boarding?" },
    keywords: [
      "আবাসিক", "থাকা", "হোস্টেল", "বোর্ডিং", "খাবার", "মাতবাখ", "ছাত্রাবাস",
      "residential", "hostel", "boarding", "food", "meal", "stay", "accommodation",
    ],
    answer: () => ({
      bn: "হ্যাঁ। দারুল ইক্বামায় নাযিমের তত্ত্বাবধানে পরিচ্ছন্ন আবাসন, নিজস্ব মাতবাখে সুষম খাবার ও চব্বিশ ঘণ্টার নিরাপত্তা ব্যবস্থা রয়েছে।",
      en: "Yes. Darul Iqama offers clean accommodation under a warden's care, balanced meals from our own kitchen, and round-the-clock security.",
    }),
    link: { href: "/facilities", label: { bn: "সুযোগ-সুবিধা", en: "Facilities" } },
  },
  {
    id: "guardian",
    question: { bn: "অভিভাবকদের করণীয় কী?", en: "What is asked of guardians?" },
    keywords: [
      "অভিভাবক", "বাবা", "মা", "পিতা", "গার্ডিয়ান",
      "guardian", "parent", "father", "mother",
    ],
    answer: () => ({
      bn: "জামিয়ার নেসাব ও নেযামের প্রতি আস্থা রাখা, সন্তানকে অসৎ সঙ্গ থেকে দূরে রাখা, অতিরিক্ত টাকা না দেওয়া, সাদাসিধে জীবনে অভ্যস্ত করা এবং পড়াশোনা ও চরিত্রের নিয়মিত খোঁজ রাখা — এসবই অভিভাবকদের কাছে প্রত্যাশিত।",
      en: "Trust in the Jamia's syllabus and order, keeping the child from bad company, not giving him excess money, accustoming him to a simple life, and keeping regular track of his study and character.",
    }),
    link: { href: "/guardians", label: { bn: "অভিভাবকদের প্রতি", en: "For guardians" } },
  },
  {
    id: "research",
    question: { bn: "গবেষণা বিভাগ সম্পর্কে জানতে চাই", en: "Tell me about the research department" },
    keywords: [
      "গবেষণা", "প্রবন্ধ", "সেমিনার", "তাহকিক", "লাইব্রেরি", "গ্রন্থাগার",
      "research", "paper", "seminar", "library", "journal", "study",
    ],
    answer: () => ({
      bn: "গবেষণা বিভাগে গবেষণা প্রবন্ধ, সমকালীন ও তুলনামূলক গবেষণা, ফিকহি ও ফতোয়া গবেষণা, শিক্ষক-শিক্ষার্থীদের গবেষণা, গবেষণা গ্রন্থাগার, নির্দেশিকা, সেমিনার ও গবেষণা সংবাদ — এই শাখাগুলো রয়েছে।",
      en: "The department covers research papers, contemporary and comparative study, fiqh and fatwa research, work by teachers and students, the research library, a researcher's guide, seminars and research news.",
    }),
    link: { href: "/research", label: { bn: "গবেষণা বিভাগ", en: "Research department" } },
  },
  {
    id: "teachers",
    question: { bn: "শিক্ষকমণ্ডলী সম্পর্কে জানতে চাই", en: "Who teaches here?" },
    keywords: [
      "শিক্ষক", "উস্তাদ", "মুফতি", "প্রিন্সিপাল", "পরিচালক", "হুজুর",
      "teacher", "faculty", "mufti", "principal", "staff", "ustad",
    ],
    answer: () => ({
      bn: "জামিয়ার প্রতিষ্ঠাতা-পরিচালক মুফতী উবায়দুল্লাহ মাদানী (হাফি.)। দেশের স্বনামধন্য মাদরাসা থেকে ফারেগ অভিজ্ঞ মুফতি, হাফেজ ও মাওলানাগণ এখানে পাঠদান করেন।",
      en: "The founder and principal is Mufti Obaidullah Madani. Experienced muftis, huffaz and maulanas, trained at well-known madrasahs, teach here.",
    }),
    link: { href: "/teachers", label: { bn: "শিক্ষক পরিচিতি", en: "Our faculty" } },
  },
];

/** The opening message, and the chips offered with it. */
export const chatGreeting: T = {
  bn: "আসসালামু আলাইকুম! আমি জামিয়ার সহায়ক। ভর্তি, ফি, বিভাগ, পরীক্ষা, ঠিকানা বা অনুদান — যা জানতে চান লিখুন, কিংবা নিচের যে কোনো প্রশ্নে চাপ দিন।",
  en: "Assalamu alaikum. I am the Jamia's assistant. Ask about admission, fees, departments, examinations, our address or donations — type your question, or tap one below.",
};

export const chatFallback: T = {
  bn: "এই প্রশ্নের উত্তর আমার জানা নেই। জামিয়ার অফিসে ফোন বা হোয়াটসঅ্যাপে যোগাযোগ করলে দায়িত্বশীলগণ সরাসরি জানিয়ে দেবেন, ইনশাআল্লাহ।",
  en: "I do not have an answer to that. Please phone or message the Jamia office on WhatsApp and someone will help you directly, insha'Allah.",
};

/** Picks the topic whose keywords best match what was typed. */
export function findTopic(input: string): ChatTopic | null {
  const text = input.toLowerCase();
  let best: ChatTopic | null = null;
  let bestScore = 0;
  for (const topic of chatTopics) {
    let score = 0;
    for (const word of topic.keywords) {
      if (text.includes(word.toLowerCase())) score += word.length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }
  return bestScore > 0 ? best : null;
}
