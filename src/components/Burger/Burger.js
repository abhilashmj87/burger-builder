import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
    let addedIngredients = Object.keys(props.ingredients);
    let transformedIngredients = [];
    addedIngredients.forEach( ig => {
        for(let i = 0 ; i < props.ingredients[ig]; i++) {
            transformedIngredients.push(<BurgerIngredients key={ ig + i } type={ ig }></BurgerIngredients>);
        }
    });
    if(transformedIngredients.length === 0) {
        transformedIngredients.push(<p>Please add ingredients</p>);
    }
    return (
        <div className={classes.amj_burger}>
            <BurgerIngredients type="bread-top-with-seed"></BurgerIngredients>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"></BurgerIngredients>
        </div>
    );
}

export default Burger;