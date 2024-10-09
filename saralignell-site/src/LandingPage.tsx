import React, { useEffect, useState } from 'react';
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

const LandingPage: React.FC = () => {
  const [finalTextVisible, setFinalTextVisible] = useState(false); // Track whether to show the final text and buttons

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

    const timeoutId = setTimeout(() => {
      textElements.forEach((text) => {
        (text as HTMLElement).style.transition = "all 2s ease";
        (text as HTMLElement).style.transform = `translate(50vw, 40vh)`; // Move all text closer
      });

      setTimeout(() => {
        setFinalTextVisible(true); // Show final text and buttons
      }, 1000); // After text comes together, fade in the final text
    }, 8000); // 10 seconds delay before merging text

    return () => {
      clearTimeout(timeoutId); // Cleanup on unmount
    };
  }, []);

  return (
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
          <h1 className="final-text fade-in">probably making something right now</h1>
        )}
      </div>

      {/* Display buttons only after animation is complete */}
      {finalTextVisible && (
        <div className="landing-buttons">
          <Link to="/my-story" className="landing-button">My Story</Link>
          <Link to="/my-experience" className="landing-button">My Experience</Link>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
