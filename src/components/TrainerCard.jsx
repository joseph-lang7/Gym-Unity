import trainer1 from "/trainers/trainer-1.png";
import { useState } from "react";
const TrainerCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex flex-col bg-white w-[250px] sm:w-[400px] h-[500px] cursor-pointer rounded-md `}
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
              ? "grayscale-0 h-full w-full object-contain transition-all duration-500 cursor-pointer"
              : "h-full w-full object-contain grayscale transition-all duration-500 cursor-pointer"
          }`}
          src={trainer1}
          alt="Trainer"
        />
      </div>
      <div className="flex-1 w-full h-full flex flex-col justify-center items-center">
        <h4 className="font-bold text-2xl">Trainer Name</h4>
        <p className="text-slate-500">Job Title</p>
        <div>Social Icons</div>
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

export default TrainerCard;
