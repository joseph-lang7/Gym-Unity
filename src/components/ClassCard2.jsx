import Button from "./Button";
import { FaRegClock } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ClassCard2 = ({ classTitle, instructor, time, image, alt }) => {
  return (
    <div className="w-full h-[500px] rounded-lg relative">
      <img
        className="object-cover w-full h-full brightness-[70%]"
        src={`/gymPhotos/${image}`}
        alt={alt}
      />
      <div className="absolute bottom-10 left-10 brightness-100">
        <div className="flex flex-col w-max text-white">
          <h4 className="font-bold text-3xl">{classTitle}</h4>
          <span className="w-1/2 h-[5px] my-3 bg-red-700 "></span>
        </div>
        <div className="flex gap-2 text-white mb-3">
          <div className="flex gap-1 items-center text-slate-100 flex-wrap">
            <IoPersonOutline />
            <p>{instructor}</p>
          </div>
          <div className="flex gap-1 items-center text-slate-100 flex-wrap">
            <FaRegClock />
            <p>{time}</p>
          </div>
        </div>
        <Link to="/contact">
          <Button
            bgColor="bg-white"
            textColor="text-black"
            content="Join Now"
            width="w-[170px]"
          />
        </Link>
      </div>
    </div>
  );
};

ClassCard2.propTypes = {
  classTitle: PropTypes.string,
  instructor: PropTypes.string,
  time: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default ClassCard2;
