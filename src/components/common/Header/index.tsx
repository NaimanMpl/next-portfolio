'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocale } from '@/i18n/IntlProvider';
import { ChevronDown, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useIntl } from 'react-intl';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const intl = useIntl();
  const { setLocale } = useLocale();
  return (
    <header className="flex justify-between px-24 py-4 border-b">
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
            <Link href="/contact">
              <Button>Me contacter</Button>
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
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-none flex gap-2"
                >
                  {intl.locale.toUpperCase()} <ChevronDown className="w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Langues</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={intl.locale === 'fr'}
                  onClick={() => setLocale('fr')}
                >
                  Français
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={intl.locale === 'en'}
                  onClick={() => setLocale('en')}
                >
                  English
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
