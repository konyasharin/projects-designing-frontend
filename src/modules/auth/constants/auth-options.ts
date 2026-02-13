import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { APP_PATHS } from '@/modules/routing';

import { prisma } from '@/shared/prisma/server';

export const AUTH_OPTIONS: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: APP_PATHS.SIGN_IN,
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXT_AUTH_SECRET,
};
