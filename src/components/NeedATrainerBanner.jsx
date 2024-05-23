import Button from "./Button";

const NeedATrainerBanner = () => {
  return (
    <div className="flex h-[400px] max-w-screen bg-black mb-20">
      <div className="flex flex-col gap-7 px-5 justify-center items-center w-4/6 z-10">
        <div className="flex flex-col gap-3">
          <h4 className="text-white text-3xl font-bold ">
            Need a Fitness Trainer?
          </h4>
          <p className="text-xl font-bold text-white mb-5">
            <span className="text-red-700">Call:</span> (123) 457-7892
          </p>
          <Button
            bgColor="bg-red-700"
            textColor="text-white"
            content="Purchase Now"
            width="w-[230px]"
          />
        </div>
      </div>
      <div
        className="w-4/6 right-0 absolute h-[400px] bg-center bg-cover z-0"
        style={{ backgroundImage: "url(/gymPhotos/dumbbells.jpg)" }}
      ></div>
    </div>
  );
};

export default NeedATrainerBanner;
