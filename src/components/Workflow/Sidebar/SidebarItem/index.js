import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  style: {
    padding: "1em",
    margin: "1em"
  }
}));

export default function SideBarItem({type}) {
  const classes = useStyles();
  return (
    <Paper draggable className={classes.style}>
      {type}
    </Paper>
  );
}
