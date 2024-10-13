import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/theme/ThemeProvider';
import { Inter } from 'next/font/google';
import IntlProvider from '@/i18n/IntlProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Naïman',
  description: "Naïman's Porfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <IntlProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </IntlProvider>
      </body>
    </html>
  );
}
