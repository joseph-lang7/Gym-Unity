import PropTypes from "prop-types";
import { FaChartBar } from "react-icons/fa6";

const BarChart = ({ setAboutSection, aboutSection }) => {
  return (
    <FaChartBar
      className="text-white hover:text-red-700 duration-200 cursor-pointer"
      size={30}
      onClick={() => {
        setAboutSection(!aboutSection);
      }}
    />
  );
};
BarChart.propTypes = {
  setAboutSection: PropTypes.func,
  aboutSection: PropTypes.bool,
};

export default BarChart;
