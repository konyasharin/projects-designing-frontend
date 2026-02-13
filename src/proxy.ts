import { NextResponse } from 'next/server';

import { auth } from '@/modules/auth';
import {
  APP_PATHS,
  getMiddlewareRedirectUrl,
  routeHasAccess,
} from '@/modules/routing';

export const config = {
  matcher: [
    /*
     * Исключает:
     * - API routes (api/*)
     * - статические файлы (_next/static/*)
     * - favicon.ico
     * - все файлы с точкой в имени (например, .jpg, .png)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};

export default auth(req => {
  const { nextUrl, auth: session } = req;
  const { origin, pathname } = nextUrl;

  const authorized = !!session?.user;
  const hasAccess = routeHasAccess(pathname, authorized);

  if (hasAccess) return NextResponse.next();

  if (authorized)
    return NextResponse.redirect(
      getMiddlewareRedirectUrl(origin, APP_PATHS.MAIN),
    );
  return NextResponse.redirect(
    getMiddlewareRedirectUrl(origin, APP_PATHS.SIGN_IN),
  );
});
