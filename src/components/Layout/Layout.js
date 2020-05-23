import React from 'react';
import classes from './Layout.css';

const layout = (props) => {
  return (
  <div>
    <div> Toolbar, sidebar, backdrop</div>
    <main className={classes.amj_content}>
      {props.children}
    </main>
  </div>
  );
}

export default layout;
