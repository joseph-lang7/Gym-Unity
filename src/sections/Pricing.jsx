import PricingCard from "../components/PricingCard";
const Pricing = () => {
  return (
    <div className="max-w-screen flex flex-col items-center mb-20">
      <div className="flex flex-col gap-5 items-center w-full">
        <div
          className="w-[300px] h-[60px] bg-cover text-black flex items-center justify-start"
          style={{ backgroundImage: "url(/red-text-bg.png)" }}
        >
          <p className="w-full text-center translate-y-2 font-bold text-white">
            PRICING
          </p>
        </div>
        <h3 className="font-bold text-4xl text-black text-center ">
          Pricing Plans
        </h3>
        <p className=" max-w-[700px] text-center">
          Check out our various pricing plans to find a plan that fits your
          needs.
        </p>
      </div>
      <div className="w-full overflow-hidden flex justify-center flex-wrap items-center gap-5 mt-10 ">
        <PricingCard
          tier="Beginner"
          price="49.99"
          image="/gymPhotos/curling.jpg"
          alt="Person curling dumbbell"
        />
        <PricingCard
          tier="Intermediate"
          price="69.99"
          image="/gymPhotos/rope2.jpg"
          alt="Person doing rope workout"
        />
        <PricingCard
          tier="Advanced"
          price="99.99"
          image="/gymPhotos/barbell.jpg"
          alt="Person setting up plates on barbell"
        />
      </div>
    </div>
  );
};

export default Pricing;
