import React, { Component } from 'react';
import "../Assets/css/ctrlPanel.css"


class CtrlPanel extends Component {
	constructor(props) {
    	super(props)

    	this.state = {
      		startCulture: 'Start Culture',
          reset: 'Reset',
          calculate: 'Calculate Recipe'
    }
  }
  render()  {
    return (
    	<div className="CtrlPanel">
        <h2>Control Panel</h2>
        <div className="btn-group">
    	    
      		<button
        		className="btn btn-primary"
        		onClick={this.props.handleClick}>{this.state.startCulture}</button>
          <button
            className="btn btn-primary"  
            onClick={this.props.handleClick}>{this.state.reset}</button>
          <button
            className="btn btn-primary"  
            onClick={this.props.handleClick}>{this.state.calculate}</button>
        </div>
      </div>
    	);
 	}
}

export default CtrlPanel;