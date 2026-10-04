import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { DOCUMENT } from '@angular/core';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render Turkish content at /', async () => {
    TestBed.createComponent(App);
    const harness = await RouterTestingHarness.create('/');
    const el = harness.routeNativeElement as HTMLElement;
    expect(el.querySelectorAll('h1').length).toBe(1);
    expect(el.querySelector('h1')?.textContent).toContain('Ali Fuat Çalık');
    expect(el.querySelector('#work h2')?.textContent).toContain('Seçilmiş işler');
    expect(TestBed.inject(DOCUMENT).documentElement.lang).toBe('tr');
  });

  it('should render English content at /en', async () => {
    TestBed.createComponent(App);
    const harness = await RouterTestingHarness.create('/en');
    const el = harness.routeNativeElement as HTMLElement;
    expect(el.querySelector('#work h2')?.textContent).toContain('Selected work');
    expect(el.querySelector('.header__lang')?.getAttribute('href')).toBe('/');
    const doc = TestBed.inject(DOCUMENT);
    expect(doc.documentElement.lang).toBe('en');
    expect(doc.head.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://alifuatcalik.com/en/',
    );
    expect(doc.head.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe(
      'https://alifuatcalik.com/og-en.png',
    );
  });
});
