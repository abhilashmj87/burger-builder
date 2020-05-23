import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

// Always try using a class (instead fo functions) for components that deal with state (AKA containers)
export default class BurgerBuilder extends Component {
    render () {
        return (
            <div>
                <Burger></Burger>
                <div>Build controls</div>
            </div>
        );
    }
}