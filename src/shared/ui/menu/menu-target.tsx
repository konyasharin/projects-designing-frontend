import { ComponentProps, FC } from 'react';
import { clsx } from 'clsx';

import { PopoverTrigger } from '@/shared/shadcn';

type MenuTargetProps = ComponentProps<typeof PopoverTrigger>;

export const MenuTarget: FC<MenuTargetProps> = ({
  className,
  ...attributes
}) => {
  return (
    <PopoverTrigger
      className={clsx('cursor-pointer', className)}
      {...attributes}
    />
  );
};
