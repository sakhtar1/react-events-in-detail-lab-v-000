// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
<<<<<<< HEAD

=======
>>>>>>> 4c86d367df7966bd8a2ea2feb5b4fc1a498366e2
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

<<<<<<< HEAD

  render(){
    return(
=======
  render() {
    return (
>>>>>>> 4c86d367df7966bd8a2ea2feb5b4fc1a498366e2
      <button onClick={this.handleClick}>Button</button>
    );
  }
}
<<<<<<< HEAD
=======


>>>>>>> 4c86d367df7966bd8a2ea2feb5b4fc1a498366e2
