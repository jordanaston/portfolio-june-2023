import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectContext from '../components/ProjectContext';

function ProjectDetails({ isDarkMode }) {
  let { id } = useParams();
  let navigate = useNavigate();

  const projectItems = useContext(ProjectContext);
  const projectDetails = projectItems.find((project) => project.id === id);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col h-full">
      <Header isDarkMode={isDarkMode} />
      <div className={`${isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color'} flex-grow overflow-auto md:mt-12 lg:mt-20`}>
        <div className="flex flex-wrap justify-center items-center font-roboto-mono font-light text-lg">
            <button onClick={handleGoBack}>← Back</button>
        </div>
        <h1 className="text-center text-xl font-roboto-mono font-light my-5">
          {projectDetails ? projectDetails.description : `Project: ${id} not found`}
        </h1>
        {/* Render other project details as needed */}
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default ProjectDetails;





