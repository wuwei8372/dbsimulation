import React, { Component } from 'react';
import $ from 'jquery';
import Helmet from 'react-helmet';
import Navbar from './component/navbar';
import CtrlPanel from './component/ctrlPanel';
import SetupPanel from './component/setupPanel';
import InfoPanel from './component/infoPanel';
import SimuPanel from './component/SimuPanel';
import PopModal from './component/PopModal';

class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
          one: '1',
          temperature: '15',
          species: 'Strongylocentrotus purpuratus',
          salinity: '30',
          drug: 'none',
          imageIndexes : [0, 1, 2, 3, 4, 5, 6, 7, 8],
          SWrecipe : "450 mM NaCl, 10 mM KCl, 9 mM CaCl2, 30 mM MgCl2·6H2O, 16 mM MgSO4·7H2O",
          drugRecipe : ""
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
      if (dataFromSetup== '20') {
        this.setState({
          SWrecipe : "300 mM NaCl, 6.67 mM KCl, 6 mM CaCl2, 20 mM MgCl2·6H2O, 10.67 mM MgSO4·7H2O",
        })
      }
      if (dataFromSetup== '30') {
        this.setState({
          SWrecipe : "450 mM NaCl, 10 mM KCl, 9 mM CaCl2, 30 mM MgCl2·6H2O, 16 mM MgSO4·7H2O",
        })
      }
      if (dataFromSetup == '40') {
        this.setState({
          SWrecipe : "650 mM NaCl, 13.33 mM KCl, 12 mM CaCl2, 40 mM MgCl2·6H2O, 21.33 mM MgSO4·7H2O",
        })
      }
  };
  myCallbackDr = (dataFromSetup) => {
      this.setState({drug : dataFromSetup});
      if (dataFromSetup == 'none') {
        this.setState({
              drugRecipe : ""
        })
      }
      if (dataFromSetup == 'ATA') {
        this.setState({
              drugRecipe : ", 0.5 mM ATA"
        })
      }
      if (dataFromSetup== 'Fertilizer') {
        this.setState({
              drugRecipe : ", 1:500 Fertilizer"
        })
      }
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
    if (species == 'Lytechinus variegatus' && temperature == '20') {
      // should find a 60 cell stage later
      this.setState({imageIndexes: [0,1,2,3,4,6,7,8,8]});
      return;
    }
    if (species == 'Lytechinus variegatus' && temperature == '23') {
      // should find a 60 cell stage later
      this.setState({imageIndexes: [0,2,4,5,7,8,8,8,8]});
      return;
    }
    if (species == 'Lytechinus variegatus' && temperature == '25') {
      // should find a 60 cell stage later
      this.setState({imageIndexes: [0,3,4,6,7,8,8,8,8]});
      return;
    }
    this.setState({imageIndexes : [9,9,9,9,9,9,9,9,9]});
    
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
        
        <Navbar />
        <div className="btn-div">
          <h4> Control Panel </h4>
          <div className="btn-group">
            
            <button
              
              onClick={() => {this.simulate(this.state.species, this.state.temperature, this.state.salinity, this.state.drug)}}>Start Simulate</button>
            <button
                
              onClick={() => {this.reset()}}>Reset</button>
             
            <PopModal SWrecipe={this.state.SWrecipe} drugRecipe={this.state.drugRecipe}/>
          </div>
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
