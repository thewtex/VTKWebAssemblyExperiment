import React from 'react';
import './App.css';

import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";

export class App extends React.Component {
  render() {
    return (
      <UWPThemeProvider
        theme={getTheme({
          themeName: "dark", // set custom theme
          accent: "#0078D7", // set accent color
          useFluentDesign: true, // sure you want use new fluent design.
          desktopBackgroundImage: "public/background.svg" // set global desktop background image
        })}
      >
	<div className="App">
	  <header className="App-header">
	    <h1 className="App-title">VTK WebAssembly Experiment</h1>
	  </header>
	</div>
	<h1>VTK WebAssembly Experiment</h1>
      </UWPThemeProvider>
    )
  }
}


export default App;
