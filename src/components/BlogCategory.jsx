import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";
const BlogCategory = ({ title, amount }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between cursor-pointer hover:text-red-700 transition-all duration-300 text-sm text-slate-600">
        <div className="flex gap-2 items-center">
          <MdKeyboardArrowRight size={25} />
          <p>{title}</p>
        </div>
        <p>({amount})</p>
      </div>
      <span className="w-full h-[1px] bg-slate-600 mt-3"></span>
    </div>
  );
};

BlogCategory.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
};

export default BlogCategory;
