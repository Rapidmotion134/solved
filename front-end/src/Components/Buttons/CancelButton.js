import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';   

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const DeleteButton = () => {
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <Button
            variant="contained"
            color="secondary"
            style={{borderRadius:"50px"}}
            className={classes.button}
            startIcon={<ClearIcon/>}
        >
            Cancel
        </Button>
      </div>
    );
}

export default DeleteButton;