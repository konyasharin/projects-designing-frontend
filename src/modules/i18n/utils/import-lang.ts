import { Locale } from '../types';

export const importLang = async (lang: Locale) => {
  return (await import(`@/static/locales/${lang}.json`)).default;
};
