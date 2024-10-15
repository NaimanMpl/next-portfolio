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
            className="rounded-sm"
            src="/typescript.svg"
            width={30}
            height={30}
            alt="Typescript"
          />
          <Image
            className="rounded-sm"
            src="/python.svg"
            width={30}
            height={30}
            alt="Python"
          />
          <Image
            className="rounded-sm"
            src="/next-js.svg"
            width={30}
            height={30}
            alt="Next.js"
          />
          <Image
            className="rounded-sm"
            src="/react.svg"
            width={30}
            height={30}
            alt="React"
          />
          <Image
            className="rounded-sm"
            src="/django.svg"
            width={30}
            height={30}
            alt="Django"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default LangagesCard;
