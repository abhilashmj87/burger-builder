import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import HTTP from '../../components/server/HTTP';
import GlobalErrorHandler from '../GlobalErrorHandler/GlobalErrorHandler';
import { CircularProgress } from '@material-ui/core';

// tip: Always try using a class (instead of functions) for components that deal with state (AKA containers)
class BurgerBuilder extends Component {

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
    ingredients: null,
    totalPrice: 4.0,
    purchasing: false,
    orderDisabled: true,
    loaded: false,
  };

  burgerData = <CircularProgress style={{margin: 'auto', display: 'block'}}></CircularProgress>;
  // tip: componentDidMount lifecycle method is the best place to fetch data needed to bootstrap (start) the component
  componentDidMount() {
    HTTP({
      type: 'get',
      url: 'https://amj-burger-builder.firebaseio.com/ingredients.json'
    }).then ( resolve => {
      this.setState({ingredients: resolve});
    });
  }

  error = "";

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
    let newPrice = updatedIngredient[type] > 0 ? this.state.totalPrice - this.PRICES[type] : this.state.totalPrice;
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

  checkoutClickedHandler = () => {
    this.setState({loaded: true});
    let order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Abhilash',
        email: 'abhilash@abhilash.com',
        paymentType: 'cash'
      }
    };
    
    /*HTTP({
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
    }); */
    const queryParams = [];
    const ingr = Object.keys(this.state.ingredients);
    for(let i = 0 ; i < ingr.length; i++) {
      if (this.state.ingredients[ingr[i]] > 0) {
        queryParams.push(encodeURIComponent(ingr[i]) + '=' + encodeURIComponent(this.state.ingredients[ingr[i]]));
      }
    }

    let queryStr = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryStr
    });
  } 

  render() {
    // tip: This if stmt needs to be inside render because, the component is re-rendered everytime there is a state change. so when we update the ingredients object in the state (we update it from componentsDidMount function), the render method is called and the below if stmt is re-executed.
    if(this.state.ingredients){
      this.burgerData = (
        <div>
          <Modal show={this.state.purchasing} closeModal={this.cancelPurchase}>
            <OrderSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} onCheckoutClick={this.checkoutClickedHandler} loaded={this.state.loaded}></OrderSummary>
          </Modal>
          <Burger ingredients={this.state.ingredients}></Burger>
          <BuildControls price={this.state.totalPrice} ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} orderdisabled={this.state.orderDisabled} purchase={this.purchaseHandler}></BuildControls>
        </div>
      );
    }
    return this.burgerData;
  }
}

export default GlobalErrorHandler(BurgerBuilder, BurgerBuilder.error);