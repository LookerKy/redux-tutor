import React, { Component } from 'react';

import './App.css';
import CounterContainer from './containers/CounterContainer';
import PaletteContainer from './containers/PaletteContainer';
import WaitingContainer from './containers/WaitingContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainer />
        <WaitingContainer />
      </div>
    );
  }
}

export default App;
