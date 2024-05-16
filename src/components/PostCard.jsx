import Button from "./Button";
import PropTypes from "prop-types";
const PostCard = ({ date, title, description }) => {
  return (
    <div className="border-2 w-[340px] xs:w-[380px] sm:w-[450px] h-auto shadow-xl">
      <div className="w-full h-full py-12 px-5">
        <div className="p-2 border-[1px] text-xs border-black rounded-full w-[150px] mb-5">
          <p className="text-center font-bold">{date}</p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-xl">{title}</h4>
          <p className="text-slate-500 text-xs">{description}</p>
          <Button
            bgColor="bg-red-700"
            textColor="text-white"
            content="Read More"
            width="w-[190px]"
          />
        </div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PostCard;
