import Button from "../components/Button";

const WhyUs = () => {
  return (
    <div className="flex w-full md:h-[1100px]  h-[1600px] bg-black justify-center mt-[110px]">
      <div className="w-full h-full max-w-[1200px] items-center gap-12  py-20 flex flex-col md:flex-row px-10">
        {/* Image */}
        <div
          className="text-white flex-1 bg-cover bg-center h-[400px] md:h-[700px] w-[300px] md:w-full border-4 border-white"
          style={{ backgroundImage: "url(/gymPhotos/holding-dumbbells.jpg)" }}
        ></div>
        {/* Text Content */}
        <span className="h-full w-[10px] bg-red-700 hidden md:block"></span>
        <div className="flex flex-col gap-5 flex-1 items-center">
          <div
            className="text-sm w-[300px] h-[80px] bg-cover text-black flex items-center justify-start"
            style={{ backgroundImage: "url(/red-text-bg.png)" }}
          >
            <p className="w-full text-center font-bold text-white">
              WHY CHOOSE US
            </p>
          </div>
          <h3 className="text-white font-bold text-3xl text-center px-5">
            We Can Help You Achieve All Of Your Fitness Goals
          </h3>
          <p className="text-slate-200 text-center px-5">
            At <span className="font-bold">GymUnity</span>, we are dedicated to
            helping you achieve the body of your dreams. Our expert trainers and
            nutritionists will work with you to create a personalized fitness
            and nutrition plan that helps you reach your specific goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[500px]">
            <div className="flex gap-7 md:gap-3 items-center">
              <div className="bg-slate-700 min-w-[75px] h-[75px] rounded-full hover:bg-red-700 transition-colors duration-500 resize-none">
                <div
                  className="bg-cover bg-center w-full h-full"
                  style={{ backgroundImage: "url(/icons/fit-icon.png)" }}
                ></div>
              </div>
              <p className="text-white">
                Free Fitness
                <br /> Training
              </p>
            </div>
            <div className="flex gap-7 md:gap-3 items-center">
              <div className="bg-slate-700 min-w-[75px] h-[75px] rounded-full hover:bg-red-700 transition-colors duration-500">
                <div
                  className="bg-cover bg-center w-full h-full"
                  style={{
                    backgroundImage: "url(/icons/gym-equipment-icon.png)",
                  }}
                ></div>
              </div>
              <p className="text-white">
                Modern Gym
                <br /> Equipment
              </p>
            </div>
            <div className="flex gap-7 md:gap-3 items-center">
              <div className="bg-slate-700 min-w-[75px] h-[75px] rounded-full hover:bg-red-700 transition-colors duration-500">
                <div
                  className="bg-cover bg-center w-full h-full"
                  style={{
                    backgroundImage: "url(/icons/bag-equipment-icon.png)",
                  }}
                ></div>
              </div>
              <p className="text-white">
                Gym Bag
                <br /> Equipment
              </p>
            </div>
            <div className="flex gap-7 md:gap-3 items-center">
              <div className="bg-slate-700 min-w-[75px] h-[75px] rounded-full hover:bg-red-700 transition-colors duration-500">
                <div
                  className="bg-cover bg-center w-full h-full"
                  style={{
                    backgroundImage: "url(/icons/water-bottle-icon.png)",
                  }}
                ></div>
              </div>
              <p className="text-white">
                Fresh Bottled
                <br /> Water
              </p>
            </div>
            <Button
              bgColor="bg-slate-700"
              content="OUR CLASSES"
              textColor="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
