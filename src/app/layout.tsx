import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/theme/ThemeProvider';
import IntlProvider from '@/i18n/IntlProvider';
import { getLocale } from 'next-intl/server';

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
      <body>
        <IntlProvider locale={locale}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </IntlProvider>
      </body>
    </html>
  );
}
