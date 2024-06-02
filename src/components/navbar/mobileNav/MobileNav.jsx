import PropTypes from "prop-types";
import { X } from "../components/icons";
const MobileNav = ({ navItems, mobileNav, setMobileNav }) => {
  return (
    <div
      className={`${
        mobileNav ? "translate-x-0" : "translate-x-[-100%]"
      } text-black fixed text-2xl h-screen w-full max-w-full flex flex-col justify-center items-center gap-7 bg-slate-100 transition-all duration-700 z-50`}
    >
      <X setMobileNav={setMobileNav} />
      <ul className="text-black text-2xl h-full w-full flex flex-col justify-center items-center gap-7 bg-slate-100 transition-all duration-700">
        {navItems.map((navItem) => (
          <li key={navItem.href}>
            <a href={navItem.href}>{navItem.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

MobileNav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
  mobileNav: PropTypes.bool,
  setMobileNav: PropTypes.func,
};

export default MobileNav;
