import Hero2 from "../sections/Hero2";
import AboutGrid from "../pageComponents/about/AboutGrid";
import OurMission from "../pageComponents/about/OurMission";
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
