import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="flex flex-col justify-center py-2 font-modak text-lg md:text-2xl">
        {links.map((link, index) => (
          <li key={index} className="md:mx-2">
            <NavLink href={link.path} title={link.title} imgSrc={link.imgSrc} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuOverlay;
