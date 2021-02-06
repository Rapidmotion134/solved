import React, { Component } from "react";
import './App.css';
import Issue from "./Issue";
import IssueList from "./IssueList";
import Navigation from "./Navigation";

class App extends Component {
  render () {  
    return (  
      <div className="App">
        <header className="App-header">
          <Navigation/>
        </header>
        <div className="App-body">
          <IssueList/>
          <Issue/>
        </div>
      </div>
    )
  };
}

export default App;
