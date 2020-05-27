import React from 'react';
import classes from './Layout.css';
import BurgerToolbar from '../Navigation/burgerToolbar/BurgerToolbar';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

const layout = (props) => {
  return (
  <div>
    <BurgerToolbar></BurgerToolbar>
    <div> Toolbar, sidebar, backdrop</div>
    <main className={classes.amj_content}>
      <BurgerBuilder></BurgerBuilder>
    </main>
  </div>
  );
}

export default layout;
