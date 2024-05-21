import Button from "../../components/Button";
import { Link } from "react-router-dom";
const OurMission = () => {
  return (
    <div className="flex w-full h-auto py-10 justify-center ">
      <div className=" h-full flex items-center max-w-[1500px]">
        <div className="flex-1 h-full flex flex-col justify-center items-center lg:items-start gap-5 w-full">
          <div
            className="w-[300px] h-[60px] bg-cover text-black flex items-center justify-start"
            style={{ backgroundImage: "url(/red-text-bg.png)" }}
          >
            <p className="w-full text-center translate-y-2 font-bold text-white">
              Our Mission
            </p>
          </div>
          <h3 className="md:text-4xl  text-3xl font-bold text-center lg:text-left ">
            WE WILL GIVE YOU STRENGTH AND HEALTH
          </h3>
          <p className="text-center lg:text-start">
            At GymUnity, our commitment lies in assisting you to realize your
            ideal physique. Our skilled trainers and nutritionists collaborate
            closely with you to craft a tailored regimen that aligns with your
            individual objectives.
          </p>
          <Link to="/contact">
            <Button
              bgColor="bg-slate-800"
              textColor="text-white"
              content="Contact Us"
            />
          </Link>
        </div>
        <div className="w-full h-full flex-1 hidden lg:flex">
          <img
            className="h-full w-full object-cover"
            src="/RUNNING.png"
            alt="Person running"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
