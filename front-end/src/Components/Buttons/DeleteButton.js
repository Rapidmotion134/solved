import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

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
            style={{borderRadius:"50px"}}
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    );
}

export default DeleteButton;