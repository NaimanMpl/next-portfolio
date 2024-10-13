import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const ContributionCard = () => {
  return (
    <Card
      className="pb-32"
      style={{
        gridRow: '3 / 5',
      }}
    >
      <CardHeader>
        <CardTitle className="text-xl">Contributions</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default ContributionCard;
