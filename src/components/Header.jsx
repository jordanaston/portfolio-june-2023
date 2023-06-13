import React from 'react'
import CodeSymbol from './CodeSymbol'
import TopNavBar from './TopNavBar'

function Header() {
  return (
    <div>
        <div className="flex justify-between text-dark-mode-color border border-dark-mode-color">
            <CodeSymbol />
            <TopNavBar />
        </div>
    </div>
  )
}

export default Header