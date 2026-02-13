import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const AUTH_OPTIONS: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        console.log(account);
        token.googleAccessToken = account.access_token;
        token.googleIdToken = account.id_token;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
};
