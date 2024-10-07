import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" className="navbar" color="transparent">
      <Toolbar>
        <Typography variant="h6" className="navbar-title">
          Sara Lignell
        </Typography>
        <div className="navbar-links">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/work-experience">Work Experience</Button>
          <Button color="inherit" component={Link} to="/my-story">My Story</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
