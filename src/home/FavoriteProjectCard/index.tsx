import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const FavoriteProjectCard = () => {
  return (
    <Card className="col-start-3 col-end-4 row-start-2 row-end-4 relative overflow-hidden flex flex-col justify-between mobile:col-start-auto mobile:col-end-auto mobile:row-start-auto mobile:row-end-auto">
      <CardHeader className="flex flex-col gap-3">
        <div>
          <span className="uppercase text-muted-foreground text-xs">
            <FormattedMessage defaultMessage="My heartfelt project" />
          </span>
          <CardTitle className="mt-2">
            <FormattedMessage defaultMessage="A piece of my simpler past..." />
          </CardTitle>
        </div>
        <CardDescription className="z-50">
          <FormattedMessage defaultMessage="A heartfelt project that recreates the world of my childhood. By creating this Minecraft clone, I wanted to bring one of my favorite games back to life and relive the memories of a simpler time." />
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link
          target="_blank"
          href={process.env.NEXT_PUBLIC_FAVORITE_PROJECT_LINK ?? '#'}
        >
          <Button>
            <FormattedMessage defaultMessage="See project" />
          </Button>
        </Link>
      </CardFooter>
      <img
        className="absolute right-0 -bottom-28 w-64 mobile:w-32 mobile:-bottom-16"
        src="/minecraft_steve.webp"
        alt="Steve"
      />
    </Card>
  );
};

export default FavoriteProjectCard;
