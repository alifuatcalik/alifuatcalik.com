import { Localized } from '../core/language';

export interface Skill {
  title: Localized;
  body: Localized;
}

export const SKILLS_HEAD = {
  title: { tr: 'Yetkinlikler', en: 'Skills' } satisfies Localized,
};

export const SKILLS: Skill[] = [
  {
    title: { tr: 'Angular', en: 'Angular' },
    body: {
      tr: 'Angular 21, Signals, standalone, typed reactive forms, RxJS, lazy loading, guards, interceptors, change detection, CDK',
      en: 'Angular 21, Signals, standalone, typed reactive forms, RxJS, lazy loading, guards, interceptors, change detection, CDK',
    },
  },
  {
    title: { tr: 'UI', en: 'UI' },
    body: {
      tr: 'Design system, component library, light/dark tema, CSS custom properties, responsive UI, ApexCharts, Konva',
      en: 'Design systems, component libraries, light/dark theming, CSS custom properties, responsive UI, ApexCharts, Konva',
    },
  },
  {
    title: { tr: 'Veri ve entegrasyon', en: 'Data & integration' },
    body: {
      tr: 'REST, OpenAPI, SDK generation, JWT & refresh token, session management, i18n, PDF / Excel export',
      en: 'REST, OpenAPI, SDK generation, JWT & refresh token, session management, i18n, PDF / Excel export',
    },
  },
  {
    title: { tr: 'Test ve kalite', en: 'Testing & quality' },
    body: {
      tr: 'Karma, Jasmine, coverage, test planlama, regresyon baseline',
      en: 'Karma, Jasmine, coverage, test planning, regression baselines',
    },
  },
  {
    title: { tr: 'Süreç ve araçlar', en: 'Process & tooling' },
    body: {
      tr: 'Git, monorepo, Jenkins, GitHub Actions, performans profilleme, mimari karar kayıtları, VitePress, Compodoc',
      en: 'Git, monorepo, Jenkins, GitHub Actions, performance profiling, ADRs, VitePress, Compodoc',
    },
  },
  {
    title: { tr: 'Diller', en: 'Languages' },
    body: {
      tr: 'TypeScript, JavaScript, HTML, SCSS · ayrıca Next.js / React',
      en: 'TypeScript, JavaScript, HTML, SCSS · also Next.js / React',
    },
  },
];
