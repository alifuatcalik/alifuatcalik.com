import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/language';

@Component({
  selector: 'app-experience',
  imports: [RouterLink],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', id: 'experience' },
})
export class Experience {
  protected readonly language = inject(LanguageService);
  protected readonly c = this.language.content;
}
