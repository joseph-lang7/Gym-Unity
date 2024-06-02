import PopularTag from "./popularTag/PopularTag";
const PopularTags = () => {
  return (
    <div className="flex flex-col w-full h-auto px-5 pt-5 pb-10 bg-slate-100">
      <div className="flex flex-col mb-5 w-max">
        <h5 className=" font-bold ">Popular Tags</h5>
        <span className="w-1/2 h-[5px] bg-red-700 mt-[12px]"></span>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="flex gap-2 w-full flex-wrap">
          <PopularTag tag="Running" />
          <PopularTag tag="Fitness" />
          <PopularTag tag="Yoga" />

          <PopularTag tag="Boxing" />
          <PopularTag tag="Workout" />
          <PopularTag tag="Diet" />
          <PopularTag tag="Gymnastics" />
          <PopularTag tag="Karate" />
        </div>
      </div>
    </div>
  );
};

export default PopularTags;
