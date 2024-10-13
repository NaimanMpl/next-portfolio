import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

type Locale = 'fr-FR' | 'en' | 'en-US' | 'en-GB';

const LOCALES_MAP: Record<Locale, string> = {
  'fr-FR': 'fr',
  en: 'en',
  'en-US': 'en',
  'en-GB': 'en',
};

export default getRequestConfig(async () => {
  const requestHeaders = headers();
  const acceptLanguage = requestHeaders.get('accept-language');
  const headerLocale = acceptLanguage ? acceptLanguage.split(',')[0] : 'en';
  const locale = (
    Object.keys(LOCALES_MAP).includes(headerLocale) ? headerLocale : 'en'
  ) as Locale;

  return {
    locale: LOCALES_MAP[locale],
  };
});
