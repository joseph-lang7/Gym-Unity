import PropTypes from "prop-types";

const ClassCard = ({
  classTitle,
  times,
  large,
  Icon,
  mouseEnter,
  mouseLeave,
  isHovered,
  bgPath,
}) => {
  return (
    <div
      className={`inline-block  overflow-hidden cursor-pointer ${
        large ? "md:col-span-2 col-span-1" : "col-span-1"
      }`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div
        className={`${
          isHovered
            ? "grayscale-0 p-2 w-full h-full text-black bg-cover transition-all duration-500 transform scale-100 hover:scale-125 bg-center "
            : "grayscale p-2 w-full h-full text-black bg-cover transition-all duration-500 transform scale-100 hover:scale-125 bg-center "
        }`}
        style={{
          backgroundImage: `url(${bgPath})`,
        }}
      ></div>
      <div className="relative">
        <div
          className={`  ${
            isHovered
              ? "bg-white opacity-100 absolute left-[-55px] rounded-full  bottom-32 w-[140px] h-[60px] rotate-45 text-white  transition-all duration-500"
              : "bg-slate-300 opacity-45 absolute left-[-55px] rounded-full  bottom-32 w-[140px] h-[60px] rotate-45 text-white  transition-all duration-500 "
          }`}
        ></div>
        <div className="flex flex-col absolute  gap-2 left-10 bottom-7">
          <h3 className="text-white font-bold text-xl">{classTitle}</h3>
          <div className="w-full h-full bg-red-700 py-1 px-2">
            <p className="text-white text-sm">{times}</p>
          </div>
        </div>
        {Icon}
      </div>
    </div>
  );
};

ClassCard.propTypes = {
  classTitle: PropTypes.string,
  times: PropTypes.string,
  large: PropTypes.bool,
  Icon: PropTypes.object,
  mouseEnter: PropTypes.func,
  mouseLeave: PropTypes.func,
  isHovered: PropTypes.bool,
  bgPath: PropTypes.string,
};
export default ClassCard;
