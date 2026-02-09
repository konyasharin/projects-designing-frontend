import Link from 'next/link';
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

export default function SignUp() {
  const t = useTranslations('AUTH');

  return (
    <Card className={'w-full'}>
      <CardHeader>
        <CardTitle>{t('SIGN_UP_NEW_ACCOUNT')}</CardTitle>
        <CardDescription>
          {t('SIGN_UP_WITH', { serviceName: 'Google' })}
        </CardDescription>
        <CardAction>
          <Link href={APP_PATHS.SIGN_IN}>
            <Button variant="link">{t('SIGN_IN')}</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col gap-2">
        <Button>{t('SIGN_UP_WITH', { serviceName: 'Google' })}</Button>
      </CardFooter>
    </Card>
  );
}
