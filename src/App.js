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
  render() {
    return (
      <div className="App" >
        <Helmet>
                <style>{'body { background-color: #99ff99; }'}</style>
        </Helmet>
        <Navbar />
        <p>{this.state.species} {this.state.temperature} {this.state.salinity} {this.state.drug}</p>
        <CtrlPanel />
        <SetupPanel 
            callBackFromAppSp={this.myCallbackSp}
            callBackFromAppTm={this.myCallbackTm}
            callBackFromAppSa={this.myCallbackSa}
            callBackFromAppDr={this.myCallbackDr} />
        <SimuPanel first={this.state.one} />

      </div>
      
    );
  }
}

export default App;
