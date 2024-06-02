import Logo from "../../logo/Logo";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
const BrandInfo = () => {
  return (
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
  );
};

export default BrandInfo;
