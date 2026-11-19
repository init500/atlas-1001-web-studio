export const brand = 'Atlas 1001 Web Studio';
export const base = '/atlas-1001-web-studio/';
export const origin = 'https://init500.github.io';

export const offer = { total: 600, start: 200, currency: 'GEL' } as const;
export const formatPrice = (amount: number, locale: string) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency: offer.currency, maximumFractionDigits: 0 }).format(amount);

type ContactChannel = { label: string; href: `mailto:${string}` | `tel:${string}` | `https://${string}` };
// Add only confirmed studio contact channels.
export const contacts: readonly ContactChannel[] = [];

export function home(locale: string) {
  return locale === 'ka' ? base : base + locale + '/';
}
