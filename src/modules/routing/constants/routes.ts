import { APP_PATHS } from '@/modules/routing';

import { ROUTE_ACCESS } from '../constants';
import { Routes } from '../types';

export const ROUTES: Routes = {
  [APP_PATHS.MAIN]: {
    access: ROUTE_ACCESS.PUBLIC,
  },
  [APP_PATHS.SIGN_IN]: {
    access: ROUTE_ACCESS.ONLY_PUBLIC,
  },
  [APP_PATHS.SETTINGS]: {
    access: ROUTE_ACCESS.PRIVATE,
  },
};
