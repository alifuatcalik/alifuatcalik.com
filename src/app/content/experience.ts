import { Localized } from '../core/language';

export interface Job {
  when: Localized;
  title: Localized;
  where: Localized;
  points: Localized[];
}

export const EXPERIENCE_HEAD = {
  title: { tr: 'Deneyim', en: 'Experience' } satisfies Localized,
  cta: { tr: 'CV iste', en: 'Request CV' } satisfies Localized,
};

export const JOBS: Job[] = [
  {
    when: { tr: 'Oca 2025 — Halen', en: 'Jan 2025 — Present' },
    title: { tr: 'Birtech Teknoloji', en: 'Birtech Teknoloji' },
    where: {
      tr: 'Frontend Developer · Eskişehir (Remote)',
      en: 'Frontend Developer · Eskişehir (Remote)',
    },
    points: [
      {
        tr: "Main bundle'ı %78 küçülttüm; açılış süresini 3,3 sn'den 1,7 sn'ye indirdim.",
        en: 'Cut the main bundle by 78%; brought load time from 3.3 s to 1.7 s.',
      },
      {
        tr: 'OpenAPI şemasından typed TypeScript SDK üreten bir Node generator yazdım.',
        en: 'Wrote a Node generator that produces a typed TypeScript SDK from the OpenAPI spec.',
      },
      {
        tr: 'Unit test altyapısını, mimari karar kayıtlarını ve dokümantasyon sitesini sıfırdan kurdum.',
        en: 'Set up unit testing, architecture decision records and the docs site from scratch.',
      },
      {
        tr: "72 tabloyu jQuery DataTables'tan kurum içi data grid'e taşıdım; iki legacy bağımlılığı kaldırdım.",
        en: 'Migrated 72 tables from jQuery DataTables to an in-house data grid; removed two legacy dependencies.',
      },
    ],
  },
  {
    when: { tr: 'Ara 2022 — Ara 2024', en: 'Dec 2022 — Dec 2024' },
    title: { tr: 'Rapider AI', en: 'Rapider AI' },
    where: { tr: 'Frontend Developer · Remote', en: 'Frontend Developer · Remote' },
    points: [
      {
        tr: 'Low-code yazılım platformunda responsive bileşenler ve UX iyileştirmeleri.',
        en: 'Responsive components and UX improvements on a low-code software platform.',
      },
      {
        tr: 'NgRx ile state management; modüler, çok projeli yapıya uçtan uca yeni bir admin modülü.',
        en: 'State management with NgRx; built a new admin module end to end in a modular multi-project setup.',
      },
    ],
  },
  {
    when: { tr: 'Ağu — Eyl 2022', en: 'Aug — Sep 2022' },
    title: { tr: 'Mergentech', en: 'Mergentech' },
    where: {
      tr: 'Frontend Developer (Stajyer) · Eskişehir',
      en: 'Frontend Developer (Intern) · Eskişehir',
    },
    points: [
      {
        tr: 'Angular ile form oluşturma uygulaması ve sürükle-bırak form editörü.',
        en: 'An Angular form builder and drag-and-drop form editor.',
      },
    ],
  },
  {
    when: { tr: '2015 — 2022', en: '2015 — 2022' },
    title: { tr: 'Bilgisayar Mühendisliği, Lisans', en: 'B.Sc. Computer Engineering' },
    where: {
      tr: 'Eskişehir Osmangazi Üniversitesi',
      en: 'Eskişehir Osmangazi University',
    },
    points: [],
  },
];
