import Container from '@/components/common/Container';
import Header from '@/components/common/Header';
import ExperiencesCard from '@/home/ExperiencesCard';
import LocaleHourCard from '@/home/LocaleHourCard';
import PersonalCard from '@/home/PersonalCard';

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <div className="mt-12 grid grid-cols-3 gap-8">
          <PersonalCard />
          <LocaleHourCard />
          <ExperiencesCard />
        </div>
      </Container>
    </div>
  );
}
