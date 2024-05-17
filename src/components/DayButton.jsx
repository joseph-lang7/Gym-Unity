import PropTypes from "prop-types";
const DayButton = ({ day, currentSelected, handleButton }) => {
  return (
    <button
      onClick={() => handleButton(day)}
      className={`${
        currentSelected
          ? "bg-red-700 text-white px-6 py-1 border rounded-full cursor-pointer hover:text-white hover:bg-red-700 transition-colors duration-500 font-bold text-sm"
          : "px-6 py-1 border rounded-full cursor-pointer hover:text-white hover:bg-red-700 transition-colors duration-500 font-bold text-sm"
      }`}
    >
      {day}
    </button>
  );
};

DayButton.propTypes = {
  day: PropTypes.string,
  currentSelected: PropTypes.bool,
  handleButton: PropTypes.func,
};

export default DayButton;
