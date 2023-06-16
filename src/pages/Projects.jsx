import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectTile from '../components/ProjectTile';
import PlantAppImage from '../assets/plantapp-image.png';
import VinylDataImage from '../assets/vinyl-data-image.png';

function Projects({ isDarkMode }) {
  const projectItems = [
    {
      id: 'full-stack-app', // unique ID
      details: '2023 / Coder Academy',
      description: 'Full Stack Application',
      stack: 'MERN Stack | Tailwind',
      image: ''
    },
    {
      id: 'music-player-app', // unique ID
      details: '2023 / Personal Project',
      description: 'Music Player App',
      stack: 'Javascript | React | Tailwind',
      image: ''
    },
    {
      id: 'vinyl-data-api', // unique ID
      details: '2023 / Coder Academy',
      description: 'Vinyl Data API - API Webserver',
      stack: 'Python | Flask | PostgreSQL',
      image: VinylDataImage,
    },
    {
      id: 'plantapp', // unique ID
      details: '2022 / Coder Academy',
      description: 'PlantApp - Terminal Application',
      stack: 'Python',
      image: PlantAppImage,
    },
  ];

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

