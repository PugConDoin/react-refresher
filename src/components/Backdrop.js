function Backdrop(props) {
  // set the 'onClick' prop to call the 'onCancel' function when the Backdrop 'div' is clicked. We use the onCancel prop when we return the render state for Backdrop in the Todos Component.
  return <div className="backdrop" onClick={props.onCancel}></div>
}

export default Backdrop;