import { Summoner } from '@/api/summoner';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getSummoner: builder.query<Summoner, void>({
      query: () => '/summoner',
    }),
    getContributions: builder.query<{ date: string; commits: number }[], void>({
      query: () => '/github/contributions',
    }),
  }),
});

export const { useGetSummonerQuery, useGetContributionsQuery } = api;
