'use client';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

const LocaleHourCard = () => {
  const [date, setDate] = useState<Date>();
  const formatter = new Intl.DateTimeFormat([], {
    timeZone: 'Europe/Paris',
    hour: 'numeric',
    minute: 'numeric',
  });

  useEffect(() => {
    setDate(new Date());
    const interval = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="flex justify-center">
      <CardHeader className="flex items-center justify-center">
        {!date ? (
          <>
            <Skeleton className="w-40 h-12" />
            <Skeleton className="w-24 h-4" />
          </>
        ) : (
          <>
            <CardTitle className="text-6xl font-medium">
              {formatter.format(date)}
            </CardTitle>
            <CardDescription className="text-lg">
              <FormattedMessage defaultMessage="My local time" />
            </CardDescription>
          </>
        )}
      </CardHeader>
    </Card>
  );
};

export default LocaleHourCard;
