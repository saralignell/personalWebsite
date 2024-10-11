import React from 'react';
import './ProjectCards.css';
import gOb from './assets/GOB.png'; // Correct image import
import shopifyIcon from './assets/icons/shopify.svg';
import reactIcon from './assets/icons/mdi_react.svg';
import wordpressIcon from './assets/icons/wordpress.svg';
import nextJSIcon from './assets/icons/nextJS.svg';
import firebaseIcon from './assets/icons/FirebaseIcon.svg';
import AWSicon from './assets/icons/AWSicon.svg';
import reactNativeIcon from './assets/icons/reactnativeicon.svg';
import figmaIcon from './assets/icons/figma.svg';
import hoyaMockup from './assets/mockups/TheHoyaMockup.svg';
import allowanceMockup from './assets/mockups/allowanceMockup2.svg';


interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
  techIcons: string[]; // Array of tech stack icon paths
  size: 'large' | 'small'; // Add size property to each project
}

const projects: Project[] = [
  {
    title: "The Hoya Mobile",
    description: "Creating a mobile app for Georgetown's largest student-run news publication using React Native and Wordpress api.",
    image: hoyaMockup,
    link: "#",
    buttonText: "View Project",
    techIcons: [ reactNativeIcon, wordpressIcon, AWSicon],
    size: 'large' // This project is a small card
  },
  {
    title: "GoodOnBaby",
    description: "I designed the whole interface for an E-Commerce startup.",
    image: gOb,
    link: "https://goodonbaby.com/",
    buttonText: "View Site",
    techIcons: [shopifyIcon, reactIcon],
    size: 'small' // This project is a large card
  },
  {
    title: "Allowance Mobile",
    description: "Start Up redesign for mult-univeristy expansion.",
    image: allowanceMockup,
    link: "#",
    buttonText: "Read More",
    techIcons: [ figmaIcon, reactNativeIcon],
    size: 'small' // This project is a small card
  },

  {
    title: "ReStitch Web",
    description: "yuh.",
    image: "https://via.placeholder.com/800x400",
    link: "#",
    buttonText: "View Project",
    techIcons: [ nextJSIcon, firebaseIcon],
    size: 'large' // This project is a large card
  },
  // Add more projects here as needed
];

const ProjectCards: React.FC = () => {
  return (
    <div className="project-cards-container">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-card fade-in ${project.size} ${
            (index + Math.floor(index / 2)) % 2 === 0 ? 'from-left' : 'from-right'
          }`}
        >
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-content">
          <div className="project-header">
  <h3>{project.title}</h3>
  <div className="tech-icons">
    {project.techIcons.map((icon, idx) => (
      <img key={idx} src={icon} alt={`tech-icon-${idx}`} className="tech-icon" />
    ))}
  </div>
</div>
            <p>{project.description}</p>
   
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-button">
              {project.buttonText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
