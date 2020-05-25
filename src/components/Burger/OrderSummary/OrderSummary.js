import React from 'react';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map ( (el, i) => {
    return <li key={el + i + i}>{el}: {props.ingredients[el]}</li> ;
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>Delicious Burger With: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <Button color="primary">Checkout</Button>
    </div>
  )
}

export default OrderSummary;