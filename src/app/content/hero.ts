import { Localized } from '../core/language';

export interface BuildRow {
  label: Localized;
  value: string;
  /** Çubuk doluluğu, 0–100 */
  percent: number;
  variant: 'before' | 'after';
}

export interface BuildWin {
  value: string;
  label: Localized;
}

export const HERO = {
  eyebrow: { tr: 'Yeni projelere açığım', en: 'Open to new projects' } satisfies Localized,
  role: 'Frontend Developer',
  roleStack: 'Angular',
  lede: {
    tr: 'Angular üzerine 4 yıldır kurumsal ürünler geliştiriyorum. Büyük kod tabanlarını modernize etmeyi, yavaş uygulamaları hızlandırmayı ve ekiplerin üzerine güvenle geliştirebileceği temeller kurmayı seviyorum.',
    en: "I've spent 4 years building enterprise products with Angular. I like modernizing large codebases, making slow apps fast, and laying foundations teams can confidently build on.",
  } satisfies Localized,
  ctaPrimary: { tr: 'İletişime geç', en: 'Get in touch' } satisfies Localized,
  ctaSecondary: { tr: 'İşlerime bak', en: 'See my work' } satisfies Localized,
  meta: [
    { tr: 'Isparta, Türkiye', en: 'Isparta, Türkiye' },
    { tr: 'Remote / Hibrit', en: 'Remote / Hybrid' },
    { tr: 'Angular 21 · Signals', en: 'Angular 21 · Signals' },
  ] satisfies Localized[],
};

export const BUILD_REPORT = {
  ariaLabel: 'Noctua main bundle: 9.4 MB → 2.04 MB',
  title: 'noctua — build report',
  command: 'ng build',
  flag: '--stats-json',
  chunk: 'Initial chunk · main',
  rows: [
    { label: { tr: 'önce', en: 'before' }, value: '9.40 MB', percent: 100, variant: 'before' },
    { label: { tr: 'sonra', en: 'after' }, value: '2.04 MB', percent: 21.7, variant: 'after' },
  ] satisfies BuildRow[],
  wins: [
    { value: '−78%', label: { tr: 'main bundle', en: 'main bundle' } },
    { value: '3.5 MB → 772 KB', label: { tr: 'eager JS', en: 'eager JS' } },
    { value: '3.3 s → 1.7 s', label: { tr: 'açılış', en: 'load' } },
  ] satisfies BuildWin[],
};
