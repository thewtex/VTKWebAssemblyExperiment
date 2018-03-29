import React, { Component } from 'react';
import logo from './logo.svg';
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VTK WebAssembly Experiment</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
      {  /*To get started, edit <code>src/App.js</code> and save to reload. */ }
        </p>
       <Plot
        data={[
          {
            x: xValueSize,
            y: yValueSize,
            type: 'bar',
          },
        ]}
        layout={{width: 1024, height: 480, title: 'Pipeline Size (KB)'}}
      />

      <div>
     <h3>To build a VTK pipeline to JavaScript and WebAssembly:</h3>
      <p>1. <a href="https://nodejs.org/en/download/">Install Node.js</a></p>
      <p>2. <a href="https://docs.docker.com/install/">Install Docker</a></p>
      <p>3. Add the <code>itk-js</code> script to your <code>PATH</code> with: <code>npm install -g itk</code></p>
      <p>4. Download and unpack a <a href="https://lorensen.github.io/VTKExamples/site/">VTK Example</a></p>
      <p>5. Add calls to <code>web_add_executable</code> and <code>web_target_link_libraries</code> in the <code>CMakeLists.txt</code></p>
      <p>6. <code>itk-js build -i kitware/itk-js-vtk /path/to/VTK/Example/Source</code></p>
      </div>

      </div>
    );
  }
}

export default App;
