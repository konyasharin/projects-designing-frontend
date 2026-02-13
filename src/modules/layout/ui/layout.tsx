import { FC, ReactNode } from 'react';
import Link from 'next/link';

import { APP_PATHS } from '@/modules/routing';

import { DynamicLayout } from './dynamic-layout';
import { Header } from './header';
import { HeaderAuth } from './header-auth';
import { HeaderGroup } from './header-group';

import { Container, Logo } from '@/shared/ui';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = props => {
  return (
    <>
      <Header>
        <HeaderGroup>
          <Link href={APP_PATHS.MAIN}>
            <Logo />
          </Link>
        </HeaderGroup>
        <HeaderGroup>
          <HeaderAuth />
        </HeaderGroup>
      </Header>
      <Container className={'pt-32'}>{props.children}</Container>
      <DynamicLayout />
    </>
  );
};
