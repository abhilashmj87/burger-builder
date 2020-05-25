import React from 'react';
import classes from './BuildControls.css';

const BuildControls = (props) => {
  return (
    <div className={classes.build_controls}>
      <p>Current Price: ${props.price.toFixed(2)}</p>
      <div className={classes.BuildControl}>

        <div className={classes.Label}>Meat</div>
        <button className={classes.Less} onClick={props.ingredientRemoved.bind(null, 'meat')}>Less</button>
        <button className={classes.More} onClick={props.ingredientAdded.bind(null, 'meat')}>More</button>

        <div className={classes.Label}>Bacon</div>
        <button className={classes.Less} onClick={props.ingredientRemoved.bind(null, 'bacon')}>Less</button>
        <button className={classes.More} onClick={props.ingredientAdded.bind(null, 'bacon')}>More</button>

        <div className={classes.Label}>Veggies</div>
        <button className={classes.Less} onClick={props.ingredientRemoved.bind(null, 'salad')}>Less</button>
        <button className={classes.More} onClick={props.ingredientAdded.bind(null, 'salad')}>More</button>

        <div className={classes.Label}>Salad</div>
        <button className={classes.Less} onClick={props.ingredientRemoved.bind(null, 'salad')}>Less</button>
        <button className={classes.More} onClick={props.ingredientAdded.bind(null, 'salad')}>More</button>

        <div className={classes.Label}>Cheese</div>
        <button className={classes.Less} onClick={props.ingredientRemoved.bind(null, 'cheese')}>Less</button>
        <button className={classes.More} onClick={props.ingredientAdded.bind(null, 'cheese')}>More</button>
      </div>
    </div>
  );
}

export default BuildControls;