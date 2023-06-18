import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectContext from '../components/ProjectContext';

function ProjectDetails({ isDarkMode }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectItems = useContext(ProjectContext);
  const projectDetails = projectItems.find((project) => project.id === id);

  const handleGoBack = () => navigate(-1);

  return (
    <div className="flex flex-col h-full">
      <Header isDarkMode={isDarkMode} />
      <div className={`${isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color'} flex-grow overflow-auto md:mt-12 lg:mt-20`}>
        
        <div className="flex flex-wrap justify-center items-center font-roboto-mono font-light text-lg">
          <button onClick={handleGoBack}>← Back</button>
        </div>

        <div className="flex flex-col justify-center items-center font-roboto-mono font-light mx-5 leading-[1.8] sm:mx-20 md:mx-40 lg:mx-60">
          <h1 className="text-center text-xl mt-5">
            {projectDetails ? projectDetails.description : `Project: ${id} not found`}
          </h1>

          <p className="text-center text-md my-5">
            {projectDetails ? projectDetails.details : `Project: ${id} not found`}<br />
            {projectDetails ? projectDetails.stack : `Project: ${id} not found`}<br />
          </p>

          <div className={`flex flex-col text-center text-md ${isDarkMode ? 'text-blue-500' : 'text-light-mode-color'}`}>
            {projectDetails.githubRepo && (
              <a 
                href={projectDetails.githubRepo} 
                target="_blank" 
                rel="noreferrer"
                className="transition duration-300 ease-in-out transform hover:scale-105"
              >
                View Github Repo ➚
              </a>
            )}
            {projectDetails.deployedSite && (
              <a 
                href={projectDetails.deployedSite} 
                target="_blank" 
                rel="noreferrer"
                className="transition duration-300 ease-in-out transform hover:scale-105"
              >
                View Deployed Site ➚
              </a>
            )}
          </div>

          {projectDetails && projectDetails.paragraphs.map((para, index) => {
            const imagesToInsert = projectDetails.paraImages.filter((img) => img.position === index + 1);
            return (
              <React.Fragment key={index}>
                <p className="text-left font-roboto-mono font-light my-5">{para}</p>
                {imagesToInsert.map((img, imgIndex) => (
                  <img key={imgIndex} src={img.src} alt="" className="w-full max-w-md my-5" />
                ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default ProjectDetails;







