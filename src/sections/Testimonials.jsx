import { PiQuotesBold } from "react-icons/pi";
import kettlebell from "/gymPhotos/kettlebell.jpg";
import { CgGym } from "react-icons/cg";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-3 w-full items-center py-10 px-10 mt-[70px]">
      <div
        className="w-[300px] h-[60px] bg-cover text-black flex items-center justify-start"
        style={{ backgroundImage: "url(/red-text-bg.png)" }}
      >
        <p className="w-full text-center translate-y-2 font-bold text-white">
          TESTIMONIALS
        </p>
      </div>
      {/* Review Container */}
      <div className="flex w-full max-w-[1500px] h-[460px] items-end border-[5px] p-5 mt-[100px]">
        <div className="flex-1 hidden lg:block">
          <img
            className="rounded-tr-[120px] h-[550px] min-w-[430px] max-w-[430px] object-cover"
            src={kettlebell}
            alt="Woman holding kettle bell"
          />
        </div>

        <div className="relative flex w-full flex-col flex-[2] text-white h-[400px] bg-black items-start xl:pl-20 pl-5 lg:py-8 lg:pr-10 gap-2 text-sm xl:text-base p-3">
          <PiQuotesBold className="text-4xl xl:text-6xl" />
          <p className="italic text-slate-300">
            &quot;For the last eight months, I&apos;ve dedicated myself to
            GymUnity, and it&apos;s been an incredible journey. The trainers
            here are not only highly supportive but also incredibly
            knowledgeable. The community is also genuinely warm and
            welcoming.&quot;
          </p>
          <div className="flex flex-col">
            <h4 className="font-bold text-sm xl:text-base">Lisa Marsh</h4>
            <h5 className="text-xs xl:text-sm italic">San Francisco, CA</h5>
          </div>
          <div className="absolute bottom-0 right-[10px] text-red-700">
            <CgGym size={150} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
