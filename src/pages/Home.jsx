import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent';

function Home() {
  return (
    <div className="flex flex-col h-full">
        <Header />
        <div className="text-dark-mode-color flex-grow overflow-auto">
            <HomeContent />
        </div>
        <Footer />
    </div>
  )
}

export default Home;

