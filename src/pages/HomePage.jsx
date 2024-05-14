import Benefits from "../sections/Benefits";
import Hero from "../sections/Hero";
import OurClasses from "../sections/OurClasses";
import WhoWeAre from "../sections/WhoWeAre";
import WhyUs from "../sections/WhyUs";
import Trainers from "../sections/Trainers";
import Testimonials from "../sections/Testimonials";
import FeaturedOnBanner from "../components/FeaturedOnBanner";
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
    </>
  );
};

export default HomePage;
