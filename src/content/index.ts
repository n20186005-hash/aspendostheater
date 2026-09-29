import type { Locale } from '../i18n';
import type { SiteContent } from './types';
import { tr } from './tr';
import { en } from './en';
import { de } from './de';

export const content: Record<Locale, SiteContent> = { tr, en, de };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

export type { SiteContent };
