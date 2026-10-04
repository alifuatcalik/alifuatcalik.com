import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiteHeader } from '../sections/site-header/site-header';
import { Hero } from '../sections/hero/hero';
import { Work } from '../sections/work/work';
import { Experience } from '../sections/experience/experience';
import { Skills } from '../sections/skills/skills';
import { Services } from '../sections/services/services';
import { Contact } from '../sections/contact/contact';
import { SiteFooter } from '../sections/site-footer/site-footer';

/** Tek sayfa; TR (`/`) ve EN (`/en`) rotaları aynı component'i kullanır. */
@Component({
  selector: 'app-home',
  imports: [SiteHeader, Hero, Work, Experience, Skills, Services, Contact, SiteFooter],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
