import { FC } from 'react';

import { Avatar } from '@/modules/auth';

import { HeaderMenuItems } from './header-menu-items';

import { Menu, MenuDropdown, MenuTarget } from '@/shared/ui';

export const HeaderMenu: FC = () => {
  return (
    <Menu>
      <MenuTarget>
        <Avatar />
      </MenuTarget>
      <MenuDropdown align={'end'} alignOffset={-15} sideOffset={20}>
        <HeaderMenuItems />
      </MenuDropdown>
    </Menu>
  );
};
