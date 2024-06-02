import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
const Info = () => {
  return (
    <div className="flex-1 flex flex-col gap-10 justify-center">
      <div className="flex flex-col gap-3 text-center lg:text-start">
        <h3 className="font-bold text-3xl">We are here to help you!</h3>
        <p className="text-sm text-slate-500">
          At GymUnity, we are dedicated to helping you achieve the body of your
          dreams. Our expert trainers and nutritionists will work with you to
          create a personalized fitness and nutrition plan that helps you reach
          your specific goals.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-max lg:w-full mb-10">
          <div className="flex flex-col">
            <h4 className="font-bold text-2xl">California</h4>
            <span className="w-[50px] h-[4px] mb-5  bg-red-700 "></span>
            <p className="text-xs text-slate-500 flex-wrap">123 Oceanview St</p>
            <p className="text-xs text-slate-500 flex-wrap">
              San Francisco, CA
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-2xl">Opening Hours</h4>
            <span className="w-[50px] h-[4px] mb-5  bg-red-700 "></span>
            <p className="text-xs text-slate-500 flex-wrap">
              Mon to Fri: 5:00am - 11:00pm
            </p>
            <p className="text-xs text-slate-500 flex-wrap">
              Sat to Sun: 7:00am - 9:00pm
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-2xl">Information</h4>
            <span className="w-[50px] h-[4px] mb-5  bg-red-700 "></span>
            <p className="text-xs text-slate-500 flex-wrap">(123) 456-7891</p>
            <p className="text-xs text-slate-500 flex-wrap">
              info@gymunity.com
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-2xl">Follow Us</h4>
            <span className="w-[50px] h-[4px] mb-5  bg-red-700 "></span>
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
        </div>
      </div>
    </div>
  );
};

export default Info;
