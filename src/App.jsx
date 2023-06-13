import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Info from './pages/Info'
// import ParticleBackground from './components/ParticleBackground'



function App() {
  return (
    <div className="bg-light-mode-color min-h-screen">
      <div className="absolute inset-5 border border-dark-mode-color p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
