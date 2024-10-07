import React, { useEffect } from 'react';
import './LandingPage.css';

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
  useEffect(() => {
    const textElements = document.querySelectorAll('.floating-text');
    
    const moveText = (text: HTMLElement) => {
      const maxX = window.innerWidth - text.offsetWidth;  // Width bound
      const maxY = window.innerHeight - text.offsetHeight; // Height bound
      
      const x = Math.random() * maxX; // Random horizontal position
      const y = Math.random() * maxY; // Random vertical position

      // Ensuring the text stays within screen boundaries
      text.style.transform = `translate(${x}px, ${y}px)`;
    };

    textElements.forEach((text) => {
      moveText(text as HTMLElement); // Move text initially
      setInterval(() => moveText(text as HTMLElement), 5000); // Move every 5 seconds
    });

    // Handle window resize event
    const handleResize = () => {
      textElements.forEach((text) => moveText(text as HTMLElement)); // Reposition on resize
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener
    };
  }, []);

  return (
    <div className="landing-container">
      <h1>Sara Lignell is:</h1>
      {floatingTexts.map((text, index) => (
        <div key={index} className={`floating-text ${index % 2 === 0 ? 'bold' : ''}`}>
          {text}
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
