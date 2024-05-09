import { FaRegUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import Logo from "./Logo";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Schedule", href: "/schedule" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "Classes", href: "/classes" },
    { label: "Contact", href: "/contact" },
  ];

  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      {mobileNav && (
        <>
          <BiX
            size={40}
            className="text-black hover:text-red-700 duration-200 transition-all absolute top-5 right-5 cursor-pointer"
            onClick={() => {
              setMobileNav(false);
            }}
          />

          <ul
            className={`${
              mobileNav ? "top-0" : "top-[-200vh] "
            } text-black text-2xl h-screen flex flex-col justify-center items-center gap-7 bg-slate-100 duration-700`}
          >
            {navItems.map((navItem) => (
              <li key={navItem.href}>
                <a href={navItem.href}>{navItem.label}</a>
              </li>
            ))}
          </ul>
        </>
      )}
      {!mobileNav && (
        <nav className="max-w-screen bg-transparent px-5 py-5 flex justify-between items-center gap-3">
          <Logo color="white" />
          <div className="flex items-center gap-5">
            <GiHamburgerMenu
              size={40}
              className="text-white hover:text-red-700 duration-200 transition-all"
              onClick={() => {
                setMobileNav(true);
              }}
            />

            <FaRegUser
              className="text-white hover:text-red-700 duration-200"
              size={30}
            />
            <FaChartBar
              className="text-white hover:text-red-700 duration-200"
              size={30}
            />
            <div className="cursor-pointer pl-2 h-[65px] w-[250px] border border-white justify-start items-center gap-2 rounded-md hidden md:flex">
              <div className="transform hover:rotate-360 transition duration-700 ease-in-out h-[45px] w-[45px] bg-red-700 flex justify-center items-center rounded-md">
                <FiPlus className="text-white" size={25} />
              </div>
              <p className="text-white font-bold">Join Class Now</p>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
