import { ComponentProps, FC } from 'react';
import { clsx } from 'clsx';

import { PopoverContent } from '@/shared/shadcn';

type MenuDropdownProps = ComponentProps<typeof PopoverContent>;

export const MenuDropdown: FC<MenuDropdownProps> = ({
  className,
  ...attributes
}) => {
  return (
    <PopoverContent
      className={clsx('px-3 py-4 border-accent', className)}
      align={'start'}
      sideOffset={15}
      {...attributes}
    />
  );
};
