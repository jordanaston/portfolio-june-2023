import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../components/ProjectContext";

function ProjectTile({ projectId, isDarkMode }) {
  // Determine the mode color based on whether Dark Mode is active or not.
  const modeColor = isDarkMode ? "dark-mode-color" : "light-mode-color";

  // Use the project context to fetch the project data.
  const projectItems = useContext(ProjectContext);

  // Fetch the particular project using the projectId.
  const project = projectItems.find((item) => item.id === projectId);

  // If there is no such project, render nothing.
  if (!project) {
    return null;
  }

  return (
    <div>
      <Link to={`/projects/${projectId}`}>
      <div className={`m-4 w-80 h-60 hover:scale-105 border border-${modeColor} transition-transform duration-200`}>
          {/* Check if the project has an image, if not render 'In Development...' */}
          {project.image ? (
            <img src={project.image} alt="Project Image" />
          ) : (
            <div
              className={`flex justify-center items-center w-80 h-60 font-roboto font-regular`}
            >
              <p>In Development...</p>
            </div>
          )}
        </div>
      </Link>
      {/* Display the project details */}
      <div className="font-roboto font-light">
        <p className="m-5">{project.details}</p>
        <p className="m-5 text-xl">{project.description}</p>
        <p className="m-5 text-md">{project.stack}</p>
      </div>
    </div>
  );
}

export default ProjectTile;
