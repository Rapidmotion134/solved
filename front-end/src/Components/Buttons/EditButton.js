import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const EditButton = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
          <Button 
            style={{borderRadius:"50px"}}
            variant="contained" 
            color="primary"
            className={classes.Button}
            startIcon={<EditIcon/>}
          >
            Edit
          </Button>
        </div>
    );
}

export default EditButton;