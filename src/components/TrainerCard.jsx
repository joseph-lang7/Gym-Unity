import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoMailSharp } from "react-icons/io5";
import PropTypes from "prop-types";
const TrainerCard = ({ trainerImage, trainerName, jobTitle }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex flex-col bg-white w-[300px] sm:w-[400px] h-[500px] cursor-pointer rounded-md `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className=" h-full w-full bg-cover bg-center flex justify-center items-center flex-1 "
        style={{ backgroundImage: "url(/backgrounds/trainer-bg.png)" }}
      >
        <img
          className={`${
            isHovered
              ? "grayscale-0 h-[350px] w-full object-cover transition-all duration-500 cursor-pointer"
              : "h-[350px] w-full object-cover grayscale transition-all duration-500 cursor-pointer"
          }`}
          src={trainerImage}
          alt="Trainer"
        />
      </div>
      <div className="flex-1 w-full h-full flex flex-col justify-center items-center">
        <h4 className="font-bold text-2xl">{trainerName}</h4>
        <p className="text-slate-500">{jobTitle}</p>
        <div className="flex gap-3 mt-2">
          <FaFacebook
            className="cursor-pointer hover:text-red-700 transition-colors duration-300"
            size={25}
          />
          <FaSquareXTwitter
            className="cursor-pointer hover:text-red-700 transition-colors duration-300"
            size={25}
          />
          <RiInstagramFill
            className="cursor-pointer hover:text-red-700 transition-colors duration-300"
            size={25}
          />
          <IoMailSharp
            className="cursor-pointer hover:text-red-700 transition-colors duration-300"
            size={25}
          />
        </div>
      </div>
      <div className="w-full relative">
        <div
          className={`${
            isHovered
              ? "w-full absolute bottom-0 left-1/2 transform -translate-x-1/2 h-2 bg-red-700 transition-all duration-300"
              : "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-2 w-10 bg-red-700 transition-all duration-300"
          } `}
        ></div>
      </div>
    </div>
  );
};
TrainerCard.propTypes = {
  trainerImage: PropTypes.elementType,
  trainerName: PropTypes.string,
  jobTitle: PropTypes.string,
};

export default TrainerCard;
