import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const LangagesCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          <FormattedMessage defaultMessage="Langages & Frameworks" />
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default LangagesCard;
