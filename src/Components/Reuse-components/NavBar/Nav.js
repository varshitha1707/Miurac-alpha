import React from 'react';
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
        <AppBar id= "navbar" >
        <Toolbar>
        <div id="logo-desktop">
          <IconButton edge="start" className=" " color="inherit" aria-label="menu">
            <img src={logo} alt="logo" className="logo-img" />
          </IconButton>
          <Typography variant="h6" className= " ">
          
                <div className="logo-title">
                  MIURAC  
                </div>
          </Typography>  
        </div>
          <div id="Nav-Links">
            <Button >About us</Button>
            <Button >Solutions</Button>
            <Button >Contact us</Button>
            <button id="button-nav">Apply now</button>
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
            <MenuItem><Button >About us</Button></MenuItem>
            <MenuItem><Button >Solutions</Button></MenuItem>
            <MenuItem><Button >Contact us</Button></MenuItem>
            <MenuItem><button id="button-nav">Apply now</button></MenuItem>
            
            
          </div>
        </div>
      </Drawer>
      </div>
  );
}