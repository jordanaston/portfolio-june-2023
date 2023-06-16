import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProjectDetails({ isDarkMode }) {
  let { id } = useParams();
  let navigate = useNavigate();

  // fetch or retrieve the project details using the id and render them

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col h-full">
      <Header isDarkMode={isDarkMode} />
      <div className={`${isDarkMode ? 'text-dark-mode-color' : 'text-light-mode-color'} flex-grow overflow-auto md:mt-12 lg:mt-20`}>
        <h1 className="text-center text-xl font-roboto-mono font-light my-5">Project ID: {id}</h1>
        <div className="flex flex-wrap justify-center items-center">
            <button onClick={handleGoBack}>← Back</button>
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default ProjectDetails;




