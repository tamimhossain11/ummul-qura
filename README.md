# জামিয়া উম্মুল কুরা আল-ইসলামিয়া — Website

Website for **Jamia Ummol Qura Al Islamia** (جامعة أم القرى الإسلامية), Phulbaria,
Sadar, Brahmanbaria. Built with Next.js 16 (App Router) and Tailwind CSS v4.

Bangla is the default language throughout; a **বাংলা / EN** toggle in the header
switches the whole site to English and remembers the choice in the browser.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

> This machine has `NODE_ENV=production` exported globally, which breaks
> `next dev`. If you hit a styling failure in dev, run `NODE_ENV=development npm run dev`.

## Where the content lives

All text is bilingual. Every string is an object `{ bn, en }`, so translations
can never drift apart from one another.

| File | Holds |
| --- | --- |
| `lib/site.ts` | Name, address, **contact details**, navigation menu |
| `lib/content.ts` | Teachers, departments, events, notices, gallery, about, admission, facilities, donation |
| `lib/i18n.ts` | Language types and Bangla numeral conversion |
| `app/globals.css` | Colour palette, fonts, Islamic pattern and ornament styles |

## Information still to be filled in

These were left blank deliberately, as requested. Each already has a designed
placeholder on the page — supply the value and it appears automatically.

**`lib/site.ts`**
- `phone`, `phoneAlt` — shown in the footer, contact page and admission page
- `email` — footer and contact page
- `facebook`, `youtube` — social links
- `mapEmbed` — a Google Maps embed URL; the contact page shows a styled
  fallback panel until this is set

**`lib/content.ts`**
- `notices` — currently an empty array, so `/notices` shows an empty state.
  Add entries in the shape `{ slug, title, date, category, body, pinned? }`
  and the list renders itself.
- Admission fees and seat counts show as `—` in the table on `/admission`
  (see `AdmissionView.tsx`, the two placeholder cells).

**`components/views/DonationView.tsx`**
- `channels` — bKash / Nagad / Rocket / bank account numbers

**Photograph**
- Maulana Arman Hossain has no portrait yet. Drop one at
  `public/teachers/arman.jpg` and set `photo` on the `arman-hossain` entry in
  `lib/content.ts`. Until then the card shows a patterned initial.

**Forms**
- The admission enquiry and contact forms are presentational. Wire them to an
  endpoint or a service when one is available.

## Pages

`/` · `/about` · `/teachers` · `/departments` · `/admission` · `/facilities`
`/notices` · `/events` · `/gallery` · `/donation` · `/contact`

## Design notes

The palette is taken from the Jamia's crest and banner artwork — deep navy
through teal to cyan, with gold ornament accents. Recurring motifs:

- `.pattern-girih` — an eight-point star lattice used behind dark sections
- `.mask-arch` / `.mask-arch-tall` — a pointed mihrab arch, used to frame
  portraits and campus imagery
- `.rule-gold` — the gold hairline under headings
- `<Ornament />` — the arabesque flourish separating sections
- `.caps` — eyebrow labels. Bangla has no letter case and its conjuncts break
  apart under wide tracking, so uppercase and letter-spacing apply only in
  English.

Fonts: Hind Siliguri (Bangla), Amiri (Arabic calligraphy), Cormorant Garamond
(English display).
