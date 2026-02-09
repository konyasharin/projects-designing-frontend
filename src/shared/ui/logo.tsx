import { FC } from 'react';
import { TbMessageLanguage } from 'react-icons/tb';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';

import { Typography } from './typography';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = props => {
  const t = useTranslations();

  return (
    <div className={clsx('flex items-center gap-1', props.className)}>
      <TbMessageLanguage size={36} />
      <Typography tag={'h1'} variant={'h2'} className={'capitalize text-2xl'}>
        {t('COMMON.TITLE')}
      </Typography>
    </div>
  );
};
