import tr from './i18n/tr.json';
import en from './i18n/en.json';

/** Site içeriğinin şekli `tr.json`'dan türetilir. */
export type SiteContent = typeof tr;

// İki yönlü atama: `en.json`'da eksik ya da fazla alan varsa build hata verir.
const EN: SiteContent = en;
const TR: typeof en = tr;

export const CONTENT = { tr: TR, en: EN } satisfies Record<string, SiteContent>;
