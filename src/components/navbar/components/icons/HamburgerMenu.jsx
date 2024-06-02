import PropTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
const HamburgerMenu = ({ setMobileNav }) => {
  return (
    <GiHamburgerMenu
      size={40}
      className="text-white 2xl:hidden hover:text-red-700 duration-200 transition-all cursor-pointer"
      onClick={() => {
        setMobileNav(true);
      }}
    />
  );
};
HamburgerMenu.propTypes = {
  setMobileNav: PropTypes.func,
};

export default HamburgerMenu;
