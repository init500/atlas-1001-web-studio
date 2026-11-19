# Atlas 1001 Web Studio

Official Georgian and English marketing website for Atlas 1001 Web Studio. The site presents services, the design process, an original responsive design sample and the starter package.

## Development

Use Node 24 and run `npm ci`, `npm run check` and `npm run build`. Run `npm run dev` for local development. GitHub Pages deploys the static `dist` directory from the default branch via GitHub Actions.

## Editing the site

- Edit localized marketing and promo copy in `src/lib/copy.ts`. Add a matching dictionary with the same keys to enable another language.
- Edit the offer and confirmed contact links in `src/lib/site.ts`. The finishing payment is calculated from the total and starting payment.
- Add public client work only with documented permission. The responsive specimen is original studio artwork.
- Keep prose and labels free of em dashes, en dashes and short line ornaments.

## Shared promotion

The Georgian card is at `/atlas-1001-web-studio/embed/`. English is at `/atlas-1001-web-studio/embed/en/`. Both are independent documents with inline styles and no outside dependencies. They send a fixed readiness message to the immediate parent. Preserve that message and the compact card size when editing the embed. Linked factory 404 pages pick up copy, style and destination updates as soon as Pages serves the changed card.
