import React, { useState } from "react";

function ProLinks({ isDarkMode }) {
  // Determine the mode color based on whether Dark Mode is active or not.
  const modeColor = isDarkMode ? "dark-mode-color" : "light-mode-color";

  // State to keep track of currently hovered link.
  const [hoveredLink, setHoveredLink] = useState(null);

  // Function to style link based on its path. It changes the style when the link is hovered.
  const linkStyle = (path) => ({
    display: "inline-block",
    transition: "color 0.3s ease, transform 0.3s ease",
    transform: hoveredLink === path ? "scale(1.1)" : "scale(1)",
  });

  return (
    <nav
      className={`text-${modeColor} text-right font-roboto-mono pb-2 pr-4 mt-3 sm:pb-2 sm:pr-4 lg:pb-3 lg:pr-5 lg:text-md`}
    >
      <ul>
        {/* GitHub link with hover effect */}
        <li className="mb-2">
          <a
            href="https://github.com/jordanaston"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("github")}
            onMouseEnter={() => setHoveredLink("github")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            github ➚
          </a>
        </li>
        {/* LinkedIn link with hover effect */}
        <li className="mb-1">
          <a
            href="https://www.linkedin.com/in/jordan-aston-164aab178/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("linkedin")}
            onMouseEnter={() => setHoveredLink("linkedin")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            linkedin ➚
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default ProLinks;
