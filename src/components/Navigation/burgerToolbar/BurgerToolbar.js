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
            <Grid item xs={1}>
              <IconButton key="menuicon" edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton> 
            </Grid>
            <Grid item xs={4}>
              <h1>Abhi's Burgers</h1>
            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={2}>
              <ToggleButtonGroup className={classes.buttonsetBkgd} onChange={routingHandler} value={alignment} exclusive aria-label="Routing mech">
                <ToggleButton value="builder" aria-label="Burger Builder">
                  build Burger
                </ToggleButton>
                <ToggleButton value="checkout" aria-label="Checkout">
                  Checkout
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default BurgerToolbar;