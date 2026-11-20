# Atlas 1001 Web Studio

Official English, Georgian and Turkish marketing website for Atlas 1001 Web Studio. The site presents services, the design process, an original responsive design sample and the starter package. The homepage defaults to English, with explicit English, Georgian and Turkish URLs at `en/`, `ka/` and `tr/`.

## Development

Use Node 24 and run `npm ci`, `npm run check` and `npm run build`. Run `npm run dev` for local development. GitHub Pages deploys the static `dist` directory from the default branch via GitHub Actions.

## Editing the site

- Edit localized marketing and promo copy in `src/lib/copy.ts`. Add a matching dictionary with the same keys and add its code to the locale list to enable another language.
- Edit the offer in `src/lib/site.ts`. The finishing payment is calculated from the total and starting payment. The site starts with USD in English, TRY in Turkish and GEL in Georgian. Update the dated GEL-per-unit values in the same file from the [National Bank of Georgia](https://nbg.gov.ge/en/monetary-policy/currency) to refresh the approximate USD and TRY display.
- Add public client work only with documented permission. The responsive specimen is original studio artwork.
- Keep prose and labels free of em dashes, en dashes and short line ornaments.

## Studio contact settings

Configure confirmed public channels in `src/config/contact.json`. Keep each unavailable field set to `null`.

- `email` accepts the studio inbox address.
- `phone` accepts the studio's international telephone number with a leading plus and country code.
- `whatsapp` accepts the international number with a leading plus only after the owner confirms that this number is active on WhatsApp for the studio. It is separate from `phone`.

Supply at least one confirmed channel before publishing contact actions. Rebuild after editing the file. With every value set to `null`, visitors see the existing contact notice.

## Shared promotion

The Georgian card remains at `/atlas-1001-web-studio/embed/`. The explicit locales are `embed/en/`, `embed/ka/` and `embed/tr/`. These are independent documents with inline styles and no outside dependencies. They send the existing readiness message and report the card height to the immediate parent. Keep the compact presentation for hosts with a fixed frame height. The dark card artwork uses CSS gradients and system fonts. Linked factory 404 pages pick up copy, style and destination updates as soon as Pages serves the changed card.
