import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';

const xValueSize = [
  'ImageMarchingCubes<br> vtk.js',
  'GenerateModelsFromLabels<br> asm.js',
  'GenerateModelsFromLabels<br> wasm',
  'ITK pipeline<br> asm.js',
  'ITK pipeline<br> wasm',
];
const yValueSize = [
  32,
  8036,
  3752,
  752,
  3752,
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VTK WebAssembly Experiment</h1>
          <img src={logo} className="App-logo" alt="logo" />
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
        layout={{width: 1024, height: 480, title: 'Filter Size (KB)'}}
      />
      </div>
    );
  }
}

export default App;
