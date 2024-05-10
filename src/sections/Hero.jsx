import { TfiLinkedin } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import Button from "../components/Button";

const Hero = () => {
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
              style={{ backgroundImage: "url(/white-text-bg.png)" }}
            >
              <p className="translate-x-16 translate-y-3">Find Your Energy</p>
            </div>
            <div className="md:text-6xl text-3xl  text-white flex flex-col gap-2">
              <h3 className="font-bold">MAKE YOUR BODY</h3>
              <h3>FIT & PERFECT</h3>
            </div>
            <Button
              bgColor="bg-white"
              textColor="text-black"
              content="OUR CLASSES"
            />
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
