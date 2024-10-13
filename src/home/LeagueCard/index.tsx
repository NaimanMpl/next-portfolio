'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const LeagueCard = () => {
  return (
    <Card
      style={{
        gridColumn: '2 / 4',
      }}
    >
      <CardHeader>
        <CardTitle>
          <FormattedMessage defaultMessage="I also play League of Legends, by the way." />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <span>ZelphiiX#EUW</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeagueCard;
