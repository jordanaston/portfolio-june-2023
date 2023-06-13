import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent';

function Home({ isDarkMode }) {
  return (
    <div className="flex flex-col h-full">
        <Header isDarkMode={isDarkMode} />
        <div className={`${isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color'} flex-grow overflow-auto`}>
            <HomeContent isDarkMode={isDarkMode} />
        </div>
        <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default Home;

