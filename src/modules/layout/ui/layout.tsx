import { FC, ReactNode } from 'react';
import Link from 'next/link';

import { DynamicLayout } from './dynamic-layout';
import { Header } from './header';
import { HeaderAuth } from './header-auth';

import { APP_PATHS } from '@/shared/constants';
import { Container, Logo } from '@/shared/ui';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = async props => {
  return (
    <>
      <Header>
        <Header.Group>
          <Link href={APP_PATHS.MAIN}>
            <Logo />
          </Link>
        </Header.Group>
        <Header.Group>
          <HeaderAuth />
        </Header.Group>
      </Header>
      <Container className={'pt-32'}>{props.children}</Container>
      <DynamicLayout />
    </>
  );
};
