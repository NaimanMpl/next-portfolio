'use client';
import Container from '@/components/common/Container';
import Header from '@/components/common/Header';
import ContributionCard from '@/home/ContributionCard';
import ExperiencesCard from '@/home/ExperiencesCard';
import FavoriteProjectCard from '@/home/FavoriteProjectCard';
import GitHubCard from '@/home/GitHubCard';
import LangagesCard from '@/home/LangagesCard';
import LeagueCard from '@/home/LeagueCard';
import LocaleHourCard from '@/home/LocaleHourCard';
import PersonalCard from '@/home/PersonalCard';

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <div className="py-12 grid grid-cols-[1fr_380px_1fr] gap-x-10 gap-y-6 mobile:gap-x-0 mobile:grid-cols-1">
          <PersonalCard />
          <LocaleHourCard />
          <ExperiencesCard />
          <div className="flex flex-col gap-6">
            <LangagesCard />
            <GitHubCard />
          </div>
          <div className="col-start-2 col-end-3 row-start-2 row-end-4 rounded-lg mobile:col-start-auto mobile:col-end-auto mobile:row-start-auto mobile:row-end-auto mobile:hidden">
            <img
              className="rounded-lg h-full object-cover"
              src="/hero.jpg"
              alt="Hero"
            />
          </div>
          <ContributionCard />
          <FavoriteProjectCard />
          <LeagueCard />
        </div>
      </Container>
    </div>
  );
}
