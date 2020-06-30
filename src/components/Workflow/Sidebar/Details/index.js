import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// components
import SidebarGroup from "../SidebarGroup";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  sidebar: {
    padding: "1em",
    backgroundColor: "#7FECAF",
    height: "75vh"
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
    borderRadius: "5px"
  }
}));

const inputItems = [
  {name: "Material node"}
];
const inputOutputItems = [
  {name: "Machine Node"},
  {name: "Chemical process node"}
];
const outputItems = [
  {name: "Transportation node"}
];

export default function SidebarDetails({handleDragItem}) {
  const classes = useStyles();

  return (
    <Paper className={classes.sidebar} color="secondary">
      <Typography className={classes.title} variant="h6" color="primary">
        DETAILS
      </Typography>
      <Typography className={classes.label} variant="body2" color="primary">
        TYPE:
      </Typography>
      <Typography className={classes.value} variant="body1" color="primary">
        INPUT
      </Typography><Typography className={classes.label} variant="body2" color="primary">
        NAME:
      </Typography>
      <Typography className={classes.value} variant="body1" color="primary">
        MATERIAL NODE
      </Typography>
      <Typography className={classes.label} variant="body2" color="primary">
        DESCRIPTION:
      </Typography>
      <Typography className={classes.value} variant="body1" color="primary">
        {"PLACEHOLDER LONG AF desctiptitonskjdf sdkhjgf jdhsgfjhsdg fkjhsdgf jdsgfjhsdg jfh sgdfgsdjhfg "}
      </Typography>
    </Paper>
  );
}
