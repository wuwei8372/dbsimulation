import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Navbar from './component/navbar';
import CtrlPanel from './component/ctrlPanel';


class App extends Component {

  render() {
    return (
      <div className="App" >
        <Helmet>
                <style>{'body { background-color: #99ff99; }'}</style>
        </Helmet>
        <Navbar />
        <CtrlPanel />

      </div>
      
    );
  }
}

export default App;
