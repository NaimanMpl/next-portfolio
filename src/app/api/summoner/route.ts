import { Queue } from '@/api/rankedentry';
import { RiotAccount } from '@/api/riotaccount';
import { Summoner, SummonerData } from '@/api/summoner';

export async function GET() {
  const headers = {
    'X-Riot-Token': process.env.RIOT_API_KEY ?? '',
  };
  try {
    let res = await fetch(
      `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${process.env.RIOT_GAME_NAME}/${process.env.RIOT_TAG_LINE}/`,
      {
        headers,
      },
    );
    const { puuid }: { puuid: string } = await res.json();
    const requests = [
      fetch(
        `https://europe.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}/`,
        {
          headers,
        },
      ),
      fetch(
        `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}/`,
        {
          headers,
        },
      ),
      fetch(`https://ddragon.leagueoflegends.com/api/versions.json`),
    ];

    const responses = await Promise.all(requests);

    responses.forEach((res) => {
      if (!res.ok) {
        throw new Error(
          `${res.status} - ${res.statusText} : Service Unavailable`,
        );
      }
    });

    const data = await Promise.all(responses.map((res) => res.json()));

    const { gameName, tagLine } = data[0] as RiotAccount;
    const summonerData = data[1] as SummonerData;
    const [patchVersion] = data[2] as string[];

    res = await fetch(
      `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerData.id}/`,
      {
        headers,
      },
    );

    if (!res.ok) {
      throw new Error(
        `League V4 Service is Unavailable (${res.status} ${res.statusText})`,
      );
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
    console.log(e);
    return new Response(
      JSON.stringify({
        message: 'Something went wrong.',
      }),
      { status: 503 },
    );
  }
}
