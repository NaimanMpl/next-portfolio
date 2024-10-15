'use client';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FormattedMessage } from 'react-intl';

const PersonalCard = () => {
  return (
    <Card>
      <CardHeader>
        <span className="uppercase text-muted-foreground text-xs">
          <FormattedMessage defaultMessage="Fullstack developer" />
        </span>
        <CardTitle className="text-xl">Naïman</CardTitle>
        <CardDescription>
          <FormattedMessage defaultMessage="Currently a first-year Master's student, but above all, an average Typescript and Next.js enjoyer" />
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default PersonalCard;
