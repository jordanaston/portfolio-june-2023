import React from 'react'
import ProLinks from './ProLinks'

function Footer({ isDarkMode }) {
  return (
    <div className="flex justify-between">
        {/* This empty <div> is used as a spacer in the flex container, 
            it helps in achieving the desired layout by pushing the ProLinks 
            to the right side of the footer. */}
        <div></div>
        <div>
            <ProLinks isDarkMode={isDarkMode} />
        </div>
    </div>
  )
}

export default Footer

