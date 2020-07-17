import React, { Component } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@material-ui/core';
import classes from './ContactData.css';
import HTTP from '../../../components/server/HTTP';

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      zipCode: ""
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    let order = {
      ingredients: this.props.ingredients,
      // TODO: Get the totalPrice from BurgerBuilder
      price: 6.00,
      customer: {
        name: 'Abhilash',
        email: event.target.value,
        paymentType: 'cash'
      }
    };
    HTTP({
      // Firebase needs the .json at the end
      url: 'https://amj-burger-builder.firebaseio.com/orders.json',
      type: 'post',
      data: order
    }).then( response => {
      // Tip: Any update to the component props after the component has been rendered has been done using the state because, updating the component's props after the component has been rendered on the screen, is an anti-pattern in react and is usually blocked by react
      this.setState({loaded: false});

      // Make sure the purchase modal disappears
      this.cancelPurchase();
    }).catch( reject => {
      this.error = reject;
      this.setState({loaded: true});
    });
  }

  render () {
    return (
      <div>
        <h4> Enter your details</h4>
        <FormControl className={classes.data}>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <Button variant="contained" color="primary" onClick={this.orderHandler}>Finish</Button>
      </div>
    );
  }
}