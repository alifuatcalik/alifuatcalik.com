import { Localized } from '../core/language';

export interface NavItem {
  href: string;
  label: Localized;
}

export const NAV: NavItem[] = [
  { href: '#work', label: { tr: 'İşler', en: 'Work' } },
  { href: '#experience', label: { tr: 'Deneyim', en: 'Experience' } },
  { href: '#services', label: { tr: 'Hizmetler', en: 'Services' } },
  { href: '#contact', label: { tr: 'İletişim', en: 'Contact' } },
];

export const SITE = {
  name: 'Ali Fuat Çalık',
  mark: 'alifuatcalik',
  domain: 'alifuatcalik.com',
  navLabel: { tr: 'Sayfa içi', en: 'On this page' } satisfies Localized,
};
