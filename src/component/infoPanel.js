import React, { Component } from 'react';
import "../Assets/css/infoPanel.css"


class InfoPanel extends Component {
  render() {
    return (
    	<div className='InfoPanel'>
	    	<div className="panel panel-default">
	  			<h4>Information Panel</h4>
	  			<div className="panel-body">
			       	<p>
			       	The current selection of species is: <strong>{this.props.species} </strong>
			       	</p>
			       	<p>
			       	The current selection of temperature is: <strong>{this.props.temperature} degree celcius </strong>
			       	</p>
			       	<p>
			       	The current selection of salinity is: <strong>{this.props.salinity} ppt </strong>
			       	</p>
			       	<p>
			       	The current selection of durg is: <strong> {this.props.drug} </strong>
			       	</p>
			       	</div>
			</div>
    	</div>
    );
  }
}

export default InfoPanel;