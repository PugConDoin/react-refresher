import { useState } from 'react' 

import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
  // we only want to see the modal, or background, if the delete button is clicked
  // if open, we want to close both whenever the cancel, confirm or outside modal is subsequently clicked 
  // 1. create a useState hook to manage the state of modalIsOpen  
  // 2. set the initial state to (false) 
  const [ modalIsOpen, setModalIsOpen ] = useState(false); 
  
  // create a function to handle the change of state to true when the delete button is clicked 
  function deleteHandler() {
    setModalIsOpen(true);
  }

  // create a function to handle the change of state back to false when we want to close the modal 
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {/* boolean test to establish if both the modelIsOpen value is true and the Component function is true. If both are true render the modal.
        if either are false, do not render the modal. closeModalHandler will change state to false if either the cancel or confirm buttons are clicked. */}
        {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
      </div>
    );
  }

export default Todo;