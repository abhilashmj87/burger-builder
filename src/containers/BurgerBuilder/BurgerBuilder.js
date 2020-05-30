import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

// tip: Always try using a class (instead of functions) for components that deal with state (AKA containers)
export default class BurgerBuilder extends Component {
  
  // tip: The below syntax for receiving props and setting up state works in react but its old
  /* constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        cheese: 2,
        bacon: 1,
        meat: 2,
      }
    };
  } */

  // tip: We can directly initialize state instead (this is more modern) (Also, state is a keyword in react and is one of the only keywords with two-way binding capabilities in React)
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 4.0,
    purchasing: false,
    orderDisabled: true,
  };


  PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
  };

  addIngredientHandler = (type) => {
    const newPrice = this.state.totalPrice + this.PRICES[type];

    const updatedIngredient = {...this.state.ingredients};
    ++updatedIngredient[type];
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
      orderDisabled: false,
    });
  };

  removeIngredientHandler = (type) => {
    let updatedIngredient = {...this.state.ingredients};
    let newPrice = this.state.totalPrice - this.PRICES[type];
    let orderDis = false;

    // Make sure the price never goes below 4
    if (newPrice < 4 ) {
      newPrice = 4;
    }

    // Iterate through the ingredient object values to see if all ingredients are 0. If they are 0, then set orderDisabled to true
    for (let i = 0 ; i < Object.values(updatedIngredient).length ; i++) {
      console.log(Object.values(updatedIngredient)[i]);
      if(Object.values(updatedIngredient)[i] > 0) {
        orderDis = false;
        break;
      } else {
        orderDis = true;
      }
    };
    
    // tip: state cannot be directly mutated in react, we have to use the setState methods to se the state with complete data. So creating the object needed to be pushed to state:
    if(updatedIngredient[type] > 0) {
      --updatedIngredient[type];
    }
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
      orderDisabled: orderDis,
    });
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  cancelPurchase = () => {
    this.setState({purchasing: false});
  }

  render() {
    return (
      <div>
        <Modal show={this.state.purchasing} closeModal={this.cancelPurchase}>
          <OrderSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls price={this.state.totalPrice} ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} orderdisabled={this.state.orderDisabled} purchase={this.purchaseHandler}></BuildControls>
      </div>
    );
  }
}