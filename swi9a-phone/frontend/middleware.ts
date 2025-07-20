import createMiddleware from 'next-intl/middleware';
import { locales } from './src/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',

  // When this is true, requests to "/" will be redirected to "/en"
  localePrefix: 'always',

  // Domains configuration for production
  domains: [
    {
      domain: 'swi9aphone.com',
      defaultLocale: 'en'
    },
    {
      domain: 'ar.swi9aphone.com', 
      defaultLocale: 'ar'
    },
    {
      domain: 'fr.swi9aphone.com',
      defaultLocale: 'fr'
    }
  ]
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|fr|en)/:path*']
};