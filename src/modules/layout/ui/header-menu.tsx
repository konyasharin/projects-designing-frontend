'use client';

import { FC } from 'react';
import { CiSettings } from 'react-icons/ci';
import { IoExitOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { APP_PATHS } from '@/shared/constants';
import { Avatar } from '@/shared/shadcn';
import {
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Typography,
} from '@/shared/ui';

export const HeaderMenu: FC = () => {
  const router = useRouter();
  const t = useTranslations('HEADER');

  return (
    <Menu>
      <MenuTarget>
        <Avatar />
      </MenuTarget>
      <MenuDropdown>
        <MenuItem onClick={() => router.push(APP_PATHS.SETTINGS)}>
          <Typography>{t('SETTING')}</Typography>
          <CiSettings size={24} />
        </MenuItem>
        <MenuItem className={'hover:text-red-500 transition'}>
          <Typography>{t('EXIT')}</Typography>
          <IoExitOutline size={24} />
        </MenuItem>
      </MenuDropdown>
    </Menu>
  );
};
