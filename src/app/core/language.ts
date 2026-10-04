import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { CONTENT } from '../content/content';

export type Lang = keyof typeof CONTENT;

export const SITE_URL = 'https://alifuatcalik.com';

export interface LangOption {
  code: Lang;
  /** Router yolu: TR kökte, EN `/en` altında */
  path: string;
  /** Canonical adres (Cloudflare `/en` → `/en/` yönlendirdiği için sonda `/`) */
  url: string;
  ogLocale: string;
  ogImage: string;
}

export const LANGS: Record<Lang, LangOption> = {
  tr: { code: 'tr', path: '/', url: `${SITE_URL}/`, ogLocale: 'tr_TR', ogImage: `${SITE_URL}/og-tr.png` },
  en: { code: 'en', path: '/en', url: `${SITE_URL}/en/`, ogLocale: 'en_US', ogImage: `${SITE_URL}/og-en.png` },
};

const langFromUrl = (url: string): Lang => (/^\/en(?:[/?#]|$)/.test(url) ? 'en' : 'tr');

/** Aktif dil adresten okunur; içerik ona göre seçilir. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly router = inject(Router);

  readonly lang = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => langFromUrl(event.urlAfterRedirects)),
    ),
    { initialValue: langFromUrl(this.router.url) },
  );

  readonly current = computed(() => LANGS[this.lang()]);
  readonly alternate = computed(() => LANGS[this.lang() === 'tr' ? 'en' : 'tr']);
  readonly content = computed(() => CONTENT[this.lang()]);
}
