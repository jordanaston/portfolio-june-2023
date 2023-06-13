import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Info from './pages/Info'


function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleDarkMode = () => {
    setIsDarkMode(true);
  };

  const handleLightMode = () => {
    setIsDarkMode(false);
  };

  return (
    <div className={isDarkMode ? "bg-light-mode-color min-h-screen" : "bg-dark-mode-color min-h-screen"}>
      <div className={`absolute inset-2 sm:inset-3 md:inset-4 lg:inset-5 border ${isDarkMode ? "border-dark-mode-color" : "border-light-mode-color"}`}>
        <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
          <Route path="/info" element={<Info isDarkMode={isDarkMode} />} />
        </Routes>
        <div className="fixed font-roboto-mono bottom-5 left-7 sm:bottom-6 sm:left-9 md:bottom-7 md:left-10 lg:bottom-8 lg:left-12 lg:text-lg">
          <button
            className={`mr-5 transition-transform hover:scale-110 ${isDarkMode ? "text-dark-mode-color" : "text-light-mode-color"}`}
            onClick={handleLightMode}
          >
            {isDarkMode ? '□' : '■'} light
          </button>
          <button
            className={`transition-transform hover:scale-110 ${isDarkMode ? "text-dark-mode-color" : "text-light-mode-color"}`}
            onClick={handleDarkMode}
          >
            {isDarkMode ? '■' : '□'} dark
          </button>
        </div>
      </div>
    </div>
  );
}

export default App


