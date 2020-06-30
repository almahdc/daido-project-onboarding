import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// components
import {Typography, Button, Grid} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  sidebar: {
    padding: "1em",
    backgroundColor: "#7FECAF",
    height: "75vh",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  label: {
    marginTop: "20px",
    paddingLeft: "10px"
  },
  value: {
    marginTop: "10px",
    paddingLeft: "10px",
    backgroundColor: "#99FFC9",
    borderRadius: "5px",
    padding: "5px",
    minHeight: "2em",
    verticalAlign: "center"
  },
  blank: {
    flex: 1,
    backgroundColor: "transparent"
  },
  cancelButton: {
    backgroundColor: "#ffcccb",
    width: "100%",
    '&:hover': {
      backgroundColor: "#E6B3B2",
    }
  },
  editButton: {
    backgroundColor: "#99FFC9",
    width: "100%",
  }
}));

export default function SidebarDetails({openDialog, closeDetails, type, name, description}) {
  const classes = useStyles();

  const getTitle = () => {
    if(type === "input-only") {
        return "INPUT";
    } else if (type === "input-output") {
        return "PROCESS";
    } else {
        return "OUTPUT";
    }
}

  return (
    <Paper className={classes.sidebar} color="secondary">
      <Typography className={classes.title} variant="h5" color="primary">
        DETAILS
      </Typography>
      <Typography className={classes.label} variant="body2" color="primary">
        TYPE:
      </Typography>
      <Typography className={classes.value} variant="body1" color="primary">
        {getTitle()}
      </Typography><Typography className={classes.label} variant="body2" color="primary">
        NAME:
      </Typography>
      <Typography className={classes.value} variant="body1" color="primary">
        {name}
      </Typography>
      <Typography className={classes.label} variant="body2" color="primary">
        DESCRIPTION:
      </Typography>
      <Typography className={classes.value} variant="body1" color="primary" paragraph>
        {description}
      </Typography>
      <Grid className={classes.blank} />
      <Grid container spacing={1} className={classes.container}>
        <Grid item md={6}>
          <Button className={classes.cancelButton} variant="outlined" color="primary" onClick={closeDetails}>
            CANCEL
          </Button>
        </Grid>
        <Grid item md={6}>
          <Button className={classes.editButton} variant="outlined" color="primary" onClick={openDialog}>
            EDIT
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
