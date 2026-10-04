import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language';
import { EXPERIENCE_HEAD, JOBS } from '../../content/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', id: 'experience' },
})
export class Experience {
  protected readonly lang = inject(LanguageService).lang;
  protected readonly head = EXPERIENCE_HEAD;
  protected readonly jobs = JOBS;
}
