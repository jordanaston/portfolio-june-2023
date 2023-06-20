import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenuDark from "../assets/mobile-menu-dark.png";
import MobileMenuLight from "../assets/mobile-menu-light.png";

// This component represents a mobile menu.
function MobileMenu({ isDarkMode }) {
  // The color mode of the mobile menu is determined by the isDarkMode prop.
  const modeColor = isDarkMode ? "dark-mode-color" : "light-mode-color";

  // The isOpen state variable is used to control the visibility of the mobile menu.
  const [isOpen, setIsOpen] = useState(false);

  // The handleClick function toggles the visibility of the mobile menu.
  const handleClick = () => setIsOpen(!isOpen);

  // Styling for the links in the mobile menu.
  const linkStyles = {
    fontSize: "1.5rem",
    transition: "font-size 0.3s",
  };

  // Additional styling for the links in the mobile menu when they're hovered over.
  const linkHoverStyles = {
    fontSize: "1.7rem",
  };

  return (
    <div className="relative">
      {/* This button handles the opening and closing of the mobile menu. */}
      <button onClick={handleClick}>
        <img
          src={isDarkMode ? MobileMenuDark : MobileMenuLight}
          alt="Mobile Menu Image"
          className="w-16 pt-1 mr-1 sm:pt-3 sm:mr-3"
        />
      </button>

      {/* The mobile menu itself, which is either displayed or hidden depending on the state of isOpen. */}
      <div
        className={`
          fixed inset-0 flex items-center justify-start z-50 transition-transform duration-300 
          ${isDarkMode ? "bg-light-mode-color" : "bg-dark-mode-color"} 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* This div contains a button that can close the mobile menu. */}
        <div className="absolute top-0 right-0 h-full p-4 flex flex-col font-roboto-mono font-extra-light items-end">
          <button
            onClick={handleClick}
            className={`text-3xl text-${modeColor}`}
          >
            X
          </button>
        </div>

        {/* The list of links in the mobile menu. */}
        <ul
          className={`flex flex-col items-start ml-4 font-roboto-mono font-extra-light justify-center h-full space-y-10 text-${modeColor}`}
        >
          <li>
            <Link
              to="/"
              onClick={handleClick}
              className="block text-5xl ml-2"
              style={linkStyles}
              onMouseOver={(e) => {
                e.target.style.fontSize = linkHoverStyles.fontSize;
              }}
              onMouseOut={(e) => {
                e.target.style.fontSize = linkStyles.fontSize;
              }}
            >
              ■ Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={handleClick}
              className="block text-5xl ml-2"
              style={linkStyles}
              onMouseOver={(e) => {
                e.target.style.fontSize = linkHoverStyles.fontSize;
              }}
              onMouseOut={(e) => {
                e.target.style.fontSize = linkStyles.fontSize;
              }}
            >
              ■ Projects
            </Link>
          </li>
          <li>
            <Link
              to="/info"
              onClick={handleClick}
              className="block text-5xl ml-2"
              style={linkStyles}
              onMouseOver={(e) => {
                e.target.style.fontSize = linkHoverStyles.fontSize;
              }}
              onMouseOut={(e) => {
                e.target.style.fontSize = linkStyles.fontSize;
              }}
            >
              ■ Info
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
