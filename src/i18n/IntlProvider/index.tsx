'use client';
import { PropsWithChildren } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import messagesFr from '@lang/compiled/fr.json';
import messagesEn from '@lang/compiled/en.json';
import { IntlConfig } from 'next-intl';

type Locale = 'fr' | 'en';

const MESSAGES_MAP = {
  fr: messagesFr,
  en: messagesEn,
};

const IntlProvider = ({ children, locale }: PropsWithChildren<IntlConfig>) => {
  return (
    <ReactIntlProvider
      locale={locale}
      messages={MESSAGES_MAP[locale as Locale]}
    >
      {children}
    </ReactIntlProvider>
  );
};

export default IntlProvider;
