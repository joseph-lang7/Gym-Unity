import { BiX } from "react-icons/bi";
import PropTypes from "prop-types";
const X = ({ setMobileNav }) => {
  return (
    <BiX
      size={40}
      className="text-black hover:text-red-700 duration-200 transition-transform cursor-pointer fixed top-5 right-5 z-50 "
      onClick={() => {
        setMobileNav(false);
      }}
    />
  );
};
X.propTypes = {
  setMobileNav: PropTypes.func,
};

export default X;
