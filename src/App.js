import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Navbar from './component/navbar';
import CtrlPanel from './component/ctrlPanel';
import SetupPanel from './component/setupPanel';
import InfoPanel from './component/infoPanel';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <Helmet>
                <style>{'body { background-color: #99ff99; }'}</style>
        </Helmet>
        <Navbar />
        <CtrlPanel />
        <SetupPanel />
        

      </div>
      
    );
  }
}

export default App;
