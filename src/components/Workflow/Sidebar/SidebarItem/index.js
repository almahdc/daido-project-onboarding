import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  style: {
    padding: "1em",
    margin: "1em"
  },
  title: {
    textAlign: "center"
  }
}));

export default function SideBarItem({type, onDragItem}) {
  const classes = useStyles();
  return (
    <Paper
      draggable
      className={classes.style}
      color="primary"
      onDragStart={onDragItem}
    >
      <Typography className={classes.title} variant="button" display="block" gutterBottom color="primary">
        {type}
      </Typography>
    </Paper>
  );
}
