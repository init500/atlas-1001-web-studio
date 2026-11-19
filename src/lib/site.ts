import type { Locale } from './copy';

export const brand = 'Atlas 1001 Web Studio';
export const base = '/atlas-1001-web-studio/';
export const origin = 'https://init500.github.io';
export const defaultLocale = 'en';

export const offer = { total: 600, start: 200, currency: 'GEL' } as const;
// GEL per unit, from the National Bank of Georgia's official rates for exchangeDate.
const gelPerUnit = { USD: 2.5927, TRY: 0.0514, GEL: 1 } as const;
export const exchangeDate = '2026-11-19';
export const exchangeSource = 'https://nbg.gov.ge/en/monetary-policy/currency';
export type Currency = keyof typeof gelPerUnit;
export const currencies = Object.keys(gelPerUnit) as Currency[];
export const defaultCurrencies = { en: 'USD', tr: 'TRY', ka: 'GEL' } satisfies Record<Locale, Currency>;

export function packagePrice(locale: Locale, currency: Currency) {
  const rate = gelPerUnit[currency];
  const total = Math.round(offer.total / rate);
  const start = Math.round(offer.start / rate);
  const format = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'code',
    maximumFractionDigits: 0,
  });
  return { total: format.format(total), start: format.format(start), completion: format.format(total - start) };
}

type ContactChannel = { label: string; href: `mailto:${string}` | `tel:${string}` | `https://${string}` };
// Add only confirmed studio contact channels.
export const contacts: readonly ContactChannel[] = [];

export function home(locale: Locale) {
  return locale === defaultLocale ? base : base + locale + '/';
}
