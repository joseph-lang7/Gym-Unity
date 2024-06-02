import { useState } from "react";
import { Link } from "react-router-dom";
import { AboutSlidingCard, Logo } from "..";
import MobileNav from "./mobileNav/MobileNav";
import DesktopNav from "./desktopNav/DesktopNav";
import { User, BarChart, HamburgerMenu } from "./components/icons";
import JoinClassButton from "./components/joinClassButton/JoinClassButton";
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

  return (
    <>
      <MobileNav
        navItems={navItems}
        setMobileNav={setMobileNav}
        mobileNav={mobileNav}
      />
      <nav
        className={`${
          isScrolled
            ? "bg-black max-w-full w-full fixed px-5 py-5 flex justify-between items-center gap-3 transition-colors duration-500 z-30"
            : "bg-transparent max-w-full w-full fixed px-5 py-5 flex justify-between items-center gap-3 transition-colors duration-500 z-30"
        }`}
      >
        <Link to="/" className="w-[200px]">
          <Logo color="text-white" />
        </Link>
        <DesktopNav navItems={navItems} />
        <div className="flex items-center gap-5">
          <HamburgerMenu setMobileNav={setMobileNav} />
          <User />
          <BarChart
            setAboutSection={setAboutSection}
            aboutSection={aboutSection}
          />
          <JoinClassButton />
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
