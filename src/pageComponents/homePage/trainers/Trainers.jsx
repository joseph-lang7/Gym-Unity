import TrainerCard from "./TrainerCard";
import yogaTrainer from "/trainers/yoga-trainer.png";
import crossfitTrainer from "/trainers/crossfit-trainer.png";
import personalTrainer from "/trainers/personal-trainer.png";
const Trainers = () => {
  return (
    <div
      className="  max-w-screen h-auto bg-cover bg-center flex justify-center"
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
        <h3 className="font-bold text-4xl text-white text-center ">
          Team of Expert Coaches
        </h3>
        <p className="text-white max-w-[500px] text-center">
          Expert team of coaches helps you succeed in any goal, personalized
          guidance and motivation provided!
        </p>
        <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:px-5">
          <TrainerCard
            trainerName="Grace Hill"
            jobTitle="Yoga Trainer"
            trainerImage={yogaTrainer}
          />
          <TrainerCard
            trainerName="Megan Smith  "
            jobTitle="Crossfit Trainer"
            trainerImage={crossfitTrainer}
          />
          <TrainerCard
            trainerName="Thomas Scott"
            jobTitle="Personal Trainer"
            trainerImage={personalTrainer}
          />
        </div>
      </div>
    </div>
  );
};

export default Trainers;
