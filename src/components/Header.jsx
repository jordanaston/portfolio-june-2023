import React from "react";
import CodeSymbol from "./CodeSymbol";
import TopNavBar from "./TopNavBar";
import MobileMenu from "./MobileMenu";

function Header({ isDarkMode }) {
  return (
    <div>
      <div className="flex justify-between">
        <CodeSymbol isDarkMode={isDarkMode} />
        <div className="md:hidden">
          <MobileMenu isDarkMode={isDarkMode} />
        </div>
        <div className="hidden md:block">
          <TopNavBar isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default Header;
