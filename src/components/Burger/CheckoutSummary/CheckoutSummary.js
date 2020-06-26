import React from 'react';
import Burger from '../Burger';
import { Button } from '@material-ui/core';

const CheckoutSummary = (props) => {
  return (
    <div>
      <h1>Hope it tastes good !!!</h1>
      <Burger ingredients={props.ingredients}></Burger>
      <Button variant="contained" onClick={props.cancelClicked}>Cancel</Button>
      <Button variant="contained" color="primary" onClick={props.continueClicked}>Continue</Button>
    </div>
  );
}

export default CheckoutSummary;