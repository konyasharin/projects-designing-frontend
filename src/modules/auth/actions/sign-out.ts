'use server';

import { signOut as nextSignOut } from '../utils';

export const signOut = async (...params: Parameters<typeof nextSignOut>) => {
  await nextSignOut(...params);
};
