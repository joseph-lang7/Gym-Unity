import { BsPersonCheck } from "react-icons/bs";
import { BiRun } from "react-icons/bi";
import { GrYoga } from "react-icons/gr";
import Button from "../components/Button";
export const WhoWeAre = () => {
  return (
    <div className="flex max-w-screen h-[1200px] md:h-[900px] justify-center ">
      <div className="w-screen h-full flex justify-center max-w-[1500px] px-5">
        <div className="flex-1 h-full flex flex-col justify-center items-center lg:items-start gap-5 w-full">
          <div
            className="w-[300px] h-[60px] bg-cover text-black flex items-center justify-start"
            style={{ backgroundImage: "url(/red-text-bg.png)" }}
          >
            <p className="w-full text-center translate-y-2 font-bold text-white">
              Who We Are
            </p>
          </div>
          <h3 className="md:text-4xl  text-3xl font-bold text-center lg:text-left ">
            TAKE YOUR HEALTH AND BODY TO THE NEXT LEVEL
          </h3>
          <p className="text-center lg:text-start">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="flex w-full flex-col justify-center lg:justify-start sm:flex-row gap-7 sm:gap-0">
            <div className="flex flex-col gap-2 items-center ">
              <BsPersonCheck size={80} className="text-red-700" />

              <h4 className="font-bold text-xl w-[200px] text-center">
                Professional Trainers
              </h4>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <BiRun size={80} className="text-red-700" />
              <h4 className="font-bold text-xl w-[200px] text-center">
                Endurance Training
              </h4>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <GrYoga size={80} className="text-red-700" />
              <h4 className="font-bold text-xl w-[200px] text-center">
                Yoga
                <br /> Classes
              </h4>
            </div>
          </div>
          <Button
            bgColor="bg-slate-800"
            textColor="text-white"
            content="Take A Tour"
          />
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
