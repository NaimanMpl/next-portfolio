'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetSummonerQuery } from '@/redux/slice';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const LeagueCard = () => {
  const { data: summoner, isLoading, isError } = useGetSummonerQuery();
  if (isError) {
    return (
      <Card
        style={{
          gridColumn: '2 / 4',
        }}
      >
        <CardHeader>
          <CardTitle className="text-xl">
            <FormattedMessage defaultMessage="Sorry, service not available" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <span>ZelphiiX#EUW</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      style={{
        gridColumn: '2 / 4',
      }}
    >
      <CardHeader className="pb-2">
        {isLoading && <Skeleton className="w-[30rem] h-4" />}
        {!isLoading && summoner && (
          <CardTitle className="text-xl">
            <FormattedMessage defaultMessage="I also play League of Legends, by the way." />
          </CardTitle>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {isLoading && (
          <div className="flex items-center gap-4">
            <Skeleton className="w-[40px] h-[40px] rounded-full" />
            <Skeleton className="w-24 h-4" />
          </div>
        )}
        {!isLoading && summoner && (
          <>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={summoner.profileIconUrl} />
                <AvatarFallback>Z</AvatarFallback>
              </Avatar>
              <span className="font-medium">
                {summoner.name}
                <span className="text-muted-foreground">#{summoner.tag}</span>
              </span>
            </div>
          </>
        )}
        <div>
          <div className="flex items-center justify-between pb-2">
            {isLoading && (
              <>
                <Skeleton className="w-24 h-4" />
                <Skeleton className="w-12 h-4" />
              </>
            )}
            {!isLoading && summoner && (
              <>
                <span>
                  {summoner.queues.solo ? (
                    'Ranked'
                  ) : (
                    <FormattedMessage defaultMessage="Unranked" />
                  )}
                </span>
                <span>
                  {summoner.queues.solo
                    ? `${summoner.queues.solo.leaguePoints} LP`
                    : '0 LP'}
                </span>
              </>
            )}
          </div>
          {isLoading && <Skeleton className="h-2 w-full" />}
          {!isLoading && summoner && (
            <Progress
              value={(summoner.queues.solo?.leaguePoints ?? 0) / 100}
              className="h-1"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeagueCard;
