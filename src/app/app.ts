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

    // Prerender sırasında her dil sayfasının <html lang>, <title> ve description'ı doğru yazılır.
    effect(() => {
      const { meta } = this.language.content();
      this.document.documentElement.lang = this.language.lang();
      this.title.setTitle(meta.title);
      this.meta.updateTag({ name: 'description', content: meta.description });
    });
  }
}
