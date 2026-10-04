import { Localized } from '../core/language';

export interface CaseStat {
  value: string;
  label: Localized;
}

export interface CaseStudy {
  org: Localized;
  chip?: string;
  title: Localized;
  body: Localized;
  stack: string[];
  /** Tam genişlik kart + istatistik ızgarası */
  stats?: CaseStat[];
}

export const WORK_HEAD = {
  title: { tr: 'Seçilmiş işler', en: 'Selected work' } satisfies Localized,
  note: {
    tr: 'Ölçülebilir sonuç veren işler. Kurumsal projelerde ürün detayları genel tutuldu.',
    en: 'Work with measurable outcomes. Product details of enterprise projects are kept general.',
  } satisfies Localized,
};

const NOCTUA: Localized = { tr: 'Birtech · Noctua', en: 'Birtech · Noctua' };

export const CASES: CaseStudy[] = [
  {
    org: NOCTUA,
    chip: '2025 —',
    title: {
      tr: 'Kurumsal izleme platformunu hızlandırmak ve modernize etmek',
      en: 'Speeding up and modernizing an enterprise monitoring platform',
    },
    body: {
      tr: "Veri merkezleri için dört dile lokalize, büyük ölçekli bir Angular SPA. Sekiz modülü route bazlı lazy loading'e taşıdım, ağır script'leri ilk kullanıma erteledim; 50'den fazla sayfayı Signals, typed reactive form ve OpenAPI'den ürettiğim SDK desenine yeniden yazdım.",
      en: 'A large Angular SPA for data-center monitoring, localized in four languages. I moved eight modules to route-level lazy loading, deferred heavy scripts to first use, and rewrote 50+ pages onto Signals, typed reactive forms and an SDK I generated from the OpenAPI spec.',
    },
    stack: ['Angular 21', 'Signals', 'OpenAPI SDK', 'Karma · Jasmine', 'VitePress'],
    stats: [
      { value: '−78%', label: { tr: 'main bundle', en: 'main bundle' } },
      { value: '1.7 s', label: { tr: 'açılış (önce 3.3 s)', en: 'load (was 3.3 s)' } },
      { value: '700+', label: { tr: 'issue · 35 sürüm', en: 'issues · 35 releases' } },
      { value: '150+', label: { tr: 'test planı', en: 'test plans' } },
    ],
  },
  {
    org: NOCTUA,
    title: {
      tr: 'Oturum yaşam döngüsü ve tek state katmanı',
      en: 'Session lifecycle and a single state layer',
    },
    body: {
      tr: "Altı servis üzerinde auto-login, uyarılı idle timeout, sessiz token yenileme, sekmeler arası senkronizasyon ve backend kesintileri için circuit breaker. Üç ayrı yerde tutulan state'i tek katmana taşıyıp tam sayfa reload kalıbını kaldırdım.",
      en: 'Auto-login, idle timeout with warning, silent token refresh, cross-tab sync and a circuit breaker for backend outages across six services. I moved state kept in three places into one layer and removed full-page reloads.',
    },
    stack: ['JWT', 'RxJS', 'Signals'],
  },
  {
    org: NOCTUA,
    title: { tr: 'Enerji yönetimi ve KPI modülleri', en: 'Energy management and KPI modules' },
    body: {
      tr: "Enerji node'ları, maliyet kayıtları, PDU outlet bazlı tüketim, yedi grafik ve tablo tipinden oluşan raporlama seti ve KPI eşik yönetimini arayüz tarafında uçtan uca kurguladım.",
      en: 'Designed end to end on the frontend: energy nodes, cost records, per-outlet PDU consumption, a reporting set of seven chart and table types, and KPI threshold management.',
    },
    stack: ['ApexCharts', 'Data grid', 'CDK Drag & Drop'],
  },
  {
    org: { tr: 'Açık kaynak · geliştiriliyor', en: 'Open source · in progress' },
    chip: 'Angular',
    title: { tr: 'Angular component library', en: 'Angular component library' },
    body: {
      tr: "Signals tabanlı, 50'den fazla component; kendi renk paleti, light/dark tema sistemi, WCAG kontrast kontrolü ve ayrı bir demo uygulaması. Yakında public olacak.",
      en: '50+ Signals-based components with their own palette, light/dark theming, WCAG contrast checks and a separate demo app. Going public soon.',
    },
    stack: ['Angular 21', 'Signals', 'Design tokens'],
  },
  {
    org: { tr: 'Freelance · Ervam Su İnşaat', en: 'Freelance · Ervam Su İnşaat' },
    title: {
      tr: 'Kurumsal web sitesi ve randevu sistemi',
      en: 'Company website and appointment system',
    },
    body: {
      tr: "Isparta'da hizmet veren bir inşaat firması için iki dilli, mobil uyumlu PWA. Talep formları WhatsApp mesajına dönüşüyor; randevu talepleri yönetim panelinden onaylanıyor.",
      en: 'A bilingual, mobile-first PWA for a construction company in Isparta. Request forms turn into WhatsApp messages; appointment requests are approved from an admin panel.',
    },
    stack: ['Next.js', 'React', 'Tailwind', 'PWA'],
  },
];
