import React, { Component } from 'react';
import './App.css';
import Interface from './components/Interface';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Title-container'>
          <h1>Tribe EQ</h1>
        </div>
        <Interface />
      </div>
    );
  }
}

export default App;
