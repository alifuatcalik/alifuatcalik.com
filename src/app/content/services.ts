import { Localized } from '../core/language';

export interface Service {
  title: Localized;
  body: Localized;
}

export const SERVICES_HEAD = {
  title: { tr: 'Neler yapabilirim', en: 'What I can do for you' } satisfies Localized,
  note: {
    tr: 'Freelance ve proje bazlı çalışmalar için.',
    en: 'For freelance and project-based work.',
  } satisfies Localized,
};

export const SERVICES: Service[] = [
  {
    title: { tr: 'Kurumsal web sitesi ve PWA', en: 'Company websites & PWAs' },
    body: {
      tr: 'Mobil uyumlu, hızlı, iki dilli siteler; form, randevu ve yönetim paneli gibi işletmeye özel akışlar.',
      en: 'Fast, mobile-first, bilingual sites with business-specific flows like forms, bookings and admin panels.',
    },
  },
  {
    title: { tr: 'Angular uygulama geliştirme', en: 'Angular application development' },
    body: {
      tr: 'Kurumsal panel ve iş uygulamaları: uçtan uca modül geliştirme, API entegrasyonu, oturum ve yetki yönetimi.',
      en: 'Enterprise dashboards and business apps: end-to-end modules, API integration, session and access management.',
    },
  },
  {
    title: { tr: 'Performans ve modernizasyon', en: 'Performance & modernization' },
    body: {
      tr: 'Bundle analizi, lazy loading, Signals ve standalone geçişi, legacy bağımlılıkların temizlenmesi.',
      en: 'Bundle analysis, lazy loading, migration to Signals and standalone, removing legacy dependencies.',
    },
  },
  {
    title: {
      tr: 'Design system ve component library',
      en: 'Design systems & component libraries',
    },
    body: {
      tr: 'Token tabanlı tema, light/dark, erişilebilir bileşenler ve dokümantasyon.',
      en: 'Token-based theming, light/dark, accessible components and documentation.',
    },
  },
];
