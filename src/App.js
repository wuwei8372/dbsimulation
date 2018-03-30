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
          one: '1'
          
    }
  }
  render() {
    return (
      <div className="App" >
        <Helmet>
                <style>{'body { background-color: #99ff99; }'}</style>
        </Helmet>
        <Navbar />
        <CtrlPanel />
        <SetupPanel />
        <SimuPanel first='1'/>

      </div>
      
    );
  }
}

export default App;
