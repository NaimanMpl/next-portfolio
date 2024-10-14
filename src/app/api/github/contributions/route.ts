import { Contribution, ContributionData } from '@/api/contribution';

const getPaginatedData = async (url: string) => {
  const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
  let pagesRemaining = true;
  let paginatedData: Contribution[] = [];

  while (pagesRemaining) {
    const res = await fetch(url);

    const data: ContributionData[] = await res.json();
    const contributions: Contribution[] = data
      .filter((contribution) => contribution.type === 'PushEvent')
      .map((contribution) => ({
        created_at: contribution.created_at,
        commits: contribution.payload?.commits ?? [],
      }));

    paginatedData = [...paginatedData, ...contributions];
    const headersLink = res.headers.get('link');

    if (!headersLink || !headersLink.includes('rel="next"')) {
      pagesRemaining = false;
      continue;
    }
    url = headersLink.match(nextPattern)![0];
  }

  return paginatedData;
};

export async function GET() {
  const contributions = await getPaginatedData(
    `https://api.github.com/users/${process.env.GITHUB_USER}/events?per_page=100`,
  );
  const contributionsMapByDate = contributions.reduce(
    (groups: Record<string, Contribution[]>, contribution) => {
      const date = contribution.created_at.split('T')[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(contribution);
      return groups;
    },
    {},
  );

  const result = Object.entries(contributionsMapByDate)
    .map(([date, contribution]) => ({
      date,
      commits: contribution.length,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return new Response(JSON.stringify(result));
}
