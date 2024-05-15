import Benefits from "../sections/Benefits";
import Hero from "../sections/Hero";
import OurClasses from "../sections/OurClasses";
import WhoWeAre from "../sections/WhoWeAre";
import WhyUs from "../sections/WhyUs";
import Trainers from "../sections/Trainers";
import Testimonials from "../sections/Testimonials";
import FeaturedOnBanner from "../components/FeaturedOnBanner";
import Gallery from "../components/Gallery";
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
    </>
  );
};

export default HomePage;
