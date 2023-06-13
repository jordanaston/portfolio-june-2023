import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectTile from '../components/ProjectTile';
import PlantAppImage from '../assets/plantapp-image.png';
import VinylDataImage from '../assets/vinyl-data-image.png';

function Projects() {
  const projectItems = [
    {
      details: '2023 / Coder Academy',
      description: 'Full Stack Application',
      stack: 'MERN Stack | Tailwind',
      image: ''
    },
    {
      details: '2023 / Personal Project',
      description: 'Music Player App',
      stack: 'Javascript | React | Tailwind',
      image: ''
    },
    {
      details: '2023 / Coder Academy',
      description: 'Vinyl Data API - API Webserver',
      stack: 'Python | Flask | PostgreSQL',
      image: VinylDataImage,
    },
    {
      details: '2022 / Coder Academy',
      description: 'PlantApp - Terminal Application',
      stack: 'Python',
      image: PlantAppImage,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="text-dark-mode-color flex-grow overflow-auto">
        <h1 className="text-center text-xl font-roboto-mono font-light my-5">Recent Work</h1>
        <div className="flex flex-wrap justify-center items-center">
          {projectItems.map((project, index) => (
            <ProjectTile
              key={index}
              projectDetails={project.details}
              projectDescription={project.description}
              techStack={project.stack}
              projectImage={project.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;

