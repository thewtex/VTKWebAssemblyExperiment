import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios'
import curry from 'curry'
import PromiseFileReader from 'promise-file-reader'
import FileSaver from 'file-saver'

import readImageFile from 'itk/readImageFile'
import runPipelineBrowser from 'itk/runPipelineBrowser'
import IOTypes from 'itk/IOTypes'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

let inputImage = null

// Print output input image's information
const outputFileInformation = curry(function (outputTextArea, eventOrFile) {
  const dataTransfer = eventOrFile.dataTransfer
  let file = eventOrFile
  if (dataTransfer || eventOrFile.target) {
    const files = eventOrFile.target.files || dataTransfer.files
    file = files[0]
  }
  PromiseFileReader.readAsArrayBuffer(file).then(function(arrayBuffer) { inputImage = arrayBuffer; })
  return readImageFile(file)
    .then(function (image) {
      function replacer (key, value) {
        if (!!value && value.byteLength !== undefined) {
          return String(value.slice(0, 6)) + '...'
        }
        return value
      }
      outputTextArea.textContent = JSON.stringify(image, replacer, 4)
    })
})
const outputTextArea = document.getElementById('fileInformationTextArea')
const outputInputImageInformation = outputFileInformation(outputTextArea)
const imageFileInput = document.getElementById('imageInput')
imageFileInput.addEventListener('change', outputInputImageInformation);



// MedicalDemo1
let medicalDemo1Output = null

const runMedicalDemo1 = function() {
  const pipelinePath = 'MedicalDemo1'
  const args = ['InputImage.vtk', 'OutputSurface.vtk']
  const desiredOutputs = [
    { path: args[1], type: IOTypes.Binary }
  ]
  const inputImageCopy = inputImage.slice(0);
  const image = new Uint8Array(inputImageCopy)
  const inputs = [
    { path: args[0], type: IOTypes.Binary, data: image }
  ]

  const t0 = performance.now()
  return runPipelineBrowser(pipelinePath, args, desiredOutputs, inputs)
    .then(function ({stdout, stderr, outputs}) {
      const t1 = performance.now();
      const medicalDemo1TextArea = document.getElementById('medicalDemo1TextArea');
      const duration = Number(t1 - t0).toFixed(1).toString()
      medicalDemo1TextArea.textContent = "Runtime initialization, execution, and data marshalling took: " + duration + " milliseconds.\n" + stdout
      medicalDemo1Output = outputs[0].data
      console.log("runMedicalDemo1 took " + duration + " milliseconds.")
      console.log(stderr)
    })
}

const runMedicalDemo1Button = document.getElementById('runMedicalDemo1');
runMedicalDemo1Button.addEventListener('click', runMedicalDemo1)

const downloadMedicalDemo1Output = function () {
  const isosurfaceBlob = new window.Blob([medicalDemo1Output])
  FileSaver.saveAs(isosurfaceBlob, 'OutputSurface.vtk')
}
const medicalDemo1DownloadButton = document.getElementById('runMedicalDemo1Output');
medicalDemo1DownloadButton.addEventListener('click', downloadMedicalDemo1Output)



// GenerateModelsFromLabels
let generateModelsFromLabelsOutput = null

const runGenerateModelsFromLabels = function() {
  const pipelinePath = 'GenerateModelsFromLabels'
  const args = ['InputImage.vtk', '1', '1']
  const desiredOutputs = [
    { path: 'Label1.vtk', type: IOTypes.Binary }
  ]
  const inputImageCopy = inputImage.slice(0);
  const image = new Uint8Array(inputImageCopy)
  const inputs = [
    { path: args[0], type: IOTypes.Binary, data: image }
  ]

  const t0 = performance.now()
  return runPipelineBrowser(pipelinePath, args, desiredOutputs, inputs)
  .then(function ({stdout, stderr, outputs}) {
    const t1 = performance.now();
    const generateModelsFromLabelsTextArea = document.getElementById('generateModelsFromLabelsTextArea');
    const duration = Number(t1 - t0).toFixed(1).toString()
    generateModelsFromLabelsTextArea.textContent = "Runtime initialization, execution, and data marshalling took: " + duration + " milliseconds.\n" + stdout
    generateModelsFromLabelsOutput = outputs[0].data
    console.log("runGenerateModelsFromLabels took " + duration + " milliseconds.")
    console.log(stderr)
  })
}

const runGenerateModelsFromLabelsButton = document.getElementById('runGenerateModelsFromLabels');
runGenerateModelsFromLabelsButton.addEventListener('click', runGenerateModelsFromLabels)

const downloadGenerateModelsFromLabelsOutput = function () {
  const isosurfaceBlob = new window.Blob([generateModelsFromLabelsOutput])
  FileSaver.saveAs(isosurfaceBlob, 'OutputSurface.vtk')
}
const generateModelsFromLabelsDownloadButton = document.getElementById('runGenerateModelsFromLabelsOutput');
generateModelsFromLabelsDownloadButton.addEventListener('click', downloadGenerateModelsFromLabelsOutput)



// An example input image to use by default
const fileName = 'FullHead.vtk'
const testFilePath = './' + fileName
axios.get(testFilePath, {responseType: 'blob'})
  .then(function (response) {
    const jsFile = new window.File([response.data], fileName)
    return jsFile
  }).then(function (jsFile) {
    outputInputImageInformation(jsFile);
    return readImageFile(jsFile)
  })
