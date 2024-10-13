'use client';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

const LocaleHourCard = () => {
  const [date, setDate] = useState(new Date());
  const formatter = new Intl.DateTimeFormat([], {
    timeZone: 'Europe/Paris',
    hour: 'numeric',
    minute: 'numeric',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="flex justify-center">
      <CardHeader className="flex items-center justify-center">
        <CardTitle className="text-6xl font-medium">
          {formatter.format(date)}
        </CardTitle>
        <CardDescription className="text-lg">
          <FormattedMessage defaultMessage="My local time" />
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default LocaleHourCard;
