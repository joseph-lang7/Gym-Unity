import { useState } from "react";
import DayButton from "../components/DayButton";
import Hero2 from "../sections/Hero2";
import ScheduleCard from "../components/ScheduleCard";

const SchedulePage = () => {
  const [selectedButton, setButtonSelected] = useState("Monday");

  const handleButton = (day) => {
    setButtonSelected(day);
    console.log(day);
  };

  return (
    <div className="max-w-screen">
      <Hero2 title="Schedule" />
      <div className="w-full flex justify-center mt-20 mb-12">
        <div className="w-[1200px] flex gap-3 flex-wrap justify-center">
          <DayButton
            day="Monday"
            currentSelected={selectedButton === "Monday"}
            handleButton={handleButton}
          />
          <DayButton
            day="Tuesday"
            currentSelected={selectedButton === "Tuesday"}
            handleButton={handleButton}
          />
          <DayButton
            day="Wednesday"
            currentSelected={selectedButton === "Wednesday"}
            handleButton={handleButton}
          />
          <DayButton
            day="Thursday"
            currentSelected={selectedButton === "Thursday"}
            handleButton={handleButton}
          />
          <DayButton
            day="Friday"
            currentSelected={selectedButton === "Friday"}
            handleButton={handleButton}
          />
          <DayButton
            day="Saturday"
            currentSelected={selectedButton === "Saturday"}
            handleButton={handleButton}
          />
          <DayButton
            day="Sunday"
            currentSelected={selectedButton === "Sunday"}
            handleButton={handleButton}
          />
        </div>
      </div>
      <div className="w-full flex justify-center mb-60">
        <div className="w-full px-8 md:w-[1400px] flex flex-col gap-3">
          {selectedButton === "Monday" && (
            <>
              <ScheduleCard
                classTitle="Running"
                time="7:00am - 8:00am"
                trainer="Amelia Hayes
                "
              />
              <ScheduleCard
                classTitle="Meditation"
                time="10:00am - 11:00am"
                trainer="Marcus Chang"
              />
              <ScheduleCard
                classTitle="Karate"
                time="2:00pm - 3:00pm"
                trainer="Isabella Rodriguez"
              />
              <ScheduleCard
                classTitle="Boxing"
                time="6:00pm - 7:00pm"
                trainer="Oliver Patel
              "
              />
            </>
          )}
          {selectedButton === "Tuesday" && (
            <>
              <ScheduleCard
                classTitle="Yoga"
                time="7:00am - 8:00am"
                trainer="Sophia Nguyen"
              />
              <ScheduleCard
                classTitle="Gymnastics"
                time="10:00am - 11:00am"
                trainer="Jackson O'Malley"
              />
              <ScheduleCard
                classTitle="Karate"
                time="2:00pm - 3:00pm"
                trainer="Lily Christensen"
              />
            </>
          )}
          {selectedButton === "Wednesday" && (
            <>
              <ScheduleCard
                classTitle="Meditation"
                time="7:00am - 8:00am"
                trainer="Elijah Khan"
              />
              <ScheduleCard
                classTitle="Workout"
                time="10:00am - 11:00am"
                trainer="Ava Delgado"
              />
              <ScheduleCard
                classTitle="Boxing"
                time="2:00pm - 3:00pm"
                trainer="Lucas Sullivan"
              />
              <ScheduleCard
                classTitle="Running"
                time="6:00pm - 7:00pm"
                trainer="Mia Johansson"
              />
            </>
          )}
          {selectedButton === "Thursday" && (
            <>
              <ScheduleCard
                classTitle="Workout"
                time="7:00am - 8:00am"
                trainer="Logan Ramirez"
              />
              <ScheduleCard
                classTitle="Boxing"
                time="10:00am - 11:00am"
                trainer="Harper Kim"
              />
              <ScheduleCard
                classTitle="Meditation"
                time="2:00pm - 3:00pm"
                trainer="Benjamin Schmidt"
              />
            </>
          )}
          {selectedButton === "Friday" && (
            <>
              <ScheduleCard
                classTitle="Meditation"
                time="7:00am - 8:00am"
                trainer="Charlotte Alves"
              />
              <ScheduleCard
                classTitle="Running"
                time="10:00am - 11:00am"
                trainer="Emily Lefebvre"
              />
              <ScheduleCard
                classTitle="Gymnastics"
                time="2:00pm - 3:00pm"
                trainer="Grace Ivanova"
              />
              <ScheduleCard
                classTitle="Boxing"
                time="6:00pm - 7:00pm"
                trainer="Mason Dubois"
              />
            </>
          )}
          {selectedButton === "Saturday" && (
            <>
              <ScheduleCard
                classTitle="Boxing"
                time="7:00am - 8:00am"
                trainer="Evelyn Santos"
              />
              <ScheduleCard
                classTitle="Gymnastics"
                time="10:00am - 11:00am"
                trainer="Chloe Leblanc"
              />
              <ScheduleCard
                classTitle="Meditation"
                time="2:00pm - 3:00pm"
                trainer="Samuel Gomez"
              />
            </>
          )}
          {selectedButton === "Sunday" && (
            <>
              <ScheduleCard
                classTitle="Workout"
                time="7:00am - 8:00am"
                trainer="Madison Kowalski"
              />
              <ScheduleCard
                classTitle="Boxing"
                time="10:00am - 11:00am"
                trainer="Aiden Murphy"
              />
              <ScheduleCard
                classTitle="Karate"
                time="2:00pm - 3:00pm"
                trainer="Mia Santoro"
              />
              <ScheduleCard
                classTitle="Meditation"
                time="6:00pm - 7:00pm"
                trainer="Olivia Fischer
              "
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
