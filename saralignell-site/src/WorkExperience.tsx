import React from 'react';
import './WorkExperience.css';

const projects = [
  {
    title: "Project 1",
    description: "A dynamic frontend project built using React and TypeScript.",
    image: "https://via.placeholder.com/800x400",
  },
  {
    title: "Project 2",
    description: "A web app with complex components and user interfaces using Angular.",
    image: "https://via.placeholder.com/800x400",
  },
  {
    title: "Project 3",
    description: "A clean and modern portfolio website designed to showcase creative work.",
    image: "https://via.placeholder.com/800x400",
  }
];

const WorkExperience: React.FC = () => {
  return (
    <div className="work-experience-container">
      <h2>My Work Experience</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
