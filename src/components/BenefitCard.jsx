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
      className="relative bg-white hover:bg-cover hover:bg-center transition duration-300 ease-in-out px-5 py-12 flex flex-col items-center shadow-2xl translate-y-[-50px] gap-5 hover:text-white rounded-tl-3xl
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
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
