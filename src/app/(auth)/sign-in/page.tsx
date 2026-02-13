import { useTranslations } from 'next-intl';

import { GoogleOauthButton } from '@/modules/auth';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/shadcn';

export default function SignIn() {
  const t = useTranslations('AUTH');

  return (
    <Card className={'w-full'}>
      <CardHeader>
        <CardTitle>{t('SIGN_IN')}</CardTitle>
        <CardDescription>
          {t('SIGN_IN_WITH', { serviceName: 'Google' })}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex-col gap-2">
        <GoogleOauthButton />
      </CardFooter>
    </Card>
  );
}
