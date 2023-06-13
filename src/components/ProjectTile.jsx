import React from 'react';

function ProjectTile({ projectDescription, projectDetails, techStack, projectImage }) {
  return (
    <div>
      <div className="flex project-tile m-4 w-80 h-60 items-center justify-center relative">
        {projectImage ? (
          <img src={projectImage} alt="Project Image" />
        ) : (
          <div className="flex items-center w-80 h-60 border-2 font-roboto font-regular justify-center">
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
