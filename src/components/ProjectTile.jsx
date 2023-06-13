import React from 'react';

function ProjectTile({ projectDescription, projectDetails, techStack, projectImage, isDarkMode }) {
  return (
    <div>
      <div className="m-4 w-80 h-60">
        {projectImage ? (
          <img src={projectImage} alt="Project Image" />
        ) : (
          <div className={`flex justify-center items-center border w-80 h-60 font-roboto font-regular ${isDarkMode ? 'border-dark-mode-color' : 'border-light-mode-color'}`}>
            <p>In Development...</p>
          </div>
        )}
      </div>
      <div className="font-roboto font-light">
        <p className="m-5">{projectDetails}</p>
        <p className="m-5 text-xl">{projectDescription}</p>
        <p className="m-5 text-md">{techStack}</p>
      </div>
    </div>
  );
}

export default ProjectTile;
