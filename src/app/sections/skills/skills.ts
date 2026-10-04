import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language';
import { SKILLS, SKILLS_HEAD } from '../../content/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', id: 'skills' },
})
export class Skills {
  protected readonly lang = inject(LanguageService).lang;
  protected readonly head = SKILLS_HEAD;
  protected readonly skills = SKILLS;
}
