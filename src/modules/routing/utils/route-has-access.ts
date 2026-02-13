import { ROUTE_ACCESS, ROUTES } from '../constants';

export const routeHasAccess = (routePath: string, authorized: boolean) => {
  const routeInfo = ROUTES[routePath];
  if (!routeInfo) throw new Error('Route does not exist');

  if (routeInfo.access === ROUTE_ACCESS.PUBLIC) return true;
  if (authorized) return routeInfo.access === ROUTE_ACCESS.PRIVATE;
  return routeInfo.access === ROUTE_ACCESS.ONLY_PUBLIC;
};
