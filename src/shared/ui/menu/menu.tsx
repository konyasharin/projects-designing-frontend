import { ComponentProps, FC } from 'react';

import { MenuDropdown } from './menu-dropdown';
import { MenuItem } from './menu-item';
import { MenuTarget } from './menu-target';

import { Popover } from '@/shared/shadcn';

type MenuProps = ComponentProps<typeof Popover>;

type Menu = FC<MenuProps> & {
  Item: FC<ComponentProps<typeof MenuItem>>;
  Target: FC<ComponentProps<typeof MenuTarget>>;
  Dropdown: FC<ComponentProps<typeof MenuDropdown>>;
};

const Menu: Menu = props => {
  return <Popover {...props} />;
};

Menu.Item = MenuItem;
Menu.Target = MenuTarget;
Menu.Dropdown = MenuDropdown;

export { Menu };
