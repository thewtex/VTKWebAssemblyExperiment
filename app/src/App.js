import React, { Component } from 'react';
import logo from './VTKWebAssemblyExperiment.png';
import './App.css';
import Plot from 'react-plotly.js';

const xValueSize = [
  'ImageMarchingCubes<br> vtk.js',
  'GenerateModelsFromLabels<br> asm.js',
  'GenerateModelsFromLabels<br> wasm',
  'MedicalDemo1<br> asm.js',
  'MedicalDemo1<br> wasm',
  'ITK pipeline<br> asm.js',
  'ITK pipeline<br> wasm',
];
const yValueSize = [
  32,
  8036,
  3752,
  7963,
  3764,
  1356,
  752,
];

const yValueTiming = [
  'MedicalDemo1<br> Linux Native Binary',
  'MedicalDemo1<br> Linux Chrome 65.0.3325.162<br> First Run',
  'MedicalDemo1<br> Linux Chrome 65.0.3325.162<br> Second Run',
  'MedicalDemo1<br> Linux Chrome 65.0.3325.162<br> Execution',
  'MedicalDemo1<br> Linux Firefox 59.0.1<br> First Run',
  'MedicalDemo1<br> Linux Firefox 59.0.1<br> Second Run',
  'MedicalDemo1<br> Linux Firefox 59.0.1<br> Execution',
  '',
  'GenerateModelsFromLabels<br> Linux Native Binary',
  'GenerateModelsFromLabels<br> Linux Chrome 65.0.3325.162<br> First Run',
  'GenerateModelsFromLabels<br> Linux Chrome 65.0.3325.162<br> Second Run',
  'GenerateModelsFromLabels<br> Linux Chrome 65.0.3325.162<br> Execution',
  'GenerateModelsFromLabels<br> Linux Firefox 59.0.1<br> First Run',
  'GenerateModelsFromLabels<br> Linux Firefox 59.0.1<br> Second Run',
  'GenerateModelsFromLabels<br> Linux Firefox 59.0.1<br> Execution',
];
const xValueTiming = [
  790,
  4276,
  2932,
  2862,
  4306,
  3654,
  3536,

  0,

  1332,
  4896,
  3427,
  3316,
  4878,
  4068,
  3972,
  ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VTK WebAssembly Experiment</h1>
        </header>
        <p className="App-intro">
    Performance of VTK isosurface contouring algorithms in the browser as of 2018-03-30.
        </p>
        <img src={logo} height="300px" alt="logo" />
       <Plot
        data={[
          {
            x: xValueSize,
            y: yValueSize,
            type: 'bar',
          },
        ]}
        layout={{width: 1024, height: 480, margin: { l: 100, r: 50, t: 100, b: 180 }, yaxis: { title: 'File size (KB)' }, title: 'File Size (KB) - Smaller is Better'}}
      />
       <Plot
        data={[
          {
            x: xValueTiming,
            y: yValueTiming,
            orientation: 'h',
            type: 'bar',
            marker: {
              color: 'rgba(255,153,51,0.6)',
              width: 1
            }
          },
        ]}
        layout={{width: 1024, height: 880, margin: { l: 200, r: 20, t: 120, b: 50 }, xaxis: { title: 'Duration (ms)' }, title: 'Timing (milliseconds) - Lower is Better'}}
      />


      </div>
    );
  }
}

export default App;
