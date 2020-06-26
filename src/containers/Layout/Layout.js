import React, { Component } from 'react';
import classes from './Layout.css';
import BurgerToolbar from '../../components/Navigation/burgerToolbar/BurgerToolbar';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Checkout from '../Checkout/Checkout';
import { Route } from 'react-router-dom';

class Layout extends Component {
  state = {
    drawerOpen: false
  };

  // Tip: when using the below function syntax, this is not bound to the class anymore. The function gets executed in the global scope. so, this.toggleDrawer will execute the function but not in 'this' scope. To fix it, change the call to this.toggleDrawer.bind(this) . another alternative is to change the syntax to variable method syntax --> toggleDrawer = () => {...}. Now you can just call this.toggleDrawer and the function gets executed in the right scope
  toggleDrawer() {
    this.setState({drawerOpen: !this.state.drawerOpen});
  };

  render () {
    return (
      <div>
        <BurgerToolbar controlDrawer={this.toggleDrawer.bind(this)}></BurgerToolbar>
        <SideDrawer drawerOpen={this.state.drawerOpen} drawerOnOpen={this.toggleDrawer.bind(this)} drawerOnClose={this.toggleDrawer.bind(this)}></SideDrawer>
        <main className={classes.amj_content}>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/" exact component={BurgerBuilder}></Route>
        </main>
      </div>
    )
  };
}

export default Layout;
