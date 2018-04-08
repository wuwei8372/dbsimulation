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
			       	</p>
			       	<p>
			       	The current selection of temperature is: {this.props.temperature} degree celcius
			       	</p>
			       	<p>
			       	The current selection of salinity is: {this.props.salinity} ppt
			       	</p>
			       	<p>
			       	The current selection of durg is: {this.props.drug}
			       	</p>
			       	<p>
			       	The current recipe for reagent needed for the experiment is:
			       	</p>
	  			</div>
			</div>
    	</div>
    );
  }
}

export default InfoPanel;