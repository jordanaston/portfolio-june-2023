import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Info({ isDarkMode }) {
    return (
      <div className="flex flex-col h-full">
          <Header isDarkMode={isDarkMode} />
          <div className="text-dark-mode-color flex-grow overflow-auto">

          </div>
          <Footer isDarkMode={isDarkMode} />
      </div>
    )
  }

export default Info