import PropTypes from "prop-types";

const BenefitCard = ({
  benefit,
  description,
  icon,
  isHovered,
  mouseEnter,
  mouseLeave,
}) => {
  return (
    <div
      className="relative bg-white hover:bg-cover hover:bg-center transition duration-300 ease-in-out px-10  py-6 flex flex-col items-center shadow-2xl translate-y-[-50px] gap-5 hover:text-white rounded-tl-3xl flex-1
      "
      style={{
        backgroundImage: isHovered ? "url(/gymPhotos/dumbbells3.png)" : "none",
      }}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="text-red-700">{icon}</div>
      <div className="font-bold text-xl">{benefit}</div>
      <div>
        <p className="text-center text-sm">{description}</p>
      </div>
    </div>
  );
};
BenefitCard.propTypes = {
  benefit: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.elementType,
  isHovered: PropTypes.func,
  mouseEnter: PropTypes.func,
  mouseLeave: PropTypes.func,
};

export default BenefitCard;
