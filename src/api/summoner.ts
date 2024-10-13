import { Queue } from './rankedentry';

export interface SummonerData {
  id: string;
  summonerLevel: number;
  profileIconId: number;
}

export interface Summoner {
  name: string;
  tag: string;
  level: number;
  profileIconUrl: string;
  queues: {
    solo: Queue | null;
  };
}
