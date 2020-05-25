import React from 'react';
import classes from './Backdrop.css';

const Backdrop = (props) => {
  let appliedClasses = classes.Backdrop;
  return (
    <div className={
      props.show ? appliedClasses + ' ' + classes.showBackdrop : appliedClasses + ' ' + classes.hideBackdrop
    } onClick={props.closeModal}>
    </div>
  );
}

export default Backdrop;