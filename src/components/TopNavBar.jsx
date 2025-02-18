import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function TopNavBar({ isDarkMode }) {
  const modeColor = isDarkMode ? "dark-mode-color" : "light-mode-color";

  const location = useLocation();

  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = (path) => ({
    display: "inline-block",
    // paddingBottom: "0.3px",
    borderBottom: location.pathname === path ? "1px solid" : "none",
    transform:
      hoveredLink === path && location.pathname !== path
        ? "scale(1.12)"
        : "scale(1)",
    transition: "color 0.3s ease, transform 0.1s ease",
  });

  return (
    <div
      className={`text-${modeColor} text-sm md:mt-4 md:mr-5 lg:mr-5 lg:mt-4 md:font-light`}
    >
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            style={linkStyle("/")}
            onMouseEnter={() => setHoveredLink("/")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            style={linkStyle("/projects")}
            onMouseEnter={() => setHoveredLink("/projects")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            to="/info"
            style={linkStyle("/info")}
            onMouseEnter={() => setHoveredLink("/info")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            info
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TopNavBar;
