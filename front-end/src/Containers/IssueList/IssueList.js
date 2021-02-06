import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateButton from '../../Components/Buttons/CreateButton';
import './IssueList.css';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues : []
        }
    }

    componentDidMount () {
        fetch("/user/1/issues")
        .then(response => response.json())
        .then(data => this.setState({issues : data}));
    }

    render() {
        return (
            <div className="table">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead style={{backgroundColor:"#282c34", color:"white"}}>
                        <TableRow>
                            <TableCell style={{color:"#FFFFFF", width:"25%"}} align="left">Issue</TableCell>
                            <TableCell style={{color:"#FFFFFF", width:"60%"}} align="left">Description</TableCell>
                            <TableCell style={{color:"#FFFFFF", width:"15%"}} align="center">Creation Date</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.issues.map((issue) => (
                            <TableRow key={issue.issueId}>
                            <TableCell component="th" scope="row" className="link pointer dim" style={{backgroundColor:"#E0E0E0"}}>
                                {issue.name}
                            </TableCell>
                            <TableCell align="left">{issue.description}</TableCell>
                            <TableCell align="center">{issue.creationDate}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="button">
                    <CreateButton/>
                </div>
            </div>
        );
    }
}

export default IssueList;
