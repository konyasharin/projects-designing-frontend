import { ROUTE_ACCESS } from '../constants';

export interface Route {
  access: keyof typeof ROUTE_ACCESS;
}
