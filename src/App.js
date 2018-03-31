import React, { Component } from 'react';
import $ from 'jquery';
import Helmet from 'react-helmet';
import Navbar from './component/navbar';
import CtrlPanel from './component/ctrlPanel';
import SetupPanel from './component/setupPanel';
import InfoPanel from './component/infoPanel';
import SimuPanel from './component/SimuPanel';
class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
          one: '1',
          temperature: '15',
          species: 'Strongylocentrotus purpuratus',
          salinity: '30',
          drug: 'none',
          imageIndexes : [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }
  }
  
  myCallbackSp = (dataFromSetup) => {
      this.setState({species : dataFromSetup});
  };
  myCallbackTm = (dataFromSetup) => {
      this.setState({temperature : dataFromSetup});
  };
  myCallbackSa = (dataFromSetup) => {
      this.setState({salinity : dataFromSetup});
  };
  myCallbackDr = (dataFromSetup) => {
      this.setState({drug : dataFromSetup});
  };
  simulate = (species, temperature, salinity, drug) => {
    if (salinity == '20' || salinity == '40') {
      this.setState({imageIndexes : [0, 0, 0, 0, 0, 0, 0, 0, 0]});
      return;
    }
    if (drug == 'Fertilizer') {
      this.setState({imageIndexes : [0, 0, 0, 0, 0, 0, 0, 0, 0]});
      return;
    }
    if (species == 'Strongylocentrotus purpuratus' && temperature == '15') {
      this.setState({imageIndexes : [0, 1, 2, 3, 4, 5, 6, 7, 8]});
      return;
    }
    this.setState({imageIndexes : []});
    
  };
  reset = () => {
    this.setState({temperature: '15'});
    this.setState({salinity: '30'});
    this.setState({drug: 'none'});
    this.setState({species: 'Strongylocentrotus purpuratus'});
    this.setState({imageIndexes: [0,1,2,3,4,5,6,7,8]});    
  }
   // && temperature == '15' && salinity =='30' && drug == 'none'
  
  render() {
    return (
      <div className="App" >
        <Helmet>
                // <style>{"{ backgroundImage: 'url(require(./images/egg.jpg))' }"}</style>
                <style>{'body { background-color: #99ff99; }'}</style>
        </Helmet>
        <Navbar />
        <p>{this.state.species} {this.state.temperature} {this.state.salinity} {this.state.drug} {this.state.imageIndexes}</p>
        <div className="btn-group">
          
          <button
            className="btn btn-primary"
            onClick={() => {this.simulate(this.state.species, this.state.temperature, this.state.salinity, this.state.drug)}}>Start Simulate</button>
          <button
            className="btn btn-primary"  
            onClick={() => {this.reset()}}>Reset</button>
          <button
            className="btn btn-primary"  
            >Calculate Recipe</button>
          
        </div>
        <SetupPanel 
            temperature = {this.state.temperature}
            salinity = {this.state.salinity}
            species = {this.state.species}
            drug = {this.state.drug}
            callBackFromAppSp={this.myCallbackSp}
            callBackFromAppTm={this.myCallbackTm}
            callBackFromAppSa={this.myCallbackSa}
            callBackFromAppDr={this.myCallbackDr} />
        <SimuPanel imageIndexesFromApp={this.state.imageIndexes} />

      </div>
      
    );
  }
}

export default App;
