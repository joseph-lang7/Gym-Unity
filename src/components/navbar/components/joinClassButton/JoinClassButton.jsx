import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

const JoinClassButton = () => {
  return (
    <Link
      to="/contact"
      className="cursor-pointer pl-2 h-[65px] w-[250px] border border-white justify-start items-center gap-2 rounded-md hidden md:flex"
    >
      <div className="transform hover:rotate-360 transition duration-700 ease-in-out h-[45px] w-[45px] bg-red-700 flex justify-center items-center rounded-md">
        <FiPlus className="text-white" size={25} />
      </div>
      <p className="text-white font-bold">Join Class Now</p>
    </Link>
  );
};

export default JoinClassButton;
