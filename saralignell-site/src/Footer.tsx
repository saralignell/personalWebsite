import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import linkedinIcon from './assets/Inkedin.svg'
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <AppBar position="static" className="footer" color="transparent">
      <Toolbar>
        <Typography variant="h6" className="footer-title">
          <Button color="inherit" component={Link} to="/">Sara Lignell</Button>
        </Typography>
        <div className="footer-links">
          <Button color="inherit" component={Link} to="/work-experience">Work</Button>
          <Button color="inherit" component={Link} to="/my-story">Story</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
