import { Localized } from '../core/language';

export interface ContactLink {
  label: Localized;
  href: string;
  display: string;
  external: boolean;
}

export const CONTACT = {
  title: { tr: 'Birlikte çalışalım', en: "Let's work together" } satisfies Localized,
  body: {
    tr: 'Bir proje, iş fırsatı ya da sadece Angular üzerine konuşmak için yazabilirsin. Genellikle bir iş günü içinde dönerim.',
    en: 'Reach out about a project, a role, or just to talk Angular. I usually reply within one business day.',
  } satisfies Localized,
  links: [
    {
      label: { tr: 'E-posta', en: 'Email' },
      href: 'mailto:alif.calik@gmail.com',
      display: 'alif.calik@gmail.com',
      external: false,
    },
    {
      label: { tr: 'LinkedIn', en: 'LinkedIn' },
      href: 'https://www.linkedin.com/in/alifuatcalik/',
      display: 'in/alifuatcalik',
      external: true,
    },
    {
      label: { tr: 'GitHub', en: 'GitHub' },
      href: 'https://github.com/alifuatcalik',
      display: 'alifuatcalik',
      external: true,
    },
  ] satisfies ContactLink[],
};
