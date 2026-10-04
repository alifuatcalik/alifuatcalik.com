import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', id: 'contact' },
})
export class Contact {
  protected readonly c = inject(LanguageService).content;
}
