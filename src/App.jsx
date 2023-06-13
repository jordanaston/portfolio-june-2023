import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Info from './pages/Info'


function App() {
  return (
    <div className="bg-light-mode-color min-h-screen">
      <div className="absolute inset-2 sm:inset-3 md:inset-4 lg:inset-5 border border-dark-mode-color">
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
