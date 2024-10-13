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
        <span className="uppercase text-muted-foreground text-sm">
          <FormattedMessage defaultMessage="Fullstack developer" />
        </span>
        <CardTitle className="text-xl">Naïman</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, officia.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default PersonalCard;
