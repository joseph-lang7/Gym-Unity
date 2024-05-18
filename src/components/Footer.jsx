import Logo from "./Logo";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-screen h-auto flex justify-center px-10 py-10">
      <div className="w-full max-w-[1500px] h-full flex flex-col gap-7 items-center justify-center md:flex-row md:justify-around md:items-start mb-20">
        <div className="flex flex-col gap-3 w-[200px] ">
          <Logo color="text-black" />
          <p className="text-xs text-slate-500">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="flex gap-3">
            <div className="p-2 bg-slate-300 rounded-full text-slate-600 hover:text-white hover:bg-red-700 transition-colors duration-300 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-slate-300 rounded-full text-slate-600 hover:text-white hover:bg-red-700 transition-colors duration-300 cursor-pointer">
              <RiTwitterXLine />
            </div>
            <div className="p-2 bg-slate-300 rounded-full text-slate-600 hover:text-white hover:bg-red-700 transition-colors duration-300 cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-7 md:w-2/3 md:justify-around">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <div className="flex flex-col mb-5 w-max">
                <h3 className="text-xl font-bold ">Our Classes</h3>
                <span className="w-1/2 h-[5px] bg-red-700"></span>
              </div>
              <div className="flex flex-col gap-3">
                <a className="text-slate-500 cursor-pointer hover:text-red-700 hover:font-bold ">
                  Running
                </a>
                <a className="text-slate-500 cursor-pointer hover:text-red-700 hover:font-bold">
                  Karate
                </a>
                <a className="text-slate-500 cursor-pointer hover:text-red-700 hover:font-bold">
                  Gymnastics
                </a>
                <a className="text-slate-500 cursor-pointer hover:text-red-700 hover:font-bold">
                  Meditation
                </a>
                <a className="text-slate-500 cursor-pointer hover:text-red-700 hover:font-bold">
                  Boxing
                </a>
                <a className="text-slate-500 cursor-pointer hover:text-red-700 hover:font-bold">
                  Workout
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col mb-5 w-max">
              <h3 className="text-xl font-bold w-auto">Our Hours</h3>
              <span className="w-1/2 h-[5px] bg-red-700 "></span>
            </div>
            <div className="flex flex-col gap-3 w-auto">
              <div className="flex w-auto flex-col gap-3">
                <p className="font-bold text-slate-600">Monday - Friday</p>
                <p className="text-slate-500">5:00am - 11:00pm</p>
                <p className="font-bold text-slate-600">Saturday & Sunday</p>
                <p className="text-slate-500">7:00am - 9:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
