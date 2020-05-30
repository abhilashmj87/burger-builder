import React from 'react';
import { AppBar, Toolbar, IconButton, Grid } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './BurgerToolbar.css';

const BurgerToolbar = (props) => {
  let alignment = 'builder';
  let routingHandler = function() {
    return ;
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs="auto">
              <IconButton key="menuicon" edge="start" color="inherit" aria-label="menu" onClick={props.controlDrawer}>
                <MenuIcon />
              </IconButton> 
            </Grid>
            <Grid item xs={10} sm={6} md={4}>
              <h1>Abhi's Burgers</h1>
            </Grid>
            <Grid item sm={2} md={5}>
            </Grid>
            <Grid item sm={3} md={2}>
              {/* TODO: figure out how to use the grid classes to hide this in mobile format */}
              {/* <ToggleButtonGroup className={classes.buttonsetBkgd} onChange={routingHandler} value={alignment} exclusive aria-label="Routing mech">
                <ToggleButton value="builder" aria-label="Burger Builder">
                  build Burger
                </ToggleButton>
                <ToggleButton value="checkout" aria-label="Checkout">
                  Checkout
                </ToggleButton>
              </ToggleButtonGroup> */}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default BurgerToolbar;