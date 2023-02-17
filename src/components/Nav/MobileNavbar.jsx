import React from "react";
import NavbarList from "./NavbarList";

const MobileNavbar = ({ nav, screenWidth }) => {
  console.log(nav, screenWidth);
  const menuIsShow = !nav || screenWidth > 800 ? "menu-hide" : "menu-show";
  return (
    <div className={`menu ${menuIsShow}`}>
      <h1 className="w-full text-3xl font-bold m-4 text-primary">Finacia.</h1>
      <NavbarList
        ulStyles="p-4"
        liStyles="border-b py-3 border-gray-600 after:content-none"
      />
    </div>
  );
};

export default MobileNavbar;
