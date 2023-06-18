import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectContext from '../components/ProjectContext';

function ProjectDetails({ isDarkMode }) {
  // Determine the mode color based on whether Dark Mode is active or not.
  const modeColor = isDarkMode ? 'dark-mode-color' : 'light-mode-color';

  // Get the project ID from the route parameters.
  const { id } = useParams();

  // Get the navigate function from the react-router-dom hook.
  const navigate = useNavigate();

  // Use the project context to fetch the project data.
  const projectItems = useContext(ProjectContext);

  // Fetch the specific project using the projectId from the route parameters.
  const projectDetails = projectItems.find((project) => project.id === id);

  // Function to handle the back navigation.
  const handleGoBack = () => navigate(-1);

  return (
    <div className="flex flex-col h-full">
      <Header isDarkMode={isDarkMode} />
      <div className={`text-${modeColor} flex-grow overflow-auto md:mt-12 lg:mt-20`}>
        
        <div className="flex flex-wrap justify-center items-center font-roboto-mono font-light text-lg">
          <button onClick={handleGoBack} className="transition duration-300 ease-in-out transform hover:scale-105 mr-3">← Back</button>
        </div>

        <div className="flex flex-col justify-center items-center font-roboto-mono font-light mx-5 leading-[1.8] sm:mx-20 md:mx-40 lg:mx-60">
          {/* Display the project details */}
          <h1 className="text-center text-xl mt-5">
            {projectDetails ? projectDetails.description : `Project: ${id} not found`}
          </h1>

          <p className="text-center text-md my-5">
            {projectDetails ? projectDetails.details : `Project: ${id} not found`}<br />
            {projectDetails ? projectDetails.stack : `Project: ${id} not found`}<br />
          </p>

          <div className={`flex flex-col text-center text-md ml-3 ${isDarkMode ? 'text-blue-500' : 'text-light-mode-color'}`}>
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

          {/* Render paragraphs and corresponding images */}
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








