import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectTile from '../components/ProjectTile';
import ProjectContext from '../components/ProjectContext';

function Projects({ isDarkMode }) {
  const projectItems = useContext(ProjectContext);

  return (
    <div className="flex flex-col h-full">
      <Header isDarkMode={isDarkMode} />
      <div className={`${isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color'} flex-grow overflow-auto md:mt-12 lg:mt-20`}>
        <h1 className="text-center text-xl font-roboto-mono font-light my-5">Recent Work</h1>
        <div className="flex flex-wrap justify-center items-center">
          {projectItems.map((project, index) => (
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
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default Projects;


