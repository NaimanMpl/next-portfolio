import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between">
      <Avatar>
        <AvatarImage src="" alt="Naïman" />
        <AvatarFallback>N</AvatarFallback>
      </Avatar>
      <nav>
        <ul>
          <li>
            <Link href="/contact">
              <Button>Me contacter</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
