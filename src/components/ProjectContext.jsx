import React from "react";
import PlantAppImage from "../assets/plantapp-image.png";
import PlantAppCollection from "../assets/plantapp-collection.png";
import PlantAppInfo from "../assets/plantapp-info.png";
import VinylDataImage from "../assets/vinyl-data-image.png";
import VinylDataERD from "../assets/vinyl-data-erd.png";
import WeatherAppCold from "../assets/weather-app-cold.png";
import WeatherAppWarm from "../assets/weather-app-warm.png";
import VanVoyageImage from "../assets/van-voyage-image.png";
import VanVoyageLogin from "../assets/van-voyage-login-image.png";
import VanVoyageMobile from "../assets/van-voyage-mobile-image.png";
import NbmMobileAppImage from "../assets/nbm-mobile-app-image.png";
import UniswapBlockchainImage from "../assets/uniswap-blockchain-app-image.png";
import NbmAppImage1 from "../assets/nbm-app-image-1.png";
import NbmAppImage2 from "../assets/nbm-app-image-2.png";
import UniswapMetamask from "../assets/uniswap-metamask.png";
import UniswapModal from "../assets/uniswap-modal.png";

const projectItems = [
  {
    id: "nbm-forum-mobile-app",
    details: "2023 / Internship Project",
    description: "NBM Forum Mobile App",
    stack: "Typescript | React Native | Nativewind",
    image: NbmMobileAppImage,
    githubRepo: "https://github.com/jordanaston/nbm-forum",
    deployedSite: "",
    paraImages: [
      { src: NbmAppImage1, position: 1 },
      { src: NbmAppImage2, position: 2 },
    ],
    paragraphs: [
      "The NBM Forum is a mobile application serving as a communal space where users can initiate discussions, share insights, and network within a social interface inspired by Reddit for designers and developers.",
      "Developed using a modern tech stack that includes Typescript, React Native, and Nativewind, the app includes a login and account creation screen, gathering details such as name, email, phone, address, and password, along with the ability to upload a profile picture to an AWS S3 bucket. The main feed integrates lazy loading for seamless browsing, with functionalities to like, comment on posts, and reply to comments. A tag filter carousel offers post filtering by tags fetched from the API. New posts can be created with tag assignments, and the settings screen provides straightforward options for account management including logout.",
      "This application was built during an internship program at Moonward Apps, Brisbane and was designed as a coding challenge for the interns. The designs and backend were created by Moonward and we were given the task of developing the frontend using tools such as React Query, Zustand, Formik/ Yup, Google Places Auto-Complete API and Async Storage to name a few.",
    ],
  },
  {
    id: "uniswap-blockchain-app",
    details: "2023 / Personal Project",
    description: "Uniswap Blockchain Web App",
    stack: "Next.js | Typescript | Solidity | Sanity",
    image: UniswapBlockchainImage,
    githubRepo: "https://github.com/jordanaston/uniswap-blockchain-webapp",
    deployedSite: "https://uniswap-blockchain-webapp.vercel.app/",
    paraImages: [
      { src: UniswapMetamask, position: 1 },
      { src: UniswapModal, position: 2 },
    ],
    paragraphs: [
      "This Uniswap Blockchain Web App Clone is a crypto exchange interface built with Next.js, Typescript, Solidity and Sanity replicating some of Uniswap’s core features such as connecting your metamask wallet, sending tokens on-chain and seeing a live history of the transactions update in real-time. It's deployed on Vercel, utilizing Ethereum's Sepolia Testnet for token swapping.",
      "Solidity supports the app's smart contracts, facilitating secure transactions on the testnet. The database leverages Sanity, providing a structured content system for users and transactions. Users must acquire Sepolia tokens to test the exchange features.",
      "Incorporating key packages such as ethers for Ethereum blockchain interactions, react-modal for UI dialogues, react-spinners for dynamic feedback during loading states and hardhat to facilitate smart contract development and testing, the app's functionality is minimal but touches on the foundations of blockchain development.",
    ],
  },
  {
    id: "full-stack-app",
    details: "2023 / Coder Academy",
    description: "Van Voyage - Full Stack Application",
    stack: "MERN Stack | Tailwind CSS",
    image: VanVoyageImage,
    githubRepo: "https://github.com/van-voyagers/T3A2-A-van-voyage-docs",
    deployedSite: "https://van-voyage.netlify.app/",
    paraImages: [
      { src: VanVoyageLogin, position: 1 },
      { src: VanVoyageMobile, position: 2 },
    ],
    paragraphs: [
      "Van Voyage is a project-based web application developed to provide an organized system for booking and reviewing retro, refurbished camper-vans. Central features of the platform include real-time availability checks, user registration/ on-boarding and profile management, a straightforward booking mechanism, and an interactive review system where users can share their experiences after booking the vans.",
      "Built on the MERN stack, the application uses MongoDB, Express.js, React, and Node.js. With the frontend deployed on Netlify and styled using Tailwind CSS, it integrates with the backend on Render which interfaces with MongoDB Atlas for data storage and retrieval. Users have the capability to create accounts, adjust profile details, explore individual van attributes, verify real-time availability, finalize bookings, and subsequently share feedback through reviews. Administrative tasks, such as managing users, van details, bookings, and reviews, are handled through Postman.",
      "Notable packages integrated are Axios (for streamlined data interactions), jsonwebtoken (to ensure secure user sessions), and bcrypt (for enhanced password security). For direct user interactions, react-calendar offers an intuitive interface for availability verification, react-star-ratings aids in capturing user feedback post-booking, and react-responsive-carousel facilitates a dynamic display of van images.",
    ],
  },
  {
    id: "weather-forecast-app",
    details: "2023 / Personal Project",
    description: "Weather Forecast App",
    stack: "Javascript | React | Tailwind CSS",
    image: WeatherAppCold,
    githubRepo: "https://github.com/jordanaston/weather-forecast-app-react",
    deployedSite: "https://darlingsable.netlify.app/",
    paraImages: [
      { src: WeatherAppCold, position: 1 },
      { src: WeatherAppWarm, position: 2 },
    ],
    paragraphs: [
      "A weather forecast web application that provides real-time weather data using the OpenWeatherMap API. Includes features such hourly and daily forecasts, current temperature, 'feels like' temperature, humidity levels, wind speed, sunrise and sunset times and displays information about the date & time of the searched location. Other features include a geo-location search button, metric / imperial conversion and the high/ low temperatures of the day.",
      "This app was built using JavaScript, React, and Tailwind and deployed with Netlify. Luxon was utilized for reliable and accurate handling of date and time data. Toastify was employed to deliver sleek, responsive notifications to users, ensuring an interactive user experience. These packages, paired with suitable icons from iconscout.com, make the project a simple but effective solution for a weather forecast app.",
      "",
    ],
  },
  {
    id: "vinyl-data-api",
    details: "2023 / Coder Academy",
    description: "Vinyl Data - API Webserver",
    stack: "Python | Flask | PostgreSQL",
    image: VinylDataImage,
    githubRepo: "https://github.com/jordanaston/T2A2_vinyl_data_API",
    deployedSite: "",
    paraImages: [
      { src: VinylDataImage, position: 1 },
      { src: VinylDataERD, position: 2 },
    ],
    paragraphs: [
      "This project presents a robust RESTful API, created using Flask, for managing and cataloguing vinyl record collections. The tool is aimed at private users like vinyl collectors and DJs, helping them organize, search and maintain records, enhancing ease-of-use and efficiency. It enables users to quickly identify album details, track specifics such as tempo or BPM, key, and RPM, aiding DJs during live performances and listeners in their leisure. The API is equipped with full CRUD capabilities, allowing the user to seamlessly create, read, update, and delete records and tracks from their database.",
      "The APIs foundation is built on an Entity Relationship Diagram (ERD) that exhibits the relationships between the users, their collections, and individual records. The system follows a normalized database structure featuring five main entities: User, Collection, Record, Artist, and Track. The system acknowledges that multiple users can own many records and many records can belong to different users, thus utilizing a Collection entity to manage the many-to-many relationship. Other relationships include a one-to-many association between artists and records, and between records and tracks.",
      "This project employs SQLAlchemy ORM for managing database operations and defining relationships between different entities. Each class (User, Collection, Record, Artist, Track) embodies a table in the database, with well-established associations and back-references for easy navigation. For instance, a User can have multiple Collections, a Record is associated with one Artist and can have multiple Tracks and Collections, and so on. The API leverages Flasks flexibility and simplicity, providing users a streamlined, efficient way to manage their vinyl collections.",
    ],
  },
  {
    id: "plantapp",
    details: "2022 / Coder Academy",
    description: "PlantApp - Terminal Application",
    stack: "Python",
    image: PlantAppImage,
    githubRepo: "https://github.com/jordanaston/T1A3-terminal-application",
    deployedSite: "",
    paraImages: [
      { src: PlantAppCollection, position: 1 },
      { src: PlantAppInfo, position: 3 },
    ],
    paragraphs: [
      "PlantApp is a Python-based terminal application designed to help users care for their indoor house-plants. The application supports a variety of popular indoor house-plants, allowing users to create their own custom collection. Each plant comes with data on watering frequency, re-potting frequency, and ideal location, enabling the app to generate personalized care recommendations.",
      "The primary function of PlantApp is to solicit user input about each plant in their collection, such as when the plant was last watered and re-potted, and whether it is situated near a window. Based on this input, the app compares the users care routine to the data stored within the app, producing tailored advice to improve plant care. The user interface is intuitive, allowing easy addition and removal of plants to the collection.",
      "In addition to its core functionality, PlantApp employs the Pretty Table module to present the users plant collection in an organized, visually appealing format. This module also enhances the display of the apps care recommendations, which are based on a comparison of user input and plant data.",
      "The development of PlantApp demonstrates proficient use of Python to design, implement, and test a terminal application. It showcases the ability to manage user input, interact with the stored data, and utilize developer tools effectively. Please note that the information regarding water frequency, re-pot frequency, and location may not be entirely accurate as the purpose of the project was to learn how to build a terminal app.",
    ],
  },
];

const ProjectContext = React.createContext(projectItems);

export default ProjectContext;
