import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import PropTypes from "prop-types";

const Button = ({ bgColor, textColor, content, width }) => {
  const [shiftArrow, setShiftArrow] = useState(false);

  return (
    <button
      className={`flex items-center gap-2 px-5 py-3 ${width} rounded-md relative hover:shadow-xl hover:scale-105 transition-all duration-500 font-bold hover:bg-red-700 hover:text-white ${bgColor} ${textColor}`}
      onMouseEnter={() => setShiftArrow(true)}
      onMouseLeave={() => setShiftArrow(false)}
    >
      {content}
      <FaArrowRightLong
        className={`${
          shiftArrow && "translate-x-2"
        }  transition-transform duration-500`}
      />
    </button>
  );
};
Button.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  content: PropTypes.string,
  width: PropTypes.string,
};

export default Button;
