import React, {Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import SaveButton from '../Buttons/SaveButton';
import CancelButton from '../Buttons/CancelButton';
import './CreateForm.css'

const styles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
});

class CreateForm extends Component{
  constructor(props){
      super(props);
      this.state = {
         name : "",
         description : "",
         possibleCauses : "",
         possibleSolutions : "" 
      }
  }

  handleSubmit(event) {
    console.log(event);    
    event.preventDefault();
  }
  

  render(){
    const { classes } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <span className="span">
            <p className="p">Name: </p> 
            <TextField
              style={{width:'50ch'}}
              className="name"
              color="primary"
              id="name"
              label="Name"
              placeholder=""
              multiline
              required
            />
          </span>
          <span className="span">
            <p className="p">Description: </p> 
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
            <p className="p">Possible Causes: </p>
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
            <p className="p">Possible Fixes: </p> 
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
          <div className="buttons">
            <SaveButton onSubmit={this.handleSubmit}/>
            <CancelButton/>
          </div>  
      </form>
    );
  }
}

export default withStyles(styles, { withTheme: true })(CreateForm);
