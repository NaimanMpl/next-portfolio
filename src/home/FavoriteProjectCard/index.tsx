import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const FavoriteProjectCard = () => {
  return (
    <Card
      style={{
        gridColumn: '3 / 4',
        gridRow: '2 / 4',
      }}
    >
      <CardHeader className="flex flex-col gap-3">
        <div>
          <span className="uppercase text-muted-foreground text-sm">
            <FormattedMessage defaultMessage="My heartfelt project" />
          </span>
          <CardTitle className="mt-2">
            <FormattedMessage defaultMessage="A piece of my simpler past..." />
          </CardTitle>
        </div>
        <CardDescription className="text-base">
          <FormattedMessage defaultMessage="A heartfelt project that recreates the world of my childhood. By creating this Minecraft clone, I wanted to bring one of my favorite games back to life and relive the memories of a simpler time." />
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FavoriteProjectCard;
