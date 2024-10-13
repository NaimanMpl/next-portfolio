import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const Work = ({ children }: PropsWithChildren) => {
  return <div className="flex gap-12">{children}</div>;
};

export const WorkContent = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export const WorkTitle = ({ children }: PropsWithChildren) => {
  return <h3 className="text-base font-medium">{children}</h3>;
};

export const WorkCompany = ({
  children,
  link,
}: PropsWithChildren<{ link: string }>) => {
  return (
    <Link target="_blank" href={link} className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground hover:text-white">
        {children}
      </span>
      <MoveUpRight className="w-3 text-muted-foreground" />
    </Link>
  );
};

export const WorkDate = ({ children }: PropsWithChildren) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};
