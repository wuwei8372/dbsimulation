import React, { Component } from 'react';
import "../Assets/css/infoPanel.css"


class InfoPanel extends Component {
  render() {
    return (
    	<div className='InfoPanel'>
	    	<div className="panel panel-default">
	  			<div className="panel-heading">Information Panel</div>
	  			<div className="panel-body">
			       	<p>
			       	The current selection of species is: {this.props.species}
			       	The current selection of temperature is: 
			       	The current selection of salinity is: 
			       	The current selection of durg is: 
			       	</p>
	  			</div>
			</div>
    	</div>
    );
  }
}

export default InfoPanel;