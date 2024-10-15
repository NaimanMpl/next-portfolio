'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetContributionsQuery } from '@/redux/slice';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Area, AreaChart, XAxis, YAxis } from 'recharts';

const ContributionCard = () => {
  const {
    data: contributions,
    isLoading,
    isError,
  } = useGetContributionsQuery();

  return (
    <Card
      style={{
        gridRow: '3 / 5',
      }}
      x-chunk="charts-01-chunk-7"
    >
      <CardHeader className="space-y-0 pb-0">
        <CardDescription>
          <FormattedMessage defaultMessage="Contributions" />
        </CardDescription>
        <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
          {isError && <FormattedMessage defaultMessage="Unavailable" />}
          {isLoading && <Skeleton className="w-20 h-6 mt-2" />}
          {!isLoading &&
            contributions &&
            contributions.reduce((sum, contribution) => {
              sum += contribution.commits;
              return sum;
            }, 0)}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer
          config={{
            time: {
              label: 'Time',
              color: 'hsl(var(--chart-2))',
            },
          }}
        >
          <AreaChart
            accessibilityLayer
            data={contributions?.map((contribution) =>
              contribution.commits < 10
                ? { ...contribution, commits: contribution.commits + 10 }
                : contribution,
            )}
            margin={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="date" hide />
            <YAxis domain={['dataMin - 5', 'dataMax + 2']} hide />
            <defs>
              <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-time)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-time)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="commits"
              type="natural"
              fill="url(#fillTime)"
              fillOpacity={0.4}
              stroke="var(--color-time)"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              formatter={(value) => (
                <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                  <FormattedMessage defaultMessage="Contributions" />
                  <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                    {parseInt(value.toString()) < 10
                      ? parseInt(value.toString()) - 10
                      : value}
                  </div>
                </div>
              )}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ContributionCard;
