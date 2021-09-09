import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../../Assets/img/miurac.svg';
import Drawer from '@material-ui/core/Drawer';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './Nav.css';
import { MenuItem } from '@material-ui/core';


// functions for the navbar
export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <div id= "navbar-container">
        {/* Desktop navbar */}
        <AppBar id= "navbar" >
        <Toolbar>
        <div id="logo-desktop">
          <Link to="/">
          <IconButton edge="start" className=" " color="inherit" aria-label="menu">
            <img src={logo} alt="logo" className="logo-img" />
          </IconButton>
          </Link>
          <Typography variant="h6" className= " ">
          
                <div className="logo-title">
                  MIURAC  
                </div>
          </Typography>  
        </div>
          <div id="Nav-Links">
          <Link to="/about">
          <button id="Nav-Links-btn" >About us</button>
          </Link>
          <Link to="/home">
          <button id="Nav-Links-btn">Solutions</button>
          </Link>
          <Link to="/contact">
          <button id="Nav-Links-btn">Contact us</button>
          </Link>
          <Link to="/contact">
          <button id="button-nav">Apply now</button>
          </Link>
          </div>
          <div>
            <IconButton
              edge="end"
              id="menu-icon" aria-label="menu"
              onClick={handleDrawerOpen}
              display="none"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* Drawer is enabled when width is decreased */}
      <Drawer
        variant='temporary'
        anchor="right"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
             <ChevronRightIcon />
          </IconButton>
          
          <div id="Nav-Links-drawer">
          <Link to="/about">
          <button id="Nav-Links-btn" >About us</button>
          </Link>
          <Link to="/home">
          <button id="Nav-Links-btn">Solutions</button>
          </Link>
          <Link to="/contact">
          <button id="Nav-Links-btn">Contact us</button>
          </Link>
          <Link to="/contact">
          <button id="button-nav">Apply now</button>
          </Link>
            
          </div>
        </div>
      </Drawer>
      </div>
  );
}