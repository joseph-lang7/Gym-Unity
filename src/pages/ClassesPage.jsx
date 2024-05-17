import ClassCard2 from "../components/ClassCard2";
import Hero2 from "../sections/Hero2";
import { useState } from "react";
const ClassesPage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-screen h-auto">
      <Hero2 title="Classes" />
      <div className="flex w-full justify-center bg-cover bg-center mt-20">
        <div className="grid w-full max-w-[1500px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-5 ">
          <ClassCard2
            classTitle="Running"
            instructor="Mia Patel"
            time="Mon: 9:00am"
            image="running.jpg"
            alt="Person running"
          />
          <ClassCard2
            classTitle="Karate"
            instructor="Sofia Johnson"
            time="Tue: 7:00am"
            image="karate.jpg"
            alt="People doing karate"
          />
          <ClassCard2
            classTitle="Gymnastics"
            instructor="Jackson Brown"
            time="Wed: 10:00am"
            image="gymnastics.jpg"
            alt="Person doing gymnastics"
          />
          <ClassCard2
            classTitle="Meditation"
            instructor="Ava Martinez"
            time="Wed: 1:00pm"
            image="meditation.jpg"
            alt="Person doing meditation"
          />
          <ClassCard2
            classTitle="Boxing"
            instructor="Emma Lewis"
            time="Thu: 6:00am"
            image="boxing.jpg"
            alt="Person boxing"
          />
          <ClassCard2
            classTitle="Workout"
            instructor="Noah Garcia"
            time="Fri: 11:00am"
            image="working-out.jpg"
            alt="Person working out"
          />
          {showMore && (
            <>
              <ClassCard2
                classTitle="Power Lifting"
                instructor="Lucas Carter"
                time="Sat: 10:30am"
                image="power-clean2.jpg"
                alt="Person power lifting"
              />
              <ClassCard2
                classTitle="Swimming"
                instructor="Ava Smith"
                time="Sun: 7:00am"
                image="swimming.jpg"
                alt="Person swimming"
              />
            </>
          )}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-7 py-3 my-20 bg-slate-500 text-white rounded-md hover:bg-slate-700 transition-colors duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ClassesPage;
