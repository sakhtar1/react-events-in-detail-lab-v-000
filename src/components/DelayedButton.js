// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component{

  handleClick = (event) => {
<<<<<<< HEAD
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
=======
    this.props.onDelayedClick(event.setTimeout[this.props.delay]);
>>>>>>> 4c86d367df7966bd8a2ea2feb5b4fc1a498366e2
  }

  render() {

    return(
<<<<<<< HEAD
      <button onClick={this.handleClick}>Button</button>
=======
      <button onclick={this.handleClick}> Button </button>
>>>>>>> 4c86d367df7966bd8a2ea2feb5b4fc1a498366e2
    );


  }

}
