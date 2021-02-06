import React, { Component } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

class Issue extends Component {
    constructor(){
        super();
        this.state = {
            issue : [],
        }
    }
    componentDidMount(){
        fetch("/user/1/issues/1").then(response => response.json()).then(data => this.setState({issue : data}));
    }
    render () {
        return(
            <div>
                <p>Name : {this.state.issue.name}</p>
                <p>Description : {this.state.issue.description}</p>
                <p>Possible Causes : {this.state.issue.possibleCauses}</p>
                <p>Possible Fixes : {this.state.issue.possibleSolutions}</p>
                <p>Created on : {this.state.issue.creationDate}</p>
                {console.log(this.state.issue)}
                <DeleteButton/>  
                <EditButton/>
            </div>
        );
    }
}

export default Issue;