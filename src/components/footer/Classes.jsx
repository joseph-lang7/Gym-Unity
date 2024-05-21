import Hours from "./Hours";
const Classes = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-7 md:w-2/3 md:justify-around">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          <div className="flex flex-col mb-5 w-max">
            <h3 className="text-xl font-bold ">Our Classes</h3>
            <span className="w-1/2 h-[5px] bg-red-700"></span>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-slate-500 cursor-pointer hover:text-red-700 hover:font-bold ">
              Running
            </a>
            <a className="text-slate-500 cursor-pointer hover:text-red-700 hover:font-bold">
              Karate
            </a>
            <a className="text-slate-500 cursor-pointer hover:text-red-700 hover:font-bold">
              Gymnastics
            </a>
            <a className="text-slate-500 cursor-pointer hover:text-red-700 hover:font-bold">
              Meditation
            </a>
            <a className="text-slate-500 cursor-pointer hover:text-red-700 hover:font-bold">
              Boxing
            </a>
            <a className="text-slate-500 cursor-pointer hover:text-red-700 hover:font-bold">
              Workout
            </a>
          </div>
        </div>
      </div>
      <Hours />
    </div>
  );
};

export default Classes;
