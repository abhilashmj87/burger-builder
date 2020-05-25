import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';


const Modal = (props) => {
  let appliedClasses = classes.Modal;
  
  return (
    <div>
      <Backdrop show={props.show} closeModal={props.closeModal}></Backdrop>
      <div className={
        props.show ? appliedClasses + ' ' + classes.showModal : appliedClasses + ' ' + classes.hideModal
      }>
        {props.children}
      </div>
    </div>
    
  );
}

export default Modal;