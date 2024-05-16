import { FaRegUser } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import Logo from "./Logo";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import AboutSlidingCard from "./AboutSlidingCard";
import { useEffect } from "react";
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
  const [aboutSection, setAboutSection] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleColorChange = () => {
    if (window.scrollY >= 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleColorChange);

  useEffect(() => {
    if (mobileNav) {
      setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 670);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [mobileNav]);

  return (
    <>
      <div
        className={`${
          mobileNav ? "translate-x-0" : "translate-x-[-200vw]"
        } text-black fixed text-2xl h-screen w-screen flex flex-col justify-center items-center gap-7 bg-slate-100 transition-transform duration-700 z-50 ease-in-out`}
      >
        <BiX
          size={40}
          className="text-black hover:text-red-700 duration-200 transition-transform cursor-pointer fixed top-5 right-5 z-50 "
          onClick={() => {
            setMobileNav(false);
            document.body.style.overflow = "scroll";
          }}
        />
        <ul className="text-black fixed text-2xl h-full w-full flex flex-col justify-center items-center gap-7 bg-slate-100 transition-all duration-700">
          {navItems.map((navItem) => (
            <li key={navItem.href}>
              <a href={navItem.href}>{navItem.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <nav
        className={`${
          isScrolled
            ? "bg-black w-screen fixed px-5 py-5 flex justify-between items-center gap-3 transition-colors duration-500 z-50"
            : "bg-transparent w-screen fixed px-5 py-5 flex justify-between items-center gap-3 transition-colors duration-500 z-50"
        }`}
      >
        <Logo color="text-white" />
        <div className="flex items-center gap-5">
          <GiHamburgerMenu
            size={40}
            className="text-white hover:text-red-700 duration-200 transition-all cursor-pointer"
            onClick={() => {
              setMobileNav(true);
              document.body.style.overflow = "hidden";
            }}
          />

          <FaRegUser
            className="text-white hover:text-red-700 duration-200 cursor-pointer"
            size={30}
          />
          <FaChartBar
            className="text-white hover:text-red-700 duration-200 cursor-pointer"
            size={30}
            onClick={() => {
              setAboutSection(!aboutSection);
            }}
          />
          <div className="cursor-pointer pl-2 h-[65px] w-[250px] border border-white justify-start items-center gap-2 rounded-md hidden md:flex">
            <div className="transform hover:rotate-360 transition duration-700 ease-in-out h-[45px] w-[45px] bg-red-700 flex justify-center items-center rounded-md">
              <FiPlus className="text-white" size={25} />
            </div>
            <p className="text-white font-bold">Join Class Now</p>
          </div>
        </div>
      </nav>
      <AboutSlidingCard
        handleClose={() => setAboutSection(false)}
        isVisible={aboutSection}
      />
    </>
  );
};

export default Navbar;
