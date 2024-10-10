import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import WorkExperience from './WorkExperience';
import MyStory from './MyStory';
import Navbar from './Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="custom-cursor"> {/* Apply custom cursor class */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/my-story" element={<MyStory />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
