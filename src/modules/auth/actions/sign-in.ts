'use server';

import { signIn as nextSignIn } from '../utils';

export const signIn = async (...params: Parameters<typeof nextSignIn>) => {
  await nextSignIn(...params);
};
