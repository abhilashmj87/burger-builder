import React from 'react';
import Modal from '../../components/UI/Modal/Modal';

const GlobalErrorHandler = (Comp, error) => {
  return (props) => {
    let clearError = () => {
      error = null;
    };

    return (
      <div>
        <Modal show={error} closeModal={clearError}>
          {error}
        </Modal>
        <Comp {...props}></Comp>
      </div>
    );
  }
}

export default GlobalErrorHandler;