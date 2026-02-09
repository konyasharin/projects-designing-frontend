import { FC } from 'react';

import { Toaster } from '@/shared/shadcn';

export const DynamicLayout: FC = () => {
  return (
    <>
      <Toaster richColors position={'bottom-right'} />
    </>
  );
};
