import { useTranslations } from 'next-intl';

import { signIn } from '@/modules/auth';

import {
  Button,
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
        <form
          action={async () => {
            'use server';
            await signIn('google');
          }}
        >
          <Button type={'submit'}>
            {t('SIGN_IN_WITH', { serviceName: 'Google' })}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
