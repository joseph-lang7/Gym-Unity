import PropTypes from "prop-types";
const PopularTag = ({ tag }) => {
  return (
    <div className="bg-white text-slate-600 p-2 w-max ">
      <p>#{tag}</p>
    </div>
  );
};
PopularTag.propTypes = {
  tag: PropTypes.string,
};
export default PopularTag;
