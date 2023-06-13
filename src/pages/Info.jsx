import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent';

function Info() {
    return (
      <div className="flex flex-col h-full">
          <Header />
          <div className="text-dark-mode-color flex-grow overflow-auto">
            
          </div>
          <Footer />
      </div>
    )
  }

export default Info