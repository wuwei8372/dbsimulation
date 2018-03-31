import React, { Component } from 'react';
import "../Assets/css/setupPanel.css"
import InfoPanel from './infoPanel.js';


class SetupPanel extends Component {
	constructor(props) {
    	super(props)

    	this.state = {
      		temperature: '15',
          species: 'Strongylocentrotus purpuratus',
          salinity: '30',
          drug: 'none',
    }

  }
  handleChangeSp = (e) => {
      this.setState({species:e.target.value});
      this.props.callBackFromAppSp(e.target.value);
  };
  handleChangeTm = (e) => {
      this.setState({temperature:e.target.value});
      this.props.callBackFromAppTm(e.target.value);
  };
  handleChangeSa = (e) => {
      this.setState({salinity:e.target.value});
      this.props.callBackFromAppSa(e.target.value);
  };
  handleChangeDr = (e) => {
      this.setState({drug:e.target.value})
      this.props.callBackFromAppDr(e.target.value);
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
          <select value={this.state.temperature} onChange={this.handleChangeTm}>
            <option value='15'>Temperature selected: "15 degree celcius"</option>
            <option value='20'>Temperature selected: "20 degree celcius"</option>
            <option value='23'>Temperature selected: "23 degree celcius"</option>
            <option value='25'>Temperature selected: "25 degree celcius"</option>
          </select>
          <select value={this.state.salinity} onChange={this.handleChangeSa}>
            <option value='20'>Salinity selected: "20 ppt"</option>
            <option value='30'>Salinity selected: "30 ppt"</option>
            <option value='40'>Salinity selected: "40 ppt"</option>
          </select>
          <select value={this.state.drug} onChange={this.handleChangeDr}>
            <option value='none'>Drug selected: "None"</option>
            <option value='ATA'>Drug selected: "ATA"</option>
            <option value='Fertilizer'>Drug selected: "Fertilizer"</option>
          </select>
          </div>
        <InfoPanel species={this.state.species} temperature={this.state.temperature} salinity={this.state.salinity} drug={this.state.drug}/>
      </div>
    	);
 	}
}

export default SetupPanel;