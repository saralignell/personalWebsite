import React from 'react';
import './MyStory.css';
import downArrow from './assets/DownArrows.svg'; 
import MyStoryText from './assets/MyStoryDot.svg';
import rippedTexture from './assets/crumple12.svg';
import journalItself from './assets/JournalItself.svg';
import journalPen from './assets/FountainPen.svg';

const MyStory: React.FC = () => {
  return (
    <div className="my-story-page">
      {/* Video Section */}
      <div className="video-section">
        <div className="gradient-overlay"></div> {/* Gradient overlay over the video */}
        <video autoPlay loop muted playsInline className="background-video">
          <source src="https://s3-figma-videos-production-sig.figma.com/video/1329158448900003468/TEAM/e2a2/213c/-50b0-4f12-8add-92f5d6bf578f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kbtzo8~rWCANb-oROBxBi0d4xsc-OGgbQUu14frqSo7GOMm9x6RCmlmFHfR-qLTVFBwv5Z7wFHcvdBsUBykAmY6h1z-wzA-Y5~1cpPaoiisgBry42k3r9dfvZQHaWucQ1Buyd1XkZA10z06UC6LrNpx9K9fVbPhGLkUrO5AmOw8rilSov5qOrXw-i4y3wsJR6bb4CrIHY5y6xw105lZZxR1jOApHzekyDK-P-fugEQTwuSB5nBPaAzaF69NKBmiU8-NrCAKnq9kHx~bSaSd8OT60haUIwcHyq2bcGdnPhZ2A~OBVLT8NACqliZsOf~Rk5WVVn2ONNaV6hYvUj2TdNw__" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Journal Section */}
      <div className="journal-section">
        <div className="down-arrow">
          <img src={downArrow} alt="Down Arrow" />
        </div>

        <div className="page-crumple">
          <img src={rippedTexture} alt="Ripped Texture" />
        </div>

        <div className="journal-container">
          <img src={journalItself} alt="Journal" className="journal-image" />

          {/* Journal Pen */}
          <div className="journal-pen-container">
            <img src={journalPen} alt="Journal Pen" className="journal-pen" />
          </div>

          {/* Journal Text Section */}
          <div className="journal-text">
            <p>
              I started software development because I love making things. 
              I build things all the time. Sew things, Woodwork, Lasercut, code, 3D print, CNC routing. 
              I am a student manager at the Georgetown Makerhub. 
              I love building things I am passionate about and creating experiences people remember.
            </p>
            <p>
              Me beyond my resume:
              <ul>
                <li>I teach around 20 kids every Sunday, teaching private and group swim lessons</li>
                <li>I am on the board of the German club, coordinating cultural events and embassy visits</li>
                <li>I am a UX advisor and shareholder of a sustainable baby goods ecommerce site</li>
                <li>In summer 2023, I worked at an Alpine cafe in Bavaria</li>
                <li>I was previously a competitive runner on a relay ranked 10th nationally</li>
                <li>My favorite classes in college include: Intro to Design, Algorithms, Tech Ethics, Advanced Programming</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStory;
