'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex justify-between px-24 py-5 border-b mobile:px-6">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="/avatar.png" alt="Naïman" />
          <AvatarFallback>N</AvatarFallback>
        </Avatar>
        <span className="font-medium">Naïman</span>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_RECEIPT}`}>
              <Button>
                <FormattedMessage defaultMessage="Contact Me" />
              </Button>
            </Link>
          </li>
          <li>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
