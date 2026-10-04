import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language';

@Component({
  selector: 'app-work',
  templateUrl: './work.html',
  styleUrl: './work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', id: 'work' },
})
export class Work {
  protected readonly c = inject(LanguageService).content;
}
