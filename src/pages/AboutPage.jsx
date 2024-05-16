import Hero2 from "../sections/Hero2";
import Button from "../components/Button";
import { GiArcheryTarget } from "react-icons/gi";
import { LiaMountainSolid } from "react-icons/lia";

const AboutPage = () => {
  return (
    <div className="h-auto max-w-screen">
      <Hero2 title="About Us" />
      <div className="flex flex-col w-full h-auto px-10">
        <div className="flex w-full h-auto py-10 justify-center ">
          <div className=" h-full flex max-w-[1500px]">
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
                At GymUnity, our commitment lies in assisting you to realize
                your ideal physique. Our skilled trainers and nutritionists
                collaborate closely with you to craft a tailored regimen that
                aligns with your individual objectives.
              </p>
              <Button
                bgColor="bg-slate-800"
                textColor="text-white"
                content="CONTACT US"
              />
            </div>
            <div className="w-full h-full flex-1">
              <img
                className="h-full w-full object-cover"
                src="/RUNNING.png"
                alt="Person running"
              />
            </div>
            {/* <div
              className="flex-1 hidden justify-end lg:flex bg-contain bg-center h-auto bg-no-repeat"
              style={{ backgroundImage: "url(/RUNNING.png)" }}
            ></div> */}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto max-w-[1500px] mt-10 mb-28">
            <div className="w-full h-full flex flex-col justify-center items-center gap-3 pb-10">
              <GiArcheryTarget size={180} className="text-red-700" />
              <h4 className="font-bold text-3xl">Our History</h4>
              <p className="max-w-[500px] text-center text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                laboriosam est molestias explicabo laborum quas ab vitae a, hic
                eius saepe adipisci commodi quos obcaecati possimus asperiores
                assumenda incidunt sequi.
              </p>
            </div>
            <div className="w-full h-full">
              <img
                className="h-full w-full object-cover"
                src="/gymPhotos/deadlift.jpg"
                alt="Person performing deadlift"
              />
            </div>
            <div className="w-full h-full">
              <img
                className="h-full w-full object-cover"
                src="/gymPhotos/squatting2.jpg"
                alt="Person performing squat"
              />
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center gap-3 pt-10">
              <LiaMountainSolid size={180} className="text-red-700" />
              <h4 className="font-bold text-3xl">Our Values</h4>
              <p className="max-w-[500px] text-center text-sm text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                laboriosam est molestias explicabo laborum quas ab vitae a, hic
                eius saepe adipisci commodi quos obcaecati possimus asperiores
                assumenda incidunt sequi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
