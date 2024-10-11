import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import LinkedInIcon from './assets/icons/Inkedin.svg'; // Import LinkedIn logo SVG
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import reactIcon from './assets/icons/mdi_react.svg';
import figmaIcon from './assets/icons/figma.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
      <img src={figmaIcon} alt="Figma Icon" className="tech-icon" />
      <img src={reactIcon} alt="React Icon" className="tech-icon" />
        <Button color="inherit" component={Link} to="/my-story" className="footer-text-button" >
          Designed and developed by Sara Lignell
        </Button>
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
