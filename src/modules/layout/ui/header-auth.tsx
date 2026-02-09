import { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { HeaderMenu } from './header-menu';

import { APP_PATHS } from '@/shared/constants';
import { Button, Skeleton } from '@/shared/shadcn';

export const HeaderAuth: FC = () => {
  const t = useTranslations();
  const TEST_IS_AUTH = false;
  const TEST_IS_AUTH_LOADING = false;

  if (TEST_IS_AUTH_LOADING) return <Skeleton className={'h-8 w-8'} />;

  if (TEST_IS_AUTH) return <HeaderMenu />;

  return (
    <>
      <Link href={APP_PATHS.SIGN_UP}>
        <Button variant={'outline'}>{t('AUTH.SIGN_UP')}</Button>
      </Link>
      <Link href={APP_PATHS.SIGN_IN}>
        <Button>{t('AUTH.SIGN_IN')}</Button>
      </Link>
    </>
  );
};
