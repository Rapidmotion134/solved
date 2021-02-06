import React, { Component } from "react";
import DeleteButton from "../../Components/Buttons/DeleteButton";
import EditButton from "../../Components/Buttons/EditButton";
import './Issue.css';

class Issue extends Component {
    constructor(props){
        super(props);
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
                <div className="buttons">
                    <EditButton/>
                    <DeleteButton/>  
                </div>
            </div>
        );
    }
}

export default Issue;
