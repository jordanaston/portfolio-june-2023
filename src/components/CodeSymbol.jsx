import React, { useState } from "react";

function CodeSymbol({ isDarkMode }) {
  // Determine the color of the mode based on the passed in prop isDarkMode
  const modeColor = isDarkMode ? "dark-mode-color" : "light-mode-color";

  // A state hook to control the hovered state
  const [isHovered, setIsHovered] = useState(false);

  // Styles for the symbol - changes the scale of the symbol based on hover state
  const symbolStyle = {
    transform: isHovered ? "scale(1.10)" : "scale(1)", // scales the symbol up slightly if it's being hovered 
    transition: "transform 0.1s ease", // smooth transition for the scale change
    cursor: "pointer", // makes the cursor appear as a pointer when hovering over the symbol
    display: "inline-block", // allows the symbol to sit on the same line as other content
  };

  return (
    <div>
      <p
        className={`text-${modeColor} font-roboto font-extra-light text-4xl pl-4 pt-3 sm:pl-6 sm:pt-5 md:pt-4 md:pl-5 lg:pl-6 lg:pt-4`}
        style={symbolStyle} // apply the symbol styles
        onMouseEnter={() => setIsHovered(true)} // when mouse enters, set isHovered to true
        onMouseLeave={() => setIsHovered(false)} // when mouse leaves, set isHovered to false
        // when the symbol is clicked, it opens the specified URL in a new browser tab
        onClick={() =>
          window.open(
            "https://github.com/jordanaston/portfolio-june-2023",
            "_blank"
          )
        }
      >
        &lt; / &gt;
      </p>
    </div>
  );
}

export default CodeSymbol;
