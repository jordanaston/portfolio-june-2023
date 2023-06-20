import React from "react";

function HomeContent() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col items-start justify-center">
        <h1 className="font-capture-waves text-5xl mb-5 sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl">
          Hi, I'm <br />
          <span className="whitespace-nowrap">Jordan Aston.</span>
        </h1>
        <div>
          <p className="font-roboto-mono font-light leading-[1.8] text-sm md:text-md lg:text-lg">
            I'm an emerging developer from Brisbane, Australia, passionate about
            building dynamic and intuitive web applications.
            <br />
            <br />
            Here you'll find a selection of my most recent work, projects I've
            built with dedication and a love for development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
