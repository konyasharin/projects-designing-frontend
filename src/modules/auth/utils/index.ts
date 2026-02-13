import NextAuth from 'next-auth';

import { AUTH_OPTIONS } from '../constants';

export const { handlers, signIn, signOut, auth } = NextAuth(AUTH_OPTIONS);
