import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { LanguageService } from '../../core/language';

@Component({
  selector: 'app-services',
  imports: [DecimalPipe],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', id: 'services' },
})
export class Services {
  protected readonly c = inject(LanguageService).content;
}
