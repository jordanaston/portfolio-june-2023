import React from 'react';
import PlantAppImage from '../assets/plantapp-image.png';
import VinylDataImage from '../assets/vinyl-data-image.png';

const projectItems = [
  {
    id: 'full-stack-app',
    details: '2023 / Coder Academy',
    description: 'Full Stack Application',
    stack: 'MERN Stack | Tailwind',
    image: '',
    githubRepo: '',
    deployedSite: '',
    paraImages: [
        { src: '', position: 1 },
        { src: '', position: 2 },
      ],
    paragraphs: [

    ]
  },
  {
    id: 'music-player-app',
    details: '2023 / Personal Project',
    description: 'Music Player App',
    stack: 'Javascript | React | Tailwind',
    image: '',
    githubRepo: '',
    deployedSite: '',
    paraImages: [
        { src: '', position: 1 },
        { src: '', position: 2 },
      ],
    paragraphs: [
        
    ]
  },
  {
    id: 'vinyl-data-api',
    details: '2023 / Coder Academy',
    description: 'Vinyl Data - API Webserver',
    stack: 'Python | Flask | PostgreSQL',
    image: VinylDataImage,
    githubRepo: 'https://github.com/jordanaston/T2A2_vinyl_data_API',
    deployedSite: '',
    paraImages: [
        { src: VinylDataImage, position: 1 },
        { src: VinylDataImage, position: 2 },
      ],
    paragraphs: [
        'This project presents a robust RESTful API, created using Flask, for managing and cataloguing vinyl record collections. The tool is aimed at private users like vinyl collectors and DJs, helping them organize, search and maintain records, enhancing ease-of-use and efficiency. It enables users to quickly identify album details, track specifics such as tempo or BPM, key, and RPM, aiding DJs during live performances and listeners in their leisure. The API is equipped with full CRUD capabilities, allowing the user to seamlessly create, read, update, and delete records and tracks from their database.',
        'The APIs foundation is built on an Entity Relationship Diagram (ERD) that exhibits the relationships between the users, their collections, and individual records. The system follows a normalized database structure featuring five main entities: User, Collection, Record, Artist, and Track. The system acknowledges that multiple users can own many records and many records can belong to different users, thus utilizing a Collection entity to manage the many-to-many relationship. Other relationships include a one-to-many association between artists and records, and between records and tracks.',
        'This project employs SQLAlchemy ORM for managing database operations and defining relationships between different entities. Each class (User, Collection, Record, Artist, Track) embodies a table in the database, with well-established associations and back-references for easy navigation. For instance, a User can have multiple Collections, a Record is associated with one Artist and can have multiple Tracks and Collections, and so on. The API leverages Flasks flexibility and simplicity, providing users a streamlined, efficient way to manage their vinyl collections.',
    ]
  },
  {
    id: 'plantapp',
    details: '2022 / Coder Academy',
    description: 'PlantApp - Terminal Application',
    stack: 'Python',
    image: PlantAppImage,
    githubRepo: 'https://github.com/jordanaston/T1A3-terminal-application',
    deployedSite: '',
    paraImages: [
        { src: PlantAppImage, position: 1 },
        { src: PlantAppImage, position: 3 },
      ],
    paragraphs: [
      'PlantApp is a Python-based terminal application designed to help users care for their indoor house-plants. The application supports 15 varieties of popular indoor house-plants, allowing users to create a custom collection of their plants. Each plant comes with data on watering frequency, re-potting frequency, and ideal location, enabling the app to generate personalized care recommendations.',
      'The primary function of PlantApp is to solicit user input about each plant in their collection, such as when the plant was last watered and re-potted, and whether it is situated near a window. Based on this input, the app compares the users care routine to the data stored within the app, producing tailored advice to improve plant care. The user interface is intuitive, allowing easy addition and removal of plants to the collection.',
      'In addition to its core functionality, PlantApp employs the Pretty Table module to present the users plant collection in an organized, visually appealing format. This module also enhances the display of the apps care recommendations, which are based on a comparison of user input and plant data.',
      'The development of PlantApp demonstrates proficient use of Python to design, implement, and test a terminal application. It showcases the ability to manage user input, interact with the file system, and utilize developer tools effectively. Please note that the information regarding water frequency, re-pot frequency, and location may not be entirely accurate due to the assignments constraints.',
    ]
  },
];

const ProjectContext = React.createContext(projectItems);

export default ProjectContext;