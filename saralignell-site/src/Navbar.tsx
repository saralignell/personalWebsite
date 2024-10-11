import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LinkedInIcon from './assets/icons/Inkedin.svg';
import './Navbar.css';

const Navbar: React.FC<{ onScrollToProjects: () => void }> = ({ onScrollToProjects }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleWorkClick = () => {
    if (location.pathname !== '/') {
      // If not on the landing page, navigate to the landing page first
      navigate('/');
      setTimeout(() => {
        onScrollToProjects();
      }, 500); // Add a slight delay to ensure the landing page is loaded before scrolling
    } else {
      // If already on the landing page, scroll to the projects section
      onScrollToProjects();
    }
  };

  return (
    <AppBar position="relative" className="navbar" color="transparent">
      <Toolbar>
        <div className="navbar-title">
          <Button color="inherit" component="a" href="https://www.linkedin.com/in/sara-lignell" target="_blank" className="footer-button">
            <img src={LinkedInIcon} alt="LinkedIn" className="footer-icon" />
          </Button>
          <Typography variant="body1" className="navbar-separator"> / </Typography>
          <Button color="inherit" component={Link} to="/resume.pdf" target="_blank">
            Resume
          </Button>
        </div>
        <div className="navbar-links">
          <Button color="inherit" onClick={handleWorkClick}>Work</Button>
          <Typography variant="body1" className="navbar-separator"> / </Typography>
          <Button color="inherit" component={Link} to="/my-story">Story</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
