import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
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
      <CardContent>
        <div className="flex items-center gap-2">
          <Image
            src="/typescript.svg"
            width={30}
            height={30}
            alt="Typescript"
          />
          <Image src="/django.svg" width={30} height={30} alt="Django" />
        </div>
      </CardContent>
    </Card>
  );
};

export default LangagesCard;
