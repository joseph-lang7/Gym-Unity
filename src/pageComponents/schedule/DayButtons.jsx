import DayButton from "../../components/DayButton";
import PropTypes from "prop-types";
const DayButtons = ({ selectedButton, handleButton }) => {
  return (
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
  );
};
DayButtons.propTypes = {
  selectedButton: PropTypes.string,
  handleButton: PropTypes.func,
};

export default DayButtons;
