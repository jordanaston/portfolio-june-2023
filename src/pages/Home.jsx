import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";

function Home({ isDarkMode }) {
  // Determine the mode color based on whether Dark Mode is active or not.
  const modeColor = isDarkMode ? "dark-mode-color" : "light-mode-color";

  return (
    <div className="flex flex-col h-full">
      {/* Header component with a prop to determine its color mode */}
      <Header isDarkMode={isDarkMode} />

      <div className={`text-${modeColor} flex-grow overflow-auto`}>
        {/* HomeContent component with a prop to determine its color mode */}
        <HomeContent isDarkMode={isDarkMode} />
      </div>

      {/* Footer component with a prop to determine its color mode */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default Home;
