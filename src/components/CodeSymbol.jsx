import React, { useState } from 'react';

function CodeSymbol({ isDarkMode }) {
  const [isHovered, setIsHovered] = useState(false);

  const symbolStyle = {
    transform: isHovered ? 'scale(1.10)' : 'scale(1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    display: 'inline-block',
  };

  return (
    <div>
      <p
        className={`${isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color'} font-roboto font-extra-light text-4xl pl-4 pt-3 sm:pl-6 sm:pt-5 md:pt-4 md:pl-5 lg:pl-6 lg:pt-4`}
        style={symbolStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open('https://github.com/jordanaston/portfolio-june-2023', '_blank')}
      >
        &lt; / &gt;
      </p>
    </div>
  );
}

export default CodeSymbol;



