import React from 'react'
import CodeSymbol from './CodeSymbol'
import TopNavBar from './TopNavBar'
import MobileMenu from './MobileMenu'

function Header() {
  return (
    <div>
        <div className="flex justify-between text-dark-mode-color">
            <CodeSymbol />
            <div className="md:hidden">
                <MobileMenu />
            </div>
            <div className="hidden md:block">
                <TopNavBar />
            </div>
        </div>
    </div>
  )
}

export default Header