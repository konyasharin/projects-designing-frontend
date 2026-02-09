'use client';

import { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Locale, NextIntlClientProvider, useMessages } from 'next-intl';

interface ProvidersProps {
  i18n: {
    locale: Locale;
    messages: ReturnType<typeof useMessages>;
  };
  children?: ReactNode;
}

export const Providers: FC<ProvidersProps> = props => {
  return (
    <NextIntlClientProvider timeZone={'Europe/Vienna'} {...props.i18n}>
      <SessionProvider>{props.children}</SessionProvider>
    </NextIntlClientProvider>
  );
};
