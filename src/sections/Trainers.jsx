import TrainerCard from "../components/TrainerCard";

const Trainers = () => {
  return (
    <div
      className="hyphens-auto  max-w-screen bg-cover bg-center flex justify-center"
      style={{ backgroundImage: "url(/backgrounds/trainer-section-bg.svg)" }}
    >
      <div className="flex w-full h-full justify-center py-20 flex-col items-center gap-5 px-5">
        <div>
          <div
            className="text-sm w-[300px] h-[80px] bg-cover text-black flex items-center"
            style={{ backgroundImage: "url(/white-text-bg.png)" }}
          >
            <p className="w-full translate-x-2 translate-y-1 text-center font-bold text-black">
              GYM TRAINERS
            </p>
          </div>
        </div>
        <h3 className="font-bold text-4xl text-white ">
          Team of Expert Coaches
        </h3>
        <p className="text-white max-w-[500px] text-center">
          Expert team of coaches helps you succeed in any goal, personalized
          guidance and motivation provided!
        </p>
        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 px-5">
          <TrainerCard />
          <TrainerCard />
          <TrainerCard />
        </div>
      </div>
    </div>
  );
};

export default Trainers;
