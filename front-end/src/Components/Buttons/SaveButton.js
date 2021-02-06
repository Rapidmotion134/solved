import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SaveButton = ({handleSubmit}) => {
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <Button
            type="submit"
            // value="submit"
            // onSubmit={handleSubmit}
            variant="contained"
            color="primary"
            style={{borderRadius:"50px"}}
            className={classes.button}
            startIcon={<SaveIcon />}
        >
            Save
        </Button>
      </div>
    );
}

export default SaveButton;