import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import MyStory from './MyStory';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

const App: React.FC = () => {
  const landingPageRef = useRef<{ scrollToProjects: () => void }>(null); // Create a ref to access the scroll function in LandingPage

  return (
    <div className="custom-cursor">
      <Router>
        <Navbar onScrollToProjects={() => landingPageRef.current?.scrollToProjects()} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage ref={landingPageRef} />} />
            <Route path="/my-story" element={<MyStory />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
