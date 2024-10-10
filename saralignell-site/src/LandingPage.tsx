import React, { useEffect, useState, useRef } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const floatingTexts = [
  "a frontend developer", "a junior at Georgetown", 
  "passionate about design", "a problem solver", 
  "experienced in TypeScript", "creative thinker", 
  "JavaScript enthusiast", "team player", 
  "Angular expert", "React.js developer", 
  "learning new things", "a coder", "building web apps",
  "working with APIs", "exploring UI/UX"
];

const projects = [
  {
    title: "Project 1",
    description: "A dynamic frontend project built using React and TypeScript.",
    image: "https://via.placeholder.com/800x400",
    link: "#"
  },
  {
    title: "Project 2",
    description: "A web app with complex components and user interfaces using Angular.",
    image: "https://via.placeholder.com/800x400",
    link: "#"
  },
  {
    title: "Project 3",
    description: "A clean and modern portfolio website designed to showcase creative work.",
    image: "https://via.placeholder.com/800x400",
    link: "#"
  }
];

const LandingPage: React.FC = () => {
  const [finalTextVisible, setFinalTextVisible] = useState(false); // Track whether to show the final text and buttons
  const [countdown, setCountdown] = useState(10);
  const projectSectionRef = useRef<HTMLDivElement>(null); // Reference to project section for scrolling

  // Scroll to project section
  const scrollToProjects = () => {
    projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const textElements = document.querySelectorAll('.floating-text');

    const moveText = (text: HTMLElement) => {
      const maxX = window.innerWidth - text.offsetWidth;  // Width bound
      const maxY = window.innerHeight - text.offsetHeight; // Height bound
      
      const x = Math.random() * maxX; // Random horizontal position
      const y = Math.random() * maxY; // Random vertical position

      text.style.transform = `translate(${x}px, ${y}px)`;
    };

    const startMovingText = () => {
      textElements.forEach((text) => {
        moveText(text as HTMLElement); // Move text initially
        setInterval(() => moveText(text as HTMLElement), 2000); // Move every 2 seconds
      });
    };

    startMovingText();

    // Start the countdown
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      textElements.forEach((text) => {
        (text as HTMLElement).style.transition = "transform 3s ease-in-out, opacity 3s ease-in-out"; 
        (text as HTMLElement).style.transform = `translate(39vw, 40vh)`; 
        (text as HTMLElement).style.opacity = "0"; // Fade out floating text
      });

      setTimeout(() => {
        setFinalTextVisible(true);
        setTimeout(() => {
          scrollToProjects(); // Add 0.5 second delay before scrolling to project section
        }, 500); // 0.5 second delay before auto-scrolling
      }, 3000);
    }, 10000); // 10 seconds delay (countdown duration)

    return () => {
      clearTimeout(timeoutId);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div>
      {/* Landing Section */}
      <div className="landing-container">
        <h1>Sara Lignell is:</h1>
        <div className="floating-text-wrapper"> 
          <div className="floating-text-overlay"></div> {/* Gradient overlay */}
          {!finalTextVisible ? (
            floatingTexts.map((text, index) => (
              <div key={index} className={`floating-text ${index % 2 === 0 ? 'bold' : ''}`}>
                {text}
              </div>
            ))
          ) : (
            <h1 className="final-text slow-fade-in">probably making something right now</h1>
          )}
        </div>

        {/* Countdown Timer */}
        {!finalTextVisible && (
          <div className="countdown-timer">
            {countdown > 0 ? <span>{countdown}</span> : null}
          </div>
        )}

        {/* Display buttons only after animation is complete */}
        {finalTextVisible && (
          <div className="landing-buttons">
            <Link to="#" className="landing-button" onClick={scrollToProjects}>My Work</Link>
            <Link to="/my-story" className="landing-button">My Story</Link>
          </div>
        )}
      </div>

      {/* Project Section */}
      <div ref={projectSectionRef} className="project-section">
        <h2>My Work Experience</h2>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
