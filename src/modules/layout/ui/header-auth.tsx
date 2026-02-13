import { FC } from 'react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { auth } from '@/modules/auth';

import { HeaderMenu } from './header-menu';

import { APP_PATHS } from '@/shared/constants';
import { Button } from '@/shared/shadcn';

export const HeaderAuth: FC = async () => {
  const t = await getTranslations();
  const session = await auth();

  if (session?.user) return <HeaderMenu />;

  return (
    <Link href={APP_PATHS.SIGN_IN}>
      <Button>{t('AUTH.SIGN_IN')}</Button>
    </Link>
  );
};
