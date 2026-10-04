import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language';
import { BUILD_REPORT, HERO } from '../../content/hero';
import { SITE } from '../../content/site';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly lang = inject(LanguageService).lang;
  protected readonly name = SITE.name;
  protected readonly hero = HERO;
  protected readonly build = BUILD_REPORT;
}
