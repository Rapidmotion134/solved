import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateButton from './CreateButton';

class IssueList extends Component {
    constructor(props) {
        super(props);
        // this.style = {
        //     table:  "minWidth: 500",        
        // };
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
            <div>
                <TableContainer component={Paper}>
               <Table aria-label="simple table">
                    <TableHead style={{backgroundColor:"#282c34"}}>
                    <TableRow>
                        <TableCell style={{color:"#FFFFFF"}}>Issue</TableCell>
                        <TableCell style={{color:"#FFFFFF"}} align="right">Description</TableCell>
                        <TableCell style={{color:"#FFFFFF"}} align="right">Creation Date</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.issues.map((issue) => (
                        <TableRow key={issue.name}>
                        <TableCell component="th" scope="row" className="link pointer dim">
                            {issue.name}
                        </TableCell>
                        <TableCell align="right">{issue.description}</TableCell>
                        <TableCell align="right">{issue.creationDate}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <CreateButton/>
            </div>
        );
    }
}

export default IssueList;