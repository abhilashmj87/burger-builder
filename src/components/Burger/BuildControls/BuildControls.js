import React from 'react';
import classes from './BuildControls.css';
import { Button, Grid } from '@material-ui/core';

const BuildControls = (props) => {
  return (
    <div className={classes.build_controls}>
      <p>Current Price: ${props.price.toFixed(2)}</p>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className={classes.Label}>Meat</div>
          <Button variant="contained" onClick={props.ingredientRemoved.bind(null, 'meat')}>Less</Button>
          <Button variant="contained" onClick={props.ingredientAdded.bind(null, 'meat')}>More</Button>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.Label}>Bacon</div>
          <Button variant="contained" onClick={props.ingredientRemoved.bind(null, 'bacon')}>Less</Button>
          <Button variant="contained" onClick={props.ingredientAdded.bind(null, 'bacon')}>More</Button>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.Label}>Veggies</div>
          <Button variant="contained" onClick={props.ingredientRemoved.bind(null, 'salad')}>Less</Button>
          <Button variant="contained" onClick={props.ingredientAdded.bind(null, 'salad')}>More</Button>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.Label}>Salad</div>
          <Button variant="contained" onClick={props.ingredientRemoved.bind(null, 'salad')}>Less</Button>
          <Button variant="contained" onClick={props.ingredientAdded.bind(null, 'salad')}>More</Button>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.Label}>Cheese</div>
          <Button variant="contained" onClick={props.ingredientRemoved.bind(null, 'cheese')}>Less</Button>
          <Button variant="contained" onClick={props.ingredientAdded.bind(null, 'cheese')}>More</Button>
        </Grid>
      </Grid>
        <Button variant="contained" color="primary" className={classes.OrderButton} disabled={props.orderdisabled} onClick={props.purchase}>Order Now</Button>
    </div>
  );
}

export default BuildControls;