import { Locale } from './types';
import { formats } from './utils';

import messages from '@/static/locales/ru.json';

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale;
    Messages: typeof messages;
    Formats: typeof formats;
  }
}
