import React, { useState } from 'react';

function ProLinks() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const linkStyle = (path) => ({
    display: 'inline-block',
    transition: 'color 0.3s ease, transform 0.3s ease',
    transform: hoveredLink === path ? 'scale(1.1)' : 'scale(1)',
  });

  return (
    <nav className="text-dark-mode-color font-roboto-mono sm:pb-2 sm:pr-2 lg:mr-5 lg:mb-3">
      <ul>
        <li className="lg:text-lg lg:mb-2">
          <a 
            href="https://github.com/jordanaston" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={linkStyle('github')}
            onMouseEnter={() => setHoveredLink('github')} 
            onMouseLeave={() => setHoveredLink(null)}
          >
            github ➚
          </a> 
        </li>
        <li className="lg:text-lg">
          <a 
            href="https://www.linkedin.com/in/jordan-aston-164aab178/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={linkStyle('linkedin')}
            onMouseEnter={() => setHoveredLink('linkedin')} 
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


