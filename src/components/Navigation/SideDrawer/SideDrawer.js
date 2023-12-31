import React from 'react';
import classes from './SideDrawer.css';
import { SwipeableDrawer, List, ListItem, ListItemText } from '@material-ui/core';

const SideDrawer = (props) => {
  return (
    <div>
      <SwipeableDrawer anchor="left" open={props.drawerOpen} onClose={props.drawerOnClose} onOpen={props.drawerOnOpen}>
        <List component="nav" aria-label="mobile nav routing" className={classes.listLength}>
          <ListItem>
            <ListItemText secondary="Menu" />
          </ListItem>
          <ListItem button selected={true}>
            <ListItemText primary="Builder" />
          </ListItem>
          <ListItem button selected={false}>
            <ListItemText primary="Checkout" />
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  );
}

export default SideDrawer;