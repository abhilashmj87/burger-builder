import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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

  // tip: We can directly initialize state instead (this is more modern) (Also, state is a keyword in react)
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 4.0,
  };


  PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
  };

  addIngredientHandler = (type) => {
    const newPrice = this.state.totalPrice + this.PRICES[type];

    // tip: state cannot be directly mutated in react, we have to use the setState methods to se the state with complete data. So creating the object needed to be pushed to state:
    const updatedIngredient = {...this.state.ingredients};
    ++updatedIngredient[type];
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
    });
  };

  removeIngredientHandler = (type) => {
    const newPrice = this.state.totalPrice - this.PRICES[type];

    // tip: state cannot be directly mutated in react, we have to use the setState methods to se the state with complete data. So creating the object needed to be pushed to state:
    const updatedIngredient = {...this.state.ingredients};
    if(updatedIngredient[type] > 0) {
      --updatedIngredient[type];
    }
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice,
    });
  };

  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls price={this.state.totalPrice} ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler}></BuildControls>
      </div>
    );
  }
}