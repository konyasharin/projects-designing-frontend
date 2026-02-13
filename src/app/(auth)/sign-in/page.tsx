'use client';

import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { APP_PATHS } from '@/shared/constants';
import {
  Button,
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/shadcn';

export default function SignIn() {
  const t = useTranslations('AUTH');
  // const session = useSession();

  return (
    <Card className={'w-full'}>
      <CardHeader>
        <CardTitle>{t('SIGN_IN')}</CardTitle>
        <CardDescription>
          {t('SIGN_IN_WITH', { serviceName: 'Google' })}
        </CardDescription>
        <CardAction>
          <Link href={APP_PATHS.SIGN_UP}>
            <Button variant="link">{t('SIGN_UP')}</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col gap-2">
        <Button onClick={() => signIn('google')}>
          {t('SIGN_IN_WITH', { serviceName: 'Google' })}
        </Button>
      </CardFooter>
    </Card>
  );
}
