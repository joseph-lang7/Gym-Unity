import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ScheduleCard = ({ classTitle, trainer, time }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between h-[400px] md:h-auto p-5 bg-slate-100 rounded-md">
      <div className="flex flex-col flex-1 gap-2 items-center md:items-start">
        <p className="text-xs text-slate-500">Class Name</p>
        <p className="font-bold">{classTitle}</p>
      </div>
      <div className="flex flex-col flex-1 gap-2 items-center">
        <p className="text-xs text-slate-500">Time</p>
        <p className="font-bold">{time}</p>
      </div>
      <div className="flex flex-col flex-1 gap-2 items-center">
        <p className="text-xs text-slate-500">Trainer</p>
        <p className="font-bold">{trainer}</p>
      </div>
      <Link to="/contact">
        <div className="flex justify-center md:justify-start">
          <button className="bg-slate-600 text-white px-6 py-2 border rounded-full cursor-pointer hover:text-white hover:bg-red-700 transition-colors duration-500 font-bold text-sm">
            Join Now
          </button>
        </div>
      </Link>
    </div>
  );
};
ScheduleCard.propTypes = {
  classTitle: PropTypes.string,
  trainer: PropTypes.string,
  time: PropTypes.string,
};

export default ScheduleCard;
