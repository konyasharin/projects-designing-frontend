import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

interface MenuItemProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const MenuItem: FC<MenuItemProps> = props => {
  return (
    <div
      className={clsx(
        'flex gap-3 items-center cursor-pointer px-3 py-2.5 select-none hover:bg-accent',
        props.className,
      )}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
