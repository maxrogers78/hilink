import HeroSection from '@/sections/hero';
import CampSection from '@/sections/camp';
import GuideSection from '@/sections/guide';
import FeaturesSection from '@/sections/features';
import GetAppSection from '@/sections/get-app';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CampSection />
      <GuideSection />
      <FeaturesSection />
      <GetAppSection />
    </>
  );
}
