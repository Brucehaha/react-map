import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Map from './container/map/map';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Map />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
