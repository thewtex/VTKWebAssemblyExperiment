import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios'
import curry from 'curry'
import PromiseFileReader from 'promise-file-reader'

import readImageFile from 'itk/readImageFile'
import runPipelineBrowser from 'itk/runPipelineBrowser'
import IOTypes from 'itk/IOTypes'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

let inputImage = null

// Print output input image's information
const outputFileInformation = curry(function outputFileInformation (outputTextArea, eventOrFile) {
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

const runMedicalDemo1 = function() {
  const pipelinePath = 'MedicalDemo1'
  const args = ['InputImage.vtk', 'OutputSurface.vtk']
  const desiredOutputs = [
    { path: args[1], type: IOTypes.Binary }
  ]
  console.log('inputImage:')
  console.log(inputImage)
  const inputs = [
    { path: args[0], type: IOTypes.Binary, data: new Uint8Array(inputImage) }
  ]
  return runPipelineBrowser(pipelinePath, args, desiredOutputs, inputs)
  .then(function ({stdout, stderr, outputs}) {
    console.log(stdout)
    console.log(stderr)
    console.log(outputs)
  })
}
const runMedicalDemo1Button = document.getElementById('runMedicalDemo1');
runMedicalDemo1Button.addEventListener('click', runMedicalDemo1)


// An example input image to use
const fileName = 'FullHead.vtk'
const testFilePath = './' + fileName
axios.get(testFilePath, {responseType: 'blob'})
  .then(function (response) {
    const jsFile = new window.File([response.data], fileName)
    return jsFile
  }).then(function (jsFile) {
    outputInputImageInformation(jsFile);
    return readImageFile(jsFile)
  }).then(function (image) {
    image.name = fileName;
    console.log(image)
  })

