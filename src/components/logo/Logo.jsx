import { FaDumbbell } from "react-icons/fa6";
import PropTypes from "prop-types";
const Logo = ({ color }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer w-max md:w-[220px]">
      <FaDumbbell size={60} className="text-red-700 " />
      <div className="hidden md:flex flex-col ">
        <h3 className={`${color} text-lg font-bold`}>GymUnity</h3>
        <p className={`${color} text-xs w-full`}>The Ultimate Gym</p>
      </div>
    </div>
  );
};
Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;
