import { BsStack } from "react-icons/bs";
import Button from "../../../components/button/Button";
import PropTypes from "prop-types";
const BlogCard = ({ src, alt, date, category, title }) => {
  return (
    <div className="pb-14">
      <div className="flex flex-col w-auto h-auto gap-3">
        <img
          className="object-cover max-h-[600px] w-full"
          src={src}
          alt={alt}
        />

        <div className="flex flex-col gap-5">
          <div className="flex gap-1">
            <BsStack className="text-red-700" />
            <p className="text-xs text-slate-500">
              By <span className="font-bold text-slate-600">Admin</span> |{" "}
              {date} | {category}{" "}
            </p>
          </div>
          <h4 className="font-bold text-4xl ">{title}</h4>
          <p className="text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            similique, sapiente nihil dolor soluta fugiat nostrum? Vero saepe
            minus id beatae earum recusandae atque, aspernatur nihil quasi
            perferendis sapiente deleniti?
          </p>
          <Button
            bgColor="bg-red-700"
            textColor="text-white"
            content="Read Now"
            width="w-[190px]"
          />
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
};

export default BlogCard;
