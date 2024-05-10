import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const Button = ({ bgColor, textColor }) => {
  const [shiftArrow, setShiftArrow] = useState(false);

  return (
    <button
      className={`flex items-center gap-2 px-5 py-3 mt-10 w-[200px] rounded-md relative hover:shadow-xl hover:scale-105 transition-all duration-500 hover:bg-red-700 hover:text-white ${bgColor} ${textColor}`}
      onMouseEnter={() => setShiftArrow(true)}
      onMouseLeave={() => setShiftArrow(false)}
    >
      Our Classes
      <FaArrowRightLong
        className={`${
          shiftArrow && "translate-x-2"
        }  transition-transform duration-500`}
      />
    </button>
  );
};

export default Button;
