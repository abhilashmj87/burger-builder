import  React, { Component } from 'react';
import CheckoutSummary from '../../components/Burger/CheckoutSummary/CheckoutSummary';

export default class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  goToOrders = () => {
    this.props.history.push('/checkout/contact-data');
  }

  cancelCheckout = () => {
    this.props.history.goBack();
  }

  render () {
    return (
        <CheckoutSummary ingredients={this.state.ingredients} continueClicked={this.goToOrders} cancelClicked={this.cancelCheckout}></CheckoutSummary>
    );
  }
}