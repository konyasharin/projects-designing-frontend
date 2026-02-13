import { FC } from 'react';
import { clsx } from 'clsx';

import { auth } from '@/modules/auth';

import { Avatar as ShadcnAvatar, AvatarFallback } from '@/shared/shadcn';

interface AvatarProps {
  className?: string;
}

export const Avatar: FC<AvatarProps> = async props => {
  const session = await auth();

  if (!session) return;

  return (
    <ShadcnAvatar>
      <AvatarFallback
        className={clsx(
          'h-8 w-8 bg-gray-50 text-purple-700 select-none',
          props.className,
        )}
      >
        {session.user?.email?.slice(0, 2).toUpperCase()}
      </AvatarFallback>
    </ShadcnAvatar>
  );
};
