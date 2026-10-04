import { ChangeDetectionStrategy, Component, DOCUMENT, effect, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './core/language';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: '<router-outlet />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly language = inject(LanguageService);
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    // Router'ın fragment kaydırması CSS scroll-padding'i dikkate almaz; sticky header kadar boşluk bırak.
    inject(ViewportScroller).setOffset(() => [
      0,
      this.document.querySelector('app-site-header')?.getBoundingClientRect().height ?? 0,
    ]);

    // Prerender sırasında her dil sayfasının <html lang>, başlık, description, canonical ve
    // Open Graph etiketleri o dile göre yazılır. Dilden bağımsız etiketler index.html'de.
    effect(() => {
      const { meta } = this.language.content();
      const current = this.language.current();
      const alternate = this.language.alternate();

      this.document.documentElement.lang = current.code;
      this.title.setTitle(meta.title);
      this.setCanonical(current.url);

      const tags: Record<string, string> = {
        'og:title': meta.title,
        'og:description': meta.description,
        'og:url': current.url,
        'og:image': current.ogImage,
        'og:image:alt': meta.imageAlt,
        'og:locale': current.ogLocale,
        'og:locale:alternate': alternate.ogLocale,
      };
      this.meta.updateTag({ name: 'description', content: meta.description });
      for (const [property, content] of Object.entries(tags)) {
        this.meta.updateTag({ property, content });
      }
    });
  }

  private setCanonical(href: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = href;
  }
}
