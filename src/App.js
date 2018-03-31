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
  simulate = (species) => {
    if (species == 'Strongylocentrotus purpuratus') {
      this.setState({imageIndexes : [0, 0, 0, 0, 0, 0, 0, 0]});
    }
  };
   // && temperature == '15' && salinity =='30' && drug == 'none'
  
  render() {
    return (
      <div className="App" >
        <Helmet>
                <style>{'body { background-color: #99ff99; }'}</style>
        </Helmet>
        <Navbar />
        <p>{this.state.species} {this.state.temperature} {this.state.salinity} {this.state.drug} {this.state.imageIndexes}</p>
        <div className="btn-group">
          
          <button
            className="btn btn-primary"
            onClick={() => {this.simulate(this.state.species)}}>Start Simulate</button>
          <button
            className="btn btn-primary"  
            >Reset</button>
          <button
            className="btn btn-primary"  
            >Calculate Recipe</button>
          
        </div>
        <SetupPanel 
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
