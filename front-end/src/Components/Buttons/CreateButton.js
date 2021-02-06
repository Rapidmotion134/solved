import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const CreateButton = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
          <Button 
            style={{borderRadius:"50px"}}
            variant="contained" 
            color="primary"
            className={classes.Button}
            startIcon={<Icon>add_circle</Icon>}
          >
            Create
          </Button>
        </div>
    );
}

export default CreateButton;