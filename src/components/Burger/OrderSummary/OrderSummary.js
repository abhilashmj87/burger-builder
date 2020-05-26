import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map ( (el, i) => {
    return <li key={el + i + i}>{el}: {props.ingredients[el]}</li> ;
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>Delicious Burger With: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={6}>
          Total Price: <strong>${props.totalPrice.toFixed(2)}</strong>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
          <Button color="primary">Checkout</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderSummary;