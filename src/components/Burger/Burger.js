import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
    return (
        <div className={classes.amj_burger}>
            <BurgerIngredients type="bread-top"></BurgerIngredients>
            <BurgerIngredients type="meat"></BurgerIngredients>
            <BurgerIngredients type="cheese"></BurgerIngredients>
            <BurgerIngredients type="bread-bottom"></BurgerIngredients>
        </div>
    );
}

export default Burger;