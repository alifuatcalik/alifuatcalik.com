import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { LanguageService } from '../../core/language';
import { SERVICES, SERVICES_HEAD } from '../../content/services';

@Component({
  selector: 'app-services',
  imports: [DecimalPipe],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', id: 'services' },
})
export class Services {
  protected readonly lang = inject(LanguageService).lang;
  protected readonly head = SERVICES_HEAD;
  protected readonly services = SERVICES;
}
