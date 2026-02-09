import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
};

const withI18N = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './src/static/locales/ru.json',
  },
  requestConfig: './src/modules/i18n/utils/request.ts',
});

export default withI18N(nextConfig);
