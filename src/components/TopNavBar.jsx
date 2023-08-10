import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function TopNavBar({ isDarkMode }) {
  // Determine the mode color based on whether Dark Mode is active or not.
  const modeColor = isDarkMode ? "dark-mode-color" : "light-mode-color";

  // Use location hook from react-router-dom to get the current path.
  const location = useLocation();

  // State to keep track of currently hovered link.
  const [hoveredLink, setHoveredLink] = useState(null);

  // Function to style link based on its path. It changes the style when the link is active or hovered.
  const linkStyle = (path) => ({
    display: "inline-block",
    paddingBottom: "0.3px",
    borderBottom: location.pathname === path ? "1px solid" : "none",
    transform:
      hoveredLink === path && location.pathname !== path
        ? "scale(1.12)"
        : "scale(1)",
    transition: "color 0.3s ease, transform 0.1s ease",
  });

  return (
    <div
      className={`text-${modeColor} text-xl md:mt-4 md:mr-5 lg:mr-7 lg:mt-4 lg:text-xl md:font-light`}
    >
      <ul className="flex space-x-6">
        {/* Links to different routes with their styles being dynamically set */}
        <li>
          <Link
            to="/"
            style={linkStyle("/")}
            onMouseEnter={() => setHoveredLink("/")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            style={linkStyle("/projects")}
            onMouseEnter={() => setHoveredLink("/projects")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/info"
            style={linkStyle("/info")}
            onMouseEnter={() => setHoveredLink("/info")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Info
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TopNavBar;
