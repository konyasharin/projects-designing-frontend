'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { signIn } from '@/modules/auth/server';

import { Button } from '@/shared/shadcn';

export const GoogleOauthButton: FC = () => {
  const t = useTranslations('AUTH');

  return (
    <Button onClick={() => signIn('google')}>
      {t('SIGN_IN_WITH', { serviceName: 'Google' })}
    </Button>
  );
};
