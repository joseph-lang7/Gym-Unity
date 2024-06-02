import Hero2 from "../components/hero2/Hero2";
import { AboutGrid, OurMission } from "../pageComponents/aboutPage";
const AboutPage = () => {
  return (
    <div className="h-auto max-w-screen">
      <Hero2 title="About Us" />
      <div className="flex flex-col w-full h-auto px-10">
        <OurMission />
        <AboutGrid />
      </div>
    </div>
  );
};

export default AboutPage;
