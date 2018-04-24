
import React, { Component } from 'react';
import Popup from "reactjs-popup";
//

class CustomModal extends Component {
	constructor(props) {
    	super(props)
    }
   

  render()  {
    return (
	    <Popup trigger={<button onClick={() => {this.calculate()}}> Calculate Recipe </button>} position="right center">
	    	<div>The recipe based on current set-up is: <strong> {this.props.SWrecipe} {this.props.drugRecipe} </strong></div>
	    </Popup>
 	);
  }
}

export default CustomModal;