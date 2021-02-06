import React, { Component } from "react";
import './App.css';
import Issue from "../Issue/Issue";
import IssueList from "../IssueList/IssueList";
import Navigation from "../../Components/Navigation/Navigation";
import CreateForm from "../../Components/CreateForm/CreateForm";
import EditForm from "../EditForm/EditForm";

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
          <CreateForm/>
          <EditForm/>
        </div>
      </div>
    )
  };
}

export default App;
