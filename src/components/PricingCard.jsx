import Button from "./Button";
import PropTypes from "prop-types";
const PricingCard = ({ tier, price, image, alt }) => {
  return (
    <div className="flex flex-col w-[340px] xs:w-[380px] sm:w-[450px] h-auto border-2">
      <img
        src={image}
        alt={alt}
        className="object-cover h-[300px] w-full grayscale hover:grayscale-0 transition-all duration-300"
      />
      <div className="w-full flex justify-center h-auto ">
        <div className=" w-[350px] h-full bg-white translate-y-[-50px] flex items-center flex-col justify-center p-3">
          <h4 className="mb-3 font-bold">{tier}</h4>
          <div className="flex flex-col gap-5 items-center">
            <h4>
              <span className="text-2xl text-slate-500">$</span>{" "}
              <span className="font-bold text-4xl">{price}</span>{" "}
              <span className="text-slate-500">p/m</span>
            </h4>
            <p className="text-slate-500">Personal Trainer</p>
            <p className="text-slate-500">Running</p>
            <p className="text-slate-500">Meditation</p>
            <p className="text-slate-500">Boxing</p>
            <p className="text-slate-500">Gymnastics</p>
            <Button
              bgColor="bg-red-700"
              textColor="text-white"
              content="Purchase"
              width="100px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  tier: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default PricingCard;
