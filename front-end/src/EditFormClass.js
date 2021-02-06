import React, {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
// import './CreateForm.css'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(2),
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//   },
// }));
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
                    <p>Name: </p> 
                    <TextField
                        style={{width:'50ch'}}
                        className="name"
                        color="primary"
                        id="name"
                        label="Name"
                        defaultValue = {this.state.issue.name}
                        placeholder=""
                        multiline
                        required
                    />
                </span>
                <span className="span">
                    <p>Description: </p> 
                    <TextField
                        className="fullWidth"
                        color="primary"
                        id="description"
                        label="Description"
                        placeholder=""
                        required
                        fullWidth
                        multiline
                    />
                </span>
                <span className="span">
                    <p>Possible Causes: </p>
                    <TextField
                        className="fullWidth"
                        color="primary"
                        id="causes"
                        label="Possible Causes"
                        placeholder=""
                        fullWidth
                        multiline
                    /> 
                </span>
                <span className="span">
                    <p>Possible Fixes: </p> 
                    <TextField
                        className="fullWidth"
                        color="primary"
                        id="fixes"
                        label="Possible Fixes"
                        placeholder=""
                        fullWidth
                        multiline
                    />
                </span> 
                <Button
                    variant="contained"
                    color="primary"
                    style={{borderRadius:"50px", marginTop:"1em"}}
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>   
            </form>
        );
    }
}

export default withStyles(styles, { withTheme: true })(EditFormClass);
