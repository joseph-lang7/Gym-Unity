import { FaDumbbell } from "react-icons/fa6";
import PropTypes from "prop-types";
const Logo = ({ color }) => {
  return (
    <div className="flex justify-center items-center gap-2 cursor-pointer">
      <FaDumbbell size={60} className="text-red-700" />
      <div>
        <h3 className={`text-${color} text-xl font-bold hidden sm:block`}>
          GymUnity
        </h3>
        <p className={`text-${color} text-xs w-full hidden sm:block`}>
          The Ultimate Gym
        </p>
      </div>
    </div>
  );
};
Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;
