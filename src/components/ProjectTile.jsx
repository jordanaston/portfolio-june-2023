import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../components/ProjectContext';

function ProjectTile({ projectId, isDarkMode }) {

  const modeColor = isDarkMode ? 'dark-mode-color' : 'light-mode-color';

  const projectItems = useContext(ProjectContext);
  const project = projectItems.find((item) => item.id === projectId);

  if (!project) {
    return null;
  }

  return (
    <div>
      <Link to={`/projects/${projectId}`}>
        <div className="m-4 w-80 h-60 hover:opacity-75 transition-opacity duration-200">
          {project.image ? (
            <img src={project.image} alt="Project Image" />
          ) : (
            <div className={`flex justify-center items-center border w-80 h-60 font-roboto font-regular border-${modeColor}`}>
              <p>In Development...</p>
            </div>
          )}
        </div>
      </Link>
      <div className="font-roboto font-light">
        <p className="m-5">{project.details}</p>
        <p className="m-5 text-xl">{project.description}</p>
        <p className="m-5 text-md">{project.stack}</p>
      </div>
    </div>
  );
}

export default ProjectTile;


