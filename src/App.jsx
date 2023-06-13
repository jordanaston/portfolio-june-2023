import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Info from './pages/Info'


function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [buttonTextColor, setButtonTextColor] = useState('text-dark-mode-color');
  const [borderColor, setBorderColor] = useState('border-dark-mode-color');

  const handleDarkMode = () => {
    setIsDarkMode(true);
    setButtonTextColor('text-dark-mode-color');
    setBorderColor('border-dark-mode-color');
  };

  const handleLightMode = () => {
    setIsDarkMode(false);
    setButtonTextColor('text-light-mode-color');
    setBorderColor('border-light-mode-color');
  };

  return (
    <div className="bg-light-mode-color min-h-screen">
      <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-5 border border-dark-mode-color">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <div className="fixed font-roboto-mono bottom-5 left-7 sm:bottom-6 sm:left-9 md:bottom-7 md:left-10 lg:bottom-8 lg:left-12 lg:text-lg">
          <button
            className={`${buttonTextColor} mr-5 transition-transform hover:scale-110`}
            onClick={handleLightMode}
          >
            {isDarkMode ? '□' : '■'} light
          </button>
          <button
            className={`${buttonTextColor} transition-transform hover:scale-110`}
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
