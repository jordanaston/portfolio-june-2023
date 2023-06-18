import React from 'react';
import { Link } from 'react-router-dom';

function ProjectTile({ projectId, projectDescription, projectDetails, techStack, projectImage, isDarkMode }) {
  return (
    <div>
      <Link to={`/projects/${projectId}`}>
        <div className="m-4 w-80 h-60 hover:opacity-75 transition-opacity duration-200">
          {projectImage ? (
            <img src={projectImage} alt="Project Image" />
          ) : (
            <div className={`flex justify-center items-center border w-80 h-60 font-roboto font-regular ${isDarkMode ? 'border-dark-mode-color' : 'border-light-mode-color'}`}>
              <p>In Development...</p>
            </div>
          )}
        </div>
      </Link>
      <div className="font-roboto font-light">
        <p className="m-5">{projectDetails}</p>
        <p className="m-5 text-xl">{projectDescription}</p>
        <p className="m-5 text-md">{techStack}</p>
      </div>
    </div>
  );
}

export default ProjectTile;

