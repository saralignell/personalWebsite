import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import WorkExperience from './WorkExperience';
import MyStory from './MyStory';
import Navbar from './Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar will now appear on every page */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/my-story" element={<MyStory />} />
      </Routes>
    </Router>
  );
};

export default App;
