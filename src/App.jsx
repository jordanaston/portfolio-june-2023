import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Info from "./pages/Info";
import ProjectDetails from "./components/ProjectDetails";
import ParticleBackground from "./components/ParticleBackground";
import ProjectContext from "./components/ProjectContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleDarkMode = () => {
    setIsDarkMode(true);
  };

  const handleLightMode = () => {
    setIsDarkMode(false);
  };

  const modeColor = isDarkMode ? "dark-mode-color" : "light-mode-color";

  return (
    <ProjectContext.Provider value={ProjectContext._currentValue}>
      <div
        className={
          isDarkMode
            ? "bg-light-mode-color min-h-screen"
            : "bg-dark-mode-color min-h-screen"
        }
      >
        <ParticleBackground isDarkMode={isDarkMode} />

        <div
          className={`absolute inset-2 sm:inset-3 md:inset-4 lg:inset-5 border border-${modeColor}`}
        >
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

          <div className="fixed font-roboto-mono bottom-5 left-7 sm:bottom-6 sm:left-9 md:bottom-7 md:left-10 lg:bottom-8 lg:left-10 text-sm">
            <button
              className={`mr-5 transition-transform hover:scale-110 text-${modeColor}`}
              onClick={handleLightMode}
            >
              {isDarkMode ? "□" : "■"} light
            </button>

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

export default App;
