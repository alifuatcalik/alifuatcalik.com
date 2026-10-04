import { Injectable, signal } from '@angular/core';

export type Lang = 'tr' | 'en';

/** Her dil için bir metin. Dile bağlı olmayan metinler düz `string` olarak tutulur. */
export type Localized = Record<Lang, string>;

/** Aktif dil. Dil değiştirme (URL / düğme) i18n adımında eklenecek. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('tr');
}
