import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import ProjectCards from './ProjectCards';
import MyWork from './assets/MYwork3.svg';
import SaraLignellis from './assets/SaraLignellis.svg'

const floatingTexts = [
  "a frontend developer", "a junior at Georgetown", 
  "passionate about design", "a problem solver", 
  "experienced in TypeScript", "creative thinker", 
  "JavaScript enthusiast", "team player", 
  "Angular expert", "React.js developer", 
  "learning new things", "a coder", "building web apps",
  "working with APIs", "exploring UI/UX"
];

// Use forwardRef to allow the parent component to trigger scrollToProjects
const LandingPage = forwardRef((props, ref) => {
  const [finalTextVisible, setFinalTextVisible] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const projectSectionRef = useRef<HTMLDivElement>(null);

  // Expose the scrollToProjects function to the parent via ref
  useImperativeHandle(ref, () => ({
    scrollToProjects() {
      projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }));

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
        moveText(text as HTMLElement);
        setInterval(() => moveText(text as HTMLElement), 2000);
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
          projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      <div className="Sara-Is">
          <img src={SaraLignellis} alt="Sara Lignell Is" />
        </div>
        <div className="floating-text-wrapper">
          <div className="floating-text-overlay"></div>
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
            <Link to="#" className="landing-button" onClick={() => projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}>My Work</Link>
            <Link to="/my-story" className="landing-button">My Story</Link>
          </div>
        )}
      </div>

      {/* Project Section */}
      {/* Project Section */}
      <div className="My-Work">
          <img src={MyWork} alt="My Work" />
        </div>
      <div ref={projectSectionRef} className="project-section">
 
        <ProjectCards /> {/* Using the new ProjectCards component */}
      </div>
    </div>
  );
});

export default LandingPage;
