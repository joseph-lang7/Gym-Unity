import {
  Hero,
  Benefits,
  WhoWeAre,
  OurClasses,
  WhyUs,
  Trainers,
  Testimonials,
  FeaturedOnBanner,
  Gallery,
  BMICalculator,
  RecentNews,
  NeedATrainerBanner,
} from "../pageComponents/homePage";
import { Pricing } from "../components";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <WhoWeAre />
      <OurClasses />
      <WhyUs />
      <Trainers />
      <Testimonials />
      <FeaturedOnBanner />
      <Gallery />
      <BMICalculator />
      <Pricing />
      <RecentNews />
      <NeedATrainerBanner />
    </>
  );
};

export default HomePage;
