// Header.jsx
import React from "react";

const Header = ({ isFixed, showHeader }) => {
  const fixedHeaderClasses = `fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-10 bg-violet-900 bg-opacity-25 shadow-lg transition-transform duration-300 ${
    showHeader ? "translate-y-0" : "-translate-y-full"
  }`;

  const staticHeaderClasses =
    "absolute top-0 left-0 right-0 flex justify-between items-center p-4";

  const className = isFixed ? fixedHeaderClasses : staticHeaderClasses;

  return (
    <div className={className}>
      <div className="text-xl font-bold sm:text-2xl">Matas G.</div>
      <div className="flex gap-5 font-bold">
        <a
          href="#home"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#contacts"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Contacts
        </a>
        <a
          href="#projects"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          Projects
        </a>
      </div>
    </div>
  );
};

export default Header;
