import React, { Component } from "react";
import './App.css';
import Navigation from "./Navigation";

class App extends Component {
  render () {  
    return (  
      <div className="App">
        <header className="App-header">
          <Navigation/>
        </header>
        <div className="App-body">

        </div>
      </div>
    )
  };
}

export default App;
