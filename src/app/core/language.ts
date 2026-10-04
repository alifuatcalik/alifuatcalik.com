import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { CONTENT } from '../content/content';

export type Lang = keyof typeof CONTENT;

export interface LangOption {
  code: Lang;
  /** Router yolu: TR kökte, EN `/en` altında */
  path: string;
}

export const LANGS: Record<Lang, LangOption> = {
  tr: { code: 'tr', path: '/' },
  en: { code: 'en', path: '/en' },
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
