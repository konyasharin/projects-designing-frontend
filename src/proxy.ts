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

export { auth as proxy } from '@/modules/auth';
