import PropTypes from "prop-types";
export const RecentBlogPost = ({ src, alt, date, title }) => {
  return (
    <div className="w-full flex h-auto gap-5 items-center">
      <div className="flex-1 w-full">
        <img className="object-cover w-full h-[110px]" src={src} alt={alt} />
      </div>
      <div className="flex-[3] flex flex-col gap-1">
        <p className="text-slate-500 text-xs">{date}</p>
        <h5 className="font-bold">{title}</h5>
      </div>
    </div>
  );
};

RecentBlogPost.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
};
