import { BsPersonCheck } from "react-icons/bs";
import { BiRun } from "react-icons/bi";
import { GrYoga } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
export const WhoWeAre = () => {
  const [shiftArrow, setShiftArrow] = useState(false);
  return (
    <div className="flex max-w-screen h-[800px] justify-center">
      <div className="w-screen h-full flex justify-center max-w-[1500px] px-5">
        <div className="flex-1 h-full flex flex-col justify-center items-center lg:items-start gap-5">
          <div
            className="w-[300px] h-[60px] bg-cover text-black flex items-center justify-start"
            style={{ backgroundImage: "url(/red-text-bg.png)" }}
          >
            <p className="w-full text-center translate-y-2 font-bold text-white">
              Who We Are
            </p>
          </div>
          <h3 className="text-xl font-bold">
            TAKE YOUR HEALTH AND BODY TO THE NEXT LEVEL
          </h3>
          <p className="text-center lg:text-start">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="flex">
            <div className="flex flex-col gap-2 items-center">
              <BsPersonCheck size={60} className="text-red-700" />
              <h4 className="font-bold text-xl w-[200px] text-center">
                Professional Trainers
              </h4>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <BiRun size={60} className="text-red-700" />
              <h4 className="font-bold text-xl w-[200px] text-center">
                Endurance Training
              </h4>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <GrYoga size={60} className="text-red-700" />
              <h4 className="font-bold text-xl w-[200px] text-center">
                Yoga
                <br /> Classes
              </h4>
            </div>
          </div>
          <button
            className="flex items-center gap-2 px-5 py-3 mt-10 w-[200px] rounded-md bg-slate-800 text-white relative hover:shadow-xl hover:scale-105 transition-all duration-500 hover:bg-red-700 hover:text-white"
            onMouseEnter={() => setShiftArrow(true)}
            onMouseLeave={() => setShiftArrow(false)}
          >
            Take A Tour
            <FaArrowRightLong
              className={`${
                shiftArrow && "translate-x-2"
              }  transition-transform duration-500`}
            />
          </button>
        </div>
        <div
          className="flex-1 hidden lg:block bg-contain bg-right h-auto bg-no-repeat"
          style={{ backgroundImage: "url(/RUNNING.png)" }}
        ></div>
      </div>
    </div>
  );
};
export default WhoWeAre;
