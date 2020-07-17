import  React, { Component } from 'react';
import CheckoutSummary from '../../components/Burger/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';

export default class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    }
  };

  goToOrders = () => {
    this.props.history.push('/checkout/contact-data');
  }

  cancelCheckout = () => {
    this.props.history.goBack();
  }

  componentDidMount () {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};

    // tip: query.entries() returns an iterator and the best way to go through an iterator in react is to use the for of loop.
    for(let val of query.entries()) {
      ingredients[val[0]] = val[1];
    }
    this.setState({
      ingredients: ingredients
    })
  }

  render () {
    return (
        <div>
          <CheckoutSummary ingredients={this.state.ingredients} continueClicked={this.goToOrders} cancelClicked={this.cancelCheckout}></CheckoutSummary>
          <Route path={this.props.match.path + '/contact-data'} render={ () => (<ContactData ingredients={this.state.ingredients}></ContactData>)}></Route>
        </div>
    );
  }
}