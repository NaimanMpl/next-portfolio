'use client';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const ContributionCard = () => {
  return (
    <Card
      className="pb-32"
      style={{
        gridRow: '3 / 5',
      }}
    >
      <CardHeader>
        <CardDescription>
          <FormattedMessage defaultMessage="Contributions" />
        </CardDescription>
        <CardTitle className="text-3xl">1400</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default ContributionCard;
