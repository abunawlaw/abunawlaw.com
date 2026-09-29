# Handoff: Abunaw & Associates — firm website

## Overview
Marketing website for Abunaw & Associates, a Cameroonian law firm with offices in Douala (head office) and Buea. Twelve screens: Home, Practices index, three practice detail pages, People, three lawyer bios, About, Insights index, sample Article, Careers, Contact. EN/FR language toggle (French currently covers nav + home hero only).

## About the design files
The files in this bundle are **design references built in HTML**: prototypes that show the intended look, copy and behaviour. They are **not production code to copy**. Recreate them in the target stack. If no codebase exists yet, a static-first framework is recommended (Next.js / Astro with real routes, i18n routing for `/en` and `/fr`, and a CMS or MDX for Insights and People).

- `Abunaw and Associates (reference).html`: a single self-contained file. Open it in any browser, offline; every screen is reachable from the header nav.
- `source/Abunaw and Associates.dc.html`: the editable source. All markup is inline-styled; page switching lives in the `<script data-dc-script>` class at the bottom. It needs `support.js` beside it to run.
- `assets/`: lawyer photographs, full colour originals.

## Fidelity
**High-fidelity.** Colours, type, spacing, copy and interactions are final. Recreate them pixel-accurately.

Text in `[square brackets]` set in monospace is a **placeholder awaiting real content** from the firm: street addresses, phone numbers, the general email, article dates and author, the incorporation timetable, and job openings. Keep the placeholders visible until the firm supplies the content. Do not invent it.

## Design tokens

### Colours
| Token | Hex | Use |
|---|---|---|
| ink | `#00171F` | Primary text, dark sections (hero, experience band, footer), primary button bg |
| navy | `#003459` | Duotone tint on hero photo only |
| accent | `#007EA7` | Links, eyebrows, numerals, rules on light bg |
| accent-bright | `#00A8E8` | Eyebrows/labels on dark backgrounds only |
| white | `#FFFFFF` | Page background |
| body | `#28383f` | Long-form paragraph text |
| body-2 | `#38484f` | Lead / intro paragraphs |
| muted | `#4a5a61` | Secondary text, card descriptions |
| faint | `#6b7b82` | Placeholders, labels, meta |
| disabled | `#9aa7ad` | Inactive language toggle |
| rule | `rgba(0,23,31,0.14)` | Section dividers |
| rule-strong | `rgba(0,23,31,0.2)` | Card top borders |
| rule-dark | `rgba(255,255,255,0.28)` | Rules on dark bg |

Selection: bg `#00A8E8`, text white. Link hover: `#00171F` with underline, offset 3px.

### Typography
- **Display / headings:** Spectral (Google Fonts), weights 300 / 400.
- **UI / body:** Archivo, weights 400 / 500 / 600.
- **Placeholders and meta:** `ui-monospace, Menlo, monospace`.

| Role | Font | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|---|
| Hero statement | Spectral | clamp(56px, 11vw, 168px) | 300 | 0.94 | -0.035em |
| Page H1 | Spectral | clamp(36px, 5.2vw, 68px) | 300 | 1.06 | -0.02em |
| Section H2 | Spectral | clamp(25px, 2.4vw, 32px) | 400 | 1.2 | — |
| Card H3 | Spectral | 20–23px | 400 | 1.25 | — |
| Lead | Archivo | clamp(17px, 1.4vw, 20px) | 400 | 1.7 | — |
| Body | Archivo | 17px | 400 | 1.75 | — |
| Card text | Archivo | 14.5–15.5px | 400 | 1.6–1.7 | — |
| Nav / buttons | Archivo | 13.5–14px | 500 | — | 0.04em |
| Eyebrow | Archivo | 11px uppercase | 500 | — | 0.16em |
| Meta label | Archivo | 11px uppercase | 500 | — | 0.14em |

Body measure: `max-width: 66–68ch`. Use `text-wrap: pretty` on paragraphs.

### Layout & spacing
- Container: `max-width: 1360px`, horizontal padding `clamp(20px, 5vw, 80px)`.
- 12-column grid, `gap: 32px`. Common splits are 4/7 (heading | body) and 3/8 (sticky sub-nav | content). Every column carries a `min-width` (200–280px) so the grid wraps on narrow screens.
- Section vertical padding: `clamp(56px, 7vw, 96px)`. Page top: `clamp(48px, 7vw, 104px)`.
- Header height: 78px. Sticky, white, 1px bottom rule.
- **No border-radius and no shadows anywhere.** Separation comes from hairline rules only: a 1px top border on cards, and a 2px ink top border on the first or featured item.

### Buttons
- Primary on dark: bg white, text ink, padding 14px 26px.
- Secondary on dark: transparent, 1px `rgba(255,255,255,0.45)` border, white text.
- Outline on light: transparent, 1px `rgba(0,23,31,0.22)` border, ink text, padding 11–12px 18px.
- Text link: accent colour, 500 weight, optionally with a 1px accent bottom border.
- Submit: bg ink, white text, padding 14px 28px.

## Screens

### Global header
Firm name in Spectral 19px uppercase, tracking 0.06em; the "&" is in accent. Nav, right-aligned: Practices, People, About, Insights, Careers, then Contact as an outline button, then the EN / FR toggle behind a left rule. The active language is ink and the inactive one `#9aa7ad`. FR nav labels: Domaines, Équipe, Le cabinet, Publications, Carrières, Contact. In FR, an ink notice bar under the header states that the full French version is in preparation.

### 01 Home
1. **Hero** (ink bg, min-height `clamp(560px, 76vh, 820px)`). The right 72% holds Francisca's photo with this treatment:
   - image: `grayscale(1) contrast(1.12) brightness(0.72)`
   - an overlay of `#003459` with `mix-blend-mode: color` at 0.9 opacity
   - a gradient `90deg, #00171F 0%, #00171F 26%, rgba(0,23,31,.86) 52%, rgba(0,23,31,.2) 100%`

   Content: eyebrow "Douala · Buea" in accent-bright. Statement "Integrity. / Results." (FR: "Intégrité. / Résultats."). Subline "Counsel in an OHADA market. A Cameroonian firm advising companies, lenders and families in English and French, in both of the country's legal traditions." Buttons: Our practices (primary) and Contact the firm (secondary).
2. **Areas of practice.** An `auto-fill minmax(230px,1fr)` grid of all 10 areas. Each cell has a mono numeral 01–10, a Spectral title and its sub-items joined with " · ". The four areas with detail pages also get a "Read more" link. The first cell has a 2px ink top border.
3. **Why Cameroon, why common law.** 4/7 split: heading on the left, three paragraphs on the right.
4. **Experience band** (ink bg). Three Spectral statements in 4/4/4 columns:
   - More than 30 companies advised across banking and finance, payments, telecommunications, logistics, and oil and gas.
   - Around 12 businesses guided through incorporation and formation.
   - Internal governance frameworks reviewed and strengthened for human resources firms and NGOs.
5. **Offices.** Douala (Head office) and Buea (Southwest Region) with placeholder address and phone, plus a "Contact the firm" outline button.
6. **Insights.** The three latest article teasers.

### 02 Practices index
H1 "Core practice areas" and an intro line, then 10 rows. Each row is a 5/6 split: numeral + H2 on the left, sub-items in an auto-fit list on the right, and a "Read more" outline button where a detail page exists.

| # | Area | Items | Detail page |
|---|---|---|---|
| 01 | Corporate & Commercial | Corporate structuring and restructuring · Commercial transactions · Company incorporation / business formation | Corporate |
| 02 | Corporate Compliance & Governance | Regulatory compliance advisory · Corporate governance frameworks · Tax compliance · AML compliance · Data protection · NGO/organizational policy review | Corporate, anchored to `#regulatory` |
| 03 | Succession & Probate | Succession planning · Letters of administration · Probate matters | Succession |
| 04 | Real Estate & Land Law | Property transactions · Land law advisory | Land |
| 05 | Labour & Employment Law | Employment contracts and disputes · Workplace compliance | — |
| 06 | Family Law | Family law matters and representation | — |
| 07 | Criminal Litigation | Criminal defense and litigation | — |
| 08 | Human Rights Law | Human rights advocacy and representation | — |
| 09 | Consumer Protection | Consumer rights advisory | — |
| 10 | Legal Translation | Legal document translation (English/French) | — |

### 03 Corporate, Commercial & Compliance
A 3/8 layout with a **sticky sub-nav** (`top: 110px`) that has two group labels: "Corporate & Commercial" (Structuring and restructuring, Commercial transactions, Incorporation and formation) and "Compliance & Governance" (Regulatory compliance, Governance frameworks, Tax compliance, AML compliance, Data protection, NGO and organisational policy, Questions). Each section has an `id` and `scroll-margin-top: 110px`. The Incorporation section includes a definition list of SA / SARL / SAS / GIE / Branch. Four FAQ items use native `<details>` with the marker hidden. A disclaimer line closes the page.

### 04 Real Estate & Land Law
Same sticky sub-nav pattern. Ten sections. Section 5 is an **8-step due-diligence sequence**: numbered rows, each with a bold title and one line of description, introduced by an "illustrative, not legal advice" caption.

### 05 Succession & Probate
A single column offset to columns 4–10. Three sections: Succession planning, Letters of administration, Probate matters.

### 06 People
Grid `auto-fill minmax(250px,1fr)` of three cards, in this order:
1. Francisca E. Abunaw, Managing Partner, Douala
2. Orock Kelly Agbor, Associate, Buea
3. Orock Donaldson Agbor, Associate, Buea

Photo boxes are 4:5. **All photos use `filter: grayscale(1) contrast(1.06) brightness(0.98)`.** Donaldson's photo is a full-length portrait, so it is zoomed in: `position:absolute; width:200%; left:-85%; top:-30%`. Kelly's landscape photo uses `object-position: 51% 0`. Clicking a card opens that lawyer's bio.

### 07 Bio (× 3)
A 4/7 split. The left column holds the photo, then Office, Admissions, and Contact (a mailto link plus a phone placeholder). The right column holds the H1 name, the title, a Spectral lead paragraph, the body paragraphs, a "Practice focus" list, and "Sectors" or "Education" where provided. Copy is final; lift it from the source file.

| Lawyer | Email | Admissions |
|---|---|---|
| Francisca E. Abunaw | francisca.abunaw@abunawlaw.com | Cameroon Bar Association; Nigerian Bar |
| Orock Kelly Agbor | kelly.orock@abunawlaw.com ¹ | Barrister, Solicitor and Notary Public of the Supreme Court of Nigeria; Cameroon Bar Association |
| Orock Donaldson Agbor | donaldson.agbor@abunawlaw.com | Advocate of the Supreme Court of Cameroon; Nigerian Bar Association |

¹ The firm supplied "kelly.orock@**bunawlaw**.com". It was treated as a typo; confirm with the firm.

### 08 About
A 4/7 split. The left column has three stats in Spectral 32px: Douala · Buea (Offices), Cameroon · Nigeria (Bar admissions), English · French (Working languages). The right column has three paragraphs. Below sits a four-up principles grid: Two legal traditions, Two jurisdictions, Plain advice, Legal education (*The Law Demystified*).

### 09 Insights index
Rows split 3/8: mono date and category on the left, Spectral headline and summary on the right. Only the first row links to the article.

### 10 Article
Header in columns 3–10, body in columns 3–9. Spectral lead, H2 subheads, an ordered list, and a mono disclaimer at the end.

### 11 Careers
Intro, four role cards, then a "Current openings" list (placeholders) and application instructions.

### 12 Contact
1. Three columns: Douala (Head office), Buea (Southwest Region), and "Our lawyers" with all three mailto links.
2. **Enquiry form** in a 4/7 split. The left column holds a "Before you write" notice: no lawyer-client relationship is created, a conflict check comes first, and no confidential information should be sent.
3. Form fields use an underline-only style: 0 border except a 1px bottom border at `rgba(0,23,31,.3)`, and no outline. Fields:
   - Name
   - Organisation
   - Email
   - Telephone
   - Preferred language: English / Français
   - Practice area: the 10 areas + Other
   - Other parties involved (**required** for the conflict check)
   - Enquiry (textarea)
   - Acknowledgment checkbox (**required**)
   - Submit: "Send enquiry"

   The prototype does not send anything. It only shows "Demonstration form — no message was sent." Implement real submission with validation.

### Footer
Ink background, in four columns:
1. Firm name and tagline
2. Practices: Corporate & Commercial, Compliance & Governance, Real Estate & Land Law, Succession & Probate
3. Firm: People, About, Insights, Careers
4. Enquiries: placeholder contact details and a Contact button

Below the columns, a hairline rule, then the legal disclaimer and "English · Français".

## Interactions & behaviour
- **Routing:** the prototype swaps pages in local state. Implement real routes, for example `/`, `/practices`, `/practices/corporate`, `/practices/real-estate-land`, `/practices/succession-probate`, `/people`, `/people/francisca-abunaw`, `/about`, `/insights`, `/insights/<slug>`, `/careers`, `/contact`. Every navigation lands at the top of the page. The Compliance links go to `/practices/corporate#regulatory`.
- **Sticky sub-nav** on the Corporate and Land pages. Anchor links with smooth scroll, offset for the 78px header.
- **Reveal on scroll:** blocks tagged `data-reveal` fade and rise into view (opacity 0 → 1, translateY 14px → 0, 700ms ease), triggered by IntersectionObserver with `rootMargin: 0 0 -8% 0`. Blocks already in view on load are not animated. Respect `prefers-reduced-motion`.
- **FAQ:** native `<details>` / `<summary>`.
- **Language toggle:** switches between EN and FR. Build it with real i18n. French copy exists only for the nav, hero statement, hero subline and hero CTAs. All other French copy still needs writing or translating.
- **Responsive:** the grid columns wrap because of their `min-width`s. The prototype has no mobile nav. **Add a hamburger menu below about 900px.**

## Assets
- `assets/francisca-abunaw.png`: used in the home hero (duotone) and on the People card and bio (greyscale).
- `assets/kelly-agbor.jpeg`: landscape studio portrait.
- `assets/donaldson-agbor.jpeg`: full-length seated portrait, so it needs a tight crop.
- Fonts: Spectral and Archivo from Google Fonts.
- No icons or illustrations are used.

## Content still needed from the firm
- Street addresses and phone numbers for Douala and Buea.
- A general enquiries email.
- Article dates, authors and final copy.
- Current job openings and a recruitment email.
- The incorporation timetable.
- The full French translation.
- Confirmation of Kelly's email domain.

## Files
- `Abunaw and Associates (reference).html`: self-contained reference to open in a browser.
- `source/Abunaw and Associates.dc.html` + `source/support.js`: editable source with all copy and styles inline.
- `assets/*`: photographs.
