import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Info from "./pages/Info";
import ProjectDetails from "./components/ProjectDetails";
import ParticleBackground from "./components/ParticleBackground";
import ProjectContext from "./components/ProjectContext";

function App() {
  // State variable for managing theme
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Handlers for setting theme mode
  const handleDarkMode = () => {
    setIsDarkMode(true);
  };

  const handleLightMode = () => {
    setIsDarkMode(false);
  };

  // Determine the mode color based on whether Dark Mode is active or not.
  const modeColor = isDarkMode ? "dark-mode-color" : "light-mode-color";

  return (
    // Wrapping app with project context
    <ProjectContext.Provider value={ProjectContext._currentValue}>
      {/* Theme color is applied based on `isDarkMode` state */}
      <div
        className={
          isDarkMode
            ? "bg-light-mode-color min-h-screen"
            : "bg-dark-mode-color min-h-screen"
        }
      >
        {/* Background particles, mode is determined by `isDarkMode` state */}
        <ParticleBackground isDarkMode={isDarkMode} />

        {/* Container for Routes */}
        <div
          className={`absolute inset-2 sm:inset-3 md:inset-4 lg:inset-5 border border-${modeColor}`}
        >
          {/* Routing for different pages of the app */}
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route
              path="/projects"
              element={<Projects isDarkMode={isDarkMode} />}
            />
            <Route
              path="/projects/:id"
              element={<ProjectDetails isDarkMode={isDarkMode} />}
            />
            <Route path="/info" element={<Info isDarkMode={isDarkMode} />} />
          </Routes>

          {/* Theme switcher */}
          <div className="fixed font-roboto-mono bottom-5 left-7 sm:bottom-6 sm:left-9 md:bottom-7 md:left-10 lg:bottom-8 lg:left-12 lg:text-lg">
            {/* Light theme switcher */}
            <button
              className={`mr-5 transition-transform hover:scale-110 text-${modeColor}`}
              onClick={handleLightMode}
            >
              {isDarkMode ? "□" : "■"} light
            </button>

            {/* Dark theme switcher */}
            <button
              className={`mr-5 transition-transform hover:scale-110 text-${modeColor}`}
              onClick={handleDarkMode}
            >
              {isDarkMode ? "■" : "□"} dark
            </button>
          </div>
        </div>
      </div>
    </ProjectContext.Provider>
  );
}

// Exporting App component as default
export default App;
