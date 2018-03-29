import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { createViewerFromUrl } from 'itk-vtk-image-viewer/src';

//const imageViewerContainer = document.querySelector('.image-viewer-container');
//createViewerFromUrl(
  //imageViewerContainer,
  //'https://data.kitware.com/api/v1/file/564a65d58d777f7522dbfb61/download/data.nrrd'
//).then(function(viewer) {});
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
