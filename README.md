# জামিয়া উম্মুল কুরা আল-ইসলামিয়া — Website

Website for **Jamia Ummul Qura Al Islamia** (جامعة أم القرى الإسلامية), Phulbaria,
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
| `lib/content.ts` | Teachers, departments, events, notices, gallery, about, admission, facilities, donation, board results, permanent land |
| `lib/i18n.ts` | Language types and Bangla numeral conversion |
| `app/globals.css` | Colour palette, fonts, Islamic pattern and ornament styles |

## Information still to be filled in

Most contact details are now in place. What remains blank is listed below —
each has a designed placeholder, and appears as soon as a value is supplied.

**`lib/site.ts`**
- `facebook`, `youtube` — social links

**`lib/content.ts`**
- `notices` — currently an empty array, so `/notices` shows an empty state.
  Add entries shaped `{ slug, title, date, category, body, pinned? }` and the
  list renders itself.
- Admission fees and seat counts show as `—` in the table on `/admission`.

**`components/views/DonationView.tsx`**
- `channels` — bKash / Nagad / Rocket / bank account numbers

**Photograph**
- Maulana Arman Hossain has no portrait yet. Drop one at
  `public/teachers/arman.jpg` and set `photo` on the `arman-hossain` entry in
  `lib/content.ts`. Until then the card shows a patterned initial.

**Forms**
- The admission enquiry and contact forms are presentational. Wire them to an
  endpoint or a service when one is available.

## Contact details in use

- **Phone** — 01722-139364 (the madrasah's, and the Principal's)
- **Madrasah office** — jamiaummulqura22@gmail.com
- **Principal** — muftiobaidullah64@gmail.com
- **Location** — beside Phulbaria Bus Stand, Sadar, Brahmanbaria.
  The map embed is pinned to 23.9787921, 91.0999891, resolved from the
  madrasah's shared Google Maps link, which the "directions" button opens.
- **Results portal** — https://qmmsoft.com/1177/student_result, linked from
  `/results` and from the homepage results band.

## Pages

`/` · `/about` · `/teachers` · `/departments` · `/admission` · `/results`
`/facilities` · `/notices` · `/events` · `/gallery` · `/donation` · `/contact`

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
