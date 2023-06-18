import React from 'react'
import ProLinks from './ProLinks'


function Footer({ isDarkMode }) {
  return (
    <div className="flex justify-between">
        <div></div>
        <div className="">
            <ProLinks isDarkMode={isDarkMode} />
        </div>
    </div>
  )
}

export default Footer