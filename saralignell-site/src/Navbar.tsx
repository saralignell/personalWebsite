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
          <Button color="inherit" component={Link} to="/">Sara Lignell</Button>
        </Typography>
        <div className="navbar-links">
          <Button color="inherit" component={Link} to="/work-experience">Work</Button>
          <Typography variant="body1"> / </Typography> {/* Separator */}
          <Button color="inherit" component={Link} to="/my-story">Story</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
