import { GiArcheryTarget } from "react-icons/gi";
import { LiaMountainSolid } from "react-icons/lia";
const AboutGrid = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto max-w-[1500px] mt-10 mb-28">
        <div className="w-full h-full flex flex-col justify-center items-center gap-3 pb-10">
          <GiArcheryTarget size={180} className="text-red-700" />
          <h4 className="font-bold text-3xl">Our History</h4>
          <p className="max-w-[500px] text-center text-sm text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            laboriosam est molestias explicabo laborum quas ab vitae a, hic eius
            saepe adipisci commodi quos obcaecati possimus asperiores assumenda
            incidunt sequi.
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
            laboriosam est molestias explicabo laborum quas ab vitae a, hic eius
            saepe adipisci commodi quos obcaecati possimus asperiores assumenda
            incidunt sequi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutGrid;
