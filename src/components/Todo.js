import { useState } from 'react' 

import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
  // WHAT DO WE WANT TO ACHIEVE?
  // we only want the modal, or background, to be open if any delete button is clicked
  // we want the modal and beackground to work together, their state should always be the same
  // their initial state should be closed (open === false)
  // if they are open, we want to be able to close both whenever a user clicks on the cancel or confirm button, or anywhere outside of the modal 
  
  // WHAT TOOLS WILL WE USE?
  // use the React Hook function 'useState' in combination with a click event handler
  
  // DEAL WITH THE MODAL FIRST - modalIsOpen
  // 1. directly inside of the Todo componnent function code block, create a useState hook and set the initial open state to false, 
  // 2. use array destructuring to declare two varibles that will store the element array will return from our useState function.
        // modalIsOpen :to conditionally render the modal based on currently stored state value
        // setModalIsOpen :the function that will execute to assign a new state value when an argument is passed  
  // 2. set the initial state to (false) 
  const [ modalIsOpen, setModalIsOpen ] = useState(false); 
  
  // create a click event handler function to set an open state
  // inside the code block, have the function execute our setModalIsOpen function
  // passing in 'true' as the argument to this setModalIsOpen function so as to set state to that value
  function deleteHandler() {
    setModalIsOpen(true);
  }

  // // create a click event handler function to close the modal, setting state value to 'false'
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          {/* pass in our deleteHandler function to OPEN the modal */}
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {/* use a conditional operator as a boolean test to establish if both the 'modelIsOpen value' is 'true' and the 'closeModalHandler' is 'true'. If both are true the modal is rendered, if either are false, the modal should not be rendered. */}
        {/* pass in our closeModalHandler to each of the buttons in the modal and onto the backdrop to CLOSE the modal */}
        {modalIsOpen && (
                <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
      </div>
    );
  }

export default Todo;