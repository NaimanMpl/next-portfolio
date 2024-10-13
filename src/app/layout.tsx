import IntlProvider from '@/i18n/IntlProvider';
import { ReduxProvider } from '@/redux/ReduxProvider';
import ThemeProvider from '@/theme/ThemeProvider';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import './globals.css';

export const metadata: Metadata = {
  title: 'Naïman',
  description: "Naïman's Porfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReduxProvider>
          <IntlProvider locale={locale}>
            <ThemeProvider attribute="class" defaultTheme="dark">
              {children}
            </ThemeProvider>
          </IntlProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
