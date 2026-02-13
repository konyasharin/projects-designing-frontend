import { ComponentProps, FC } from 'react';

import { Popover } from '@/shared/shadcn';

type MenuProps = ComponentProps<typeof Popover>;

export const Menu: FC<MenuProps> = props => {
  return <Popover {...props} />;
};
