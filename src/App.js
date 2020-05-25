import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

export default class App extends Component {

  state = {
    //userName: ["abhilashmj", "mjabhilash", "mjabhilashmj"]
  };

  changeState = (event) => {
    // tip: DON'T DO THIS. REACT DOES NOT RECOGNIZE THIS SYNTAX FOR STATES 
    // this.state.userName[0] = "Deepika";

    // tip: DO THIS
    this.setState({
      userName: [event.target.value, "mjabhilash", "mjabhilashmj"]
    });

  }
  render() {

    return (
      <div>
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );

    // tip: Internally, React writes the below code to replace the jsx code above. Since the below code is complex to code, we use the above jsx syntax.
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello World'));
  }
}
