import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import LinkedInIcon from './assets/Inkedin.svg'; // Import LinkedIn logo SVG
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <Typography variant="body1" component={Link} to="/my-story" className="footer-text-button" color="inherit">
          Designed and developed by Sara Lignell
        </Typography>
      </div>
      <div className="footer-right">
          <Button color="inherit" component="a" href="https://www.linkedin.com/in/sara-lignell" target="_blank" className="footer-button">
            <img src={LinkedInIcon} alt="LinkedIn" className="footer-icon" />
          </Button>
          <Typography variant="body1" className="navbar-separator"> / </Typography> {/* Separator */}
          <Button color="inherit" component={Link} to="/resume.pdf" target="_blank" className="footer-button">
            Resume
          </Button>
      </div>
    </footer>
  );
};

export default Footer;
