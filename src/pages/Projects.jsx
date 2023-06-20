import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectTile from "../components/ProjectTile";
import ProjectContext from "../components/ProjectContext";

function Projects({ isDarkMode }) {
  // Using the useContext Hook to get the context value from ProjectContext
  const projectItems = useContext(ProjectContext);

  // Determine the text color based on whether Dark Mode is active or not.
  const modeColor = isDarkMode ? "dark-mode-color" : "light-mode-color";

  return (
    // The outer container is a flex box that houses the header, main content, and footer
    <div className="flex flex-col h-full">
      {/* The Header component is rendered with the isDarkMode prop */}
      <Header isDarkMode={isDarkMode} />

      {/* Main content area styled based on whether dark mode is enabled */}
      <div
        className={`text-${modeColor} flex-grow overflow-auto md:mt-12 lg:mt-20`}
      >
        {/* The title of the page is "Recent Work" */}
        <h1 className="text-center text-xl font-roboto-mono font-light my-5">
          Recent Work
        </h1>

        {/* The list of project items is rendered here using the map function */}
        <div className="flex flex-wrap justify-center items-center">
          {projectItems.map((project, index) => (
            // The ProjectTile component is rendered for each project with the necessary props
            <ProjectTile
              key={index}
              isDarkMode={isDarkMode}
              projectId={project.id}
              projectDetails={project.details}
              projectDescription={project.description}
              techStack={project.stack}
              projectImage={project.image}
            />
          ))}
        </div>
      </div>

      {/* The Footer component is rendered with the isDarkMode prop */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default Projects;
