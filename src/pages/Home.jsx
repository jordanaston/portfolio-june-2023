import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent';

function Home({ isDarkMode }) {

  const modeColor = isDarkMode ? 'dark-mode-color' : 'light-mode-color';

  return (
    <div className="flex flex-col h-full">
        <Header isDarkMode={isDarkMode} />
        <div className={`text-${modeColor} flex-grow overflow-auto`}>
            <HomeContent isDarkMode={isDarkMode} />
        </div>
        <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default Home;

