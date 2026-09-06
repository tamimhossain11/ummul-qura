import type { T } from "./i18n";

/* ── Examinations ──────────────────────────────────────────────────────── */

/** The four examinations of a full academic year, in the order they fall. */
export const examSchedule: { name: T; when: T }[] = [
  {
    name: { bn: "মাসিক মূল্যায়ন পরীক্ষা", en: "Monthly assessment" },
    when: { bn: "সাধারণত কুরবানির পূর্বে অনুষ্ঠিত হয়।", en: "Usually held before Qurbani." },
  },
  {
    name: { bn: "১ম সাময়িক পরীক্ষা", en: "First terminal examination" },
    when: { bn: "সফর মাসের প্রথম সপ্তাহে অনুষ্ঠিত হয়।", en: "Held in the first week of Safar." },
  },
  {
    name: { bn: "২য় সাময়িক পরীক্ষা", en: "Second terminal examination" },
    when: { bn: "জুমাদাল উলা মাসের শুরুর দিকে অনুষ্ঠিত হয়।", en: "Held early in Jumada al-Ula." },
  },
  {
    name: { bn: "বার্ষিক / বোর্ড পরীক্ষা", en: "Annual and board examination" },
    when: { bn: "শাবান মাসের প্রথম সপ্তাহে অনুষ্ঠিত হয়।", en: "Held in the first week of Sha'ban." },
  },
];

/** How students are taught to prepare. */
export const examPreparation: { title: T; body: T }[] = [
  {
    title: { bn: "পড়াশোনার পরিকল্পনা ও সময়সূচি", en: "A plan and a timetable" },
    body: {
      bn: "পরীক্ষার প্রস্তুতি শুরু করার আগে প্রতিটি শিক্ষার্থীকে পড়ার বিষয়বস্তু ও সময় নিয়ে একটি সুপরিকল্পিত রুটিন তৈরি করতে উৎসাহিত করা হয়।",
      en: "Before revision begins, every student is encouraged to draw up a considered routine covering both what is to be read and when.",
    },
  },
  {
    title: { bn: "সঠিক পড়ার কৌশল", en: "The right method of study" },
    body: {
      bn: "শুধু পড়লেই হবে না; কীভাবে পড়তে হবে, সেটিও গুরুত্বপূর্ণ। তাই শিক্ষার্থীদের বিষয়ভেদে উপযুক্ত পড়ার কৌশল অনুসরণ করতে উৎসাহিত করা হয়। কোনো বিষয় পড়ার পর প্রয়োজনীয় নোট তৈরি করা, গুরুত্বপূর্ণ বিষয়গুলো চিহ্নিত করা এবং অনুশীলনের মাধ্যমে সেগুলোকে আয়ত্ত করা হয়।",
      en: "Reading is not enough; how one reads matters too. Students are guided towards the method each subject calls for — taking notes after study, marking what is important, and mastering it through practice.",
    },
  },
  {
    title: { bn: "বিগত বছরের প্রশ্ন পর্যালোচনা", en: "Reviewing past papers" },
    body: {
      bn: "বোর্ড পরীক্ষার প্রস্তুতির ক্ষেত্রে বিগত বছরগুলোর প্রশ্নপত্র অত্যন্ত গুরুত্বপূর্ণ। হুবহু একই প্রশ্ন আসবে — এমন নিশ্চয়তা না থাকলেও প্রশ্নের ধরন ও কাঠামোর মধ্যে অনেক সময় যথেষ্ট মিল পাওয়া যায়। তাই বিগত বছরের প্রশ্নপত্র সংগ্রহ করে তা সমাধানের চেষ্টা করা ও প্রশ্নের ধরন বুঝে অনুশীলন করা প্রস্তুতির একটি গুরুত্বপূর্ণ অংশ।",
      en: "Past papers matter a great deal for the board examination. There is no guarantee that a question will repeat, but the pattern and structure often run close — so collecting old papers, working through them and learning the shape of the questions is an important part of preparation.",
    },
  },
  {
    title: { bn: "গুরুত্বপূর্ণ বিষয় মনে রাখার কৌশল", en: "Holding on to what matters" },
    body: {
      bn: "একবার পড়া কোনো বিষয় যেন বারবার বিস্তারিতভাবে পড়তে না হয়, সে জন্য শিক্ষার্থীরা নিজেদের সুবিধা অনুযায়ী সংক্ষিপ্ত নোট তৈরি করে রাখে।",
      en: "So that a topic once studied need not be read through in full again, students keep short notes of their own making.",
    },
  },
  {
    title: { bn: "নিয়মিত রিভিশন", en: "Regular revision" },
    body: {
      bn: "পরীক্ষার প্রস্তুতিতে নিয়মিত রিভিশনের কোনো বিকল্প নেই। কোনো একটি বিষয় একবার বা দুদিন পড়ে দীর্ঘ সময় আর না পড়লে তা ভুলে যাওয়ার সম্ভাবনা থাকে।",
      en: "There is no substitute for regular revision. A subject read once and then left for long is easily lost.",
    },
  },
  {
    title: { bn: "মনকে বিক্ষিপ্ত না করা", en: "Keeping the mind undivided" },
    body: {
      bn: "বোর্ড পরীক্ষা যতই নিকটে আসে, ততই প্রয়োজন মনোযোগ ধরে রাখা। এই সময়ে অপ্রয়োজনীয় কাজ, অতিরিক্ত ঘোরাফেরা বা কেনাকাটায় মনকে বিক্ষিপ্ত করা উচিত নয়। পড়াশোনা, প্রয়োজনীয় খাবার, পর্যাপ্ত ঘুম ও ইবাদতের মধ্যে সুন্দর ভারসাম্য রেখে প্রস্তুতিতে পূর্ণ মনোযোগ দেওয়া প্রয়োজন।",
      en: "The nearer the board examination, the more attention must be held. Needless errands, wandering about and shopping scatter the mind at just the wrong time. Study, sufficient food, enough sleep and worship should be kept in balance, with full attention on preparation.",
    },
  },
  {
    title: { bn: "শিক্ষকদের সঙ্গে নিয়মিত যোগাযোগ", en: "Staying in touch with the teachers" },
    body: {
      bn: "প্রস্তুতিকালীন সময়ে শিক্ষার্থীদের নিয়মিত শিক্ষকদের সঙ্গে যোগাযোগ রাখতে উৎসাহিত করা হয়। কোনো বিষয় বুঝতে অসুবিধা হলে, কোনো উত্তর নিয়ে সংশয় থাকলে কিংবা প্রস্তুতির কোথাও দুর্বলতা অনুভূত হলে শিক্ষকের পরামর্শ নেওয়া উচিত।",
      en: "Through the revision period students are encouraged to keep close to their teachers — for a topic that will not come clear, an answer they doubt, or a weakness they can feel in their preparation.",
    },
  },
  {
    title: { bn: "স্বাস্থ্যকর ও সুশৃঙ্খল জীবনযাপন", en: "A healthy, ordered life" },
    body: {
      bn: "পরীক্ষার প্রস্তুতি মানেই সারাক্ষণ বই নিয়ে বসে থাকা নয়। পড়াশোনার পাশাপাশি পুষ্টিকর ও পরিমিত খাবার, পর্যাপ্ত ঘুম, হালকা শরীরচর্চা এবং নিয়মিত আমল — সবকিছুর মধ্যে সুন্দর সমন্বয় থাকা প্রয়োজন।",
      en: "Preparing for an examination does not mean sitting over a book all day. Alongside study there should be wholesome and measured food, enough sleep, light exercise and the regular devotions, all kept in good proportion.",
    },
  },
  {
    title: { bn: "সকল বিষয়ে সমান গুরুত্ব ও মেহনত", en: "Equal care for every subject" },
    body: {
      bn: "পরীক্ষায় ভালো ফলাফল করতে হলে প্রতিটি বিষয়কে গুরুত্ব দিতে হবে। শুধু বড় কিতাবের প্রতি মনোযোগ দিয়ে ছোট কিতাবগুলোকে অবহেলা করলে কাঙ্ক্ষিত ফলাফল অর্জন করা কঠিন হতে পারে।",
      en: "A good result asks for care in every subject. Attending only to the major books and neglecting the smaller ones makes the desired result hard to reach.",
    },
  },
  {
    title: { bn: "খেয়ারের দিনগুলো কাজে লাগানো", en: "Using the khiyar days well" },
    body: {
      bn: "পরীক্ষার পূর্ববর্তী খেয়ারের দিনগুলো অত্যন্ত গুরুত্বপূর্ণ। এই সময়টিকে যথাযথভাবে কাজে লাগিয়ে গুরুত্বপূর্ণ বিষয়গুলো রিভিশন দেওয়া এবং দুর্বল জায়গাগুলো পুনরায় দেখে নেওয়া উচিত।",
      en: "The khiyar days before an examination are precious. They should be spent revising what matters most and going back over the weaker places.",
    },
  },
];

/** Rules to be kept in the examination hall itself. */
export const examHallRules: { title: T; body?: T }[] = [
  { title: { bn: "প্রবেশপত্র সঙ্গে রাখা", en: "Carry the admit card" } },
  {
    title: { bn: "নিষিদ্ধ সামগ্রী সঙ্গে না রাখা", en: "No prohibited material" },
    body: {
      bn: "পরীক্ষা কেন্দ্রে কোনো কিতাব, কাগজপত্র, নোট, বই অথবা কোনো ধরনের ইলেকট্রনিক ডিভাইস সঙ্গে রাখা যাবে না।",
      en: "No book, paper, note or electronic device of any kind may be brought into the examination centre.",
    },
  },
  {
    title: { bn: "উত্তরপত্রের প্রথম পৃষ্ঠা সঠিকভাবে পূরণ করা", en: "Fill in the first page correctly" },
    body: {
      bn: "পরীক্ষার্থী প্রথমে উত্তরপত্রের প্রথম পৃষ্ঠায় নিবন্ধন নম্বর, রেজিস্ট্রেশন নম্বর ও রোল নম্বরসহ প্রয়োজনীয় সকল তথ্য নির্ভুলভাবে পূরণ করবে। উত্তর লেখা শুরু করবে দ্বিতীয় পৃষ্ঠা থেকে।",
      en: "Enrolment number, registration number, roll number and all other particulars must be entered on the first page without error. Answers begin on the second page.",
    },
  },
  {
    title: { bn: "মার্জিন ও বক্স সিস্টেম অনুসরণ করা", en: "Keep to the margin and box system" },
    body: {
      bn: "উত্তরপত্রে নির্ধারিত মার্জিন ও বক্স সিস্টেম যথাযথভাবে অনুসরণ করতে হবে।",
      en: "The prescribed margin and box system must be followed throughout the answer script.",
    },
  },
  {
    title: { bn: "কলম ব্যবহারের নিয়ম", en: "Which ink to use" },
    body: {
      bn: "মূল উত্তর লেখার জন্য কালো কালি ব্যবহার করতে হবে। মার্জিন বা প্রয়োজনীয় চিহ্ন দেওয়ার ক্ষেত্রে নীল বা সবুজ কালি ব্যবহার করা যেতে পারে।",
      en: "Black ink is to be used for the answers themselves; blue or green may be used for the margin and for necessary marks.",
    },
  },
  {
    title: { bn: "বলপয়েন্ট কলম ব্যবহার", en: "Use a ballpoint pen" },
    body: { bn: "সম্ভব হলে জেল পেন ব্যবহার না করাই ভালো।", en: "Where possible, a gel pen is best avoided." },
  },
  {
    title: { bn: "সাইন পেন নিষিদ্ধ", en: "No sign pens" },
    body: { bn: "পরীক্ষার খাতায় সাইন পেন ব্যবহার করা নিষিদ্ধ।", en: "Sign pens may not be used on the answer script." },
  },
  {
    title: { bn: "প্রশ্ন ভালোভাবে পড়া", en: "Read the paper through" },
    body: {
      bn: "প্রশ্ন হাতে পাওয়ার পর তাড়াহুড়ো না করে সম্পূর্ণ প্রশ্ন ভালোভাবে পড়ে ও বুঝে উত্তর লেখা শুরু করতে হবে।",
      en: "Once the paper is in hand, read it through and understand it before beginning to write; there is no need to hurry.",
    },
  },
  { title: { bn: "উত্তরের মূল অংশ হাইলাইট করা", en: "Highlight the heart of the answer" } },
  {
    title: { bn: "প্রশ্নের ধারাবাহিকতা বজায় রাখা", en: "Keep to the order of the questions" },
    body: { bn: "সম্ভব হলে প্রশ্নের ধারাবাহিকতা অনুযায়ী উত্তর লিখতে হবে।", en: "Where possible, answer in the order the questions are set." },
  },
  { title: { bn: "হেডলাইন ও শিরোনাম দেওয়া", en: "Give headings and titles" } },
];

/* ── Guardians ─────────────────────────────────────────────────────────── */

export const guardianIntro: T = {
  bn: "সন্তানকে একজন আদর্শ তালেবে ইলম ও আলেম হিসেবে গড়ে তুলতে মাদরাসার পাশাপাশি অভিভাবকদেরও গুরুত্বপূর্ণ ভূমিকা রয়েছে। জামিয়ার সম্মানিত অভিভাবকদের জন্য নিম্নোক্ত বিষয়গুলো পালনীয়।",
  en: "In raising a child into a true seeker of knowledge, the guardian's part stands beside the madrasah's. The following are asked of the Jamia's honoured guardians.",
};

/** What the Jamia asks of every guardian. */
export const guardianDuties: T[] = [
  {
    bn: "জামিয়ার নেসাব ও নেযাম সম্পর্কে যথাসাধ্য ধারণা গ্রহণ এবং এর প্রতি পূর্ণ আস্থা রাখা।",
    en: "Learn as much as you can of the Jamia's syllabus and order, and place your full trust in it.",
  },
  {
    bn: "জামিয়ার তালীম, তারবিয়ত, দাওয়াত ও খেদমতে খালকসহ সার্বিক কার্যক্রমে আন্তরিক সহযোগিতা করা।",
    en: "Support wholeheartedly the Jamia's teaching, nurture, da'wah and service to people.",
  },
  {
    bn: "জামিয়ায় অধ্যয়নরত অবস্থায় শিক্ষার্থীকে অন্য কোনো শিক্ষা প্রতিষ্ঠানের সঙ্গে যুক্ত না করা এবং শিক্ষা-সংক্রান্ত বিষয়ে সংশ্লিষ্ট উস্তাদ ও কর্তৃপক্ষের পরামর্শ গ্রহণ করা।",
    en: "While the student is enrolled here, do not attach him to another institution; on matters of study, take the advice of his teacher and of the authorities.",
  },
  {
    bn: "সন্তানকে অসৎ সঙ্গ, অনুপযুক্ত পরিবেশ ও অপ্রয়োজনীয় ব্যস্ততা থেকে দূরে রাখা।",
    en: "Keep your child away from bad company, unsuitable surroundings and needless distraction.",
  },
  {
    bn: "শিক্ষার্থীর হাতে অতিরিক্ত টাকা-পয়সা না দেওয়া; প্রয়োজনীয় সামগ্রী অভিভাবক নিজে বা জামিয়ার মাধ্যমে সরবরাহ করা।",
    en: "Do not put excess money in the student's hands; supply what he needs yourself or through the Jamia.",
  },
  {
    bn: "সন্তানকে সাদাসিধে ও পরিমিত জীবনযাপনে অভ্যস্ত করা এবং অতি বিলাসিতা থেকে বিরত রাখা।",
    en: "Accustom him to a plain and measured life, and hold him back from extravagance.",
  },
  {
    bn: "জামিয়ার শিক্ষাব্যবস্থার সঙ্গে সাংঘর্ষিক কোনো অতিরিক্ত শিক্ষা বা পরীক্ষার ব্যবস্থা না করা।",
    en: "Do not arrange extra schooling or examinations that conflict with the Jamia's own programme.",
  },
  {
    bn: "সন্তানের সামনে পিতা-মাতার পারস্পরিক বিরোধ প্রকাশ না করা এবং তার পড়াশোনার বিষয়ে অভিভাবকদের মধ্যে ঐকমত্য বজায় রাখা।",
    en: "Do not air disagreements between parents before the child; keep one mind between you about his studies.",
  },
  {
    bn: "সন্তানের পড়াশোনা ও চরিত্র গঠনের বিষয়ে নিয়মিত খোঁজখবর রাখা এবং প্রয়োজনীয় সময়ে জামিয়ার শিক্ষকদের সঙ্গে যোগাযোগ করা।",
    en: "Keep regular track of his study and his character, and speak to his teachers whenever it is needed.",
  },
];

/** Ten shorter pointers, kept as a checklist. */
export const guardianPointers: T[] = [
  { bn: "অসৎ সঙ্গ থেকে রক্ষা করা", en: "Guard him from bad company" },
  { bn: "শরয়ী পর্দার প্রতি যত্নশীল হওয়া", en: "Be careful of the shar'i observance of purdah" },
  { bn: "সাদাসিধে জীবনযাপনে অভ্যস্ত করা", en: "Accustom him to a simple life" },
  { bn: "অতিরিক্ত টাকা-পয়সা না দেওয়া", en: "Do not give him excess money" },
  { bn: "অনুপযুক্ত আত্মীয়তার প্রভাব থেকে সতর্ক থাকা", en: "Beware the influence of unsuitable company among relatives" },
  { bn: "অনুপযুক্ত পত্র-পত্রিকা ও বিনোদন থেকে দূরে রাখা", en: "Keep unsuitable reading and entertainment away" },
  { bn: "দীনী শিক্ষার প্রতি পূর্ণ মনোযোগ", en: "Give full attention to his religious education" },
  { bn: "সন্তানদের শিক্ষার ক্ষেত্রে সামঞ্জস্য রাখা", en: "Keep a balance between your children's education" },
  { bn: "সন্তানের সামনে পারিবারিক বিরোধ প্রকাশ না করা", en: "Do not show family quarrels before the child" },
  { bn: "সন্তানের প্রতি নিয়মিত নজর রাখা", en: "Keep a regular eye on him" },
];

export const guardianClosing: T = {
  bn: "মনে রাখতে হবে — সন্তানের উত্তম ভবিষ্যৎ গঠনে অর্থ-সম্পদের চেয়ে তার ইলম, আমল, আখলাক ও সৎ চরিত্র অধিক মূল্যবান।",
  en: "Remember: in building a child's future, his knowledge, practice, manners and upright character are worth far more than wealth.",
};

/* ── Research department ───────────────────────────────────────────────── */

export const researchIntro: T = {
  bn: "জামিয়া উম্মুল কুরা আল-ইসলামিয়া বাংলাদেশের গবেষণা বিভাগ ইসলামী জ্ঞানচর্চা, প্রামাণ্য গবেষণা এবং সমকালীন বিষয়াবলির ইসলামী সমাধান অনুসন্ধানের একটি গুরুত্বপূর্ণ প্ল্যাটফর্ম। কুরআন-সুন্নাহ ও ইসলামী ঐতিহ্যের আলোকে বর্তমান বিশ্বের নতুন নতুন প্রশ্ন, সমস্যা ও চ্যালেঞ্জ নিয়ে গবেষণা করাই এ বিভাগের অন্যতম লক্ষ্য।",
  en: "The research department of Jamia Ummul Qura Al Islamia Bangladesh is a platform for Islamic scholarship, documented research and the search for Islamic answers to contemporary questions. Its aim is to study the new questions, problems and challenges of the present world in the light of the Qur'an, the Sunnah and the Islamic tradition.",
};

export const researchAreas: { icon: string; title: T; items: T[] }[] = [
  {
    icon: "scroll",
    title: { bn: "গবেষণা প্রবন্ধ", en: "Research papers" },
    items: [
      { bn: "কুরআন, তাদাব্বুরে কুরআন ও তাফসির", en: "Qur'an, tadabbur and tafsir" },
      { bn: "হাদিস ও উসূলে হাদিস", en: "Hadith and its principles" },
      { bn: "ফিকহ ও উসূলুল ফিকহ", en: "Fiqh and its principles" },
      { bn: "আকিদা ও ইসলামী দর্শন", en: "Creed and Islamic thought" },
      { bn: "সীরাত ও ইসলামের ইতিহাস", en: "Sirah and Islamic history" },
      { bn: "আরবি ভাষা ও সাহিত্য", en: "Arabic language and literature" },
      { bn: "ইসলামী অর্থনীতি", en: "Islamic economics" },
      { bn: "ইসলামী শিক্ষা ও গবেষণা", en: "Islamic education and research" },
    ],
  },
  {
    icon: "chart",
    title: { bn: "সমকালীন গবেষণা", en: "Contemporary research" },
    items: [
      { bn: "ইসলাম ও আধুনিক বিজ্ঞান", en: "Islam and modern science" },
      { bn: "প্রযুক্তি ও ইসলামী মূল্যবোধ", en: "Technology and Islamic values" },
      { bn: "কৃত্রিম বুদ্ধিমত্তা ও ইসলাম", en: "Artificial intelligence and Islam" },
      { bn: "সামাজিক যোগাযোগমাধ্যম", en: "Social media" },
      { bn: "যুবসমাজ ও নৈতিকতা", en: "Youth and morality" },
      { bn: "পরিবার ও সামাজিক সমস্যা", en: "Family and social questions" },
      { bn: "আধুনিক অর্থনীতি", en: "The modern economy" },
      { bn: "চিকিৎসাবিজ্ঞান ও ফিকহ", en: "Medicine and fiqh" },
      { bn: "পরিবেশ ও ইসলাম", en: "The environment and Islam" },
    ],
  },
  {
    icon: "shield",
    title: { bn: "ফিকহি ও ফতোয়া গবেষণা", en: "Fiqh and fatwa research" },
    items: [
      { bn: "সমকালীন মাসআলা", en: "Contemporary questions" },
      { bn: "নতুন উদ্ভূত ফিকহি সমস্যা", en: "Newly arising problems of fiqh" },
      { bn: "ফতোয়ার দলিল ও বিশ্লেষণ", en: "The evidence behind a fatwa, and its analysis" },
      { bn: "মাজহাবভিত্তিক তুলনামূলক গবেষণা", en: "Comparative study across the madhhabs" },
      { bn: "ফিকহি মতামতের পর্যালোচনা", en: "Review of juristic opinion" },
    ],
  },
  {
    icon: "book-open",
    title: { bn: "তুলনামূলক গবেষণা", en: "Comparative research" },
    items: [
      { bn: "ইসলাম ও অন্যান্য ধর্ম", en: "Islam and other religions" },
      { bn: "ইসলাম ও পাশ্চাত্য চিন্তাধারা", en: "Islam and Western thought" },
      { bn: "ইসলামী অর্থনীতি ও প্রচলিত অর্থনীতি", en: "Islamic and conventional economics" },
      { bn: "ইসলামী শিক্ষা ও আধুনিক শিক্ষা", en: "Islamic and modern education" },
      { bn: "বিভিন্ন ফিকহি মতের তুলনা", en: "Comparison of juristic views" },
    ],
  },
  {
    icon: "users",
    title: { bn: "শিক্ষক ও শিক্ষার্থীদের গবেষণা", en: "Research by teachers and students" },
    items: [
      { bn: "উস্তাদদের প্রবন্ধ, গ্রন্থ ও তাহকিক", en: "Teachers' papers, books and tahqiq" },
      { bn: "বক্তৃতা ও সেমিনার", en: "Lectures and seminars" },
      { bn: "ছাত্রদের প্রবন্ধ ও বার্ষিক গবেষণা", en: "Students' papers and annual research" },
      { bn: "গবেষণা প্রতিযোগিতা", en: "Research competitions" },
      { bn: "শ্রেষ্ঠ গবেষণা পুরস্কার", en: "The prize for the best research" },
    ],
  },
  {
    icon: "quran",
    title: { bn: "গবেষণা গ্রন্থাগার", en: "The research library" },
    items: [
      { bn: "কুরআন ও তাফসির", en: "Qur'an and tafsir" },
      { bn: "হাদিসের কিতাব", en: "Books of hadith" },
      { bn: "ফিকহের কিতাব", en: "Books of fiqh" },
      { bn: "আরবি অভিধান", en: "Arabic dictionaries" },
      { bn: "গবেষণাগ্রন্থ ও পুরোনো পত্রিকা", en: "Research works and old journals" },
      { bn: "PDF বই ও গুরুত্বপূর্ণ ওয়েবসাইট", en: "PDF books and useful websites" },
    ],
  },
  {
    icon: "pen",
    title: { bn: "গবেষণা নির্দেশিকা", en: "A guide for researchers" },
    items: [
      { bn: "নতুন গবেষকদের জন্য প্রাথমিক দিকনির্দেশনা", en: "First guidance for new researchers" },
      { bn: "বিষয় নির্বাচন ও গবেষণার কাঠামো", en: "Choosing a subject and shaping the work" },
      { bn: "তথ্য সংগ্রহের পদ্ধতি", en: "How to gather material" },
      { bn: "রেফারেন্স ও ফুটনোট লেখার নিয়ম", en: "Referencing and footnotes" },
      { bn: "গ্রন্থপঞ্জি তৈরি", en: "Compiling a bibliography" },
      { bn: "গবেষণাপত্র জমা দেওয়ার নিয়ম", en: "How a paper is submitted" },
    ],
  },
  {
    icon: "calendar",
    title: { bn: "সেমিনার ও গবেষণা সম্মেলন", en: "Seminars and conferences" },
    items: [
      { bn: "আসন্ন সেমিনার", en: "Forthcoming seminars" },
      { bn: "গবেষণা সম্মেলন ও কর্মশালা", en: "Research conferences and workshops" },
      { bn: "পূর্ববর্তী অনুষ্ঠান", en: "Past gatherings" },
      { bn: "ছবি ও ভিডিও", en: "Photographs and video" },
      { bn: "সেমিনারের প্রবন্ধ", en: "Seminar papers" },
    ],
  },
  {
    icon: "bell",
    title: { bn: "গবেষণা সংবাদ", en: "Research news" },
    items: [
      { bn: "নতুন গবেষণা প্রকাশ", en: "Newly published research" },
      { bn: "শিক্ষক-শিক্ষার্থীদের অর্জন", en: "Achievements of teachers and students" },
      { bn: "নতুন বই প্রকাশ", en: "New books" },
      { bn: "গবেষণা পুরস্কার", en: "Research prizes" },
      { bn: "দেশ-বিদেশের গুরুত্বপূর্ণ ইসলামী গবেষণার খবর", en: "Notable Islamic research at home and abroad" },
    ],
  },
];

/* ── Scholarships and student aid ──────────────────────────────────────── */

export const scholarshipIntro: T = {
  bn: "জামিয়া উম্মুল কুরা আল-ইসলামিয়া বাংলাদেশের শিক্ষার্থীদের মেধা, কৃতিত্ব, আর্থিক অসচ্ছলতা ও বিশেষ প্রয়োজন বিবেচনায় তাদের শিক্ষা কার্যক্রমে উৎসাহ ও সহযোগিতা প্রদানের লক্ষ্যে বিভিন্ন ধরনের বৃত্তি ও অনুদানের ব্যবস্থা রয়েছে। মেধা ও কৃতিত্বের স্বীকৃতি হিসেবে কিতাব, নগদ অর্থ ও ক্রেস্ট প্রদান করা হয়। পাশাপাশি আর্থিকভাবে অসচ্ছল ও যাকাত গ্রহণের উপযুক্ত শিক্ষার্থীদের জন্য যাকাত ফান্ড থেকে বোর্ডিংয়ের খরচ বহনের ব্যবস্থা রয়েছে।",
  en: "The Jamia keeps several forms of scholarship and grant, weighing a student's ability, achievement, financial hardship and particular need. Merit and achievement are recognised with books, cash and a crest; and for students in hardship who are eligible to receive zakat, boarding costs are met from the zakat fund.",
};

export const scholarships: { icon: string; title: T; body: T; extra?: T }[] = [
  {
    icon: "star",
    title: { bn: "মেধাবৃত্তি", en: "Merit scholarship" },
    body: {
      bn: "শিক্ষার্থীদের পড়াশোনায় উৎসাহিত করা এবং মেধার যথাযথ মূল্যায়নের লক্ষ্যে পরীক্ষায় ভালো ফলাফলকারী ও মেধাবী শিক্ষার্থীদের মেধাবৃত্তি প্রদান করা হয়।",
      en: "Awarded to able students who do well in the examinations, both to encourage study and to give ability its due.",
    },
    extra: {
      bn: "মেধাবী ও কৃতিত্বপূর্ণ শিক্ষার্থীদের বিভিন্ন সময়ে প্রয়োজনীয় কিতাব প্রদান করা হয়, যাতে অধ্যয়নের আগ্রহ বাড়ে ও জ্ঞানার্জনের পরিবেশ আরও সমৃদ্ধ হয়।",
      en: "Books are also given from time to time, so that the appetite for study grows and the atmosphere of learning is enriched.",
    },
  },
  {
    icon: "heart",
    title: { bn: "দরিদ্র ও মেধাবী শিক্ষার্থী বৃত্তি", en: "Scholarship for able students in hardship" },
    body: {
      bn: "আর্থিকভাবে অসচ্ছল কিন্তু মেধাবী ও অধ্যবসায়ী শিক্ষার্থীদের পড়াশোনা অব্যাহত রাখতে বিশেষ বৃত্তির ব্যবস্থা রয়েছে। শিক্ষার্থীর পারিবারিক আর্থিক অবস্থা, শিক্ষাগত যোগ্যতা ও প্রয়োজনীয়তা যাচাই করে এই বৃত্তি প্রদান করা হয়।",
      en: "A special scholarship keeps able and diligent students in study when the family cannot afford it. It is granted after the family's circumstances, the student's attainment and the real need have been assessed.",
    },
  },
  {
    icon: "quran",
    title: { bn: "হিফজ বৃত্তি", en: "Hifz scholarship" },
    body: {
      bn: "পবিত্র কুরআন হিফজে আগ্রহী ও মেধাবী শিক্ষার্থীদের উৎসাহিত করতে হিফজ বিভাগে বিশেষ বৃত্তির ব্যবস্থা রয়েছে। হিফজের অগ্রগতি, নিয়মিত সবক-আমুখতা, পরীক্ষার ফলাফল ও শিক্ষার্থীর সামগ্রিক যোগ্যতার ভিত্তিতে বৃত্তি প্রদান করা হয়।",
      en: "A scholarship in the Hifz department encourages able students set on memorising the Qur'an. It is judged on progress, regularity in sabaq and amukhta, examination results and overall attainment.",
    },
  },
  {
    icon: "users",
    title: { bn: "এতিম শিক্ষার্থী সহায়তা", en: "Support for orphaned students" },
    body: {
      bn: "এতিম শিক্ষার্থীদের শিক্ষা ও লালন-পালনে সহযোগিতার উদ্দেশ্যে গোরাবা ফান্ডের পক্ষ থেকে বিশেষ সহায়তার ব্যবস্থা রয়েছে। যোগ্য এতিম শিক্ষার্থীদের ভর্তি, শিক্ষা উপকরণ, আবাসন, খাবার ও অন্যান্য প্রয়োজনীয় ক্ষেত্রে প্রতিষ্ঠানের সামর্থ্য অনুযায়ী সহায়তা প্রদান করা হয়।",
      en: "The Ghuraba fund supports the education and upkeep of orphaned students — admission, books, lodging, meals and other needs, as far as the Jamia's means allow.",
    },
  },
  {
    icon: "gift",
    title: { bn: "যাকাতভিত্তিক শিক্ষা সহায়তা", en: "Zakat-based educational support" },
    body: {
      bn: "যাকাতের উপযুক্ত দরিদ্র শিক্ষার্থীদের শিক্ষা কার্যক্রমে সহযোগিতার লক্ষ্যে শরিয়াহসম্মত পদ্ধতিতে যাকাতভিত্তিক শিক্ষা সহায়তার ব্যবস্থা রয়েছে। যাচাই-বাছাইয়ের মাধ্যমে উপযুক্ত শিক্ষার্থীদের এই সহায়তার আওতায় আনা হয়।",
      en: "Support is provided from zakat, in a shari'ah-compliant manner, to students in poverty who are eligible to receive it. Recipients are chosen after due verification.",
    },
    extra: {
      bn: "আর্থিকভাবে অসচ্ছল ও যাকাত গ্রহণের উপযুক্ত শিক্ষার্থীদের জন্য যাকাত ফান্ড থেকে বোর্ডিংয়ের খরচ বহনের ব্যবস্থা রয়েছে।",
      en: "For such students, boarding costs are met from the zakat fund.",
    },
  },
  {
    icon: "home",
    title: { bn: "আবাসিক শিক্ষার্থী সহায়তা", en: "Support for residential students" },
    body: {
      bn: "আবাসিক শিক্ষার্থীদের মধ্যে যারা আর্থিকভাবে অসচ্ছল এবং শিক্ষা চালিয়ে যেতে সমস্যার সম্মুখীন হয়, তাদের জন্য বিশেষ সহায়তার ব্যবস্থা রয়েছে। প্রয়োজন ও যোগ্যতা বিবেচনা করে আবাসন, খাবার ও শিক্ষা-সংশ্লিষ্ট ব্যয়ের ক্ষেত্রে সহায়তা প্রদান করা হয়।",
      en: "Residential students who face hardship in continuing their studies receive particular help — with lodging, meals and study costs — according to need and merit.",
    },
    extra: {
      bn: "শিক্ষার্থীদের সুস্থতা ও কল্যাণের প্রতি গুরুত্ব দিয়ে প্রয়োজনীয় চিকিৎসা ও ওষুধের ব্যবস্থা প্রতিষ্ঠানের সামর্থ্য ও নীতিমালা অনুযায়ী করা হয়, যাতে অসুস্থতার কারণে শিক্ষা কার্যক্রম ব্যাহত না হয়।",
      en: "Necessary treatment and medicine are also arranged, within the Jamia's means and regulations, so that illness does not interrupt a student's study.",
    },
  },
  {
    icon: "shield",
    title: { bn: "বৃত্তির যোগ্যতা", en: "Who qualifies" },
    body: {
      bn: "বৃত্তি পাওয়ার ক্ষেত্রে শিক্ষার্থীর মেধা, পরীক্ষার ফলাফল, নিয়মিত উপস্থিতি, শৃঙ্খলা, উত্তম আচার-আচরণ, আর্থিক অবস্থা এবং প্রতিষ্ঠানের নির্ধারিত অন্যান্য শর্ত বিবেচনা করা হয়। প্রতিটি বৃত্তির জন্য আলাদা যোগ্যতার মানদণ্ড থাকতে পারে।",
      en: "Ability, examination results, regular attendance, discipline, good conduct, financial circumstances and the Jamia's other conditions are all weighed. Each scholarship may carry its own standard.",
    },
  },
  {
    icon: "chart",
    title: { bn: "বৃত্তির পরিমাণ", en: "How much is given" },
    body: {
      bn: "বৃত্তির ধরন ও শিক্ষার্থীর যোগ্যতার ভিত্তিতে বৃত্তির পরিমাণ নির্ধারণ করা হয়। প্রতিষ্ঠানের নির্ধারিত নীতিমালা অনুযায়ী মাসিক, ত্রৈমাসিক, ষান্মাসিক অথবা এককালীনভাবে বৃত্তি প্রদান করা হতে পারে।",
      en: "The amount depends on the kind of scholarship and the student's merit. It may be paid monthly, quarterly, half-yearly or as a single sum, according to the Jamia's regulations.",
    },
  },
  {
    icon: "pen",
    title: { bn: "আবেদন প্রক্রিয়া", en: "How to apply" },
    body: {
      bn: "বৃত্তি পাওয়ার জন্য নির্ধারিত সময়ের মধ্যে আবেদন করতে হবে। আবেদনের সঙ্গে প্রয়োজনীয় শিক্ষাগত তথ্য, অভিভাবকের তথ্য এবং প্রযোজ্য ক্ষেত্রে আর্থিক অসচ্ছলতার প্রমাণপত্র জমা দিতে হবে। আবেদন যাচাই-বাছাই শেষে যোগ্য শিক্ষার্থীদের বৃত্তির জন্য নির্বাচন করা হবে।",
      en: "Apply within the appointed time, enclosing the necessary academic particulars, the guardian's details and, where applicable, proof of financial hardship. Recipients are selected once the applications have been examined.",
    },
  },
];

/* ── The donation appeal ───────────────────────────────────────────────── */

export const donationAppealIntro: T[] = [
  {
    bn: "দ্বীনের এই মহৎ কাজে আপনিও অংশীদার হোন। একটি দ্বীনি প্রতিষ্ঠান শুধু একটি ভবন বা শিক্ষাকেন্দ্র নয়; এটি কুরআন-হাদিসের জ্ঞানচর্চা, আদর্শ মানুষ গঠন এবং সমাজের ভবিষ্যৎ নির্মাণের একটি গুরুত্বপূর্ণ কেন্দ্র।",
    en: "Take your share in this work. A religious institution is not merely a building or a schoolroom; it is a centre where the Qur'an and Hadith are studied, where character is formed and where a society's future is built.",
  },
  {
    bn: "আমাদের শিক্ষা কার্যক্রমকে আরও সুন্দর, সুসংগঠিত ও স্থায়ীভাবে এগিয়ে নিতে কয়েকটি গুরুত্বপূর্ণ প্রকল্প বাস্তবায়ন করা প্রয়োজন। আপনার সামান্য সহযোগিতাও একজন তালিবুল ইলমের জীবনে বড় পরিবর্তন আনতে পারে এবং দ্বীনি ইলমের প্রচার-প্রসারে আপনার জন্য সদকায়ে জারিয়ার মাধ্যম হতে পারে। আপনার সামর্থ্য অনুযায়ী আজই সহযোগিতার হাত বাড়িয়ে দিন।",
    en: "Several projects must be carried through if the teaching here is to grow settled and well-ordered. Even a small share from you can change a student's life, and may become for you a sadaqah jariyah in the spread of sacred knowledge. Reach out today, as your means allow.",
  },
];

export const donationProjects: { icon: string; title: T; lead: T; body: T[] }[] = [
  {
    icon: "book-open",
    title: { bn: "একাডেমিক ভবন নির্মাণ", en: "The academic building" },
    lead: { bn: "একটি ভবন — অসংখ্য আলেম তৈরির স্বপ্ন", en: "One building — and the making of countless scholars" },
    body: [
      {
        bn: "প্রতিদিন অসংখ্য শিক্ষার্থী কুরআন, হাদিস, ফিকহ, তাফসির ও আরবি ভাষায় জ্ঞান অর্জনের জন্য অধ্যয়ন করছে। শিক্ষার্থীর সংখ্যা ও শিক্ষা কার্যক্রম বৃদ্ধির সঙ্গে সঙ্গে প্রয়োজন হচ্ছে আরও উন্নত ও পর্যাপ্ত শ্রেণিকক্ষের।",
        en: "Every day students gather here for the Qur'an, Hadith, fiqh, tafsir and Arabic. As their number grows, so does the need for more and better classrooms.",
      },
      {
        bn: "পরিকল্পিত একাডেমিক ভবন নির্মাণের মাধ্যমে শিক্ষার্থীদের জন্য সুন্দর, নিরাপদ ও উপযোগী শিক্ষার পরিবেশ তৈরি করা হবে; থাকবে প্রয়োজনীয় শ্রেণিকক্ষ ও শিক্ষা-সহায়ক ব্যবস্থা।",
        en: "The planned academic building will give them a sound, safe and fitting place to learn, with the classrooms and provisions the teaching requires.",
      },
      {
        bn: "আপনার দান একটি ইট, একটি কক্ষ কিংবা একটি পূর্ণাঙ্গ অবকাঠামো নির্মাণে ভূমিকা রাখতে পারে। আজ যে ভবন নির্মাণে সহযোগিতা করবেন, আগামী দিনে সেখান থেকেই অসংখ্য আলেম, হাফেজ ও দ্বীনের খাদেম গড়ে উঠতে পারেন।",
        en: "Your gift may lay a brick, a room, or a whole structure. From the building you help raise today, scholars, huffaz and servants of the din may come tomorrow.",
      },
    ],
  },
  {
    icon: "mosque",
    title: { bn: "মসজিদ নির্মাণ", en: "The mosque" },
    lead: {
      bn: "যেখানে কুরআনের তিলাওয়াত হবে, সিজদায় নত হবে অসংখ্য কপাল",
      en: "Where the Qur'an will be recited, and many foreheads will bow",
    },
    body: [
      {
        bn: "মসজিদ মুসলমানের হৃদয়ের সঙ্গে সম্পর্কিত একটি পবিত্র স্থান। একটি মাদরাসার জন্য মসজিদ শুধু নামাজের স্থান নয়; এটি শিক্ষার্থীদের ইবাদত, তারবিয়াত ও আত্মশুদ্ধির অন্যতম কেন্দ্র।",
        en: "The mosque is bound to the heart of every Muslim. For a madrasah it is not only a place of prayer but a centre of worship, nurture and inward purification.",
      },
      {
        bn: "আমাদের শিক্ষার্থী, শিক্ষক ও আশপাশের মুসল্লিদের জন্য একটি সুন্দর ও পর্যাপ্ত মসজিদ নির্মাণ করা প্রয়োজন।",
        en: "A good and sufficient mosque is needed for our students, our teachers and the worshippers nearby.",
      },
      {
        bn: "মসজিদ নির্মাণে ব্যয়িত অর্থের বিনিময়ে সেখানে আদায় হওয়া নামাজ, তিলাওয়াত, জিকির ও তালিমের মাধ্যমে ইনশাআল্লাহ সওয়াবের দরজা খুলে যেতে পারে। আসুন, এমন একটি ঘর নির্মাণে অংশ নিই — যেখানে প্রতিদিন আল্লাহর নাম উচ্চারিত হবে।",
        en: "Through the prayers, recitation, remembrance and teaching that will take place there, a door of reward may open for you. Take part in raising a house where God's name is spoken every day.",
      },
    ],
  },
  {
    icon: "heart",
    title: { bn: "দরিদ্র ও অসচ্ছল শিক্ষার্থীদের সহযোগিতা", en: "Students in hardship" },
    lead: {
      bn: "অর্থের অভাবে যেন কোনো মেধাবী শিক্ষার্থীর দ্বীনি শিক্ষা বন্ধ না হয়",
      en: "So that no able student's education stops for want of money",
    },
    body: [
      {
        bn: "অনেক মেধাবী ও আগ্রহী শিক্ষার্থী রয়েছে, যারা দ্বীনি শিক্ষা গ্রহণ করতে চায়; কিন্তু পরিবারের আর্থিক অসচ্ছলতার কারণে তাদের পড়াশোনা চালিয়ে যাওয়া কঠিন হয়ে পড়ে।",
        en: "Many able and willing students wish to study, but hardship at home makes it hard to carry on.",
      },
      {
        bn: "আপনার সহযোগিতায় একজন দরিদ্র শিক্ষার্থীর ভর্তি, শিক্ষা উপকরণ, পোশাক, চিকিৎসা ও প্রয়োজনীয় ব্যয় নির্বাহে সহায়তা করা সম্ভব হতে পারে। আজ একজন অসহায় শিক্ষার্থীর পাশে দাঁড়ালে আগামী দিনে সে একজন আলেম হয়ে হাজারো মানুষের হেদায়াতের কারণ হতে পারে।",
        en: "Your help can meet a student's admission, books, clothing, treatment and daily costs. Stand beside one student today, and tomorrow he may be a scholar through whom many are guided.",
      },
      {
        bn: "বিশেষ দ্রষ্টব্য: যাকাতের অর্থ প্রদান করতে চাইলে মাদরাসার দায়িত্বশীল কর্তৃপক্ষের সঙ্গে যোগাযোগ করে যাকাতের উপযুক্ত খাত ও শরিয়াহসম্মত ব্যবস্থাপনা সম্পর্কে নিশ্চিত হয়ে দান করুন।",
        en: "Please note: if you wish to give zakat, speak first with the responsible authorities so that the proper heading and shari'ah-compliant handling are settled.",
      },
    ],
  },
  {
    icon: "home",
    title: { bn: "বোর্ডিং ও আবাসিক ব্যবস্থা", en: "Boarding and lodging" },
    lead: {
      bn: "দূর-দূরান্ত থেকে আসা তালিবুল ইলমদের জন্য নিরাপদ আবাসন",
      en: "Safe lodging for students who come from far away",
    },
    body: [
      {
        bn: "দেশের বিভিন্ন অঞ্চল থেকে শিক্ষার্থীরা এখানে আসে; তাদের অনেকেরই নিজস্ব আবাসনের ব্যবস্থা নেই। ফলে নিরাপদ, পরিচ্ছন্ন ও শিক্ষাবান্ধব বোর্ডিং ব্যবস্থা অত্যন্ত জরুরি।",
        en: "Students come from every part of the country, and many have nowhere of their own to stay. Safe, clean, study-friendly boarding is a pressing need.",
      },
      {
        bn: "একটি সুন্দর বোর্ডিং ব্যবস্থা শিক্ষার্থীদের শুধু থাকার জায়গাই দেবে না; বরং নিয়মিত পড়াশোনা, ইবাদত, শৃঙ্খলা ও তারবিয়াতের জন্য সহায়ক পরিবেশ তৈরি করবে। আপনার সহযোগিতা একজন দূরবর্তী এলাকার শিক্ষার্থীকে নিশ্চিন্তে দ্বীনি শিক্ষা গ্রহণের সুযোগ করে দিতে পারে।",
        en: "Good boarding gives more than a roof: it makes an order in which study, worship, discipline and nurture can go on. Your help can let a student from a distant place learn without anxiety.",
      },
    ],
  },
  {
    icon: "utensils",
    title: { bn: "শিক্ষার্থীদের খাবারের ব্যবস্থা", en: "Meals for the students" },
    lead: { bn: "একজন তালিবুল ইলমের খাবারের দায়িত্ব নিন", en: "Take on the meals of one seeker of knowledge" },
    body: [
      {
        bn: "ইলম অর্জনের জন্য প্রয়োজন পরিশ্রম, সময় ও একাগ্রতা; আর এর জন্য প্রয়োজন পর্যাপ্ত ও স্বাস্থ্যকর খাবার। আবাসিক শিক্ষার্থীদের নিয়মিত খাবারের ব্যবস্থা করা জামিয়ার একটি গুরুত্বপূর্ণ দায়িত্ব।",
        en: "Learning asks for labour, time and concentration — and these ask for sufficient, wholesome food. Feeding the residential students is among the Jamia's chief duties.",
      },
      {
        bn: "অনেক শিক্ষার্থী সীমিত সামর্থ্যের পরিবার থেকে আসে। আপনি চাইলে একজন শিক্ষার্থীর এক বেলার খাবার, এক দিনের খাবার, এক সপ্তাহের খাবার কিংবা সামর্থ্য অনুযায়ী নিয়মিত খাবার ব্যয়ের অংশ বহন করতে পারেন।",
        en: "Many come from families of small means. You may take on one meal, one day, one week, or a regular share of the cost as your means allow.",
      },
      {
        bn: "আপনার দেওয়া খাবার একজন তালিবুল ইলমের শরীরে শক্তি জোগাবে; আর সেই শক্তি দিয়ে সে কুরআন পড়বে, হাদিস শিখবে এবং ভবিষ্যতে দ্বীনের খেদমত করবে — ইনশাআল্লাহ।",
        en: "The food you give becomes the strength with which he reads the Qur'an, learns hadith and, God willing, serves the din hereafter.",
      },
    ],
  },
  {
    icon: "pin",
    title: { bn: "স্থায়ী ক্যাম্পাস নির্মাণ", en: "The permanent campus" },
    lead: {
      bn: "আজকের স্বপ্ন — আগামী প্রজন্মের জন্য একটি স্থায়ী দ্বীনি ঠিকানা",
      en: "Today's hope — a lasting address for the generations to come",
    },
    body: [
      {
        bn: "একটি মানসম্মত ও সুসংগঠিত দ্বীনি শিক্ষাপ্রতিষ্ঠানের জন্য প্রয়োজন নিজস্ব ও স্থায়ী ক্যাম্পাস। ভাড়া বা অস্থায়ী ব্যবস্থার পরিবর্তে একটি স্থায়ী ক্যাম্পাস প্রতিষ্ঠা করা আমাদের অন্যতম বড় লক্ষ্য।",
        en: "A sound and settled institution needs a campus of its own. To move from rented and temporary arrangements to a permanent campus is among our largest aims.",
      },
      {
        bn: "এই ক্যাম্পাসে ধীরে ধীরে গড়ে উঠবে একাডেমিক ভবন, মসজিদ, ছাত্রাবাস ও বোর্ডিং, লাইব্রেরি ও গবেষণাকেন্দ্র, খাবারের ব্যবস্থা, প্রশাসনিক ভবন এবং শিক্ষার্থীদের উপযোগী পরিবেশসহ অন্যান্য প্রয়োজনীয় অবকাঠামো।",
        en: "There will rise, in time, the academic building, the mosque, the hostel and boarding, a library and research centre, the kitchen, an administrative block and the grounds a student body needs.",
      },
      {
        bn: "আপনি আজ যে জমি, ভবন কিংবা অবকাঠামো নির্মাণে সহযোগিতা করবেন, আগামী বহু বছর সেখানে শিক্ষার্থীরা ইলম অর্জন করতে পারে। আসুন, এমন একটি প্রতিষ্ঠান গড়ে তুলি — যার উপকার আমাদের জীবনের পরেও চলতে থাকে।",
        en: "The land, the building or the structure you help raise today may hold students for many years. Let us build something whose good continues after our own lives.",
      },
    ],
  },
];

export const donationClosing: { title: T; body: T[] } = {
  title: { bn: "আপনার দান, তাদের ভবিষ্যৎ", en: "Your gift, their future" },
  body: [
    {
      bn: "আপনার কাছে হয়তো একটি অনুদান সামান্য। কিন্তু একটি দরিদ্র শিক্ষার্থীর কাছে সেটিই হতে পারে তার পড়াশোনা চালিয়ে যাওয়ার অবলম্বন।",
      en: "A gift may seem small to you. To a student in hardship it can be the very means of carrying on.",
    },
    {
      bn: "আপনার দেওয়া অর্থে হয়তো একটি ইট বসবে; কিন্তু সেই ইটের ওপর দাঁড়িয়ে তৈরি হতে পারে একটি মসজিদ, একটি শ্রেণিকক্ষ কিংবা একটি আবাসন — যেখানে বছরের পর বছর কুরআন-হাদিসের শিক্ষা চলবে।",
        en: "What you give may set a single brick; and on that brick may stand a mosque, a classroom or a hostel where the Qur'an and Hadith are taught for years to come.",
    },
    {
      bn: "আপনার দান হোক ইলমের পথে, দ্বীনের পথে, মানবতার পথে এবং সদকায়ে জারিয়ার পথে। আল্লাহ তাআলা আপনার দানকে কবুল করুন, আপনার রিজিকে বরকত দিন এবং দুনিয়া ও আখিরাতে উত্তম প্রতিদান দান করুন। আমীন।",
      en: "May your giving be for knowledge, for the din, for humanity, and a sadaqah jariyah. May Allah accept it, bless your provision and reward you well in this world and the next. Amin.",
    },
  ],
};
