import { getRequestConfig } from 'next-intl/server';

import { Locale } from '../types';

import { importLang } from './import-lang';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale: Locale = 'ru';

  return {
    locale,
    messages: await importLang(locale),
    timeZone: 'Europe/Vienna',
  };
});
