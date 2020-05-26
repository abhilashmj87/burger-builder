import React from 'react';
import classes from './Layout.css';
import BurgerToolbar from '../Navigation/burgerToolbar/BurgerToolbar';

const layout = (props) => {
  return (
  <div>
    <BurgerToolbar> </BurgerToolbar>
    <div> Toolbar, sidebar, backdrop</div>
    <main className={classes.amj_content}>
      {props.children}
    </main>
  </div>
  );
}

export default layout;
