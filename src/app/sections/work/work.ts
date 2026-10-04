import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language';
import { CASES, WORK_HEAD } from '../../content/work';

@Component({
  selector: 'app-work',
  templateUrl: './work.html',
  styleUrl: './work.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', id: 'work' },
})
export class Work {
  protected readonly lang = inject(LanguageService).lang;
  protected readonly head = WORK_HEAD;
  protected readonly cases = CASES;
}
