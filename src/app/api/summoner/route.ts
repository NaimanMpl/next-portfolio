import { Queue } from '@/api/rankedentry';
import { RiotAccount } from '@/api/riotaccount';
import { Summoner, SummonerData } from '@/api/summoner';

export async function GET() {
  const headers = {
    'X-Riot-Token': process.env.RIOT_API_KEY ?? '',
  };

  const requests = [
    fetch(
      `https://europe.api.riotgames.com/riot/account/v1/accounts/by-puuid/${process.env.ACCOUNT_PUUID}`,
      {
        headers,
      },
    ),
    fetch(
      `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${process.env.ACCOUNT_PUUID}/`,
      {
        headers,
      },
    ),
    fetch(`https://ddragon.leagueoflegends.com/api/versions.json`),
  ];

  try {
    const responses = await Promise.all(requests);

    responses.forEach((res) => {
      if (!res.ok) {
        throw new Error('Service Unavailable');
      }
    });

    const data = await Promise.all(responses.map((res) => res.json()));

    const { gameName, tagLine } = data[0] as RiotAccount;
    const summonerData = data[1] as SummonerData;
    const [patchVersion] = data[2] as string[];

    const res = await fetch(
      `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerData.id}/`,
      {
        headers,
      },
    );

    if (!res.ok) {
      throw new Error('Service Unavailable');
    }

    const rankedQueues: Queue[] = await res.json();

    const summoner: Summoner = {
      name: gameName,
      tag: tagLine,
      level: summonerData.summonerLevel,
      profileIconUrl: `https://ddragon.leagueoflegends.com/cdn/${patchVersion}/img/profileicon/${summonerData.profileIconId}.png`,
      queues: {
        solo:
          rankedQueues.find((queue) => queue.queueType === 'RANKED_SOLO_5x5') ??
          null,
      },
    };

    return new Response(JSON.stringify(summoner));
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({
        message: 'Something went wrong.',
      }),
      { status: 503 },
    );
  }
}
