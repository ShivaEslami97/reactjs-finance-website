import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileNavbar from "./MobileNavbar";
import NavbarList from "./NavbarList";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="h-[20vh]">
      <nav className="container text-white flex justify-between items-center px-4 mx-auto h-24">
        <h1 className="w-full text-3xl font-bold text-primary">Finacia.</h1>
        <NavbarList ulStyles="hidden gap-12 md:flex" liStyles="" />
        <div onClick={handleNav} className="cursor-pointer block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <MobileNavbar nav={nav} screenWidth={screenWidth} />
      </nav>
    </header>
  );
};

export default Navbar;
