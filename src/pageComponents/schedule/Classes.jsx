import ScheduleCard from "../../components/ScheduleCard";
import PropTypes from "prop-types";
const Classes = ({ selectedButton }) => {
  return (
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
  );
};
Classes.propTypes = {
  selectedButton: PropTypes.string,
};

export default Classes;
