import PropTypes from "prop-types";
const DesktopNav = ({ navItems }) => {
  return (
    <ul className="text-white hidden h-full w-full 2xl:flex justify-center items-center gap-7">
      {navItems.map((navItem) => (
        <li
          key={navItem.href}
          className="hover:text-red-700 transition-all duration-500"
        >
          <a href={navItem.href}>{navItem.label}</a>
        </li>
      ))}
    </ul>
  );
};
DesktopNav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
};

export default DesktopNav;
