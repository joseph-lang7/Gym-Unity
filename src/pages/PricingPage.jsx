import Hero2 from "../sections/Hero2";
import Pricing from "../sections/Pricing";

const PricingPage = () => {
  return (
    <div className="bg-cover bg-center w-auto h-auto">
      <Hero2 title="Pricing" />
      <div className="py-20 mb-10">
        <Pricing />
      </div>
    </div>
  );
};

export default PricingPage;
