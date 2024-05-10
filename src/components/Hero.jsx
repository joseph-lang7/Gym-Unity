import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { TfiLinkedin } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Hero = () => {
  const [shiftArrow, setShiftArrow] = useState(false);
  return (
    <div
      className=" h-screen max-w-screen bg-cover bg-center flex justify-center "
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      <div className="w-full h-full justify-end flex">
        <div className="w-[1000px] h-full flex justify-end mr-10 gap-5 items-center">
          <div className="flex flex-col gap-2">
            <div
              className="w-[300px] translate-x-[-25px] h-[60px] bg-cover text-black flex items-center justify-start"
              style={{ backgroundImage: "url(/text-bg.png)" }}
            >
              <p className="translate-x-16 translate-y-3">Find Your Energy</p>
            </div>
            <div className="md:text-6xl text-3xl  text-white flex flex-col gap-2">
              <h3 className="font-bold">MAKE YOUR BODY</h3>
              <h3>FIT & PERFECT</h3>
            </div>
            <button
              className="flex items-center gap-2 px-5 py-3 mt-10 w-[200px] rounded-md bg-white text-black relative hover:shadow-xl hover:scale-105 transition-all duration-500 hover:bg-red-700 hover:text-white"
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
          </div>
          <div className="hidden lg:flex lg:flex-col lg:items-center gap-4 text-white">
            <p className=" h-full rotate-90 font-bold text-center mb-4">
              SHARE
            </p>

            <span className="h-[50px] w-[3px] bg-red-700"></span>

            <TfiLinkedin
              size={30}
              className="cursor-pointer hover:text-red-700 transition-colors duration-200"
            />

            <BsTwitterX
              size={30}
              className="cursor-pointer hover:text-red-700 transition-colors duration-200"
            />

            <FaFacebook
              size={30}
              className="cursor-pointer hover:text-red-700 transition-colors duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
