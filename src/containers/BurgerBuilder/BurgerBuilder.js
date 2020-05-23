import React, { Component } from 'react';

// Always try using a class (instead fo functions) for components that deal with state (AKA containers)
export default class BurgerBuilder extends Component {
    render () {
        return (
            <div>
                <div> Burger</div>
                <div>Build controls</div>
            </div>
        );
    }
}