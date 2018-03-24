import React, { Component } from 'react';
import "../Assets/css/setupPanel.css"
import InfoPanel from './infoPanel.js';


class SetupPanel extends Component {
	constructor(props) {
    	super(props)

    	this.state = {
      		startCulture: 'Start Culture',
          species: 'Strongylocentrotus purpuratus',
          calculate: 'Calculate Recipe'
    }

  }
  handleChangeSp = (e) => {
      this.setState({species:e.target.value})
  };
  render()  {
    return (
    	<div className="SetupPanel">
        <h2>Set-up Panel</h2>
          <div className="select group">
          <select value={this.state.species} onChange={this.handleChangeSp}>
            <option value="Strongylocentrotus purpuratus">Species selected: Strongylocentrotus purpuratus</option>
            <option value="Lytechinus variegatus">Species selected: Lytechinus variegatus</option>
          </select>
          <select>
            <option value='15'>Temperature selected: "15 degree celcius"</option>
            <option value='20'>Temperature selected: "20 degree celcius"</option>
            <option value='23'>Temperature selected: "23 degree celcius"</option>
            <option value='25'>Temperature selected: "25 degree celcius"</option>
          </select>
          <select>
            <option value='20'>Salinity selected: "20 ppt"</option>
            <option value='30'>Salinity selected: "30 ppt"</option>
            <option value='40'>Salinity selected: "40 ppt"</option>
          </select>
          <select>
            <option value='none'>Drug selected: "None"</option>
            <option value='ATA'>Drug selected: "ATA"</option>
            <option value='Fertilizer'>Drug selected: "Fertilizer"</option>
          </select>
          </div>
        <InfoPanel species={this.state.species}/>
      </div>
    	);
 	}
}

export default SetupPanel;