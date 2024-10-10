import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkedInIcon from './assets/Inkedin.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <AppBar position="relative" className="navbar" color="transparent">
      <Toolbar>
        <div className="navbar-title">
          <Button color="inherit" component="a" href="https://www.linkedin.com/in/sara-lignell" target="_blank" className="footer-button">
            <img src={LinkedInIcon} alt="LinkedIn" className="footer-icon" />
          </Button>
          <Typography variant="body1" className="navbar-separator"> / </Typography> {/* Separator */}
          <Button color="inherit" component={Link} to="/resume.pdf" target="_blank" className="footer-button">
            Resume
          </Button>
        </div>
        <div className="navbar-links">
          <Button color="inherit" component={Link} to="/work-experience">Work</Button>
          <Typography variant="body1" className="navbar-separator"> / </Typography> {/* Separator */}
          <Button color="inherit" component={Link} to="/my-story">Story</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
