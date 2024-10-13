'use client';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

const AVAILABLE_LOCALES = ['fr', 'en', 'FR', 'EN'];

interface Props {
  locale: string;
  setLocale: Dispatch<SetStateAction<string>>;
}

const I18nContext = createContext<Props>({
  locale: 'en',
  setLocale: () => {},
});

export const useLocale = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useLocale must be used within IntlProvider');
  }
  return context;
};

const IntlProvider = ({ children }: PropsWithChildren) => {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    const locale = localStorage.getItem('locale');
    if (!locale) {
      return;
    }
    if (AVAILABLE_LOCALES.includes(locale)) {
      setLocale(locale);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      <ReactIntlProvider locale={locale}>{children}</ReactIntlProvider>
    </I18nContext.Provider>
  );
};

export default IntlProvider;
