import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';

const xValueSize = [
  'vtk.js ImageMarchingCubes',
  'GenerateModelsFromLabels - asm.js',
  'GenerateModelsFromLabels - wasm'
];
const yValueSize = [32, 6, 3];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       <Plot
        data={[
          {
            x: xValueSize,
            y: yValueSize,
            type: 'bar',
          },
        ]}
        layout={{width: 1024, height: 480, title: 'Filter Size (kB)'}}
      />
      </div>
    );
  }
}

export default App;
