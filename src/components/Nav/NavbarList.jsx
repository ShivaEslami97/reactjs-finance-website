import React from "react";

const NavbarList = ({ ulStyles, liStyles }) => {
  return (
    <ul className={`capitalize ${ulStyles}`}>
      <li className={`nav-item ${liStyles}`}>Home</li>
      <li className={`nav-item ${liStyles}`}>Company</li>
      <li className={`nav-item ${liStyles}`}>Resources</li>
      <li className={`nav-item ${liStyles}`}>About</li>
      <li className={`nav-item ${liStyles}`}>Contact</li>
    </ul>
  );
};

export default NavbarList;
