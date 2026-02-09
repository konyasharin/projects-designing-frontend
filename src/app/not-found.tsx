import { useTranslations } from 'next-intl';

import { Typography } from '@/shared/ui';

export default function NotFound() {
  const t = useTranslations('NOT_FOUND');

  return (
    <div>
      <Typography className={'text-center'} tag={'h2'} variant={'h4'}>
        {t('TITLE')}
      </Typography>
    </div>
  );
}
