import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';

class OrderSummary extends Component {


  order = "";

  componentDidUpdate(prevProps) {
    if (prevProps.loaded !== this.props.loaded) {
      this.updateContent();
    }
  }

  updateContent() {
    let ingredientSummary = Object.keys(this.props.ingredients).map((el, i) => {
      return <li key={el + i + i}>{el}: {this.props.ingredients[el]}</li>;
    });

    if (!this.props.loaded) {
      this.order = <div><h3>Your Order</h3>
        <p>Delicious Burger With: </p>
        <ul>
          {ingredientSummary}
        </ul>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            Total Price: <strong>${this.props.totalPrice.toFixed(2)}</strong>
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={this.props.onCheckoutClick}>Checkout</Button>
          </Grid>
        </Grid></div>;
    } else {
      this.order = <CircularProgress style={{margin: 'auto', display: 'block'}}></CircularProgress>;
    }
  }
  render() {
    this.updateContent();

    return (
      <div>
        {this.order}
      </div>
    );
  }
}

export default OrderSummary;