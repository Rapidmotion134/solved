import React, {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import SaveButton from '../../Components/Buttons/SaveButton';
import CancelButton from '../../Components/Buttons/CancelButton';
// import './CreateForm.css'

const styles = (theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(2),
          display: 'flex',
          flexWrap: 'wrap',
        },
      },
  });

class EditFormClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            issue : [],
        }
    }

    componentDidMount(){
        fetch("/user/1/issues/1").then(response => response.json()).then(data => this.setState({issue : data}));
    }

    render(){
        const { classes } = this.props;
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <span className="span">
                    <p className="pe">Name: </p> 
                    <TextField
                        style={{width:'50ch'}}
                        className="name"
                        color="primary"
                        id="name"
                        defaultValue = {this.state.issue.name}
                        label="Name"
                        placeholder=""
                        multiline
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </span>
                <span className="span">
                    <p className="pe">Description: </p> 
                    <TextField
                        className="fullWidth"
                        color="primary"
                        id="description"
                        defaultValue= {this.state.issue.description}
                        label="Description"
                        placeholder=""
                        required
                        fullWidth
                        multiline
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </span>
                <span className="span">
                    <p className="pe">Possible Causes: </p>
                    <TextField
                        className="fullWidth"
                        color="primary"
                        id="causes"
                        label="Possible Causes"
                        defaultValue={this.state.issue.possibleCauses}
                        placeholder=""
                        fullWidth
                        multiline
                        InputLabelProps={{
                            shrink: true,
                        }}
                    /> 
                </span>
                <span className="span">
                    <p className="pe">Possible Fixes: </p> 
                    <TextField
                        className="fullWidth"
                        color="primary"
                        id="fixes"
                        label="Possible Fixes"
                        defaultValue={this.state.issue.possibleSolutions}
                        placeholder=""
                        fullWidth
                        multiline
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </span>
                <div className="buttons">
                    <SaveButton/>
                    <CancelButton/>
                </div>
            </form>
        );
    }
}

export default withStyles(styles, { withTheme: true })(EditFormClass);
